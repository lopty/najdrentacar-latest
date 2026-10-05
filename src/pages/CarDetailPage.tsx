import React, { useEffect, useState } from 'react';
import { Car, CurrencyCode, SearchCriteria } from '../types/rental';
import { CARS_DATA } from '../data/cars';
import { formatPrice, calculateRentalDays } from '../utils/currency';
import { 
  ArrowLeft, 
  Check, 
  MessageSquare, 
  MapPin, 
  Users, 
  Zap, 
  Gauge, 
  ChevronRight,
  Plane,
  ArrowRight
} from 'lucide-react';

interface CarDetailPageProps {
  car: Car;
  currency: CurrencyCode;
  initialCriteria: SearchCriteria;
  onBack: () => void;
  onBookNow: (car: Car, criteria: SearchCriteria) => void;
  onNavigateToCar: (car: Car) => void;
}

export const CarDetailPage: React.FC<CarDetailPageProps> = ({
  car,
  currency,
  initialCriteria,
  onBack,
  onBookNow,
  onNavigateToCar,
}) => {
  const [criteria, setCriteria] = useState<SearchCriteria>(initialCriteria);

  const rentalDays = calculateRentalDays(criteria.pickupDate, criteria.dropoffDate);
  const totalAmountAED = car.pricePerDayAED * rentalDays;

  // SEO: Update page title, meta description, and JSON-LD schema
  useEffect(() => {
    const originalTitle = document.title;
    document.title = car.seoTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute('content', car.seoDescription);
    }

    const scriptId = 'car-schema-ld-json';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: `${car.brand} ${car.name} Rental Dubai`,
      image: window.location.origin + car.image,
      description: car.seoDescription,
      brand: {
        '@type': 'Brand',
        name: car.brand,
      },
      offers: {
        '@type': 'Offer',
        price: car.pricePerDayAED,
        priceCurrency: 'AED',
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'AutoRental',
          name: 'Najd Rent A Car LLC',
          telephone: '+971 52 456 0201',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Al Garhoud, Airport Road',
            addressLocality: 'Dubai',
            addressCountry: 'AE',
          },
        },
      },
    };
    scriptTag.textContent = JSON.stringify(schemaData);

    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) {
        metaDesc.setAttribute('content', originalDesc);
      }
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
    };
  }, [car]);

  const relatedCars = CARS_DATA.filter((c) => c.id !== car.id).slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hello Najd Rent A Car LLC! I would like to reserve the *${car.brand} ${car.name}* (${car.displayedRateAED} ${car.displayedRatePeriod}).\n` +
    `Dates: ${criteria.pickupDate} to ${criteria.dropoffDate}\n` +
    `Location: ${criteria.pickupLocation}`
  );
  const whatsappUrl = `https://wa.me/971524560201?text=${whatsappMessage}`;

  return (
    <div className="bg-[#F8F9FA] text-slate-900 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-between">
          <ol className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <li>
              <button
                onClick={onBack}
                className="hover:text-red-700 transition-colors cursor-pointer"
              >
                Home
              </button>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5 text-slate-300" /></li>
            <li>
              <button
                onClick={onBack}
                className="hover:text-red-700 transition-colors cursor-pointer"
              >
                Fleet
              </button>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5 text-slate-300" /></li>
            <li className="text-red-700 font-bold">{car.brand}</li>
            <li><ChevronRight className="w-3.5 h-3.5 text-slate-300" /></li>
            <li className="text-slate-900 font-bold">{car.name}</li>
          </ol>

          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-red-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Fleet</span>
          </button>
        </nav>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 8 Cols */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Main Vehicle Showcase */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-[#C5221F] uppercase tracking-wider block">
                    {car.brand}
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                    {car.name} ({car.modelYear})
                  </h1>
                  <p className="text-xs text-slate-500 mt-1">
                    {car.categoryLabel} · {car.supplierTag}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider block">
                    Published Rate
                  </span>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums">
                    AED {car.displayedRateAED.toLocaleString()}
                  </div>
                  <span className="text-xs font-semibold text-[#C5221F] uppercase tracking-wider block">
                    {car.displayedRatePeriod}
                  </span>
                </div>
              </div>

              {/* Showcase Image */}
              <div className="w-full h-80 sm:h-96 bg-gradient-to-b from-slate-50 to-slate-100/70 rounded-xl border border-slate-100 flex items-center justify-center p-6 my-6 relative">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.name} car rental Dubai`}
                  className="max-h-full max-w-full object-contain mix-blend-multiply drop-shadow-xl"
                />
              </div>

              {/* 3 Metrics Specs matching screenshot */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100 text-center">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <Users className="w-4 h-4 text-slate-500 mx-auto mb-1" />
                  <span className="text-sm font-bold text-slate-900 block">{car.seats} Seats</span>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Capacity</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <Zap className="w-4 h-4 text-slate-500 mx-auto mb-1" />
                  <span className="text-sm font-bold text-slate-900 block">{car.horsepower} HP</span>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Power</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <Gauge className="w-4 h-4 text-slate-500 mx-auto mb-1" />
                  <span className="text-sm font-bold text-slate-900 block">{car.acceleration0to100}</span>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">0-100 km/h</span>
                </div>
              </div>
            </div>

            {/* Rental Rates Matrix */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm">
              <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-4">
                Available Rate Packages
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400 block">Daily</span>
                  <div className="text-xl font-bold text-slate-900 mt-1 tabular-nums">
                    {formatPrice(car.pricePerDayAED, currency)}
                  </div>
                  <span className="text-[11px] text-slate-500 mt-0.5 block">per day</span>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400 block">Weekly</span>
                  <div className="text-xl font-bold text-slate-900 mt-1 tabular-nums">
                    {formatPrice(car.weeklyPriceAED || car.pricePerDayAED * 7, currency)}
                  </div>
                  <span className="text-[11px] text-slate-500 mt-0.5 block">per week</span>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400 block">Monthly</span>
                  <div className="text-xl font-bold text-slate-900 mt-1 tabular-nums">
                    {formatPrice(car.monthlyPriceAED || car.pricePerDayAED * 26, currency)}
                  </div>
                  <span className="text-[11px] text-slate-500 mt-0.5 block">per month</span>
                </div>
              </div>
            </div>

            {/* Detailed Specs Table */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm">
              <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-4">
                Vehicle Specifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-xs">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Manufacturer</span>
                  <span className="font-semibold text-slate-900">{car.brand}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Model</span>
                  <span className="font-semibold text-slate-900">{car.name}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Model Year</span>
                  <span className="font-semibold text-slate-900">{car.modelYear}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Transmission</span>
                  <span className="font-semibold text-slate-900 capitalize">{car.transmission}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Capacity</span>
                  <span className="font-semibold text-slate-900">{car.seats} Passengers</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Luggage</span>
                  <span className="font-semibold text-slate-900">{car.bags} Suitcases</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Salik Toll Tag</span>
                  <span className="font-semibold text-emerald-700">Pre-Fitted Transponder</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Security Deposit</span>
                  <span className="font-semibold text-slate-900">
                    {car.zeroDepositAvailable ? 'Zero Deposit Eligible' : `AED ${car.depositAED}`}
                  </span>
                </div>
              </div>
            </div>

            {/* Airport Handover Notice */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <Plane className="w-4 h-4 text-[#C5221F]" />
                <span>Dubai Airport (DXB) Delivery Guaranteed</span>
              </div>
              <p className="leading-relaxed text-slate-600">
                Direct handover at Terminal 1, 2, 3 or DWC airport. Our operations team monitors your flight arrival and meets you at the arrivals curb.
              </p>
            </div>

          </div>

          {/* Right Column: Sticky Booking Box */}
          <div className="lg:col-span-4 sticky top-24 space-y-4">
            <div className="bg-white border border-slate-200/90 rounded-2xl shadow-xl p-6 space-y-5">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                  Reserve Vehicle
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums">
                    {formatPrice(car.pricePerDayAED, currency)}
                  </span>
                  <span className="text-xs text-slate-500 font-normal">/ day</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Includes VAT, standard CDW insurance & Salik toll tag.
                </p>
              </div>

              {/* Itinerary Selection */}
              <div className="space-y-3 pt-3 border-t border-slate-100 text-xs">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-wider">
                    Pick-up Location
                  </label>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-900">
                    <MapPin className="w-4 h-4 text-[#C5221F] shrink-0" />
                    <span className="truncate">{criteria.pickupLocation}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-wider">
                      Pick-up Date
                    </label>
                    <input
                      type="date"
                      value={criteria.pickupDate}
                      onChange={(e) => setCriteria({ ...criteria, pickupDate: e.target.value })}
                      className="w-full px-2.5 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-900 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-wider">
                      Drop-off Date
                    </label>
                    <input
                      type="date"
                      value={criteria.dropoffDate}
                      onChange={(e) => setCriteria({ ...criteria, dropoffDate: e.target.value })}
                      className="w-full px-2.5 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-900 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Price Calculation */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1.5">
                <div className="flex justify-between text-slate-600">
                  <span>Duration</span>
                  <span className="font-semibold text-slate-900 tabular-nums">
                    {rentalDays} {rentalDays === 1 ? 'day' : 'days'}
                  </span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Daily Rate</span>
                  <span className="font-semibold text-slate-900 tabular-nums">
                    {formatPrice(car.pricePerDayAED, currency)}
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-200 flex justify-between font-bold text-sm text-slate-900">
                  <span>Total Due</span>
                  <span className="text-base text-[#C5221F] tabular-nums font-display">
                    {formatPrice(totalAmountAED, currency)}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={() => onBookNow(car, criteria)}
                  className="w-full py-3 bg-[#C5221F] hover:bg-[#A81B18] text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-red-700/20 transition-all cursor-pointer uppercase tracking-wider"
                >
                  <span>Book Now ↗</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-slate-900 hover:bg-black text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 space-y-1 text-center font-medium">
                <p>✓ Free airport delivery at DXB</p>
                <p>✓ Zero hidden fees or credit card charges</p>
                <p>✓ Pay on Arrival available</p>
              </div>
            </div>
          </div>

        </div>

        {/* More Vehicles */}
        <div className="mt-16 pt-10 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 font-display mb-6">
            Explore More Vehicles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedCars.map((item) => (
              <div
                key={item.id}
                onClick={() => onNavigateToCar(item)}
                className="bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-4 transition-all cursor-pointer shadow-sm hover:shadow-md group"
              >
                <div className="h-44 bg-slate-50 rounded-xl p-3 flex items-center justify-center mb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform"
                  />
                </div>
                <span className="text-[10px] font-bold text-[#C5221F] uppercase tracking-wider block">
                  {item.brand}
                </span>
                <h3 className="font-bold text-base text-slate-900 group-hover:text-red-700 transition-colors">
                  {item.name}
                </h3>
                <div className="flex justify-between items-center mt-2 text-xs text-slate-500">
                  <span>{item.seats} Seats · {item.horsepower} HP</span>
                  <span className="font-bold text-slate-900 tabular-nums">
                    AED {item.displayedRateAED.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
