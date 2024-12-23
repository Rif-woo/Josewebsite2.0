'use client'
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

export default function AnimatedHeaderText({ phrases }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const animation = {
    initial: { y: '150%' },
    animate: (i) => ({
      y: '0%',
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.05 * i,
      },
    }),
  };

  return (
    <div ref={containerRef} className="overflow-hidden flex flex-col gap-4">
      {phrases.map((phrase, index) => (
        <motion.p
          key={index}
          custom={index}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          variants={animation}
          className="text-2xl md:text-5xl lg:text-6xl text-white text-center tracking-wide font-medium will-change-transform"
        >
          {phrase}
        </motion.p>
      ))}
    </div>
  );
}
