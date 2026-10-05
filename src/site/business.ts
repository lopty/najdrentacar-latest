// Single source of truth for business facts. Every page and all structured
// data read from here. Only put verified facts in this file.

export const SITE_URL = 'https://najdrentacar.com';

export const BUSINESS = {
  name: 'Najd Rent a Car',
  legalName: 'Najd Rent A Car Co. L.L.C',
  licenceNumber: '532541',
  licenceAuthority: 'Dubai Department of Economy and Tourism',
  licenceAuthorityShort: 'DET',
  licenceActivity: 'Car Rental',
  licenceFirstIssued: '11 March 2002',
  licenceValidUntil: '10 March 2027',
  dubaiChamberNumber: '67728',
  foundingYear: 2002,
  group: 'Al Basel Group',
  groupFoundingYear: 2007,
  founder: 'Basel Al Kasem',
  fleetSize: '200+',
  // Contact. Change the numbers here and they update across the site.
  // Calls and WhatsApp use the same mobile number, as published on the Google Business Profile.
  phoneDisplay: '058 595 2763',
  phoneE164: '+971585952763',
  // Office landline from the trade licence.
  landlineDisplay: '04 341 6603',
  landlineE164: '+97143416603',
  whatsappDisplay: '058 595 2763',
  whatsappE164: '+971585952763',
  email: 'info@albaselgroup.com',
  addressLine: 'Warehouse 6, Baqer Mohebi Warehouse, 22nd Street',
  streetAddress: 'Al Quoz Industrial Area 3',
  latitude: 25.1207383,
  longitude: 55.2201726,
  plusCode: '46CC+73 Dubai',
  // Google Business Profile. Rating figures are a snapshot; update them when you re-check.
  googleProfileUrl: 'https://g.page/r/Cbq7X4kFNc06EAI',
  googleReviewUrl: 'https://g.page/r/Cbq7X4kFNc06EAI/review',
  googleRating: '4.8',
  googleReviewCount: 23,
  googleRatingChecked: 'October 2026',
  // Number of Google reviews at each star level, 5 down to 1.
  googleStarCounts: [21, 1, 0, 0, 1],
  city: 'Dubai',
  country: 'United Arab Emirates',
  countryCode: 'AE',
  poBox: '56087',
} as const;

// Opening hours as published on the Google Business Profile.
export const OPENING_HOURS: { label: string; days: string[]; opens?: string; closes?: string; text: string }[] = [
  { label: 'Monday to Thursday', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '09:00', closes: '18:00', text: '9 AM to 6 PM' },
  { label: 'Friday', days: ['Friday'], opens: '09:00', closes: '12:00', text: '9 AM to 12 PM' },
  { label: 'Saturday', days: ['Saturday'], text: 'Closed' },
  { label: 'Sunday', days: ['Sunday'], opens: '09:00', closes: '14:00', text: '9 AM to 2 PM' },
];

export const HOURS_SENTENCE =
  'Monday to Thursday 9 AM to 6 PM, Friday 9 AM to 12 PM, Sunday 9 AM to 2 PM, closed on Saturday';

export const RATE_NOTE =
  'Rates are per vehicle in AED and can change. Confirm the current rate with us before you book.';

export function whatsappLink(message: string): string {
  return `https://wa.me/${BUSINESS.whatsappE164.replace('+', '')}?text=${encodeURIComponent(message)}`;
}

export const telLink = `tel:${BUSINESS.phoneE164}`;
export const mailLink = `mailto:${BUSINESS.email}`;

export function aed(amount: number): string {
  return `AED ${amount.toLocaleString('en-US')}`;
}

export function absoluteUrl(path: string): string {
  return SITE_URL + path;
}
