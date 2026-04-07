import { Pressable, StyleSheet, Text, View } from 'react-native';

import { theme } from '@/src/styles/theme';

export interface ToolGroupCardData {
  key: string;
  label: string;
  count: number;
  teaser: string;
}

export function GroupDeckCard({
  group,
  active,
  index,
  onPress,
}: {
  group: ToolGroupCardData;
  active: boolean;
  index: number;
  onPress: () => void;
}) {
  const rotation = `${((index % 3) - 1) * 0.5}deg`;

  return (
    <Pressable onPress={onPress} style={styles.wrap}>
      <View style={[styles.shadowLayer, active ? styles.shadowLayerActive : undefined]} />
      <View style={[styles.card, active ? styles.cardActive : undefined, { transform: [{ rotate: rotation }] }]}>
        <View style={styles.topRow}>
          <Text style={styles.kicker}>Discovery phase</Text>
          <Text style={styles.count}>{group.count}</Text>
        </View>
        <Text style={styles.title}>{group.label}</Text>
        <Text style={styles.teaser} numberOfLines={2}>
          {group.teaser}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: 132,
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.md,
  },
  shadowLayer: {
    position: 'absolute',
    top: 18,
    left: 18,
    right: 18,
    bottom: 10,
    borderRadius: theme.radius.md,
    backgroundColor: '#0d1721',
    borderWidth: 1,
    borderColor: '#294252',
    opacity: 0.45,
  },
  shadowLayerActive: {
    opacity: 0.85,
  },
  card: {
    backgroundColor: theme.colors.panelAlt,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing.lg,
    opacity: 0.7,
  },
  cardActive: {
    opacity: 1,
    borderColor: theme.colors.accentWarm,
    backgroundColor: '#192937',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.sm,
  },
  kicker: {
    color: theme.colors.accentWarm,
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 0.9,
    fontWeight: '700',
  },
  count: {
    color: theme.colors.text,
    fontSize: 22,
    fontWeight: '700',
  },
  title: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  teaser: {
    color: theme.colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
  },
});
