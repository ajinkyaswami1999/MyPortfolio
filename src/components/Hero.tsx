"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, AlertTriangle, ShieldCheck } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Typing animation loops
  const phrases = [
    "Finding Bugs",
    "Building Products",
    "Creating with 3D Printing",
    "Building Useful Tools",
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
      
      // Calculate normal offset range -0.5 to 0.5
      const xOffset = (clientX / width) - 0.5;
      const yOffset = (clientY / height) - 0.5;
      
      mouseX.set(xOffset);
      mouseY.set(yOffset);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Transforms for different layers to create depth
  const skeletonX = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);
  const skeletonY = useTransform(mouseY, [-0.5, 0.5], [-20, 20]);
  const dustX = useTransform(mouseX, [-0.5, 0.5], [-40, 40]);
  const dustY = useTransform(mouseY, [-0.5, 0.5], [-40, 40]);
  const textX = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);
  const textY = useTransform(mouseY, [-0.5, 0.5], [-8, 8]);

  const handleScrollToAbout = (e: React.MouseEvent) => {
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
      {/* 3D Lab build grid backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#151515_1px,transparent_1px),linear-gradient(to_bottom,#151515_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] pointer-events-none opacity-25" />

      {/* Volumetric Fog Auroras */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-brand-amber/5 filter blur-[110px] pointer-events-none animate-pulse-slow z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-cyan/5 filter blur-[100px] pointer-events-none animate-pulse-slow z-0" style={{ animationDelay: "3s" }} />

      {/* Low-opacity dinosaur skeleton silhouette (Parallax layer) */}
      <motion.div
        style={{ x: skeletonX, y: skeletonY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.035] select-none"
      >
        <svg viewBox="0 0 600 600" className="w-full max-w-[650px] fill-brand-amber">
          <path d="M500 250c-20 0-45 10-60 25-10-30-35-50-65-50h-35v-20h-15v20h-30c-30 0-55 25-55 55v15h-45c-15 0-25 10-25 25v15h-15v15h-15v30h-15v30h-15v60h15c15 0 25-10 25-25v-15h15v-15h15v-15h45v30h15c30 0 55-25 55-55v-15h35c30 0 55-25 60-50 15 15 40 25 60 25h15v-15h-15zM220 320c0-10 10-20 20-20s20 10 20 20-10 20-20 20-20-10-20-20z" />
        </svg>
      </motion.div>

      {/* Subtle Claw-Mark Texture overlay */}
      <div className="absolute top-1/3 right-10 w-36 h-36 opacity-[0.04] pointer-events-none z-0 select-none">
        <svg viewBox="0 0 100 100" className="fill-brand-amber">
          <path d="M10 10 C 20 40, 25 70, 30 90 M40 10 C 50 45, 52 72, 55 90 M70 15 C 75 48, 76 75, 78 92" stroke="#C58F2C" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      {/* Floating fossil dust particles & rock fragments (Parallax layer) */}
      <motion.div
        style={{ x: dustX, y: dustY }}
        className="absolute inset-0 pointer-events-none z-1"
      >
        <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-brand-amber/40 rounded-full filter blur-[0.5px] animate-bounce" style={{ animationDuration: "9s" }} />
        <div className="absolute top-1/2 right-1/4 w-2 h-1 bg-brand-amber/35 rounded-sm rotate-45 animate-bounce" style={{ animationDuration: "12s" }} />
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-brand-amber/30 rounded-full animate-bounce" style={{ animationDuration: "7s" }} />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1 bg-brand-cyan/20 rounded-full animate-bounce" style={{ animationDuration: "14s" }} />
      </motion.div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column - Large Typography */}
        <motion.div
          style={{ x: textX, y: textY }}
          className="lg:col-span-7 flex flex-col items-start text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Tagline Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-brand-amber/5 border border-brand-amber/20 text-brand-amber text-[10px] font-mono tracking-widest uppercase mb-8">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-amber opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-amber"></span>
            </span>
            <span className="font-bold">EVOLUTION NEVER STOPS. NEITHER DO I.</span>
          </div>

          {/* Large Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black font-display leading-[0.9] tracking-tight text-white mb-6 uppercase flex flex-col space-y-1">
            <span className="text-glow-amber text-[#F3F0E8]">Evolve.</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-amber via-brand-orange to-brand-cyan">
              Build.
            </span>
            <span>Test.</span>
            <span className="text-slate-300">Create.</span>
          </h1>

          {/* Technical Subtitle */}
          <p className="text-slate-350 text-xs md:text-sm font-semibold tracking-wide font-mono mb-4 text-slate-300">
            QA Engineer <span className="text-brand-amber">•</span> Founder of Voxelique <span className="text-brand-cyan">•</span> Creator of Toolique
          </p>

          {/* Technical typing loop log */}
          <div className="h-8 font-mono text-xs md:text-sm text-slate-400 flex items-center space-x-2 mb-10 bg-slate-950/40 px-3 py-1.5 border border-white/5 rounded-lg">
            <span className="text-slate-500 font-bold">&gt;_ LAB_EXEC:</span>
            <span className="text-brand-amber font-bold">{displayedText}</span>
            <span className="inline-block w-1.5 h-4 bg-brand-amber animate-pulse" />
          </div>

          {/* CTA Link */}
          <a
            href="#about"
            onClick={handleScrollToAbout}
            className="flex items-center justify-center space-x-2 text-xs font-mono uppercase tracking-wider font-bold px-7 py-4 bg-[#111111] text-white border border-brand-amber/30 hover:border-brand-amber rounded-xl transition-all shadow-xl hover:bg-brand-amber/5 active:scale-95 group"
          >
            <span>Explore My Journey</span>
            <ArrowRight size={14} className="text-brand-amber group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Right Column - Lab Chamber Mock Diagnostic Widget */}
        <motion.div
          className="lg:col-span-5 relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="relative w-full max-w-[400px] aspect-[4/3] rounded-2xl glass-panel border border-brand-amber/15 bg-[#111111]/90 p-5 shadow-2xl overflow-hidden flex flex-col justify-between group">
            {/* Top orange status light */}
            <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-brand-amber/30 to-transparent" />

            <div className="flex justify-between items-center pb-3 border-b border-white/5">
              <div className="flex space-x-1.5 items-center">
                <span className="w-2 h-2 rounded-full bg-brand-amber/80 animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-brand-cyan/80" />
                <span className="w-2 h-2 rounded-full bg-slate-800" />
                <span className="text-[10px] font-mono text-slate-500 ml-2">lab_containment_status.sh</span>
              </div>
              <AlertTriangle size={12} className="text-slate-500 animate-bounce" />
            </div>

            {/* Spec logs representing dinosaur DNA evolution & automation parameters */}
            <div className="flex-1 font-mono text-[9.5px] text-left py-4 space-y-2 overflow-hidden select-none">
              <div className="text-slate-550">[PROCESS] Sequences loaded successfully...</div>
              
              <div className="flex justify-between items-center">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck size={10} className="text-brand-cyan" /> QA_ENGINE: API Ledger Audit
                </span>
                <span className="text-brand-cyan font-bold">100% COVERAGE</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Sparkles size={10} className="text-brand-amber" /> VOXEL_3D: Infill Calibrator
                </span>
                <span className="text-brand-amber font-bold">GYROID [OK]</span>
              </div>

              <div className="flex justify-between items-center font-mono">
                <span className="text-slate-400">🧬 DNA_EVOLVE: Archaeopteryx Gen</span>
                <span className="text-slate-400">FIT: 99.87%</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-400">🏍 MOTO_DRIVE: Exhaust Flow</span>
                <span className="text-brand-orange font-bold font-mono">OPTIMAL</span>
              </div>

              <div className="text-slate-600 border-t border-white/5 pt-1.5">
                STATUS: Containment field at 100% capacity. No DNA variance.
              </div>
            </div>

            {/* Footer metrics */}
            <div className="pt-3 border-t border-white/5 flex justify-between items-center text-[10px] font-mono">
              <div className="flex items-center space-x-1.5">
                <span className="text-brand-amber">●</span>
                <span className="text-slate-400">SYSTEM:</span>
                <span className="text-[#F3F0E8] font-bold">EVOLUTIONARY</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-slate-500">Stability:</span>
                <span className="text-brand-cyan font-bold">PASS</span>
              </div>
            </div>

            {/* Float-out tags */}
            <div className="absolute top-1/3 -right-10 px-3 py-1.5 bg-[#1C1C1C] border border-brand-amber/20 rounded-lg backdrop-blur-md flex items-center space-x-1.5 shadow-lg group-hover:-translate-x-2 transition-transform duration-300">
              <span className="w-1.5 h-1.5 bg-brand-amber rounded-full animate-ping" />
              <span className="text-[9px] font-mono text-slate-350">Lab Safe</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
