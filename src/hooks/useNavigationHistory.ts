import { useContext } from 'react';

import { NavigationHistoryContext } from '@/src/providers/NavigationHistoryProvider';

export function useNavigationHistory() {
  const value = useContext(NavigationHistoryContext);
  if (!value) {
    throw new Error('useNavigationHistory must be used inside NavigationHistoryProvider');
  }

  return value;
}
