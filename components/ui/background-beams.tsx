"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function BackgroundBeams() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent opacity-30"
        style={{ y: y1 }}
      >
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </motion.div>
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/20 to-transparent blur-3xl"
        style={{ y: y2 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-500/20 to-transparent blur-3xl"
        style={{ y: y1 }}
      />
    </div>
  );
}
