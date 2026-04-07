import { readdir } from 'node:fs/promises';
import path from 'node:path';

import { toolManifestSchema } from '../src/lib/content/schema';
import type { ToolManifest, ToolRecord } from '../src/types/content';
import { generatedDir, outputWikiDir, readJson, repoRoot, writeJson, writeText } from './lib/fs';

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
  const payload = await readJson<{ tools: Array<Omit<ToolRecord, 'wikiUrl' | 'wikiStatus'>> }>(path.join(generatedDir, 'tools-with-articles.json'));
  const wikiMap = await readJson<Record<string, string>>(path.join(repoRoot, 'content', 'wiki-map.json'));
  const wikiFiles = await readdir(outputWikiDir).catch(() => []);
  const generatedWikiSlugs = new Set(wikiFiles.filter((file) => file.endsWith('.md')).map((file) => file.replace(/\.md$/, '')));

  const tools: ToolRecord[] = payload.tools.map((tool) => {
    const wikiEntry = wikiMap[tool.slug] ?? (generatedWikiSlugs.has(tool.slug) ? `/tools/${tool.slug}/` : undefined);
    const wikiUrl = resolveWikiUrl(wikiEntry);

    return {
      ...tool,
      wikiUrl,
      wikiStatus: wikiUrl ? 'ready' : 'missing',
    };
  });

  const manifest: ToolManifest = toolManifestSchema.parse({
    version: `snapshot-${payload.tools.length}`,
    generatedAt: new Date().toISOString(),
    sourceRepo,
    wikiBaseUrl,
    toolCount: tools.length,
    tools,
  });

  await writeJson(path.join(generatedDir, 'tools-manifest.json'), manifest);
  await writeText(
    path.join(repoRoot, 'src', 'content', 'generated', 'tools-manifest.json'),
    JSON.stringify(manifest, null, 2) + '\n',
  );

  console.log(`Built manifest with ${manifest.toolCount} tools`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
