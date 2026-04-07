import { useAppState } from '@/src/hooks/useAppState';

export function useTheme() {
  return useAppState().theme;
}
