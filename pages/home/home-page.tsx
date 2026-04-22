import { useQueryClient } from '@tanstack/react-query';
import { router } from 'expo-router';
import { View } from 'react-native';

import { authKeys } from '@/features/auth/model/auth-query';
import type { AuthSession } from '@/features/auth/api/auth-api';
import { AppButton } from '@/shared/ui/app-button';
import { AppText } from '@/shared/ui/app-text';
import { Screen } from '@/shared/ui/screen';

export function HomePage() {
  const queryClient = useQueryClient();
  const session = queryClient.getQueryData<AuthSession>(authKeys.session);

  function signOut() {
    queryClient.removeQueries({ queryKey: authKeys.session });
    router.replace('/login');
  }

  return (
    <Screen contentClassName="justify-center gap-6 py-10">
      <View className="gap-3 rounded-[32px] border border-[#d6e7d7] bg-[#ecf7ee] p-6 dark:border-[#243024] dark:bg-[#142015]">
        <AppText variant="eyebrow">Dashboard</AppText>
        <AppText variant="title" className="text-[34px]">
          {session ? `Welcome, ${session.user.name.split(' ')[0]}` : 'Welcome to Fit Life'}
        </AppText>
        <AppText variant="muted">
          Your auth flow is now routed through reusable FSD slices and powered by React Query mutations.
        </AppText>
      </View>

      <View className="gap-4 rounded-[28px] border border-[#d8e5d8] bg-white p-6 dark:border-[#293329] dark:bg-[#171c17]">
        <AppText variant="headline">What’s set up</AppText>
        <AppText variant="muted">Primary color is green, auth screens are modular, and query state is centralized.</AppText>
        <AppButton label="Sign out" onPress={signOut} variant="secondary" />
      </View>
    </Screen>
  );
}
