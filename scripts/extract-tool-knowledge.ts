import path from 'node:path';

import { loadOverrides } from './lib/build';
import { outputDir, readJson, repoRoot, upstreamDir, writeJson } from './lib/fs';
import { extractRawToolKnowledge } from './lib/knowledge';
import type { ParsedSkill, RawToolKnowledge } from './lib/pipeline-types';

async function main() {
  const parsed = await readJson<{ skills: ParsedSkill[] }>(path.join(upstreamDir, 'parsed-skills.json'));
  const overrides = await loadOverrides(repoRoot);
  const raw = extractRawToolKnowledge(parsed.skills, overrides);

  await writeJson(path.join(outputDir, 'tools_raw.json'), raw satisfies Record<string, RawToolKnowledge>);
  console.log(`Extracted raw knowledge for ${Object.keys(raw).length} tools`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
