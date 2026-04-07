import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';

import { theme } from '@/src/styles/theme';

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Route not found</Text>
      <Pressable onPress={() => router.replace('/')} style={styles.linkButton}>
        <Text style={styles.link}>Return to the atlas</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
  title: {
    color: theme.colors.text,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: theme.spacing.md,
  },
  link: {
    color: theme.colors.accent,
    fontSize: 16,
  },
  linkButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});
