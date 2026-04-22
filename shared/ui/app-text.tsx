import { Text, type TextProps } from 'react-native';

type AppTextProps = TextProps & {
  variant?: 'body' | 'muted' | 'title' | 'headline' | 'eyebrow' | 'label';
  className?: string;
};

const variants: Record<NonNullable<AppTextProps['variant']>, string> = {
  body: 'text-[15px] leading-6 text-[#152016] dark:text-[#edf6ee]',
  muted: 'text-[15px] leading-6 text-[#5c685b] dark:text-[#9daf9d]',
  title: 'text-4xl font-black tracking-[-1.2px] text-[#152016] dark:text-[#edf6ee]',
  headline: 'text-2xl font-bold tracking-[-0.6px] text-[#152016] dark:text-[#edf6ee]',
  eyebrow: 'text-xs font-semibold uppercase tracking-[2px] text-[#237f39] dark:text-[#53cb6d]',
  label: 'text-sm font-semibold text-[#273128] dark:text-[#d8e5d8]',
};

export function AppText({
  children,
  className,
  variant = 'body',
  ...props
}: AppTextProps) {
  return (
    <Text className={`${variants[variant]} ${className ?? ''}`} {...props}>
      {children}
    </Text>
  );
}
