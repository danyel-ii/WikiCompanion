# Cyber Tool Atlas

Cyber Tool Atlas is a standalone Expo / React Native mobile app that turns the `mukul975/Anthropic-Cybersecurity-Skills` repository into a calm, searchable atlas of cybersecurity tools. This repo is also the source-of-truth for the public wiki site, so the app and the wiki are maintained from the same content pipeline.

## What it includes

- Expo Router app with three tabs: atlas, saved tools, and settings
- Manifest-driven tool list built from normalized tool records rather than raw skill entries
- Mobile bundle trimmed to reader-facing fields only: essential tool metadata, article markdown, favorites/preferences, and refresh/cache logic
- Separate editorial manifest and admin package for desktop review, source inspection, dossier triage, and wiki operations
- Tool detail screens with markdown essays, metadata, and wiki CTA states
- Offline favorites and display preferences via AsyncStorage
- Static-content refresh path using a bundled snapshot, cached manifest, and optional remote manifest URL
- Local content pipeline for fetching upstream skills, parsing markdown, grouping tools, generating articles, and building the final manifest
- Static wiki-site builder that publishes the generated encyclopedia to GitHub Pages
- Dual deployment workflows:
  - `https://danyel-ii.github.io/WikiCompanion/` for the app
  - `https://danyel-ii.github.io/cyber-research-wiki/` for the wiki

## Getting started

This repository is standardized on Node `24` in CI and recommended local usage. The supported local range is Node `20` to `24`, but the workflows now run on `24`.

```bash
nvm use
npm install
npm run content:all
npm run start
```

If you want the app to check a remotely hosted manifest at runtime, set:

```bash
EXPO_PUBLIC_CONTENT_MANIFEST_URL=https://your-static-host/tools-manifest.json
```

If you want optional article enhancement during content generation, set:

```bash
BLOG_MODEL_CMD="your-command-here"
```

The command should read grounded notes from stdin and return markdown on stdout. The repo works without it.

## Common commands

```bash
npm run content:sync
npm run content:generate
npm run content:all
npm run build:admin:web
npm run build:android:apk
npm run build:android:release
npm run wiki:site
npm run typecheck
npm audit
npm run test
npm run lint
npm run build:web
```

## Android installation build

For a local debug install:

```bash
npm run build:android:apk
```

For the signed release APK:

```bash
npm run build:android:release
npm run release:metadata:android
```

The current Android release metadata is tracked in:

```bash
content/release/android-release.json
```

The APK itself is written to `releases/android/`, and the build script generates a local keystore under `.secrets/android/` if one does not already exist. Keep that directory private.

For `v1.2.1`:

- Release page: `https://github.com/danyel-ii/WikiCompanion/releases/tag/v1.2.1`
- Direct APK: `https://github.com/danyel-ii/WikiCompanion/releases/download/v1.2.1/cyber-tool-atlas-v1.2.1-release.apk`
- SHA-256: `58e5033a51c6c9884f5300db952884b6abf70e35323973b480b3b18e21add7f7`

## Security notes

- `.env` and `.secrets/` stay out of version control.
- The app no longer depends on `react-native-markdown-display`; article rendering is handled by the local renderer in `components/article/ArticleMarkdown.tsx`.
- `npm audit` should currently return no unresolved production vulnerabilities after install.

Verify the APK before installing:

```bash
shasum -a 256 releases/android/cyber-tool-atlas-v1.2.1-release.apk
```

Install the release APK on a connected Android device with:

```bash
adb install -r releases/android/cyber-tool-atlas-v1.2.1-release.apk
```

## Key files

- `app/(tabs)/index.tsx`: atlas list, search, filters, refresh
- `app/tool/[slug].tsx`: detail screen with article and core metadata
- `apps/admin-web/`: desktop editorial admin package
- `src/providers/AppStateProvider.tsx`: bundled/cache/remote mobile manifest flow plus local persistence
- `scripts/`: end-to-end content pipeline
- `content/wiki-map.json`: manual wiki mapping layer
- `content/tool-overrides.json`: canonicalization and alias overrides
- `site/wiki-build/`: generated static wiki site output
- `.github/workflows/deploy-app-pages.yml`: deploys the app web build to this repo’s Pages site
- `.github/workflows/deploy-wiki-pages.yml`: deploys the generated wiki site into the `cyber-research-wiki` repo

## Single Repo, Two Sites

This repository is the authoring source for both public URLs:

- App: `https://danyel-ii.github.io/WikiCompanion/`
- Desktop admin: `https://danyel-ii.github.io/WikiCompanion/admin/`
- Wiki: `https://danyel-ii.github.io/cyber-research-wiki/`

GitHub Pages only serves one Pages site per repository, so the wiki remains published from the separate `cyber-research-wiki` repository. The difference is that you no longer maintain that repo by hand. This repo generates the wiki build and a GitHub Action pushes it there automatically.

## Wiki Publishing

The canonical encyclopedia source lives here:

- markdown pages: `output/wiki/`
- structured article JSON: `output/wiki-json/`
- research dossiers: `output/wiki-research/`
- editorial manifest: `content/generated/tools-editorial-manifest.json`
- mobile manifest: `content/generated/tools-manifest.json`
- static wiki build: `site/wiki-build/`

Build the static wiki locally with:

```bash
npm run wiki:site
```

To enable automatic deployment to `cyber-research-wiki`, add this repository secret:

- `WIKI_PAGES_DEPLOY_TOKEN`

That token must have permission to push to `danyel-ii/cyber-research-wiki`.

## Documentation

- `docs/content-pipeline.md`
- `docs/wiki-linking.md`
