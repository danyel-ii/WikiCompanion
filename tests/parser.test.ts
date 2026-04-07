import { describe, expect, test } from 'vitest';

import { parseSkillMarkdown } from '../scripts/lib/parse';

const markdown = `---
name: demo-skill
description: Parse suspicious documents with peepdf and pdfid.
subdomain: malware-analysis
tags:
  - pdf
  - static-analysis
---

# Analyzing Malicious PDF with peepdf

## When to Use

- Inspect suspicious PDF files

## Tools & Systems

- peepdf
- pdfid

## Key Concepts

- embedded JavaScript
`;

describe('parseSkillMarkdown', () => {
  test('extracts frontmatter, sections, and tools', () => {
    const parsed = parseSkillMarkdown(markdown, 'analyzing-malicious-pdf-with-peepdf', 'https://example.com');
    expect(parsed.title).toBe('Analyzing Malicious PDF with peepdf');
    expect(parsed.subdomain).toBe('malware-analysis');
    expect(parsed.tools).toEqual(['pdfid', 'peepdf']);
    expect(parsed.whenToUse).toEqual(['Inspect suspicious PDF files']);
  });
});
