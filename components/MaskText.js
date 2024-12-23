"use client";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";

// Composant MaskText pour animer chaque ligne séparément
export function MaskText({ phrases }) {
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "-5%" });

  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0%",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  return (
    <div ref={body} className="overflow-hidden">
      {phrases.map((phrase, index) => (
        <div key={index} className="overflow-hidden">
          <motion.p
            custom={index}
            variants={animation}
            initial="initial"
            animate={isInView ? "enter" : ""}
            className="text-gray-700 text-lg md:text-2xl min-[768px]:max-[1280px]:text-xl xl:max-[1515px]:text-base leading-loose pb-2"
          >
            {phrase}
          </motion.p>
        </div>
      ))}
    </div>
  );
}