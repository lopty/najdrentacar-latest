import React from 'react';
import { CarCategory } from '../types/rental';
import { ArrowUpDown } from 'lucide-react';

interface CategoryFilterBarProps {
  selectedCategory: CarCategory;
  onSelectCategory: (category: CarCategory) => void;
  counts: Record<CarCategory, number>;
  sortBy: string;
  onSortChange: (sortBy: any) => void;
  totalAvailable: number;
}

const CATEGORIES: { key: CarCategory; label: string }[] = [
  { key: 'all', label: 'All Fleet' },
  { key: 'luxury', label: 'Luxury & Prestige' },
  { key: 'suv', label: 'SUVs & 4x4' },
  { key: 'economy', label: 'Economy' },
];

export const CategoryFilterBar: React.FC<CategoryFilterBarProps> = ({
  selectedCategory,
  onSelectCategory,
  counts,
  sortBy,
  onSortChange,
  totalAvailable,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 py-4 border-b border-slate-200 mb-8">
      
      {/* Category Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1 sm:pb-0">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.key;
          const count = counts[cat.key] || 0;

          return (
            <button
              key={cat.key}
              type="button"
              onClick={() => onSelectCategory(cat.key)}
              className={`relative px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer select-none ${
                isSelected
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`ml-1.5 font-mono text-[10px] ${isSelected ? 'text-red-400 font-bold' : 'text-slate-500'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Sort & Count */}
      <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
        <span className="text-xs text-slate-500 font-medium">
          Showing <strong className="text-slate-900 font-bold">{totalAvailable}</strong> vehicles
        </span>

        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <ArrowUpDown className="w-3.5 h-3.5" />
          <select
            aria-label="Sort Fleet"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800 outline-none focus:border-[#C5221F] cursor-pointer shadow-xs"
          >
            <option value="recommended">Recommended</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="power">Horsepower: High to Low</option>
          </select>
        </div>
      </div>

    </div>
  );
};
