import { Link } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.eyebrow}>Fit Life</Text>
          <Text style={styles.title}>Boot screen is rendering.</Text>
          <Text style={styles.description}>
            If you can see this green screen, app boot is fine and the issue is inside the auth UI layer.
          </Text>

          <Link href="/login" asChild>
            <Pressable style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Open login route</Text>
            </Pressable>
          </Link>

          <Link href="/register" asChild>
            <Pressable style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Open register route</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#eef8ef',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    borderRadius: 28,
    backgroundColor: '#237f39',
    padding: 24,
    gap: 16,
  },
  eyebrow: {
    color: '#d9f6df',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  title: {
    color: '#ffffff',
    fontSize: 34,
    fontWeight: '800',
  },
  description: {
    color: '#edf8ef',
    fontSize: 16,
    lineHeight: 24,
  },
  primaryButton: {
    borderRadius: 20,
    backgroundColor: '#ffffff',
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  primaryButtonText: {
    color: '#18582a',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  secondaryButton: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#9ad4a7',
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  secondaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});
