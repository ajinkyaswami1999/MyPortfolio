"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollSpine() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const totalSegments = 14; // Number of vertebrae in the spine

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center space-y-1 pointer-events-none select-none">
      {/* Top Spine Tip */}
      <div className="w-1.5 h-1.5 rounded-full bg-slate-900 border border-white/5 mb-1" />

      {/* Spinal Segments */}
      {Array.from({ length: totalSegments }).map((_, index) => {
        const threshold = index / totalSegments;
        const isActive = scrollProgress >= threshold;

        return (
          <div key={index} className="relative flex items-center justify-center group">
            {/* Vertebra Core Disc */}
            <motion.div
              className={`w-3.5 h-2 rounded-sm transition-all duration-300 ${
                isActive
                  ? "bg-brand-amber shadow-[0_0_10px_#C58F2C] border-brand-amber"
                  : "bg-slate-950 border-white/5"
              } border`}
              animate={{
                scale: isActive ? 1.15 : 1,
              }}
            />

            {/* Vertebra Transverse Processes (lateral wing bones) */}
            <div className="absolute flex justify-between w-6 pointer-events-none">
              <motion.div
                className={`w-1 h-0.5 rounded-full transition-colors duration-300 ${
                  isActive ? "bg-brand-amber/80" : "bg-slate-900/60"
                }`}
              />
              <motion.div
                className={`w-1 h-0.5 rounded-full transition-colors duration-300 ${
                  isActive ? "bg-brand-amber/80" : "bg-slate-900/60"
                }`}
              />
            </div>
          </div>
        );
      })}

      {/* Bottom Spine Tip (Tail Bone) */}
      <div className="w-1.5 h-3 rounded-b-full bg-slate-900 border border-white/5 mt-1" />
      <span className="text-[7px] font-mono text-slate-600 uppercase tracking-widest mt-2 origin-center rotate-90 whitespace-nowrap">
        SPINE_POS: {Math.round(scrollProgress * 100)}%
      </span>
    </div>
  );
}
