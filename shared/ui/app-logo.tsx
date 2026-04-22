import { View } from 'react-native';

import { AppText } from '@/shared/ui/app-text';

export function AppLogo() {
  return (
    <View className="h-16 w-16 items-center justify-center rounded-[22px] bg-[#237f39]">
      <AppText variant="headline" className="text-white">
        FL
      </AppText>
    </View>
  );
}
