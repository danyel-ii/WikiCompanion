import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { useNavigationHistory } from '@/src/hooks/useNavigationHistory';
import { useTheme } from '@/src/hooks/useTheme';

export function HeaderNavControls() {
  const router = useRouter();
  const theme = useTheme();
  const styles = createStyles(theme);
  const { canGoBack, canGoForward, goBack, goForward } = useNavigationHistory();

  return (
    <View style={styles.row}>
      <Pressable
        accessibilityLabel="Go back"
        accessibilityRole="button"
        disabled={!canGoBack}
        onPress={goBack}
        style={[styles.button, !canGoBack ? styles.buttonDisabled : undefined]}>
        <FontAwesome6 color={canGoBack ? theme.colors.text : theme.colors.textMuted} name="chevron-left" size={14} />
      </Pressable>
      <Pressable
        accessibilityLabel="Go forward"
        accessibilityRole="button"
        disabled={!canGoForward}
        onPress={goForward}
        style={[styles.button, !canGoForward ? styles.buttonDisabled : undefined]}>
        <FontAwesome6 color={canGoForward ? theme.colors.text : theme.colors.textMuted} name="chevron-right" size={14} />
      </Pressable>
      <Pressable
        accessibilityLabel="Search tools"
        accessibilityRole="button"
        onPress={() => router.push('/search')}
        style={styles.button}>
        <FontAwesome6 color={theme.colors.text} name="magnifying-glass" size={14} />
      </Pressable>
    </View>
  );
}

const createStyles = (theme: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
      gap: theme.spacing.sm,
      alignItems: 'center',
    },
    button: {
      width: 34,
      height: 34,
      borderRadius: 999,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.panel,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    buttonDisabled: {
      opacity: 0.45,
    },
  });
