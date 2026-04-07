import path from 'node:path';

import { generatedArticlesDir, generatedDir, readJson, writeJson, writeText } from './lib/fs';
import { generateArticle } from './lib/generate';
import type { IntermediateToolRecord } from './lib/pipeline-types';

async function main() {
  const payload = await readJson<{ tools: IntermediateToolRecord[] }>(path.join(generatedDir, 'tools.json'));
  const tools = [];

  for (const tool of payload.tools) {
    const article = generateArticle(tool);
    await writeText(path.join(generatedArticlesDir, `${tool.slug}.md`), article.markdown + '\n');
    tools.push({
      ...tool,
      articleMarkdown: article.markdown,
      articleMode: article.mode,
      generatedAt: new Date().toISOString(),
    });
  }

  await writeJson(path.join(generatedDir, 'tools-with-articles.json'), {
    generatedAt: new Date().toISOString(),
    tools,
  });

  console.log(`Generated ${tools.length} articles`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
