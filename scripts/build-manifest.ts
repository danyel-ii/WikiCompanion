import { readdir } from 'node:fs/promises';
import path from 'node:path';

import { editorialToolManifestSchema, mobileToolManifestSchema } from '../src/lib/content/schema';
import type { EditorialToolManifest, EditorialToolRecord, MobileToolManifest, MobileToolRecord } from '../src/types/content';
import { generatedDir, outputWikiDir, readJson, repoRoot, writeJson } from './lib/fs';

const wikiBaseUrl = 'https://danyel-ii.github.io/cyber-research-wiki/';
const sourceRepo = 'https://github.com/mukul975/Anthropic-Cybersecurity-Skills';

function resolveWikiUrl(entry: string | undefined): string | null {
  if (!entry) {
    return null;
  }

  if (entry.startsWith('http://') || entry.startsWith('https://')) {
    return entry;
  }

  return new URL(entry.replace(/^\/+/, ''), wikiBaseUrl).toString();
}

async function main() {
  const payload = await readJson<{ tools: Array<Omit<EditorialToolRecord, 'wikiUrl' | 'wikiStatus'>> }>(path.join(generatedDir, 'tools-with-articles.json'));
  const wikiMap = await readJson<Record<string, string>>(path.join(repoRoot, 'content', 'wiki-map.json'));
  const wikiFiles = await readdir(outputWikiDir).catch(() => []);
  const generatedWikiSlugs = new Set(wikiFiles.filter((file) => file.endsWith('.md')).map((file) => file.replace(/\.md$/, '')));

  const editorialTools: EditorialToolRecord[] = payload.tools.map((tool) => {
    const wikiEntry = wikiMap[tool.slug] ?? (generatedWikiSlugs.has(tool.slug) ? `/tools/${tool.slug}/` : undefined);
    const wikiUrl = resolveWikiUrl(wikiEntry);

    return {
      ...tool,
      wikiUrl,
      wikiStatus: wikiUrl ? 'ready' : 'missing',
    };
  });

  const mobileTools: MobileToolRecord[] = editorialTools.map(({ sourceSkills, generatedAt, articleMode, confidence, ...tool }) => tool);

  const baseManifest = {
    version: `snapshot-${payload.tools.length}`,
    generatedAt: new Date().toISOString(),
    sourceRepo,
    wikiBaseUrl,
    toolCount: editorialTools.length,
  };

  const mobileManifest: MobileToolManifest = mobileToolManifestSchema.parse({
    ...baseManifest,
    tools: mobileTools,
  });

  const editorialManifest: EditorialToolManifest = editorialToolManifestSchema.parse({
    ...baseManifest,
    tools: editorialTools,
  });

  await writeJson(path.join(generatedDir, 'tools-manifest.json'), mobileManifest);
  await writeJson(path.join(generatedDir, 'tools-editorial-manifest.json'), editorialManifest);

  console.log(`Built mobile and editorial manifests with ${mobileManifest.toolCount} tools`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
