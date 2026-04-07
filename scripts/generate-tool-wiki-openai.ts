import path from 'node:path';
import { readFile } from 'node:fs/promises';

import { ensureDir, outputDir, outputWikiDir, readJson, writeJson, writeText } from './lib/fs';
import type { StructuredToolKnowledge } from './lib/pipeline-types';

interface SourceRecord {
  title: string;
  url: string;
  publisher: string;
}

interface ResearchDossierJson {
  canonical_name: string;
  aliases: string[];
  classification: string;
  short_description: string;
  overview_notes: string;
  what_it_is_notes: string;
  how_it_works_notes: string;
  inputs: string[];
  outputs: string[];
  core_concepts: string[];
  typical_workflow: string[];
  use_cases: string[];
  limitations: string[];
  related_tools: Array<{
    name: string;
    relationship: string;
  }>;
  evidence_gaps: string[];
  confidence: 'low' | 'medium' | 'high';
  sources: SourceRecord[];
}

interface WikiArticleJson {
  short_description: string;
  overview: string;
  what_it_is: string;
  how_it_works: string;
  core_concepts: string[];
  typical_workflow: string[];
  use_cases: string[];
  limitations: string[];
  related_tools: Array<{
    name: string;
    relationship: string;
  }>;
  evidence_gaps: string[];
  confidence: 'low' | 'medium' | 'high';
  sources: SourceRecord[];
}

interface ToolProgress {
  researchCompleted?: boolean;
  articleCompleted?: boolean;
  researchPath?: string;
  articleJsonPath?: string;
  articleMarkdownPath?: string;
  sourceCount?: number;
  updatedAt: string;
}

interface WikiGenerationState {
  version: number;
  model: string;
  sourceFile: string;
  createdAt: string;
  updatedAt: string;
  queue: string[];
  progress: Record<string, ToolProgress>;
  failures: Record<string, { attempts: number; lastError: string; lastAttemptAt: string }>;
}

interface GenerationOptions {
  model: string;
  limit?: number;
  slugs?: string[];
  force: boolean;
  delayMs: number;
  statePath: string;
}

interface RawWebSource {
  title?: string;
  url?: string;
  source?: string;
  domain?: string;
}

const structuredInputPath = path.join(outputDir, 'tools_structured.json');
const wikiJsonDir = path.join(outputDir, 'wiki-json');
const wikiResearchDir = path.join(outputDir, 'wiki-research');
const defaultStatePath = path.join(outputDir, 'wiki-openai-state.json');
const openAiEndpoint = 'https://api.openai.com/v1/responses';

const researchSchema = {
  type: 'object',
  additionalProperties: false,
  required: [
    'canonical_name',
    'aliases',
    'classification',
    'short_description',
    'overview_notes',
    'what_it_is_notes',
    'how_it_works_notes',
    'inputs',
    'outputs',
    'core_concepts',
    'typical_workflow',
    'use_cases',
    'limitations',
    'related_tools',
    'evidence_gaps',
    'confidence',
    'sources',
  ],
  properties: {
    canonical_name: { type: 'string' },
    aliases: { type: 'array', items: { type: 'string' } },
    classification: { type: 'string' },
    short_description: { type: 'string' },
    overview_notes: { type: 'string' },
    what_it_is_notes: { type: 'string' },
    how_it_works_notes: { type: 'string' },
    inputs: { type: 'array', items: { type: 'string' } },
    outputs: { type: 'array', items: { type: 'string' } },
    core_concepts: { type: 'array', items: { type: 'string' } },
    typical_workflow: { type: 'array', items: { type: 'string' } },
    use_cases: { type: 'array', items: { type: 'string' } },
    limitations: { type: 'array', items: { type: 'string' } },
    related_tools: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['name', 'relationship'],
        properties: {
          name: { type: 'string' },
          relationship: { type: 'string' },
        },
      },
    },
    evidence_gaps: { type: 'array', items: { type: 'string' } },
    confidence: { type: 'string', enum: ['low', 'medium', 'high'] },
    sources: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['title', 'url', 'publisher'],
        properties: {
          title: { type: 'string' },
          url: { type: 'string' },
          publisher: { type: 'string' },
        },
      },
    },
  },
} as const;

const articleSchema = {
  type: 'object',
  additionalProperties: false,
  required: [
    'short_description',
    'overview',
    'what_it_is',
    'how_it_works',
    'core_concepts',
    'typical_workflow',
    'use_cases',
    'limitations',
    'related_tools',
    'evidence_gaps',
    'confidence',
    'sources',
  ],
  properties: {
    short_description: { type: 'string' },
    overview: { type: 'string' },
    what_it_is: { type: 'string' },
    how_it_works: { type: 'string' },
    core_concepts: { type: 'array', items: { type: 'string' } },
    typical_workflow: { type: 'array', items: { type: 'string' } },
    use_cases: { type: 'array', items: { type: 'string' } },
    limitations: { type: 'array', items: { type: 'string' } },
    related_tools: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['name', 'relationship'],
        properties: {
          name: { type: 'string' },
          relationship: { type: 'string' },
        },
      },
    },
    evidence_gaps: { type: 'array', items: { type: 'string' } },
    confidence: { type: 'string', enum: ['low', 'medium', 'high'] },
    sources: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['title', 'url', 'publisher'],
        properties: {
          title: { type: 'string' },
          url: { type: 'string' },
          publisher: { type: 'string' },
        },
      },
    },
  },
} as const;

const researchPrompt = `You are the research editor for a public cybersecurity encyclopedia.

Your job is to take a local evidence packet for a tool, use web search to verify and expand it, and produce a structured research dossier.

Requirements:
- You must use web search before answering.
- Use the local evidence packet only as a starting point for identification, disambiguation, and context.
- Prefer official vendor documentation, project documentation, standards bodies, well-established security references, and reputable technical analysis sources.
- Do not invent capabilities, history, or relationships not supported by the retrieved sources.
- If the evidence is ambiguous or thin, say so in evidence_gaps.
- Keep everything high-level and non-procedural.
- Do not include shell commands, exploit chains, payloads, bypass tactics, or step-by-step attack instructions.
- Focus on conceptual identity, system-level mechanism, inputs, outputs, defensive/analytical use cases, limitations, and adjacent tools.
- Return only valid JSON matching the schema.`;

const articlePrompt = `You are the lead editor for a public cybersecurity encyclopedia.

Your task is to convert a structured research dossier into a publication-grade wiki entry.

Editorial mission:
- Produce a high-level, technically accurate, non-procedural article.
- Explain what the tool is, what conceptual role it plays, and how it works at a systems level.
- Help a serious learner understand the tool without turning the article into a tutorial.

Tone and style:
- academic
- calm
- precise
- system-oriented
- neutral and non-promotional
- concise but information-dense

Rules:
- Use only the supplied research dossier.
- Do not add new facts beyond the dossier.
- Keep workflow descriptions abstract and non-operational.
- Avoid hype and filler.
- Preserve uncertainty from the dossier.
- Return only valid JSON matching the schema.`;

function parseArgs(argv: string[]): GenerationOptions {
  const options: GenerationOptions = {
    model: process.env.OPENAI_WIKI_MODEL || process.env.OPENAI_MODEL || 'gpt-5',
    force: false,
    delayMs: 0,
    statePath: defaultStatePath,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === '--model') {
      options.model = argv[index + 1] ?? options.model;
      index += 1;
      continue;
    }

    if (arg === '--limit') {
      const raw = argv[index + 1];
      if (raw) {
        options.limit = Number.parseInt(raw, 10);
      }
      index += 1;
      continue;
    }

    if (arg === '--slugs') {
      const raw = argv[index + 1] ?? '';
      options.slugs = raw
        .split(',')
        .map((value) => value.trim())
        .filter(Boolean);
      index += 1;
      continue;
    }

    if (arg === '--state') {
      options.statePath = path.resolve(argv[index + 1] ?? defaultStatePath);
      index += 1;
      continue;
    }

    if (arg === '--delay-ms') {
      const raw = argv[index + 1];
      if (raw) {
        options.delayMs = Number.parseInt(raw, 10) || 0;
      }
      index += 1;
      continue;
    }

    if (arg === '--force') {
      options.force = true;
    }
  }

  return options;
}

async function loadEnvFile(envPath = path.join(process.cwd(), '.env')) {
  try {
    const raw = await readFile(envPath, 'utf8');
    for (const line of raw.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) {
        continue;
      }

      const separator = trimmed.indexOf('=');
      if (separator <= 0) {
        continue;
      }

      const key = trimmed.slice(0, separator).trim();
      let value = trimmed.slice(separator + 1).trim();
      value = value.replace(/^['"]|['"]$/g, '');

      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  } catch {
    // Local env file is optional.
  }
}

function sanitizeList(values: string[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const value of values) {
    const trimmed = value.replace(/\s+/g, ' ').trim();
    if (!trimmed) {
      continue;
    }

    if (
      trimmed.startsWith('```') ||
      /^[-=]{4,}$/.test(trimmed) ||
      /(^|\s)(curl|wget|pip|python|python3|mshta|powershell|tcpdump|bash|sh|vol3|vol2)\b/i.test(trimmed) ||
      /\b(--[a-z-]+|\/dev\/|\.exe\b|\.dll\b)\b/i.test(trimmed)
    ) {
      continue;
    }

    const key = trimmed.toLowerCase();
    if (seen.has(key)) {
      continue;
    }

    seen.add(key);
    result.push(trimmed);
  }

  return result;
}

function buildEvidencePacket(slug: string, knowledge: StructuredToolKnowledge) {
  return {
    tool_slug: slug,
    aliases: sanitizeList(knowledge.aliases),
    domain: knowledge.domain,
    local_definition: knowledge.definition.trim(),
    local_core_concepts: sanitizeList(knowledge.core_concepts).slice(0, 12),
    local_workflow_patterns: sanitizeList(knowledge.workflow_patterns).slice(0, 8),
    local_use_cases: sanitizeList(knowledge.use_cases).slice(0, 8),
    local_related_tools: sanitizeList(knowledge.related_tools).slice(0, 8),
    source_skills: sanitizeList(knowledge.source_skills).slice(0, 20),
  };
}

function titleFromSlug(slug: string): string {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function cleanSourceRecord(source: Partial<SourceRecord>): SourceRecord | null {
  const url = source.url?.trim();
  if (!url) {
    return null;
  }

  return {
    title: source.title?.trim() || url,
    url,
    publisher: source.publisher?.trim() || new URL(url).hostname.replace(/^www\./, ''),
  };
}

function mergeSources(preferred: SourceRecord[], supplemental: SourceRecord[]): SourceRecord[] {
  const merged = new Map<string, SourceRecord>();

  for (const source of [...preferred, ...supplemental]) {
    const normalized = cleanSourceRecord(source);
    if (!normalized) {
      continue;
    }

    if (!merged.has(normalized.url)) {
      merged.set(normalized.url, normalized);
      continue;
    }

    const existing = merged.get(normalized.url)!;
    merged.set(normalized.url, {
      title: existing.title === existing.url && normalized.title !== normalized.url ? normalized.title : existing.title,
      url: existing.url,
      publisher: existing.publisher === new URL(existing.url).hostname.replace(/^www\./, '') ? normalized.publisher : existing.publisher,
    });
  }

  return [...merged.values()].slice(0, 12);
}

function renderMarkdown(title: string, article: WikiArticleJson): string {
  const relatedTools =
    article.related_tools.length > 0
      ? article.related_tools.map((item) => `- ${item.name}: ${item.relationship}`).join('\n')
      : '- None identified from the research dossier.';
  const evidenceGaps =
    article.evidence_gaps.length > 0
      ? article.evidence_gaps.map((item) => `- ${item}`).join('\n')
      : '- No major evidence gaps were identified in the research dossier.';
  const sources =
    article.sources.length > 0
      ? article.sources.map((item) => `- [${item.title}](${item.url}) (${item.publisher})`).join('\n')
      : '- No external sources were captured.';

  return [
    `# ${title}`,
    '',
    `> ${article.short_description}`,
    '',
    '## Overview',
    article.overview,
    '',
    '## What It Is',
    article.what_it_is,
    '',
    '## How It Works',
    article.how_it_works,
    '',
    '## Core Concepts',
    ...article.core_concepts.map((item) => `- ${item}`),
    '',
    '## Typical Workflow',
    ...article.typical_workflow.map((item) => `- ${item}`),
    '',
    '## Use Cases',
    ...article.use_cases.map((item) => `- ${item}`),
    '',
    '## Limitations',
    ...article.limitations.map((item) => `- ${item}`),
    '',
    '## Related Tools',
    relatedTools,
    '',
    '## Evidence Gaps',
    evidenceGaps,
    '',
    '## Sources',
    sources,
    '',
    '## Confidence',
    article.confidence,
    '',
  ].join('\n');
}

async function loadState(filePath: string, queue: string[], model: string): Promise<WikiGenerationState> {
  try {
    const state = await readJson<any>(filePath);
    const now = new Date().toISOString();
    const queueSet = new Set<string>([...(state.queue ?? []), ...queue]);
    const progress: Record<string, ToolProgress> = { ...(state.progress ?? {}) };

    for (const slug of state.completed ?? []) {
      progress[slug] = {
        ...(progress[slug] ?? { updatedAt: now }),
        researchCompleted: true,
        articleCompleted: true,
        updatedAt: now,
      };
    }

    return {
      version: 2,
      model,
      sourceFile: structuredInputPath,
      createdAt: state.createdAt ?? now,
      updatedAt: now,
      queue: [...queueSet],
      progress,
      failures: state.failures ?? {},
    };
  } catch {
    const now = new Date().toISOString();
    return {
      version: 2,
      model,
      sourceFile: structuredInputPath,
      createdAt: now,
      updatedAt: now,
      queue,
      progress: {},
      failures: {},
    };
  }
}

async function saveState(filePath: string, state: WikiGenerationState) {
  state.updatedAt = new Date().toISOString();
  await writeJson(filePath, state);
}

function extractJsonText(payload: any): string {
  if (typeof payload.output_text === 'string' && payload.output_text.trim()) {
    return payload.output_text;
  }

  const chunks = payload.output
    ?.flatMap((item: any) => item.content ?? [])
    ?.map((item: any) => {
      if (item?.type === 'output_text' && typeof item.text === 'string') {
        return item.text;
      }

      return item?.text ?? item?.output_text ?? '';
    })
    ?.filter(Boolean);

  if (chunks && chunks.length > 0) {
    return chunks.join('\n');
  }

  throw new Error('OpenAI response did not include readable output text');
}

function extractWebSources(payload: any): SourceRecord[] {
  const rawSources = payload.output
    ?.filter((item: any) => item?.type === 'web_search_call')
    ?.flatMap((item: any) => item?.action?.sources ?? []) as RawWebSource[] | undefined;

  if (!rawSources?.length) {
    return [];
  }

  return mergeSources(
    rawSources.map((source) => ({
      title: source.title ?? source.url ?? 'Untitled source',
      url: source.url ?? '',
      publisher: source.source ?? source.domain ?? '',
    })),
    [],
  );
}

async function createResponse(apiKey: string, body: unknown) {
  const response = await fetch(openAiEndpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenAI API error ${response.status}: ${errorText}`);
  }

  return response.json();
}

async function generateResearchDossier(
  apiKey: string,
  model: string,
  slug: string,
  knowledge: StructuredToolKnowledge,
): Promise<ResearchDossierJson> {
  const evidencePacket = buildEvidencePacket(slug, knowledge);
  const payload = await createResponse(apiKey, {
    model,
    reasoning: {
      effort: 'low',
    },
    tools: [
      {
        type: 'web_search',
        search_context_size: 'medium',
      },
    ],
    include: ['web_search_call.action.sources'],
    input: [
      {
        role: 'system',
        content: [{ type: 'input_text', text: researchPrompt }],
      },
      {
        role: 'user',
        content: [
          {
            type: 'input_text',
            text: `Research this tool and produce a structured dossier. You must use web_search before answering.\n\n${JSON.stringify(
              evidencePacket,
              null,
              2,
            )}`,
          },
        ],
      },
    ],
    max_output_tokens: 5000,
    text: {
      format: {
        type: 'json_schema',
        name: 'tool_research_dossier',
        strict: true,
        schema: researchSchema,
      },
    },
  });

  const dossier = JSON.parse(extractJsonText(payload)) as ResearchDossierJson;
  const toolSources = extractWebSources(payload);
  dossier.sources = mergeSources(dossier.sources, toolSources);

  return dossier;
}

async function generateArticle(apiKey: string, model: string, dossier: ResearchDossierJson): Promise<WikiArticleJson> {
  const payload = await createResponse(apiKey, {
    model,
    reasoning: {
      effort: 'low',
    },
    input: [
      {
        role: 'system',
        content: [{ type: 'input_text', text: articlePrompt }],
      },
      {
        role: 'user',
        content: [
          {
            type: 'input_text',
            text: `Write the final wiki entry from this research dossier.\n\n${JSON.stringify(dossier, null, 2)}`,
          },
        ],
      },
    ],
    max_output_tokens: 4000,
    text: {
      format: {
        type: 'json_schema',
        name: 'tool_wiki_entry',
        strict: true,
        schema: articleSchema,
      },
    },
  });

  const article = JSON.parse(extractJsonText(payload)) as WikiArticleJson;
  article.sources = mergeSources(article.sources, dossier.sources);
  return article;
}

async function delay(ms: number) {
  if (ms > 0) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
}

async function main() {
  await loadEnvFile();
  const apiKey = process.env.OPENAI_API_KEY || process.env.OpenAI_API_KEY;

  if (!apiKey) {
    throw new Error('OPENAI_API_KEY is required. Add it to your environment or .env file.');
  }

  const options = parseArgs(process.argv.slice(2));
  const structured = await readJson<Record<string, StructuredToolKnowledge>>(structuredInputPath);
  const allSlugs = Object.keys(structured).sort((left, right) => left.localeCompare(right));
  const selectedSlugs = options.slugs?.length ? options.slugs.filter((slug) => structured[slug]) : allSlugs;
  const queue = typeof options.limit === 'number' ? selectedSlugs.slice(0, options.limit) : selectedSlugs;

  if (queue.length === 0) {
    throw new Error('No matching tool slugs found for generation.');
  }

  await ensureDir(outputWikiDir);
  await ensureDir(wikiJsonDir);
  await ensureDir(wikiResearchDir);

  const state = await loadState(options.statePath, queue, options.model);
  console.log(`Preparing ${queue.length} wiki entries with model ${options.model}`);
  console.log(`State file: ${options.statePath}`);

  for (const slug of queue) {
    const knowledge = structured[slug];
    if (!knowledge) {
      continue;
    }

    const progress = state.progress[slug];
    const markdownPath = path.join(outputWikiDir, `${slug}.md`);
    const articleJsonPath = path.join(wikiJsonDir, `${slug}.json`);
    const researchPath = path.join(wikiResearchDir, `${slug}.json`);
    const articleDone =
      !options.force &&
      progress?.articleCompleted &&
      progress?.researchCompleted &&
      progress.articleMarkdownPath === markdownPath &&
      progress.articleJsonPath === articleJsonPath &&
      progress.researchPath === researchPath;

    if (articleDone) {
      console.log(`Skipping ${slug} (already completed)`);
      continue;
    }

    console.log(`Researching ${slug}...`);

    try {
      let dossier: ResearchDossierJson;
      const researchDone = !options.force && progress?.researchCompleted && progress?.researchPath === researchPath;

      if (researchDone) {
        dossier = await readJson<ResearchDossierJson>(researchPath);
      } else {
        dossier = await generateResearchDossier(apiKey, options.model, slug, knowledge);
        await writeJson(researchPath, dossier);
        state.progress[slug] = {
          ...(state.progress[slug] ?? { updatedAt: new Date().toISOString() }),
          researchCompleted: true,
          researchPath,
          sourceCount: dossier.sources.length,
          updatedAt: new Date().toISOString(),
        };
        delete state.failures[slug];
        await saveState(options.statePath, state);
      }

      console.log(`Writing ${slug}...`);
      const article = await generateArticle(apiKey, options.model, dossier);
      await writeJson(articleJsonPath, article);
      await writeText(markdownPath, renderMarkdown(dossier.canonical_name || titleFromSlug(slug), article));

      state.progress[slug] = {
        ...(state.progress[slug] ?? { updatedAt: new Date().toISOString() }),
        researchCompleted: true,
        articleCompleted: true,
        researchPath,
        articleJsonPath,
        articleMarkdownPath: markdownPath,
        sourceCount: article.sources.length,
        updatedAt: new Date().toISOString(),
      };
      delete state.failures[slug];
      await saveState(options.statePath, state);
      console.log(`Completed ${slug}`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      const previous = state.failures[slug];
      state.failures[slug] = {
        attempts: (previous?.attempts ?? 0) + 1,
        lastError: message,
        lastAttemptAt: new Date().toISOString(),
      };
      await saveState(options.statePath, state);
      console.error(`Failed ${slug}: ${message}`);
    }

    await delay(options.delayMs);
  }

  const completedCount = queue.filter((slug) => state.progress[slug]?.articleCompleted).length;
  console.log(`Done. Completed ${completedCount}/${queue.length} in this queue. Failures tracked: ${Object.keys(state.failures).length}`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
