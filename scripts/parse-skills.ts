import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

import { readJson, upstreamDir, upstreamSkillsDir, writeJson } from './lib/fs';
import { parseSkillMarkdown } from './lib/parse';
import type { ParsedSkill, UpstreamIndex } from './lib/pipeline-types';

async function main() {
  const index = await readJson<UpstreamIndex>(path.join(upstreamDir, 'index.json'));
  const files = (await readdir(upstreamSkillsDir)).filter((file) => file.endsWith('.md')).sort();
  const parsedSkills: ParsedSkill[] = [];

  for (const file of files) {
    const slug = file.replace(/\.md$/, '');
    const markdown = await readFile(path.join(upstreamSkillsDir, file), 'utf8');
    parsedSkills.push(
      parseSkillMarkdown(
        markdown,
        slug,
        `https://github.com/mukul975/Anthropic-Cybersecurity-Skills/blob/main/skills/${slug}/SKILL.md`,
      ),
    );
  }

  await writeJson(path.join(upstreamDir, 'parsed-skills.json'), {
    parsedAt: new Date().toISOString(),
    upstreamVersion: index.version,
    skills: parsedSkills,
  });

  console.log(`Parsed ${parsedSkills.length} skills`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
