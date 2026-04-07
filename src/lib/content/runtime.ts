import * as FileSystem from 'expo-file-system/legacy';

import bundledManifest from '@/content/generated/tools-manifest.json';
import { mobileToolManifestSchema } from '@/src/lib/content/schema';
import type { MobileToolManifest, RefreshState } from '@/src/types/content';

const CACHE_DIRECTORY = `${FileSystem.documentDirectory ?? ''}content-cache/`;
const CACHE_FILE = `${CACHE_DIRECTORY}tools-manifest.json`;

export function getBundledManifest(): MobileToolManifest {
  return mobileToolManifestSchema.parse(bundledManifest);
}

export async function loadCachedManifest(): Promise<MobileToolManifest | null> {
  if (!FileSystem.documentDirectory) {
    return null;
  }

  const fileInfo = await FileSystem.getInfoAsync(CACHE_FILE);
  if (!fileInfo.exists) {
    return null;
  }

  try {
    const raw = await FileSystem.readAsStringAsync(CACHE_FILE);
    return mobileToolManifestSchema.parse(JSON.parse(raw));
  } catch {
    return null;
  }
}

export async function clearCachedManifest(): Promise<void> {
  if (!FileSystem.documentDirectory) {
    return;
  }

  const fileInfo = await FileSystem.getInfoAsync(CACHE_FILE);
  if (fileInfo.exists) {
    await FileSystem.deleteAsync(CACHE_FILE, { idempotent: true });
  }
}

async function writeCachedManifest(manifest: MobileToolManifest): Promise<void> {
  await FileSystem.makeDirectoryAsync(CACHE_DIRECTORY, { intermediates: true });
  await FileSystem.writeAsStringAsync(CACHE_FILE, JSON.stringify(manifest));
}

export async function refreshRemoteManifest(
  currentManifest: MobileToolManifest,
): Promise<{ manifest: MobileToolManifest; source: RefreshState['source'] } | null> {
  const remoteUrl = process.env.EXPO_PUBLIC_CONTENT_MANIFEST_URL;
  if (!remoteUrl) {
    return null;
  }

  const response = await fetch(remoteUrl);
  if (!response.ok) {
    throw new Error(`Remote manifest request failed with ${response.status}`);
  }

  const parsed = mobileToolManifestSchema.parse(await response.json());
  if (parsed.generatedAt <= currentManifest.generatedAt) {
    return null;
  }

  await writeCachedManifest(parsed);
  return { manifest: parsed, source: 'remote' };
}
