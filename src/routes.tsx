import React from 'react';
import { BUSINESS, SITE_URL, aed } from './site/business';
import {
  Crumb,
  ORG_ID,
  articleSchema,
  breadcrumbSchema,
  carListSchema,
  carSchema,
  faqSchema,
  organizationSchema,
  webPageSchema,
} from './site/schema';
import { CARS, carImage, carName, carPath, lowestRate } from './data/cars';
import { CATEGORIES, categoryPath } from './content/categories';
import { GUIDES, guidePath } from './content/guides';
import { CarPage, CategoryPageView, FleetPage, HOME_FAQS, HomePage, carFaqs } from './pages/commercial';
import { AboutPage, ContactPage, LicencePage, NotFoundPage, ReviewsPage, ServiceStandardsPage, TeamPage } from './pages/trust';
import { GuidePage, GuidesIndexPage } from './pages/guides';

export interface Route {
  path: string;
  title: string;
  description: string;
  /** Path of the Open Graph image. Defaults to the site image. */
  ogImage?: string;
  ogType?: 'website' | 'article';
  jsonLd: object[];
  render: () => React.ReactElement;
}

const HOME: Crumb = { name: 'Home', path: '/' };
const FLEET: Crumb = { name: 'Fleet', path: '/fleet/' };
const GUIDES_CRUMB: Crumb = { name: 'Guides', path: '/guides/' };

function page(
  path: string,
  title: string,
  description: string,
  crumbs: Crumb[],
  render: (crumbs: Crumb[]) => React.ReactElement,
  jsonLd: object[] = [],
  extra: Partial<Route> = {},
): Route {
  return {
    path,
    title,
    description,
    jsonLd: [organizationSchema(), breadcrumbSchema(crumbs), ...jsonLd],
    render: () => render(crumbs),
    ...extra,
  };
}

const staticRoutes: Route[] = [
  {
    path: '/',
    title: 'Najd Rent a Car Dubai | Car Rental Since 2002',
    description: `Licensed Dubai car rental company since 2002. Economy cars from ${aed(lowestRate(CARS, 'day')!)} per day, SUVs, luxury cars and chauffeur service. Licence ${BUSINESS.licenceNumber}. Call ${BUSINESS.phoneDisplay}.`,
    jsonLd: [
      organizationSchema(),
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: BUSINESS.name,
        url: SITE_URL + '/',
        publisher: { '@id': ORG_ID },
      },
      faqSchema(HOME_FAQS),
    ],
    render: () => <HomePage />,
  },
  page(
    '/fleet/',
    'Our Fleet: Cars for Rent in Dubai | Najd Rent a Car',
    `Browse the Najd Rent a Car fleet in Dubai: ${CARS.length} models from economy sedans to luxury SUVs, with daily, weekly and monthly rates.`,
    [HOME, FLEET],
    (crumbs) => <FleetPage crumbs={crumbs} />,
    [carListSchema('Najd Rent a Car fleet', CARS), webPageSchema('CollectionPage', 'Our Fleet', '/fleet/')],
  ),
  page(
    '/about/',
    'About Najd Rent a Car | Dubai Car Rental Since 2002',
    `Najd Rent a Car has served Dubai since 2002 from Al Quoz. Part of ${BUSINESS.group}, founded by ${BUSINESS.founder}, with a fleet of ${BUSINESS.fleetSize} vehicles.`,
    [HOME, { name: 'About', path: '/about/' }],
    (crumbs) => <AboutPage crumbs={crumbs} />,
    [webPageSchema('AboutPage', 'About Najd Rent a Car', '/about/')],
  ),
  page(
    '/team/',
    'Our Team | Najd Rent a Car Dubai',
    'Meet the people who run Najd Rent a Car in Dubai: the founder, general manager, fleet, accounts, VIP and sales team, with names, roles and photos.',
    [HOME, { name: 'About', path: '/about/' }, { name: 'Our Team', path: '/team/' }],
    (crumbs) => <TeamPage crumbs={crumbs} />,
    [webPageSchema('AboutPage', 'Our Team', '/team/')],
  ),
  page(
    '/licence/',
    'Licence and Verification | Najd Rent a Car',
    `Najd Rent a Car holds Dubai commercial licence ${BUSINESS.licenceNumber} from the ${BUSINESS.licenceAuthority}, first issued in 2002. Details and how to verify.`,
    [HOME, { name: 'About', path: '/about/' }, { name: 'Licence', path: '/licence/' }],
    (crumbs) => <LicencePage crumbs={crumbs} />,
    [webPageSchema('WebPage', 'Licence and Verification', '/licence/')],
  ),
  page(
    '/service-standards/',
    'Service Standards | Najd Rent a Car Dubai',
    'The service standards Najd Rent a Car sets for itself, and the handover checks every customer should make before driving away in a rental car.',
    [HOME, { name: 'About', path: '/about/' }, { name: 'Service Standards', path: '/service-standards/' }],
    (crumbs) => <ServiceStandardsPage crumbs={crumbs} />,
    [webPageSchema('WebPage', 'Service Standards', '/service-standards/')],
  ),
  page(
    '/reviews/',
    `Najd Rent a Car Reviews | ${BUSINESS.googleRating} on Google`,
    `Najd Rent a Car is rated ${BUSINESS.googleRating} out of 5 from ${BUSINESS.googleReviewCount} Google reviews. See the rating breakdown, what customers write about and where to read every review.`,
    [HOME, { name: 'About', path: '/about/' }, { name: 'Reviews', path: '/reviews/' }],
    (crumbs) => <ReviewsPage crumbs={crumbs} />,
    [webPageSchema('WebPage', 'Najd Rent a Car Reviews', '/reviews/')],
  ),
  page(
    '/contact/',
    'Contact Najd Rent a Car | Al Quoz, Dubai',
    `Contact Najd Rent a Car in Al Quoz, Dubai. Call or WhatsApp ${BUSINESS.phoneDisplay}, or email ${BUSINESS.email}, for availability and quotes.`,
    [HOME, { name: 'Contact', path: '/contact/' }],
    (crumbs) => <ContactPage crumbs={crumbs} />,
    [webPageSchema('ContactPage', 'Contact Najd Rent a Car', '/contact/')],
  ),
  page(
    '/guides/',
    'Car Rental Guides for Dubai | Najd Rent a Car',
    'Practical car rental guides for Dubai: documents, deposits and insurance, driving rules, choosing a car, and daily versus monthly rental.',
    [HOME, GUIDES_CRUMB],
    (crumbs) => <GuidesIndexPage crumbs={crumbs} />,
    [webPageSchema('CollectionPage', 'Car Rental Guides for Dubai', '/guides/')],
  ),
];

const categoryRoutes: Route[] = CATEGORIES.map((category) =>
  page(
    categoryPath(category.slug),
    category.title,
    category.description,
    [HOME, FLEET, { name: category.navLabel, path: categoryPath(category.slug) }],
    (crumbs) => <CategoryPageView category={category} crumbs={crumbs} />,
    [carListSchema(category.h1, category.cars), faqSchema(category.faqs)],
  ),
);

const carRoutes: Route[] = CARS.map((car) => {
  const name = carName(car);
  const rateText = car.rates
    ? `${aed(car.rates.day)}/day, ${aed(car.rates.week)}/week, ${aed(car.rates.month)}/month.`
    : 'Rate on request.';
  const specText = [car.seats ? `${car.seatsText ?? car.seats} seats` : '', car.transmission.toLowerCase()].filter(Boolean).join(', ');
  return page(
    carPath(car),
    `Rent ${name} in Dubai | Najd Rent a Car`,
    `${name} rental in Dubai. ${rateText} ${car.label}, ${specText}. Najd Rent a Car, licensed since 2002.`,
    [HOME, FLEET, { name, path: carPath(car) }],
    (crumbs) => <CarPage car={car} crumbs={crumbs} />,
    [carSchema(car), faqSchema(carFaqs(car))],
    { ogImage: carImage(car) },
  );
});

const guideRoutes: Route[] = GUIDES.map((guide) =>
  page(
    guidePath(guide.slug),
    guide.title,
    guide.description,
    [HOME, GUIDES_CRUMB, { name: guide.navLabel, path: guidePath(guide.slug) }],
    (crumbs) => <GuidePage guide={guide} crumbs={crumbs} />,
    [
      articleSchema({ headline: guide.h1, description: guide.description, path: guidePath(guide.slug), updated: guide.updated }),
      faqSchema(guide.faqs),
    ],
    { ogType: 'article' },
  ),
);

export const ROUTES: Route[] = [...staticRoutes, ...categoryRoutes, ...carRoutes, ...guideRoutes];

export const NOT_FOUND: Route = {
  path: '/404/',
  title: 'Page Not Found | Najd Rent a Car',
  description: 'This page could not be found.',
  jsonLd: [],
  render: () => <NotFoundPage />,
};

export function matchRoute(pathname: string): Route {
  const normalised = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return ROUTES.find((r) => r.path === normalised) ?? NOT_FOUND;
}
