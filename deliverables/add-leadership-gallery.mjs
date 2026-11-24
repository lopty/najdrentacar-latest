import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { createRequire } from 'node:module';
const root='C:/Users/Lopty/Desktop/App';
const sharp=createRequire(join(root,'abre2/package.json'))('sharp');
const downloads='C:/Users/Lopty/Downloads';
const photos=[
  ['WhatsApp Image 2026-11-11 ast 7.04.34 PM.jpeg','event-al-abbar','Basel Al Kasem at a gathering with Mohamed Al Abbar'],
  ['WhatsApp Imasge 2026-11-11 at 7.04.34 PM.jpeg','event-al-shafar','Basel Al Kasem with Ali Al Shafar'],
  ['WhatsApp Image 2s026-11-11 at 7.04.34 PM.jpeg','event-al-serkal','Basel Al Kasem with Al Serkal'],
  ['WhatsApp Image 2026-11-11 at 7.04.35 PM.jpeg','event-arif-amiri','Basel Al Kasem with Arif Amiri'],
  ['WhatsApp Image 2026-11s11 at 7.04.35 PM.jpeg','event-reception','Basel Al Kasem with a guest at a reception'],
  ['WhatsApp Image 2026-11-22 at 3.17.19 PM.jpeg','meeting-binghatti','Basel Al Kasem with Mohamed Binghatti'],
];
const assets=await Promise.all(photos.map(async ([file,slug,caption])=>{
  const {data,info}=await sharp(await readFile(join(downloads,file))).autoOrient().resize({width:640,withoutEnlargement:true}).webp({quality:80}).toBuffer({resolveWithObject:true});
  return {data,src:'/assets/leadership/'+slug+'.webp',caption,width:info.width,height:info.height};
}));
const jsx=(heading,intro,href,label)=>`<section id="leadership-gallery" aria-labelledby="leadership-gallery-heading">
          <h2 id="leadership-gallery-heading" className="text-2xl font-semibold">${heading}</h2>
          <p className="mt-3 text-sm leading-relaxed">${intro}</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
            ${assets.map(({src,caption,width,height})=>`<figure className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <img src="${src}" width={${width}} height={${height}} loading="lazy" decoding="async" alt="${caption}" className="block h-auto w-full" />
              <figcaption className="px-3 py-3 text-sm text-slate-700">${caption}</figcaption>
            </figure>`).join('\n            ')}
          </div>
          <p className="mt-5"><a className="font-semibold underline underline-offset-4" href="${href}">${label}</a></p>
        </section>`;
const html=`<section id="leadership-gallery" aria-labelledby="leadership-gallery-heading"><h2 id="leadership-gallery-heading">Basel Al Kasem in the community</h2><p>Photographs from gatherings and meetings attended by Al Basel Group founder Basel Al Kasem. A group-supplied note describes the meeting with Mohamed Binghatti as a discussion about the property market.</p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%, 145px),1fr));gap:1rem">${assets.map(({src,caption,width,height})=>`<figure style="margin:0;overflow:hidden;border-radius:.7rem"><img src="${src}" width="${width}" height="${height}" loading="lazy" decoding="async" alt="${caption}" style="display:block;width:100%;height:auto"><figcaption style="padding:.6rem 0">${caption}</figcaption></figure>`).join('')}</div><p><a href="/verification/">View brokerage verification and contact details</a></p></section>`;
const projects=[
  ['najdrentacar-latest','src/pages/trust.tsx','        <H2>The people behind the company</H2>',(s,a)=>s.replace('      <Section>\n'+a,'      <Section>\n        '+jsx('Al Basel Group leadership in the community','A photo gallery from gatherings and meetings attended by Basel Al Kasem, founder of Najd Rent a Car and Al Basel Group.','/team/','Meet the Najd team')+'\n      </Section>\n\n      <Section>\n'+a)],
  ['tuwaiq-travel','src/components/IndexAndTrustViews.tsx','            {FEATURE_FLAGS.enableUnconfirmedStats && (',(s,a)=>s.replace(a,jsx('Photographs from our founder’s engagements','See Basel Al Kasem, founder of Tuwaiq Travel and Al Basel Group, at gatherings and meetings documented in the group’s photo archive.','/contact/','Contact the Tuwaiq Travel team')+'\n\n'+a)],
  ['abre2','scripts/build.mjs',"${route==='awards'?",(s,a)=>s.replace(a,"${route==='about'?\x60"+html+"\x60:''}"+a)],
];
for(const [site,file,anchor,apply] of projects){
  if(process.argv[2] && process.argv[2]!==site) continue;
  const path=join(root,site,file);
  const source=await readFile(path,'utf8');
  const updated=apply(source,anchor);
  if(updated===source || source.includes('id="leadership-gallery"')) throw Error('Could not prepare gallery in '+path);
  if(process.argv.includes('--apply')){
    await mkdir(join(root,site,'public/assets/leadership'),{recursive:true});
    await Promise.all(assets.map(({data,src})=>writeFile(join(root,site,'public',src),data)));
    await writeFile(path,updated);
  }
  console.log(site, path, assets.length, assets.reduce((n,a)=>n+a.data.length,0));
}
