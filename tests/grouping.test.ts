import { describe, expect, test } from 'vitest';

import { groupSkillsByTool } from '../scripts/lib/build';
import type { ParsedSkill } from '../scripts/lib/pipeline-types';

describe('groupSkillsByTool', () => {
  test('groups multiple skill mentions into one tool record', () => {
    const skills: ParsedSkill[] = [
      {
        slug: 'memory-one',
        title: 'Memory One',
        description: 'Memory analysis',
        subdomain: 'forensics',
        tags: ['memory'],
        sourceUrl: 'https://example.com/1',
        tools: ['Volatility'],
        toolsConfidence: 1,
        keyConcepts: ['memory dumps'],
        commonScenarios: [],
        whenToUse: ['Inspect RAM captures'],
        sections: {},
      },
      {
        slug: 'memory-two',
        title: 'Memory Two',
        description: 'More memory analysis',
        subdomain: 'malware-analysis',
        tags: ['incident-response'],
        sourceUrl: 'https://example.com/2',
        tools: ['Volatility'],
        toolsConfidence: 1,
        keyConcepts: ['process trees'],
        commonScenarios: [],
        whenToUse: ['Review memory artifacts'],
        sections: {},
      },
    ];

    const tools = groupSkillsByTool(skills, { aliasToCanonical: {}, slugOverrides: {} });
    expect(tools).toHaveLength(1);
    expect(tools[0].referenceCount).toBe(2);
    expect(tools[0].subdomains).toEqual(['forensics', 'malware-analysis']);
  });
});
