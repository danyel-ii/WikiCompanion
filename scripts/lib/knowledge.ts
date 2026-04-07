import { slugify, titleCaseWords, uniqueSorted } from '../../src/lib/content/tooling';
import type { ParsedSkill, RawToolKnowledge, StructuredToolKnowledge } from './pipeline-types';
import { canonicalizeTool } from './build';

interface OverrideShape {
  aliasToCanonical: Record<string, string>;
  slugOverrides: Record<string, string>;
}

const blockedCanonicalNames = new Set(['Detection', 'Network', 'System', 'Workflow', 'Management']);

function normalizeParagraphs(value?: string): string[] {
  if (!value) {
    return [];
  }

  return value
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !line.startsWith('###'))
    .map((line) => line.replace(/^[-*]\s+/, '').trim());
}

function dedupePreserveOrder(values: string[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const value of values.map((item) => item.trim()).filter(Boolean)) {
    const key = value.toLowerCase();
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    result.push(value);
  }

  return result;
}

function isProceduralLine(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) {
    return true;
  }

  return (
    trimmed.startsWith('```') ||
    trimmed.startsWith('#') ||
    trimmed.startsWith('"') ||
    trimmed.startsWith('http://') ||
    trimmed.startsWith('https://') ||
    /^indicators:/i.test(trimmed) ||
    /(^|\s)(curl|wget|pip|python|python3|mount|mkdir|cp|dd|git|vol3|vol2|winpmem|magnetramcapture|dumpit|sha256sum)\b/i.test(trimmed) ||
    /\b(if=|of=|bs=|count=|--[a-z-]+)/i.test(trimmed) ||
    /[{}$\\]|\.exe\b|\.dll\b|\/dev\//i.test(trimmed) ||
    /crypt[a-z]/i.test(trimmed) ||
    /localhost:/i.test(trimmed)
  );
}

function sanitizeWorkflowPatterns(values: string[]): string[] {
  return dedupePreserveOrder(values)
    .filter((value) => !isProceduralLine(value))
    .filter((value) => value.length > 20)
    .filter((value) => !value.trim().startsWith('-Name '))
    .filter((value) => !/^\*\*windows|\*\*linux/i.test(value))
    .filter((value) => !/:$/.test(value.trim()))
    .filter((value) => !/^(context|approach|pitfalls|commonly abused|c2 communication channels)/i.test(value))
    .slice(0, 10);
}

function sanitizeUseCases(values: string[]): string[] {
  return dedupePreserveOrder(values)
    .filter((value) => value.length > 20)
    .filter((value) => !/^\*\*(context|approach|pitfalls|scenario)/i.test(value))
    .filter((value) => !/^(\*\*)?do not use/i.test(value))
    .filter((value) => !/^not /i.test(value))
    .slice(0, 10);
}

function fallbackConcepts(skills: ParsedSkill[]): string[] {
  return dedupePreserveOrder(skills.flatMap((skill) => [...skill.tags, ...(skill.subdomain ? [skill.subdomain] : [])]))
    .map((value) => value.replace(/-/g, ' '))
    .slice(0, 12);
}

function inferRoleConcept(concepts: string[], domain: string): string {
  const normalized = concepts.map((value) => value.toLowerCase());
  const preferredPatterns = [
    /forensics/,
    /framework/,
    /analysis/,
    /scanner/,
    /monitoring/,
    /detection/,
    /proxy/,
    /packet/,
    /traffic/,
    /memory/,
    /endpoint/,
    /network/,
  ];

  for (const pattern of preferredPatterns) {
    const match = normalized.find((value) => pattern.test(value));
    if (match) {
      return match;
    }
  }

  return domain.replace(/-/g, ' ');
}

function pickDomain(skills: ParsedSkill[]): string {
  const counts = new Map<string, number>();

  for (const skill of skills) {
    const domain = skill.subdomain ?? 'general';
    counts.set(domain, (counts.get(domain) ?? 0) + 1);
  }

  return [...counts.entries()].sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))[0]?.[0] ?? 'general';
}

function clusterUseCases(skill: ParsedSkill): string[] {
  return dedupePreserveOrder([...skill.whenToUse, ...skill.commonScenarios]).slice(0, 12);
}

function extractWorkflowPatterns(skill: ParsedSkill): string[] {
  return dedupePreserveOrder([
    ...normalizeParagraphs(skill.sections.Workflow),
    ...normalizeParagraphs(skill.sections['Typical Workflow']),
  ]).slice(0, 12);
}

function buildDefinition(name: string, skills: ParsedSkill[], concepts: string[]): string {
  const domain = pickDomain(skills).replace(/-/g, ' ');
  const roleHint = inferRoleConcept(concepts, domain).replace(/-/g, ' ').toLowerCase();
  return `${name} is a ${roleHint} tool that appears across ${domain} workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.`;
}

function buildRelatedTools(
  toolKey: string,
  sourceSkills: ParsedSkill[],
  overrides: OverrideShape,
): string[] {
  const related = new Map<string, number>();

  for (const skill of sourceSkills) {
    for (const tool of skill.tools) {
      const canonical = canonicalizeTool(tool, overrides);
      const normalized = slugify(canonical);
      if (!canonical || blockedCanonicalNames.has(canonical) || normalized === toolKey) {
        continue;
      }

      related.set(canonical, (related.get(canonical) ?? 0) + 1);
    }
  }

  return [...related.entries()]
    .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))
    .slice(0, 8)
    .map(([name]) => name);
}

export function extractRawToolKnowledge(parsedSkills: ParsedSkill[], overrides: OverrideShape): Record<string, RawToolKnowledge> {
  const raw: Record<string, RawToolKnowledge> = {};

  for (const skill of parsedSkills) {
    for (const tool of skill.tools) {
      const canonical = canonicalizeTool(tool, overrides);
      const key = slugify(canonical);

      if (!canonical || blockedCanonicalNames.has(canonical) || !key) {
        continue;
      }

      const current = raw[key] ?? {
        aliases: [],
        skills: [],
        concepts: [],
        workflows: [],
        scenarios: [],
      };

      current.aliases = dedupePreserveOrder([...current.aliases, canonical.toLowerCase(), tool.toLowerCase()]);
      current.skills = dedupePreserveOrder([...current.skills, skill.slug]);
      current.concepts = dedupePreserveOrder([...current.concepts, ...skill.keyConcepts]);
      current.workflows = dedupePreserveOrder([...current.workflows, ...extractWorkflowPatterns(skill)]);
      current.scenarios = dedupePreserveOrder([...current.scenarios, ...clusterUseCases(skill)]);
      raw[key] = current;
    }
  }

  return raw;
}

export function synthesizeToolKnowledge(
  rawKnowledge: Record<string, RawToolKnowledge>,
  parsedSkills: ParsedSkill[],
  overrides: OverrideShape,
): Record<string, StructuredToolKnowledge> {
  const skillsByTool = new Map<string, ParsedSkill[]>();

  for (const skill of parsedSkills) {
    for (const tool of skill.tools) {
      const canonical = canonicalizeTool(tool, overrides);
      const key = slugify(canonical);
      if (!canonical || blockedCanonicalNames.has(canonical) || !key) {
        continue;
      }

      const current = skillsByTool.get(key) ?? [];
      current.push(skill);
      skillsByTool.set(key, current);
    }
  }

  const structured: Record<string, StructuredToolKnowledge> = {};

  for (const [toolKey, knowledge] of Object.entries(rawKnowledge)) {
    const sourceSkills = skillsByTool.get(toolKey) ?? [];
    const displayName = titleCaseWords(toolKey.replace(/-/g, ' '));
      const concepts = dedupePreserveOrder(knowledge.concepts);
      const workflows = sanitizeWorkflowPatterns(knowledge.workflows);
      const useCases = sanitizeUseCases(knowledge.scenarios);
      const synthesizedConcepts = concepts.length > 0 ? concepts.slice(0, 12) : fallbackConcepts(sourceSkills);

      structured[toolKey] = {
        aliases: uniqueSorted(knowledge.aliases),
        domain: pickDomain(sourceSkills),
        definition: buildDefinition(displayName, sourceSkills, synthesizedConcepts),
        core_concepts: synthesizedConcepts,
        workflow_patterns: workflows.slice(0, 10),
        use_cases: useCases.slice(0, 10),
        related_tools: buildRelatedTools(toolKey, sourceSkills, overrides),
      source_skills: uniqueSorted(sourceSkills.map((skill) => skill.slug)),
    };
  }

  return structured;
}

export function generateWikiMarkdown(toolKey: string, knowledge: StructuredToolKnowledge): string {
  const name = titleCaseWords(toolKey.replace(/-/g, ' '));
  const relatedTools = knowledge.related_tools.length > 0 ? knowledge.related_tools.join(', ') : 'None listed yet';
  const sources = knowledge.source_skills.length > 0 ? knowledge.source_skills.map((skill) => `- ${skill}`).join('\n') : '- None';

  return [
    `# ${name}`,
    '',
    '## Overview',
    knowledge.definition,
    '',
    '## What It Is',
    `${name} is best understood as a ${knowledge.domain} tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.`,
    '',
    '## How It Works',
    `${name} works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.`,
    '',
    '## Core Concepts',
    ...knowledge.core_concepts.map((concept) => `- ${concept}`),
    '',
    '## Typical Workflow',
    ...knowledge.workflow_patterns.map((pattern) => `- ${pattern}`),
    '',
    '## Use Cases',
    ...knowledge.use_cases.map((useCase) => `- ${useCase}`),
    '',
    '## Limitations',
    '- Output still depends on context, data quality, and surrounding analysis.',
    '- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.',
    '- Capabilities and visibility vary depending on environment, integrations, and available inputs.',
    '',
    '## Related Tools',
    `- ${relatedTools}`,
    '',
    '## Sources',
    sources,
    '',
  ].join('\n');
}
