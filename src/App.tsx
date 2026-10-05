import React, { useState, useEffect, useMemo } from 'react';
import { AnimatePresence } from 'motion/react';
import { 
  Car, 
  SearchCriteria, 
  CarCategory, 
  CurrencyCode, 
  Booking 
} from './types/rental';
import { CARS_DATA, HERO_IMAGE } from './data/cars';
import { calculateRentalDays } from './utils/currency';
import { Header } from './components/Header';
import { SearchWidget } from './components/SearchWidget';
import { CategoryFilterBar } from './components/CategoryFilterBar';
import { CarCard } from './components/CarCard';
import { CarDetailPage } from './pages/CarDetailPage';
import { BookingModal } from './components/BookingModal';
import { BookingConfirmationModal } from './components/BookingConfirmationModal';
import { MyBookingsModal } from './components/MyBookingsModal';
import { DubaiTravelGuide } from './components/DubaiTravelGuide';
import { Footer } from './components/Footer';
import { Plane, ShieldCheck, CheckCircle2 } from 'lucide-react';

const LOCAL_STORAGE_KEY = 'najd_dubai_bookings_v1';

export default function App() {
  const defaultDates = useMemo(() => {
    const d1 = new Date();
    d1.setDate(d1.getDate() + 1);
    const d2 = new Date();
    d2.setDate(d2.getDate() + 4);
    return {
      pickup: d1.toISOString().split('T')[0],
      dropoff: d2.toISOString().split('T')[0],
    };
  }, []);

  const [criteria, setCriteria] = useState<SearchCriteria>({
    pickupLocation: 'Dubai Intl Airport - Terminal 3 (DXB T3)',
    dropoffLocation: 'Dubai Intl Airport - Terminal 3 (DXB T3)',
    sameLocation: true,
    pickupDate: defaultDates.pickup,
    pickupTime: '10:00',
    dropoffDate: defaultDates.dropoff,
    dropoffTime: '10:00',
    driverAge: '25-65',
  });

  const [selectedCategory, setSelectedCategory] = useState<CarCategory>('all');
  const [sortBy, setSortBy] = useState<string>('recommended');
  const [currency, setCurrency] = useState<CurrencyCode>('AED');
  const [activeCarPage, setActiveCarPage] = useState<Car | null>(null);
  const [selectedCarForBooking, setSelectedCarForBooking] = useState<Car | null>(null);
  const [activeConfirmationBooking, setActiveConfirmationBooking] = useState<Booking | null>(null);
  const [isMyBookingsOpen, setIsMyBookingsOpen] = useState(false);
  const [savedBookings, setSavedBookings] = useState<Booking[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        setSavedBookings(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  // Hash Routing for Individual SEO Car Pages: #/cars/:slug
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/cars/')) {
        const slug = hash.replace('#/cars/', '').trim();
        const matched = CARS_DATA.find((c) => c.slug === slug);
        if (matched) {
          setActiveCarPage(matched);
          return;
        }
      }
      setActiveCarPage(null);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToCarPage = (car: Car) => {
    window.location.hash = `#/cars/${car.slug}`;
    setActiveCarPage(car);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    window.location.hash = '';
    setActiveCarPage(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const saveBookingsToStorage = (bookings: Booking[]) => {
    setSavedBookings(bookings);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(bookings));
    } catch {
      // ignore
    }
  };

  const handleBookingConfirmed = (newBooking: Booking) => {
    const updated = [newBooking, ...savedBookings];
    saveBookingsToStorage(updated);
    setSelectedCarForBooking(null);
    setActiveConfirmationBooking(newBooking);
  };

  const handleCancelBooking = (bookingId: string) => {
    const updated = savedBookings.filter((b) => b.id !== bookingId);
    saveBookingsToStorage(updated);
  };

  const rentalDays = useMemo(() => {
    return calculateRentalDays(criteria.pickupDate, criteria.dropoffDate);
  }, [criteria.pickupDate, criteria.dropoffDate]);

  // Dynamic category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<CarCategory, number> = {
      all: CARS_DATA.length,
      economy: 0,
      suv: 0,
      luxury: 0,
      chauffeur: 0,
    };
    CARS_DATA.forEach((car) => {
      counts[car.category] = (counts[car.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter & sort logic
  const filteredCars = useMemo(() => {
    return CARS_DATA.filter((car) => {
      if (selectedCategory !== 'all' && car.category !== selectedCategory) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') {
        return a.pricePerDayAED - b.pricePerDayAED;
      }
      if (sortBy === 'price-high') {
        return b.pricePerDayAED - a.pricePerDayAED;
      }
      if (sortBy === 'power') {
        return b.horsepower - a.horsepower;
      }
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, sortBy]);

  const scrollToFleet = () => {
    const el = document.getElementById('fleet-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-slate-900 selection:bg-[#C5221F] selection:text-white w-full overflow-x-hidden font-sans">
      
      {/* Top Bar Navigation */}
      <Header
        currency={currency}
        onCurrencyChange={setCurrency}
        onOpenMyBookings={() => setIsMyBookingsOpen(true)}
        savedBookingsCount={savedBookings.length}
        onBookNowClick={scrollToFleet}
      />

      {/* Conditionally Render Standalone SEO Car Detail Page OR Fleet Catalog Home */}
      {activeCarPage ? (
        <main className="flex-1 w-full">
          <CarDetailPage
            car={activeCarPage}
            currency={currency}
            initialCriteria={criteria}
            onBack={navigateToHome}
            onBookNow={(c, crit) => {
              setCriteria(crit);
              setSelectedCarForBooking(c);
            }}
            onNavigateToCar={navigateToCarPage}
          />
        </main>
      ) : (
        <>
          {/* Hero Section: Vivid Blended Image & Clean Headline */}
          <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 border-b border-slate-200/80 w-full bg-slate-100">
            
            {/* Background Image: Vivid, Rich & Smoothly Blended */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <img
                src={HERO_IMAGE}
                alt="Dubai Airport Luxury Car Rental Fleet"
                className="w-full h-full object-cover object-right sm:object-center filter brightness-100 contrast-105 opacity-85"
              />
              {/* Refined gradient scrim: Left side keeps text 100% legible, right side lets the stunning cars and airport architecture shine through */}
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-white via-white/75 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Clean Sleek Headline with Non-Thick Font */}
              <div className="max-w-2xl mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
                  Car Rental in Dubai
                </h1>

                <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal leading-relaxed">
                  Terminal curbside handover at DXB and DWC with verified rates and instant confirmation.
                </p>
              </div>

              {/* Clean Europcar Style Search Console */}
              <div className="max-w-5xl">
                <SearchWidget
                  criteria={criteria}
                  onSearchChange={setCriteria}
                  onExecuteSearch={scrollToFleet}
                />
              </div>

            </div>
          </section>

          {/* 3 Value Pillars - Directly Inspired by Europcar */}
          <div className="bg-white border-b border-slate-200 py-6 sm:py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#C5221F] shrink-0">
                    <Plane className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Curbside Airport Delivery
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Terminal 1, 2, 3 & DWC handover with live flight tracking.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Zero Deposit Options
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Full CDW insurance protection and peace of mind on all rentals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Flexible Free Cancellation
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Plans change. Cancel up to 24–48 hours before pick-up at no charge.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Main Fleet Section */}
          <main id="fleet-section" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 scroll-mt-20">
            
            {/* Category Filter Bar */}
            <CategoryFilterBar
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              counts={categoryCounts}
              sortBy={sortBy}
              onSortChange={setSortBy}
              totalAvailable={filteredCars.length}
            />

            {/* 3-Column Card Grid (1 col on mobile, 2 col on tablet, 3 col on desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredCars.map((car) => (
                  <CarCard
                    key={car.id}
                    car={car}
                    rentalDays={rentalDays}
                    currency={currency}
                    onSelectCar={(c) => setSelectedCarForBooking(c)}
                    onViewDetails={(c) => navigateToCarPage(c)}
                  />
                ))}
              </AnimatePresence>
            </div>

            {/* Informational Airport Handover & Dubai Rules Guide */}
            <div className="mt-20 pt-10 border-t border-slate-200">
              <DubaiTravelGuide />
            </div>

          </main>
        </>
      )}

      {/* Footer */}
      <Footer />

      {/* 3-Step Booking Modal */}
      {selectedCarForBooking && (
        <BookingModal
          car={selectedCarForBooking}
          criteria={criteria}
          rentalDays={rentalDays}
          currency={currency}
          onClose={() => setSelectedCarForBooking(null)}
          onBookingConfirmed={handleBookingConfirmed}
        />
      )}

      {/* Booking Confirmation / Voucher Modal */}
      {activeConfirmationBooking && (
        <BookingConfirmationModal
          booking={activeConfirmationBooking}
          onClose={() => setActiveConfirmationBooking(null)}
        />
      )}

      {/* My Bookings Lookup Modal */}
      {isMyBookingsOpen && (
        <MyBookingsModal
          bookings={savedBookings}
          onClose={() => setIsMyBookingsOpen(false)}
          onCancelBooking={handleCancelBooking}
          onViewBookingDetails={(b) => {
            setIsMyBookingsOpen(false);
            setActiveConfirmationBooking(b);
          }}
        />
      )}

    </div>
  );
}
