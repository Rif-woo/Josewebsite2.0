"use client";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

export function MaskVideo({ children }) {
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "-75%" });

  const animation = {
    initial: { opacity: 1, y: 150, x:0 },
    enter: (i) => ({
      opacity: 1,
      y: 0,
      x:0,
      transition: {
        duration: 0.80,
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
