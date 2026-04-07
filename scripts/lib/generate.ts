import { execSync } from 'node:child_process';

import { summarizeList } from '../../src/lib/content/tooling';
import type { IntermediateToolRecord } from './pipeline-types';

function buildPrompt(tool: IntermediateToolRecord): string {
  return [
    `Tool: ${tool.displayName}`,
    `Summary: ${tool.summary}`,
    `Subdomains: ${tool.subdomains.join(', ') || 'unspecified'}`,
    `Topics: ${tool.topics.join(', ') || 'unspecified'}`,
    `Notes:`,
    ...tool.sourceNotes.map((note) => `- ${note}`),
    '',
    'Write a calm, high-level educational markdown article for learners.',
    'Avoid exploit steps, playbooks, evasion, long command sequences, or operational guidance.',
  ].join('\n');
}

function buildTemplateArticle(tool: IntermediateToolRecord): string {
  const topicSummary = summarizeList(tool.topics, 4) || 'general security workflows';
  const subdomainSummary = summarizeList(tool.subdomains, 3) || 'multiple security domains';
  const sourceSummary = summarizeList(tool.sourceSkills.map((skill) => skill.title), 4);

  return [
    `# ${tool.displayName}`,
    '',
    `${tool.displayName} shows up in the upstream cybersecurity skills collection as a practical way to make sense of signals, artifacts, or system state without turning the workflow into guesswork. In this atlas, it is best understood as a learning instrument: something that helps you see a slice of the environment more clearly.`,
    '',
    '## What it is',
    '',
    `${tool.summary} Across the source material, it most often appears in ${subdomainSummary}. The recurring ideas around it include ${topicSummary}.`,
    '',
    '## How it fits into a workflow',
    '',
    `${tool.displayName} usually sits in the middle of a workflow rather than at the very start or very end. People reach for it once they already have a question, an artifact, or a suspicious pattern, and they want a more structured view of what is happening. The tool tends to matter because it gives shape to noisy inputs and turns them into outputs that other parts of the investigation can use.`,
    '',
    '## Inputs and outputs that matter',
    '',
    `The source skills treat ${tool.displayName} less like magic and more like a translator. Inputs might be logs, binaries, packets, memory, cloud events, or configuration data depending on the scenario. Outputs tend to be findings that can be compared, shared, or escalated: parsed artifacts, visual clues, extracted metadata, or a cleaner path toward the next question.`,
    '',
    '## Limits and common mistakes',
    '',
    `A recurring mistake is to confuse tool output with final truth. ${tool.displayName} is useful because it sharpens interpretation, but it still depends on context, data quality, and the analyst's framing. Another mistake is to treat it as a complete workflow by itself when the surrounding evidence and follow-up analysis usually matter just as much.`,
    '',
    '## Where to go next',
    '',
    `${tool.displayName} fits best as part of a broader learning journey. Once the mental model is clear, the related skills in this atlas show how practitioners position it inside real investigations and reviews. Representative source skills include ${sourceSummary || 'multiple upstream skills'}, which is a good reminder that the tool is often more versatile than any single scenario suggests.`,
  ].join('\n');
}

export function generateArticle(tool: IntermediateToolRecord): { markdown: string; mode: 'template' | 'llm' } {
  const command = process.env.BLOG_MODEL_CMD?.trim();
  if (!command) {
    return { markdown: buildTemplateArticle(tool), mode: 'template' };
  }

  try {
    const output = execSync(command, {
      input: buildPrompt(tool),
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'ignore'],
      maxBuffer: 1024 * 1024,
    }).trim();

    if (output.length > 0) {
      return { markdown: output, mode: 'llm' };
    }
  } catch {
    return { markdown: buildTemplateArticle(tool), mode: 'template' };
  }

  return { markdown: buildTemplateArticle(tool), mode: 'template' };
}
