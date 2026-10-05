import React from 'react';
import { Menu, Phone } from 'lucide-react';
import { NajdLogo } from './NajdLogo';
import { BUSINESS, telLink, whatsappLink } from '../site/business';

const NAV = [
  { href: '/fleet/', label: 'Fleet' },
  { href: '/economy-car-rental-dubai/', label: 'Economy' },
  { href: '/suv-rental-dubai/', label: 'SUV' },
  { href: '/luxury-car-rental-dubai/', label: 'Luxury' },
  { href: '/monthly-car-rental-dubai/', label: 'Monthly' },
  { href: '/guides/', label: 'Guides' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        <a href="/" className="flex items-center shrink-0 py-1" aria-label="Najd Rent a Car home">
          <NajdLogo variant="light" height={38} />
        </a>

        <nav aria-label="Main" className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-red-700 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={telLink}
            className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-red-700 transition-colors"
          >
            <span className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center text-red-700">
              <Phone className="w-3.5 h-3.5" />
            </span>
            <span>{BUSINESS.phoneDisplay}</span>
          </a>
          <a
            href={whatsappLink('Hello Najd Rent a Car, I would like to rent a car in Dubai.')}
            className="px-3.5 sm:px-5 py-2 text-xs font-bold text-white bg-[#C5221F] hover:bg-[#A81B18] rounded-lg transition-colors uppercase tracking-wider whitespace-nowrap"
          >
            Book on WhatsApp
          </a>

          {/* Mobile menu: plain <details>, works without JavaScript */}
          <details className="lg:hidden relative group">
            <summary
              className="list-none w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-700 cursor-pointer [&::-webkit-details-marker]:hidden"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-xl shadow-xl p-2 flex flex-col text-sm font-semibold text-slate-700"
            >
              {NAV.map((item) => (
                <a key={item.href} href={item.href} className="px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-red-700">
                  {item.label}
                </a>
              ))}
              <a href={telLink} className="px-3 py-2.5 rounded-lg hover:bg-slate-50 text-red-700">
                Call {BUSINESS.phoneDisplay}
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
};
