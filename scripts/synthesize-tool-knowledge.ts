import path from 'node:path';

import { loadOverrides } from './lib/build';
import { outputDir, readJson, repoRoot, upstreamDir, writeJson } from './lib/fs';
import { synthesizeToolKnowledge } from './lib/knowledge';
import type { ParsedSkill, RawToolKnowledge, StructuredToolKnowledge } from './lib/pipeline-types';

async function main() {
  const parsed = await readJson<{ skills: ParsedSkill[] }>(path.join(upstreamDir, 'parsed-skills.json'));
  const raw = await readJson<Record<string, RawToolKnowledge>>(path.join(outputDir, 'tools_raw.json'));
  const overrides = await loadOverrides(repoRoot);
  const structured = synthesizeToolKnowledge(raw, parsed.skills, overrides);

  await writeJson(path.join(outputDir, 'tools_structured.json'), structured satisfies Record<string, StructuredToolKnowledge>);
  console.log(`Synthesized structured knowledge for ${Object.keys(structured).length} tools`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
