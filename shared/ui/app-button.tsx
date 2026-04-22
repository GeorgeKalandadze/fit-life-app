import { ActivityIndicator, Pressable, Text, type PressableProps } from 'react-native';

type AppButtonProps = PressableProps & {
  label: string;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
};

const variants: Record<NonNullable<AppButtonProps['variant']>, string> = {
  primary: 'bg-[#237f39] active:bg-[#1f6531]',
  secondary: 'border border-[#cfe3d0] bg-white active:bg-[#f3f8f3] dark:border-[#2f3d2f] dark:bg-[#171c17] dark:active:bg-[#1f271f]',
  ghost: 'bg-transparent',
};

const textVariants: Record<NonNullable<AppButtonProps['variant']>, string> = {
  primary: 'text-white',
  secondary: 'text-[#152016] dark:text-[#edf6ee]',
  ghost: 'text-[#237f39] dark:text-[#53cb6d]',
};

export function AppButton({
  label,
  loading = false,
  variant = 'primary',
  disabled,
  className,
  ...props
}: AppButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      disabled={isDisabled}
      className={`h-14 flex-row items-center justify-center rounded-[24px] px-6 ${variants[variant]} ${
        isDisabled ? 'opacity-60' : ''
      } ${className ?? ''}`}
      {...props}>
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? '#ffffff' : '#237f39'} />
      ) : (
        <Text className={`text-base font-bold tracking-[0.2px] ${textVariants[variant]}`}>{label}</Text>
      )}
    </Pressable>
  );
}
