import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Smartphone } from 'lucide-react';
import Logo from './Logo';

export default function DonationPage() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gaming-dark pt-32 pb-20 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 bg-neon-yellow text-black px-6 py-2 font-black uppercase tracking-widest hover:bg-white transition-all neon-glow-yellow mb-12"
        >
          <ArrowLeft size={16} /> BACK
        </button>

        <div className="bg-white/5 border-2 border-neon-yellow p-8 cyber-card-shape relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-neon-yellow/10 blur-3xl" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 text-neon-yellow mb-4">
              <Heart size={24} fill="currentColor" />
              <h1 className="text-4xl font-gaming font-black tracking-tighter uppercase">Support Us</h1>
            </div>
            
            <p className="text-lg text-white/80 leading-relaxed font-bold uppercase tracking-tight mb-8 border-l-4 border-neon-yellow pl-5">
              Help us keep the FF Library running and updated with the latest Free Fire content.
            </p>

            <div className="space-y-6">
              <div className="bg-white/5 p-6 border border-white/10 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white p-1.5 border border-white/10">
                    <Logo variant="bkash" size={40} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-gaming font-black uppercase tracking-tight">bKash Donation</h3>
                    <p className="text-neon-yellow text-[10px] uppercase font-black tracking-widest">Direct QR Support</p>
                  </div>
                </div>

                <div className="bg-black/40 p-8 rounded-2xl border border-white/5 flex flex-col items-center gap-6">
                  <div className="relative group">
                    <Logo variant="qr" size={224} className="bg-white p-3 rounded-2xl" />
                    <div className="absolute -inset-3 bg-neon-yellow/10 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div className="text-center space-y-3">
                    <p className="text-white/90 text-base font-bold uppercase tracking-tight max-w-xs leading-tight">
                      "if you can please donate i have have to feed my AI's and the children in my basements 😭🙏"
                    </p>
                    <div className="h-px w-10 bg-neon-yellow/30 mx-auto" />
                    <p className="text-white/20 text-[9px] uppercase font-black tracking-[0.2em]">
                      Scan the QR code above to donate via bKash
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-3">
                <p className="text-white/40 text-xs font-medium italic">
                  "Every contribution helps us provide a better experience for the community."
                </p>
                <p className="text-white/10 text-[8px] uppercase font-black tracking-[0.5em] pt-6">
                  * Note: The basement thing is a joke. Please don't call the authorities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
