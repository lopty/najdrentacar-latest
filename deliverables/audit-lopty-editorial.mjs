import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const root = 'C:/Users/Lopty/Desktop/App/LoptyPascal';
const { seoRoutes } = await import(pathToFileURL(join(root,'.ssr/entry-server.js')));
const clean = s => s.replace(/<[^>]+>/g,' ').replace(/&#x27;|&#39;/g,"'").replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/\s+/g,' ').trim();
const matches = (s,re) => [...s.matchAll(re)].map(m=>clean(m[1]));
const pages = seoRoutes.map(({path,title,description})=>{
  const html=readFileSync(join(root,'dist',path,'index.html'),'utf8');
  const main=html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1]??'';
  const parts=[...main.matchAll(/<section\b[^>]*\bid="(?:overview|section-\d+)"[^>]*>([\s\S]*?)<\/section>/g)].map(m=>m[1]);
  const body=clean(parts.join(' '));
  const kind=path==='/'?'home':path.startsWith('/insights/')?'insight':path.startsWith('/work/')&&!['/work/seo','/work/ai-seo'].includes(path)?'case study':/^\/(digital-marketing-dubai|ai-seo-geo-dubai)\//.test(path)?'industry':path.startsWith('/services/')?'service':'hub or trust';
  const sections=matches(parts.join(' '),/<h2\b[^>]*>(.*?)<\/h2>/gs);
  const faq=main.match(/<section id="questions"[^>]*>([\s\S]*?)<\/section>/)?.[1]??'';
  const sources=main.match(/<section id="sources"[^>]*>([\s\S]*?)<\/section>/)?.[1]??'';
  const rec=main.match(/<section class="expertise-panel"[^>]*>[\s\S]*?<h2>(.*?)<\/h2>/s)?.[1]??'';
  return {path,kind,title,description,h1:matches(main,/<h1\b[^>]*>(.*?)<\/h1>/gs)[0]??'',words:body?body.split(' ').length:null,sections,faq:matches(faq,/<summary[^>]*>(.*?)<\/summary>/gs).length,sources:[...sources.matchAll(/href="([^"]+)"/g)].map(m=>m[1]),rec:clean(rec),links:[...parts.join(' ').matchAll(/href="(\/[^"#?]+)"/g)].map(m=>m[1]),contact:[...new Set([...main.matchAll(/href="(https:\/\/(?:wa\.me|calendly\.com)\/[^"]+)"/g)].map(m=>m[1]))]};
});
const out=fileURLToPath(new URL('./loptypascal-editorial-inventory.csv',import.meta.url));
const keys=Object.keys(pages[0]);
const cell=x=>'"'+(Array.isArray(x)?x.join(' | '):x??'').toString().replaceAll('"','""')+'"';
writeFileSync(out,[keys.join(','),...pages.map(p=>keys.map(k=>cell(p[k])).join(','))].join('\n'),'utf8');
for(const kind of new Set(pages.map(p=>p.kind))){
  const group=pages.filter(p=>p.kind===kind);
  console.log(kind,group.length,'under 350 core words',group.filter(p=>p.words!==null&&p.words<350).length,'no listed source',group.filter(p=>!p.sources.length).length);
}
console.log('template pages',pages.filter(p=>p.rec).length,'best-framed headings',pages.filter(p=>/\bbest\b/i.test(p.rec)).length,'direct WA',pages.filter(p=>p.contact.some(s=>s.includes('wa.me'))).length);
console.log(pages.map(p=>[p.path,p.words??'-',p.sections.slice(0,4).join(' / ')].join('\t')).join('\n'));
