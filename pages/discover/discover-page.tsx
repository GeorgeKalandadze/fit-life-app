import { View } from 'react-native';

import { AppText } from '@/shared/ui/app-text';
import { Screen } from '@/shared/ui/screen';

const principles = [
  'Feature-first slices for auth UI, model, and API logic.',
  'Shared primitives for buttons, inputs, typography, and screen shells.',
  'React Query provider, online handling, and mutation-based auth actions.',
];

export function DiscoverPage() {
  return (
    <Screen contentClassName="gap-4 py-8">
      <View className="gap-3 rounded-[32px] border border-[#d8e5d8] bg-white p-6 dark:border-[#293329] dark:bg-[#171c17]">
        <AppText variant="eyebrow">Architecture</AppText>
        <AppText variant="headline">Why it is structured this way</AppText>
        <AppText variant="muted">
          The route files stay thin while reusable and business-oriented code lives lower in the FSD layers.
        </AppText>
      </View>

      {principles.map((principle) => (
        <View
          key={principle}
          className="rounded-[28px] border border-[#d8e5d8] bg-[#f2f7f2] p-5 dark:border-[#293329] dark:bg-[#141b14]">
          <AppText variant="body">{principle}</AppText>
        </View>
      ))}
    </Screen>
  );
}
