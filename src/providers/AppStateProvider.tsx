import React, { createContext, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { getBundledManifest, loadCachedManifest, refreshRemoteManifest, clearCachedManifest } from '@/src/lib/content/runtime';
import { loadFavorites, saveFavorites } from '@/src/lib/storage/favorites';
import { defaultPreferences, loadPreferences, savePreferences } from '@/src/lib/storage/preferences';
import type { AppPreferences, RefreshState, ToolManifest } from '@/src/types/content';

interface AppStateContextValue {
  manifest: ToolManifest;
  favorites: Set<string>;
  preferences: AppPreferences;
  refreshState: RefreshState;
  toggleFavorite: (slug: string) => void;
  setPreference: <K extends keyof AppPreferences>(key: K, value: AppPreferences[K]) => void;
  refreshContent: (forceClear?: boolean) => Promise<void>;
}

export const AppStateContext = createContext<AppStateContextValue | null>(null);

export function AppStateProvider({ children }: React.PropsWithChildren) {
  const [manifest, setManifest] = useState<ToolManifest>(getBundledManifest());
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [preferences, setPreferences] = useState<AppPreferences>(defaultPreferences);
  const [refreshState, setRefreshState] = useState<RefreshState>({
    lastRefreshAttemptAt: null,
    lastRefreshSuccessAt: null,
    isRefreshing: false,
    source: 'bundled',
    error: null,
  });
  const manifestRef = useRef(manifest);

  useEffect(() => {
    manifestRef.current = manifest;
  }, [manifest]);

  const refreshContent = useCallback(
    async (forceClear = false) => {
      const now = new Date().toISOString();
      setRefreshState((current) => ({ ...current, isRefreshing: true, lastRefreshAttemptAt: now, error: null }));

      try {
        let baseManifest = manifestRef.current;

        if (forceClear) {
          await clearCachedManifest();
          baseManifest = getBundledManifest();
          setManifest(baseManifest);
          setRefreshState((current) => ({ ...current, source: 'bundled' }));
        }

        const refreshed = await refreshRemoteManifest(baseManifest);

        if (refreshed) {
          setManifest(refreshed.manifest);
          setRefreshState((current) => ({
            ...current,
            isRefreshing: false,
            source: refreshed.source,
            lastRefreshSuccessAt: refreshed.manifest.generatedAt,
            error: null,
          }));
          return;
        }

        setRefreshState((current) => ({ ...current, isRefreshing: false, error: null }));
      } catch (error) {
        setRefreshState((current) => ({
          ...current,
          isRefreshing: false,
          error: error instanceof Error ? error.message : 'Refresh failed.',
        }));
      }
    },
    [],
  );

  useEffect(() => {
    let isMounted = true;

    async function bootstrap() {
      const bundledManifest = getBundledManifest();
      const [cachedManifest, storedFavorites, storedPreferences] = await Promise.all([
        loadCachedManifest(),
        loadFavorites(),
        loadPreferences(),
      ]);

      if (!isMounted) {
        return;
      }

      if (cachedManifest && cachedManifest.generatedAt > bundledManifest.generatedAt) {
        setManifest(cachedManifest);
        setRefreshState((current) => ({ ...current, source: 'cache', lastRefreshSuccessAt: cachedManifest.generatedAt }));
      }

      setFavorites(new Set(storedFavorites));
      setPreferences(storedPreferences);

      await refreshContent();
    }

    bootstrap().catch((error: unknown) => {
      if (!isMounted) {
        return;
      }

      setRefreshState((current) => ({
        ...current,
        error: error instanceof Error ? error.message : 'Failed to bootstrap content.',
      }));
    });

    return () => {
      isMounted = false;
    };
  }, [refreshContent]);

  function toggleFavorite(slug: string) {
    setFavorites((current) => {
      const next = new Set(current);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }

      saveFavorites(Array.from(next)).catch(() => undefined);
      return next;
    });
  }

  function setPreference<K extends keyof AppPreferences>(key: K, value: AppPreferences[K]) {
    setPreferences((current) => {
      const next = { ...current, [key]: value };
      savePreferences(next).catch(() => undefined);
      return next;
    });
  }

  const value = useMemo<AppStateContextValue>(
    () => ({
      manifest,
      favorites,
      preferences,
      refreshState,
      toggleFavorite,
      setPreference,
      refreshContent,
    }),
    [favorites, manifest, preferences, refreshContent, refreshState],
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}
