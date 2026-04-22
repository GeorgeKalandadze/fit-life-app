import { router } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

import { useRegisterMutation } from '@/features/auth/model/auth-query';
import { ApiError } from '@/shared/api/http';
import { AppButton } from '@/shared/ui/app-button';
import { AppInput } from '@/shared/ui/app-input';
import { AppText } from '@/shared/ui/app-text';

export function RegisterForm() {
  const registerMutation = useRegisterMutation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [formError, setFormError] = useState<string | null>(null);

  async function submit() {
    setFormError(null);

    if (!name.trim() || !email.trim() || !password || !passwordConfirmation) {
      setFormError('All fields are required.');
      return;
    }

    if (password !== passwordConfirmation) {
      setFormError('Passwords do not match.');
      return;
    }

    try {
      await registerMutation.mutateAsync({
        name: name.trim(),
        email: email.trim(),
        password,
        password_confirmation: passwordConfirmation,
      });

      router.replace('/(tabs)');
    } catch (error) {
      setFormError(error instanceof ApiError ? error.message : 'Unable to create your account.');
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View className="gap-4">
        <AppInput
          autoCapitalize="words"
          autoComplete="name"
          label="Full name"
          onChangeText={setName}
          placeholder="Avery Carter"
          value={name}
        />
        <AppInput
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
          label="Email"
          onChangeText={setEmail}
          placeholder="you@fitlife.app"
          value={email}
        />
        <AppInput
          autoCapitalize="none"
          autoComplete="new-password"
          hint="Use at least 8 characters."
          label="Password"
          onChangeText={setPassword}
          placeholder="Create a password"
          secureTextEntry
          value={password}
        />
        <AppInput
          autoCapitalize="none"
          autoComplete="new-password"
          label="Confirm password"
          onChangeText={setPasswordConfirmation}
          placeholder="Repeat your password"
          secureTextEntry
          value={passwordConfirmation}
        />

        {formError ? (
          <AppText variant="muted" className="rounded-2xl bg-[#fff1ef] px-4 py-3 text-[#b44337] dark:bg-[#311614] dark:text-[#ffb3aa]">
            {formError}
          </AppText>
        ) : null}

        <AppButton label="Create account" loading={registerMutation.isPending} onPress={submit} />

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
