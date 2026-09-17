"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, AlertTriangle, ShieldCheck, Terminal, Maximize2, Activity, Shield, Cpu, RefreshCw } from "lucide-react";
import CornerCrosshairs from "./CornerCrosshairs";
import DecodeText from "./DecodeText";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Parallax offsets based on cursor movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Interactive Scouter Power Scanner State
  const [scouterActive, setScouterActive] = useState(false);
  const [scouterReading, setScouterReading] = useState("OVER 9000!!");
  const [isScanning, setIsScanning] = useState(false);

  const triggerScouterScan = () => {
    if (isScanning) return;
    setIsScanning(true);
    setScouterActive(true);
    
    let current = 1000;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 950) + 450;
      if (current >= 9000) {
        clearInterval(interval);
        setScouterReading("OVER 9000!!");
        setIsScanning(false);
      } else {
        setScouterReading(current.toString().padStart(4, "0"));
      }
    }, 120);
  };

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
  const gateX = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
  const gateY = useTransform(mouseY, [-0.5, 0.5], [-10, 10]);
  const textX = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);
  const textY = useTransform(mouseY, [-0.5, 0.5], [-5, 5]);

  const handleEnterFacility = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("about");
    if (el) {
      const offset = 80;
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

  const handleViewProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) {
      const offset = 80;
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
      className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-[#FAF9F6] font-mono text-slate-800"
    >
      {/* Background Matrix/Grid & Pastel Ki Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284C712_1px,transparent_1px),linear-gradient(to_bottom,#0284C712_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none opacity-50" />
      
      {/* Volumetric ambient pastel background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-amber-200/35 filter blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-rose-200/30 filter blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky-200/30 filter blur-[160px] pointer-events-none z-0" />

      {/* Scouter HUD blueprint overlay in the background */}
      <motion.div
        style={{ x: gateX, y: gateY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.08] select-none"
      >
        <svg aria-hidden="true" viewBox="0 0 1000 700" className="w-full max-w-[900px] stroke-amber-500 stroke-[1.5] fill-none">
          <circle cx="500" cy="350" r="320" strokeDasharray="6,6" />
          <circle cx="500" cy="350" r="180" />
          <circle cx="500" cy="350" r="60" strokeDasharray="3,3" />
          <line x1="500" y1="30" x2="500" y2="670" />
          <line x1="130" y1="350" x2="870" y2="350" />
          <polygon points="500,200 630,425 370,425" strokeDasharray="4,4" />
        </svg>
      </motion.div>

      {/* Laser-scanner sweep animation line (Golden Ki frequency) */}
      <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent z-20 pointer-events-none animate-[scannerSweep_7s_linear_infinite]" />
      <style jsx>{`
        @keyframes scannerSweep {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
      `}</style>

      {/* Grid container layout */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch min-h-[calc(100vh-12rem)]">
        
        {/* Left Side Panel - One Punch Man: HERO ASSOCIATION S-CLASS LICENSE (3 cols) */}
        <motion.div
          className="hidden xl:flex xl:col-span-3 border-2 border-amber-300/80 bg-white/90 backdrop-blur-xl p-6 rounded-3xl flex-col justify-between relative text-left shadow-xl shadow-amber-500/10 overflow-hidden"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <CornerCrosshairs colorClass="text-amber-500/70" />
          
          {/* Subtle manga halftone pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#F59E0B15_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none" />

          {/* Red Hero Association Seal Stamp Watermark in Background */}
          <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full border-4 border-rose-500/15 flex items-center justify-center rotate-12 pointer-events-none select-none">
            <span className="font-black text-rose-500/20 text-xs font-mono tracking-widest text-center leading-tight">
              HERO ASSOC.<br />公認<br />CLASS S
            </span>
          </div>
          
          <div className="space-y-5 relative z-10">
            {/* Official Card Header */}
            <div className="border-b border-amber-200/80 pb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-[8.5px] font-mono tracking-widest text-amber-900 font-bold uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>HERO ASSOCIATION // ヒーロー協会</span>
                </div>
                <span className="text-[8px] font-mono px-2 py-0.5 rounded-full bg-rose-500 text-white font-black shadow-xs">
                  S-CLASS #1
                </span>
              </div>
              <h3 className="text-lg font-black text-slate-900 tracking-tight">AJINKYA SWAMI</h3>
              <p className="text-[10px] text-amber-800 font-mono font-bold">HERO NAME: LIMITLESS QA // 無限品質保証</p>
            </div>
            
            {/* Hero Association Card Specs */}
            <div className="space-y-3 font-mono">
              {[
                { label: "Hero Registry ID", val: "HA-9901-QA // OFFICIAL", color: "text-slate-900 font-black" },
                { label: "Disaster Threat Neutralized", val: "LEVEL: DRAGON & GOD (竜・神)", color: "text-rose-600 font-black" },
                { label: "Combat Special Move", val: "SERIOUS PUNCH QA // 必殺マジシリーズ", color: "text-amber-800 font-bold" },
                { label: "Battle Record", val: "10,000+ EXECUTIONS // 0 DEVIATION", color: "text-emerald-700 font-bold" },
                { label: "Capsule Tech Rig", val: "WEST CITY 100G GRAVITY RIG", color: "text-sky-700 font-bold" },
              ].map((item, idx) => (
                <div key={idx} className="text-xs">
                  <span className="text-[8.5px] text-slate-500 uppercase tracking-widest block mb-0.5 font-bold">{item.label}</span>
                  <span className={`block text-[11px] leading-tight ${item.color}`}>{item.val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-amber-200/80 flex items-center justify-between text-[10px] relative z-10 font-mono">
            <span className="text-slate-500 font-bold">REGISTRATION:</span>
            <span className="text-emerald-700 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" /> CERTIFIED // 現役出動中
            </span>
          </div>
        </motion.div>

        {/* Center Column - Cinematic Anime Headline & Interactive Scouter (6 cols) */}
        <motion.div
          style={{ x: textX, y: textY }}
          className="col-span-12 xl:col-span-6 flex flex-col items-center justify-center text-center px-2 sm:px-4 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Floating Manga Sound Effect Badges */}
          <div className="hidden sm:flex absolute -top-4 -left-6 px-2.5 py-1 bg-amber-100 border border-amber-300 rounded-lg text-[10px] font-black font-display text-amber-900 rotate-[-8deg] shadow-xs select-none pointer-events-none">
            ゴゴゴ... (GOGOGO / KI RUMBLE)
          </div>
          <div className="hidden sm:flex absolute -top-4 -right-6 px-2.5 py-1 bg-rose-100 border border-rose-300 rounded-lg text-[10px] font-black font-display text-rose-900 rotate-[8deg] shadow-xs select-none pointer-events-none">
            ドカーン！ (DOKAAN / SERIOUS HIT)
          </div>

          {/* Interactive Dragon Ball Scouter HUD Viewfinder Module */}
          <div className="w-full max-w-md mb-6 p-4 rounded-2xl border-2 border-emerald-400/80 bg-emerald-50/70 backdrop-blur-md shadow-md text-left relative overflow-hidden">
            {/* Scouter Green Grid Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#05966915_1px,transparent_1px),linear-gradient(to_bottom,#05966915_1px,transparent_1px)] bg-[size:1.2rem_1.2rem] pointer-events-none" />
            
            {/* Scouter Corner Bracket Accents */}
            <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-emerald-600" />
            <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-emerald-600" />
            <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-emerald-600" />
            <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-emerald-600" />

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 relative z-10 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                <span className="text-[10px] font-mono font-black tracking-widest text-emerald-950 uppercase">
                  SCOUTER HUD: TARGET LOCKED // スカウター
                </span>
              </div>
              
              <button
                onClick={triggerScouterScan}
                disabled={isScanning}
                className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[9px] font-mono font-bold tracking-wider uppercase transition-all active:scale-95 shadow-xs cursor-pointer select-none"
              >
                {isScanning ? "ピピピ... SCANNING" : "SCAN POWER // 測定"}
              </button>
            </div>

            <div className="flex items-baseline justify-between relative z-10 font-mono">
              <span className="text-[11px] font-bold text-emerald-900">
                戦闘力 // POWER LEVEL:
              </span>
              <span className="text-xl sm:text-2xl font-black text-emerald-950 tracking-wider">
                {scouterReading}
              </span>
            </div>

            {scouterActive && (
              <div className="mt-2 pt-2 border-t border-emerald-300/80 flex items-center justify-between text-[9.5px] font-mono text-emerald-800 relative z-10">
                <span>「9000以上だ…！故障か？！」</span>
                <span className="font-bold text-rose-700">⚡ OVER 9000 CONFIRMED</span>
              </div>
            )}
          </div>

          {/* Large cinematic anime title (DBZ & OPM inspired) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display leading-[0.92] tracking-tighter text-slate-900 mb-6 uppercase flex flex-col items-center">
            <span className="text-slate-900 drop-shadow-[0_4px_16px_rgba(245,158,11,0.2)]">
              LIMITLESS
            </span>
            <span className="text-rose-600 drop-shadow-[0_4px_20px_rgba(244,63,94,0.25)]">
              POWER
            </span>
            <span className="text-slate-950">
              ZERO DEFECTS.
            </span>
          </h1>

          {/* Japanese Micro-Subtitle with Serious Series Badges */}
          <div className="inline-flex items-center space-x-2 text-[10px] md:text-[11px] font-mono text-amber-900 tracking-[0.2em] uppercase mb-4 font-black bg-amber-100/80 px-3 py-1 rounded-full border border-amber-300/80 shadow-xs">
            <span>限界突破</span>
            <span>•</span>
            <span>必殺マジシリーズ // SERIOUS TESTING SERIES</span>
          </div>

          {/* Core Declarations */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[10px] md:text-xs font-mono font-bold text-slate-700 uppercase tracking-widest mb-6">
            <span className="hover:text-amber-700 transition-colors">I BUILD</span>
            <span className="text-rose-500">•</span>
            <span className="hover:text-amber-700 transition-colors">I TEST</span>
            <span className="text-rose-500">•</span>
            <span className="hover:text-amber-700 transition-colors">I AUTOMATE</span>
            <span className="text-rose-500">•</span>
            <span className="hover:text-amber-700 transition-colors">I BREAK LIMITS</span>
          </div>

          {/* Subtitle */}
          <p className="text-slate-600 text-xs sm:text-sm max-w-md leading-relaxed mb-8 font-sans font-medium">
            Senior QA Engineer • Automation Architect • Founder of Toolique & Voxelique • 10k+ TPS UPI Systems • S-Class Reliability
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm justify-center">
            <a
              href="#about"
              onClick={handleEnterFacility}
              className="chamfer-corner border border-amber-400 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-slate-950 font-black py-3.5 px-6 text-xs tracking-wider uppercase text-center transition-all duration-300 block select-none cursor-pointer shadow-md active:scale-95"
            >
              <span>INITIALIZE HERO DOSSIER // 人物</span>
            </a>
            <a
              href="#projects"
              onClick={handleViewProjects}
              className="chamfer-corner border border-sky-300 hover:border-sky-400 bg-sky-50 hover:bg-sky-100 text-sky-950 font-bold py-3.5 px-6 text-xs tracking-wider uppercase text-center transition-all duration-300 block select-none cursor-pointer shadow-xs active:scale-95"
            >
              <span>ACCESS S-CLASS MISSIONS // 作戦</span>
            </a>
          </div>
        </motion.div>

        {/* Right Side Panel - Genos Demon Cyborg & Capsule Corp Core Telemetry (3 cols) */}
        <motion.div
          className="hidden lg:flex lg:col-span-4 xl:col-span-3 border-2 border-sky-300/80 bg-white/90 backdrop-blur-xl p-5 rounded-3xl flex-col justify-between relative text-left shadow-xl shadow-sky-500/10 overflow-hidden"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <CornerCrosshairs colorClass="text-sky-500/70" />
          
          <div className="flex justify-between items-center pb-3.5 border-b border-sky-200">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <span className="text-[10px] text-sky-950 font-mono font-black tracking-wider uppercase">
                GENOS CYBORG CORE // 鬼サイボーグ
              </span>
            </div>
            <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-sky-100 text-sky-900 border border-sky-300 font-bold">
              CAPSULE NO. 01
            </span>
          </div>

          <div className="flex-1 font-mono text-[9.5px] py-4 space-y-2.5 text-slate-700 select-none overflow-hidden">
            <div className="text-amber-800 font-black">// EXECUTING SERIOUS TEST SUITE // 同期中...</div>
            
            {[
              { label: "Core Temperature", status: "320°C // NOMINAL", color: "text-amber-700 font-bold" },
              { label: "Incinerator Output", status: "100% MAXIMUM", color: "text-rose-700 font-black" },
              { label: "10k TPS UPI Gateway", status: "STABLE [0 ERROR]", color: "text-emerald-700 font-bold" },
              { label: "Aadhaar Biometric OCR", status: "98% MATCH [OK]", color: "text-sky-800 font-bold" },
              { label: "Ledger Double-Debit", status: "PREVENTED (100%)", color: "text-emerald-700 font-bold" },
              { label: "CI/CD Newman Runner", status: "OPTIMIZED", color: "text-sky-700 font-bold" },
              { label: "Defect Density", status: "0.00% [ONE PUNCH]", color: "text-rose-700 font-black" },
              { label: "Power Level", status: "OVER 9000 // 正常", color: "text-amber-700 font-black" }
            ].map((node, idx) => (
              <div key={idx} className="flex justify-between items-center border-b border-slate-100 pb-1">
                <span className="text-slate-500 font-semibold">{node.label}:</span>
                <span className={`${node.color}`}>{node.status}</span>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-sky-200 flex items-center justify-between text-[10px] font-mono">
            <span className="text-slate-500 font-bold">SYSTEM INTEGRITY:</span>
            <span className="text-sky-900 font-black">100% NOMINAL</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
