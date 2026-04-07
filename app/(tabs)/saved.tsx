import { useMemo } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

import { EmptyState } from '@/components/ui/EmptyState';
import { ToolCard } from '@/components/ui/ToolCard';
import { useAppState } from '@/src/hooks/useAppState';
import { theme } from '@/src/styles/theme';

export default function SavedScreen() {
  const { manifest, favorites, preferences, toggleFavorite } = useAppState();
  const tools = useMemo(
    () => manifest.tools.filter((tool) => favorites.has(tool.slug)).sort((left, right) => left.displayName.localeCompare(right.displayName)),
    [favorites, manifest.tools],
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Saved tools</Text>
        <Text style={styles.subtitle}>Keep a compact personal toolbox that works offline.</Text>
        {tools.length === 0 ? (
          <EmptyState
            title="Nothing saved yet"
            description="Use the Save button on any card to keep a tool handy for later reading."
          />
        ) : (
          tools.map((tool, index) => (
            <ToolCard
              key={tool.slug}
              dense={preferences.denseList}
              index={index}
              onToggleSaved={() => toggleFavorite(tool.slug)}
              saved
              tool={tool}
            />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.spacing.lg,
  },
  title: {
    color: theme.colors.text,
    fontSize: 28,
    fontWeight: '700',
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    color: theme.colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: theme.spacing.lg,
  },
});
