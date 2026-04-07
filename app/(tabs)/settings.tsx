import * as WebBrowser from 'expo-web-browser';
import { SafeAreaView, Pressable, ScrollView, StyleSheet, Switch, Text } from 'react-native';

import { MetadataRow } from '@/components/ui/MetadataRow';
import { SectionCard } from '@/components/ui/SectionCard';
import { useAppState } from '@/src/hooks/useAppState';
import { theme } from '@/src/styles/theme';

const sourceRepo = 'https://github.com/mukul975/Anthropic-Cybersecurity-Skills';
const wikiBase = 'https://danyel-ii.github.io/cyber-research-wiki/';

export default function SettingsScreen() {
  const { manifest, preferences, refreshState, refreshContent, setPreference } = useAppState();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Static content, local persistence, and calm defaults.</Text>

        <SectionCard title="Content">
          <MetadataRow label="Manifest version" value={manifest.version} />
          <MetadataRow label="Generated" value={new Date(manifest.generatedAt).toLocaleString()} />
          <MetadataRow label="Last refresh success" value={refreshState.lastRefreshSuccessAt ?? 'No remote update yet'} />
          <MetadataRow label="Refresh source" value={refreshState.source} />
          <Pressable onPress={() => refreshContent()} style={styles.actionButton}>
            <Text style={styles.actionLabel}>{refreshState.isRefreshing ? 'Refreshing…' : 'Refresh content'}</Text>
          </Pressable>
          <Pressable onPress={() => refreshContent(true)} style={styles.actionButtonSecondary}>
            <Text style={styles.actionLabel}>Clear cached manifest</Text>
          </Pressable>
          {refreshState.error ? <Text style={styles.errorText}>{refreshState.error}</Text> : null}
        </SectionCard>

        <SectionCard title="Preferences">
          <Pressable style={styles.switchRow}>
            <Text style={styles.switchText}>Reduced motion</Text>
            <Switch
              onValueChange={(value) => setPreference('reducedMotion', value)}
              thumbColor={theme.colors.text}
              trackColor={{ false: theme.colors.border, true: theme.colors.accentSoft }}
              value={preferences.reducedMotion}
            />
          </Pressable>
          <Pressable style={styles.switchRow}>
            <Text style={styles.switchText}>Dense list layout</Text>
            <Switch
              onValueChange={(value) => setPreference('denseList', value)}
              thumbColor={theme.colors.text}
              trackColor={{ false: theme.colors.border, true: theme.colors.accentSoft }}
              value={preferences.denseList}
            />
          </Pressable>
        </SectionCard>

        <SectionCard title="Links">
          <Pressable onPress={() => WebBrowser.openBrowserAsync(sourceRepo)} style={styles.linkButton}>
            <Text style={styles.linkLabel}>Open source repository</Text>
          </Pressable>
          <Pressable onPress={() => WebBrowser.openBrowserAsync(wikiBase)} style={styles.linkButton}>
            <Text style={styles.linkLabel}>Open wiki base</Text>
          </Pressable>
        </SectionCard>
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
  actionButton: {
    marginTop: theme.spacing.md,
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colors.accentSoft,
    padding: theme.spacing.md,
  },
  actionButtonSecondary: {
    marginTop: theme.spacing.sm,
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colors.background,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing.md,
  },
  actionLabel: {
    color: theme.colors.text,
    fontWeight: '700',
    textAlign: 'center',
  },
  errorText: {
    marginTop: theme.spacing.sm,
    color: theme.colors.danger,
    fontSize: 13,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.sm,
  },
  switchText: {
    color: theme.colors.text,
    fontSize: 15,
  },
  linkButton: {
    borderRadius: theme.radius.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },
  linkLabel: {
    color: theme.colors.text,
    fontSize: 14,
  },
});
