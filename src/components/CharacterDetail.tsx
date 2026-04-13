import { useParams, useNavigate } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCharacters } from '../hooks/useCharacters';
import { ArrowLeft, Download, Shield, Zap, Info } from 'lucide-react';
import Logo from './Logo';

export default function CharacterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const { characters, loading: isInitialLoading } = useCharacters();
  
  const character = useMemo(() => characters.find(c => c.id === id), [characters, id]);

  if (isInitialLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gaming-dark">
        <div className="transformer-block"></div>
      </div>
    );
  }

  if (!character) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Character not found</p>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    );
  }

  const isYellow = true; // Forcing yellow theme

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gaming-dark pb-16"
    >
      {/* Hero Section with Background Image */}
      <div className="relative h-[65vh] w-full overflow-hidden border-b-4 border-neon-yellow">
        {/* Loader Overlay */}
        <AnimatePresence>
          {!isLoaded && (
            <motion.div 
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-20 bg-black flex items-center justify-center"
            >
              <div className="transformer-block"></div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.img 
          initial={{ scale: 1.1, filter: 'grayscale(100%)' }}
          animate={{ scale: 1, filter: 'grayscale(0%)' }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={character.assets.wallpaperUrl} 
          alt={character.name}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-60' : 'opacity-0'}`}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark via-transparent to-transparent" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 pb-8 max-w-7xl mx-auto w-full">
          <motion.button
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            onClick={() => navigate('/')}
            className="absolute top-6 left-6 md:left-12 flex items-center gap-2 bg-neon-yellow text-black px-5 py-1.5 text-xs font-black uppercase tracking-widest hover:bg-white transition-all neon-glow-yellow"
          >
            <ArrowLeft size={14} /> BACK
          </motion.button>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-1 border-l-4 border-neon-yellow pl-6">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2"
              >
                <Logo variant="transparent" size={12} className="opacity-60" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-neon-yellow">
                  Legendary Character
                </span>
              </motion.div>
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-6xl md:text-8xl font-gaming font-black tracking-tighter uppercase leading-none"
              >
                {character.name}
              </motion.h1>
            </div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-6 bg-white/5 border-2 border-neon-yellow p-4 neon-glow-yellow cyber-card-shape"
            >
              <div className="w-14 h-14 border-2 border-neon-yellow rotate-45 flex items-center justify-center overflow-hidden bg-white/5">
                <img 
                  src={character.skillIconUrl} 
                  alt={character.skillName} 
                  className="w-[140%] h-[140%] -rotate-45 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="font-gaming font-black text-xl uppercase tracking-tighter leading-tight">{character.skillName}</h3>
                <p className="text-[10px] text-neon-yellow uppercase tracking-widest font-black mt-0.5">Active Skill</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Lore & Description */}
        <div className="lg:col-span-2 space-y-12">
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 text-neon-yellow">
              <Zap size={20} fill="currentColor" />
              <h2 className="text-xl font-gaming font-black uppercase tracking-widest">Skill Analysis</h2>
            </div>
            <p className="text-lg text-white/80 leading-relaxed font-bold uppercase tracking-tight border-l-2 border-white/10 pl-5">
              {character.skillDescription}
            </p>
          </motion.section>

          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 text-white/40">
              <Info size={20} />
              <h2 className="text-xl font-gaming font-black uppercase tracking-widest">Background Story</h2>
            </div>
            <p className="text-white/50 leading-relaxed text-base font-medium">
              {character.lore}
            </p>
          </motion.section>
        </div>

        {/* Sidebar: Assets & Stats */}
        <div className="space-y-8">
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 border-t-4 border-neon-yellow p-6 space-y-6 cyber-card-shape"
          >
            <h3 className="text-lg font-gaming font-black uppercase tracking-widest border-b border-white/10 pb-3">
              Brand Assets
            </h3>
            
            <div className="space-y-3">
              <a 
                href={character.assets.wallpaperUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-4 bg-white/5 border-l-4 border-transparent hover:border-neon-yellow hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neon-yellow text-black flex items-center justify-center">
                    <Download size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-tighter">Wallpaper</p>
                    <p className="text-[9px] text-white/40 uppercase font-bold">4K Ultra HD</p>
                  </div>
                </div>
                <ArrowLeft size={14} className="rotate-180 opacity-0 group-hover:opacity-100 transition-all text-neon-yellow" />
              </a>

              <a 
                href={character.assets.iconUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-4 bg-white/5 border-l-4 border-transparent hover:border-neon-yellow hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 text-white flex items-center justify-center">
                    <Download size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-tighter">Profile Icon</p>
                    <p className="text-[9px] text-white/40 uppercase font-bold">PNG Transparent</p>
                  </div>
                </div>
                <ArrowLeft size={14} className="rotate-180 opacity-0 group-hover:opacity-100 transition-all text-neon-yellow" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 border-b-4 border-neon-yellow p-6 space-y-6 cyber-card-shape"
          >
            <h3 className="text-lg font-gaming font-black uppercase tracking-widest border-b border-white/10 pb-3">
              Combat Stats
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Survival', value: 85 },
                { label: 'Support', value: 95 },
                { label: 'Offense', value: 70 },
              ].map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span>{stat.label}</span>
                    <span className="text-neon-yellow">{stat.value}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-neon-yellow neon-glow-yellow"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
