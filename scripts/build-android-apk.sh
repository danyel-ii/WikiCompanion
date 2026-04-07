#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"

cd "$ROOT_DIR"
npx expo prebuild --platform android --no-install
node <<'NODE'
const fs = require('fs');
const path = require('path');

const buildGradlePath = path.join(process.cwd(), 'android', 'build.gradle');
const localRepoLine = `    maven { url("$rootDir/../node_modules/@react-native-async-storage/async-storage/android/local_repo") }`;
const source = fs.readFileSync(buildGradlePath, 'utf8');

if (!source.includes(localRepoLine)) {
  const updated = source.replace(
    /allprojects\s*\{\s*repositories\s*\{\s*google\(\)\s*mavenCentral\(\)\s*/m,
    (match) => `${match}${localRepoLine}\n`,
  );
  fs.writeFileSync(buildGradlePath, updated);
}
NODE
cd android
./gradlew assembleDebug
