export type CarCategory = 
  | 'all'
  | 'economy'
  | 'suv'
  | 'luxury'
  | 'chauffeur';

export type TransmissionType = 'automatic' | 'manual';
export type FuelPolicy = 'same-to-same' | 'full-to-full';
export type CurrencyCode = 'AED' | 'USD' | 'EUR' | 'GBP' | 'SAR';

export interface Car {
  id: string;
  slug: string; // for SEO URL: /cars/range-rover-vogue
  brand: string;
  name: string;
  category: CarCategory;
  categoryLabel: string;
  modelYear: number;
  image: string;
  pricePerDayAED: number;
  originalPricePerDayAED?: number;
  rateDisplayType: 'day' | 'week' | 'month';
  displayedRateAED: number;
  displayedRatePeriod: string; // 'PER DAY', 'PER WEEK', 'PER MONTH'
  weeklyPriceAED?: number;
  monthlyPriceAED?: number;
  seats: number;
  doors: number;
  bags: number;
  horsepower: number;
  acceleration0to100: string; // e.g. '5.9s'
  transmission: TransmissionType;
  airConditioning: boolean;
  fuelPolicy: FuelPolicy;
  mileageLimitKmPerDay: number;
  zeroDepositAvailable: boolean;
  depositAED: number;
  freeCancellationHours: number;
  rating: number;
  reviewCount: number;
  supplierTag: string;
  popular: boolean;
  featured?: boolean;
  features: string[];
  seoTitle: string;
  seoDescription: string;
  metaKeywords: string[];
}

export interface SearchCriteria {
  pickupLocation: string;
  dropoffLocation: string;
  sameLocation: boolean;
  pickupDate: string;
  pickupTime: string;
  dropoffDate: string;
  dropoffTime: string;
  driverAge: '21-24' | '25-65' | '65+';
}

export interface FilterState {
  category: CarCategory;
  maxPriceAED: number;
  transmission: 'all' | 'automatic' | 'manual';
  minSeats: number;
  minBags: number;
  zeroDepositOnly: boolean;
  unlimitedMileageOnly: boolean;
  freeCancellationOnly: boolean;
  sortBy: 'recommended' | 'price-low' | 'price-high' | 'rating';
}

export interface AddonOption {
  id: string;
  title: string;
  description: string;
  pricePerDayAED: number;
  selected: boolean;
}

export interface DriverDetails {
  fullName: string;
  email: string;
  phoneCountryCode: string;
  phoneNumber: string;
  licenseOrigin: 'uae' | 'international' | 'gcc';
  flightNumber: string;
  pickupTerminal: string;
  specialRequests: string;
}

export interface Booking {
  id: string;
  bookingReference: string;
  createdAt: string;
  car: Car;
  searchCriteria: SearchCriteria;
  driverDetails: DriverDetails;
  selectedAddons: AddonOption[];
  totalDays: number;
  basePriceAED: number;
  addonsPriceAED: number;
  totalPriceAED: number;
  currency: CurrencyCode;
  paymentMethod: 'arrival-cash' | 'arrival-card' | 'online-card' | 'apple-pay';
  paymentStatus: 'confirmed' | 'pending';
}
