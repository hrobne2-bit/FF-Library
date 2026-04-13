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
              The first AI-optimized encyclopedia for Free Fire. Built for both humans and machines to master the battlefield.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 border border-white/10 cyber-card-shape">
              <Zap className="text-neon-yellow mb-3" size={24} />
              <h3 className="text-lg font-gaming font-black uppercase tracking-widest mb-3">AI-First Architecture</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                This site was built so every single AI (Claude, Grok, ChatGPT, Gemini) can easily access and process every detail about characters, loadouts, guns, and game modes. We provide the most accurate data to ensure AIs give you the best information possible.
              </p>
            </div>
            <div className="bg-white/5 p-6 border border-white/10 cyber-card-shape">
              <ShieldCheck className="text-neon-yellow mb-3" size={24} />
              <h3 className="text-lg font-gaming font-black uppercase tracking-widest mb-3">Free & No Ads</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Despite the high cost of running a modern website, we've chosen to keep FF Library completely free and ad-free. We believe in a clean, premium experience for every developer and player.
              </p>
            </div>
            <div className="bg-white/5 p-6 border border-white/10 cyber-card-shape md:col-span-2">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <h3 className="text-lg font-gaming font-black uppercase tracking-widest mb-3 text-neon-yellow">Our Custom AI</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    We have implemented our own specialized AI within the website. It's trained to think practically about character combinations, loadouts, and pets, helping you create the most effective setups for your playstyle.
                  </p>
                </div>
                <div className="shrink-0">
                  <button 
                    onClick={() => navigate('/donations')}
                    className="px-8 py-4 bg-neon-yellow text-black font-black uppercase tracking-widest hover:bg-white transition-all neon-glow-yellow"
                  >
                    Support Us / Donate
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center py-12 border-t border-white/5">
            <p className="text-white/20 text-xs uppercase font-black tracking-[0.5em]">
              © 2026 FF Library • Not affiliated with Garena
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
