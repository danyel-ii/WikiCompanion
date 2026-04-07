import Fuse from 'fuse.js';

import type { SortMode, ToolFilters, ToolRecord } from '@/src/types/content';

function compareBySort(left: ToolRecord, right: ToolRecord, sort: SortMode): number {
  if (sort === 'most-referenced') {
    return right.referenceCount - left.referenceCount || left.displayName.localeCompare(right.displayName);
  }

  if (sort === 'recently-updated') {
    return right.generatedAt.localeCompare(left.generatedAt) || left.displayName.localeCompare(right.displayName);
  }

  return left.displayName.localeCompare(right.displayName);
}

export function filterTools(
  tools: ToolRecord[],
  filters: ToolFilters,
  favorites: Set<string>,
): ToolRecord[] {
  const filtered = tools.filter((tool) => {
    if (filters.subdomain && !tool.subdomains.includes(filters.subdomain)) {
      return false;
    }

    if (filters.hasWikiOnly && tool.wikiStatus !== 'ready') {
      return false;
    }

    if (filters.savedOnly && !favorites.has(tool.slug)) {
      return false;
    }

    return true;
  });

  const byQuery = filters.query.trim()
    ? new Fuse(filtered, {
        includeScore: true,
        keys: ['displayName', 'aliases', 'summary', 'topics', 'subdomains'],
        threshold: 0.34,
      })
        .search(filters.query.trim())
        .map((match) => match.item)
    : filtered;

  return [...byQuery].sort((left, right) => compareBySort(left, right, filters.sort));
}
