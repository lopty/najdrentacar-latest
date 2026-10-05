import React from 'react';
import type { Crumb } from '../site/schema';
import { GUIDES, Guide, guidePath } from '../content/guides';
import { categoryPath, getCategory, MAIN_CATEGORY_SLUGS } from '../content/categories';
import { getCar } from '../data/cars';
import { CarGrid, CheckList, Container, CtaBand, FaqList, H2, LinkCards, PageHeader, Prose, Section, TrustPanel } from '../components/ui';

export const GuidesIndexPage: React.FC<{ crumbs: Crumb[] }> = ({ crumbs }) => (
  <>
    <PageHeader
      crumbs={crumbs}
      h1="Car Rental Guides for Dubai"
      lead="Plain answers to the questions renters ask before they book: documents, deposits, insurance, driving rules and how to choose the right car and rental term."
    />
    <Container>
      <Section>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {GUIDES.map((g) => (
            <li key={g.slug} className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6">
              <h2 className="text-lg font-bold text-slate-900">
                <a href={guidePath(g.slug)} className="hover:text-[#C5221F]">
                  {g.h1}
                </a>
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">{g.description}</p>
              <ul className="mt-3 text-sm text-slate-700 list-disc pl-5 space-y-1">
                {g.sections.slice(0, 3).map((s) => (
                  <li key={s.heading}>{s.heading}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>
      <Section>
        <H2>Ready to choose a car?</H2>
        <LinkCards
          links={[
            ...MAIN_CATEGORY_SLUGS.map((s) => ({ href: categoryPath(s), label: getCategory(s).h1 })),
            { href: '/fleet/', label: 'Full fleet' },
          ]}
        />
      </Section>
      <Section>
        <TrustPanel />
      </Section>
    </Container>
  </>
);

const formatDate = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return `${d} ${months[m - 1]} ${y}`;
};

/** The next five guides after this one, wrapping round, so every guide links on to others. */
function moreGuides(guide: Guide): Guide[] {
  const start = GUIDES.indexOf(guide);
  return [1, 2, 3, 4, 5].map((n) => GUIDES[(start + n) % GUIDES.length]);
}

export const GuidePage: React.FC<{ guide: Guide; crumbs: Crumb[] }> = ({ guide, crumbs }) => (
  <>
    <PageHeader crumbs={crumbs} eyebrow="Rental guide" h1={guide.h1} lead={guide.lead}>
      <p className="text-xs text-slate-500 mt-4">
        Written by the Najd Rent a Car team. Last reviewed <time dateTime={guide.updated}>{formatDate(guide.updated)}</time>.
      </p>
    </PageHeader>
    <Container>
      <Section>
        <nav aria-label="In this guide" className="bg-white border border-slate-200 rounded-2xl p-5 max-w-3xl">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">In this guide</h2>
          <ol className="mt-3 space-y-1.5 text-sm list-decimal pl-5">
            {guide.sections.map((s, i) => (
              <li key={s.heading}>
                <a href={`#q${i + 1}`} className="text-[#C5221F] underline underline-offset-2">
                  {s.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </Section>

      {guide.sections.map((s, i) => (
        <Section key={s.heading}>
          <H2 id={`q${i + 1}`}>{s.heading}</H2>
          <Prose paragraphs={s.paragraphs.slice(0, 1)} />
          {s.list && (
            <div className="my-4">
              <CheckList items={s.list} />
            </div>
          )}
          {s.paragraphs.length > 1 && (
            <div className={s.list ? '' : 'mt-4'}>
              <Prose paragraphs={s.paragraphs.slice(1)} />
            </div>
          )}
        </Section>
      ))}

      {guide.sources.length > 0 && (
        <Section>
          <H2>Official sources</H2>
          <p className="text-[15px] text-slate-700 max-w-3xl mb-3">
            Rules change. Check the current position with the authority concerned before you travel.
          </p>
          <ul className="text-sm space-y-1.5 list-disc pl-5">
            {guide.sources.map((src) => (
              <li key={src.url}>
                <a href={src.url} rel="noopener" className="text-[#C5221F] underline underline-offset-2">
                  {src.name}
                </a>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section>
        <H2>Cars mentioned in this guide</H2>
        <CarGrid cars={guide.cars.slice(0, 3).map(getCar)} />
      </Section>

      <Section>
        <H2>Related rental options</H2>
        <LinkCards links={guide.categories.map((c) => ({ href: categoryPath(c), label: getCategory(c).h1 }))} />
      </Section>

      <Section>
        <H2>More guides</H2>
        <LinkCards
          links={[
            ...moreGuides(guide).map((g) => ({ href: guidePath(g.slug), label: g.h1 })),
            { href: '/guides/', label: 'All rental guides' },
          ]}
        />
      </Section>

      <Section>
        <H2>{guide.navLabel}: questions people ask</H2>
        <FaqList faqs={guide.faqs} />
      </Section>

      <Section>
        <CtaBand heading="Still have a question?" message={`Hello Najd Rent a Car, I have a question after reading your guide: ${guide.h1}`} />
      </Section>
      <Section>
        <TrustPanel />
      </Section>
    </Container>
  </>
);
