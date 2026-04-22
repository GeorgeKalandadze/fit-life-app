import { router } from 'expo-router';
import { useFormik } from 'formik';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

import {
  registerValidationSchema,
  type RegisterFormValues,
} from '@/features/auth/model/auth-form';
import { useRegisterMutation } from '@/features/auth/model/auth-query';
import { ApiError } from '@/shared/api/http';
import { AppButton } from '@/shared/ui/app-button';
import { AppInput } from '@/shared/ui/app-input';
import { AppText } from '@/shared/ui/app-text';

export function RegisterForm() {
  const registerMutation = useRegisterMutation();
  const form = useFormik<RegisterFormValues>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: registerValidationSchema,
    validateOnChange: false,
    onSubmit: async (values, helpers) => {
      helpers.setStatus(undefined);

      try {
        await registerMutation.mutateAsync({
          name: values.name.trim(),
          email: values.email.trim(),
          password: values.password,
          password_confirmation: values.passwordConfirmation,
        });

        router.replace('/(tabs)');
      } catch (error) {
        helpers.setStatus(
          error instanceof ApiError ? error.message : 'Unable to create your account.'
        );
      } finally {
        helpers.setSubmitting(false);
      }
    },
  });

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View className="gap-4">
        <AppInput
          autoCapitalize="words"
          autoComplete="name"
          error={form.touched.name ? form.errors.name : undefined}
          label="Full name"
          onBlur={form.handleBlur('name')}
          onChangeText={form.handleChange('name')}
          placeholder="Avery Carter"
          value={form.values.name}
        />
        <AppInput
          autoCapitalize="none"
          autoComplete="email"
          error={form.touched.email ? form.errors.email : undefined}
          keyboardType="email-address"
          label="Email"
          onBlur={form.handleBlur('email')}
          onChangeText={form.handleChange('email')}
          placeholder="you@fitlife.app"
          value={form.values.email}
        />
        <AppInput
          autoCapitalize="none"
          autoComplete="new-password"
          error={form.touched.password ? form.errors.password : undefined}
          hint="Use at least 8 characters."
          label="Password"
          onBlur={form.handleBlur('password')}
          onChangeText={form.handleChange('password')}
          placeholder="Create a password"
          secureTextEntry
          value={form.values.password}
        />
        <AppInput
          autoCapitalize="none"
          autoComplete="new-password"
          error={form.touched.passwordConfirmation ? form.errors.passwordConfirmation : undefined}
          label="Confirm password"
          onBlur={form.handleBlur('passwordConfirmation')}
          onChangeText={form.handleChange('passwordConfirmation')}
          placeholder="Repeat your password"
          secureTextEntry
          value={form.values.passwordConfirmation}
        />

        {typeof form.status === 'string' ? (
          <AppText variant="muted" className="rounded-2xl bg-[#fff1ef] px-4 py-3 text-[#b44337] dark:bg-[#311614] dark:text-[#ffb3aa]">
            {form.status}
          </AppText>
        ) : null}

        <AppButton
          label="Create account"
          loading={registerMutation.isPending || form.isSubmitting}
          onPress={form.submitForm}
        />

        <View className="flex-row items-center justify-center gap-1 pt-2">
          <AppText variant="muted">Already have an account?</AppText>
          <AppButton
            className="h-auto px-0"
            label="Sign in"
            onPress={() => router.push('/login')}
            variant="ghost"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
