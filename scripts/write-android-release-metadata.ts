import { createHash } from 'node:crypto';
import { stat, readFile } from 'node:fs/promises';
import path from 'node:path';

import { readJson, writeJson } from './lib/fs';

interface PackageJson {
  version: string;
}

async function main() {
  const packageJson = await readJson<PackageJson>(path.join(process.cwd(), 'package.json'));
  const version = packageJson.version;
  const apkFileName = `cyber-tool-atlas-v${version}-release.apk`;
  const apkPath = path.join(process.cwd(), 'releases', 'android', apkFileName);
  const outputPath = path.join(process.cwd(), 'content', 'release', 'android-release.json');

  const [buffer, apkStat] = await Promise.all([readFile(apkPath), stat(apkPath)]);
  const sha256 = createHash('sha256').update(buffer).digest('hex');

  await writeJson(outputPath, {
    version,
    apkFileName,
    apkSizeBytes: apkStat.size,
    sha256,
    releaseUrl: `https://github.com/danyel-ii/WikiCompanion/releases/tag/v${version}`,
    downloadUrl: `https://github.com/danyel-ii/WikiCompanion/releases/download/v${version}/${apkFileName}`,
  });

  console.log(`Wrote Android release metadata for v${version} to ${outputPath}`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
