export interface RentalLocation {
  id: string;
  name: string;
  category: 'airport' | 'city' | 'custom';
  code?: string;
  address: string;
  badge?: string;
}

export const DUBAI_LOCATIONS: RentalLocation[] = [
  {
    id: 'dxb-all',
    name: 'Dubai Intl Airport (DXB) - All Terminals',
    category: 'airport',
    code: 'DXB',
    address: 'Dubai International Airport Meet & Greet',
    badge: 'Most Popular'
  },
  {
    id: 'dxb-t1',
    name: 'Dubai Intl Airport - Terminal 1 (DXB T1)',
    category: 'airport',
    code: 'DXB T1',
    address: 'Arrivals Terminal 1, International Airlines'
  },
  {
    id: 'dxb-t3',
    name: 'Dubai Intl Airport - Terminal 3 (DXB T3)',
    category: 'airport',
    code: 'DXB T3',
    address: 'Arrivals Terminal 3, Emirates & Qantas Hub'
  },
  {
    id: 'dxb-t2',
    name: 'Dubai Intl Airport - Terminal 2 (DXB T2)',
    category: 'airport',
    code: 'DXB T2',
    address: 'Arrivals Terminal 2, Flydubai & Regional'
  },
  {
    id: 'dwc',
    name: 'Al Maktoum Intl Airport (DWC)',
    category: 'airport',
    code: 'DWC',
    address: 'Dubai World Central Airport Arrivals'
  },
  {
    id: 'dubai-marina',
    name: 'Dubai Marina & JBR',
    category: 'city',
    address: 'Marina Walk & The Beach JBR delivery',
    badge: 'Free Delivery'
  },
  {
    id: 'downtown-dubai',
    name: 'Downtown Dubai & Dubai Mall',
    category: 'city',
    address: 'Burj Khalifa district, Sheikh Mohammed bin Rashid Blvd',
    badge: 'Free Delivery'
  },
  {
    id: 'palm-jumeirah',
    name: 'Palm Jumeirah & Atlantis',
    category: 'city',
    address: 'Crescent & Trunk Hotel Valet Drop-off'
  },
  {
    id: 'business-bay',
    name: 'Business Bay & DIFC',
    category: 'city',
    address: 'Financial Centre & Canal Promenade'
  },
  {
    id: 'deira-hq',
    name: 'Najd Rent a Car - Deira City HQ',
    category: 'city',
    address: 'Al Garhoud / Airport Road, Dubai',
    badge: 'Main Branch'
  },
  {
    id: 'custom-hotel',
    name: 'Deliver to my Hotel / Villa in Dubai',
    category: 'custom',
    address: 'Free doorstep valet delivery across all Dubai',
    badge: 'Doorstep Delivery'
  }
];
