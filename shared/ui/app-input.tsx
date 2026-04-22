import { TextInput, View, type TextInputProps } from 'react-native';

import { AppText } from '@/shared/ui/app-text';

type AppInputProps = TextInputProps & {
  label: string;
  hint?: string;
  error?: string;
};

export function AppInput({ label, hint, error, className, ...props }: AppInputProps) {
  return (
    <View className="gap-2">
      <AppText variant="label">{label}</AppText>
      <TextInput
        placeholderTextColor="#7b877a"
        className={`h-14 rounded-[22px] border border-[#d8e5d8] bg-white px-4 text-[15px] text-[#152016] dark:border-[#293329] dark:bg-[#171c17] dark:text-[#edf6ee] ${className ?? ''}`}
        {...props}
      />
      {error ? <AppText variant="muted" className="text-[#c1493d] dark:text-[#ff948b]">{error}</AppText> : null}
      {!error && hint ? <AppText variant="muted">{hint}</AppText> : null}
    </View>
  );
}
