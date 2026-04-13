/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import CharacterGrid from './components/CharacterGrid';
import CharacterDetail from './components/CharacterDetail';
import BackgroundElements from './components/BackgroundElements';
import Flashbang from './components/Flashbang';
import { ThemeProvider } from './context/ThemeContext';
import Logo from './components/Logo';

import DonationPage from './components/DonationPage';
import AboutPage from './components/AboutPage';

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen relative bg-gaming-dark transition-colors duration-300">
      <Flashbang />
      <BackgroundElements />
      {/* Immersive Background Gradients & Patterns */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute inset-0 bg-scanline opacity-[0.03]" />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-neon-yellow/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-neon-gold/5 blur-[120px]" />
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] rounded-full bg-white/2 blur-[100px]" />
      </div>

      <Header />
      
      <main className="pt-8">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={
              <div className="max-w-7xl mx-auto px-6">
                <CharacterGrid />
              </div>
            } />
            <Route path="/character/:id" element={<CharacterDetail />} />
            <Route path="/donations" element={<DonationPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </AnimatePresence>
      </main>

      <footer className="py-20 px-6 border-t border-white/5 flex flex-col items-center gap-8">
        <div className="flex items-center gap-3">
          <Logo variant="main" size={24} className="opacity-40" />
          <span className="text-sm font-gaming font-bold tracking-widest opacity-50">FF LIBRARY</span>
        </div>
        <p className="text-white/20 text-[10px] uppercase tracking-[0.4em] text-center">
          © 2026 FF LIBRARY • NOT AFFILIATED WITH GARENA
        </p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}
