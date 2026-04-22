import { router } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

import { useLoginMutation } from '@/features/auth/model/auth-query';
import { ApiError } from '@/shared/api/http';
import { AppButton } from '@/shared/ui/app-button';
import { AppInput } from '@/shared/ui/app-input';
import { AppText } from '@/shared/ui/app-text';

export function LoginForm() {
  const loginMutation = useLoginMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState<string | null>(null);

  async function submit() {
    setFormError(null);

    if (!email.trim() || !password.trim()) {
      setFormError('Email and password are required.');
      return;
    }

    try {
      await loginMutation.mutateAsync({
        email: email.trim(),
        password,
      });

      router.replace('/(tabs)');
    } catch (error) {
      setFormError(error instanceof ApiError ? error.message : 'Unable to sign in right now.');
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View className="gap-4">
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
          autoComplete="password"
          label="Password"
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
        />

        {formError ? (
          <AppText variant="muted" className="rounded-2xl bg-[#fff1ef] px-4 py-3 text-[#b44337] dark:bg-[#311614] dark:text-[#ffb3aa]">
            {formError}
          </AppText>
        ) : null}

        <AppButton label="Sign in" loading={loginMutation.isPending} onPress={submit} />

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
