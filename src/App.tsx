import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/ui';
import type { Route } from './routes';

export const App: React.FC<{ route: Route }> = ({ route }) => (
  <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-slate-900 selection:bg-[#C5221F] selection:text-white w-full overflow-x-hidden font-sans">
    <Header />
    <main className="flex-1 w-full">{route.render()}</main>
    <Footer />
    <MobileActionBar />
  </div>
);
