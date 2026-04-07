import { describe, expect, test } from 'vitest';

import { groupSkillsByTool } from '../scripts/lib/build';
import type { ParsedSkill } from '../scripts/lib/pipeline-types';

const overrides = {
  aliasToCanonical: {
    burpsuite: 'Burp Suite',
    burp: 'Burp Suite',
  },
  slugOverrides: {
    'Burp Suite': 'burp-suite',
  },
};

describe('groupSkillsByTool normalization', () => {
  test('collapses aliases to a manual canonical name', () => {
    const skills: ParsedSkill[] = [
      {
        slug: 'testing-with-burp',
        title: 'Testing with Burp',
        description: 'Burp workflow',
        subdomain: 'web',
        tags: ['proxy'],
        sourceUrl: 'https://example.com/1',
        tools: ['burpsuite'],
        toolsConfidence: 1,
        keyConcepts: [],
        commonScenarios: [],
        whenToUse: [],
        sections: {},
      },
      {
        slug: 'testing-with-burp-repeater',
        title: 'Testing with Repeater',
        description: 'Burp details',
        subdomain: 'web',
        tags: ['scanner'],
        sourceUrl: 'https://example.com/2',
        tools: ['Burp Suite'],
        toolsConfidence: 1,
        keyConcepts: [],
        commonScenarios: [],
        whenToUse: [],
        sections: {},
      },
    ];

    const tools = groupSkillsByTool(skills, overrides);
    expect(tools).toHaveLength(1);
    expect(tools[0].displayName).toBe('Burp Suite');
    expect(tools[0].slug).toBe('burp-suite');
  });
});
