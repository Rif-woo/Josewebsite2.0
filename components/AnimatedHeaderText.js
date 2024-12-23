'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function AnimatedHeaderText({ phrases }) {
  const [isMobile, setIsMobile] = useState(false);

  // Vérifie si l'appareil est mobile une fois que le composant est monté
  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Définit si la largeur de l'écran est < 768px
    };

    updateIsMobile(); // Calcul initial
    window.addEventListener('resize', updateIsMobile); // Met à jour lors des redimensionnements

    return () => window.removeEventListener('resize', updateIsMobile); // Nettoyage
  }, []);

  const animation = {
    initial: { y: '150%' }, // Distance verticale réduite
    animate: (i) => ({
      y: '0%', // Le texte revient dans la vue
      transition: {
        duration: isMobile ? 0.4 : 0.6, // Plus rapide sur mobile
        ease: [0.33, 1, 0.68, 1],
        delay: 0.05 * i, // Décalage progressif
      },
    }),
  };

  return (
    <div className="overflow-hidden flex flex-col gap-4">
      {phrases.map((phrase, index) => (
        <motion.p
          key={index}
          custom={index}
          initial="initial"
          animate="animate"
          variants={animation}
          className="text-2xl md:text-5xl lg:text-6xl text-white text-center tracking-wide font-medium will-change-transform"
        >
          {phrase}
        </motion.p>
      ))}
    </div>
  );
}
