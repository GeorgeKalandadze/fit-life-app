import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View, type ScrollViewProps, type ViewProps } from 'react-native';

type ScreenProps = ScrollViewProps & {
  contentClassName?: string;
};

export function Screen({ children, contentClassName, ...props }: ScreenProps) {
  return (
    <View className="flex-1 bg-[#f7faf6] dark:bg-[#0d110d]">
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          className="flex-1"
          contentContainerClassName={`flex-grow px-5 py-4 ${contentClassName ?? ''}`}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          {...props}>
          {children}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export function ScreenSection({ children, className, ...props }: ViewProps & { className?: string }) {
  return (
    <View className={className} {...props}>
      {children}
    </View>
  );
}
