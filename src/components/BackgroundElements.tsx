import { motion } from 'motion/react';
import { useMemo } from 'react';

export default function BackgroundElements() {
  const shapes = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: Math.random() * 100 + 20,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.05 + 0.02,
      rotation: Math.random() * 360
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          initial={{ 
            x: `${shape.x}%`, 
            y: `${shape.y}%`, 
            opacity: 0,
            rotate: shape.rotation 
          }}
          animate={{ 
            y: [`${shape.y}%`, `${(shape.y + 10) % 100}%`, `${shape.y}%`],
            opacity: [shape.opacity, shape.opacity * 1.5, shape.opacity],
            rotate: shape.rotation + 360
          }}
          transition={{ 
            duration: shape.duration, 
            repeat: Infinity, 
            ease: "linear",
            delay: shape.delay
          }}
          style={{
            width: shape.size,
            height: shape.size,
            border: '1px solid rgba(255, 186, 0, 0.3)',
            position: 'absolute'
          }}
        />
      ))}
      
      {/* Additional abstract lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-0 w-full h-px bg-neon-yellow rotate-[-5deg]" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-neon-yellow rotate-[5deg]" />
        <div className="absolute left-1/4 top-0 w-px h-full bg-neon-yellow rotate-[-5deg]" />
        <div className="absolute left-3/4 top-0 w-px h-full bg-neon-yellow rotate-[5deg]" />
      </div>
    </div>
  );
}
