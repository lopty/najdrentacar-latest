import React, { useState } from 'react';
import { Car, SearchCriteria, AddonOption, DriverDetails, Booking, CurrencyCode } from '../types/rental';
import { DEFAULT_ADDONS } from '../data/cars';
import { formatPrice } from '../utils/currency';
import { 
  X, 
  Check, 
  ArrowRight, 
  ArrowLeft,
  Calendar,
  MapPin,
  Lock,
  CreditCard,
  Banknote
} from 'lucide-react';

interface BookingModalProps {
  car: Car;
  criteria: SearchCriteria;
  rentalDays: number;
  currency: CurrencyCode;
  onClose: () => void;
  onBookingConfirmed: (booking: Booking) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  car,
  criteria,
  rentalDays,
  currency,
  onClose,
  onBookingConfirmed,
}) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  // Step 1: Addons
  const [addons, setAddons] = useState<AddonOption[]>(DEFAULT_ADDONS);

  // Step 2: Driver Info
  const [driverDetails, setDriverDetails] = useState<DriverDetails>({
    fullName: '',
    email: '',
    phoneCountryCode: '+971',
    phoneNumber: '',
    licenseOrigin: 'international',
    flightNumber: '',
    pickupTerminal: criteria.pickupLocation,
    specialRequests: '',
  });

  // Step 3: Payment Choice
  const [paymentMethod, setPaymentMethod] = useState<'arrival-cash' | 'arrival-card' | 'online-card' | 'apple-pay'>('arrival-card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(true);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Price calculations
  const baseRentalAED = car.pricePerDayAED * rentalDays;
  const addonsTotalAED = addons
    .filter((a) => a.selected)
    .reduce((sum, a) => sum + a.pricePerDayAED * rentalDays, 0);
  const grandTotalAED = baseRentalAED + addonsTotalAED;

  const toggleAddon = (addonId: string) => {
    setAddons((prev) =>
      prev.map((item) =>
        item.id === addonId ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const validateStep2 = () => {
    const errors: Record<string, string> = {};
    if (!driverDetails.fullName.trim()) errors.fullName = 'Full legal name is required';
    if (!driverDetails.email.trim() || !driverDetails.email.includes('@')) {
      errors.email = 'Valid email is required';
    }
    if (!driverDetails.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone/WhatsApp number is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (validateStep2()) {
        setCurrentStep(3);
      }
    }
  };

  const handleCompleteBooking = () => {
    if (!termsAgreed) return;

    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const bookingRef = `ND-DXB-${randomCode}`;

    const newBooking: Booking = {
      id: `booking-${Date.now()}`,
      bookingReference: bookingRef,
      createdAt: new Date().toISOString(),
      car,
      searchCriteria: criteria,
      driverDetails,
      selectedAddons: addons.filter((a) => a.selected),
      totalDays: rentalDays,
      basePriceAED: baseRentalAED,
      addonsPriceAED: addonsTotalAED,
      totalPriceAED: grandTotalAED,
      currency,
      paymentMethod,
      paymentStatus: paymentMethod.startsWith('arrival') ? 'pending' : 'confirmed',
    };

    onBookingConfirmed(newBooking);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50 shrink-0">
          <div>
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
              Najd Rent A Car LLC · Reservation
            </span>
            <h2 className="text-base font-bold text-slate-900 font-display">
              {car.name} ({car.modelYear})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-200/70 hover:bg-slate-300 flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step Progress Indicators - Clean tabs without pills */}
        <div className="grid grid-cols-3 border-b border-slate-200 text-xs font-semibold text-center shrink-0">
          <button
            type="button"
            onClick={() => setCurrentStep(1)}
            className={`py-3 px-2 border-b-2 transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
              currentStep === 1
                ? 'border-red-700 text-red-700 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>1. Protection & Extras</span>
          </button>

          <button
            type="button"
            onClick={() => currentStep > 2 ? setCurrentStep(2) : null}
            className={`py-3 px-2 border-b-2 transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
              currentStep === 2
                ? 'border-red-700 text-red-700 font-bold'
                : currentStep > 2
                ? 'border-transparent text-slate-800'
                : 'border-transparent text-slate-400'
            }`}
          >
            <span>2. Driver & Flight</span>
          </button>

          <button
            type="button"
            className={`py-3 px-2 border-b-2 transition-colors flex items-center justify-center gap-1.5 ${
              currentStep === 3
                ? 'border-red-700 text-red-700 font-bold'
                : 'border-transparent text-slate-400'
            }`}
          >
            <span>3. Confirmation</span>
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
          
          {/* Quick Summary Bar */}
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
              <div>
                <span className="font-semibold text-slate-900">{criteria.pickupLocation}</span>
                <span className="text-slate-500 block text-[11px]">
                  {criteria.sameLocation ? 'Same drop-off location' : `Drop-off: ${criteria.dropoffLocation}`}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-slate-500 shrink-0" />
              <div>
                <span className="font-semibold text-slate-900">{criteria.pickupDate} → {criteria.dropoffDate}</span>
                <span className="text-slate-500 block text-[11px] tabular-nums">
                  {rentalDays} {rentalDays === 1 ? 'day' : 'days'}
                </span>
              </div>
            </div>
          </div>

          {/* STEP 1: ADDONS & INSURANCE */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Optional Protection & Add-ons
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Select coverage packages and amenities for your stay in Dubai.
                </p>
              </div>

              {/* Addons List */}
              <div className="space-y-2.5">
                {addons.map((addon) => (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-3.5 rounded-lg border transition-colors cursor-pointer flex items-start justify-between gap-3 ${
                      addon.selected
                        ? 'border-red-700 bg-red-50/20'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border transition-colors ${
                          addon.selected
                            ? 'bg-red-700 border-red-700 text-white'
                            : 'border-slate-300 bg-white'
                        }`}
                      >
                        {addon.selected && <Check className="w-3 h-3" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                            {addon.title}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                          {addon.description}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs sm:text-sm font-bold text-slate-900 tabular-nums">
                        +{formatPrice(addon.pricePerDayAED, currency)}
                      </span>
                      <span className="text-[11px] text-slate-400 block">/ day</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: DRIVER & FLIGHT DETAILS */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Driver Information & Inbound Flight
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Please provide your contact details for airport pickup coordination.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                
                {/* Full Name */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Legal Name (as on Passport or Driving License) *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Johnathan Smith"
                    value={driverDetails.fullName}
                    onChange={(e) =>
                      setDriverDetails({ ...driverDetails, fullName: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm outline-none focus:border-red-700"
                  />
                  {formErrors.fullName && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={driverDetails.email}
                    onChange={(e) =>
                      setDriverDetails({ ...driverDetails, email: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm outline-none focus:border-red-700"
                  />
                  {formErrors.email && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.email}</p>
                  )}
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp / Phone Number *
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={driverDetails.phoneCountryCode}
                      onChange={(e) =>
                        setDriverDetails({
                          ...driverDetails,
                          phoneCountryCode: e.target.value,
                        })
                      }
                      className="w-24 px-2 py-2 rounded-lg border border-slate-300 text-xs bg-slate-50 outline-none"
                    >
                      <option value="+971">+971 (UAE)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+1">+1 (US)</option>
                      <option value="+966">+966 (KSA)</option>
                      <option value="+49">+49 (DE)</option>
                      <option value="+33">+33 (FR)</option>
                      <option value="+91">+91 (IN)</option>
                      <option value="+7">+7 (RU)</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="50 123 4567"
                      value={driverDetails.phoneNumber}
                      onChange={(e) =>
                        setDriverDetails({
                          ...driverDetails,
                          phoneNumber: e.target.value,
                        })
                      }
                      className="flex-1 px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm outline-none focus:border-red-700"
                    />
                  </div>
                  {formErrors.phoneNumber && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.phoneNumber}</p>
                  )}
                </div>

                {/* Inbound Flight Number */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Inbound Flight Number (Optional, for DXB delay tracking)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. EK 008, BA 105"
                    value={driverDetails.flightNumber}
                    onChange={(e) =>
                      setDriverDetails({
                        ...driverDetails,
                        flightNumber: e.target.value.toUpperCase(),
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm uppercase outline-none focus:border-red-700"
                  />
                </div>

                {/* License Origin */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Driving License Type
                  </label>
                  <select
                    value={driverDetails.licenseOrigin}
                    onChange={(e) =>
                      setDriverDetails({
                        ...driverDetails,
                        licenseOrigin: e.target.value as any,
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white outline-none focus:border-red-700"
                  >
                    <option value="international">Tourist: Home Country License + Passport</option>
                    <option value="uae">UAE Resident: UAE License + Emirates ID</option>
                    <option value="gcc">GCC National: GCC Driver License</option>
                  </select>
                </div>

                {/* Special Requests */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Special Requests or Delivery Instructions
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Flight arrives at Terminal 3, please prepare car seats in advance"
                    value={driverDetails.specialRequests}
                    onChange={(e) =>
                      setDriverDetails({
                        ...driverDetails,
                        specialRequests: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs outline-none focus:border-red-700"
                  />
                </div>

              </div>
            </div>
          )}

          {/* STEP 3: PAYMENT & SUMMARY */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Payment Method
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Choose how you would like to settle the rental charge.
                </p>
              </div>

              {/* Payment Method Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('arrival-card')}
                  className={`p-3 rounded-lg border text-left transition-colors cursor-pointer ${
                    paymentMethod === 'arrival-card'
                      ? 'border-red-700 bg-red-50/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <CreditCard className="w-4 h-4 text-slate-700" />
                    <span className="text-xs font-bold text-slate-900">Pay by Card on Arrival</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Pay by chip & PIN / contactless terminal at airport delivery. No charge today.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('arrival-cash')}
                  className={`p-3 rounded-lg border text-left transition-colors cursor-pointer ${
                    paymentMethod === 'arrival-cash'
                      ? 'border-red-700 bg-red-50/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Banknote className="w-4 h-4 text-slate-700" />
                    <span className="text-xs font-bold text-slate-900">Pay Cash on Delivery</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Settle in AED or USD directly with our handover representative.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('online-card')}
                  className={`p-3 rounded-lg border text-left transition-colors cursor-pointer ${
                    paymentMethod === 'online-card'
                      ? 'border-red-700 bg-red-50/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Lock className="w-4 h-4 text-slate-700" />
                    <span className="text-xs font-bold text-slate-900">Prepay Online Card</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Secure credit / debit card processing with express keys handover.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('apple-pay')}
                  className={`p-3 rounded-lg border text-left transition-colors cursor-pointer ${
                    paymentMethod === 'apple-pay'
                      ? 'border-red-700 bg-red-50/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-slate-900">Pay / Google Pay</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Quick digital wallet settlement with biometric verification.
                  </p>
                </button>
              </div>

              {/* Online Card Simulation */}
              {paymentMethod === 'online-card' && (
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-2.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="4000 1234 5678 9010"
                      maxLength={19}
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full px-3 py-2 bg-white rounded border border-slate-300 text-xs font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        maxLength={5}
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="w-full px-3 py-2 bg-white rounded border border-slate-300 text-xs font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        CVV
                      </label>
                      <input
                        type="password"
                        placeholder="123"
                        maxLength={4}
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        className="w-full px-3 py-2 bg-white rounded border border-slate-300 text-xs font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Itemized Invoice Box */}
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-2">
                <div className="flex justify-between text-slate-600">
                  <span>{car.name} ({rentalDays} {rentalDays === 1 ? 'day' : 'days'})</span>
                  <span className="font-semibold text-slate-900 tabular-nums">
                    {formatPrice(baseRentalAED, currency)}
                  </span>
                </div>

                {addons.filter((a) => a.selected).map((addon) => (
                  <div key={addon.id} className="flex justify-between text-slate-500 text-[11px]">
                    <span>{addon.title} ({rentalDays}d)</span>
                    <span className="font-medium text-slate-700 tabular-nums">
                      +{formatPrice(addon.pricePerDayAED * rentalDays, currency)}
                    </span>
                  </div>
                ))}

                <div className="flex justify-between text-slate-500 text-[11px]">
                  <span>Salik Toll Tag Transponder</span>
                  <span className="text-slate-700 font-medium">Included</span>
                </div>
                <div className="flex justify-between text-slate-500 text-[11px]">
                  <span>Airport Meet & Greet Delivery</span>
                  <span className="text-slate-700 font-medium">Included</span>
                </div>

                <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-sm font-bold text-slate-900">
                  <span>Total Amount</span>
                  <span className="text-base text-red-700 tabular-nums font-display">
                    {formatPrice(grandTotalAED, currency)}
                  </span>
                </div>
              </div>

              {/* Terms Checkbox */}
              <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600">
                <input
                  type="checkbox"
                  checked={termsAgreed}
                  onChange={(e) => setTermsAgreed(e.target.checked)}
                  className="w-4 h-4 rounded text-red-700 border-slate-300 mt-0.5"
                />
                <span>
                  I confirm the driver holds a valid driving license. I accept Najd Rent A Car LLC rental policies and free cancellation terms.
                </span>
              </label>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-5 py-4 border-t border-slate-200 bg-white flex items-center justify-between gap-4 shrink-0">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={() => setCurrentStep((prev) => (prev - 1) as any)}
              className="px-4 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div className="text-xs text-slate-500">
              <span className="font-semibold text-slate-900 tabular-nums">{formatPrice(grandTotalAED, currency)}</span> total
            </div>
          )}

          {currentStep < 3 ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="px-6 py-2.5 bg-red-700 hover:bg-red-800 active:bg-red-900 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>{currentStep === 1 ? 'Continue to Driver Details' : 'Continue to Payment'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="button"
              disabled={!termsAgreed}
              onClick={handleCompleteBooking}
              className="px-6 py-2.5 bg-slate-900 hover:bg-black disabled:opacity-50 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Confirm Reservation</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
