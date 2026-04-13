import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Character } from '../types';

interface CharacterCardProps {
  character: Character;
  index: number;
  key?: string;
}

export default function CharacterCard({ character, index }: CharacterCardProps) {
  const navigate = useNavigate();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: (index % 2) * 0.1,
        ease: [0.22, 1, 0.36, 1] 
      }}
      whileHover={{ y: -5, scale: 1.02 }}
      onClick={() => navigate(`/character/${character.id}`)}
      className="group relative flex flex-col cursor-pointer mt-8"
    >
      {/* The Card Body with Chamfered Corner */}
      <div className="relative w-full aspect-[3/4.5] cyber-card-shape bg-white/5 border border-neon-yellow/30 group-hover:border-neon-yellow transition-all duration-300 overflow-hidden">
        
        {/* Character Image - Large and slightly popping */}
        <div className="absolute inset-0 top-[-10%] h-[110%] w-full">
          <motion.img
            src={character.imageUrl}
            alt={character.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            whileHover={{ scale: 1.05 }}
          />
        </div>

        {/* Bottom Overlay for Text */}
        <div className="absolute bottom-0 left-0 w-full p-4 pt-10 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
          <h3 className="text-2xl font-gaming font-black tracking-tighter text-white uppercase leading-none">
            {character.name}
          </h3>
          <p className="text-[10px] text-white/60 font-medium leading-tight mt-2 uppercase tracking-tight max-w-[85%] line-clamp-2">
            {character.skillDescription}
          </p>
        </div>

        {/* Skill Icon - Rotated Square (Diamond) */}
        <motion.div 
          className="absolute bottom-5 right-3 w-12 h-12 glass border-2 border-neon-yellow neon-glow-yellow z-10 rotate-45 flex items-center justify-center overflow-hidden"
          whileHover={{ scale: 1.1, rotate: 60 }}
        >
          <img 
            src={character.skillIconUrl} 
            alt={character.skillName}
            className="w-[140%] h-[140%] -rotate-45 object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Border Glow on Hover */}
        <div className="absolute inset-0 cyber-card-shape border-2 border-neon-yellow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>

      {/* Subtle Shadow/Glow behind */}
      <div className="absolute -inset-1 bg-neon-yellow/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
    </motion.div>
  );
}
