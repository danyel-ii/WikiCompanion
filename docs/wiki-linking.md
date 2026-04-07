# Wiki Linking

Wiki links are controlled primarily through generated local wiki pages, with `content/wiki-map.json` still available as an override layer.

## Supported values

- Full URLs such as `https://example.com/tool-page`
- Relative paths such as `/tools/ghidra/`

Relative paths are resolved against:

`https://danyel-ii.github.io/cyber-research-wiki/`

## How to add a wiki page

1. Generate or update the tool article in `output/wiki/<slug>.md`
2. Run `npm run wiki:site`
3. Run `npm run content:generate`

If the wiki page should point somewhere other than the default local generated page, add an override in `content/wiki-map.json`.

Example:

```json
{
  "ghidra": "/tools/ghidra/"
}
```

Without an override, the manifest now automatically points generated wiki pages to:

```text
https://danyel-ii.github.io/cyber-research-wiki/tools/<slug>/
```

## Missing mappings

If a slug has neither:

- a generated local wiki page in `output/wiki/`
- nor an override in `content/wiki-map.json`

then:

- the manifest sets `wikiUrl` to `null`
- the app marks `wikiStatus` as `missing`
- the detail page shows `Wiki article coming soon`

No app code changes are required when new wiki links are added.
