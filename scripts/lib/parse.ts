import matter from 'gray-matter';

import { slugify, titleCaseWords, uniqueSorted } from '../../src/lib/content/tooling';
import type { ParsedSkill } from './pipeline-types';

const sectionHeadingPattern = /^##\s+(.+?)\s*$/gm;
const ignoredToolTokens = new Set([
  'Output',
  'Format',
  'Common',
  'Scenarios',
  'Workflow',
  'When',
  'Use',
  'Tools',
  'Systems',
  'Step',
  'Purpose',
  'Description',
  'Platform',
  'Primary',
  'Workflow',
  'Analysis',
  'Detection',
  'Automated',
  'Endpoint',
  'Management',
  'Network',
  'Linux',
  'Windows',
  'JSON',
  'YAML',
  'CSV',
  'API',
]);

function splitSections(content: string): Record<string, string> {
  const matches = [...content.matchAll(sectionHeadingPattern)];
  const sections: Record<string, string> = {};

  for (let index = 0; index < matches.length; index += 1) {
    const current = matches[index];
    const title = current[1].trim();
    const start = current.index! + current[0].length;
    const end = matches[index + 1]?.index ?? content.length;
    sections[title] = content.slice(start, end).trim();
  }

  return sections;
}

function extractBullets(section?: string): string[] {
  if (!section) {
    return [];
  }

  return section
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => /^[-*]/.test(line))
    .map((line) => line.replace(/^[-*]\s+/, '').replace(/`/g, '').trim())
    .filter(Boolean);
}

function normalizeToolCandidate(raw: string): string | null {
  const cleaned = raw
    .replace(/\*\*/g, '')
    .replace(/\([^)]*\)/g, '')
    .replace(/\[[^\]]+\]\([^)]+\)/g, '')
    .replace(/:.*/, '')
    .replace(/\s+-\s+.*$/, '')
    .replace(/\s{2,}.*/, '')
    .replace(/[:;,]+$/g, '')
    .trim();

  if (!cleaned || cleaned.length < 2) {
    return null;
  }

  const lowered = cleaned.toLowerCase();
  if (ignoredToolTokens.has(cleaned) || /^[0-9]+$/.test(cleaned) || lowered.includes('http')) {
    return null;
  }

  return cleaned;
}

function splitCompositeCandidates(raw: string): string[] {
  return raw
    .split(/\s\/\s|,\s+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function extractToolsFromTable(section: string): string[] {
  const tools = new Set<string>();
  const lines = section.split('\n').map((line) => line.trim()).filter(Boolean);

  for (const line of lines) {
    if (!line.startsWith('|')) {
      continue;
    }

    const cells = line
      .split('|')
      .map((cell) => cell.trim())
      .filter(Boolean);

    if (cells.length === 0 || cells.every((cell) => /^:?-{2,}:?$/.test(cell))) {
      continue;
    }

    if (/^tool$/i.test(cells[0])) {
      continue;
    }

    for (const part of splitCompositeCandidates(cells[0])) {
      const candidate = normalizeToolCandidate(part);
      if (candidate) {
        tools.add(candidate);
      }
    }
  }

  return uniqueSorted(Array.from(tools));
}

export function extractToolsFromSection(section?: string): string[] {
  if (!section) {
    return [];
  }

  const fromTable = extractToolsFromTable(section);
  if (fromTable.length > 0) {
    return fromTable;
  }

  const candidates = new Set<string>();
  for (const bullet of extractBullets(section)) {
    for (const part of splitCompositeCandidates(bullet)) {
      const candidate = normalizeToolCandidate(part);
      if (candidate) {
        candidates.add(candidate);
      }
    }
  }

  if (candidates.size > 0) {
    return uniqueSorted(Array.from(candidates));
  }

  for (const match of section.matchAll(/`([^`]+)`/g)) {
    const candidate = normalizeToolCandidate(match[1]);
    if (candidate) {
      candidates.add(candidate);
    }
  }

  return uniqueSorted(Array.from(candidates));
}

export function inferFallbackTool(slug: string, title: string, description: string): string | null {
  const sources = [title, description, slug.replace(/-/g, ' ')];
  const patterns = [
    /with\s+([A-Z][A-Za-z0-9.+/# -]+)/,
    /using\s+([A-Z][A-Za-z0-9.+/# -]+)/,
    /via\s+([A-Z][A-Za-z0-9.+/# -]+)/,
  ];

  for (const source of sources) {
    for (const pattern of patterns) {
      const match = source.match(pattern);
      const candidate = normalizeToolCandidate(match?.[1] ?? '');
      if (candidate) {
        return candidate;
      }
    }
  }
  return null;
}

export function parseSkillMarkdown(markdown: string, slug: string, sourceUrl: string): ParsedSkill {
  const parsed = matter(markdown);
  const sections = splitSections(parsed.content);
  const title = parsed.content.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? titleCaseWords(slug.replace(/-/g, ' '));
  const description = typeof parsed.data.description === 'string' ? parsed.data.description.replace(/\s+/g, ' ').trim() : '';
  const tools = extractToolsFromSection(sections['Tools & Systems']);
  const fallbackTool = tools.length === 0 ? inferFallbackTool(slug, title, description) : null;
  const toolsConfidence = tools.length > 0 ? 1 : fallbackTool ? 0.55 : 0.2;

  return {
    slug,
    title,
    description,
    subdomain: typeof parsed.data.subdomain === 'string' ? parsed.data.subdomain : undefined,
    tags: Array.isArray(parsed.data.tags) ? parsed.data.tags.filter((value): value is string => typeof value === 'string') : [],
    sourceUrl,
    tools: tools.length > 0 ? tools : fallbackTool ? [fallbackTool] : [],
    toolsConfidence,
    keyConcepts: extractBullets(sections['Key Concepts']),
    commonScenarios: extractBullets(sections['Common Scenarios']),
    whenToUse: extractBullets(sections['When to Use']),
    sections,
  };
}

export function buildToolSlug(displayName: string): string {
  return slugify(displayName);
}
