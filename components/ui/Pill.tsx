import { Pressable, StyleSheet, Text } from 'react-native';

import { theme } from '@/src/styles/theme';

interface PillProps {
  label: string;
  active?: boolean;
  onPress?: () => void;
}

export function Pill({ label, active, onPress }: PillProps) {
  return (
    <Pressable
      accessibilityRole={onPress ? 'button' : undefined}
      onPress={onPress}
      style={[styles.base, active ? styles.active : styles.inactive]}>
      <Text style={[styles.label, active ? styles.labelActive : undefined]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: theme.colors.border,
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginRight: 8,
    marginBottom: 8,
  },
  active: {
    backgroundColor: theme.colors.accentSoft,
    borderColor: theme.colors.accent,
  },
  inactive: {
    backgroundColor: theme.colors.panel,
  },
  label: {
    color: theme.colors.textMuted,
    fontSize: 13,
    fontWeight: '600',
  },
  labelActive: {
    color: theme.colors.text,
  },
});
