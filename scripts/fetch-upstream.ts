import path from 'node:path';

import { ensureDir, upstreamDir, upstreamSkillsDir, writeJson, writeText } from './lib/fs';
import type { UpstreamIndex } from './lib/pipeline-types';

const upstreamIndexUrl = 'https://raw.githubusercontent.com/mukul975/Anthropic-Cybersecurity-Skills/main/index.json';
const upstreamRawBase = 'https://raw.githubusercontent.com/mukul975/Anthropic-Cybersecurity-Skills/main';

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return (await response.json()) as T;
}

async function fetchText(url: string): Promise<string> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.text();
}

async function main() {
  await ensureDir(upstreamDir);
  await ensureDir(upstreamSkillsDir);

  const index = await fetchJson<UpstreamIndex>(upstreamIndexUrl);
  await writeJson(path.join(upstreamDir, 'index.json'), index);

  for (const skill of index.skills) {
    const markdown = await fetchText(`${upstreamRawBase}/${skill.path}/SKILL.md`);
    await writeText(path.join(upstreamSkillsDir, `${skill.name}.md`), markdown);
  }

  console.log(`Fetched ${index.skills.length} skills from ${index.repository}`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
