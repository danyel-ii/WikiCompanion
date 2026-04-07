import AsyncStorage from '@react-native-async-storage/async-storage';

import type { AppPreferences } from '@/src/types/content';

const PREFERENCES_KEY = 'cta:preferences';

export const defaultPreferences: AppPreferences = {
  reducedMotion: false,
  denseList: false,
  colorScheme: 'night',
};

export async function loadPreferences(): Promise<AppPreferences> {
  const raw = await AsyncStorage.getItem(PREFERENCES_KEY);
  if (!raw) {
    return defaultPreferences;
  }

  try {
    return { ...defaultPreferences, ...(JSON.parse(raw) as Partial<AppPreferences>) };
  } catch {
    return defaultPreferences;
  }
}

export async function savePreferences(preferences: AppPreferences): Promise<void> {
  await AsyncStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences));
}
