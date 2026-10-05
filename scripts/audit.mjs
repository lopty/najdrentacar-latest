// Quality gate for the prerendered site in dist/. Exits with code 1 on any failure.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const SITE_URL = 'https://najdrentacar.com';
const failures = [];
const warnings = [];
const fail = (check, msg) => failures.push(`[${check}] ${msg}`);

if (!fs.existsSync(dist)) {
  console.error('dist/ not found. Run the build first.');
  process.exit(1);
}

// Collect pages: dist/**/index.html -> URL path
const pages = new Map();
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name === 'index.html') {
      const rel = path.relative(dist, dir).split(path.sep).join('/');
      pages.set(rel ? `/${rel}/` : '/', fs.readFileSync(full, 'utf8'));
    }
  }
})(dist);

const decode = (s) =>
  s
    .replace(/<!--.*?-->/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
const first = (html, re) => (html.match(re) || [])[1];
const mainOf = (html) => first(html, /<main[^>]*>([\s\S]*)<\/main>/) ?? '';
const hrefsOf = (html) => [...html.matchAll(/<a\b[^>]*\bhref="([^"]*)"/g)].map((m) => m[1].replace(/&amp;/g, '&'));
const internal = (href) => (href.startsWith('/') && !href.startsWith('//') ? href.split('#')[0].split('?')[0] : null);

const seen = { title: new Map(), description: new Map(), h1: new Map(), canonical: new Map() };
const inbound = new Map([...pages.keys()].map((p) => [p, new Set()]));
const inboundFromMain = new Map([...pages.keys()].map((p) => [p, new Set()]));
const blocks = new Map(); // long text block -> pages containing it
const TRUST = ['/about/', '/team/', '/licence/', '/service-standards/', '/reviews/', '/contact/'];
const BANNED = ['RTA Permit', 'Garhoud', '338 8200', '50 123 4567', '971501234567', '524560201', '52 456 0201', 'AggregateRating', 'reviewCount', 'lorem ipsum'];

for (const [url, html] of pages) {
  const main = mainOf(html);

  // Head tags
  const title = decode(first(html, /<title>([\s\S]*?)<\/title>/) ?? '');
  const description = (first(html, /<meta name="description" content="([^"]*)"/) ?? '').replace(/&amp;/g, '&');
  const canonical = first(html, /<link rel="canonical" href="([^"]*)"/);
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => decode(m[1]));

  if (!title) fail('head', `${url} has no <title>`);
  else if (title.length > 60) fail('head', `${url} title is ${title.length} chars (max 60): "${title}"`);
  if (!description) fail('head', `${url} has no meta description`);
  else if (description.length < 70 || description.length > 200)
    fail('head', `${url} meta description is ${description.length} chars (70 to 200)`);
  else if (description.length > 160) warnings.push(`${url} meta description is ${description.length} chars and may be truncated`);
  if (canonical !== SITE_URL + url) fail('head', `${url} canonical is "${canonical}"`);
  if (h1s.length !== 1) fail('h1', `${url} has ${h1s.length} <h1> elements`);
  if (!/property="og:title"/.test(html) || !/property="og:image"/.test(html)) fail('head', `${url} is missing Open Graph tags`);

  for (const [key, value] of [['title', title], ['description', description], ['h1', h1s[0]], ['canonical', canonical]]) {
    if (!value) continue;
    if (seen[key].has(value)) fail('duplicate', `${key} "${value}" is used by ${seen[key].get(value)} and ${url}`);
    else seen[key].set(value, url);
  }

  // Structured data must parse
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(m[1]);
    } catch {
      fail('schema', `${url} has JSON-LD that does not parse`);
    }
  }

  // Links: every internal link must resolve to a page or file in dist
  for (const href of hrefsOf(html)) {
    const target = internal(href);
    if (target === null) continue;
    if (pages.has(target)) {
      if (target !== url) inbound.get(target).add(url);
    } else if (!fs.existsSync(path.join(dist, target)) || target.endsWith('/')) {
      fail('links', `${url} links to missing page ${href}`);
    } else if (!path.extname(target)) {
      fail('links', `${url} links to ${href} without a trailing slash`);
    }
  }
  for (const href of hrefsOf(main)) {
    const target = internal(href);
    if (target && pages.has(target) && target !== url) inboundFromMain.get(target).add(url);
  }
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    const src = first(m[0], /\bsrc="([^"]*)"/);
    const alt = first(m[0], /\balt="([^"]*)"/);
    if (src?.startsWith('/') && !fs.existsSync(path.join(dist, src))) fail('images', `${url} references missing image ${src}`);
    if (!alt || alt.length < 5) fail('images', `${url} image ${src} has no descriptive alt text`);
  }

  // Education pages end with five answered questions
  if (url.startsWith('/guides/') && url !== '/guides/') {
    const questions = (html.match(/"@type":"Question"/g) || []).length;
    if (questions < 5) fail('faq', url + ' has ' + questions + ' FAQ entries (minimum 5)');
  }
  if (/<script type="module"/.test(html)) fail('speed', url + ' ships a client script');

  // Navigation must work without JavaScript
  if (/<button\b/.test(html)) fail('nav', `${url} contains a <button>; use <a href> for navigation`);
  if (/\bonclick=/i.test(html)) fail('nav', `${url} contains an inline onclick handler`);
  if (/href="#\/|href="javascript:/i.test(html)) fail('nav', `${url} contains a hash or javascript link`);

  // Every page links to the trust pages
  const links = new Set(hrefsOf(html).map(internal));
  for (const t of TRUST) if (t !== url && !links.has(t)) fail('trust', `${url} does not link to ${t}`);

  // Content rules
  const text = decode(main);
  if (/[—–]/.test(text)) fail('copy', `${url} contains an em dash or en dash in page copy`);
  for (const word of BANNED) if (html.includes(word)) fail('facts', `${url} contains banned or unverified text "${word}"`);
  if (text.split(' ').length < 150) fail('thin', `${url} has only ${text.split(' ').length} words in <main>`);

  // Repeated long text blocks across pages
  for (const m of main.matchAll(/<(p|li|dd)\b[^>]*>([\s\S]*?)<\/\1>/g)) {
    const block = decode(m[2]);
    if (block.length <= 140) continue;
    if (!blocks.has(block)) blocks.set(block, new Set());
    blocks.get(block).add(url);
  }
}

for (const [block, urls] of blocks) {
  if (urls.size > 1) fail('repeat', `text repeated on ${[...urls].join(', ')}: "${block.slice(0, 90)}..."`);
}

// Orphans: each page needs an inbound link from the body of another page, not only from the footer
for (const [url, from] of inbound) if (url !== '/' && from.size === 0) fail('orphan', `${url} has no inbound internal links`);
for (const [url, from] of inboundFromMain)
  if (url !== '/' && from.size === 0) fail('orphan', `${url} is only linked from the header or footer`);

// Sitemap, robots, llms
const sitemapPath = path.join(dist, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) fail('sitemap', 'sitemap.xml is missing');
else {
  const locs = [...fs.readFileSync(sitemapPath, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const unique = new Set(locs);
  if (unique.size !== locs.length) fail('duplicate', 'sitemap.xml contains duplicate URLs');
  for (const loc of unique) if (!pages.has(loc.replace(SITE_URL, ''))) fail('sitemap', `sitemap lists ${loc} but no page exists`);
  for (const url of pages.keys()) if (!unique.has(SITE_URL + url)) fail('sitemap', `${url} is missing from sitemap.xml`);
}
for (const file of ['robots.txt', 'llms.txt', '404.html'])
  if (!fs.existsSync(path.join(dist, file))) fail('files', `${file} is missing`);
const robots = fs.existsSync(path.join(dist, 'robots.txt')) ? fs.readFileSync(path.join(dist, 'robots.txt'), 'utf8') : '';
if (/Disallow: \/\s*$/m.test(robots)) fail('robots', 'robots.txt blocks crawling');
for (const bot of ['Googlebot', 'GPTBot', 'ClaudeBot', 'PerplexityBot'])
  if (!robots.includes(`User-agent: ${bot}`)) fail('robots', `robots.txt does not name ${bot}`);

// Licence number shown on every page
for (const [url, html] of pages) if (!html.includes('532541')) fail('facts', `${url} does not show licence number 532541`);

console.log(`Audited ${pages.size} pages.`);
for (const w of warnings) console.log(`  warning: ${w}`);
if (failures.length) {
  console.error(`\n${failures.length} failure(s):`);
  for (const f of failures) console.error(`  ${f}`);
  process.exit(1);
}
console.log('All checks passed: no duplicate URLs, titles, descriptions or H1s; no broken internal links; no repeated long text; no orphan pages.');
