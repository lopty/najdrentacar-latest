import React, { useState } from 'react';
import { Booking } from '../types/rental';
import { formatPrice } from '../utils/currency';
import { X, Search, Trash2, ExternalLink } from 'lucide-react';

interface MyBookingsModalProps {
  bookings: Booking[];
  onClose: () => void;
  onCancelBooking: (bookingId: string) => void;
  onViewBookingDetails: (booking: Booking) => void;
}

export const MyBookingsModal: React.FC<MyBookingsModalProps> = ({
  bookings,
  onClose,
  onCancelBooking,
  onViewBookingDetails,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBookings = bookings.filter(
    (b) =>
      b.bookingReference.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.driverDetails.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <h2 className="text-base font-bold text-slate-900 font-display">
            Manage Reservations
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-200/70 hover:bg-slate-300 flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-3 border-b border-slate-100 bg-white">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search reference (ND-DXB-...) or driver name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-1.5 bg-slate-50 rounded-lg border border-slate-200 text-xs outline-none focus:bg-white focus:border-red-700"
            />
          </div>
        </div>

        {/* Bookings List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {filteredBookings.length === 0 ? (
            <div className="text-center py-10 px-4">
              <p className="text-xs font-semibold text-slate-700">No Reservations Found</p>
              <p className="text-[11px] text-slate-400 mt-1 max-w-xs mx-auto">
                Vehicles reserved in this browser session will be listed here.
              </p>
            </div>
          ) : (
            filteredBookings.map((b) => (
              <div
                key={b.id}
                className="p-3.5 rounded-lg border border-slate-200 bg-white transition-colors space-y-2.5"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-slate-900">
                      REF: {b.bookingReference}
                    </span>
                    <h3 className="text-xs font-bold text-slate-800 mt-0.5">
                      {b.car.name}
                    </h3>
                    <p className="text-[11px] text-slate-500">{b.driverDetails.fullName}</p>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-bold text-slate-900 tabular-nums block">
                      {formatPrice(b.totalPriceAED, b.currency)}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      Confirmed
                    </span>
                  </div>
                </div>

                <div className="text-xs text-slate-500">
                  <span>{b.searchCriteria.pickupLocation}</span>
                  <span className="mx-1.5">·</span>
                  <span>{b.searchCriteria.pickupDate}</span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                  <button
                    type="button"
                    onClick={() => onViewBookingDetails(b)}
                    className="font-semibold text-red-700 hover:text-red-800 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Voucher</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onCancelBooking(b.id)}
                    className="text-slate-400 hover:text-red-600 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Cancel</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>Need help?</span>
          <a
            href="https://wa.me/971501234567"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-800 hover:underline"
          >
            WhatsApp Support (+971 4 338 8200)
          </a>
        </div>

      </div>
    </div>
  );
};
