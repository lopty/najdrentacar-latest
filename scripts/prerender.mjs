// Prerenders every route to static HTML and writes sitemap.xml, robots.txt and llms.txt.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const server = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href);
const { ROUTES, NOT_FOUND, BUSINESS, HOURS_SENTENCE, SITE_URL, LLMS, renderRoute } = server;

// Pages are fully static, so the client script is dropped: no JavaScript is shipped to visitors.
// Remove the two replace() calls below if a page ever needs client-side interactivity.
const template = fs
  .readFileSync(path.join(dist, 'index.html'), 'utf8')
  .replace(/\s*<script type="module"[^>]*><\/script>/g, '')
  .replace(/\s*<link rel="modulepreload"[^>]*>/g, '');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const DEFAULT_OG = '/images/og-najd-rent-a-car.jpg';

function head(route, { noindex = false } = {}) {
  const url = SITE_URL + route.path;
  const image = SITE_URL + (route.ogImage ?? DEFAULT_OG);
  const tags = [
    `<title>${esc(route.title)}</title>`,
    `<meta name="description" content="${esc(route.description)}" />`,
    noindex ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:site_name" content="${esc(BUSINESS.name)}" />`,
    `<meta property="og:type" content="${route.ogType ?? 'website'}" />`,
    `<meta property="og:title" content="${esc(route.title)}" />`,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:image" content="${esc(image)}" />`,
    `<meta property="og:locale" content="en_AE" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    ...route.jsonLd.map(
      (data) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`,
    ),
  ];
  return tags.join('\n    ');
}

function writePage(file, route, opts) {
  const html = template.replace('<!--app-head-->', head(route, opts)).replace('<!--app-html-->', renderRoute(route));
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

for (const route of ROUTES) {
  writePage(path.join(dist, route.path, 'index.html'), route);
}
writePage(path.join(dist, '404.html'), NOT_FOUND, { noindex: true });

// sitemap.xml
const today = new Date().toISOString().slice(0, 10);
const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  ROUTES.map((r) => `  <url><loc>${SITE_URL}${r.path}</loc><lastmod>${today}</lastmod></url>`).join('\n') +
  '\n</urlset>\n';
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);

// robots.txt: search engines and AI crawlers are explicitly allowed.
const bots = [
  'Googlebot',
  'Bingbot',
  'Google-Extended',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Applebot',
  'Applebot-Extended',
  'CCBot',
];
const robots =
  'User-agent: *\nAllow: /\n\n' +
  bots.map((b) => `User-agent: ${b}\nAllow: /\n`).join('\n') +
  `\nSitemap: ${SITE_URL}/sitemap.xml\n`;
fs.writeFileSync(path.join(dist, 'robots.txt'), robots);

// llms.txt
const aed = (n) => `AED ${n.toLocaleString('en-US')}`;
const link = (name, p, note) => `- [${name}](${SITE_URL}${p})${note ? `: ${note}` : ''}`;
const llms = `# ${BUSINESS.name}

> ${BUSINESS.legalName} is a licensed car rental company in Dubai, United Arab Emirates, serving clients since ${BUSINESS.foundingYear}. It rents economy cars, SUVs and luxury vehicles by the day, week, month and year, self-drive or with a chauffeur.

## Verified company facts

- Legal name: ${BUSINESS.legalName}
- Commercial licence number: ${BUSINESS.licenceNumber}, issued by the ${BUSINESS.licenceAuthority}
- Licensed activity: ${BUSINESS.licenceActivity}
- Licence first issued: ${BUSINESS.licenceFirstIssued}
- Address: ${BUSINESS.addressLine}, ${BUSINESS.streetAddress}, ${BUSINESS.city}, ${BUSINESS.country}. P.O. Box ${BUSINESS.poBox}
- Map: ${BUSINESS.googleProfileUrl} (plus code ${BUSINESS.plusCode})
- Opening hours: ${HOURS_SENTENCE}
- Google rating: ${BUSINESS.googleRating} out of 5 from ${BUSINESS.googleReviewCount} reviews (checked ${BUSINESS.googleRatingChecked})
- Phone and WhatsApp: ${BUSINESS.phoneDisplay} (${BUSINESS.phoneE164})
- Landline: ${BUSINESS.landlineDisplay} (${BUSINESS.landlineE164})
- Email: ${BUSINESS.email}
- Parent group: ${BUSINESS.group}, established ${BUSINESS.groupFoundingYear}
- Founder and CEO: ${BUSINESS.founder}
- Fleet size: ${BUSINESS.fleetSize} vehicles
- Delivery: cars can be delivered to the customer; arrangements are confirmed at booking

## Company and trust pages

${[
  link('About Najd Rent a Car', '/about/'),
  link('Our Team', '/team/', 'names, roles and photos'),
  link('Licence and Verification', '/licence/', `licence ${BUSINESS.licenceNumber} details and how to verify`),
  link('Service Standards', '/service-standards/'),
  link('Customer Reviews', '/reviews/', `${BUSINESS.googleRating} out of 5 from ${BUSINESS.googleReviewCount} Google reviews`),
  link('Contact', '/contact/'),
].join('\n')}

## Fleet and rates

Rates are in AED and can change. Cars without a rate are quoted on request.

${LLMS.cars
  .map((c) =>
    link(
      c.name,
      c.path,
      [
        c.label,
        c.seats ? `${c.seats} seats` : '',
        c.rates ? `${aed(c.rates.day)} per day, ${aed(c.rates.week)} per week, ${aed(c.rates.month)} per month` : 'rate on request',
      ]
        .filter(Boolean)
        .join(', '),
    ),
  )
  .join('\n')}
${link('Full fleet', '/fleet/')}

## Rental categories

${LLMS.categories.map((c) => link(c.name, c.path, c.description)).join('\n')}

## Guides

${LLMS.guides.map((g) => link(g.name, g.path, g.description)).join('\n')}
`;
fs.writeFileSync(path.join(dist, 'llms.txt'), llms);

console.log(`Prerendered ${ROUTES.length} pages, plus 404.html, sitemap.xml, robots.txt and llms.txt.`);
