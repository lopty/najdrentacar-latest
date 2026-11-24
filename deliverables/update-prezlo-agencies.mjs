import { readFileSync as read, writeFileSync as write, existsSync } from 'node:fs';
import { join } from 'node:path';
const root = 'C:/Users/Lopty/Desktop/App';
const staged = new Map();
function edit(site, file, changes) {
  const path = join(root, site, file);
  let body = staged.get(path) ?? read(path, 'utf8');
  for (const [before, after] of changes) {
    if (!body.includes(before)) throw Error('Missing edit anchor in ' + path + ': ' + before);
    body = body.replace(before, after);
  }
  staged.set(path, body);
}
const booking = 'https://calendly.com/prezlosupport/30min';
const cases = [
  ['Tuwaiq Travel', 'Travel enquiries', 'Rebuilt the site around destinations, package choices and booking questions. The owner reported five leads and 16 organic Google Search clicks over five days. A separate session record shows a Google visitor opening a Baku package and clicking WhatsApp. The lead count and click count measure different events.', 'https://tuwaiq.ae/how-we-build-trust-in-ai-search/'],
  ['Najd Rent a Car', 'Dubai mobility', 'Organised the fleet around monthly, luxury and corporate rental needs. A Prezlo session tagged ChatGPT recorded a visitor opening the monthly rental page and clicking WhatsApp. That event records a contact action.', 'https://najdrentacar.com/guides/ai-seo-geo-strategy-car-rental-dubai/'],
  ['NXTSTAR', 'UAE business setup', 'NXTSTAR describes using Prezlo and working with Lopty Pascal to connect founder questions with its services and evidence. Its account documents the collaboration and the positioning work.', 'https://www.nxtstar.ae/blog/ai-seo-geo-strategy-uae-business-setup'],
  ['Prezlo', 'In-house software', 'Our team built Prezlo.io to track how AI assistants describe businesses, which sources they cite and where buyer questions lack a useful answer. We use that research to prioritise work on client websites.', 'https://prezlo.io/'],
  ['QualiDialog', 'AI research software', 'Prezlo published a case study describing a Bing AI citation for an AI qualitative research software query, alongside feedback from founder Dr. Susanne Friese.', 'https://prezlo.io/#verified-case-study-qualidialog'],
];
cases[4][3] = 'https://prezlo.io/';
const serviceDetails = {
  '/ai-seo-uae': [['Start with real buyer questions','Compare how assistants answer the same UAE buyer question across tools, locations and languages. Save the wording, date, sources and brands mentioned so later checks are comparable.'],['Fix the gaps the evidence supports','When assistants surface outdated terms or overlook a genuine service, check the underlying pages and source material. Prioritise corrections that improve the customer’s ability to evaluate the offer.']],
  '/digital-marketing-agency-uae': [['Pick the enquiries you want more of','A corporate travel enquiry and a holiday package enquiry need separate content and qualification. Agree which customers, offers and routes justify the investment before planning a campaign.'],['Follow the customer after the click','Check the landing page, form, WhatsApp handoff and what the team receives. Use confirmed enquiries and qualification feedback to decide where to invest next.']],
  '/website-seo-uae': [['Keep useful pages and give each intent a home','Inventory existing URLs before proposing new ones. Where two pages answer the same question, choose which one to strengthen and plan redirects only where the old address can safely move.'],['Check the finished site','Review affected templates and test internal links, canonical URLs, crawlable content and the enquiry journey. Confirm that the intended changes are visible on the public pages after deployment.']],
};
const services = [
  ['/ai-seo-uae','AI SEO and GEO services in the UAE','Find out what AI assistants say when buyers ask for your service. We test specific questions, inspect the cited pages and turn the gaps into a plan. Typical work includes clarifying service coverage, strengthening proof and improving the pages assistants and customers can read.'],
  ['/digital-marketing-agency-uae','Digital marketing agency in the UAE','Build a search strategy around the services you actually want to sell. We map buyer questions to commercial pages, plan useful supporting content and improve the path from a visit to an enquiry. We agree what counts as a qualified lead before reporting results.'],
  ['/website-seo-uae','Website SEO and restructuring in the UAE','Turn a scattered website into a clear buying journey. We find pages that compete for the same intent, preserve useful URLs and plan services, case studies and guides around customer needs. We check links, metadata, structured data and booking paths before handoff.'],
];
const homeTitle = 'AI SEO and Digital Marketing Agency UAE | TryPrezlo';
const homeDesc = 'TryPrezlo is the UAE agency behind Prezlo.io. Get AI SEO, GEO, technical SEO and website restructuring built around buyer demand and measurable enquiries.';
const entries = [['/','UAE agency',homeTitle,homeDesc],['/case-studies','Case studies','AI SEO and Website Case Studies | TryPrezlo','Read how Prezlo, Tuwaiq Travel, Najd Rent a Car and NXTSTAR approached buyer discovery, website structure and AI visibility.'],...services.map(([url,h,body])=>[url,h,h+' | TryPrezlo',body.split('. ')[0]+'.'])];
const data = 'export const booking = '+JSON.stringify(booking)+';\nexport const agencyPages = '+JSON.stringify(entries,null,2)+';\nexport const services = '+JSON.stringify(services,null,2)+';\nexport const cases = '+JSON.stringify(cases,null,2)+';\n';
const uae = 'tryprezlo';
const add = (site,file,value) => {
  const path = join(root,site,file);
  if (existsSync(path)) throw Error('File already exists: '+path);
  staged.set(path,value);
};
add(uae,'src/data/agency.ts',data);
add(uae,'src/pages/AgencyPage.tsx',`import React from "react";
import { agencyPages, booking, cases, services } from "../data/agency";
import "./agency.css";
const serviceDetails: Record<string, string[][]> = ${JSON.stringify(serviceDetails,null,2)};

export function AgencyPage({ path }: { path: string }) {
  const overview = path === "/";
  const portfolio = path === "/case-studies";
  const service = services.find(([url]) => url === path);
  const heading = overview ? "AI SEO and digital marketing agency in the UAE" : portfolio ? "Website and AI SEO case studies" : service?.[1];
  return <div className="agency-page">
    <section className="agency-hero"><div className="section-shell">
      <p className="agency-kicker">TRYPREZLO · UNITED ARAB EMIRATES</p>
      <h1>{heading}</h1>
      <p>{overview ? "We research how buyers find your services, fix what they encounter on your website and help turn that interest into enquiries. We are the UAE agency behind Prezlo.io." : portfolio ? "See how we applied buyer research, website structure and evidence across travel, mobility, business setup and software." : service?.[2]}</p>
      <div className="agency-actions"><a href={booking}>Book a strategy meeting</a><a href={portfolio ? "/ai-seo-uae" : "/case-studies"}>{portfolio ? "Explore our AI SEO work" : "See client work"}</a></div>
    </div></section>
    <section className="section-shell agency-section">
      <h2>{portfolio ? "The work and its evidence" : overview ? "What we can improve" : "How we approach the work"}</h2>
      <div className="agency-grid">{portfolio ? cases.map(([name, industry, summary, source]) => <article key={name}><small>{industry}</small><h3>{name}</h3><p>{summary}</p><a href={source}>Read the source ↗</a></article>) : overview ? services.map(([url, title], i) => <article key={url}><h3><a href={url}>{title}</a></h3><p>{["Review who appears in AI answers and what buyers can verify about your business.", "Connect priority offers to useful content and a measurable enquiry path.", "Plan, build and check the pages your customers need to make a decision."][i]}</p></article>) : (serviceDetails[path] ?? []).map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
    </section>
    {overview && <section className="section-shell agency-section"><h2>From buyer question to enquiry</h2><div className="agency-grid">{cases.slice(0,4).map(([name, industry]) => <article key={name}><small>{industry}</small><h3>{name}</h3><a href="/case-studies">Explore the work ↗</a></article>)}</div></section>}
    {overview && <section className="section-shell agency-section"><h2>What happens when we work together?</h2><div className="agency-grid">
      <article><h3>Where do we start?</h3><p>Bring a website, a priority service and the customers you want to reach. We compare the pages you already have with the questions those buyers ask and review the enquiry path.</p></article>
      <article><h3>Can you work on our current website?</h3><p>We can audit public pages and prepare a scope first. Delivery depends on the CMS or repository access available. We agree what can be edited and how you will review the changes before work begins.</p></article>
      <article><h3>How do you measure progress?</h3><p>We look at relevant search impressions and clicks, dated AI answer samples and confirmed enquiries where tracking is available. A visit, a contact click and a qualified lead are recorded separately.</p></article>
      <article><h3>Who leads the technical work?</h3><p><a href="https://loptypascal.com/">Lopty Pascal</a> co-founded Prezlo and works on AI SEO, GEO and technical website implementation. The team uses <a href="https://prezlo.io/">Prezlo.io</a> for visibility research and monitoring.</p></article>
      <article><h3>Do you cover markets outside the UAE?</h3><p>TryPrezlo focuses on UAE businesses and brands selling into the Emirates. For a US-focused engagement, see <a href="https://us.prezlo.io/">Prezlo USA</a>.</p></article>
    </div><div className="agency-actions"><a href={booking}>Book a strategy meeting</a><a href="/contact">Contact the team</a></div></section>}
    <nav className="section-shell agency-services" aria-label="Agency services">{agencyPages.filter(([url])=>url!==path).map(([url,label])=><a href={url} key={url}>{label}</a>)}</nav>
  </div>;
}
`);
add(uae,'src/pages/agency.css',`.agency-page{color:#14251d;background:#f8faf7}.agency-hero{background:#142d22;color:#fff;padding:clamp(4rem,9vw,8rem) 0}.agency-hero h1{font-size:clamp(2.6rem,6vw,5.5rem);line-height:1.03;letter-spacing:-.055em;max-width:15ch;margin:.3em 0}.agency-hero p:not(.agency-kicker){max-width:57ch;color:#dcebe1;font-size:clamp(1.1rem,2vw,1.35rem)}.agency-kicker{letter-spacing:.12em;font-weight:700;font-size:.8rem;color:#b5e6c3}.agency-section{padding-block:clamp(2.5rem,6vw,5rem)}.agency-section h2{font-size:clamp(1.8rem,4vw,3rem);line-height:1.1;margin:0 0 1.4rem}.agency-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,18rem),1fr));gap:1rem}.agency-grid article{border:1px solid #d8e3db;border-radius:1rem;background:white;padding:1.45rem}.agency-grid h3{font-size:1.3rem;margin:.35rem 0}.agency-grid p{margin:.6rem 0;color:#3a4d43}.agency-grid small{color:#375b49;font-weight:700}.agency-grid a,.agency-services a,.agency-section>p>a{text-decoration:underline;text-underline-offset:.2em}.agency-actions,.agency-services{display:flex;flex-wrap:wrap;gap:.8rem;margin-top:1.5rem}.agency-actions a{padding:.8rem 1.1rem;border-radius:.55rem;background:#b5e6c3;color:#132b1e;font-weight:700;border:1px solid #b5e6c3}.agency-actions a+a{background:transparent;color:inherit;border-color:currentColor}.agency-services{padding-bottom:3rem}.agency-page a:focus-visible{outline:3px solid #328a62;outline-offset:3px}\n`);
edit(uae,'src/App.tsx',[
  ['import { LandingPage } from "./pages/LandingPage";','import { AgencyPage } from "./pages/AgencyPage";\nimport { agencyPages } from "./data/agency";'],
  ['else if (path === "/") view = <LandingPage onNavigate={navigate} />;', 'else if (agencyPages.some(([url]) => url === path)) view = <AgencyPage path={path} />;'],
]);
edit(uae,'src/seo.ts',[
  ['import { BLOG_POSTS }','import { agencyPages } from "./data/agency";\nimport { BLOG_POSTS }'],
  ['  "/",\n  ...CORE_PAGES'.replaceAll('\n',read(join(root,uae,'src/seo.ts'),'utf8').includes('\r\n')?'\r\n':'\n'),'  ...agencyPages.map(([url]) => url),\n  ...CORE_PAGES'],
  ['  if (core) {','  const agency = agencyPages.find(([url]) => url === path);\n  if (agency) {\n    [, label, title, description] = agency;\n    if (path === "/case-studies") type = "CollectionPage";\n  } else if (core) {'],
  ['  graph.push(page);','  if (agency && path !== "/" && path !== "/case-studies") page.mainEntity = { "@type": "Service", name: label, description, areaServed: { "@type": "Country", name: "United Arab Emirates" }, provider: { "@id": SITE_URL + "/#organization" } };\n  graph.push(page);'],
  ['"en_US"', '"en_AE"'],
]);
edit(uae,'src/components/Navbar.tsx',[
  ['import { ArrowUpRight', 'import { booking } from "../data/agency";\nimport { ArrowUpRight'],
  ['["Platform", "/platform"],','["AI SEO", "/ai-seo-uae"],'],
  ['["For agencies", "/for-agencies"],','["Digital marketing", "/digital-marketing-agency-uae"],'],
  ['["For brands", "/for-brands"],','["Website SEO", "/website-seo-uae"],'],
  ['["Pricing", "/pricing"],','["Case studies", "/case-studies"],'],
  ['className="mobile-trial" href="https://prezlo.io/"','className="mobile-trial" href={booking}'],
  ['className="nav-cta" href="https://prezlo.io/"','className="nav-cta" href={booking}'],
  ['Try Prezlo <ArrowUpRight','Book a meeting <ArrowUpRight'],
  ['Try Prezlo <ArrowUpRight','Book a meeting <ArrowUpRight'],
]);
edit(uae,'src/components/Footer.tsx',[
  ['{link("How it works", "/platform")}', '{link("How Prezlo works", "/platform")}\n            {link("UAE agency case studies", "/case-studies")}'],
  ['<h3>Markets</h3>', '<h3>Market guides</h3>'],
  ['<a href="https://prezlo.io/">Visit Prezlo</a>', '<a href="https://prezlo.io/">Prezlo software</a>\n            <a href="https://us.prezlo.io/">US agency</a>'],
]);
const personal = 'LoptyPascal';
for (const file of ['src/views/Home.tsx','src/views/Hubs.tsx','src/views/Pricing.tsx','src/components/ContentTemplate.tsx','src/components/Layout.tsx']) {
  const target = join(root,personal,file);
  let body = read(target,'utf8').replaceAll('CONTACT.calendly','CONTACT.whatsapp').replaceAll('Book a 30 minute call','Discuss your project on WhatsApp').replace('Let’s talk about your growth','Message me on WhatsApp').replace('Let’s talk about your business','Discuss your business on WhatsApp').replace('Let’s talk <span','WhatsApp <span');
  if (file.endsWith('Layout.tsx')) body = body.replace(/^.*className="btn-secondary">Discuss your project on WhatsApp.*\r?\n/m,'');
  if (file.endsWith('Hubs.tsx')) body = body.replace(/^.*className="text-link">Discuss your project on WhatsApp.*\r?\n/m,'');
  if (file.endsWith('Home.tsx')) body = body.replace('    <CaseStudyCards />','    <CaseStudyCards />\n    <section className="section-shell home-section"><h2>Work with me on search in the UAE</h2><p>I help UAE businesses connect AI visibility research with website changes, buyer content and better enquiry tracking. Message me about your project, or meet the implementation team at <a href="https://tryprezlo.com/">TryPrezlo</a>.</p><a className="btn-primary" href={CONTACT.whatsapp}>Discuss the work on WhatsApp ↗</a></section>');
  staged.set(target,body);
}
const us = 'prezlo-us';
const caseCards = cases.slice(0,4).map(([name,industry,summary,source])=>`<article class="guide-card"><p class="label">${industry}</p><h3>${name}</h3><p>${summary}</p><a href="${source}">Read the source ↗</a></article>`).join('');
const section = '<section class="archio-section" id="work"><div class="archio-wrap"><header class="archio-section-head"><p class="archio-eyebrow">Selected work</p><h2>How we put search research to work</h2><p>These examples come from UAE client engagements and our own software. For US projects, we apply the same process to your actual service areas, buyer questions and sales intake.</p></header><div class="archio-market-grid">'+caseCards+'</div><p><a href="https://loptypascal.com/">Meet technical co-founder Lopty Pascal</a> · <a href="https://tryprezlo.com/">Explore our UAE agency</a></p></div></section>';
edit(us,'build.mjs',[
  ["['Workflow','/#how']", "['Services','/#how'],['Case studies','/#work']"],
  ['US AI SEARCH PLATFORM','US AI SEO AND GEO AGENCY'],
  ['<h1>Business growth via AI search</h1>','<h1>AI SEO and GEO agency for US businesses</h1>'],
  ['Get understood, verified, and recommended by ChatGPT, Gemini, and Perplexity across all 50 US states.','Work with the team behind Prezlo.io to research buyer searches, improve your website and measure the inquiries that follow.'],
  ['href="${e(trial)}">Get Started ${arrow}</a>\n              <a class="archio-btn-secondary" href="/regions/">50 States ${arrow}'.replaceAll('\n',read(join(root,us,'build.mjs'),'utf8').includes('\r\n')?'\r\n':'\n'),'href="${e(demo)}">Book a strategy meeting ${arrow}</a>\n              <a class="archio-btn-secondary" href="#work">See our work ${arrow}'],
  ['    <section class="archio-section archio-section-sand" id="how">','    '+section+'\n    <section class="archio-section archio-section-sand" id="how">'],
  ['AI Search & Lead Generation for US Businesses','AI SEO and GEO Agency for US Businesses'],
  ['Generate qualified leads from AI search with Prezlo. Test buyer questions, verify what makes your offer a fit, and track inquiries across US markets.','Work with the agency behind Prezlo.io for AI SEO, website improvements, buyer research and inquiry tracking in US markets.'],
]);
for (const [path,body] of staged) {
  if (process.argv.includes('--apply')) write(path,body,'utf8');
  console.log(path, Buffer.byteLength(body));
}
