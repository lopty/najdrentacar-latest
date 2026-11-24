import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { articles, articleBody } from './remaining-fairaigle-resources.mjs';
const sites={najd:'najdrentacar-latest',tuwaiq:'tuwaiq-travel',kof:'Tamayoz',prezlo:'prezlo'};
const key=process.argv[2];
if(!Object.hasOwn(sites,key)) throw Error('Select one site');
const root=join('C:/Users/Lopty/Desktop/App',sites[key]);
const a=articles[key], body=articleBody(a);
const words=body.replace(/<[^>]+>/g,' ').trim().split(/\s+/).length;
if(words<1000) throw Error('Article too short: '+words);
const path='/resources/'+a.slug+(key==='kof'?'.html':key==='prezlo'?'':'/');
const files=new Map();
function replace(file,before,after){
  const s=files.get(file)??readFileSync(join(root,file),'utf8');
  if(!s.includes(before)||s.includes(after)) throw Error('Unexpected source in '+file);
  files.set(file,s.replace(before,after));
}
const componentBody=`<article className="mx-auto max-w-3xl px-5 py-10 leading-relaxed [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h3]:mt-5 [&_h3]:font-semibold [&_p]:mt-3 [&_ul]:mt-3 [&_a]:underline" dangerouslySetInnerHTML={{ __html: ${JSON.stringify(body)} }} />`;
const faqs=a.faq.map(([q,answer])=>({q,a:answer}));
const footerLink=`<a href="${path}">${a.title}</a>`;
if(key==='najd'){
 files.set('src/pages/india-resource.tsx',`import React from 'react';
import { PageHeader } from '../components/ui';
import type { Crumb } from '../site/schema';
export const INDIA_RESOURCE = ${JSON.stringify({title:a.title+' | Najd Rent a Car',h1:a.title,description:a.description,path,faqs})};
export function IndiaResource({crumbs}:{crumbs:Crumb[]}) {
  return <><PageHeader crumbs={crumbs} h1={INDIA_RESOURCE.h1} lead={INDIA_RESOURCE.description} />${componentBody}</>;
}
`);
 const file='src/routes.tsx';
 replace(file,"import React from 'react';","import React from 'react';\nimport { INDIA_RESOURCE, IndiaResource } from './pages/india-resource';");
 replace(file,'export const ROUTES: Route[] = [...staticRoutes',`const indiaResource = page(INDIA_RESOURCE.path, INDIA_RESOURCE.title, INDIA_RESOURCE.description, [HOME, {name: 'Appointment transport', path: INDIA_RESOURCE.path}], crumbs => <IndiaResource crumbs={crumbs} />, [faqSchema(INDIA_RESOURCE.faqs), articleSchema({headline: INDIA_RESOURCE.h1, description: INDIA_RESOURCE.description, path: INDIA_RESOURCE.path, updated: '2026-11-24'})], {ogType:'article'});
export const ROUTES: Route[] = [indiaResource, ...staticRoutes`);
 replace('src/pages/trust.tsx','        <H2>The people behind the company</H2>',`        <H2>The people behind the company</H2>\n        <p className="my-4 underline">${footerLink}</p>`);
} else if(key==='tuwaiq'){
 files.set('src/components/IndiaTravelResource.tsx',`import { Layout } from './Layout';
export const INDIA_TRAVEL = ${JSON.stringify({title:a.title+' | Tuwaiq Travel',h1:a.title,description:a.description,path,faqs})};
export function IndiaTravelResource() {
  return <Layout currentPath={INDIA_TRAVEL.path}><header className="mx-auto max-w-3xl px-5 pt-12"><h1 className="text-3xl font-semibold">{INDIA_TRAVEL.h1}</h1><p className="mt-3">{INDIA_TRAVEL.description}</p></header>${componentBody}</Layout>;
}
`);
 const routes='src/data/routes.ts';
 replace(routes,"import { FEATURE_FLAGS }", "import { INDIA_TRAVEL } from '../components/IndiaTravelResource';\nimport { FEATURE_FLAGS }");
 replace(routes,"  | { kind: 'home';", "  | { kind: 'india-travel-resource'; meta: PageMeta }\n  | { kind: 'home';");
 replace(routes,'  const path = normalizePathname(rawPath);',`  const path = normalizePathname(rawPath);
  if (path === INDIA_TRAVEL.path) {
    const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'India travel planning', url: path }];
    return { kind: 'india-travel-resource', meta: { path, title: INDIA_TRAVEL.title, description: INDIA_TRAVEL.description, image: '/images/hero/dubai-skyline-twilight.webp', imageAlt: 'Dubai skyline at twilight', breadcrumbs, schemas: [buildTravelAgencySchema(), buildBreadcrumbSchema(breadcrumbs), buildFaqSchema(INDIA_TRAVEL.faqs)] } };
  }`);
 replace(routes,'  const routes = [','  const routes = [\n    INDIA_TRAVEL.path,');
 replace('src/App.tsx',"import { useEffect }", "import { IndiaTravelResource } from './components/IndiaTravelResource';\nimport { useEffect }");
 replace('src/App.tsx','  switch (route.kind) {', "  switch (route.kind) {\n    case 'india-travel-resource': return <IndiaTravelResource />;");
 replace('src/components/IndexAndTrustViews.tsx','            {FEATURE_FLAGS.enableUnconfirmedStats && (',`            <p className="underline">${footerLink}</p>\n\n            {FEATURE_FLAGS.enableUnconfirmedStats && (`);
} else if(key==='kof'){
 const base='https://koftechnicalservices.com';
 files.set('public'+path,`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${a.title} | KOF</title><meta name="description" content="${a.description}"><link rel="canonical" href="${base+path}"><meta property="og:type" content="article"><meta property="og:title" content="${a.title}"><meta property="og:description" content="${a.description}"><meta property="og:url" content="${base+path}"><style>body{background:#f9f7f0;color:#22251f;font:1.05rem/1.65 system-ui;margin:0}main,header{max-width:47rem;padding:1.5rem;margin:auto}h1,h2,h3{line-height:1.2}a{color:#325747}header{border-bottom:1px solid #d6d6c7}section{margin-top:2rem}</style></head><body><header><a href="/">KOF Technical Services</a></header><main><article><h1>${a.title}</h1>${body}</article></main></body></html>`);
 replace('src/components/Footer.tsx','              <a href="/insights/data-driven-ai-visibility-geo-insights.html"',`              <a href="${path}" className="font-sans text-xs text-brand-sand-300 hover:text-brand-gold-300">Indian fit-out dispute checklist</a>\n              <a href="/insights/data-driven-ai-visibility-geo-insights.html"`);
 const sitemap='public/sitemap.xml';
 const urls=['/','/insights/ai-seo-geo-strategy-dubai-home-renovation.html','/insights/data-driven-ai-visibility-geo-insights.html',path];
 if(existsSync(join(root,sitemap))) replace(sitemap,'</urlset>',`<url><loc>${base+path}</loc></url></urlset>`);
 else files.set(sitemap,`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(url=>`<url><loc>${base+url}</loc></url>`).join('')}</urlset>`);
 if(!existsSync(join(root,'public/robots.txt'))) files.set('public/robots.txt',readFileSync(join(root,'robots.txt'),'utf8'));
} else {
 const record={slug:a.slug,country:'UAE',intent:1,metaTitle:a.title,metaDescription:a.description,h1:a.title,bodyHtml:body.replace(/<section><h2>Buyer questions<\/h2>[\s\S]*?<\/section>/,''),faqs,siblingLinks:['rank-business-ai-search-usa','get-recommended-chatgpt-usa'],intentTwinSlug:'',intentTwinLabel:'',publishedDate:'2026-11-24',modifiedDate:'2026-11-24'};
 const file='server/geo-posts.ts';
 replace(file,'export const GEO_POSTS: GeoPost[] = [',`export const GEO_POSTS: GeoPost[] = [\n  ${JSON.stringify(record)},`);
 replace(file,'const twin = GEO_POSTS.find(p => p.slug === post.intentTwinSlug); return', 'const twin = GEO_POSTS.find(p => p.slug === post.intentTwinSlug); if (!post.intentTwinSlug) return ""; return');
}
if(process.argv.includes('--apply')) for(const [file,content] of files){
 const target=join(root,file);
 mkdirSync(dirname(target),{recursive:true});
 writeFileSync(target,content,'utf8');
}
console.log(key,path,words+' words',faqs.length+' FAQs', [...files.keys()].join(', '));
