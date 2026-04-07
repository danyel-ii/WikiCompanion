import { useMemo, useRef, useState } from 'react';
import { FlatList, Pressable, RefreshControl, SafeAreaView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useRouter } from 'expo-router';

import { FilterBar } from '@/components/ui/FilterBar';
import { GroupDeckCard, type ToolGroupCardData } from '@/components/ui/GroupDeckCard';
import { groupToolsByTrack } from '@/src/lib/content/groups';
import { useAppState } from '@/src/hooks/useAppState';
import { useTheme } from '@/src/hooks/useTheme';
import { filterTools } from '@/src/lib/content/search';
import type { ToolFilters } from '@/src/types/content';

const initialFilters: ToolFilters = {
  query: '',
  subdomain: null,
  hasWikiOnly: false,
  savedOnly: false,
  sort: 'most-referenced',
};

export default function AtlasScreen() {
  const router = useRouter();
  const theme = useTheme();
  const styles = createStyles(theme);
  const { height } = useWindowDimensions();
  const { manifest, favorites, refreshState, refreshContent } = useAppState();
  const [filters, setFilters] = useState<ToolFilters>(initialFilters);
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const groupListRef = useRef<FlatList<ToolGroupCardData>>(null);

  const tools = useMemo(() => filterTools(manifest.tools, { ...filters, subdomain: null }, favorites), [favorites, filters, manifest.tools]);

  const groups = useMemo<ToolGroupCardData[]>(() => {
    return groupToolsByTrack(tools)
      .filter((group) => group.tools.length > 0)
      .map((group) => ({
        key: group.key,
        label: group.label,
        count: group.tools.length,
        teaser: `${group.description} ${group.examples.join(' · ')}`,
      }));
  }, [tools]);

  const groupHeight = 132;
  const groupSnap = groupHeight + theme.spacing.sm;
  const rolodexMinHeight = Math.max(420, Math.floor(height * 0.72));

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>Pocket Atlas</Text>
          <Pressable onPress={() => router.push('/search')} style={styles.searchButton}>
            <Text style={styles.searchButtonLabel}>Search</Text>
          </Pressable>
        </View>
        <FilterBar
          hasWikiOnly={filters.hasWikiOnly}
          onSortChange={(sort) => setFilters((current) => ({ ...current, sort }))}
          onSubdomainChange={() => undefined}
          onToggleSavedOnly={() => setFilters((current) => ({ ...current, savedOnly: !current.savedOnly }))}
          onToggleWikiOnly={() => setFilters((current) => ({ ...current, hasWikiOnly: !current.hasWikiOnly }))}
          savedOnly={filters.savedOnly}
          selectedSubdomain={null}
          sort={filters.sort}
          subdomains={[]}
        />
        <Text style={styles.countLabel}>
          {tools.length} / {manifest.toolCount}
        </Text>
      </View>

      <View style={[styles.rolodexFrame, { minHeight: rolodexMinHeight }]}>
        <FlatList
          ref={groupListRef}
          contentContainerStyle={styles.groupContent}
          data={groups}
          decelerationRate="fast"
          keyExtractor={(item) => item.key}
          onMomentumScrollEnd={(event) => {
            const nextIndex = Math.round(event.nativeEvent.contentOffset.y / groupSnap);
            setActiveGroupIndex(Math.max(0, Math.min(groups.length - 1, nextIndex)));
          }}
          refreshControl={<RefreshControl refreshing={refreshState.isRefreshing} tintColor={theme.colors.accent} onRefresh={() => refreshContent()} />}
          renderItem={({ item, index }) => (
            <GroupDeckCard
              active={index === activeGroupIndex}
              group={item}
              index={index}
              onPress={() => {
                setActiveGroupIndex(index);
                groupListRef.current?.scrollToOffset({ animated: true, offset: index * groupSnap });
                router.push({
                  pathname: '/group/[slug]',
                  params: {
                    slug: item.key,
                    wiki: filters.hasWikiOnly ? '1' : '0',
                    saved: filters.savedOnly ? '1' : '0',
                    sort: filters.sort,
                  },
                });
              }}
            />
          )}
          showsVerticalScrollIndicator={false}
          snapToAlignment="start"
          snapToInterval={groupSnap}
        />
      </View>
    </SafeAreaView>
  );
}

const createStyles = (theme: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    header: {
      paddingHorizontal: theme.spacing.lg,
      paddingTop: theme.spacing.md,
      paddingBottom: theme.spacing.sm,
      gap: theme.spacing.sm,
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: theme.spacing.md,
    },
    title: {
      color: theme.colors.text,
      fontSize: 26,
      lineHeight: 30,
      fontWeight: '700',
    },
    searchButton: {
      borderRadius: 999,
      borderWidth: 1,
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.panel,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: 10,
    },
    searchButtonLabel: {
      color: theme.colors.text,
      fontSize: 13,
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: 0.6,
    },
    countLabel: {
      color: theme.colors.textMuted,
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: 0.8,
    },
    rolodexFrame: {
      flex: 1,
      marginHorizontal: theme.spacing.lg,
      marginBottom: theme.spacing.xl,
      backgroundColor: theme.colors.backgroundRaised,
      borderRadius: theme.radius.xl,
      borderWidth: 1,
      borderColor: theme.colors.border,
      paddingTop: theme.spacing.sm,
    },
    groupContent: {
      paddingBottom: 120,
      paddingTop: theme.spacing.md,
    },
  });
