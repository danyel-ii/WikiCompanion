import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Pill } from '@/components/ui/Pill';
import { useTheme } from '@/src/hooks/useTheme';
import type { SortMode } from '@/src/types/content';

const sortLabels: { value: SortMode; label: string }[] = [
  { value: 'alphabetical', label: 'A-Z' },
  { value: 'most-referenced', label: 'Most referenced' },
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
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.wrapper}>
      <View style={styles.rowHeader}>
        <Text style={styles.label}>Filters</Text>
        <Text style={[styles.label, styles.labelRight]}>Sort</Text>
      </View>
      <ScrollView contentContainerStyle={styles.rowContent} horizontal showsHorizontalScrollIndicator={false}>
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
        {sortLabels.map((item) => (
          <Pill key={item.value} active={props.sort === item.value} label={item.label} onPress={() => props.onSortChange(item.value)} />
        ))}
      </ScrollView>
    </View>
  );
}

const createStyles = (theme: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    wrapper: {
      gap: 6,
    },
    rowHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    rowContent: {
      paddingRight: theme.spacing.md,
    },
    label: {
      color: theme.colors.textMuted,
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: 0.8,
    },
    labelRight: {
      textAlign: 'right',
    },
  });
