# Content Pipeline

The app never scrapes GitHub on-device. All runtime content comes from generated static artifacts.

## Runtime baseline

- CI / recommended Node: `24`
- Supported local Node range: `20` to `24`
- Mobile app consumes `content/generated/tools-manifest.json`
- Desktop/editorial tools consume `content/generated/tools-editorial-manifest.json`

## Flow

1. `npm run content:sync`
2. `npm run content:generate`
3. `npm run wiki:site`
4. Build desktop admin if needed with `npm run build:admin:web`
5. Launch the app and it loads `content/generated/tools-manifest.json`

The Android packaging flow is separate from the content pipeline:

1. regenerate content if needed
2. run `npm run build:android:release`
3. run `npm run release:metadata:android`
4. verify and install `releases/android/cyber-tool-atlas-v<version>-release.apk`

For repo hygiene and security checks:

1. `npm run typecheck`
2. `npm run lint`
3. `npm run test`
4. `npm audit`

For Android release verification:

1. `shasum -a 256 releases/android/cyber-tool-atlas-v<version>-release.apk`
2. compare it against `content/release/android-release.json`

## Script responsibilities

- `scripts/fetch-upstream.ts`
  Downloads `index.json` plus every upstream `SKILL.md` into `content/upstream/`.
- `scripts/parse-skills.ts`
  Parses YAML frontmatter and markdown sections, then extracts structured skill evidence into `content/upstream/parsed-skills.json`.
- `scripts/build-tools.ts`
  Normalizes tool names, applies alias overrides, groups source skills by tool, and writes `content/generated/tools.json`.
- `scripts/generate-articles.ts`
  Produces per-tool markdown essays under `content/generated/articles/` and a merged `tools-with-articles.json`.
- `scripts/build-manifest.ts`
  Applies wiki mappings, auto-detects locally generated wiki pages, validates the final shape, and writes:
  - the mobile runtime manifest at `content/generated/tools-manifest.json`
  - the editorial manifest at `content/generated/tools-editorial-manifest.json`
- `scripts/build-wiki-site.ts`
  Converts `output/wiki/*.md` plus the final article JSON into a static GitHub Pages wiki under `site/wiki-build/`.
- `scripts/write-android-release-metadata.ts`
  Computes the current signed APK checksum and writes `content/release/android-release.json` for docs and wiki install surfaces.

## Deterministic vs optional enhanced articles

- Default mode is deterministic and template-based.
- If `BLOG_MODEL_CMD` is present, article generation pipes grounded notes into that command.
- If the command fails or returns empty output, the pipeline falls back to the deterministic article.

## Normalization strategy

- `Tools & Systems` is the primary extraction signal.
- If that section is missing, the parser uses conservative title and description patterns such as `with X` or `using X`.
- `content/tool-overrides.json` is the final authority for alias collapsing and canonical slugs.

## Publishing a remote manifest

The generated `content/generated/tools-manifest.json` can be hosted as a plain static file. Point `EXPO_PUBLIC_CONTENT_MANIFEST_URL` at that URL and the app will:

1. load the bundled snapshot immediately
2. load a newer cached manifest if present
3. check the remote manifest in the background
4. cache and apply it only when `generatedAt` is newer

## Mobile vs editorial content

- Mobile runtime uses the compact manifest only:
  - essential tool metadata
  - article markdown
  - wiki availability
- Editorial workflows use the separate editorial manifest:
  - source skill provenance
  - generation mode
  - confidence values
  - review-oriented metadata

This keeps the phone bundle focused on reading while preserving richer material for desktop/admin review.

## Desktop admin package

- `apps/admin-web/` contains the standalone editorial admin surface.
- `scripts/build-admin-web.ts` renders it from `content/generated/tools-editorial-manifest.json`.
- The Pages deploy workflow merges that output into the app site under `/admin/`.

## Dual-site publishing

This repo is the source-of-truth for both:

- the Pocket Atlas web app
- the public Cyber Research Wiki site

GitHub Pages only serves one site per repository, so the app is deployed from this repo and the wiki build is pushed into the separate `cyber-research-wiki` Pages repository by GitHub Actions.
