"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, AlertTriangle, ShieldCheck, Terminal } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Typing animation loops
  const phrases = [
    "Finding Bugs",
    "Building Products",
    "Creating with 3D Printing",
    "Engineering Useful Tools",
    "Solving Problems",
    "Engineering Experiences",
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const phrase = phrases[currentPhraseIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.substring(0, prev.length - 1));
        setTypingSpeed(45);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayedText((prev) => phrase.substring(0, prev.length + 1));
        setTypingSpeed(90);
      }, typingSpeed);
    }

    if (!isDeleting && displayedText === phrase) {
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      setTypingSpeed(180);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIndex, typingSpeed]);

  // Parallax offsets based on cursor movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      const xOffset = (clientX / width) - 0.5;
      const yOffset = (clientY / height) - 0.5;
      
      mouseX.set(xOffset);
      mouseY.set(yOffset);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Transforms for parallax layers
  const gateX = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  const gateY = useTransform(mouseY, [-0.5, 0.5], [-15, 15]);
  const leafX = useTransform(mouseX, [-0.5, 0.5], [-35, 35]);
  const leafY = useTransform(mouseY, [-0.5, 0.5], [-35, 35]);
  const textX = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);
  const textY = useTransform(mouseY, [-0.5, 0.5], [-6, 6]);

  const handleEnterFacility = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("about");
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-[#0A0A0A] metal-brushed"
    >
      {/* Jungle Green and Volcanic Orange backdrops */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#131313_1px,transparent_1px),linear-gradient(to_bottom,#131313_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-20" />
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] rounded-full bg-jungle-green/5 filter blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] rounded-full bg-volcanic-orange/5 filter blur-[110px] pointer-events-none z-0 animate-pulse-slow" />

      {/* Massive Prehistoric Facility Gates Silhouette (Parallax layer) */}
      <motion.div
        style={{ x: gateX, y: gateY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.045] select-none"
      >
        <svg viewBox="0 0 800 600" className="w-full max-w-[800px] fill-[#F3F0E8] stroke-[#F3F0E8] stroke-[2]">
          {/* Heavy double research doors */}
          <rect x="250" y="100" width="145" height="400" />
          <rect x="405" y="100" width="145" height="400" />
          {/* Top facility warning headers */}
          <path d="M 200,100 L 600,100 L 550,50 L 250,50 Z" />
          <line x1="250" y1="200" x2="395" y2="200" strokeWidth="8" />
          <line x1="410" y1="200" x2="550" y2="200" strokeWidth="8" />
        </svg>
      </motion.div>

      {/* Moving Leaves & Volcanic Embers (Parallax layer) */}
      <motion.div
        style={{ x: leafX, y: leafY }}
        className="absolute inset-0 pointer-events-none z-1"
      >
        {/* Leaf 1 */}
        <div className="absolute top-1/3 left-10 w-4 h-3 bg-jungle-green/20 rounded-full rotate-45 animate-bounce" style={{ animationDuration: "10s" }} />
        {/* Ember 1 */}
        <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-volcanic-orange/40 rounded-full shadow-[0_0_8px_#EA580C] animate-bounce" style={{ animationDuration: "8s" }} />
        {/* Leaf 2 */}
        <div className="absolute top-1/4 right-1/3 w-3 h-2.5 bg-jungle-green/15 rounded-full -rotate-12 animate-bounce" style={{ animationDuration: "13s" }} />
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column - Cinematic Headings */}
        <motion.div
          style={{ x: textX, y: textY }}
          className="lg:col-span-7 flex flex-col items-start text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Top Tagline Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-amber/5 border border-brand-amber/20 text-[#F3F0E8] text-[9px] font-mono tracking-widest uppercase mb-8 shadow-lg shadow-black/50">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-amber opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-amber"></span>
            </span>
            <span className="font-bold">DNA SPECIMEN CLASSIFICATION: ONGOING</span>
          </div>

          {/* Headline block */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black font-display leading-[0.95] tracking-tight text-white mb-6 uppercase flex flex-col space-y-1">
            <span className="text-glow-amber text-[#F3F0E8]">EVOLUTION</span>
            <span className="text-glow-orange text-volcanic-orange">NEVER STOPS.</span>
          </h1>

          <div className="flex flex-col space-y-1.5 text-xs sm:text-sm font-mono tracking-widest text-slate-350 uppercase font-semibold mb-6">
            <div>✓ I Build.</div>
            <div>✓ I Test.</div>
            <div>✓ I Create.</div>
          </div>

          <p className="text-slate-400 text-xs font-mono mb-4">
            QA Engineer <span className="text-brand-amber">•</span> Founder of Voxelique <span className="text-brand-cyan">•</span> Creator of Toolique
          </p>

          {/* Typing Animation logs */}
          <div className="h-8 font-mono text-xs text-slate-400 flex items-center space-x-2.5 mb-10 bg-slate-950/60 px-3.5 py-2 border border-white/5 rounded-xl">
            <span className="text-slate-650 font-bold">&gt;_ TERMINAL:</span>
            <span className="text-brand-amber font-bold">{displayedText}</span>
            <span className="inline-block w-1.5 h-4 bg-brand-amber animate-pulse" />
          </div>

          {/* CTA Link */}
          <a
            href="#about"
            onClick={handleEnterFacility}
            className="flex items-center justify-center space-x-2 text-xs font-mono uppercase tracking-widest font-bold px-8 py-4 bg-slate-950 hover:bg-[#111] text-white border border-brand-amber/35 hover:border-brand-amber rounded-xl transition-all shadow-xl active:scale-95 group"
          >
            <span>Enter the Facility</span>
            <ArrowRight size={14} className="text-brand-amber group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Right Column - Facility Station Control Console */}
        <motion.div
          className="lg:col-span-5 relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="relative w-full max-w-[400px] aspect-[4/3] rounded-2xl glass-panel border border-brand-amber/15 bg-[#111]/90 p-5 shadow-2xl overflow-hidden flex flex-col justify-between group">
            {/* Top Amber Status Light bar */}
            <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-brand-amber/30 to-transparent" />

            <div className="flex justify-between items-center pb-3 border-b border-white/5">
              <div className="flex space-x-1.5 items-center">
                <span className="w-2 h-2 rounded-full bg-brand-amber animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-jungle-green/80" />
                <span className="w-2 h-2 rounded-full bg-slate-800" />
                <span className="text-[10px] font-mono text-slate-500 ml-2">facility_gate_control.sh</span>
              </div>
              <AlertTriangle size={12} className="text-slate-500 animate-bounce" />
            </div>

            {/* Spec logs detailing DNA Evolution & Station calibration */}
            <div className="flex-1 font-mono text-[9.5px] text-left py-4 space-y-2 overflow-hidden select-none">
              <div className="text-slate-550">[STATION] System diagnostics online...</div>
              
              <div className="flex justify-between items-center">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck size={10} className="text-brand-cyan" /> QA_ENGINE: Ledger Checks
                </span>
                <span className="text-brand-cyan font-bold">100% RECONCILED</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Terminal size={10} className="text-brand-amber" /> VOXEL_3D: Slice Clearance
                </span>
                <span className="text-brand-amber font-bold">0.12mm FINE [OK]</span>
              </div>

              <div className="flex justify-between items-center font-mono">
                <span className="text-slate-400">🧬 SUBJECT: AJINKYA SWAMI</span>
                <span className="text-slate-200">STAGE: SENIOR_QA</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-400">🏍 MOTO_CALIB: Jawa Exhaust</span>
                <span className="text-volcanic-orange font-bold font-mono">OPTIMAL</span>
              </div>

              <div className="text-slate-600 border-t border-white/5 pt-1.5">
                STATUS: Outer gate closed. Grid fences active.
              </div>
            </div>

            {/* Footer metrics */}
            <div className="pt-3 border-t border-white/5 flex justify-between items-center text-[10px] font-mono">
              <div className="flex items-center space-x-1.5">
                <span className="text-brand-amber">●</span>
                <span className="text-slate-400">GATEWAY:</span>
                <span className="text-[#F3F0E8] font-bold">SECURED</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-slate-500">Security:</span>
                <span className="text-jungle-green font-bold">GRID_ON</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
