import { Stack, useLocalSearchParams } from 'expo-router';
import { useMemo } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { EmptyState } from '@/components/ui/EmptyState';
import { ToolCard } from '@/components/ui/ToolCard';
import { useAppState } from '@/src/hooks/useAppState';
import { useTheme } from '@/src/hooks/useTheme';
import { getToolGroupDefinition, getToolGroup } from '@/src/lib/content/groups';
import { filterTools } from '@/src/lib/content/search';
import type { SortMode, ToolFilters } from '@/src/types/content';

function firstParam(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value[0] ?? '' : value ?? '';
}

function parseSortMode(value: string | string[] | undefined): SortMode {
  const sort = firstParam(value);
  if (sort === 'alphabetical' || sort === 'most-referenced') {
    return sort;
  }
  return 'most-referenced';
}

export default function GroupScreen() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const params = useLocalSearchParams<{
    slug: string;
    q?: string;
    wiki?: string;
    saved?: string;
    sort?: string;
  }>();
  const { manifest, favorites, preferences, refreshState, refreshContent, toggleFavorite } = useAppState();
  const groupSlug = firstParam(params.slug);
  const query = firstParam(params.q);

  const filters = useMemo<ToolFilters>(
    () => ({
      query,
      subdomain: null,
      hasWikiOnly: firstParam(params.wiki) === '1',
      savedOnly: firstParam(params.saved) === '1',
      sort: parseSortMode(params.sort),
    }),
    [params.saved, params.sort, params.wiki, query],
  );

  const baseTools = useMemo(() => filterTools(manifest.tools, filters, favorites), [favorites, filters, manifest.tools]);
  const groupDefinition = useMemo(() => getToolGroupDefinition(groupSlug), [groupSlug]);
  const groupTools = useMemo(() => baseTools.filter((tool) => getToolGroup(tool).key === groupSlug), [baseTools, groupSlug]);
  const title = groupDefinition?.label ?? groupSlug.replace(/-/g, ' ');

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ title }} />
      <ScrollView
        contentContainerStyle={styles.content}
        refreshControl={<RefreshControl refreshing={refreshState.isRefreshing} tintColor={theme.colors.accent} onRefresh={() => refreshContent()} />}>
        <View style={styles.header}>
          <Text style={styles.kicker}>Discovery stack</Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{groupDefinition?.description ?? 'Focused tool phase.'} {groupTools.length} cards in this track.</Text>
        </View>

        {groupTools.length === 0 ? (
          <EmptyState
            title="No cards in this track"
            description="The current filters left this discovery track empty. Go back and choose another track or loosen the filters."
          />
        ) : (
          groupTools.map((tool, index) => (
            <ToolCard
              key={tool.slug}
              dense={preferences.denseList}
              index={index}
              mode="stack"
              onToggleSaved={() => toggleFavorite(tool.slug)}
              saved={favorites.has(tool.slug)}
              tool={tool}
            />
          ))
        )}
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
      paddingHorizontal: theme.spacing.lg,
      paddingTop: theme.spacing.xl,
      paddingBottom: 120,
    },
    header: {
      marginBottom: theme.spacing.lg,
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
    },
    subtitle: {
      color: theme.colors.textMuted,
      fontSize: 14,
      marginTop: theme.spacing.sm,
      lineHeight: 20,
      maxWidth: 620,
    },
  });
