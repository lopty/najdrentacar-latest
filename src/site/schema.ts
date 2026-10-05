import { BUSINESS, OPENING_HOURS, SITE_URL, absoluteUrl } from './business';
import { Car, carImage, carName, carPath } from '../data/cars';

// JSON-LD builders. Only mark up facts that are visible on the page.

export const ORG_ID = `${SITE_URL}/#organization`;

export interface Crumb {
  name: string;
  path: string;
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRental',
    '@id': ORG_ID,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: SITE_URL + '/',
    logo: absoluteUrl('/images/najd-rent-a-car-logo.png'),
    image: absoluteUrl('/images/og-najd-rent-a-car.jpg'),
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    foundingDate: String(BUSINESS.foundingYear),
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${BUSINESS.addressLine}, ${BUSINESS.streetAddress}`,
      postOfficeBoxNumber: BUSINESS.poBox,
      addressLocality: BUSINESS.city,
      addressCountry: BUSINESS.countryCode,
    },
    areaServed: { '@type': 'City', name: 'Dubai' },
    geo: { '@type': 'GeoCoordinates', latitude: BUSINESS.latitude, longitude: BUSINESS.longitude },
    hasMap: BUSINESS.googleProfileUrl,
    sameAs: [BUSINESS.googleProfileUrl],
    openingHoursSpecification: OPENING_HOURS.filter((h) => h.opens).map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'Dubai commercial licence number',
      name: `Commercial licence issued by the ${BUSINESS.licenceAuthority}`,
      value: BUSINESS.licenceNumber,
    },
    founder: { '@type': 'Person', name: BUSINESS.founder },
    parentOrganization: { '@type': 'Organization', name: BUSINESS.group },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'reservations',
        telephone: BUSINESS.phoneE164,
        areaServed: 'AE',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: BUSINESS.whatsappE164,
        areaServed: 'AE',
      },
    ],
  };
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function carListSchema(name: string, cars: Car[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: cars.length,
    itemListElement: cars.map((car, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: carName(car),
      url: absoluteUrl(carPath(car)),
    })),
  };
}

export function carSchema(car: Car) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['Product', 'Car'],
    name: `${carName(car)} rental in Dubai`,
    description: car.summary,
    image: absoluteUrl(carImage(car)),
    url: absoluteUrl(carPath(car)),
    brand: { '@type': 'Brand', name: car.brand },
    model: car.model,
    bodyType: car.bodyType,
    vehicleTransmission: car.transmission,
  };
  if (car.seats && !car.seatsText) schema.vehicleSeatingCapacity = car.seats;
  if (car.rates) {
    const unit = (price: number, unitCode: string, unitText: string) => ({
      '@type': 'UnitPriceSpecification',
      price,
      priceCurrency: 'AED',
      unitCode,
      unitText,
    });
    schema.offers = {
      '@type': 'Offer',
      url: absoluteUrl(carPath(car)),
      price: car.rates.day,
      priceCurrency: 'AED',
      businessFunction: 'http://purl.org/goodrelations/v1#LeaseOut',
      seller: { '@id': ORG_ID },
      priceSpecification: [
        unit(car.rates.day, 'DAY', 'per day'),
        unit(car.rates.week, 'WEE', 'per week'),
        unit(car.rates.month, 'MON', 'per month'),
      ],
    };
  }
  return schema;
}

export function articleSchema(opts: { headline: string; description: string; path: string; updated: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    mainEntityOfPage: absoluteUrl(opts.path),
    dateModified: opts.updated,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    image: absoluteUrl('/images/og-najd-rent-a-car.jpg'),
  };
}

export function webPageSchema(type: 'AboutPage' | 'ContactPage' | 'WebPage' | 'CollectionPage', name: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    url: absoluteUrl(path),
    about: { '@id': ORG_ID },
  };
}
