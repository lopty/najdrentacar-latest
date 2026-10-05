import React from 'react';
import { NajdLogo } from './NajdLogo';
import { BUSINESS, OPENING_HOURS, mailLink, telLink, whatsappLink } from '../site/business';
import { CATEGORIES, categoryPath } from '../content/categories';
import { GUIDES, guidePath } from '../content/guides';

const COMPANY_LINKS = [
  { href: '/about/', label: 'About Najd Rent a Car' },
  { href: '/team/', label: 'Our Team' },
  { href: '/licence/', label: 'Licence and Verification' },
  { href: '/service-standards/', label: 'Service Standards' },
  { href: '/reviews/', label: 'Customer Reviews' },
  { href: '/contact/', label: 'Contact' },
  { href: '/fleet/', label: 'Full Fleet' },
];

const linkClass = 'hover:text-white transition-colors';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs mt-20 border-t border-slate-900 pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-3">
            <NajdLogo variant="dark" height={38} />
            <p className="leading-relaxed pt-2">
              {BUSINESS.legalName}. Car rental in Dubai since {BUSINESS.foundingYear}. Part of {BUSINESS.group}.
            </p>
            <p className="text-slate-300">
              Commercial licence{' '}
              <a href="/licence/" className="font-semibold text-white underline underline-offset-2">
                {BUSINESS.licenceNumber}
              </a>
              , issued by the {BUSINESS.licenceAuthority}.
            </p>
          </div>

          <div className="space-y-2.5">
            <h2 className="text-xs font-bold text-white uppercase tracking-wider">Rent by type</h2>
            <ul className="space-y-1.5">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <a href={categoryPath(cat.slug)} className={linkClass}>
                    {cat.h1}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2.5">
            <h2 className="text-xs font-bold text-white uppercase tracking-wider">Company</h2>
            <ul className="space-y-1.5">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <h2 className="text-xs font-bold text-white uppercase tracking-wider pt-4">Guides</h2>
            <ul className="space-y-1.5">
              <li>
                <a href="/guides/" className={linkClass}>
                  All rental guides
                </a>
              </li>
              {GUIDES.slice(0, 6).map((g) => (
                <li key={g.slug}>
                  <a href={guidePath(g.slug)} className={linkClass}>
                    {g.navLabel}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2.5">
            <h2 className="text-xs font-bold text-white uppercase tracking-wider">Contact</h2>
            <address className="not-italic space-y-1.5">
              <p>
                {BUSINESS.addressLine}, {BUSINESS.streetAddress}, {BUSINESS.city}, UAE
              </p>
              <p>P.O. Box {BUSINESS.poBox}</p>
              <p>
                Phone:{' '}
                <a href={telLink} className={linkClass}>
                  {BUSINESS.phoneDisplay}
                </a>
              </p>
              <p>
                WhatsApp:{' '}
                <a href={whatsappLink('Hello Najd Rent a Car, I have a question.')} className={linkClass}>
                  {BUSINESS.whatsappDisplay}
                </a>
              </p>
              <p>
                Landline:{' '}
                <a href={`tel:${BUSINESS.landlineE164}`} className={linkClass}>
                  {BUSINESS.landlineDisplay}
                </a>
              </p>
              <p>
                Email:{' '}
                <a href={mailLink} className={linkClass}>
                  {BUSINESS.email}
                </a>
              </p>
            </address>
            <h2 className="text-xs font-bold text-white uppercase tracking-wider pt-4">Opening hours</h2>
            <ul className="space-y-1">
              {OPENING_HOURS.map((h) => (
                <li key={h.label}>
                  {h.label}: {h.text}
                </li>
              ))}
            </ul>
            <p>
              <a href={BUSINESS.googleProfileUrl} rel="noopener" className={linkClass}>
                Find us on Google Maps
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {BUSINESS.legalName}. Licence {BUSINESS.licenceNumber}.
          </div>
          <div className="flex items-center gap-4">
            <a href="/licence/" className="hover:text-slate-300">Licence</a>
            <a href="/service-standards/" className="hover:text-slate-300">Service standards</a>
            <a href="/contact/" className="hover:text-slate-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
