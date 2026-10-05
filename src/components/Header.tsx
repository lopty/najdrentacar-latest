import React from 'react';
import { CurrencyCode } from '../types/rental';
import { CURRENCY_RATES } from '../utils/currency';
import { NajdLogo } from './NajdLogo';
import { Globe, Phone, CalendarCheck2 } from 'lucide-react';

interface HeaderProps {
  currency: CurrencyCode;
  onCurrencyChange: (currency: CurrencyCode) => void;
  onOpenMyBookings: () => void;
  savedBookingsCount: number;
  onBookNowClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currency,
  onCurrencyChange,
  onOpenMyBookings,
  savedBookingsCount,
  onBookNowClick,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 text-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Logo - Scaled responsibly for mobile viewports */}
        <a href="/" className="flex items-center shrink-0 py-1" aria-label="Najd Rent A Car LLC">
          <NajdLogo variant="light" height={36} className="sm:hidden" />
          <NajdLogo variant="light" height={42} className="hidden sm:block" />
        </a>

        {/* Clean Center Navigation Links (Desktop only) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
          <a href="#fleet-section" className="hover:text-red-700 transition-colors">
            Fleet
          </a>
          <a href="#airport-guide" className="hover:text-red-700 transition-colors">
            Airport Delivery
          </a>
          <a href="#dubai-rules" className="hover:text-red-700 transition-colors">
            Driving Rules
          </a>
          <a href="#about-us" className="hover:text-red-700 transition-colors">
            Contact
          </a>
        </nav>

        {/* Right Actions Bar - Responsive with zero clipping */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          
          {/* Phone Link (Desktop) */}
          <a
            href="tel:+971524560201"
            className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-red-700 transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center text-red-700">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span>+971 52 456 0201</span>
          </a>

          {/* Currency Switcher */}
          <div className="relative flex items-center">
            <div className="flex items-center px-2 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors">
              <Globe className="w-3.5 h-3.5 mr-1 text-slate-400 shrink-0" />
              <select
                aria-label="Select Currency"
                value={currency}
                onChange={(e) => onCurrencyChange(e.target.value as CurrencyCode)}
                className="bg-transparent font-bold cursor-pointer outline-none border-none p-0 focus:ring-0 text-xs text-slate-900"
              >
                {(Object.keys(CURRENCY_RATES) as CurrencyCode[]).map((code) => (
                  <option key={code} value={code} className="bg-white text-slate-900">
                    {code}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* My Bookings (Icon button on mobile, with text on desktop) */}
          <button
            type="button"
            onClick={onOpenMyBookings}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-slate-700 border border-slate-200 bg-white rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
            title="My Bookings"
          >
            <CalendarCheck2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span className="hidden md:inline">Bookings</span>
            {savedBookingsCount > 0 && (
              <span className="font-bold text-red-700 tabular-nums">
                ({savedBookingsCount})
              </span>
            )}
          </button>

          {/* Primary Action: Book Now - Red button */}
          <button
            type="button"
            onClick={onBookNowClick || (() => {
              const el = document.getElementById('fleet-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            })}
            className="px-3.5 sm:px-5 py-2 text-xs font-bold text-white bg-[#C5221F] hover:bg-[#A81B18] active:scale-95 rounded-lg transition-all shadow-sm shadow-red-700/20 cursor-pointer uppercase tracking-wider shrink-0 whitespace-nowrap"
          >
            Book Now
          </button>

        </div>

      </div>
    </header>
  );
};
