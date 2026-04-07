import path from 'node:path';

import { groupSkillsByTool, loadOverrides } from './lib/build';
import { generatedDir, readJson, repoRoot, upstreamDir, writeJson } from './lib/fs';
import type { IntermediateToolRecord, ParsedSkill } from './lib/pipeline-types';

async function main() {
  const parsed = await readJson<{ skills: ParsedSkill[] }>(path.join(upstreamDir, 'parsed-skills.json'));
  const overrides = await loadOverrides(repoRoot);
  const tools = groupSkillsByTool(parsed.skills, overrides);

  await writeJson(path.join(generatedDir, 'tools.json'), {
    generatedAt: new Date().toISOString(),
    tools,
  } satisfies { generatedAt: string; tools: IntermediateToolRecord[] });

  console.log(`Built ${tools.length} normalized tool records`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
