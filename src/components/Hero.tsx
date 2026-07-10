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
      className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-[#07090D] font-mono text-slate-200"
    >
      {/* Background Matrix/Grid & Lights */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f131a_1px,transparent_1px),linear-gradient(to_bottom,#0f131a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none opacity-25" />
      
      {/* Volumetric ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-cyan/5 filter blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-orange/5 filter blur-[120px] pointer-events-none z-0 animate-pulse-slow" />

      {/* Futuristic gates blueprint overlay in the background */}
      <motion.div
        style={{ x: gateX, y: gateY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.03] select-none"
      >
        <svg aria-hidden="true" viewBox="0 0 1000 700" className="w-full max-w-[900px] stroke-brand-cyan stroke-[1.5] fill-none">
          <circle cx="500" cy="350" r="300" strokeDasharray="5,5" />
          <circle cx="500" cy="350" r="150" />
          <line x1="500" y1="50" x2="500" y2="650" />
          <line x1="150" y1="350" x2="850" y2="350" />
          {/* Laser-sweep simulation paths */}
          <path d="M 200,150 H 800 V 550 H 200 Z" />
        </svg>
      </motion.div>

      {/* Laser-scanner sweep animation line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent z-20 pointer-events-none animate-[scannerSweep_8s_linear_infinite]" />
      <style jsx>{`
        @keyframes scannerSweep {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
      `}</style>

      {/* Grid container layout */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch min-h-[calc(100vh-12rem)]">
        
        {/* Left Side Panel - Facility Info (3 cols) */}
        <motion.div
          className="hidden xl:flex xl:col-span-3 border border-white/5 bg-[#0b0e14]/65 p-6 rounded-3xl flex-col justify-between relative text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <CornerCrosshairs />
          
          <div className="space-y-6">
            <div className="border-b border-white/5 pb-4">
              <span className="text-[10px] tracking-widest text-slate-500 font-bold uppercase block mb-1">FACILITY TARGET</span>
              <h3 className="text-sm font-black text-white">AJINKYA SWAMI</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { label: "Role Classification", val: "Senior QA Engineer" },
                { label: "Clearance Clearance", val: "LEVEL 07 ACCESS" },
                { label: "Operational Mission", val: "Building reliable software systems." }
              ].map((item, idx) => (
                <div key={idx} className="text-xs">
                  <span className="text-[9px] text-slate-500 uppercase tracking-wider block mb-0.5">{item.label}</span>
                  <span className="text-slate-200 font-bold block">{item.val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px]">
            <span className="text-slate-500">FACILITY STATUS:</span>
            <span className="text-jungle-green font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-jungle-green animate-ping" /> ONLINE
            </span>
          </div>
        </motion.div>

        {/* Center Column - Cinematic Headline & CTAs (6 cols) */}
        <motion.div
          style={{ x: textX, y: textY }}
          className="col-span-12 xl:col-span-6 flex flex-col items-center justify-center text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Top facility online status */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 rounded-md text-[9px] font-bold tracking-widest uppercase mb-6 text-brand-orange animate-pulse">
            <span>●</span>
            <DecodeText text="RESEARCH FACILITY ONLINE" />
          </div>

          {/* Large cinematic title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display leading-[0.9] tracking-tighter text-white mb-6 uppercase flex flex-col items-center">
            <span className="text-glow-amber">EVOLUTION</span>
            <span className="text-glow-orange text-brand-orange">NEVER</span>
            <span className="text-glow-amber">STOPS.</span>
          </h1>

          {/* Core Declarations */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[10px] md:text-xs font-mono font-bold text-slate-300 uppercase tracking-widest mb-6">
            <span>I BUILD</span>
            <span className="text-brand-orange">•</span>
            <span>I TEST</span>
            <span className="text-brand-orange">•</span>
            <span>I AUTOMATE</span>
            <span className="text-brand-orange">•</span>
            <span>I CREATE</span>
          </div>

          {/* Subtitle */}
          <p className="text-slate-400 text-xs max-w-md leading-relaxed mb-8">
            Software QA Engineer • Automation Engineer • Founder of Toolique • Creator • Problem Solver
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm justify-center">
            <a
              href="#about"
              onClick={handleEnterFacility}
              className="bevel-clip border border-brand-orange hover:bg-brand-orange text-brand-orange hover:text-slate-950 font-bold py-3 px-6 text-xs tracking-wider uppercase text-center transition-colors duration-300 block select-none cursor-pointer"
            >
              <span>ENTER FACILITY</span>
            </a>
            <a
              href="#projects"
              onClick={handleViewProjects}
              className="bevel-clip border border-brand-cyan hover:bg-brand-cyan text-brand-cyan hover:text-slate-950 font-bold py-3 px-6 text-xs tracking-wider uppercase text-center transition-colors duration-300 block select-none cursor-pointer"
            >
              <span>VIEW PROJECTS</span>
            </a>
          </div>
        </motion.div>

        {/* Right Side Panel - Command Diagnostic Terminal (3 cols) */}
        <motion.div
          className="hidden lg:flex lg:col-span-4 xl:col-span-3 border border-white/5 bg-[#0b0e14]/65 p-5 rounded-3xl flex-col justify-between relative text-left"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <CornerCrosshairs />
          
          <div className="flex justify-between items-center pb-3.5 border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-[10px] text-slate-500 font-mono">facility_gate_control.sh</span>
            </div>
            <Maximize2 size={10} className="text-slate-600" />
          </div>

          <div className="flex-1 font-mono text-[9px] py-4 space-y-2.5 text-slate-400 select-none overflow-hidden">
            <div className="text-slate-500">// INITIALIZING INGEN TELEMETRY SCAN...</div>
            
            {[
              { label: "QA Engine", status: "100% Operational", color: "text-jungle-green" },
              { label: "Automation", status: "Running", color: "text-brand-cyan" },
              { label: "Testing", status: "Verified", color: "text-brand-orange" },
              { label: "CI/CD Gate", status: "Connected", color: "text-jungle-green" },
              { label: "Specimens", status: "Growing", color: "text-brand-cyan" },
              { label: "Security", status: "Maximum", color: "text-brand-orange" },
              { label: "Facility", status: "Unlocked", color: "text-jungle-green" }
            ].map((node, idx) => (
              <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-1">
                <span>{node.label}:</span>
                <span className={`${node.color} font-bold`}>{node.status}</span>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px]">
            <span className="text-slate-500">INTEGRITY:</span>
            <span className="text-brand-cyan font-bold">100% NOMINAL</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
