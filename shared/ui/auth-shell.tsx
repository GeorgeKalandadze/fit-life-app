import { View, type ViewProps } from 'react-native';

import { AppLogo } from '@/shared/ui/app-logo';
import { AppText } from '@/shared/ui/app-text';
import { Screen } from '@/shared/ui/screen';

type AuthShellProps = ViewProps & {
  eyebrow: string;
  title: string;
  description: string;
};

export function AuthShell({
  eyebrow,
  title,
  description,
  children,
  className,
  ...props
}: AuthShellProps) {
  return (
    <Screen contentClassName="justify-center py-8">
      <View className="mb-8 gap-5">
        <View className="flex-row items-center justify-between rounded-[30px] border border-[#d6e7d7] bg-[#ecf7ee] px-5 py-4 dark:border-[#243024] dark:bg-[#142015]">
          <View className="max-w-[72%] gap-2">
            <AppText variant="eyebrow">{eyebrow}</AppText>
            <AppText variant="muted" className="text-sm">
              Calm structure. Strong habits. Clean progress.
            </AppText>
          </View>
          <AppLogo />
        </View>

        <View className="gap-3">
          <AppText variant="title">{title}</AppText>
          <AppText variant="muted">{description}</AppText>
        </View>
      </View>

      <View
        className={`rounded-[32px] border border-[#d8e5d8] bg-white px-5 py-5 shadow-sm dark:border-[#293329] dark:bg-[#171c17] ${className ?? ''}`}
        {...props}>
        {children}
      </View>
    </Screen>
  );
}
