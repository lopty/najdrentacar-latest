import React from 'react';
import { NajdLogo } from './NajdLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs mt-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Info with Official Logo */}
          <div className="space-y-3">
            <NajdLogo variant="dark" height={38} />
            <p className="text-slate-400 text-xs leading-relaxed pt-2">
              Licensed by Dubai Department of Economy and Tourism (DET) and Roads & Transport Authority (RTA). Serving visitors and UAE residents with dependable mobility solutions.
            </p>
            <div className="text-[11px] text-slate-500">
              RTA Permit # 689421-DXB
            </div>
          </div>

          {/* Pickup Locations */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Dubai Pickup Locations
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>Dubai Intl Airport Terminal 1 (DXB T1)</li>
              <li>Dubai Intl Airport Terminal 3 (DXB T3)</li>
              <li>Dubai Intl Airport Terminal 2 (Flydubai)</li>
              <li>Al Maktoum Intl Airport (DWC)</li>
              <li>Dubai Marina & JBR</li>
              <li>Downtown Dubai & Business Bay</li>
            </ul>
          </div>

          {/* Fleet Categories */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Fleet Range
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>Economy Sedans</li>
              <li>Compact Hatchbacks</li>
              <li>SUVs & 4x4s</li>
              <li>Prestige & Executive Luxury</li>
              <li>Convertibles & Sports</li>
              <li>7-8 Seater Family Vans</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Operations & Contact
            </h4>
            <div className="space-y-1.5 text-slate-400">
              <p>Al Garhoud, Airport Road, Dubai, UAE</p>
              <p>Phone: +971 4 338 8200</p>
              <p>WhatsApp: +971 50 123 4567</p>
              <p>Email: reservations@najdrentacar.com</p>
              <p className="text-slate-500 text-[11px]">24 hours / 7 days service</p>
            </div>
          </div>

        </div>

        {/* Legal & Baseline */}
        <div className="mt-10 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Najd Rent A Car LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#dubai-rules" className="hover:text-slate-300 transition-colors">Rental Terms</a>
            <span>·</span>
            <a href="#airport-guide" className="hover:text-slate-300 transition-colors">Airport Delivery</a>
            <span>·</span>
            <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
