"use client";

import { useRef, useState, useEffect } from "react";
import { useInView, motion } from "framer-motion";

export function MaskVideo({ children }) {
  const body = useRef(null);
  const [margin, setMargin] = useState("-75%"); // Valeur par défaut pour SSR

  // Détermine la marge uniquement côté client
  useEffect(() => {
    const updateMargin = () => {
      setMargin(window.innerWidth < 768 ? "-50%" : "-75%");
    };

    updateMargin(); // Calcul initial
    window.addEventListener("resize", updateMargin); // Met à jour lors des redimensionnements

    return () => window.removeEventListener("resize", updateMargin); // Nettoyage
  }, []);

  const isInView = useInView(body, {
    once: true,
    margin, // Utilisation de l'état dynamique
  });

  const animation = {
    initial: { opacity: 0, y: 150 },
    enter: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.3 * i,
      },
    }),
  };

  return (
    <div ref={body} className="w-full flex flex-col md:flex-row items-center justify-center gap-6">
      {children.map((child, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={animation}
          initial="initial"
          animate={isInView ? "enter" : ""}
          className="w-full md:w-auto"
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
