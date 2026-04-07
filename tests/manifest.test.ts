import { describe, expect, test } from 'vitest';

import manifest from '../content/generated/tools-manifest.json';
import { mobileToolManifestSchema } from '../src/lib/content/schema';

describe('manifest shape', () => {
  test('validates the bundled manifest', () => {
    const parsed = mobileToolManifestSchema.parse(manifest);
    expect(parsed.toolCount).toBe(parsed.tools.length);
  });
});
