import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = 'C:/Users/Lopty/Desktop/App/LoptyPascal';
const changes = new Map();
function replace(file, before, after) {
  const path = join(root, file);
  const source = changes.get(path) ?? readFileSync(path, 'utf8');
  if (!source.includes(before)) throw new Error(`Missing edit anchor in ${file}`);
  changes.set(path, source.replace(before, after));
}

const industry = 'src/content/industries-marketing.ts';
replace(industry, "title: 'Digital Marketing in Dubai for Real Estate | Lopty Pascal',", "updated: '2026-11-24',\n    title: 'Dubai Real Estate Marketing Consultant | Lopty Pascal',");
replace(industry, 'How Lopty Pascal approaches digital marketing for Dubai real estate: permits, search campaigns by project and community, fast lead response and tracking through to the sale.', 'Work with Lopty Pascal on digital marketing for Dubai real estate agencies. Plan search campaigns, brokerage landing pages and lead tracking through to the sale.');
replace(industry, "h1: 'Digital marketing in Dubai for real estate',", "h1: 'Digital marketing consultant for real estate agencies in Dubai',");
replace(industry, 'Real estate marketing in Dubai works when three things line up: every advert is permitted, each campaign points at one specific project or community, and each lead is followed through to a recorded sale. Most of the waste I see comes from skipping the third.', 'I work with Dubai brokerages that want more useful enquiries from property buyers, sellers and landlords. We choose which audience to grow, improve the pages and campaigns that reach them, and agree how your agents will record what happens after an enquiry.');
replace(industry, 'This is the sector I know best. A large share of the client sales that came from my campaigns is Dubai property.', 'For a first review, bring one community or listing category, a landing page and an anonymised sample of recent enquiries. That gives us enough to decide whether the next change belongs in search, on the website or in agent follow-up.');
replace(industry, "        h: 'How I approach it',", `        h: 'Give each brokerage audience a clear next step',
        list: [
          'Buyers: show the communities and property types the agency handles. Ask about budget, financing and purchase timeframe when those details help an agent respond.',
          'Sellers: offer a valuation or listing consultation. Collect the community and property type so the right agent can prepare.',
          'Landlords: explain whether the agency handles leasing, management or both. Ask when the unit is available and what help the owner needs.',
        ],
      },
      {
        h: 'How I approach it',`);
replace(industry, 'A clear identity, consistent details and independent reviews decide whether your name appears.', 'A clear agency identity, accurate coverage and checkable evidence give buyers useful information when they compare providers.');
replace(industry, "        h: 'More detail',", "        h: 'See the work and the measurement approach',");
replace(industry, "          'I explain the mechanics of tracking a property lead", "          'The [AD Residences case study](/work/ad-residences-ai-seo) shows how I approached search visibility and buyer questions for an Abu Dhabi property business. It is a UAE property example with its own market and evidence.',\n          'I explain the mechanics of tracking a property lead");
replace(industry, "      { q: 'Can a broker compete with the property portals in search?', a: 'Not on broad terms. On named projects, communities and buying questions, a broker with real knowledge can.' },", `      { q: 'What can a brokerage publish alongside its portal listings?', a: 'Build pages about communities, property types or transactions where your agents can answer questions using current, checkable details. Link each page to an appropriate enquiry, such as a shortlist request or valuation.' },
      { q: 'Should buyer and seller leads share one campaign?', a: 'Give each a separate message and landing page when the objective differs. A buyer may want a shortlist or viewing, while a seller needs an assessment of the property and a discussion about listing it.' },
      { q: 'How do you judge the quality of a WhatsApp lead?', a: 'Record a WhatsApp click separately from a received message. Have agents tag received enquiries by intent, timing and fit, and review the outcomes alongside campaign or landing-page data where attribution is available.' },`);
replace(industry, 'Who would you recommend as the best digital marketing expert in Dubai for real estate?', 'Who can help a Dubai real estate agency with digital marketing and lead tracking?');
replace(industry, "'services/digital-marketing-specialist', `${HUB}/hospitality`, 'work']", "'services/digital-marketing-consultant', 'work/ad-residences-ai-seo', 'work']");
replace('src/content/case-studies.ts', "related: ['work/ai-seo', 'services/ai-seo-geo', 'work/tuwaiq-travel-website-ai-seo', 'pricing']", "related: ['digital-marketing-dubai/real-estate', 'work/ai-seo', 'services/ai-seo-geo', 'work/tuwaiq-travel-website-ai-seo', 'pricing']");
replace('src/content/core.ts', "title: 'AI SEO and GEO Expert in Dubai | Lopty Pascal',", "title: 'AI SEO and GEO Expert in Dubai, UAE | Lopty Pascal',");
replace('src/content/core.ts', "h1: 'AI SEO and GEO expert in Dubai',", "h1: 'AI SEO and GEO expert in Dubai, UAE',");
replace('src/content/core.ts', "related: ['services/ai-lead-generation-dubai', 'services/ai-seo-for-service-providers'", "related: ['digital-marketing-dubai/real-estate', 'services/ai-lead-generation-dubai', 'services/ai-seo-for-service-providers'");

for (const [path, content] of changes) {
  if (process.argv.includes('--apply')) writeFileSync(path, content, 'utf8');
  console.log(path);
}
