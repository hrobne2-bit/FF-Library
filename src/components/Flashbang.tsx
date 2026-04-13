import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

export default function Flashbang() {
  const { theme } = useTheme();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (theme === 'light') {
      setShow(true);
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');
      audio.volume = 0.5;
      audio.play().catch(e => console.log('Audio play failed:', e));
      
      const timer = setTimeout(() => {
        setShow(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [theme]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] bg-white pointer-events-none"
        />
      )}
    </AnimatePresence>
  );
}
