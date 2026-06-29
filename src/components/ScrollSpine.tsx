"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollSpine() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const totalNodes = 12;

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center space-y-2.5 pointer-events-none select-none">
      {/* Helix Top Cap */}
      <span className="text-[7px] font-mono text-slate-650 uppercase tracking-widest origin-center -rotate-90 mb-2">
        DNA_SEQ
      </span>

      {/* Rotating DNA Double Helix Chain */}
      <div className="relative flex flex-col items-center space-y-3">
        {Array.from({ length: totalNodes }).map((_, index) => {
          const threshold = index / totalNodes;
          const isActive = scrollProgress >= threshold;
          
          // Apply a progressive rotational phase shift per node based on scroll
          const baseRotation = (index * 30) + (scrollProgress * 270);

          return (
            <motion.div
              key={index}
              className="relative w-7 h-3 flex items-center justify-between"
              style={{ rotate: baseRotation }}
            >
              {/* Left Strand Nucleotide */}
              <motion.div
                className={`w-2 h-2 rounded-full border transition-all duration-300 ${
                  isActive
                    ? "bg-brand-amber border-brand-amber shadow-[0_0_8px_#C58F2C]"
                    : "bg-slate-950 border-white/5"
                }`}
              />

              {/* Connecting Base Pair Hydrogen Bond */}
              <motion.div
                className={`flex-1 h-[1px] transition-colors duration-300 ${
                  isActive ? "bg-brand-amber/30" : "bg-white/5"
                }`}
              />

              {/* Right Strand Nucleotide */}
              <motion.div
                className={`w-2 h-2 rounded-full border transition-all duration-300 ${
                  isActive
                    ? "bg-brand-cyan border-brand-cyan shadow-[0_0_8px_#38BDF8]"
                    : "bg-slate-950 border-white/5"
                }`}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Helix Bottom Cap */}
      <div className="w-1.5 h-1.5 rounded-full bg-slate-900 border border-white/5 mt-3" />
      <span className="text-[7.5px] font-mono text-slate-500 font-bold mt-2">
        {Math.round(scrollProgress * 100)}%
      </span>
    </div>
  );
}
