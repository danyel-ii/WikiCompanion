import path from 'node:path';

import { slugify, titleCaseWords, uniqueSorted } from '../../src/lib/content/tooling';
import { readJson } from './fs';
import { buildToolSlug } from './parse';
import type { IntermediateToolRecord, ParsedSkill } from './pipeline-types';

interface OverrideShape {
  aliasToCanonical: Record<string, string>;
  slugOverrides: Record<string, string>;
}

const blockedCanonicalNames = new Set(['Detection', 'Network', 'System', 'Workflow', 'Management']);

function normalizeAliasKey(value: string): string {
  return slugify(value).replace(/-/g, ' ');
}

export function canonicalizeTool(tool: string, overrides: OverrideShape): string {
  const direct = overrides.aliasToCanonical[tool.toLowerCase()] ?? overrides.aliasToCanonical[normalizeAliasKey(tool)];
  if (direct) {
    return direct;
  }

  if (tool.includes('/')) {
    return canonicalizeTool(tool.split('/')[0], overrides);
  }

  return titleCaseWords(tool);
}

function buildSummary(displayName: string, sourceSkills: ParsedSkill[]): string {
  const scenario = sourceSkills.flatMap((skill) => skill.whenToUse).slice(0, 2).join(' ');
  const description = sourceSkills.find((skill) => skill.description)?.description ?? '';
  const sentence = [description, scenario].join(' ').replace(/\s+/g, ' ').trim();
  return sentence || `${displayName} appears across multiple cybersecurity workflows in the upstream skills collection.`;
}

function collectTopics(skills: ParsedSkill[]): string[] {
  return uniqueSorted(skills.flatMap((skill) => [...skill.tags, ...skill.keyConcepts]).slice(0, 20));
}

export async function loadOverrides(repoRoot: string): Promise<OverrideShape> {
  return readJson<OverrideShape>(path.join(repoRoot, 'content', 'tool-overrides.json'));
}

export function groupSkillsByTool(parsedSkills: ParsedSkill[], overrides: OverrideShape): IntermediateToolRecord[] {
  const grouped = new Map<string, { displayName: string; aliases: Set<string>; skills: ParsedSkill[]; confidence: number[] }>();

  for (const skill of parsedSkills) {
    for (const tool of skill.tools) {
      const canonical = canonicalizeTool(tool, overrides);
      if (blockedCanonicalNames.has(canonical)) {
        continue;
      }
      const slug = overrides.slugOverrides[canonical] ?? buildToolSlug(canonical);
      const current = grouped.get(slug) ?? {
        displayName: canonical,
        aliases: new Set<string>(),
        skills: [],
        confidence: [],
      };

      current.aliases.add(tool);
      current.skills.push(skill);
      current.confidence.push(skill.toolsConfidence);
      grouped.set(slug, current);
    }
  }

  return Array.from(grouped.entries())
    .map(([slug, group]) => {
      const sourceSkills = group.skills
        .sort((left, right) => left.title.localeCompare(right.title))
        .map((skill) => ({
          slug: skill.slug,
          title: skill.title,
          description: skill.description,
          subdomain: skill.subdomain,
          sourceUrl: skill.sourceUrl,
          confidence: skill.toolsConfidence,
        }));

      return {
        slug,
        displayName: group.displayName,
        aliases: uniqueSorted(Array.from(group.aliases).filter((alias) => alias !== group.displayName)),
        summary: buildSummary(group.displayName, group.skills),
        topics: collectTopics(group.skills),
        subdomains: uniqueSorted(group.skills.map((skill) => skill.subdomain ?? '').filter(Boolean)),
        referenceCount: sourceSkills.length,
        sourceSkills,
        sourceNotes: uniqueSorted(
          group.skills.flatMap((skill) => [
            ...skill.whenToUse,
            ...skill.commonScenarios,
            ...skill.keyConcepts,
            skill.description,
          ]),
        ).slice(0, 20),
        generatedAt: new Date().toISOString(),
        articleMode: 'template' as const,
        confidence: group.confidence.reduce((sum, value) => sum + value, 0) / group.confidence.length,
      };
    })
    .sort((left, right) => right.referenceCount - left.referenceCount || left.displayName.localeCompare(right.displayName));
}
