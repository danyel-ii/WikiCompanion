import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Pill } from '@/components/ui/Pill';
import { getToolGroup } from '@/src/lib/content/groups';
import { theme } from '@/src/styles/theme';
import type { ToolRecord } from '@/src/types/content';

export function ToolCard({
  tool,
  dense,
  index,
  mode = 'stack',
  focused = true,
  saved,
  onToggleSaved,
}: {
  tool: ToolRecord;
  dense: boolean;
  index: number;
  mode?: 'stack' | 'deck';
  focused?: boolean;
  saved: boolean;
  onToggleSaved: () => void;
}) {
  const router = useRouter();
  const group = getToolGroup(tool);
  const rotation = `${((index % 5) - 2) * 0.6}deg`;
  const offset = mode === 'stack' && index !== 0 ? -Math.min(34, 12 + (index % 4) * 4) : 0;
  const deckRotation = `${((index % 3) - 1) * 0.3}deg`;

  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => router.push({ pathname: '/tool/[slug]', params: { slug: tool.slug } })}
      style={[
        styles.cardWrap,
        { marginTop: offset, zIndex: 1000 - index },
        mode === 'deck' ? styles.cardWrapDeck : undefined,
      ]}>
      <View
        style={[
          styles.backLayer,
          mode === 'deck' ? styles.backLayerDeck : undefined,
          !focused ? styles.backLayerMuted : undefined,
          { transform: [{ rotate: mode === 'deck' ? deckRotation : `${(index % 3) * 0.4 - 0.4}deg` }] },
        ]}
      />
      <View
        style={[
          styles.backLayerSecondary,
          mode === 'deck' ? styles.backLayerSecondaryDeck : undefined,
          !focused ? styles.backLayerMuted : undefined,
          { transform: [{ rotate: mode === 'deck' ? `${((index + 1) % 3) * -0.2}deg` : `${((index + 1) % 3) * -0.45}deg` }] },
        ]}
      />
      <Pressable
        accessibilityRole="button"
        onPress={() => router.push({ pathname: '/tool/[slug]', params: { slug: tool.slug } })}
        style={[
          styles.card,
          dense ? styles.cardDense : undefined,
          mode === 'deck' ? styles.cardDeck : undefined,
          !focused ? styles.cardMuted : undefined,
          { transform: [{ rotate: mode === 'deck' ? deckRotation : rotation }] },
        ]}>
        <View style={styles.cardHeader}>
          <View style={styles.postmark}>
            <Text style={styles.postmarkLabel}>Atlas card</Text>
          </View>
          <Text style={styles.inspectLabel}>Inspect</Text>
        </View>

        <View style={styles.topRow}>
          <View style={styles.headerBlock}>
            <Text style={styles.title}>{tool.displayName}</Text>
            <Text style={styles.summary} numberOfLines={dense ? 2 : 3}>
              {tool.summary}
            </Text>
          </View>
          <Pressable
            accessibilityLabel={saved ? `Remove ${tool.displayName} from saved tools` : `Save ${tool.displayName}`}
            onPress={(event) => {
              event.stopPropagation();
              onToggleSaved();
            }}
            style={styles.saveButton}>
            <Text style={[styles.saveLabel, saved ? styles.saveLabelActive : undefined]}>{saved ? 'Saved' : 'Save'}</Text>
          </Pressable>
        </View>

        <View style={styles.rule} />

        <View style={styles.metaBand}>
          <View>
            <Text style={styles.metaCaption}>References</Text>
            <Text style={styles.metaValue}>{tool.referenceCount}</Text>
          </View>
          <View>
            <Text style={styles.metaCaption}>Wiki</Text>
            <Text style={styles.metaValue}>{tool.wikiStatus === 'ready' ? 'Ready' : 'Pending'}</Text>
          </View>
          <View style={styles.topicBlock}>
            <Text style={styles.metaCaption}>Track</Text>
            <Text style={styles.metaValue}>{group.label}</Text>
          </View>
        </View>

        <View style={styles.pillRow}>
          <Pill key={group.key} label={group.label} />
          {tool.subdomains.slice(0, dense ? 2 : 3).map((subdomain) => (
            <Pill key={subdomain} label={subdomain} />
          ))}
          {tool.aliases.slice(0, dense ? 1 : 2).map((alias) => (
            <Pill key={alias} label={alias} />
          ))}
        </View>

        <View style={styles.footerRow}>
          <Text style={styles.footerText}>Tap to open the article</Text>
          <Text style={styles.footerSlug}>{tool.slug}</Text>
        </View>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardWrap: {
    position: 'relative',
    marginBottom: theme.spacing.lg,
  },
  cardWrapDeck: {
    marginBottom: 0,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.lg,
  },
  backLayer: {
    position: 'absolute',
    top: 10,
    left: 8,
    right: 8,
    bottom: -6,
    borderRadius: theme.radius.lg,
    backgroundColor: '#0d1822',
    borderWidth: 1,
    borderColor: '#274255',
  },
  backLayerDeck: {
    top: 18,
    left: 22,
    right: 22,
    bottom: 6,
  },
  backLayerSecondary: {
    position: 'absolute',
    top: 18,
    left: 15,
    right: 15,
    bottom: -12,
    borderRadius: theme.radius.lg,
    backgroundColor: '#0b131b',
    borderWidth: 1,
    borderColor: '#1b2c38',
  },
  backLayerSecondaryDeck: {
    top: 10,
    left: 14,
    right: 14,
    bottom: 0,
  },
  backLayerMuted: {
    opacity: 0.45,
  },
  card: {
    backgroundColor: theme.colors.panelWarm,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: '#a8936f',
    padding: theme.spacing.lg,
  },
  cardDeck: {
    minHeight: 280,
    justifyContent: 'space-between',
  },
  cardDense: {
    padding: theme.spacing.md,
  },
  cardMuted: {
    opacity: 0.72,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  postmark: {
    borderWidth: 1,
    borderColor: '#b39b73',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: 'rgba(255,255,255,0.16)',
  },
  postmarkLabel: {
    color: theme.colors.textDark,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.9,
    fontWeight: '700',
  },
  inspectLabel: {
    color: '#60482d',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1.1,
    fontWeight: '700',
  },
  topRow: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  headerBlock: {
    flex: 1,
  },
  title: {
    color: theme.colors.textDark,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 6,
  },
  summary: {
    color: '#334251',
    fontSize: 14,
    lineHeight: 22,
  },
  saveButton: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#ad946a',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  saveLabel: {
    color: '#5a472c',
    fontSize: 13,
    fontWeight: '600',
  },
  saveLabelActive: {
    color: '#352615',
  },
  rule: {
    height: 1,
    backgroundColor: '#b59a70',
    opacity: 0.8,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  metaBand: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.md,
  },
  metaCaption: {
    color: '#68533a',
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 0.9,
    marginBottom: 4,
    fontWeight: '700',
  },
  metaValue: {
    color: theme.colors.textDark,
    fontSize: 15,
    fontWeight: '700',
  },
  topicBlock: {
    flex: 1,
    alignItems: 'flex-end',
  },
  pillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: theme.spacing.md,
  },
  footerRow: {
    marginTop: theme.spacing.sm,
    paddingTop: theme.spacing.sm,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#b59a70',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    color: '#5e4a31',
    fontSize: 12,
    fontWeight: '600',
  },
  footerSlug: {
    color: '#7a6242',
    fontSize: 11,
  },
});
