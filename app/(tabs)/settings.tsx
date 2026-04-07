import * as WebBrowser from 'expo-web-browser';
import { Platform, SafeAreaView, Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';

import { MetadataRow } from '@/components/ui/MetadataRow';
import { Pill } from '@/components/ui/Pill';
import { SectionCard } from '@/components/ui/SectionCard';
import { useAppState } from '@/src/hooks/useAppState';
import { useTheme } from '@/src/hooks/useTheme';
import { palettes } from '@/src/styles/theme';

const sourceRepo = 'https://github.com/mukul975/Anthropic-Cybersecurity-Skills';
const wikiBase = 'https://danyel-ii.github.io/cyber-research-wiki/';

export default function SettingsScreen() {
  const theme = useTheme();
  const styles = createStyles(theme);
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
          <View style={styles.paletteBlock}>
            <Text style={styles.paletteLabel}>Color palette</Text>
            <Text style={styles.paletteCaption}>Switch between the full built-in daisyUI theme range.</Text>
            <View style={styles.paletteRow}>
              {Object.values(palettes).map((palette) => (
                <Pill
                  key={palette.id}
                  active={preferences.colorScheme === palette.id}
                  label={palette.label}
                  onPress={() => setPreference('colorScheme', palette.id)}
                />
              ))}
            </View>
          </View>
        </SectionCard>

        <SectionCard title="Links">
          <Pressable onPress={() => WebBrowser.openBrowserAsync(sourceRepo)} style={styles.linkButton}>
            <Text style={styles.linkLabel}>Open source repository</Text>
          </Pressable>
          <Pressable onPress={() => WebBrowser.openBrowserAsync(wikiBase)} style={styles.linkButton}>
            <Text style={styles.linkLabel}>Open wiki base</Text>
          </Pressable>
          {Platform.OS === 'web' ? (
            <Pressable
              onPress={() => {
                if (typeof window !== 'undefined') {
                  window.location.assign(new URL('./admin/', window.location.href).toString());
                }
              }}
              style={styles.linkButton}>
              <Text style={styles.linkLabel}>Open editorial admin</Text>
            </Pressable>
          ) : null}
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
    paletteBlock: {
      marginTop: theme.spacing.md,
    },
    paletteLabel: {
      color: theme.colors.text,
      fontSize: 15,
      fontWeight: '700',
      marginBottom: 4,
    },
    paletteCaption: {
      color: theme.colors.textMuted,
      fontSize: 13,
      marginBottom: theme.spacing.sm,
    },
    paletteRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
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
