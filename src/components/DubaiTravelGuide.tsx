import React, { useState } from 'react';
import { ChevronDown, Plane, ShieldCheck, Clock, Headphones } from 'lucide-react';

export const DubaiTravelGuide: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'What documents are required to rent a car in Dubai?',
      a: 'Tourists need their original passport, visit visa with entry stamp, and a valid home country driver license (GCC, US, UK, EU, Canada, and Australia licenses are accepted directly; other nationalities require an International Driving Permit). UAE residents need their Emirates ID and UAE driving license.'
    },
    {
      q: 'How does DXB airport terminal delivery work?',
      a: 'Enter your flight number during booking. Our team monitors your flight arrival and meets you directly at the passenger arrivals exit at Terminal 1, 2, or 3 with your pre-inspected car parked in the short-stay lot.'
    },
    {
      q: 'How are Salik tolls and traffic fines billed?',
      a: 'All vehicles have an active RTA Salik transponder fitted to the windscreen. Toll crossings (AED 5 per gate) are logged automatically and settled when returning the vehicle.'
    },
    {
      q: 'When is the security deposit refunded?',
      a: 'We offer zero deposit options on economy vehicles with our Super CDW package. For standard deposits, pre-authorizations are released within 14-21 days following UAE traffic authority clearance.'
    }
  ];

  return (
    <section className="space-y-12">
      
      {/* 4 Value Highlights - Clean, Commercial, No AI fluff */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <Plane className="w-5 h-5 text-[#C5221F] mb-2.5" />
          <h3 className="font-bold text-slate-900 text-sm">Airport Meet & Greet</h3>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
            Free vehicle handover at DXB Terminals 1, 2, 3 and DWC with flight delay tracking.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <ShieldCheck className="w-5 h-5 text-[#C5221F] mb-2.5" />
          <h3 className="font-bold text-slate-900 text-sm">Zero Hidden Fees</h3>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
            Transparent daily rates including 5% VAT, standard CDW insurance, and Salik tag.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <Clock className="w-5 h-5 text-[#C5221F] mb-2.5" />
          <h3 className="font-bold text-slate-900 text-sm">Instant Confirmation</h3>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
            Reserve your car in 60 seconds with pay-on-arrival and free cancellation options.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <Headphones className="w-5 h-5 text-[#C5221F] mb-2.5" />
          <h3 className="font-bold text-slate-900 text-sm">24/7 Local Support</h3>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
            Dedicated Dubai operations team available on WhatsApp and phone around the clock.
          </p>
        </div>
      </div>

      {/* Clean FAQs Accordion */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900 font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Everything you need to know about renting a car with Najd in Dubai.
          </p>
        </div>

        <div className="divide-y divide-slate-100">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="py-3.5">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full text-left flex items-center justify-between gap-4 font-semibold text-sm text-slate-900 hover:text-red-700 transition-colors cursor-pointer py-1"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-red-700' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed max-w-3xl">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};
