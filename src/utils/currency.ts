import { CurrencyCode } from '../types/rental';

export const CURRENCY_RATES: Record<CurrencyCode, { symbol: string; rateFromAED: number; name: string }> = {
  AED: { symbol: 'AED', rateFromAED: 1, name: 'UAE Dirham' },
  USD: { symbol: '$', rateFromAED: 0.272, name: 'US Dollar' },
  EUR: { symbol: '€', rateFromAED: 0.252, name: 'Euro' },
  GBP: { symbol: '£', rateFromAED: 0.215, name: 'British Pound' },
  SAR: { symbol: 'SAR', rateFromAED: 1.02, name: 'Saudi Riyal' },
};

export function convertFromAED(amountAED: number, currency: CurrencyCode): number {
  const rate = CURRENCY_RATES[currency]?.rateFromAED || 1;
  return Math.round(amountAED * rate);
}

export function formatPrice(amountAED: number, currency: CurrencyCode = 'AED'): string {
  const meta = CURRENCY_RATES[currency] || CURRENCY_RATES.AED;
  const converted = convertFromAED(amountAED, currency);
  
  if (currency === 'USD' || currency === 'GBP' || currency === 'EUR') {
    return `${meta.symbol}${converted.toLocaleString()}`;
  }
  return `${converted.toLocaleString()} ${meta.symbol}`;
}

export function calculateRentalDays(pickupDate: string, dropoffDate: string): number {
  if (!pickupDate || !dropoffDate) return 3;
  const start = new Date(pickupDate).getTime();
  const end = new Date(dropoffDate).getTime();
  const diffDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  return Math.max(1, diffDays);
}
