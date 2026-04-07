import Fuse from 'fuse.js';

import type { MobileToolRecord, SortMode, ToolFilters } from '@/src/types/content';

function compareBySort(left: MobileToolRecord, right: MobileToolRecord, sort: SortMode): number {
  if (sort === 'most-referenced') {
    return right.referenceCount - left.referenceCount || left.displayName.localeCompare(right.displayName);
  }

  return left.displayName.localeCompare(right.displayName);
}

export function filterTools(
  tools: MobileToolRecord[],
  filters: ToolFilters,
  favorites: Set<string>,
): MobileToolRecord[] {
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
