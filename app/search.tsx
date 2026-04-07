import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { EmptyState } from '@/components/ui/EmptyState';
import { SearchInput } from '@/components/ui/SearchInput';
import { useAppState } from '@/src/hooks/useAppState';
import { useTheme } from '@/src/hooks/useTheme';
import { searchTools } from '@/src/lib/content/search';
import type { MobileToolRecord } from '@/src/types/content';

function firstParam(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value[0] ?? '' : value ?? '';
}

function sectionedResults(tools: MobileToolRecord[], query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return { exact: [] as MobileToolRecord[], fuzzy: [] as MobileToolRecord[] };
  }

  const exact = tools.filter((tool) => {
    const candidates = [tool.displayName, tool.slug, ...tool.aliases].map((item) => item.toLowerCase());
    return candidates.some((candidate) => candidate === normalized || candidate.startsWith(normalized));
  });

  const exactSlugs = new Set(exact.map((tool) => tool.slug));
  return {
    exact,
    fuzzy: tools.filter((tool) => !exactSlugs.has(tool.slug)),
  };
}

export default function SearchScreen() {
  const router = useRouter();
  const theme = useTheme();
  const styles = createStyles(theme);
  const params = useLocalSearchParams<{ q?: string }>();
  const initialQuery = firstParam(params.q);
  const [query, setQuery] = useState(initialQuery);
  const { manifest, favorites, toggleFavorite } = useAppState();

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const results = useMemo(() => searchTools(manifest.tools, query, 'alphabetical'), [manifest.tools, query]);
  const sections = useMemo(() => sectionedResults(results, query), [query, results]);
  const suggestedTools = useMemo(
    () => manifest.tools.filter((tool) => favorites.has(tool.slug)).sort((left, right) => left.displayName.localeCompare(right.displayName)).slice(0, 8),
    [favorites, manifest.tools],
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ title: 'Search' }} />
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <Text style={styles.title}>Search</Text>
        </View>

        <SearchInput autoFocus onChangeText={setQuery} placeholder="Direct search by tool, alias, slug, topic" value={query} />

        {query.trim() ? (
          <>
            <Text style={styles.resultMeta}>{results.length} results</Text>

            {sections.exact.length > 0 ? (
              <View style={styles.section}>
                <Text style={styles.sectionLabel}>Direct matches</Text>
                {sections.exact.map((tool) => (
                  <Pressable key={tool.slug} onPress={() => router.push({ pathname: '/tool/[slug]', params: { slug: tool.slug } })} style={styles.resultCard}>
                    <View style={styles.resultHeader}>
                      <Text style={styles.resultTitle}>{tool.displayName}</Text>
                      <Text style={styles.resultSlug}>{tool.slug}</Text>
                    </View>
                    <Text numberOfLines={2} style={styles.resultSummary}>
                      {tool.summary}
                    </Text>
                    <View style={styles.resultFooter}>
                      <Text style={styles.resultMetaText}>{tool.referenceCount} references</Text>
                      <Pressable
                        accessibilityLabel={favorites.has(tool.slug) ? `Remove ${tool.displayName} from saved tools` : `Save ${tool.displayName}`}
                        onPress={(event) => {
                          event.stopPropagation();
                          toggleFavorite(tool.slug);
                        }}>
                        <Text style={styles.resultSave}>{favorites.has(tool.slug) ? 'Saved' : 'Save'}</Text>
                      </Pressable>
                    </View>
                  </Pressable>
                ))}
              </View>
            ) : null}

            {sections.fuzzy.length > 0 ? (
              <View style={styles.section}>
                <Text style={styles.sectionLabel}>{sections.exact.length > 0 ? 'Related results' : 'Results'}</Text>
                {sections.fuzzy.map((tool) => (
                  <Pressable key={tool.slug} onPress={() => router.push({ pathname: '/tool/[slug]', params: { slug: tool.slug } })} style={styles.resultCard}>
                    <View style={styles.resultHeader}>
                      <Text style={styles.resultTitle}>{tool.displayName}</Text>
                      <Text style={styles.resultSlug}>{tool.slug}</Text>
                    </View>
                    <Text numberOfLines={2} style={styles.resultSummary}>
                      {tool.summary}
                    </Text>
                    <View style={styles.resultFooter}>
                      <Text style={styles.resultMetaText}>{tool.referenceCount} references</Text>
                      <Pressable
                        accessibilityLabel={favorites.has(tool.slug) ? `Remove ${tool.displayName} from saved tools` : `Save ${tool.displayName}`}
                        onPress={(event) => {
                          event.stopPropagation();
                          toggleFavorite(tool.slug);
                        }}>
                        <Text style={styles.resultSave}>{favorites.has(tool.slug) ? 'Saved' : 'Save'}</Text>
                      </Pressable>
                    </View>
                  </Pressable>
                ))}
              </View>
            ) : null}

            {results.length === 0 ? <EmptyState description="Try a tool name, alias, slug, or topic." title="No results" /> : null}
          </>
        ) : suggestedTools.length > 0 ? (
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>Saved tools</Text>
            {suggestedTools.map((tool) => (
              <Pressable key={tool.slug} onPress={() => router.push({ pathname: '/tool/[slug]', params: { slug: tool.slug } })} style={styles.resultCard}>
                <View style={styles.resultHeader}>
                  <Text style={styles.resultTitle}>{tool.displayName}</Text>
                  <Text style={styles.resultSlug}>{tool.slug}</Text>
                </View>
                <Text numberOfLines={2} style={styles.resultSummary}>
                  {tool.summary}
                </Text>
              </Pressable>
            ))}
          </View>
        ) : (
          <EmptyState description="Search by tool name, alias, slug, or topic from any screen." title="Start typing" />
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
      padding: theme.spacing.lg,
      paddingBottom: theme.spacing.xl * 2,
    },
    header: {
      marginBottom: theme.spacing.sm,
    },
    title: {
      color: theme.colors.text,
      fontSize: 28,
      fontWeight: '700',
    },
    resultMeta: {
      color: theme.colors.textMuted,
      fontSize: 13,
      marginBottom: theme.spacing.sm,
    },
    section: {
      marginTop: theme.spacing.md,
    },
    sectionLabel: {
      color: theme.colors.accentWarm,
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: 1,
      fontWeight: '700',
      marginBottom: theme.spacing.sm,
    },
    resultCard: {
      backgroundColor: theme.colors.panel,
      borderRadius: theme.radius.md,
      borderWidth: 1,
      borderColor: theme.colors.border,
      padding: theme.spacing.md,
      marginBottom: theme.spacing.sm,
    },
    resultHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: theme.spacing.md,
      marginBottom: 6,
    },
    resultTitle: {
      color: theme.colors.text,
      fontSize: 16,
      fontWeight: '700',
      flex: 1,
    },
    resultSlug: {
      color: theme.colors.textMuted,
      fontSize: 12,
    },
    resultSummary: {
      color: theme.colors.textMuted,
      fontSize: 14,
      lineHeight: 20,
    },
    resultFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: theme.spacing.sm,
    },
    resultMetaText: {
      color: theme.colors.textMuted,
      fontSize: 12,
    },
    resultSave: {
      color: theme.colors.accent,
      fontSize: 13,
      fontWeight: '700',
    },
  });
