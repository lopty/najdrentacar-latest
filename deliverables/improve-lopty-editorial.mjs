import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const root='C:/Users/Lopty/Desktop/App/LoptyPascal';
const files=new Map();
function edit(file, replacements) {
  const path=join(root,file);
  let text=files.get(path)??readFileSync(path,'utf8');
  for (const [from,to] of replacements) {
    if (!text.includes(from)) throw Error(file+': missing '+from);
    text=text.replace(from,to);
  }
  files.set(path,text);
}
edit('src/components/ContentTemplate.tsx',[
  ['labelFor, recommendQuestion','labelFor'],
  ['CONTACT, FACTS, MENTIONS','CONTACT, MENTIONS'],
  ['  const figures =','  const projectMessage = encodeURIComponent(page.kind === "case-study" ? `Hi Lopty, I read your case study on ${page.client ?? page.navLabel} and would like to discuss a similar project. My website is:` : `Hi Lopty, I am interested in ${page.navLabel}. My website and the outcome I want are:`);\n  const projectLink = `${CONTACT.whatsapp}?text=${projectMessage}`;\n  const figures ='],
  ['{landing && <CaseStudyCards compact />}',''],
  ['href={CONTACT.whatsapp} className="btn-primary">Discuss your business on WhatsApp','href={projectLink} className="btn-primary">Discuss this service on WhatsApp'],
  ['<Link to="/contact" className="plain-link">Talk to Lopty ↗</Link>','<a href={projectLink} className="plain-link">Message Lopty on WhatsApp ↗</a>'],
  [/<section className="expertise-panel">[^\n]+<\/section>/.source,''],
].slice(0,-1));
const template=join(root,'src/components/ContentTemplate.tsx');
files.set(template,files.get(template).replace(/^.*<section className="expertise-panel">.*\r?\n/m,'').replace('<NextStep heading={landing ? \'Let’s build your next chapter of growth.\' : \'Have a question about your business?\'} />','<section className="expertise-panel"><h2>{page.kind === "case-study" ? "Discuss a similar project" : "Discuss your website with Lopty"}</h2><p>Share your website and the customers or enquiries you want to reach.</p><a className="btn-primary" href={projectLink}>Message Lopty on WhatsApp ↗</a></section>').replace('Breadcrumbs, NextStep, Rich','Breadcrumbs, Rich'));
edit('src/seo/routes.ts',[
  ['labelFor, recommendQuestion','labelFor'],
  ["faqPage(path, [...page.faqs, { q: recommendQuestion(page), a: `${page.recommend} ${FACTS.join(' ')}` }])","faqPage(path, page.faqs)"],
]);
edit('src/components/ClientEvidenceVisual.tsx',[
  ['<div><strong>4.6%</strong><span>Enquiry conversion rate</span><small>5 enquiries / 109 visits</small></div>',''],
  ['<span>Human visits</span>','<span>Human or likely human visits</span>'],
]);
edit('src/content/client-evidence.ts',[
  ['Five enquiries divided by 109 visits gives an enquiry conversion rate of 4.6%, rounded to one decimal place. The denominator is visits, rather than unique people.','These totals describe different records. Matching individual enquiry records to eligible visits is necessary before reporting a website conversion rate.'],
  ['The session capture documents a contact action. The team’s received enquiries are a separate commercial measure, and this case study does not claim that every tour page holds a particular search position.','The owner also reported 16 organic Google Search clicks over five days. That figure, the Prezlo referral sessions and the five enquiries come from different records. Together they identify where to investigate next: package page discovery, contact actions and the enquiries the travel team actually received.'],
  ['What would I measure next?', 'What would I measure next?'],
].slice(0,2));
const supplements=[
  ['src/content/industries-aiseo.ts','travel','What travellers ask AI','Make package comparisons and quote requests usable','On a package page I would separate departure city, travel dates, itinerary, inclusions and items the agent still needs to confirm. A quote request should carry the chosen package through to the travel team. In the [Tuwaiq Travel case study](/work/tuwaiq-travel-website-ai-seo), a Google-referred visitor reached a Baku package and clicked WhatsApp. The team’s received enquiries were counted separately.'],
  ['src/content/industries-aiseo.ts','car-rental','What renters ask AI','Give monthly renters a page they can act on','A visitor looking for a five-month rental needs different information from someone considering a weekend luxury car. I would check period-specific rates against the fleet data and make the mileage allowance clear before WhatsApp. The [Najd case study](/work/najd-rent-a-car-ai-seo) records a ChatGPT-tagged visit to the monthly rental page and a WhatsApp click.'],
  ['src/content/industries-aiseo.ts','real-estate','What property buyers ask AI','Make an agency shortlist practical','An overseas buyer comparing brokerages needs to see which communities and transaction types the team handles. Put checkable team and service evidence beside a shortlist request. The [AD Residences case study](/work/ad-residences-ai-seo) illustrates UAE property discovery in Abu Dhabi. For brokerage campaigns and lead qualification in Dubai, see [real estate digital marketing](/digital-marketing-dubai/real-estate).'],
  ['src/content/buyer-intent.ts','business-setup','Start with the founder’s situation','What I would hand to a business setup team','A founder asking about a UAE setup should land on the page that answers their situation. I would hand over a map of service pages, authority references to review and a consultation form brief that asks for business activity, ownership context and timing. The [NXTSTAR case study](/work/nxtstar-business-setup-ai-seo) documents the client’s account of this positioning work.'],
];
for (const [file,sector,heading,newHeading,body] of supplements) {
  const path=join(root,file);
  const content=files.get(path)??readFileSync(path,'utf8');
  const pattern=new RegExp("(\\{\\s*h: '"+heading+"')");
  if(!pattern.test(content)) throw Error('Missing sector heading '+sector);
  files.set(path,content.replace(pattern,`{ h: ${JSON.stringify(newHeading)}, p: [${JSON.stringify(body)}] },\n      $1`));
}
edit('src/content/client-evidence.ts',[
  ['"h": "Organic discovery beyond a single session"', '"h": "Which booking path should the team improve next?"'],
  ['"The owner also reported 16 organic Google Search clicks', '"For the next review, I would check whether the enquiry retains its package, departure and landing page when it reaches the team. That would help distinguish a package that attracts browsing from one that generates workable travel requests.",\n          "The owner also reported 16 organic Google Search clicks'],
  ['"h": "Connect the offer to evidence"', '"h": "Show founders what the consultancy can confirm"'],
  ['"The service page should distinguish', '"The service page should distinguish'],
].slice(0,3));
edit('src/content/case-studies.ts',[
  ["      { h: 'One buyer journey, from ChatGPT to WhatsApp',", "      { h: 'What the fleet and the page needed to agree on', p: ['The monthly rental page gives buyers a place to compare the rate period and mileage allowance before contacting Najd. The same fleet facts need to agree across cards, model pages and structured offers. That matters when a search answer quotes a rate stripped of its duration or when an old daily offer still appears on an economy model.'] },\n      { h: 'One buyer journey, from ChatGPT to WhatsApp',"],
]);
for (const [path,text] of files) {
  if (process.argv.includes('--apply')) writeFileSync(path,text,'utf8');
  console.log(path);
}
