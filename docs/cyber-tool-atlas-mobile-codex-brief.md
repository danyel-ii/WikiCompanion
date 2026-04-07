# Codex-ready brief — mobile app for cybersecurity tool explainers

This brief is designed for a **new standalone mobile app repo**. The app should feel like a calm, pocket-sized companion to your broader learning system: a searchable tool atlas with readable, engaging explainers and clean links into your deeper wiki.

## Recommended use

1. Create a new empty folder for the app repo.
2. Replace the path placeholder in the command below.
3. Run the command from your terminal.
4. Let Codex inspect the repo, scaffold the app if needed, implement the content pipeline, and leave the repo in a working state.

## Copy-paste Codex command

```bash
codex \
  --model gpt-5.4 \
  --cd /ABSOLUTE/PATH/TO/cyber-tool-atlas-mobile \
  --ask-for-approval on-request \
  --sandbox workspace-write \
  --search \
  "$(cat <<'PROMPT'
You are implementing a brand-new mobile app called "Cyber Tool Atlas".

High-level goal
Build a cross-platform mobile app that:
1. shows a searchable list of the available cybersecurity tools represented in the Anthropic-Cybersecurity-Skills repository,
2. lets the user tap a tool to open a detail page,
3. renders an engaging, high-level blog-style explainer about what the tool is and how it works,
4. links out to an encyclopedic wiki document for that tool on the user's public wiki,
5. stays maintainable through a local content-generation pipeline rather than hard-coded app data.

Important product framing
- This app is a learning companion, not an offensive toolkit.
- The article content must stay high-level, educational, non-hype, and non-operational.
- Do not reproduce exploit steps, long command sequences, evasion guidance, or attack playbooks.
- Focus on mental models, workflow feel, inputs/outputs, common use cases, limitations, and where the tool fits in practice.

Upstream source and target ecosystem
- Upstream source repo: `mukul975/Anthropic-Cybersecurity-Skills`
- Current repo shape:
  - published `index.json`
  - `skills/<skill-slug>/SKILL.md`
  - a regular skill structure with YAML frontmatter and markdown sections
  - contributor guidance expects sections including:
    - When to Use
    - Prerequisites
    - Workflow
    - Key Concepts
    - Tools & Systems
    - Common Scenarios
    - Output Format
- The upstream repo contains many skills across many security domains; the app should present **tools**, not raw skills.
- A single tool may appear in many skills. Aggregate intelligently.
- Target wiki base URL: `https://danyel-ii.github.io/cyber-research-wiki/`
- Wiki integration requirement:
  - each tool article page in the app should expose a clear CTA to the corresponding encyclopedic wiki page
  - support a manual mapping layer because not every tool article will exist on day one
  - the architecture must make it easy to add wiki links later without changing app code

Visual / editorial direction
Use a dark, calm, technical, system-oriented visual language.
The mood should be closer to a quiet instrument panel than a flashy consumer app.
Think:
- precise
- academic
- readable
- subtle separators and panels
- restrained motion
- strong metadata hierarchy
- practical mobile ergonomics

Core architecture decisions
Implement the app as a standalone Expo / React Native project with TypeScript.

Recommended stack
- Expo
- Expo Router
- TypeScript
- `@shopify/flash-list` for the main list surface
- `expo-file-system` for cached remote content
- `@react-native-async-storage/async-storage` for preferences/favorites/cache metadata
- `expo-web-browser` for opening wiki articles
- `expo-linking` / Expo Router route URLs so detail pages are deep-linkable/shareable
- a markdown rendering approach appropriate for React Native detail pages
- lightweight local search; fuzzy search is fine
- avoid introducing a heavyweight backend

Scaffolding rule
- If the directory is empty, scaffold a fresh Expo Router TypeScript app using the current stable recommended Expo template.
- If a project already exists, inspect it and extend it rather than replacing it.
- Use the existing package manager / lockfile if present; otherwise default to npm.

Primary design rule
Do **not** fetch and parse GitHub on-device.
Instead:
1. create a local content pipeline that fetches and processes upstream data,
2. generate normalized content artifacts for the app,
3. bundle a snapshot with the app,
4. optionally refresh from a remote static manifest at runtime.

This separation is essential for speed, offline use, maintainability, and predictable mobile behavior.

What the app must do

A. Tool list screen
- Show a list of normalized tool records, not raw skill records.
- Include:
  - search input
  - filter chips or segmented filters
  - sort control
  - total count
  - pull-to-refresh for remote manifest updates
- Each list card should show:
  - tool name
  - short summary / deck
  - major domains or subdomains
  - aliases (if useful)
  - number of source skills mentioning the tool
  - wiki availability indicator
- The list must remain smooth with a large dataset.

B. Tool detail screen
- Open when a user taps a tool.
- Show:
  - title
  - short summary
  - engaging blog-style explainer rendered from markdown
  - metadata section
  - related skills / source skills
  - aliases
  - topics / domains
  - last generated / last synced timestamp
  - CTA button to open the encyclopedic wiki page
  - graceful placeholder state if the wiki page is not mapped yet
- The article should feel like a readable mini-essay, not like an API dump.

C. Favorites / saved tools
- Add a saved/favorites surface so the app can act like a toolbox over time.
- Saving should work offline and persist locally.
- This can be a tab or a dedicated section, whichever fits the chosen navigation model best.

D. Settings / about
- Show:
  - last content refresh time
  - content version / manifest version
  - source repo link
  - wiki base link
  - clear refresh action
  - optional toggle for reduced motion or dense list layout if easy to implement cleanly

Content strategy
The app's central content model is the **tool article**, not the raw skill.

Implement a content pipeline with the following responsibilities:

1. Fetch upstream inventory
- Download `index.json`
- Iterate through the listed skills
- Fetch each `SKILL.md`

2. Parse skills robustly
- Parse YAML frontmatter
- Parse markdown sections
- Extract:
  - skill slug
  - title
  - description
  - subdomain / tags
  - key concepts
  - common scenarios
  - when-to-use bullets
  - tools and systems references
- The parser must tolerate inconsistencies:
  - bullet lists versus tables
  - missing sections
  - partial markdown quirks
  - tools named with aliases like `dnSpy/dnSpyEx`

3. Derive normalized tool entities
- Use `Tools & Systems` as the primary signal.
- Also implement cautious fallbacks when `Tools & Systems` is missing but the primary tool is obvious from:
  - skill slug
  - title patterns like "with X"
  - description phrasing
- Keep these fallbacks conservative and mark them with lower confidence.
- Support a manual canonicalization / alias override file.

4. Group skills by tool
- Build one canonical tool record per normalized tool.
- Store:
  - `slug`
  - `displayName`
  - `aliases`
  - `summary`
  - `articleMarkdown`
  - `wikiUrl`
  - `wikiStatus`
  - `topics`
  - `subdomains`
  - `referenceCount`
  - `sourceSkills[]`
  - `generatedAt`
  - `articleMode` (`template` or `llm`)
  - `confidence`
- Sort and dedupe carefully.

5. Generate article content
Implement two article-generation modes:

Mode 1: deterministic fallback
- Always available
- Builds a clean, readable article from extracted evidence
- Structure should include:
  - strong opening
  - what the tool is
  - what problem it helps solve
  - how it tends to fit into a workflow
  - what inputs / outputs matter
  - limitations / common mistakes
  - where it fits in a larger learning journey

Mode 2: optional enhanced generation
- If an environment variable such as `BLOG_MODEL_CMD` is present, allow piping the grounded source notes into a local or external text-generation command that returns markdown
- Keep this optional
- The repo must still work fully without this mode
- Never require proprietary credentials just to run the app locally

Editorial constraints for generated articles
- High-level only
- No long copied procedures
- No offensive playbook tone
- No exaggerated marketing language
- Must be grounded in extracted source notes
- Must read like an engaging technical blog post for curious learners

6. Wiki-link mapping
Create a dedicated mapping layer, for example:
- `content/wiki-map.json`
or
- `src/data/wiki-map.json`

This should map canonical tool slugs to wiki URLs or wiki paths.

Rules
- Allow complete explicit URLs
- Allow relative paths against the wiki base
- If no mapping exists:
  - set `wikiUrl = null`
  - show a non-breaking "Wiki article coming soon" state in the app
- Make it trivial to add new wiki links later without touching app logic

7. Output generated artifacts
Generate machine-readable content for the app, for example:
- `content/generated/tools-manifest.json`
- optional per-tool markdown under `content/generated/articles/<slug>.md`

The generated manifest should be the app's canonical runtime content source.

Remote refresh strategy
Implement a simple, static-content refresh system.

Behavior
- Bundle a local snapshot of the tool manifest with the app so first launch is instant and offline-safe.
- Allow a configurable remote manifest URL via environment variable, for example:
  - `EXPO_PUBLIC_CONTENT_MANIFEST_URL`
- On app launch:
  1. load bundled snapshot immediately
  2. load locally cached newer manifest if present
  3. optionally check remote manifest in the background
  4. if a new manifest is available, download it, validate it, cache it, and update the UI
- Handle offline and malformed-content cases gracefully.

Do not build a custom backend for this.
Use static files only.

Navigation / route structure
Use Expo Router and implement a route structure similar to:

- `app/_layout.tsx`
- `app/(tabs)/_layout.tsx`
- `app/(tabs)/index.tsx`                // tools list
- `app/(tabs)/saved.tsx`                // favorites / saved tools
- `app/(tabs)/settings.tsx`             // settings/about
- `app/tool/[slug].tsx`                 // detail page
- `app/search.tsx`                      // optional dedicated search screen if useful

Deep linking
- Give the app a custom scheme
- Make tool detail routes shareable, e.g. `cybertools://tool/<slug>`
- Make sure route URLs are stable

UI / visual spec
Design the app to feel native and calm.

Color / feel
- dark background
- slightly lighter panels
- thin separators and metadata rules
- muted accents rather than neon
- preserve readability first

Typography
- readable sans for main copy
- monospace only for small metadata or labels if useful
- strong hierarchy between title, summary, article body, and metadata

Cards / surfaces
- rounded but restrained cards
- no glossy marketing look
- metadata chips / pills are fine
- subtle shadows only if needed

Motion
- keep it minimal
- respect reduced motion
- no splashy transitions

Accessibility
- large enough touch targets
- dynamic type friendly
- strong contrast
- screen-reader labels for interactive controls
- reduced motion support
- empty states and loading states should be understandable

Search and filtering
Implement local search that works offline against the manifest.

Search should cover:
- tool name
- aliases
- summary
- topics / tags
- subdomains

Filters / sort
- subdomain / domain
- has wiki article
- saved only
- alphabetical
- most referenced
- recently updated (if available)

Do not overcomplicate the first version, but the search must feel useful.

Data model
Create clear typed interfaces, for example:

- `ToolManifest`
- `ToolRecord`
- `ToolSourceSkill`
- `WikiMapEntry`
- `RefreshState`

A good `ToolRecord` shape would include:
- `slug: string`
- `displayName: string`
- `aliases: string[]`
- `summary: string`
- `articleMarkdown: string`
- `wikiUrl: string | null`
- `wikiStatus: "ready" | "missing"`
- `topics: string[]`
- `subdomains: string[]`
- `referenceCount: number`
- `sourceSkills: Array<{ slug: string; title: string; description: string; subdomain?: string; sourceUrl?: string; confidence?: number }>`
- `generatedAt: string`
- `articleMode: "template" | "llm"`
- `confidence: number`

Implementation detail guidance
- Prefer strict TypeScript.
- Keep utilities small and testable.
- Separate parser logic, generation logic, runtime data access, and UI.
- Build reusable presentational components for cards, chips, metadata rows, empty states, and article sections.
- Keep the app resilient if a field is missing.
- Favor maintainable code over clever code.

Content-pipeline scripts
Create scripts such as:
- `scripts/fetch-upstream.ts`
- `scripts/parse-skills.ts`
- `scripts/build-tools.ts`
- `scripts/generate-articles.ts`
- `scripts/build-manifest.ts`

And npm scripts such as:
- `npm run content:sync`
- `npm run content:generate`
- `npm run content:all`

If you prefer a slightly different script layout, that's fine, but keep the responsibilities clear and documented.

Local authoring / maintenance workflow
The repo should support this workflow:
1. run content sync
2. optionally update the wiki map
3. regenerate manifest
4. launch app
5. see new tools and articles immediately

It should also be easy to publish the generated static manifest somewhere later.

Non-goals
Do not:
- build authentication
- build a full CMS
- build a complex backend
- scrape GitHub at runtime on the phone
- add ads, social feed mechanics, or account systems
- make the app feel like a gamified growth product

Testing and verification
Add the highest-leverage tests:
- parser tests for frontmatter / section extraction
- normalization tests for canonical tool names and aliases
- grouping tests so multiple skill mentions become one tool record
- content validation tests for manifest shape
- at least light UI smoke coverage if feasible in one pass

The app must build and run locally without external secrets.

Documentation
Add clear docs:
- `README.md`
- `docs/content-pipeline.md`
- `docs/wiki-linking.md`

Document:
- how upstream sync works
- how tool normalization works
- how to add / edit wiki links
- how remote manifest refresh works
- how article generation fallback vs optional enhancement works

Acceptance criteria
The implementation is successful only if all of the following are true:

1. A working Expo mobile app exists and runs locally.
2. The home screen lists normalized tools rather than raw skills.
3. Tapping a tool opens a detail page with:
   - readable summary
   - engaging markdown article
   - metadata
   - source skill references
   - a wiki CTA or a graceful missing-wiki state
4. Content comes from generated artifacts, not hard-coded hand entry screens.
5. The app includes search and at least basic filters.
6. The app works offline with bundled content.
7. The app can optionally refresh from a remote static manifest URL.
8. Favorites / saved tools persist locally.
9. The codebase includes scripts and docs for updating content over time.
10. Build/test/lint checks pass, or if a given check is not available, add the most appropriate lightweight equivalent and run it.

Delivery rules
- Work autonomously.
- Inspect the repository before making assumptions.
- If the repo is empty, scaffold the app cleanly.
- Prefer one coherent architecture instead of many half-finished options.
- Run the relevant commands locally before finishing.
- Leave a concise final summary describing:
  - what you built
  - key files to review first
  - how to regenerate content
  - what, if anything, remains manual

PROMPT
)"
```

## Optional follow-up brief for later

Once the mobile app exists, the next useful phase would be to generate the **same tool manifest** for both the app and the website/wiki, so you only maintain one content pipeline. That lets the phone app, public site, and research wiki all share the same canonical tool records and wiki-link map.
