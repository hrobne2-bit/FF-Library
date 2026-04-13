import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Heart, Info, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Home', icon: Home, path: '/' },
    { label: 'Donations', icon: Heart, path: '/donations' },
    { label: 'About', icon: Info, path: '/about' },
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 w-full bg-gaming-dark/80 backdrop-blur-xl px-6 py-4 flex items-center justify-between border-b-2 border-neon-yellow/20 gap-8"
      >
        <div className="flex items-center gap-4 shrink-0">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 hover:bg-white/10 rounded-xl transition-colors text-neon-yellow"
          >
            <Menu size={24} />
          </button>
          
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => navigate('/')}
          >
            <div className="w-8 h-8 bg-neon-yellow neon-glow-yellow flex items-center justify-center">
              <span className="text-black font-gaming font-black text-xl">F</span>
            </div>
            <h1 className="text-2xl font-gaming font-bold tracking-tighter">
              FF <span className="text-neon-yellow">LIBRARY</span>
            </h1>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-white/60 shrink-0">
          <a href="#" className="text-white hover:text-neon-yellow transition-colors border-b-2 border-neon-yellow">Characters</a>
          <a href="#" className="hover:text-neon-yellow transition-colors border-b-2 border-transparent">Weapons</a>
          <a href="#" className="hover:text-neon-yellow transition-colors border-b-2 border-transparent">Maps</a>
          <a href="#" className="hover:text-neon-yellow transition-colors border-b-2 border-transparent">News</a>
        </nav>
      </motion.header>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-80 bg-gaming-dark border-r border-white/10 z-[70] p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-neon-yellow flex items-center justify-center">
                    <span className="text-black font-gaming font-black text-xl">F</span>
                  </div>
                  <span className="font-gaming font-black text-xl tracking-tighter">MENU</span>
                </div>
                <button 
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-xl transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      navigate(item.path);
                      setIsSidebarOpen(false);
                    }}
                    className="flex items-center gap-4 p-4 bg-white/5 border border-transparent hover:border-neon-yellow hover:bg-neon-yellow/10 transition-all group cyber-card-shape"
                  >
                    <item.icon size={20} className="text-neon-yellow group-hover:scale-110 transition-transform" />
                    <span className="font-black uppercase tracking-widest text-sm">{item.label}</span>
                  </button>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-white/5">
                <p className="text-[10px] text-white/20 uppercase font-black tracking-[0.3em] text-center">
                  FF Library v1.0.4
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
