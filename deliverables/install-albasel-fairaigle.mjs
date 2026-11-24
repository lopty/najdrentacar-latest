import { copyFileSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import * as guide from './albasel-indian-property-guide.mjs';
const root='C:/Users/Lopty/Desktop/App/abre2/';
const file=root+'scripts/build.mjs';
const original=readFileSync(file,'utf8');
const anchor="await page({route:'/guides/'";
const related="link('/how-we-work/','How we work'),";
if (!original.includes(anchor) || original.includes('indian-property-guide.mjs')) throw Error('Unexpected build source');
const content=guide.body.replace(/<[^>]+>/g,' ').trim();
const words=content.split(/\s+/).length;
if(words<1000) throw Error('Article too short: '+words);
const output="import * as indianPropertyGuide from '../data/indian-property-guide.mjs';\n"+original.replace(anchor,"await page({...indianPropertyGuide, schemas:[faqSchema(indianPropertyGuide.faq)]});\n"+anchor)
  .replace("['/how-we-work/','How we work'],","['/how-we-work/','How we work'],['/resources/indian-property-ownership-nri-uae/','Indian property guide for UAE residents'],");
if(process.argv.includes('--apply')){
  copyFileSync(fileURLToPath(new URL('./albasel-indian-property-guide.mjs',import.meta.url)),root+'data/indian-property-guide.mjs');
  writeFileSync(file,output,'utf8');
}
console.log(words+' words, '+guide.faq.length+' FAQs, route '+guide.route);
