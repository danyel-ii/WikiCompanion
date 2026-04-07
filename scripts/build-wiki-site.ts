import { readdir, rm } from 'node:fs/promises';
import path from 'node:path';

import { titleCaseWords } from '../src/lib/content/tooling';
import { outputWikiDir, wikiSiteDir, readJson, writeText, ensureDir } from './lib/fs';

interface WikiArticleJson {
  short_description: string;
  overview: string;
  what_it_is: string;
  how_it_works: string;
  core_concepts: string[];
  typical_workflow: string[];
  use_cases: string[];
  limitations: string[];
  related_tools: Array<{
    name: string;
    relationship: string;
  }>;
  evidence_gaps: string[];
  confidence: 'low' | 'medium' | 'high';
  sources?: Array<{
    title: string;
    url: string;
    publisher: string;
  }>;
}

interface WikiIndexEntry {
  slug: string;
  title: string;
  shortDescription: string;
  confidence: string;
}

interface AndroidReleaseMetadata {
  version: string;
  apkFileName: string;
  apkSizeBytes: number;
  sha256: string;
  releaseUrl: string;
  downloadUrl: string;
}

const wikiJsonDir = path.join(process.cwd(), 'output', 'wiki-json');
const wikiBaseUrl = 'https://danyel-ii.github.io/cyber-research-wiki/';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderInline(text: string): string {
  let html = escapeHtml(text);
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  return html;
}

function markdownToHtml(markdown: string): string {
  const lines = markdown.split('\n');
  const html: string[] = [];
  let paragraph: string[] = [];
  let listItems: string[] = [];
  let inBlockquote = false;
  let blockquoteLines: string[] = [];

  function flushParagraph() {
    if (paragraph.length > 0) {
      html.push(`<p>${renderInline(paragraph.join(' '))}</p>`);
      paragraph = [];
    }
  }

  function flushList() {
    if (listItems.length > 0) {
      html.push(`<ul>${listItems.map((item) => `<li>${renderInline(item)}</li>`).join('')}</ul>`);
      listItems = [];
    }
  }

  function flushBlockquote() {
    if (blockquoteLines.length > 0) {
      html.push(`<blockquote><p>${renderInline(blockquoteLines.join(' '))}</p></blockquote>`);
      blockquoteLines = [];
      inBlockquote = false;
    }
  }

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      flushBlockquote();
      continue;
    }

    if (trimmed.startsWith('> ')) {
      flushParagraph();
      flushList();
      inBlockquote = true;
      blockquoteLines.push(trimmed.slice(2));
      continue;
    }

    if (inBlockquote) {
      flushBlockquote();
    }

    const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      flushParagraph();
      flushList();
      const level = headingMatch[1]!.length;
      html.push(`<h${level}>${renderInline(headingMatch[2]!)}</h${level}>`);
      continue;
    }

    if (trimmed.startsWith('- ')) {
      flushParagraph();
      listItems.push(trimmed.slice(2));
      continue;
    }

    flushList();
    paragraph.push(trimmed);
  }

  flushParagraph();
  flushList();
  flushBlockquote();

  return html.join('\n');
}

function pageTemplate(title: string, content: string, description: string, activePath = '/'): string {
  const canonical = new URL(activePath.replace(/^\//, ''), wikiBaseUrl).toString();
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)} | Cyber Research Wiki</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${canonical}" />
    <link rel="stylesheet" href="/cyber-research-wiki/assets/wiki.css" />
  </head>
  <body>
    <header class="site-shell">
      <div class="shell-inner">
        <a class="brand" href="/cyber-research-wiki/">Cyber Research Wiki</a>
        <nav class="nav">
          <a href="/cyber-research-wiki/">Index</a>
          <a href="https://danyel-ii.github.io/WikiCompanion/">Pocket Atlas</a>
        </nav>
      </div>
    </header>
    <main class="page-shell">
      ${content}
    </main>
  </body>
</html>
`;
}

function stylesCss(): string {
  return `:root{
  --bg:#0a1016;
  --panel:#121a22;
  --panel-2:#16212c;
  --line:#253240;
  --text:#e8edf2;
  --muted:#9dafbf;
  --accent:#b7c8d8;
  --warm:#d0b58a;
  --link:#c8d9ea;
  --max:960px;
}
*{box-sizing:border-box}
html,body{margin:0;padding:0;background:var(--bg);color:var(--text);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.6}
a{color:var(--link);text-decoration:none}
a:hover{text-decoration:underline}
.site-shell{position:sticky;top:0;z-index:10;border-bottom:1px solid var(--line);background:rgba(10,16,22,.92);backdrop-filter:blur(10px)}
.shell-inner,.page-shell{max-width:var(--max);margin:0 auto;padding:0 20px}
.shell-inner{display:flex;align-items:center;justify-content:space-between;min-height:64px}
.brand{font-weight:700;letter-spacing:.02em;color:var(--text)}
.nav{display:flex;gap:16px;font-size:14px}
.hero{padding:48px 0 24px}
.kicker{text-transform:uppercase;letter-spacing:.12em;font-size:12px;color:var(--warm);margin:0 0 10px}
.hero h1{margin:0 0 12px;font-size:40px;line-height:1.1}
.hero p{margin:0;max-width:760px;color:var(--muted)}
.meta{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px}
.pill{display:inline-flex;align-items:center;padding:7px 12px;border:1px solid var(--line);border-radius:999px;background:var(--panel);color:var(--muted);font-size:13px}
.install-panel{margin:0 0 32px;padding:22px;border-radius:20px;border:1px solid var(--line);background:linear-gradient(180deg,var(--panel),var(--panel-2))}
.install-panel h2{margin:0 0 10px;font-size:24px;line-height:1.2}
.install-panel p{margin:0 0 14px;color:var(--muted)}
.install-actions{display:flex;flex-wrap:wrap;gap:12px;margin:18px 0}
.button{display:inline-flex;align-items:center;justify-content:center;padding:11px 16px;border-radius:12px;border:1px solid var(--line);background:var(--text);color:var(--bg);font-weight:600}
.button.secondary{background:transparent;color:var(--text)}
.checksum{margin:0;padding:14px 16px;border-radius:14px;border:1px solid var(--line);background:#0d141c;overflow:auto;font:13px/1.5 ui-monospace,SFMono-Regular,Menlo,monospace;color:var(--accent)}
.search{margin:24px 0 28px}
.search input{width:100%;padding:14px 16px;border-radius:14px;border:1px solid var(--line);background:var(--panel);color:var(--text);font-size:15px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;padding-bottom:48px}
.card{display:block;padding:18px;border-radius:18px;border:1px solid var(--line);background:linear-gradient(180deg,var(--panel),var(--panel-2));box-shadow:0 12px 40px rgba(0,0,0,.18)}
.card h2{margin:0 0 10px;font-size:20px;line-height:1.2;color:var(--text)}
.card p{margin:0 0 14px;color:var(--muted);font-size:14px}
.card small{color:var(--warm);text-transform:uppercase;letter-spacing:.08em}
.article{padding:42px 0 64px}
.article h1{font-size:42px;line-height:1.1;margin:0 0 12px}
.article h2{margin-top:34px;font-size:24px;line-height:1.2}
.article p,.article li,.article blockquote{color:var(--text);font-size:16px}
.article blockquote{margin:0 0 18px;padding:14px 18px;border-left:3px solid var(--warm);background:var(--panel)}
.article ul{padding-left:20px}
.article code{padding:2px 6px;border-radius:6px;background:#1b2631;color:#f0f4f8}
.article .lede{color:var(--muted);font-size:18px;max-width:820px}
.footer-space{height:40px}
@media (max-width:720px){
  .shell-inner{flex-direction:column;align-items:flex-start;justify-content:center;padding-top:12px;padding-bottom:12px}
  .nav{margin-top:8px}
  .hero h1,.article h1{font-size:32px}
}`;
}

function humanFileSize(bytes: number): string {
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
}

function installPanel(metadata: AndroidReleaseMetadata | null): string {
  if (!metadata) {
    return `<section class="install-panel">
  <p class="kicker">Android install</p>
  <h2>Pocket Atlas install path</h2>
  <p>The Android release metadata is not available in this build. Use the GitHub releases page for the latest signed APK.</p>
  <div class="install-actions">
    <a class="button" href="https://github.com/danyel-ii/WikiCompanion/releases">Open releases</a>
  </div>
</section>`;
  }

  return `<section class="install-panel">
  <p class="kicker">Android install</p>
  <h2>Install the Pocket Atlas app</h2>
  <p>The wiki and the app ship from the same repository. If you want the mobile reader, download the signed Android APK for v${escapeHtml(metadata.version)} and verify its checksum before installing.</p>
  <div class="meta">
    <span class="pill">${escapeHtml(metadata.apkFileName)}</span>
    <span class="pill">${escapeHtml(humanFileSize(metadata.apkSizeBytes))}</span>
    <span class="pill">SHA-256 published</span>
  </div>
  <div class="install-actions">
    <a class="button" href="${escapeHtml(metadata.downloadUrl)}">Download APK</a>
    <a class="button secondary" href="${escapeHtml(metadata.releaseUrl)}">View release notes</a>
  </div>
  <pre class="checksum">${escapeHtml(metadata.sha256)}</pre>
</section>`;
}

function indexTemplate(entries: WikiIndexEntry[], metadata: AndroidReleaseMetadata | null): string {
  const cards = entries
    .map(
      (entry) => `<a class="card" href="/cyber-research-wiki/tools/${entry.slug}/">
  <small>${escapeHtml(entry.confidence)} confidence</small>
  <h2>${escapeHtml(entry.title)}</h2>
  <p>${escapeHtml(entry.shortDescription)}</p>
</a>`,
    )
    .join('\n');

  const content = `<section class="hero">
  <p class="kicker">Pocket atlas companion</p>
  <h1>Cyber Research Wiki</h1>
  <p>A generated encyclopedia of cybersecurity tools, built from the same source pipeline as the Pocket Atlas app and published as a static GitHub Pages site.</p>
  <div class="meta">
    <span class="pill">${entries.length} wiki entries</span>
    <span class="pill">Generated from a shared tool pipeline</span>
  </div>
</section>
${installPanel(metadata)}
<section class="search">
  <input id="wiki-search" type="search" placeholder="Search wiki entries" aria-label="Search wiki entries" />
</section>
<section id="wiki-grid" class="grid">
  ${cards}
</section>
<script>
const input = document.getElementById('wiki-search');
const cards = Array.from(document.querySelectorAll('#wiki-grid .card'));
input?.addEventListener('input', () => {
  const query = input.value.toLowerCase().trim();
  for (const card of cards) {
    const match = card.textContent.toLowerCase().includes(query);
    card.style.display = match ? '' : 'none';
  }
});
</script>`;

  return pageTemplate('Cyber Research Wiki', content, 'Generated cybersecurity encyclopedia and tool wiki.', '/');
}

async function main() {
  const wikiFiles = (await readdir(outputWikiDir)).filter((file) => file.endsWith('.md')).sort((left, right) => left.localeCompare(right));
  const androidReleaseMetadata = await readJson<AndroidReleaseMetadata>(
    path.join(process.cwd(), 'content', 'release', 'android-release.json'),
  ).catch(() => null);
  await rm(wikiSiteDir, { recursive: true, force: true });
  await ensureDir(wikiSiteDir);
  await ensureDir(path.join(wikiSiteDir, 'tools'));
  await ensureDir(path.join(wikiSiteDir, 'assets'));

  const indexEntries: WikiIndexEntry[] = [];

  for (const file of wikiFiles) {
    const slug = file.replace(/\.md$/, '');
    const markdown = await readJsonOrText(path.join(outputWikiDir, file));
    const articleJson = await readJson<WikiArticleJson>(path.join(wikiJsonDir, `${slug}.json`)).catch(() => null);
    const title = articleJson?.sources ? markdown.split('\n')[0]?.replace(/^#\s+/, '').trim() || titleCaseWords(slug.replace(/-/g, ' ')) : markdown.split('\n')[0]?.replace(/^#\s+/, '').trim() || titleCaseWords(slug.replace(/-/g, ' '));
    const shortDescription =
      articleJson?.short_description ??
      markdown
        .split('\n')
        .find((line) => line.startsWith('> '))
        ?.replace(/^>\s+/, '')
        .trim() ??
      '';

    indexEntries.push({
      slug,
      title,
      shortDescription,
      confidence: articleJson?.confidence ?? 'unknown',
    });

    const articleMarkup = `<article class="article">
  ${markdownToHtml(markdown)}
  <div class="footer-space"></div>
</article>`;

    await writeText(
      path.join(wikiSiteDir, 'tools', slug, 'index.html'),
      pageTemplate(title, articleMarkup, shortDescription || `${title} encyclopedia entry.`, `/tools/${slug}/`),
    );
  }

  await writeText(path.join(wikiSiteDir, 'index.html'), indexTemplate(indexEntries, androidReleaseMetadata));
  await writeText(path.join(wikiSiteDir, 'assets', 'wiki.css'), stylesCss());
  await writeText(
    path.join(wikiSiteDir, '404.html'),
    pageTemplate(
      'Not Found',
      `<section class="hero"><p class="kicker">Wiki page</p><h1>Page not found</h1><p>The requested wiki page does not exist in the current build.</p></section>`,
      'Wiki page not found.',
      '/404.html',
    ),
  );

  console.log(`Built wiki site with ${indexEntries.length} pages in ${wikiSiteDir}`);
}

async function readJsonOrText(filePath: string): Promise<string> {
  return (await import('node:fs/promises')).readFile(filePath, 'utf8');
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
