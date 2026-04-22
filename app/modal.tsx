import { Link } from 'expo-router';
import { View } from 'react-native';

import { AppText } from '@/shared/ui/app-text';
import { Screen } from '@/shared/ui/screen';

export default function ModalScreen() {
  return (
    <Screen contentClassName="justify-center">
      <View className="gap-5 rounded-[32px] border border-[#d8e5d8] bg-white p-6 dark:border-[#293329] dark:bg-[#171c17]">
        <AppText variant="headline">Modal</AppText>
        <AppText variant="muted">Use this route for focused flows that should sit above the main app stack.</AppText>
        <Link dismissTo href="/">
          <AppText variant="body" className="font-semibold text-[#237f39] dark:text-[#53cb6d]">
            Back to start
          </AppText>
        </Link>
      </View>
    </Screen>
  );
}
