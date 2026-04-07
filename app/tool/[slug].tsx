import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import * as WebBrowser from 'expo-web-browser';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { ArticleMarkdown } from '@/components/article/ArticleMarkdown';
import { EmptyState } from '@/components/ui/EmptyState';
import { MetadataRow } from '@/components/ui/MetadataRow';
import { Pill } from '@/components/ui/Pill';
import { SectionCard } from '@/components/ui/SectionCard';
import { useAppState } from '@/src/hooks/useAppState';
import { useTheme } from '@/src/hooks/useTheme';

export default function ToolDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const theme = useTheme();
  const styles = createStyles(theme);
  const { manifest, favorites, toggleFavorite } = useAppState();
  const tool = manifest.tools.find((entry) => entry.slug === slug);

  if (!tool) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <EmptyState title="Tool not found" description="The requested tool slug is missing from the current manifest snapshot." />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ title: tool.displayName }} />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.heroCard}>
          <View style={styles.heroTopRow}>
            <Text style={styles.heroKicker}>Pulled from the atlas stack</Text>
            <Text style={styles.heroSlug}>{tool.slug}</Text>
          </View>
          <Text style={styles.title}>{tool.displayName}</Text>
          <Text style={styles.summary}>{tool.summary}</Text>

          <View style={styles.heroMetaRow}>
            <View>
              <Text style={styles.heroMetaCaption}>References</Text>
              <Text style={styles.heroMetaValue}>{tool.referenceCount}</Text>
            </View>
            <View>
              <Text style={styles.heroMetaCaption}>Wiki</Text>
              <Text style={styles.heroMetaValue}>{tool.wikiStatus === 'ready' ? 'Ready' : 'Pending'}</Text>
            </View>
            <View>
              <Text style={styles.heroMetaCaption}>Confidence</Text>
              <Text style={styles.heroMetaValue}>{tool.confidence.toFixed(2)}</Text>
            </View>
          </View>

          <View style={styles.actionRow}>
            <Pressable onPress={() => toggleFavorite(tool.slug)} style={styles.primaryButton}>
              <FontAwesome6 color={theme.colors.textDark} name="bookmark" size={14} />
              <Text style={styles.primaryButtonText}>{favorites.has(tool.slug) ? 'Saved' : 'Save tool'}</Text>
            </Pressable>
            <Pressable
              disabled={!tool.wikiUrl}
              onPress={() => tool.wikiUrl && WebBrowser.openBrowserAsync(tool.wikiUrl)}
              style={[styles.secondaryButton, !tool.wikiUrl ? styles.secondaryButtonDisabled : undefined]}>
              <Text style={styles.secondaryButtonText}>{tool.wikiUrl ? 'Open wiki article' : 'Wiki article coming soon'}</Text>
            </Pressable>
          </View>
        </View>

        <SectionCard title="Essay">
          <ArticleMarkdown markdown={tool.articleMarkdown} />
        </SectionCard>

        <SectionCard title="Metadata">
          <MetadataRow label="Topics" value={tool.topics.join(', ') || 'Unspecified'} />
          <MetadataRow label="Subdomains" value={tool.subdomains.join(', ') || 'Unspecified'} />
          <MetadataRow label="Aliases" value={tool.aliases.join(', ') || 'None listed'} />
          <MetadataRow label="Reference count" value={String(tool.referenceCount)} />
          <MetadataRow label="Article mode" value={tool.articleMode} />
          <MetadataRow label="Confidence" value={tool.confidence.toFixed(2)} />
          <MetadataRow label="Generated" value={new Date(tool.generatedAt).toLocaleString()} />
        </SectionCard>

        <SectionCard title="Related skills">
          {tool.sourceSkills.map((skill) => (
            <View key={skill.slug} style={styles.skillRow}>
              <Text style={styles.skillTitle}>{skill.title}</Text>
              <Text style={styles.skillDescription}>{skill.description}</Text>
              <View style={styles.skillPills}>
                {skill.subdomain ? <Pill label={skill.subdomain} /> : null}
                <Pill label={`confidence ${skill.confidence?.toFixed(2) ?? 'n/a'}`} />
              </View>
            </View>
          ))}
        </SectionCard>
      </ScrollView>
    </SafeAreaView>
  );
}

const createStyles = (theme: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    content: {
      padding: theme.spacing.lg,
      paddingBottom: 120,
    },
    heroCard: {
      backgroundColor: theme.colors.panelWarm,
      borderRadius: theme.radius.lg,
      borderWidth: 1,
      borderColor: theme.colors.accentWarm,
      padding: theme.spacing.lg,
      marginBottom: theme.spacing.lg,
    },
    heroTopRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.sm,
    },
    heroKicker: {
      color: theme.colors.textDark,
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: 1,
      fontWeight: '700',
    },
    heroSlug: {
      color: theme.colors.textDark,
      fontSize: 11,
    },
    title: {
      color: theme.colors.textDark,
      fontSize: 32,
      fontWeight: '700',
      marginBottom: theme.spacing.sm,
    },
    summary: {
      color: theme.colors.textDark,
      fontSize: 16,
      lineHeight: 24,
      marginBottom: theme.spacing.lg,
    },
    heroMetaRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: theme.spacing.lg,
      gap: theme.spacing.md,
    },
    heroMetaCaption: {
      color: theme.colors.textDark,
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: 0.8,
      marginBottom: 4,
      fontWeight: '700',
    },
    heroMetaValue: {
      color: theme.colors.textDark,
      fontSize: 16,
      fontWeight: '700',
    },
    actionRow: {
      flexDirection: 'row',
      gap: theme.spacing.md,
    },
    primaryButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      backgroundColor: 'rgba(255,255,255,0.22)',
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.md,
      borderRadius: theme.radius.sm,
      borderWidth: 1,
      borderColor: theme.colors.accentWarm,
    },
    primaryButtonText: {
      color: theme.colors.textDark,
      fontWeight: '700',
    },
    secondaryButton: {
      flex: 1,
      borderWidth: 1,
      borderColor: theme.colors.accentWarm,
      borderRadius: theme.radius.sm,
      justifyContent: 'center',
      paddingHorizontal: theme.spacing.md,
    },
    secondaryButtonDisabled: {
      opacity: 0.7,
    },
    secondaryButtonText: {
      color: theme.colors.textDark,
      textAlign: 'center',
      fontWeight: '600',
    },
    skillRow: {
      paddingVertical: theme.spacing.sm,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: theme.colors.border,
    },
    skillTitle: {
      color: theme.colors.text,
      fontSize: 15,
      fontWeight: '700',
      marginBottom: 6,
    },
    skillDescription: {
      color: theme.colors.textMuted,
      fontSize: 14,
      lineHeight: 20,
    },
    skillPills: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: theme.spacing.sm,
    },
  });
