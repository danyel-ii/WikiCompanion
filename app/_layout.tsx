import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { HeaderNavControls } from '@/components/ui/HeaderNavControls';
import { useAppState } from '@/src/hooks/useAppState';
import { AppStateProvider } from '@/src/providers/AppStateProvider';
import { NavigationHistoryProvider } from '@/src/providers/NavigationHistoryProvider';

export default function RootLayout() {
  return (
    <AppStateProvider>
      <RootNavigator />
    </AppStateProvider>
  );
}

function RootNavigator() {
  const { theme } = useAppState();

  const navigationTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: theme.colors.background,
      card: theme.colors.panel,
      border: theme.colors.border,
      text: theme.colors.text,
      primary: theme.colors.accent,
    },
  };

  return (
    <ThemeProvider value={navigationTheme}>
      <StatusBar style="light" />
      <NavigationHistoryProvider>
        <Stack
          screenOptions={{
            contentStyle: { backgroundColor: theme.colors.background },
            headerStyle: { backgroundColor: theme.colors.background },
            headerTintColor: theme.colors.text,
            headerShadowVisible: false,
            headerRight: () => <HeaderNavControls />,
          }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="group/[slug]" options={{ title: 'Atlas Group' }} />
          <Stack.Screen name="search" options={{ title: 'Search' }} />
          <Stack.Screen name="tool/[slug]" options={{ title: 'Tool Atlas' }} />
          <Stack.Screen name="+not-found" options={{ title: 'Not found' }} />
        </Stack>
      </NavigationHistoryProvider>
    </ThemeProvider>
  );
}
