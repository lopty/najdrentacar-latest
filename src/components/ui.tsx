import React from 'react';
import { BadgeCheck, ChevronRight, MessageCircle, Phone, Users, Briefcase, Settings2 } from 'lucide-react';
import { BUSINESS, RATE_NOTE, aed, telLink, whatsappLink } from '../site/business';
import { Car, carImage, carName, carPath } from '../data/cars';
import type { Crumb } from '../site/schema';

export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

export const Breadcrumbs: React.FC<{ crumbs: Crumb[] }> = ({ crumbs }) => (
  <nav aria-label="Breadcrumb" className="mb-5">
    <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 font-medium">
      {crumbs.map((c, i) => {
        const last = i === crumbs.length - 1;
        return (
          <li key={c.path} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-300" aria-hidden="true" />}
            {last ? (
              <span className="text-slate-900 font-semibold" aria-current="page">
                {c.name}
              </span>
            ) : (
              <a href={c.path} className="hover:text-red-700 transition-colors">
                {c.name}
              </a>
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);

export const PageHeader: React.FC<{
  crumbs: Crumb[];
  eyebrow?: string;
  h1: string;
  lead?: string;
  children?: React.ReactNode;
}> = ({ crumbs, eyebrow, h1, lead, children }) => (
  <section className="bg-white border-b border-slate-200">
    <Container className="py-8 sm:py-12">
      <Breadcrumbs crumbs={crumbs} />
      {eyebrow && (
        <span className="text-xs font-semibold text-[#C5221F] uppercase tracking-wider block mb-2">{eyebrow}</span>
      )}
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight max-w-3xl">{h1}</h1>
      {lead && <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-3xl">{lead}</p>}
      {children}
    </Container>
  </section>
);

export const H2: React.FC<{ children: React.ReactNode; id?: string }> = ({ children, id }) => (
  <h2 id={id} className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
    {children}
  </h2>
);

export const Prose: React.FC<{ paragraphs: string[] }> = ({ paragraphs }) => (
  <div className="space-y-4 text-[15px] sm:text-base text-slate-700 leading-relaxed max-w-3xl">
    {paragraphs.map((p, i) => (
      <p key={i}>{p}</p>
    ))}
  </div>
);

export const CheckList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-2.5 text-[15px] text-slate-700 max-w-3xl">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2.5">
        <BadgeCheck className="w-4.5 h-4.5 text-emerald-600 mt-0.5 shrink-0" aria-hidden="true" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const WhatsAppButton: React.FC<{ message: string; label?: string; className?: string }> = ({
  message,
  label = 'Book on WhatsApp',
  className = '',
}) => (
  <a
    href={whatsappLink(message)}
    className={`inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#C5221F] hover:bg-[#A81B18] text-white font-bold text-sm rounded-xl transition-colors ${className}`}
  >
    <MessageCircle className="w-4 h-4" aria-hidden="true" />
    <span>{label}</span>
  </a>
);

export const CallButton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <a
    href={telLink}
    className={`inline-flex items-center justify-center gap-2 px-5 py-3 bg-white border border-slate-300 hover:border-slate-400 text-slate-900 font-bold text-sm rounded-xl transition-colors ${className}`}
  >
    <Phone className="w-4 h-4" aria-hidden="true" />
    <span>Call {BUSINESS.phoneDisplay}</span>
  </a>
);

export const RateLine: React.FC<{ car: Car }> = ({ car }) =>
  car.rates ? (
    <div className="text-right">
      <div className="text-lg font-bold text-slate-900 tabular-nums leading-tight">{aed(car.rates.day)}</div>
      <span className="text-[11px] text-slate-500 block mt-0.5">per day</span>
    </div>
  ) : (
    <div className="text-right">
      <div className="text-sm font-semibold text-slate-900 leading-tight">Rate on request</div>
    </div>
  );

export const CarCard: React.FC<{ car: Car }> = ({ car }) => (
  <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all p-4 sm:p-5 flex flex-col justify-between">
    <div>
      <a
        href={carPath(car)}
        className="w-full h-44 sm:h-48 bg-white rounded-xl overflow-hidden flex items-center justify-center p-3 border border-slate-100"
      >
        <img
          src={carImage(car)}
          alt={`${carName(car)} for rent in Dubai`}
          loading="lazy"
          width={480}
          height={320}
          className="max-h-full max-w-full object-contain"
        />
      </a>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <span className="text-xs font-semibold text-[#C5221F] tracking-wider uppercase block">{car.brand}</span>
          <h3 className="text-lg font-semibold text-slate-900 leading-snug">
            <a href={carPath(car)} className="hover:text-[#C5221F] transition-colors">
              {car.brand === 'Range Rover' ? carName(car) : car.model}
            </a>
          </h3>
          <span className="text-xs text-slate-500">{car.label}</span>
        </div>
        <RateLine car={car} />
      </div>
      <ul className="flex flex-wrap gap-x-4 gap-y-1 my-4 pt-3 border-t border-slate-100 text-xs text-slate-600">
        {car.seats && (
          <li className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
            {car.seatsText ?? car.seats} seats
          </li>
        )}
        {car.bags && (
          <li className="flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
            {car.bags} bags
          </li>
        )}
        <li className="flex items-center gap-1.5">
          <Settings2 className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
          {car.transmission}
        </li>
      </ul>
      {car.rates && (
        <p className="text-xs text-slate-500 mb-4">
          {aed(car.rates.week)} per week · {aed(car.rates.month)} per month
        </p>
      )}
    </div>
    <div className="grid grid-cols-2 gap-2.5">
      <a
        href={carPath(car)}
        className="py-2.5 px-3 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold text-center transition-colors"
      >
        View details
      </a>
      <a
        href={whatsappLink(`Hello Najd Rent a Car, I would like to rent the ${carName(car)}.`)}
        className="py-2.5 px-3 rounded-xl bg-[#C5221F] hover:bg-[#A81B18] text-white text-xs font-semibold text-center transition-colors"
      >
        Book now
      </a>
    </div>
  </article>
);

export const CarGrid: React.FC<{ cars: Car[] }> = ({ cars }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
    {cars.map((car) => (
      <CarCard key={car.slug} car={car} />
    ))}
  </div>
);

export const RateNote: React.FC = () => <p className="text-xs text-slate-500 mt-4">{RATE_NOTE}</p>;

export const FaqList: React.FC<{ faqs: { q: string; a: string }[] }> = ({ faqs }) => (
  <div className="divide-y divide-slate-200 border-y border-slate-200 max-w-3xl">
    {faqs.map((f) => (
      <div key={f.q} className="py-4">
        <h3 className="text-base font-semibold text-slate-900">{f.q}</h3>
        <p className="text-[15px] text-slate-700 mt-1.5 leading-relaxed">{f.a}</p>
      </div>
    ))}
  </div>
);

export interface LinkItem {
  href: string;
  label: string;
  note?: string;
}

export const LinkCards: React.FC<{ links: LinkItem[] }> = ({ links }) => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
    {links.map((l) => (
      <li key={l.href}>
        <a
          href={l.href}
          className="flex items-center justify-between gap-3 h-full p-4 bg-white border border-slate-200 rounded-xl hover:border-[#C5221F] hover:shadow-sm transition-all group"
        >
          <span>
            <span className="block text-sm font-semibold text-slate-900 group-hover:text-[#C5221F]">{l.label}</span>
            {l.note && <span className="block text-xs text-slate-500 mt-0.5">{l.note}</span>}
          </span>
          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
        </a>
      </li>
    ))}
  </ul>
);

/** Licence and company proof, linked from every commercial page. */
export const TrustPanel: React.FC = () => (
  <aside className="bg-slate-900 text-slate-200 rounded-2xl p-6 sm:p-8">
    <h2 className="text-lg sm:text-xl font-bold text-white">A licensed Dubai company you can verify</h2>
    <dl className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5 text-sm">
      <div>
        <dt className="text-xs text-slate-400 uppercase tracking-wider">Commercial licence</dt>
        <dd className="text-white font-semibold mt-1">No. {BUSINESS.licenceNumber}</dd>
      </div>
      <div>
        <dt className="text-xs text-slate-400 uppercase tracking-wider">Issued by</dt>
        <dd className="text-white font-semibold mt-1">Dubai Economy and Tourism</dd>
      </div>
      <div>
        <dt className="text-xs text-slate-400 uppercase tracking-wider">Trading since</dt>
        <dd className="text-white font-semibold mt-1">{BUSINESS.foundingYear}</dd>
      </div>
      <div>
        <dt className="text-xs text-slate-400 uppercase tracking-wider">Group</dt>
        <dd className="text-white font-semibold mt-1">{BUSINESS.group}</dd>
      </div>
    </dl>
    <p className="mt-5 text-sm">
      Rated {BUSINESS.googleRating} out of 5 from {BUSINESS.googleReviewCount} reviews on Google, checked {BUSINESS.googleRatingChecked}.{' '}
      <a href="/reviews/" className="text-white underline underline-offset-4 hover:text-red-300">
        See what customers say
      </a>
    </p>
    <ul className="flex flex-wrap gap-x-5 gap-y-2 mt-6 text-sm font-semibold">
      <li><a href="/licence/" className="text-white underline underline-offset-4 hover:text-red-300">Licence and verification</a></li>
      <li><a href="/about/" className="text-white underline underline-offset-4 hover:text-red-300">About the company</a></li>
      <li><a href="/team/" className="text-white underline underline-offset-4 hover:text-red-300">Meet the team</a></li>
      <li><a href="/service-standards/" className="text-white underline underline-offset-4 hover:text-red-300">Service standards</a></li>
      <li><a href="/contact/" className="text-white underline underline-offset-4 hover:text-red-300">Contact us</a></li>
    </ul>
  </aside>
);

export const CtaBand: React.FC<{ heading: string; message: string }> = ({ heading, message }) => (
  <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
    <div>
      <h2 className="text-lg sm:text-xl font-bold text-slate-900">{heading}</h2>
      <p className="text-sm text-slate-600 mt-1">
        Call or WhatsApp {BUSINESS.phoneDisplay}. Same number for both.
      </p>
    </div>
    <div className="flex flex-col sm:flex-row gap-3">
      <WhatsAppButton message={message} />
      <CallButton />
    </div>
  </div>
);

/** Sticky call and WhatsApp bar on small screens. */
export const MobileActionBar: React.FC = () => (
  <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-slate-200 p-2.5 grid grid-cols-2 gap-2.5">
    <a
      href={telLink}
      className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm font-bold"
    >
      <Phone className="w-4 h-4" aria-hidden="true" />
      Call
    </a>
    <a
      href={whatsappLink('Hello Najd Rent a Car, I would like to rent a car in Dubai.')}
      className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#C5221F] text-white text-sm font-bold"
    >
      <MessageCircle className="w-4 h-4" aria-hidden="true" />
      WhatsApp
    </a>
  </div>
);

export const Section: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <section className={`py-8 sm:py-10 ${className}`}>{children}</section>
);
