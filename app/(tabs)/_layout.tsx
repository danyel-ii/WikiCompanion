import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Tabs } from 'expo-router';

import { theme } from '@/src/styles/theme';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.background },
        headerTintColor: theme.colors.text,
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: theme.colors.panel,
          borderTopColor: theme.colors.border,
        },
        tabBarActiveTintColor: theme.colors.accent,
        tabBarInactiveTintColor: theme.colors.textMuted,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Atlas',
          tabBarIcon: ({ color }) => <FontAwesome6 color={color} name="table-cells-large" size={18} />,
          headerTitle: 'Cyber Tool Atlas',
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          tabBarIcon: ({ color }) => <FontAwesome6 color={color} name="bookmark" size={18} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome6 color={color} name="sliders" size={18} />,
        }}
      />
    </Tabs>
  );
}
