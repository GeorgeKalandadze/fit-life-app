import { router } from 'expo-router';
import { useFormik } from 'formik';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

import { loginValidationSchema, type LoginFormValues } from '@/features/auth/model/auth-form';
import { useLoginMutation } from '@/features/auth/model/auth-query';
import { ApiError } from '@/shared/api/http';
import { AppButton } from '@/shared/ui/app-button';
import { AppInput } from '@/shared/ui/app-input';
import { AppText } from '@/shared/ui/app-text';

export function LoginForm() {
  const loginMutation = useLoginMutation();
  const form = useFormik<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    validateOnChange: false,
    onSubmit: async (values, helpers) => {
      helpers.setStatus(undefined);

      try {
        await loginMutation.mutateAsync({
          email: values.email.trim(),
          password: values.password,
        });

        router.replace('/(tabs)');
      } catch (error) {
        helpers.setStatus(
          error instanceof ApiError ? error.message : 'Unable to sign in right now.'
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
          autoComplete="password"
          error={form.touched.password ? form.errors.password : undefined}
          label="Password"
          onBlur={form.handleBlur('password')}
          onChangeText={form.handleChange('password')}
          placeholder="Enter your password"
          secureTextEntry
          value={form.values.password}
        />

        {typeof form.status === 'string' ? (
          <AppText variant="muted" className="rounded-2xl bg-[#fff1ef] px-4 py-3 text-[#b44337] dark:bg-[#311614] dark:text-[#ffb3aa]">
            {form.status}
          </AppText>
        ) : null}

        <AppButton
          label="Sign in"
          loading={loginMutation.isPending || form.isSubmitting}
          onPress={form.submitForm}
        />

        <View className="flex-row items-center justify-center gap-1 pt-2">
          <AppText variant="muted">New here?</AppText>
          <AppButton
            className="h-auto px-0"
            label="Create account"
            onPress={() => router.push('/register')}
            variant="ghost"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
