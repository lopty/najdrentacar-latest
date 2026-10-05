import React from 'react';
import { motion } from 'motion/react';
import { CarCategory, CurrencyCode } from '../types/rental';
import { formatPrice } from '../utils/currency';

interface CategoryCarouselProps {
  selectedCategory: CarCategory;
  onSelectCategory: (category: CarCategory) => void;
  currency: CurrencyCode;
  counts: Record<CarCategory, number>;
}

interface CategoryConfig {
  key: CarCategory;
  label: string;
  minPriceAED: number;
}

const CATEGORIES: CategoryConfig[] = [
  { key: 'all', label: 'All Fleet', minPriceAED: 65 },
  { key: 'suv', label: 'SUVs & 4x4', minPriceAED: 110 },
  { key: 'luxury', label: 'Prestige & Luxury', minPriceAED: 250 },
  { key: 'economy', label: 'Economy Sedans', minPriceAED: 65 },
];

export const CategoryCarousel: React.FC<CategoryCarouselProps> = ({
  selectedCategory,
  onSelectCategory,
  currency,
  counts,
}) => {
  return (
    <div className="w-full overflow-x-auto pb-1 scrollbar-none">
      <div className="flex items-center gap-1 min-w-max border-b border-slate-200">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.key;
          const count = counts[cat.key] || 0;

          return (
            <button
              key={cat.key}
              type="button"
              onClick={() => onSelectCategory(cat.key)}
              className="relative px-5 py-3 text-left transition-colors cursor-pointer select-none group"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs sm:text-sm font-semibold transition-colors ${
                    isSelected ? 'text-slate-900 font-bold' : 'text-slate-500 group-hover:text-slate-800'
                  }`}
                >
                  {cat.label}
                </span>
                <span
                  className={`text-[10px] font-mono tabular-nums transition-colors ${
                    isSelected ? 'text-red-700 font-bold' : 'text-slate-400'
                  }`}
                >
                  ({count})
                </span>
              </div>
              
              <div className="text-[11px] text-slate-400 font-normal tabular-nums mt-0.5">
                from {formatPrice(cat.minPriceAED, currency)}/day
              </div>

              {/* Animated Underline Indicator with Framer Motion */}
              {isSelected && (
                <motion.div
                  layoutId="activeCategoryIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-700"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
