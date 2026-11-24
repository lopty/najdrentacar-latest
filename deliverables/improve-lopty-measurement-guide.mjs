import { readFileSync, writeFileSync } from 'node:fs';
const path='C:/Users/Lopty/Desktop/App/LoptyPascal/src/content/prezlo-insights.json';
const source=readFileSync(path,'utf8');
const slug='insights/what-a-geo-consultant-in-dubai-actually-does-and-how-to-meas-1793855299816';
const start=source.lastIndexOf('  {',source.indexOf('"slug": "'+slug+'"'));
const end=source.indexOf('\n  {',source.indexOf('"slug": "'+slug+'"'));
if(start<0||end<0) throw Error('Guide not found');
const old=JSON.parse(source.slice(start,end).trim().replace(/,$/,''));
const revised={...old,updated:'2026-11-24',
  navLabel:'How to measure GEO work',
  title:'How to Measure a GEO Engagement | Lopty Pascal',
  description:'Use a simple reporting plan for GEO that keeps AI mentions, referrals, received enquiries and qualified opportunities separate. Includes UAE client examples.',
  h1:'How to measure a GEO engagement',
  answer:['Before starting GEO work, agree what you want to measure. An AI answer, a visit and a received enquiry answer different questions. Keep separate records for each and compare them on a schedule your team can maintain.'],
  sections:[
    {h:'Set up a baseline you can repeat',p:['Choose questions people ask when they shortlist a provider. For a UAE rental company, a question about a monthly vehicle with delivery is more useful than an open-ended request to name a famous rental brand. Record the wording, tool, language, market, date and answer. Keep the sample when a result is missing, so the next report compares the same set.']},
    {h:'Record what actually changed on the website',p:['Log the routes that changed, the date they went live and what a visitor can now learn or do. When a rate or service boundary changes, check whether the source page and the AI answer still agree. Monitoring without a change log leaves the team guessing which work is worth repeating.']},
    {h:'Follow referrals through to the team',p:['The [Najd case study](/work/najd-rent-a-car-ai-seo) follows a tagged ChatGPT session to a monthly rental page and a WhatsApp click. The [Tuwaiq case study](/work/tuwaiq-travel-website-ai-seo) shows a Google-referred package visit and separately reports enquiries received. In both cases, join the visit to a lead record only when the available evidence supports that match.']},
    {h:'Use the report to pick the next change',list:['Outdated detail in repeated answers: correct the source pages and recheck the wording.','Visits without useful enquiries: inspect the landing page and see whether the contact form carries the service or package into the conversation.','Enquiries with poor fit: review the questions sales asks and publish any eligibility details buyers routinely miss.']},
  ],
  faqs:[{q:'What should a GEO report include?',a:'Use a dated question sample, a log of changes and separate counts for observed mentions, referrals and received enquiries. Include data gaps and the next decision.'},{q:'Can an AI citation prove a lead came from AI?',a:'A citation shows a source appeared in an answer. Referral or customer records help establish what happened afterward.'}],
  related:['services/ai-seo-geo','insights/how-to-hire-an-ai-seo-consultant-dubai','insights/tracking-leads-from-chatgpt-and-perplexity','work/najd-rent-a-car-ai-seo','work/tuwaiq-travel-website-ai-seo'],
};
const output=source.slice(0,start)+JSON.stringify(revised,null,2).split('\n').map(line=>'  '+line).join('\n')+','+source.slice(end);
JSON.parse(output);
if(process.argv.includes('--apply')) writeFileSync(path,output,'utf8');
console.log(revised.title);
