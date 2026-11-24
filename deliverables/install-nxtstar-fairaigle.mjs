import { copyFileSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import article from './nxtstar-india-contract-resource.js';
const root='C:/Users/Lopty/Desktop/App/Nxtstar-Website/';
const route='/resources/'+article.slug;
const words=article.content.replace(/<[^>]+>/g,' ').trim().split(/\s+/).length;
if(words<1000) throw Error('Article too short');
const files=new Map();
function insert(file,anchor,addition){
  const path=root+file, s=files.get(path)??readFileSync(path,'utf8');
  if(!s.includes(anchor)||s.includes(addition)) throw Error('Unexpected source in '+file);
  files.set(path,s.replace(anchor,addition+anchor));
}
insert('src/App.jsx',"import BlogPostPage", "import IndiaContractResource from './pages/IndiaContractResource';\n");
insert('src/App.jsx','        {/* Individual Blog Post Page */}',`        <Route path="${route}" element={<IndiaContractResource />} />\n\n`);
insert('scripts/routes.mjs',"    '/blogs',",`    '${route}',\n`);
insert('src/components/layout/Footer.jsx','                                    <Link to="/business/offshore">Offshore</Link>',`                                    <Link to="${route}">Indian contract dispute guide</Link>\n                                </motion.li>\n                                <motion.li className="footer-link" variants={itemVariants}>\n`);
files.set(root+'src/pages/IndiaContractResource.jsx',`import PageLayout from '../components/layout/PageLayout';
import article from '../data/indiaContractResource';
import '../styles/pages/BlogPostPage.css';

export default function IndiaContractResource() {
    return (
        <PageLayout title={article.title} description={article.excerpt} ogType="article">
            <article className="blog-post-page">
                <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: article.content }} />
            </article>
        </PageLayout>
    );
}
`);
if(process.argv.includes('--apply')){
  copyFileSync(fileURLToPath(new URL('./nxtstar-india-contract-resource.js',import.meta.url)),root+'src/data/indiaContractResource.js');
  for(const [file,content] of files) writeFileSync(file,content,'utf8');
}
console.log(words+' words, '+route);
