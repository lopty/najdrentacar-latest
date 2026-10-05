import React from 'react';
import { BUSINESS, HOURS_SENTENCE, aed } from '../site/business';
import type { Crumb } from '../site/schema';
import { CARS, Car, carImage, carName, carPath, carsWithRates } from '../data/cars';
import { CATEGORIES, CategoryPage, MAIN_CATEGORY_SLUGS, TERM_CATEGORY_SLUGS, categoriesForCar, categoryPath, getCategory } from '../content/categories';
import { GUIDES, getGuide, guidePath } from '../content/guides';
import {
  CallButton,
  CarGrid,
  CheckList,
  Container,
  CtaBand,
  FaqList,
  H2,
  LinkCards,
  PageHeader,
  Prose,
  RateNote,
  Section,
  TrustPanel,
  WhatsAppButton,
} from '../components/ui';

export const HOME_FAQS = [
  {
    q: 'Is Najd Rent a Car a licensed company?',
    a: `Yes. ${BUSINESS.legalName} holds commercial licence ${BUSINESS.licenceNumber} from the ${BUSINESS.licenceAuthority}. The licensed activity is car rental and the licence was first issued on ${BUSINESS.licenceFirstIssued}.`,
  },
  {
    q: 'What cars can I rent from Najd?',
    a: `We list ${CARS.length} models, from the Mitsubishi Attrage and Nissan Sunny to the Cadillac Escalade, Mercedes-Benz S-Class and Range Rover Vogue. The company operates a fleet of ${BUSINESS.fleetSize} vehicles.`,
  },
  {
    q: 'How do I book a car?',
    a: `Call or WhatsApp ${BUSINESS.phoneDisplay} with the car and dates you want. It is the same number for both. We confirm availability and the current rate before you commit.`,
  },
  {
    q: 'Do you deliver rental cars?',
    a: 'Yes. Najd delivers cars. Tell us the address and time you need the car and we will confirm the delivery arrangements when you book.',
  },
  {
    q: 'When is the Najd Rent a Car office open?',
    a: `The Al Quoz office is open ${HOURS_SENTENCE}.`,
  },
  {
    q: 'Do you rent cars with a driver?',
    a: 'Yes. Najd provides chauffeur-driven cars as well as self-drive rentals, for executive travel, events and delegations.',
  },
];

export const HomePage: React.FC = () => {
  const featured = ['nissan-sunny', 'mitsubishi-asx', 'mitsubishi-xpander', 'audi-a6', 'cadillac-escalade', 'range-rover-vogue'].map(
    (slug) => CARS.find((c) => c.slug === slug)!,
  );
  const mainCats = MAIN_CATEGORY_SLUGS.map(getCategory);
  const termCats = TERM_CATEGORY_SLUGS.map(getCategory);
  const otherCats = CATEGORIES.filter((c) => !MAIN_CATEGORY_SLUGS.includes(c.slug) && !TERM_CATEGORY_SLUGS.includes(c.slug));
  const homeGuides = [
    'b2b-car-rental-dubai',
    'long-term-car-rental-dubai',
    'affordable-car-rental-dubai',
    'how-to-choose-a-car-rental-company-in-dubai',
    'car-rental-with-delivery-dubai',
    'documents-to-rent-a-car-in-dubai',
    'car-rental-deposit-insurance-dubai',
    'best-7-seater-to-rent-in-dubai',
  ].map(getGuide);
  return (
    <>
      <section className="relative overflow-hidden bg-slate-900">
        <img
          src="/images/najd-escalade-fleet.webp"
          alt="Black Cadillac Escalade SUVs from the Najd Rent a Car fleet in Dubai"
          width={1280}
          height={852}
          className="absolute inset-0 w-full h-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
        <Container className="relative py-16 sm:py-24">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-red-300 uppercase tracking-wider">
              Licensed since {BUSINESS.foundingYear} · Licence {BUSINESS.licenceNumber}
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mt-3">Car Rental in Dubai</h1>
            <p className="text-base sm:text-lg text-slate-200 mt-4 leading-relaxed">
              Najd Rent a Car is a licensed Dubai car rental company based in Al Quoz. We rent economy cars, SUVs and luxury
              vehicles by the day, week, month and year, self-drive or with a chauffeur. We deliver cars to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-7">
              <WhatsAppButton message="Hello Najd Rent a Car, I would like to rent a car in Dubai." />
              <a
                href="/fleet/"
                className="inline-flex items-center justify-center px-5 py-3 bg-white text-slate-900 font-bold text-sm rounded-xl hover:bg-slate-100 transition-colors"
              >
                View the fleet
              </a>
            </div>
          </div>
        </Container>
      </section>

      <div className="bg-white border-b border-slate-200">
        <Container className="py-6">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-5 text-sm">
            <div>
              <dt className="text-xs text-slate-500 uppercase tracking-wider">Serving clients since</dt>
              <dd className="text-xl font-bold text-slate-900 mt-1">{BUSINESS.foundingYear}</dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500 uppercase tracking-wider">Fleet</dt>
              <dd className="text-xl font-bold text-slate-900 mt-1">{BUSINESS.fleetSize} vehicles</dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500 uppercase tracking-wider">Commercial licence</dt>
              <dd className="text-xl font-bold text-slate-900 mt-1">
                <a href="/licence/" className="hover:text-[#C5221F]">No. {BUSINESS.licenceNumber}</a>
              </dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500 uppercase tracking-wider">Part of</dt>
              <dd className="text-xl font-bold text-slate-900 mt-1">
                <a href="/about/" className="hover:text-[#C5221F]">{BUSINESS.group}</a>
              </dd>
            </div>
          </dl>
        </Container>
      </div>

      <Container>
        <Section>
          <H2>Rent by category</H2>
          <LinkCards
            links={mainCats.map((c) => ({
              href: categoryPath(c.slug),
              label: c.h1,
              note: `${c.cars.length} models`,
            }))}
          />
        </Section>

        <Section>
          <H2>Rent by term</H2>
          <LinkCards
            links={termCats.map((c) => ({
              href: categoryPath(c.slug),
              label: c.h1,
              note: `${c.cars.length} models in the catalogue`,
            }))}
          />
        </Section>

        <Section>
          <H2>Popular cars and current rates</H2>
          <CarGrid cars={featured} />
          <RateNote />
          <p className="mt-5">
            <a href="/fleet/" className="text-sm font-semibold text-[#C5221F] underline underline-offset-4">
              See all {CARS.length} models in the fleet
            </a>
          </p>
        </Section>

        <Section>
          <H2>Why rent from Najd</H2>
          <Prose
            paragraphs={[
              `Najd Rent a Car has served clients in Dubai since ${BUSINESS.foundingYear}. That is more than two decades of renting cars in one city under the same commercial licence, number ${BUSINESS.licenceNumber}. You can check that licence yourself, and we explain how on our licence page.`,
              `We are part of ${BUSINESS.group}, a diversified business group established in ${BUSINESS.groupFoundingYear}. The fleet of ${BUSINESS.fleetSize} vehicles covers economy, business, SUV and executive segments, so the same company can supply a monthly Nissan Sunny for a new resident and a chauffeur-driven Cadillac Escalade for a visiting delegation.`,
              'The company states a clean file with the RTA and Dubai Police, and its team is named and pictured on this site. When you rent from us you know who you are dealing with.',
            ]}
          />
        </Section>

        <Section>
          <H2>More ways to rent</H2>
          <LinkCards links={otherCats.map((c) => ({ href: categoryPath(c.slug), label: c.h1 }))} />
        </Section>

        <Section>
          <H2>Rental guides</H2>
          <LinkCards
            links={[
              ...homeGuides.map((g) => ({ href: guidePath(g.slug), label: g.h1 })),
              { href: '/guides/', label: 'All rental guides', note: `${GUIDES.length} guides` },
            ]}
          />
        </Section>

        <Section>
          <H2>Common questions</H2>
          <FaqList faqs={HOME_FAQS} />
        </Section>

        <Section>
          <TrustPanel />
        </Section>
      </Container>
    </>
  );
};

export const FleetPage: React.FC<{ crumbs: Crumb[] }> = ({ crumbs }) => {
  const groups: { heading: string; cars: Car[]; href: string; linkLabel: string }[] = [
    {
      heading: 'Economy and mid-range',
      cars: CARS.filter((c) => !c.tags.includes('luxury')),
      href: '/economy-car-rental-dubai/',
      linkLabel: 'Economy car rental in Dubai',
    },
    {
      heading: 'Luxury and premium',
      cars: CARS.filter((c) => c.tags.includes('luxury')),
      href: '/luxury-car-rental-dubai/',
      linkLabel: 'Luxury car rental in Dubai',
    },
  ];
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        h1="Our Fleet: Cars for Rent in Dubai"
        lead={`${CARS.length} models are listed below, ${carsWithRates().length} with published daily, weekly and monthly rates. The full Najd fleet is ${BUSINESS.fleetSize} vehicles, so ask us if you need a model or quantity that is not shown.`}
      />
      <Container>
        {groups.map((g) => (
          <Section key={g.heading}>
            <H2>
              {g.heading} ({g.cars.length} models)
            </H2>
            <CarGrid cars={g.cars} />
            <p className="mt-5">
              <a href={g.href} className="text-sm font-semibold text-[#C5221F] underline underline-offset-4">
                {g.linkLabel}
              </a>
            </p>
          </Section>
        ))}
        <RateNote />
        <Section>
          <H2>Browse the fleet by need</H2>
          <LinkCards
            links={CATEGORIES.map((c) => ({ href: categoryPath(c.slug), label: c.h1, note: `${c.cars.length} models` }))}
          />
        </Section>
        <Section>
          <CtaBand heading="Need a car that is not listed?" message="Hello Najd Rent a Car, I am looking for a car that is not on your website." />
        </Section>
        <Section>
          <TrustPanel />
        </Section>
      </Container>
    </>
  );
};

function relatedCars(car: Car): Car[] {
  const score = (other: Car) => other.tags.filter((t) => car.tags.includes(t)).length;
  return CARS.filter((c) => c.slug !== car.slug)
    .map((c, i) => ({ c, s: score(c), i }))
    .sort((a, b) => b.s - a.s || a.i - b.i)
    .slice(0, 3)
    .map((x) => x.c);
}

export function carFaqs(car: Car) {
  const name = carName(car);
  const faqs: { q: string; a: string }[] = [];
  if (car.rates) {
    faqs.push({
      q: `How much does it cost to rent a ${name} in Dubai?`,
      a: `At Najd Rent a Car the ${name} is ${aed(car.rates.day)} per day, ${aed(car.rates.week)} per week or ${aed(car.rates.month)} per month. Rates can change, so confirm when you book.`,
    });
  } else {
    faqs.push({
      q: `How much does it cost to rent a ${name} in Dubai?`,
      a: `The ${name} is quoted on request. Send us your dates on WhatsApp at ${BUSINESS.whatsappDisplay} and we will confirm the current rate.`,
    });
  }
  if (car.seats) {
    faqs.push({
      q: `How many people does the ${name} seat?`,
      a: `The ${name} seats ${car.seatsText ?? car.seats}${car.bags ? ` and carries about ${car.bags} bags` : ''}. It has an automatic gearbox.`,
    });
  }
  return faqs;
}

export const CarPage: React.FC<{ car: Car; crumbs: Crumb[] }> = ({ car, crumbs }) => {
  const name = carName(car);
  const cats = categoriesForCar(car);
  const message = `Hello Najd Rent a Car, I would like to rent the ${name}. My dates are: `;
  return (
    <>
      <PageHeader crumbs={crumbs} eyebrow={car.label} h1={`${name} Rental in Dubai`} lead={car.summary} />
      <Container>
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 flex items-center justify-center">
                <img
                  src={carImage(car)}
                  alt={`${name} available to rent from Najd Rent a Car in Dubai`}
                  width={960}
                  height={640}
                  className="max-h-96 w-auto max-w-full object-contain"
                />
              </div>
              <div className="mt-6">
                <H2>{name} specifications</H2>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 text-sm max-w-2xl">
                  {[
                    ['Make', car.brand],
                    ['Model', car.model],
                    ['Body type', car.bodyType],
                    ['Transmission', car.transmission],
                    ...(car.seats ? [['Seats', car.seatsText ?? String(car.seats)]] : []),
                    ...(car.bags ? [['Luggage', `${car.bags} bags`]] : []),
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between py-2.5 border-b border-slate-200">
                      <dt className="text-slate-500">{k}</dt>
                      <dd className="font-semibold text-slate-900">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <h2 className="text-base font-bold text-slate-900">{name} rental rates</h2>
                {car.rates ? (
                  <>
                    <table className="w-full text-sm mt-3">
                      <tbody>
                        {(
                          [
                            ['Per day', car.rates.day],
                            ['Per week', car.rates.week],
                            ['Per month', car.rates.month],
                          ] as const
                        ).map(([label, value]) => (
                          <tr key={label} className="border-b border-slate-100 last:border-0">
                            <th scope="row" className="text-left font-normal text-slate-600 py-2.5">
                              {label}
                            </th>
                            <td className="text-right font-bold text-slate-900 tabular-nums py-2.5">{aed(value)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <RateNote />
                  </>
                ) : (
                  <p className="text-sm text-slate-600 mt-3">
                    Rate on request. Ask us for the current rate for your dates.
                  </p>
                )}
                <div className="flex flex-col gap-2.5 mt-5">
                  <WhatsAppButton message={message} label={`Book the ${car.model} on WhatsApp`} />
                  <CallButton />
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <h2 className="text-base font-bold text-slate-900">Who it suits</h2>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-700 list-disc pl-5">
                  {car.suits.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <h2 className="text-base font-bold text-slate-900 mt-5">Find it under</h2>
                <ul className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
                  {cats.map((c) => (
                    <li key={c.slug}>
                      <a
                        href={categoryPath(c.slug)}
                        className="inline-block px-3 py-1.5 rounded-full border border-slate-200 text-slate-700 hover:border-[#C5221F] hover:text-[#C5221F]"
                      >
                        {c.navLabel}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section className="border-t border-slate-200">
          <H2>Explore more vehicles</H2>
          <CarGrid cars={relatedCars(car)} />
          <p className="mt-5">
            <a href="/fleet/" className="text-sm font-semibold text-[#C5221F] underline underline-offset-4">
              View the full fleet
            </a>
          </p>
        </Section>

        <Section className="border-t border-slate-200">
          <H2>Renting the {name} in Dubai</H2>
          <Prose paragraphs={car.about} />
          <p className="text-[15px] sm:text-base text-slate-700 leading-relaxed max-w-3xl mt-4">
            Before you book, read our guides on{' '}
            <a href={guidePath('documents-to-rent-a-car-in-dubai')} className="text-[#C5221F] underline underline-offset-2">
              the documents you need
            </a>{' '}
            and{' '}
            <a href={guidePath('car-rental-deposit-insurance-dubai')} className="text-[#C5221F] underline underline-offset-2">
              how deposits and insurance work
            </a>
            .
          </p>
        </Section>

        <Section>
          <H2>{name} rental questions</H2>
          <FaqList faqs={carFaqs(car)} />
        </Section>

        <Section>
          <TrustPanel />
        </Section>
      </Container>
    </>
  );
};

const RateTable: React.FC<{ cars: Car[] }> = ({ cars }) => (
  <div className="overflow-x-auto bg-white border border-slate-200 rounded-2xl">
    <table className="w-full text-sm min-w-[560px]">
      <caption className="sr-only">Daily, weekly and monthly rental rates by model</caption>
      <thead>
        <tr className="text-left text-xs uppercase tracking-wider text-slate-500 border-b border-slate-200">
          <th scope="col" className="px-4 py-3 font-semibold">Model</th>
          <th scope="col" className="px-4 py-3 font-semibold text-right">Per day</th>
          <th scope="col" className="px-4 py-3 font-semibold text-right">Per week</th>
          <th scope="col" className="px-4 py-3 font-semibold text-right">Per month</th>
          <th scope="col" className="px-4 py-3 font-semibold text-right">30 days at daily rate</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) => (
          <tr key={car.slug} className="border-b border-slate-100 last:border-0">
            <th scope="row" className="px-4 py-3 text-left font-semibold">
              <a href={carPath(car)} className="text-slate-900 hover:text-[#C5221F]">
                {carName(car)}
              </a>
            </th>
            <td className="px-4 py-3 text-right tabular-nums">{aed(car.rates!.day)}</td>
            <td className="px-4 py-3 text-right tabular-nums">{aed(car.rates!.week)}</td>
            <td className="px-4 py-3 text-right tabular-nums font-bold">{aed(car.rates!.month)}</td>
            <td className="px-4 py-3 text-right tabular-nums text-slate-500">{aed(car.rates!.day * 30)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const CategoryPageView: React.FC<{ category: CategoryPage; crumbs: Crumb[] }> = ({ category, crumbs }) => (
  <>
    <PageHeader crumbs={crumbs} h1={category.h1} lead={category.lead}>
      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <WhatsAppButton message={`Hello Najd Rent a Car, I am interested in: ${category.h1}.`} />
        <CallButton />
      </div>
    </PageHeader>
    <Container>
      <Section>
        <H2>
          {category.listHeading} ({category.cars.length})
        </H2>
        <CarGrid cars={category.cars} />
        <RateNote />
      </Section>

      {category.showRateTable && (
        <Section>
          <H2>Monthly rate comparison</H2>
          <RateTable cars={category.cars} />
        </Section>
      )}

      {category.sections.map((s) => (
        <Section key={s.heading}>
          <H2>{s.heading}</H2>
          <Prose paragraphs={s.paragraphs} />
        </Section>
      ))}

      <Section>
        <H2>{category.checklist.heading}</H2>
        <CheckList items={category.checklist.items} />
      </Section>

      <Section>
        <H2>{category.h1}: common questions</H2>
        <FaqList faqs={category.faqs} />
      </Section>

      <Section>
        <H2>Helpful guides</H2>
        <LinkCards links={category.guides.map((g) => ({ href: guidePath(g), label: getGuide(g).h1 }))} />
      </Section>

      <Section>
        <H2>Related rental options</H2>
        <LinkCards
          links={[
            ...category.related.map((r) => ({ href: categoryPath(r), label: getCategory(r).h1 })),
            { href: '/fleet/', label: 'Full fleet', note: `${CARS.length} models` },
          ]}
        />
      </Section>

      <Section>
        <CtaBand heading="Ready to book or need a quote?" message={`Hello Najd Rent a Car, I would like a quote for: ${category.h1}.`} />
      </Section>

      <Section>
        <TrustPanel />
      </Section>
    </Container>
  </>
);
