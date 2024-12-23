'use client';

import { motion } from 'framer-motion';

export default function AnimatedHeaderText({ phrases }) {
  const animation = {
    initial: { y: '200%' }, // Texte commence hors de la vue
    animate: (i) => ({
      y: '0%', // Texte entre dans la vue
      transition: {
        duration: 0.80, // Durée de l'animation
        ease: [0.33, 1, 0.68, 1], // Courbe d'animation
        delay: 0.075 * i, // Décalage progressif
      },
    }),
  };

  return (
    <div className="overflow-hidden flex flex-col gap-2 ">
      {phrases.map((phrase, index) => (
        <motion.p
          key={index}
          custom={index}
          initial="initial"
          animate="animate"
          variants={animation}
          className="will-change-transform text-2xl  text-center md:text-5xl lg:text-8xl text-white tracking-wide xl:max-[1515px]:text-6xl lg:w-full font-normal z-10" // Optimisation CSS
        >
          {phrase}
        </motion.p>
      ))}
    </div>
  );
}
