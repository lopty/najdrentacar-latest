import React from 'react';
import { Booking } from '../types/rental';
import { formatPrice } from '../utils/currency';
import { NajdLogo } from './NajdLogo';
import { 
  Check, 
  X, 
  Printer, 
  MessageSquare, 
  MapPin, 
  Calendar
} from 'lucide-react';

interface BookingConfirmationModalProps {
  booking: Booking;
  onClose: () => void;
}

export const BookingConfirmationModal: React.FC<BookingConfirmationModalProps> = ({
  booking,
  onClose,
}) => {
  const whatsappMessage = encodeURIComponent(
    `Hello Najd Rent A Car LLC! I have reserved a vehicle.\n\n` +
    `*Reference:* ${booking.bookingReference}\n` +
    `*Vehicle:* ${booking.car.name}\n` +
    `*Pickup:* ${booking.searchCriteria.pickupLocation} on ${booking.searchCriteria.pickupDate} (${booking.searchCriteria.pickupTime})\n` +
    `*Return:* ${booking.searchCriteria.dropoffLocation} on ${booking.searchCriteria.dropoffDate}\n` +
    `*Lead Driver:* ${booking.driverDetails.fullName} (${booking.driverDetails.phoneCountryCode}${booking.driverDetails.phoneNumber})\n` +
    (booking.driverDetails.flightNumber ? `*Flight:* ${booking.driverDetails.flightNumber}\n` : '') +
    `*Total Rate:* ${formatPrice(booking.totalPriceAED, booking.currency)}\n\n` +
    `Please coordinate my airport handover.`
  );

  const whatsappUrl = `https://wa.me/971501234567?text=${whatsappMessage}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header with Official Logo & Reference */}
        <div className="p-6 border-b border-slate-200 bg-white flex items-start justify-between">
          <div>
            <NajdLogo height={36} />
            <div className="mt-3">
              <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wide flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Reservation Confirmed
              </span>
              <h2 className="text-xl font-bold text-slate-900 font-display mt-0.5">
                Reference: {booking.bookingReference}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Voucher Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
          
          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[200px] py-2.5 px-4 bg-slate-900 hover:bg-black text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Message Dispatch on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={handlePrint}
              className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span>Print Voucher</span>
            </button>
          </div>

          {/* Vehicle & Cost Summary */}
          <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[11px] text-slate-500 uppercase font-medium">
                  {booking.car.categoryLabel}
                </span>
                <h3 className="text-base font-bold text-slate-900 font-display">
                  {booking.car.name}
                </h3>
                <p className="text-xs text-slate-500">
                  {booking.car.modelYear} Model · {booking.car.supplierTag}
                </p>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-500 block">Total Due</span>
                <span className="text-lg font-bold text-slate-900 tabular-nums">
                  {formatPrice(booking.totalPriceAED, booking.currency)}
                </span>
                <span className="text-[11px] text-slate-500 block capitalize">
                  {booking.paymentMethod.replace('-', ' ')}
                </span>
              </div>
            </div>

            {/* Itinerary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-200 text-xs">
              <div className="space-y-1">
                <span className="text-[11px] text-slate-400 uppercase font-semibold">Pick-up Location</span>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">{booking.searchCriteria.pickupLocation}</p>
                    <p className="text-slate-500 text-[11px]">
                      {booking.searchCriteria.pickupDate} at {booking.searchCriteria.pickupTime}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] text-slate-400 uppercase font-semibold">Drop-off Location</span>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">{booking.searchCriteria.dropoffLocation}</p>
                    <p className="text-slate-500 text-[11px]">
                      {booking.searchCriteria.dropoffDate} at {booking.searchCriteria.dropoffTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Driver & Flight Box */}
          <div className="border border-slate-200 rounded-lg p-4 text-xs space-y-2">
            <h4 className="font-semibold text-slate-900 uppercase text-[11px] tracking-wide">
              Driver Details
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-slate-600">
              <div>
                <span className="text-slate-400 block text-[11px]">Lead Driver</span>
                <span className="font-semibold text-slate-800">{booking.driverDetails.fullName}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Contact</span>
                <span className="font-semibold text-slate-800">
                  {booking.driverDetails.phoneCountryCode} {booking.driverDetails.phoneNumber}
                </span>
              </div>
              {booking.driverDetails.flightNumber && (
                <div>
                  <span className="text-slate-400 block text-[11px]">Flight Number</span>
                  <span className="font-semibold text-slate-800">{booking.driverDetails.flightNumber}</span>
                </div>
              )}
            </div>
          </div>

          {/* Add-ons Inclusions */}
          {booking.selectedAddons.length > 0 && (
            <div className="p-3.5 rounded-lg border border-slate-200 text-xs">
              <span className="font-semibold text-slate-900 block mb-1">Confirmed Extras:</span>
              <ul className="space-y-1 text-slate-600">
                {booking.selectedAddons.map((addon) => (
                  <li key={addon.id} className="flex items-center gap-2 text-[11px]">
                    <span className="text-slate-400">·</span>
                    <span>{addon.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Airport Handover Details */}
          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
            <h4 className="font-semibold text-slate-900">Airport Arrival Protocol</h4>
            <p className="leading-relaxed">
              Upon landing, our airport concierge will greet you at the passenger arrivals exit holding a name sign and accompany you to your pre-inspected car in the short-stay parking bay.
            </p>
            <p className="text-[11px] text-slate-500 pt-1">
              Najd 24/7 Operations Desk: +971 4 338 8200
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold cursor-pointer"
          >
            Close & Back to Fleet
          </button>
        </div>

      </div>
    </div>
  );
};
