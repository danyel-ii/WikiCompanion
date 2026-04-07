import { z } from 'zod';

export const toolSourceSkillSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  subdomain: z.string().optional(),
  sourceUrl: z.string().url().optional(),
  confidence: z.number().optional(),
});

export const mobileToolRecordSchema = z.object({
  slug: z.string(),
  displayName: z.string(),
  aliases: z.array(z.string()),
  summary: z.string(),
  articleMarkdown: z.string(),
  wikiUrl: z.string().url().nullable(),
  wikiStatus: z.enum(['ready', 'missing']),
  topics: z.array(z.string()),
  subdomains: z.array(z.string()),
  referenceCount: z.number().int().nonnegative(),
});

export const editorialToolRecordSchema = mobileToolRecordSchema.extend({
  sourceSkills: z.array(toolSourceSkillSchema),
  generatedAt: z.string(),
  articleMode: z.enum(['template', 'llm']),
  confidence: z.number().min(0).max(1),
});

export const mobileToolManifestSchema = z.object({
  version: z.string(),
  generatedAt: z.string(),
  sourceRepo: z.string().url(),
  wikiBaseUrl: z.string().url(),
  toolCount: z.number().int().nonnegative(),
  tools: z.array(mobileToolRecordSchema),
});

export const editorialToolManifestSchema = z.object({
  version: z.string(),
  generatedAt: z.string(),
  sourceRepo: z.string().url(),
  wikiBaseUrl: z.string().url(),
  toolCount: z.number().int().nonnegative(),
  tools: z.array(editorialToolRecordSchema),
});

export type MobileToolManifestInput = z.infer<typeof mobileToolManifestSchema>;
export type EditorialToolManifestInput = z.infer<typeof editorialToolManifestSchema>;
