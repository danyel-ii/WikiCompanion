#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
MODE="${1:-debug}"
APP_VERSION="$(node -p "require('${ROOT_DIR}/package.json').version")"
ARCHS="${ANDROID_BUILD_ARCHS:-arm64-v8a}"

if [[ "$MODE" != "debug" && "$MODE" != "release" ]]; then
  echo "Usage: bash scripts/build-android-apk.sh [debug|release]" >&2
  exit 1
fi

cd "$ROOT_DIR"
npx expo prebuild --platform android --no-install

node <<'NODE'
const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const rootBuildGradlePath = path.join(rootDir, 'android', 'build.gradle');
const appBuildGradlePath = path.join(rootDir, 'android', 'app', 'build.gradle');

const localRepoLine = '    maven { url("$rootDir/../node_modules/@react-native-async-storage/async-storage/android/local_repo") }';
const rootBuildGradle = fs.readFileSync(rootBuildGradlePath, 'utf8');

if (!rootBuildGradle.includes(localRepoLine)) {
  const updated = rootBuildGradle.replace(
    /allprojects\s*\{\s*repositories\s*\{\s*google\(\)\s*mavenCentral\(\)\s*/m,
    (match) => `${match}${localRepoLine}\n`,
  );
  fs.writeFileSync(rootBuildGradlePath, updated);
}

let appBuildGradle = fs.readFileSync(appBuildGradlePath, 'utf8');

const releaseSigningBlock = `        release {\n            if (project.hasProperty('CTA_RELEASE_STORE_FILE')) {\n                storeFile file(CTA_RELEASE_STORE_FILE)\n                storePassword CTA_RELEASE_STORE_PASSWORD\n                keyAlias CTA_RELEASE_KEY_ALIAS\n                keyPassword CTA_RELEASE_KEY_PASSWORD\n            }\n        }`;

if (!appBuildGradle.includes("CTA_RELEASE_STORE_FILE")) {
  appBuildGradle = appBuildGradle.replace(
    /signingConfigs\s*\{\s*debug\s*\{[\s\S]*?\n\s*\}\s*\n\s*\}/m,
    (match) => match.replace(/\n\s*\}\s*$/, `\n${releaseSigningBlock}\n    }`),
  );
}

appBuildGradle = appBuildGradle.replace(
  /release\s*\{([\s\S]*?)signingConfig signingConfigs\.debug/m,
  "release {$1signingConfig project.hasProperty('CTA_RELEASE_STORE_FILE') ? signingConfigs.release : signingConfigs.debug",
);

fs.writeFileSync(appBuildGradlePath, appBuildGradle);
NODE

RELEASE_DIR="$ROOT_DIR/releases/android"
mkdir -p "$RELEASE_DIR"

cd "$ROOT_DIR/android"

if [[ "$MODE" == "release" ]]; then
  KEYSTORE_DIR="${ANDROID_KEYSTORE_DIR:-$ROOT_DIR/.secrets/android}"
  KEYSTORE_FILE="${ANDROID_KEYSTORE_PATH:-$KEYSTORE_DIR/upload-keystore.jks}"
  KEY_ALIAS="${ANDROID_KEY_ALIAS:-wikicompanion}"
  KEYSTORE_PASSWORD="${ANDROID_KEYSTORE_PASSWORD:-wikicompanion-release}"
  KEY_PASSWORD="${ANDROID_KEY_PASSWORD:-$KEYSTORE_PASSWORD}"

  mkdir -p "$KEYSTORE_DIR"

  if [[ ! -f "$KEYSTORE_FILE" ]]; then
    keytool -genkeypair \
      -keystore "$KEYSTORE_FILE" \
      -storepass "$KEYSTORE_PASSWORD" \
      -keypass "$KEY_PASSWORD" \
      -alias "$KEY_ALIAS" \
      -dname "CN=WikiCompanion, OU=Mobile, O=WikiCompanion, L=Berlin, S=Berlin, C=DE" \
      -keyalg RSA \
      -keysize 2048 \
      -validity 10000 \
      -storetype PKCS12
  fi

  ./gradlew assembleRelease \
    -PreactNativeArchitectures="$ARCHS" \
    -PCTA_RELEASE_STORE_FILE="$KEYSTORE_FILE" \
    -PCTA_RELEASE_STORE_PASSWORD="$KEYSTORE_PASSWORD" \
    -PCTA_RELEASE_KEY_ALIAS="$KEY_ALIAS" \
    -PCTA_RELEASE_KEY_PASSWORD="$KEY_PASSWORD"

  cp app/build/outputs/apk/release/app-release.apk "$RELEASE_DIR/cyber-tool-atlas-v${APP_VERSION}-release.apk"
  echo "Release APK: $RELEASE_DIR/cyber-tool-atlas-v${APP_VERSION}-release.apk"
else
  ./gradlew assembleDebug -PreactNativeArchitectures="$ARCHS"
  cp app/build/outputs/apk/debug/app-debug.apk "$RELEASE_DIR/cyber-tool-atlas-v${APP_VERSION}-debug.apk"
  echo "Debug APK: $RELEASE_DIR/cyber-tool-atlas-v${APP_VERSION}-debug.apk"
fi
