"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Cpu, Camera, ShieldAlert, Sparkles } from "lucide-react";

export default function Hero() {
  // Typing animation configuration
  const phrases = [
    "Finding Bugs",
    "Building Ideas",
    "Creating with 3D Printing",
    "Solving Problems",
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const phrase = phrases[currentPhraseIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.substring(0, prev.length - 1));
        setTypingSpeed(40);
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
      setTypingSpeed(200);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIndex, typingSpeed]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 90, damping: 15 },
    },
  };

  // Scroll to About section
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
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Parallax Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#151515_1px,transparent_1px),linear-gradient(to_bottom,#151515_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-30" />
      
      {/* Moveable glow spots */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-orange/5 filter blur-[80px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-cyan/5 filter blur-[100px] pointer-events-none animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Content Column */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Top Tagline Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-brand-orange/5 border border-brand-orange/20 text-brand-orange text-[10px] font-mono tracking-widest uppercase mb-6 shadow-md shadow-brand-orange/5"
          >
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-orange"></span>
            </span>
            <span className="font-semibold text-slate-200">
              Crafted with Precision. Tested for Perfection.
            </span>
          </motion.div>

          {/* Large Animated Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display leading-none tracking-tight text-white mb-6 uppercase flex flex-col space-y-1.5"
          >
            <span>I Build.</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-orange via-white to-brand-cyan">
              I Test.
            </span>
            <span>I Create.</span>
          </motion.h1>

          {/* Static Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-slate-350 text-sm md:text-base font-semibold tracking-wide font-mono mb-4 text-slate-300"
          >
            QA Engineer <span className="text-brand-orange">•</span> Founder of Voxelique <span className="text-brand-cyan">•</span> Creator
          </motion.p>

          {/* Cycling Typing Animation */}
          <motion.div
            variants={itemVariants}
            className="h-8 font-mono text-xs md:text-sm text-slate-400 flex items-center space-x-1.5 mb-8"
          >
            <span className="text-slate-650 font-bold">&gt;_</span>
            <span className="text-brand-cyan font-bold">{displayedText}</span>
            <span className="inline-block w-1.5 h-4 bg-brand-cyan animate-pulse" />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
          >
            <a
              href="#about"
              onClick={handleScrollToAbout}
              className="flex items-center justify-center space-x-2 text-xs font-bold px-6 py-3.5 bg-gradient-to-r from-brand-orange to-brand-cyan text-white border border-brand-orange/30 rounded-xl transition-all shadow-lg active:scale-95 w-full sm:w-auto hover:brightness-110 cursor-pointer"
            >
              <span>Explore My Journey</span>
              <ArrowRight size={14} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Dashboard Column */}
        <motion.div
          className="lg:col-span-5 relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          {/* Industrial Workshop Style Console */}
          <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-2xl glass-panel border border-brand-orange/10 bg-[#0A0A0A]/95 p-5 shadow-2xl overflow-hidden flex flex-col justify-between group">
            {/* Matte metal highlight overlay */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent" />

            {/* Header controls bar */}
            <div className="flex justify-between items-center pb-3 border-b border-white/5">
              <div className="flex space-x-1.5 items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-orange/80 animate-pulse" />
                <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                <span className="text-[10px] font-mono text-slate-500 ml-2">creator_dashboard.sh</span>
              </div>
              <Terminal size={12} className="text-slate-500" />
            </div>

            {/* Simulated Live Systems Log Output */}
            <div className="flex-1 font-mono text-[9px] sm:text-[10px] text-left py-4 space-y-1.5 overflow-hidden select-none">
              <div className="text-slate-550">[SYSTEM] Launching multi-core process sequence...</div>
              
              <div className="flex justify-between items-center">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Cpu size={10} className="text-brand-cyan" /> QA_SUITE: Verify Payments API
                </span>
                <span className="text-brand-cyan font-bold">150/150 OK</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Sparkles size={10} className="text-brand-purple" /> 3D_PRINT: Extruder Temp Calib
                </span>
                <span className="text-emerald-400 font-bold">220°C [READY]</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Terminal size={10} className="text-brand-orange" /> JAWA_MOTO: Idle Exhaust PSI
                </span>
                <span className="text-brand-orange font-bold">OPTIMAL</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Camera size={10} className="text-brand-blue" /> PHOTO_DEV: Noise Reduction
                </span>
                <span className="text-slate-500 font-mono">100 ISO [RAW]</span>
              </div>

              <div className="text-slate-550 pt-1 border-t border-white/5">[INFO] All pipelines reconciled. Operating at full efficiency.</div>
            </div>

            {/* Diagnostics Stats Bar */}
            <div className="pt-3 border-t border-white/5 flex justify-between items-center text-[10px] font-mono">
              <div className="flex items-center space-x-1">
                <span className="text-brand-orange">●</span>
                <span className="text-slate-400">STATUS:</span>
                <span className="text-white font-bold uppercase tracking-wide">ACTIVE</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-slate-500">Stability:</span>
                <span className="text-brand-cyan font-bold">99.98%</span>
              </div>
            </div>

            {/* Glowing Tech Overlays for Cyberpunk Vibe */}
            <div className="absolute top-1/4 -right-12 px-3.5 py-2 bg-[#121212]/90 border border-brand-orange/20 rounded-xl backdrop-blur-md flex items-center space-x-2 shadow-lg shadow-brand-orange/5 group-hover:-translate-x-1.5 transition-transform duration-300">
              <span className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-ping" />
              <span className="text-[9px] font-mono text-slate-300">Jawa Ride Ready</span>
            </div>

            <div className="absolute bottom-1/3 -left-12 px-3.5 py-2 bg-[#121212]/90 border border-brand-cyan/20 rounded-xl backdrop-blur-md flex items-center space-x-1.5 shadow-lg shadow-brand-cyan/5 group-hover:translate-x-1.5 transition-transform duration-300">
              <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" />
              <span className="text-[9px] font-mono text-slate-300">Extruder Calibrated</span>
            </div>
          </div>

          {/* Radial Backdrop Glow */}
          <div className="absolute w-72 h-72 bg-brand-orange/5 rounded-full filter blur-3xl z-0 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
