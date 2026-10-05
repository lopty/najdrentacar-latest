import React from 'react';
import { motion } from 'motion/react';
import { Car, CurrencyCode } from '../types/rental';
import { formatPrice } from '../utils/currency';
import { 
  X, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Briefcase, 
  Gauge, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

interface CarDetailModalProps {
  car: Car;
  rentalDays: number;
  currency: CurrencyCode;
  onClose: () => void;
  onSelectCar: (car: Car) => void;
}

export const CarDetailModal: React.FC<CarDetailModalProps> = ({
  car,
  rentalDays,
  currency,
  onClose,
  onSelectCar,
}) => {
  const totalAmountAED = car.pricePerDayAED * rentalDays;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ type: 'spring', damping: 28, stiffness: 350 }}
        className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Vehicle Specification & Inspection Sheet
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-display mt-0.5">
              {car.name} ({car.modelYear})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200/80 hover:bg-slate-300 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Main Showcase Image */}
          <div className="w-full h-64 sm:h-72 bg-gradient-to-b from-slate-50 to-slate-100/60 rounded-xl border border-slate-200/80 flex items-center justify-center p-6 relative overflow-hidden">
            <img
              src={car.image}
              alt={car.name}
              className="max-h-full max-w-full object-contain mix-blend-multiply drop-shadow-xl"
            />
            <div className="absolute top-3 left-3 text-xs text-slate-500 font-medium">
              {car.categoryLabel} · {car.supplierTag}
            </div>
            <div className="absolute bottom-3 right-3 text-xs text-slate-500 font-mono">
              Rating {car.rating.toFixed(1)} / 10 ({car.reviewCount} reviews)
            </div>
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Seats</span>
              <div className="flex items-center gap-1.5 mt-1 font-bold text-slate-900 text-sm">
                <Users className="w-4 h-4 text-slate-500" />
                <span>{car.seats} Passengers</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Luggage</span>
              <div className="flex items-center gap-1.5 mt-1 font-bold text-slate-900 text-sm">
                <Briefcase className="w-4 h-4 text-slate-500" />
                <span>{car.bags} Large Bags</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Gearbox</span>
              <div className="flex items-center gap-1.5 mt-1 font-bold text-slate-900 text-sm capitalize">
                <Gauge className="w-4 h-4 text-slate-500" />
                <span>{car.transmission}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Mileage Policy</span>
              <div className="flex items-center gap-1.5 mt-1 font-bold text-slate-900 text-sm">
                <span>{car.mileageLimitKmPerDay > 0 ? `${car.mileageLimitKmPerDay} km/day` : 'Unlimited'}</span>
              </div>
            </div>
          </div>

          {/* Luxury Equipment & Interior Features Checklist */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Included Equipment & Vehicle Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {car.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>RTA Salik Automated Dubai Toll Tag Fitted</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>High Output Dual-Zone Air Conditioning</span>
              </div>
            </div>
          </div>

          {/* Dubai VIP Handover Protocol */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-600 space-y-1.5">
            <h4 className="font-bold text-slate-900">
              DXB Airport Handover Guarantee
            </h4>
            <p className="leading-relaxed">
              Your car is pre-conditioned, fueled, and parked in the terminal short-stay lot prior to your flight's touchdown. You bypass desk queues completely; our concierge hands over the keys directly at Arrivals.
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-white flex items-center justify-between gap-4">
          <div>
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Total for {rentalDays} Days</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">
                {formatPrice(totalAmountAED, currency)}
              </span>
              <span className="text-xs text-slate-500">
                ({formatPrice(car.pricePerDayAED, currency)}/day)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`https://wa.me/971501234567?text=Hello%20Najd,%20I%20am%20interested%20in%20reserving%20the%20${encodeURIComponent(car.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden sm:inline">WhatsApp Concierge</span>
              <span className="sm:hidden">Inquire</span>
            </a>

            <button
              type="button"
              onClick={() => {
                onClose();
                onSelectCar(car);
              }}
              className="px-6 py-2.5 bg-red-700 hover:bg-red-800 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-red-700/20 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Book This Car</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
};
