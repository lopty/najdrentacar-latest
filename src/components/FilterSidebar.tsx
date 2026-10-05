import React from 'react';
import { FilterState, CurrencyCode } from '../types/rental';
import { formatPrice } from '../utils/currency';
import { RotateCcw } from 'lucide-react';

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  onResetFilters: () => void;
  currency: CurrencyCode;
  totalFilteredCount: number;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  currency,
  totalFilteredCount,
  isOpenMobile,
  onCloseMobile,
}) => {
  const content = (
    <div className="space-y-6">
      {/* Header & Reset */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
          Filter Fleet
        </h2>
        <button
          type="button"
          onClick={onResetFilters}
          className="text-xs text-red-700 hover:text-red-800 font-medium flex items-center gap-1 cursor-pointer"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* Price Range Slider */}
      <div>
        <div className="flex items-center justify-between text-xs font-semibold mb-2">
          <span className="text-slate-700">Max Daily Rate</span>
          <span className="text-slate-900 tabular-nums font-bold">
            {formatPrice(filters.maxPriceAED, currency)}/day
          </span>
        </div>
        <input
          type="range"
          min="80"
          max="1000"
          step="20"
          value={filters.maxPriceAED}
          onChange={(e) =>
            onFilterChange({ ...filters, maxPriceAED: Number(e.target.value) })
          }
          className="w-full h-1.5 bg-slate-200 rounded appearance-none cursor-pointer accent-red-700"
        />
        <div className="flex justify-between text-[11px] text-slate-400 mt-1 tabular-nums">
          <span>{formatPrice(80, currency)}</span>
          <span>{formatPrice(1000, currency)}+</span>
        </div>
      </div>

      {/* Special Highlights Toggles - Clean list, no pills */}
      <div className="space-y-3 pt-3 border-t border-slate-100">
        <label className="flex items-start justify-between gap-3 cursor-pointer select-none">
          <div>
            <p className="text-xs font-semibold text-slate-800">Zero Deposit Only</p>
            <p className="text-[11px] text-slate-500">No credit card authorization hold</p>
          </div>
          <input
            type="checkbox"
            checked={filters.zeroDepositOnly}
            onChange={(e) =>
              onFilterChange({ ...filters, zeroDepositOnly: e.target.checked })
            }
            className="w-4 h-4 rounded text-red-700 border-slate-300 focus:ring-red-600 mt-0.5"
          />
        </label>

        <label className="flex items-start justify-between gap-3 cursor-pointer select-none">
          <div>
            <p className="text-xs font-semibold text-slate-800">Unlimited Mileage</p>
            <p className="text-[11px] text-slate-500">No daily kilometer restrictions</p>
          </div>
          <input
            type="checkbox"
            checked={filters.unlimitedMileageOnly}
            onChange={(e) =>
              onFilterChange({ ...filters, unlimitedMileageOnly: e.target.checked })
            }
            className="w-4 h-4 rounded text-red-700 border-slate-300 focus:ring-red-600 mt-0.5"
          />
        </label>

        <label className="flex items-start justify-between gap-3 cursor-pointer select-none">
          <div>
            <p className="text-xs font-semibold text-slate-800">Free Cancellation</p>
            <p className="text-[11px] text-slate-500">Cancel up to 24-48h before pickup</p>
          </div>
          <input
            type="checkbox"
            checked={filters.freeCancellationOnly}
            onChange={(e) =>
              onFilterChange({ ...filters, freeCancellationOnly: e.target.checked })
            }
            className="w-4 h-4 rounded text-red-700 border-slate-300 focus:ring-red-600 mt-0.5"
          />
        </label>
      </div>

      {/* Passenger Capacity */}
      <div className="pt-3 border-t border-slate-100">
        <label className="block text-xs font-semibold text-slate-700 mb-2">
          Passenger Seats
        </label>
        <div className="grid grid-cols-4 gap-1.5">
          {[
            { label: 'Any', value: 0 },
            { label: '4+', value: 4 },
            { label: '5+', value: 5 },
            { label: '7+', value: 7 },
          ].map((seat) => (
            <button
              key={seat.label}
              type="button"
              onClick={() => onFilterChange({ ...filters, minSeats: seat.value })}
              className={`py-1.5 px-2 rounded text-xs font-semibold border transition-colors cursor-pointer ${
                filters.minSeats === seat.value
                  ? 'bg-slate-900 border-slate-900 text-white'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {seat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Baggage Capacity */}
      <div className="pt-3 border-t border-slate-100">
        <label className="block text-xs font-semibold text-slate-700 mb-2">
          Large Luggage Bags
        </label>
        <div className="grid grid-cols-4 gap-1.5">
          {[
            { label: 'Any', value: 0 },
            { label: '2+', value: 2 },
            { label: '3+', value: 3 },
            { label: '4+', value: 4 },
          ].map((bag) => (
            <button
              key={bag.label}
              type="button"
              onClick={() => onFilterChange({ ...filters, minBags: bag.value })}
              className={`py-1.5 px-2 rounded text-xs font-semibold border transition-colors cursor-pointer ${
                filters.minBags === bag.value
                  ? 'bg-slate-900 border-slate-900 text-white'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {bag.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clean Dubai Info Box */}
      <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
        <div className="font-semibold text-slate-900">
          Standard Najd Inclusions
        </div>
        <p className="text-[11px] text-slate-500 leading-relaxed">
          All vehicles include Salik toll transponder, 24/7 Dubai roadside assistance, and standard third-party insurance.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <div className="hidden lg:block bg-white p-5 rounded-xl border border-slate-200 shadow-xs h-fit sticky top-24">
        {content}
      </div>

      {/* Mobile Drawer */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-black/40 backdrop-blur-xs">
          <div className="flex-1" onClick={onCloseMobile} />
          <div className="bg-white rounded-t-2xl max-h-[85vh] flex flex-col shadow-xl p-5 overflow-y-auto">
            <div className="w-8 h-1 bg-slate-300 rounded-full mx-auto mb-4 shrink-0" />
            <div className="flex-1 pb-20">
              {content}
            </div>
            
            {/* Sticky Mobile Confirm Button */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 flex gap-3">
              <button
                type="button"
                onClick={onResetFilters}
                className="px-4 py-3 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={onCloseMobile}
                className="flex-1 py-3 bg-red-700 hover:bg-red-800 text-white rounded-lg text-xs font-bold transition-colors"
              >
                Show {totalFilteredCount} Available Cars
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
