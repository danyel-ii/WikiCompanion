import path from 'node:path';

import { outputDir, outputWikiDir, readJson, writeText } from './lib/fs';
import { generateWikiMarkdown } from './lib/knowledge';
import type { StructuredToolKnowledge } from './lib/pipeline-types';

async function main() {
  const structured = await readJson<Record<string, StructuredToolKnowledge>>(path.join(outputDir, 'tools_structured.json'));
  const entries = Object.entries(structured).sort(([left], [right]) => left.localeCompare(right));

  for (const [toolKey, knowledge] of entries) {
    await writeText(path.join(outputWikiDir, `${toolKey}.md`), generateWikiMarkdown(toolKey, knowledge));
  }

  console.log(`Generated ${entries.length} wiki entries`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
