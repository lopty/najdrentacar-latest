import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Car, CurrencyCode } from '../types/rental';
import { Users, Zap, Gauge } from 'lucide-react';

interface CarCardProps {
  car: Car;
  rentalDays: number;
  currency: CurrencyCode;
  onSelectCar: (car: Car) => void;
  onViewDetails: (car: Car) => void;
}

export const CarCard: React.FC<CarCardProps> = ({
  car,
  rentalDays,
  currency,
  onSelectCar,
  onViewDetails,
}) => {
  const [imageError, setImageError] = useState(false);

  const categoryBadge = car.category === 'luxury' 
    ? 'Luxury' 
    : car.category === 'suv' 
    ? 'SUV' 
    : 'Economy';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg hover:border-slate-300 transition-all p-4 sm:p-5 flex flex-col justify-between group"
    >
      <div>
        {/* Top Badges & Image Container */}
        <div 
          onClick={() => onViewDetails(car)}
          className="w-full h-52 sm:h-56 bg-slate-50/70 rounded-xl overflow-hidden relative flex items-center justify-center p-4 cursor-pointer border border-slate-100 group/img"
        >
          {/* Top Badges Row - Clean and subtle */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white text-slate-700 border border-slate-200 shadow-xs">
              {categoryBadge}
            </span>
            {car.featured && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-50 text-amber-800 border border-amber-200">
                Featured
              </span>
            )}
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200">
              {car.modelYear}
            </span>
          </div>

          {!imageError ? (
            <img
              src={car.image}
              alt={`${car.brand} ${car.name}`}
              onError={() => setImageError(true)}
              className="max-h-full max-w-full object-contain mix-blend-multiply group-hover/img:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="text-center text-slate-400">
              <span className="text-base font-medium text-slate-800 block">{car.name}</span>
              <span className="text-xs">{car.brand}</span>
            </div>
          )}
        </div>

        {/* Title & Price Header - Refined Normal/Semi-bold Typography (Not Thick!) */}
        <div className="mt-4 flex items-start justify-between gap-3">
          <div>
            <span className="text-xs font-semibold text-[#C5221F] tracking-wider uppercase block">
              {car.brand}
            </span>
            <h3 
              onClick={() => onViewDetails(car)}
              className="text-lg font-semibold text-slate-900 cursor-pointer hover:text-[#C5221F] transition-colors leading-snug"
            >
              {car.name}
            </h3>
          </div>

          <div className="text-right">
            <div className="text-lg font-bold text-slate-900 tabular-nums leading-tight">
              AED {car.displayedRateAED.toLocaleString()}
            </div>
            <span className="text-[11px] font-normal text-slate-500 uppercase tracking-normal block mt-0.5">
              {car.displayedRatePeriod.toLowerCase()}
            </span>
          </div>
        </div>

        {/* 3 Metrics Specs: Seats, HP, 0-100s - Clean, non-thick fonts */}
        <div className="grid grid-cols-3 gap-2 my-4 pt-3 border-t border-slate-100 text-center">
          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-50/80 border border-slate-100">
            <Users className="w-3.5 h-3.5 text-slate-400 mb-1" />
            <span className="text-xs font-medium text-slate-700 tabular-nums">{car.seats} Seats</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-50/80 border border-slate-100">
            <Zap className="w-3.5 h-3.5 text-slate-400 mb-1" />
            <span className="text-xs font-medium text-slate-700 tabular-nums">{car.horsepower} HP</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-50/80 border border-slate-100">
            <Gauge className="w-3.5 h-3.5 text-slate-400 mb-1" />
            <span className="text-xs font-medium text-slate-700 tabular-nums">{car.acceleration0to100}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons: VIEW DETAILS & BOOK NOW - Refined and Elegant */}
      <div className="grid grid-cols-2 gap-2.5 pt-2">
        <button
          type="button"
          onClick={() => onViewDetails(car)}
          className="w-full py-2.5 px-3 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors cursor-pointer text-center"
        >
          View details
        </button>

        <button
          type="button"
          onClick={() => onSelectCar(car)}
          className="w-full py-2.5 px-3 rounded-xl bg-[#C5221F] hover:bg-[#A81B18] active:scale-98 text-white text-xs font-semibold transition-all shadow-xs cursor-pointer text-center flex items-center justify-center gap-1"
        >
          <span>Book now ↗</span>
        </button>
      </div>

    </motion.div>
  );
};
