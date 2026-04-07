import Fuse from 'fuse.js';

import type { MobileToolRecord, SortMode, ToolFilters } from '@/src/types/content';

function compareBySort(left: MobileToolRecord, right: MobileToolRecord, sort: SortMode): number {
  if (sort === 'most-referenced') {
    return right.referenceCount - left.referenceCount || left.displayName.localeCompare(right.displayName);
  }

  return left.displayName.localeCompare(right.displayName);
}

function uniqueBySlug(tools: MobileToolRecord[]) {
  const seen = new Set<string>();
  const unique: MobileToolRecord[] = [];

  for (const tool of tools) {
    if (seen.has(tool.slug)) {
      continue;
    }

    seen.add(tool.slug);
    unique.push(tool);
  }

  return unique;
}

function directScore(tool: MobileToolRecord, query: string): number {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) {
    return 0;
  }

  const exactFields = [tool.displayName, tool.slug, ...tool.aliases];
  if (exactFields.some((field) => field.toLowerCase() === normalizedQuery)) {
    return 400;
  }

  if (tool.displayName.toLowerCase().startsWith(normalizedQuery)) {
    return 320;
  }

  if (tool.aliases.some((alias) => alias.toLowerCase().startsWith(normalizedQuery))) {
    return 300;
  }

  if (tool.slug.startsWith(normalizedQuery)) {
    return 280;
  }

  const searchableFields = [tool.displayName, tool.slug, tool.summary, ...tool.aliases, ...tool.topics, ...tool.subdomains];
  if (searchableFields.some((field) => field.toLowerCase().includes(normalizedQuery))) {
    return 200;
  }

  return 0;
}

export function searchTools(tools: MobileToolRecord[], query: string, sort: SortMode): MobileToolRecord[] {
  const normalizedQuery = query.trim();
  if (!normalizedQuery) {
    return [...tools].sort((left, right) => compareBySort(left, right, sort));
  }

  const directMatches = tools
    .map((tool) => ({ tool, score: directScore(tool, normalizedQuery) }))
    .filter((entry) => entry.score > 0)
    .sort(
      (left, right) =>
        right.score - left.score ||
        compareBySort(left.tool, right.tool, sort),
    )
    .map((entry) => entry.tool);

  const fuzzyMatches = new Fuse(tools, {
    includeScore: true,
    keys: ['displayName', 'slug', 'aliases', 'summary', 'topics', 'subdomains'],
    threshold: 0.34,
  })
    .search(normalizedQuery)
    .map((match) => match.item);

  return uniqueBySlug([...directMatches, ...fuzzyMatches]);
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

  const byQuery = searchTools(filtered, filters.query, filters.sort);
  if (filters.query.trim()) {
    return byQuery;
  }

  return [...byQuery].sort((left, right) => compareBySort(left, right, filters.sort));
}
