import type { AppTheme, ColorSchemeId } from '@/src/styles/theme';

export type WikiStatus = 'ready' | 'missing';
export type ArticleMode = 'template' | 'llm';
export type SortMode = 'alphabetical' | 'most-referenced' | 'recently-updated';

export interface ToolSourceSkill {
  slug: string;
  title: string;
  description: string;
  subdomain?: string;
  sourceUrl?: string;
  confidence?: number;
}

export interface ToolRecord {
  slug: string;
  displayName: string;
  aliases: string[];
  summary: string;
  articleMarkdown: string;
  wikiUrl: string | null;
  wikiStatus: WikiStatus;
  topics: string[];
  subdomains: string[];
  referenceCount: number;
  sourceSkills: ToolSourceSkill[];
  generatedAt: string;
  articleMode: ArticleMode;
  confidence: number;
}

export interface ToolManifest {
  version: string;
  generatedAt: string;
  sourceRepo: string;
  wikiBaseUrl: string;
  toolCount: number;
  tools: ToolRecord[];
}

export interface RefreshState {
  lastRefreshAttemptAt: string | null;
  lastRefreshSuccessAt: string | null;
  isRefreshing: boolean;
  source: 'bundled' | 'cache' | 'remote';
  error: string | null;
}

export interface AppPreferences {
  reducedMotion: boolean;
  denseList: boolean;
  colorScheme: ColorSchemeId;
}

export interface ToolFilters {
  query: string;
  subdomain: string | null;
  hasWikiOnly: boolean;
  savedOnly: boolean;
  sort: SortMode;
}

export interface ThemedState {
  theme: AppTheme;
}
