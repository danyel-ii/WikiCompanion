import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Pill } from '@/components/ui/Pill';
import { theme } from '@/src/styles/theme';
import type { SortMode } from '@/src/types/content';

const sortLabels: { value: SortMode; label: string }[] = [
  { value: 'alphabetical', label: 'A-Z' },
  { value: 'most-referenced', label: 'Most referenced' },
  { value: 'recently-updated', label: 'Recently updated' },
];

interface FilterBarProps {
  selectedSubdomain: string | null;
  subdomains: string[];
  hasWikiOnly: boolean;
  savedOnly: boolean;
  sort: SortMode;
  onSubdomainChange: (next: string | null) => void;
  onToggleWikiOnly: () => void;
  onToggleSavedOnly: () => void;
  onSortChange: (sort: SortMode) => void;
}

export function FilterBar(props: FilterBarProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>Filters</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Pill active={props.selectedSubdomain === null} label="All domains" onPress={() => props.onSubdomainChange(null)} />
        {props.subdomains.slice(0, 12).map((subdomain) => (
          <Pill
            key={subdomain}
            active={props.selectedSubdomain === subdomain}
            label={subdomain}
            onPress={() => props.onSubdomainChange(subdomain)}
          />
        ))}
        <Pill active={props.hasWikiOnly} label="Has wiki" onPress={props.onToggleWikiOnly} />
        <Pill active={props.savedOnly} label="Saved only" onPress={props.onToggleSavedOnly} />
      </ScrollView>

      <Text style={[styles.label, styles.sortLabel]}>Sort</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {sortLabels.map((item) => (
          <Pill key={item.value} active={props.sort === item.value} label={item.label} onPress={() => props.onSortChange(item.value)} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: theme.spacing.md,
  },
  label: {
    color: theme.colors.textMuted,
    fontSize: 12,
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  sortLabel: {
    marginTop: 4,
  },
});
