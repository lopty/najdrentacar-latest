import React, { useState } from 'react';
import { SearchCriteria } from '../types/rental';
import { DUBAI_LOCATIONS } from '../data/locations';
import { MapPin, Calendar, Search, ChevronDown, Check, Car as CarIcon, Truck } from 'lucide-react';

interface SearchWidgetProps {
  criteria: SearchCriteria;
  onSearchChange: (newCriteria: SearchCriteria) => void;
  onExecuteSearch: () => void;
  activeVehicleType?: 'cars' | 'vans';
  onVehicleTypeChange?: (type: 'cars' | 'vans') => void;
}

export const SearchWidget: React.FC<SearchWidgetProps> = ({
  criteria,
  onSearchChange,
  onExecuteSearch,
}) => {
  const [showLocationPicker, setShowLocationPicker] = useState(false);
  const [vehicleType, setVehicleType] = useState<'cars' | 'vans'>('cars');

  const handleLocationSelect = (locName: string) => {
    onSearchChange({ 
      ...criteria, 
      pickupLocation: locName,
      dropoffLocation: locName
    });
    setShowLocationPicker(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-900/5 p-5 sm:p-7 w-full transition-all">
      
      {/* Europcar Style Vehicle Type Selector */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <span className="text-xs font-semibold text-slate-800 block mb-2">
            What type of vehicle?
          </span>
          <div className="inline-flex p-1 bg-slate-100 rounded-xl gap-1">
            <button
              type="button"
              onClick={() => setVehicleType('cars')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                vehicleType === 'cars'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <CarIcon className="w-4 h-4" />
              <span>Cars & SUVs</span>
            </button>

            <button
              type="button"
              onClick={() => setVehicleType('vans')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                vehicleType === 'vans'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Truck className="w-4 h-4" />
              <span>Family 7-8 Seaters</span>
            </button>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 font-medium">
          <Check className="w-4 h-4 text-emerald-600" />
          <span>Same return location</span>
        </div>
      </div>

      {/* Main Europcar Style Clean Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-end">
        
        {/* Pickup and Return Location */}
        <div className="relative lg:col-span-4">
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Pickup and return location
          </label>
          <button
            type="button"
            onClick={() => setShowLocationPicker(!showLocationPicker)}
            className="w-full h-12 px-3.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-left transition-colors flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-2.5 overflow-hidden">
              <MapPin className="w-4 h-4 text-[#C5221F] shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-slate-900 truncate">
                {criteria.pickupLocation}
              </span>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 ml-1" />
          </button>

          {/* Location Dropdown Modal */}
          {showLocationPicker && (
            <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-white rounded-xl shadow-2xl border border-slate-200 p-2 max-h-80 overflow-y-auto w-full md:w-96 text-slate-900">
              <div className="px-3 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                Dubai International Airport & Locations
              </div>
              <div className="py-1">
                {DUBAI_LOCATIONS.map((loc) => (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => handleLocationSelect(loc.name)}
                    className="w-full flex items-start gap-3 px-3 py-2.5 text-left rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-slate-900 truncate">
                          {loc.name}
                        </span>
                        {loc.badge && (
                          <span className="text-[10px] text-red-700 font-medium">
                            · {loc.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 truncate mt-0.5">
                        {loc.address}
                      </p>
                    </div>
                    {criteria.pickupLocation === loc.name && (
                      <Check className="w-4 h-4 text-[#C5221F] mt-1 shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Pick up date & time */}
        <div className="lg:col-span-3">
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Pick up date & time
          </label>
          <div className="flex items-center h-12 rounded-xl border border-slate-300 hover:border-slate-400 bg-white px-3 transition-colors">
            <Calendar className="w-4 h-4 text-[#C5221F] mr-2 shrink-0" />
            <input
              type="date"
              value={criteria.pickupDate}
              onChange={(e) => onSearchChange({ ...criteria, pickupDate: e.target.value })}
              className="bg-transparent text-xs sm:text-sm font-medium text-slate-900 w-full outline-none cursor-pointer"
            />
            <select
              value={criteria.pickupTime}
              onChange={(e) => onSearchChange({ ...criteria, pickupTime: e.target.value })}
              className="bg-transparent text-xs font-medium text-slate-700 outline-none border-l border-slate-200 pl-2 ml-1 cursor-pointer"
            >
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="12:00">12:00</option>
              <option value="14:00">14:00</option>
              <option value="18:00">18:00</option>
              <option value="22:00">22:00</option>
              <option value="01:00">01:00</option>
            </select>
          </div>
        </div>

        {/* Return date and time */}
        <div className="lg:col-span-3">
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Return date and time
          </label>
          <div className="flex items-center h-12 rounded-xl border border-slate-300 hover:border-slate-400 bg-white px-3 transition-colors">
            <Calendar className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
            <input
              type="date"
              value={criteria.dropoffDate}
              onChange={(e) => onSearchChange({ ...criteria, dropoffDate: e.target.value })}
              className="bg-transparent text-xs sm:text-sm font-medium text-slate-900 w-full outline-none cursor-pointer"
            />
            <select
              value={criteria.dropoffTime}
              onChange={(e) => onSearchChange({ ...criteria, dropoffTime: e.target.value })}
              className="bg-transparent text-xs font-medium text-slate-700 outline-none border-l border-slate-200 pl-2 ml-1 cursor-pointer"
            >
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="12:00">12:00</option>
              <option value="14:00">14:00</option>
              <option value="18:00">18:00</option>
              <option value="22:00">22:00</option>
              <option value="01:00">01:00</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="lg:col-span-2">
          <button
            type="button"
            onClick={onExecuteSearch}
            className="w-full h-12 bg-[#C5221F] hover:bg-[#A81B18] active:scale-98 text-white font-semibold text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>

      </div>

      {/* Europcar Style Bottom Filters Row */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600 font-medium">
        <div className="flex items-center gap-1.5">
          <span className="text-slate-500">Driver age:</span>
          <select
            value={criteria.driverAge}
            onChange={(e) => onSearchChange({ ...criteria, driverAge: e.target.value as any })}
            className="bg-transparent font-semibold text-slate-900 cursor-pointer outline-none"
          >
            <option value="25-65">25 - 65 yrs</option>
            <option value="21-24">21 - 24 yrs</option>
            <option value="65+">65+ yrs</option>
          </select>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-slate-500">Delivery:</span>
          <span className="font-semibold text-slate-900">DXB Terminal Curbside</span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-slate-500">Tolls:</span>
          <span className="font-semibold text-slate-900">Salik Tag Included</span>
        </div>
      </div>

    </div>
  );
};
