import React, { createContext, useEffect, useMemo, useRef, useState } from 'react';
import { type Href, useGlobalSearchParams, usePathname, useRouter } from 'expo-router';

interface NavigationHistoryContextValue {
  canGoBack: boolean;
  canGoForward: boolean;
  goBack: () => void;
  goForward: () => void;
}

interface NavigationHistoryState {
  entries: string[];
  index: number;
}

const initialState: NavigationHistoryState = {
  entries: [],
  index: -1,
};

export const NavigationHistoryContext = createContext<NavigationHistoryContextValue | null>(null);

function buildHref(pathname: string, params: Record<string, string | string[] | undefined>) {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value == null || key === 'screen' || key === 'params') {
      continue;
    }

    if (Array.isArray(value)) {
      for (const item of value) {
        searchParams.append(key, item);
      }
      continue;
    }

    if (!pathname.includes(`[${key}]`) && !pathname.includes(`/${value}`) && pathname !== value) {
      searchParams.append(key, value);
    }
  }

  const query = searchParams.toString();
  return query ? `${pathname}?${query}` : pathname;
}

export function NavigationHistoryProvider({ children }: React.PropsWithChildren) {
  const pathname = usePathname();
  const params = useGlobalSearchParams();
  const router = useRouter();
  const [history, setHistory] = useState<NavigationHistoryState>(initialState);
  const pendingTargetRef = useRef<string | null>(null);

  const currentHref = useMemo(
    () => buildHref(pathname, params as Record<string, string | string[] | undefined>),
    [params, pathname],
  );

  useEffect(() => {
    setHistory((current) => {
      if (current.entries[current.index] === currentHref) {
        return current;
      }

      if (pendingTargetRef.current === currentHref) {
        const targetIndex = current.entries.lastIndexOf(currentHref);
        pendingTargetRef.current = null;

        if (targetIndex >= 0) {
          return { ...current, index: targetIndex };
        }
      }

      const nextEntries = current.entries.slice(0, current.index + 1);
      nextEntries.push(currentHref);

      return {
        entries: nextEntries,
        index: nextEntries.length - 1,
      };
    });
  }, [currentHref]);

  const value = useMemo<NavigationHistoryContextValue>(() => {
    const canGoBack = history.index > 0;
    const canGoForward = history.index >= 0 && history.index < history.entries.length - 1;

    return {
      canGoBack,
      canGoForward,
      goBack: () => {
        if (!canGoBack) {
          return;
        }

        const target = history.entries[history.index - 1];
        pendingTargetRef.current = target;
        router.replace(target as Href);
      },
      goForward: () => {
        if (!canGoForward) {
          return;
        }

        const target = history.entries[history.index + 1];
        pendingTargetRef.current = target;
        router.replace(target as Href);
      },
    };
  }, [history.entries, history.index, router]);

  return <NavigationHistoryContext.Provider value={value}>{children}</NavigationHistoryContext.Provider>;
}
