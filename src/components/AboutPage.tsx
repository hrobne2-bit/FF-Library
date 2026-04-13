import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Info, ShieldCheck, Zap } from 'lucide-react';

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gaming-dark pt-32 pb-20 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 bg-neon-yellow text-black px-6 py-2 font-black uppercase tracking-widest hover:bg-white transition-all neon-glow-yellow mb-12"
        >
          <ArrowLeft size={16} /> BACK
        </button>

        <div className="space-y-8">
          <section className="bg-white/5 border-l-4 border-neon-yellow p-8 cyber-card-shape">
            <div className="flex items-center gap-3 text-neon-yellow mb-4">
              <Info size={24} />
              <h1 className="text-4xl font-gaming font-black tracking-tighter uppercase">About FF Library</h1>
            </div>
            <p className="text-xl text-white/90 leading-relaxed font-bold uppercase tracking-tight">
              The most comprehensive and visually stunning encyclopedia for Free Fire characters, skills, and combat strategies.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 border border-white/10 cyber-card-shape">
              <Zap className="text-neon-yellow mb-3" size={24} />
              <h3 className="text-lg font-gaming font-black uppercase tracking-widest mb-3">Our Mission</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                To provide Free Fire players with a high-performance, easy-to-use platform to master every character's potential and dominate the battlefield.
              </p>
            </div>
            <div className="bg-white/5 p-6 border border-white/10 cyber-card-shape">
              <ShieldCheck className="text-neon-yellow mb-3" size={24} />
              <h3 className="text-lg font-gaming font-black uppercase tracking-widest mb-3">Community Focused</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                FF Library is built by fans, for fans. We prioritize accuracy, speed, and a premium aesthetic that matches the intensity of the game.
              </p>
            </div>
          </div>

          <div className="text-center py-12 border-t border-white/5">
            <p className="text-white/20 text-xs uppercase font-black tracking-[0.5em]">
              © 2024 FF Library • Not affiliated with Garena
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
