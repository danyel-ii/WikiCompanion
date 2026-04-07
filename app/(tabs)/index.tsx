import { useMemo, useRef, useState } from 'react';
import { FlatList, RefreshControl, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

import { FilterBar } from '@/components/ui/FilterBar';
import { GroupDeckCard, type ToolGroupCardData } from '@/components/ui/GroupDeckCard';
import { SearchInput } from '@/components/ui/SearchInput';
import { groupToolsByTrack } from '@/src/lib/content/groups';
import { useAppState } from '@/src/hooks/useAppState';
import { filterTools } from '@/src/lib/content/search';
import { theme } from '@/src/styles/theme';
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

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.kicker}>Pocket atlas</Text>
        <Text style={styles.title}>Choose a discovery track first. Open the stack after that.</Text>
        <Text style={styles.subtitle}>
          {tools.length} of {manifest.toolCount} tools available after the current filters. Tap a track to enter its postcard stack.
        </Text>
      </View>

      <View style={styles.controls}>
        <SearchInput
          onChangeText={(query) => setFilters((current) => ({ ...current, query }))}
          placeholder="Search names, aliases, topics, tracks"
          value={filters.query}
        />
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
      </View>

      <View style={styles.rolodexFrame}>
        <Text style={styles.sectionLabel}>Discovery tracks</Text>
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
                    q: filters.query,
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

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.sm,
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
  controls: {
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.md,
  },
  rolodexFrame: {
    flex: 1,
    marginHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
    backgroundColor: theme.colors.backgroundRaised,
    borderRadius: theme.radius.xl,
    borderWidth: 1,
    borderColor: theme.colors.border,
    paddingTop: theme.spacing.md,
  },
  sectionLabel: {
    color: theme.colors.accentWarm,
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: '700',
    marginBottom: 4,
    paddingHorizontal: theme.spacing.lg,
  },
  groupContent: {
    paddingBottom: 120,
    paddingTop: theme.spacing.sm,
  },
});
