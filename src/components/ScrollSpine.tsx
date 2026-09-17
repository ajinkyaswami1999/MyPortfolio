"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollSpine() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const totalNodes = 10;

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = Math.min(1, Math.max(0, window.scrollY / totalHeight));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const percentage = Math.round(scrollProgress * 100);

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center space-y-2 pointer-events-none select-none font-mono">
      {/* Scouter Power Level Gauge Header */}
      <span className="text-[7.5px] font-bold text-amber-700 uppercase tracking-widest origin-center mb-1 drop-shadow-[0_1px_2px_rgba(245,158,11,0.3)]">
        SCOUTER // 戦闘力
      </span>

      {/* Numerical Power Level Readout */}
      <span className="text-[8px] font-black text-slate-800 mb-1">
        {percentage > 90 ? "OVER 9000" : `${percentage}%`}
      </span>

      {/* Segmented Power Rail Bar Nodes */}
      <div className="relative flex flex-col items-center space-y-1.5 p-1 bg-white/90 border border-amber-200/80 rounded-full backdrop-blur-md shadow-md shadow-amber-500/10">
        {Array.from({ length: totalNodes }).map((_, index) => {
          const threshold = index / (totalNodes - 1);
          const isActive = scrollProgress >= threshold - 0.05;

          return (
            <motion.div
              key={index}
              className={`w-2.5 h-1.5 rounded-xs transition-all duration-200 ${
                isActive
                  ? index > 7
                    ? "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]"
                    : "bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)]"
                  : "bg-slate-200/80 border border-slate-300/50"
              }`}
            />
          );
        })}
      </div>

      {/* Bottom Core Label */}
      <span className="text-[7px] text-slate-500 font-bold uppercase mt-1">
        S-CLASS // S級
      </span>
    </div>
  );
}
