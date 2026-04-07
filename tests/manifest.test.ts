import { describe, expect, test } from 'vitest';

import manifest from '../src/content/generated/tools-manifest.json';
import { toolManifestSchema } from '../src/lib/content/schema';

describe('manifest shape', () => {
  test('validates the bundled manifest', () => {
    const parsed = toolManifestSchema.parse(manifest);
    expect(parsed.toolCount).toBe(parsed.tools.length);
  });
});
