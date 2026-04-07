import * as WebBrowser from 'expo-web-browser';
import { Redirect, Stack } from 'expo-router';
import { Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import editorialManifest from '@/content/generated/tools-editorial-manifest.json';
import { MetadataRow } from '@/components/ui/MetadataRow';
import { SectionCard } from '@/components/ui/SectionCard';
import { useTheme } from '@/src/hooks/useTheme';

const sourceRepo = 'https://github.com/danyel-ii/WikiCompanion';

export default function AdminScreen() {
  const theme = useTheme();

  if (Platform.OS !== 'web') {
    return <Redirect href="/" />;
  }

  const styles = createStyles(theme);
  const tools = editorialManifest.tools;
  const readyWikiCount = tools.filter((tool) => tool.wikiStatus === 'ready').length;
  const llmCount = tools.filter((tool) => tool.articleMode === 'llm').length;
  const templateCount = tools.length - llmCount;
  const lowConfidence = [...tools]
    .filter((tool) => tool.confidence < 0.65)
    .sort((left, right) => left.confidence - right.confidence || right.referenceCount - left.referenceCount)
    .slice(0, 12);
  const heavySourceTools = [...tools]
    .sort((left, right) => right.sourceSkills.length - left.sourceSkills.length || left.displayName.localeCompare(right.displayName))
    .slice(0, 12);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ title: 'Editorial Admin' }} />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.kicker}>Desktop admin</Text>
        <Text style={styles.title}>Editorial workspace</Text>
        <Text style={styles.subtitle}>
          This surface stays out of the native bundle path. It is for source inspection, dossier review, wiki operations, and pipeline maintenance.
        </Text>

        <SectionCard title="Snapshot">
          <MetadataRow label="Editorial manifest" value={editorialManifest.version} />
          <MetadataRow label="Generated" value={new Date(editorialManifest.generatedAt).toLocaleString()} />
          <MetadataRow label="Tools" value={String(editorialManifest.toolCount)} />
          <MetadataRow label="Wiki-ready" value={String(readyWikiCount)} />
          <MetadataRow label="LLM articles" value={String(llmCount)} />
          <MetadataRow label="Template articles" value={String(templateCount)} />
        </SectionCard>

        <SectionCard title="Pipeline">
          <Text style={styles.command}>npm run content:all</Text>
          <Text style={styles.command}>npm run knowledge:wiki:openai -- --limit 25</Text>
          <Text style={styles.command}>npm run wiki:site</Text>
          <Text style={styles.command}>npm run build:android:release</Text>
          <Pressable onPress={() => WebBrowser.openBrowserAsync(sourceRepo)} style={styles.actionButton}>
            <Text style={styles.actionLabel}>Open repo and workflows</Text>
          </Pressable>
        </SectionCard>

        <SectionCard title="Low-confidence tools">
          {lowConfidence.map((tool) => (
            <View key={tool.slug} style={styles.listRow}>
              <View style={styles.listHeader}>
                <Text style={styles.rowTitle}>{tool.displayName}</Text>
                <Text style={styles.rowMeta}>{tool.confidence.toFixed(2)}</Text>
              </View>
              <Text style={styles.rowBody} numberOfLines={3}>
                {tool.summary}
              </Text>
            </View>
          ))}
        </SectionCard>

        <SectionCard title="Heaviest source packets">
          {heavySourceTools.map((tool) => (
            <View key={tool.slug} style={styles.listRow}>
              <View style={styles.listHeader}>
                <Text style={styles.rowTitle}>{tool.displayName}</Text>
                <Text style={styles.rowMeta}>{tool.sourceSkills.length} skills</Text>
              </View>
              <Text style={styles.rowBody} numberOfLines={2}>
                {tool.sourceSkills.slice(0, 3).map((skill) => skill.title).join(' · ')}
              </Text>
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
    kicker: {
      color: theme.colors.accentWarm,
      textTransform: 'uppercase',
      letterSpacing: 1,
      fontSize: 12,
      marginBottom: 8,
    },
    title: {
      color: theme.colors.text,
      fontSize: 30,
      lineHeight: 36,
      fontWeight: '700',
      marginBottom: theme.spacing.sm,
    },
    subtitle: {
      color: theme.colors.textMuted,
      fontSize: 14,
      lineHeight: 20,
      marginBottom: theme.spacing.lg,
    },
    command: {
      color: theme.colors.text,
      backgroundColor: theme.colors.backgroundRaised,
      borderRadius: theme.radius.sm,
      borderWidth: 1,
      borderColor: theme.colors.border,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      marginBottom: theme.spacing.sm,
      fontFamily: 'monospace',
    },
    actionButton: {
      marginTop: theme.spacing.sm,
      borderRadius: theme.radius.sm,
      borderWidth: 1,
      borderColor: theme.colors.border,
      padding: theme.spacing.md,
    },
    actionLabel: {
      color: theme.colors.text,
      textAlign: 'center',
      fontWeight: '700',
    },
    listRow: {
      paddingVertical: theme.spacing.sm,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: theme.colors.border,
    },
    listHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: theme.spacing.md,
      marginBottom: 6,
    },
    rowTitle: {
      flex: 1,
      color: theme.colors.text,
      fontSize: 15,
      fontWeight: '700',
    },
    rowMeta: {
      color: theme.colors.textMuted,
      fontSize: 12,
    },
    rowBody: {
      color: theme.colors.textMuted,
      fontSize: 13,
      lineHeight: 19,
    },
  });
