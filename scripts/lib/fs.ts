import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

export const repoRoot = process.cwd();
export const upstreamDir = path.join(repoRoot, 'content', 'upstream');
export const upstreamSkillsDir = path.join(upstreamDir, 'skills');
export const generatedDir = path.join(repoRoot, 'content', 'generated');
export const generatedArticlesDir = path.join(generatedDir, 'articles');
export const cacheDir = path.join(generatedDir, 'cache');
export const outputDir = path.join(repoRoot, 'output');
export const outputWikiDir = path.join(outputDir, 'wiki');
export const wikiSiteDir = path.join(repoRoot, 'site', 'wiki-build');

export async function ensureDir(dirPath: string) {
  await mkdir(dirPath, { recursive: true });
}

export async function readJson<T>(filePath: string): Promise<T> {
  const raw = await readFile(filePath, 'utf8');
  return JSON.parse(raw) as T;
}

export async function writeJson(filePath: string, value: unknown) {
  await ensureDir(path.dirname(filePath));
  await writeFile(filePath, JSON.stringify(value, null, 2) + '\n', 'utf8');
}

export async function writeText(filePath: string, value: string) {
  await ensureDir(path.dirname(filePath));
  await writeFile(filePath, value, 'utf8');
}
