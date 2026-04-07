import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import type { EditorialToolManifest, EditorialToolRecord } from '../src/types/content';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '..');
const adminAppDir = path.join(repoRoot, 'apps', 'admin-web');
const adminDistDir = path.join(adminAppDir, 'dist');
const stylesSource = path.join(adminAppDir, 'src', 'styles.css');
const editorialManifestPath = path.join(repoRoot, 'content', 'generated', 'tools-editorial-manifest.json');

async function ensureDir(dirPath: string) {
  await mkdir(dirPath, { recursive: true });
}

async function readJson<T>(filePath: string): Promise<T> {
  const raw = await readFile(filePath, 'utf8');
  return JSON.parse(raw) as T;
}

async function writeText(filePath: string, value: string) {
  await ensureDir(path.dirname(filePath));
  await writeFile(filePath, value, 'utf8');
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function confidenceBand(tool: EditorialToolRecord): 'low' | 'medium' | 'high' {
  if (tool.confidence < 0.65) {
    return 'low';
  }

  if (tool.confidence < 0.82) {
    return 'medium';
  }

  return 'high';
}

function renderRow(tool: EditorialToolRecord): string {
  const search = [
    tool.displayName,
    tool.slug,
    ...tool.aliases,
    ...tool.topics,
    ...tool.subdomains,
    tool.summary,
  ]
    .join(' ')
    .toLowerCase();

  const wikiLink = tool.wikiUrl
    ? `<a href="${escapeHtml(tool.wikiUrl)}" target="_blank" rel="noreferrer">wiki</a>`
    : '<span class="muted">pending</span>';

  return `
    <tr
      data-search="${escapeHtml(search)}"
      data-wiki="${tool.wikiStatus}"
      data-confidence="${confidenceBand(tool)}"
      data-mode="${tool.articleMode}">
      <td>
        <div class="row-title">${escapeHtml(tool.displayName)}</div>
        <div class="muted">${escapeHtml(tool.slug)}</div>
      </td>
      <td>${tool.referenceCount}</td>
      <td>${tool.sourceSkills.length}</td>
      <td>
        <span class="badge ${confidenceBand(tool)}">${tool.confidence.toFixed(2)}</span>
      </td>
      <td>${escapeHtml(tool.articleMode)}</td>
      <td>
        <span class="badge ${tool.wikiStatus}">${escapeHtml(tool.wikiStatus)}</span>
      </td>
      <td>${wikiLink}</td>
      <td>${tool.topics.slice(0, 3).map((topic) => `<span class="badge">${escapeHtml(topic)}</span>`).join('')}</td>
    </tr>
  `;
}

function renderListRow(title: string, meta: string, body: string): string {
  return `
    <div class="list-row">
      <div class="list-row-header">
        <div class="row-title">${escapeHtml(title)}</div>
        <div class="row-meta">${escapeHtml(meta)}</div>
      </div>
      <div class="row-body">${escapeHtml(body)}</div>
    </div>
  `;
}

function renderHtml(manifest: EditorialToolManifest): string {
  const lowConfidence = [...manifest.tools]
    .filter((tool) => tool.confidence < 0.65)
    .sort((left, right) => left.confidence - right.confidence || right.referenceCount - left.referenceCount)
    .slice(0, 12);
  const heavySources = [...manifest.tools]
    .sort((left, right) => right.sourceSkills.length - left.sourceSkills.length || left.displayName.localeCompare(right.displayName))
    .slice(0, 12);
  const missingWiki = manifest.tools.filter((tool) => tool.wikiStatus === 'missing').length;
  const llmCount = manifest.tools.filter((tool) => tool.articleMode === 'llm').length;
  const rows = manifest.tools.map(renderRow).join('');

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>WikiCompanion Editorial Admin</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <main class="page">
      <section class="hero">
        <p class="kicker">Desktop admin</p>
        <h1 class="title">Editorial workspace</h1>
        <p class="subtitle">
          The phone app now ships only the reader manifest. This admin surface is the desktop companion for source inspection,
          dossier review, wiki maintenance, and release operations.
        </p>
      </section>

      <section class="card-grid">
        <article class="card">
          <div class="metric-label">Editorial manifest</div>
          <div class="metric-value">${escapeHtml(manifest.version)}</div>
          <div class="metric-note">${escapeHtml(new Date(manifest.generatedAt).toLocaleString())}</div>
        </article>
        <article class="card">
          <div class="metric-label">Tool records</div>
          <div class="metric-value">${manifest.toolCount}</div>
          <div class="metric-note">${llmCount} LLM articles, ${manifest.toolCount - llmCount} template articles</div>
        </article>
        <article class="card">
          <div class="metric-label">Wiki coverage</div>
          <div class="metric-value">${manifest.toolCount - missingWiki}</div>
          <div class="metric-note">${missingWiki} tools still need wiki mapping</div>
        </article>
        <article class="card">
          <div class="metric-label">Reader payload</div>
          <div class="metric-value">Slim</div>
          <div class="metric-note">Mobile ships article markdown and essential metadata only</div>
        </article>
      </section>

      <section class="section">
        <h2>Pipeline commands</h2>
        <div class="command-list">
          <div class="command">npm run content:all</div>
          <div class="command">npm run knowledge:wiki:openai -- --limit 25</div>
          <div class="command">npm run wiki:site</div>
          <div class="command">npm run build:android:release</div>
        </div>
        <div class="button-row">
          <a class="button" href="../">Open app shell</a>
          <a class="button" href="https://github.com/danyel-ii/WikiCompanion" target="_blank" rel="noreferrer">Open repo</a>
          <a class="button" href="https://danyel-ii.github.io/cyber-research-wiki/" target="_blank" rel="noreferrer">Open wiki</a>
        </div>
      </section>

      <section class="section">
        <h2>Low-confidence tools</h2>
        <div class="list">
          ${lowConfidence
            .map((tool) =>
              renderListRow(tool.displayName, `confidence ${tool.confidence.toFixed(2)}`, tool.summary),
            )
            .join('')}
        </div>
      </section>

      <section class="section">
        <h2>Heaviest source packets</h2>
        <div class="list">
          ${heavySources
            .map((tool) =>
              renderListRow(
                tool.displayName,
                `${tool.sourceSkills.length} source skills`,
                tool.sourceSkills.slice(0, 4).map((skill) => skill.title).join(' · '),
              ),
            )
            .join('')}
        </div>
      </section>

      <section class="section">
        <h2>Tool registry</h2>
        <div class="controls">
          <input id="search" class="input" type="search" placeholder="Search tools, topics, aliases" />
          <select id="wikiFilter" class="select">
            <option value="all">All wiki states</option>
            <option value="ready">Wiki ready</option>
            <option value="missing">Wiki missing</option>
          </select>
          <select id="confidenceFilter" class="select">
            <option value="all">All confidence</option>
            <option value="low">Low confidence</option>
            <option value="medium">Medium confidence</option>
            <option value="high">High confidence</option>
          </select>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Tool</th>
                <th>Refs</th>
                <th>Sources</th>
                <th>Confidence</th>
                <th>Mode</th>
                <th>Wiki</th>
                <th>Link</th>
                <th>Topics</th>
              </tr>
            </thead>
            <tbody id="toolRows">
              ${rows}
            </tbody>
          </table>
        </div>
      </section>
    </main>

    <script>
      const search = document.getElementById('search');
      const wikiFilter = document.getElementById('wikiFilter');
      const confidenceFilter = document.getElementById('confidenceFilter');
      const rows = Array.from(document.querySelectorAll('#toolRows tr'));

      function applyFilters() {
        const query = (search.value || '').trim().toLowerCase();
        const wiki = wikiFilter.value;
        const confidence = confidenceFilter.value;

        rows.forEach((row) => {
          const matchesQuery = !query || row.dataset.search.includes(query);
          const matchesWiki = wiki === 'all' || row.dataset.wiki === wiki;
          const matchesConfidence = confidence === 'all' || row.dataset.confidence === confidence;
          row.style.display = matchesQuery && matchesWiki && matchesConfidence ? '' : 'none';
        });
      }

      search.addEventListener('input', applyFilters);
      wikiFilter.addEventListener('change', applyFilters);
      confidenceFilter.addEventListener('change', applyFilters);
    </script>
  </body>
</html>`;
}

async function main() {
  const manifest = await readJson<EditorialToolManifest>(editorialManifestPath);
  const css = await readFile(stylesSource, 'utf8');

  await ensureDir(adminDistDir);
  await writeText(path.join(adminDistDir, 'styles.css'), css);
  await writeText(path.join(adminDistDir, 'index.html'), renderHtml(manifest));

  console.log(`Built admin web app with ${manifest.toolCount} editorial tool records`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
