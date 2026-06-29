"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Printer, 
  Wrench, 
  Compass, 
  Camera, 
  Gamepad2, 
  User, 
  Target,
  Maximize2
} from "lucide-react";

interface ProfileCard {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  colorClass: string; // cyan, orange, amber, purple, blue, green
  glowClass: string;
}

const profileCardsData: ProfileCard[] = [
  {
    icon: <ShieldCheck className="text-brand-cyan" size={20} />,
    title: "QA Specialist",
    subtitle: "DNA_NODE // 🧪",
    description: "Reconciling API payments ledger flows, validation testing, and quality coverage protocols.",
    colorClass: "border-brand-cyan/20 text-brand-cyan",
    glowClass: "hover:border-brand-cyan/50 hover:shadow-brand-cyan/10"
  },
  {
    icon: <Printer className="text-brand-purple" size={20} />,
    title: "Voxelique Founder",
    subtitle: "DNA_NODE // 🖨",
    description: "CAD mesh optimization, slicer micro-tolerance profiling, and physical D2C operations management.",
    colorClass: "border-brand-purple/20 text-brand-purple",
    glowClass: "hover:border-brand-purple/50 hover:shadow-brand-purple/10"
  },
  {
    icon: <Wrench className="text-brand-amber" size={20} />,
    title: "Toolique Creator",
    subtitle: "DNA_NODE // 🧰",
    description: "Developing online calculating tools, regex validation filters, and indexing SEO conversion scripts.",
    colorClass: "border-brand-amber/20 text-brand-amber",
    glowClass: "hover:border-brand-amber/50 hover:shadow-brand-amber/10"
  },
  {
    icon: <Compass className="text-brand-orange" size={20} />,
    title: "Jawa Rider",
    subtitle: "DNA_NODE // 🏍",
    description: "Exploring motorcycle chassis engineering, exhaust combustion acoustics, and open road mapping.",
    colorClass: "border-brand-orange/20 text-brand-orange",
    glowClass: "hover:border-brand-orange/50 hover:shadow-brand-orange/10"
  },
  {
    icon: <Camera className="text-brand-blue" size={20} />,
    title: "Photographer",
    subtitle: "DNA_NODE // 📸",
    description: "Framing mechanical symmetry structures, street lighting values, and macro close-ups.",
    colorClass: "border-brand-blue/20 text-brand-blue",
    glowClass: "hover:border-brand-blue/50 hover:shadow-brand-blue/10"
  },
  {
    icon: <Gamepad2 className="text-jungle-green" size={20} />,
    title: "Gamer",
    subtitle: "DNA_NODE // 🎮",
    description: "Configuring high-framerate hardware builds, fast tactical responses, and strategy matches.",
    colorClass: "border-jungle-green/20 text-jungle-green",
    glowClass: "hover:border-jungle-green/50 hover:shadow-jungle-green/10"
  }
];

export default function AboutMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="about" className="py-24 relative bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      {/* Aurora spotlight glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-brand-amber/5 filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-jungle-green/5 filter blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left max-w-3xl">
          <span className="text-xs font-mono tracking-widest text-brand-amber uppercase mb-2 block">
            Specimen Diagnostics
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
            DNA PROFILE
          </h2>
          <p className="text-slate-400 mt-4 text-xs md:text-sm leading-relaxed">
            A comprehensive biological report classifying the specimen's multi-disciplinary capabilities across software validation, physical manufacturing, and creative outlets.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-amber via-brand-orange to-jungle-green mt-4" />
        </div>

        {/* DNA Specimen Report details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Block - DNA Scan Outlines */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[360px] aspect-[3/4] rounded-3xl glass-panel border border-white/5 p-6 flex flex-col justify-between overflow-hidden group shadow-2xl shadow-black/85"
            >
              {/* Virtual Scanner Line animation (Amber theme) */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-amber/70 shadow-[0_0_15px_rgba(197,143,44,0.8)] z-20 pointer-events-none animate-[scan_4s_linear_infinite]" />

              <style jsx>{`
                @keyframes scan {
                  0%, 100% { top: 0%; }
                  50% { top: 100%; }
                }
              `}</style>

              {/* HUD tech crosshairs */}
              <div className="absolute top-3 left-3 text-slate-700 pointer-events-none"><Maximize2 size={12} /></div>
              <div className="absolute top-3 right-3 text-slate-700 pointer-events-none rotate-90"><Maximize2 size={12} /></div>
              <div className="absolute bottom-3 left-3 text-slate-700 pointer-events-none -rotate-90"><Maximize2 size={12} /></div>
              <div className="absolute bottom-3 right-3 text-slate-700 pointer-events-none rotate-180"><Maximize2 size={12} /></div>

              {/* Tech outline representing DNA Spiral */}
              <div className="flex-1 flex flex-col items-center justify-center relative z-10 py-10">
                <div className="w-24 h-24 rounded-full border border-brand-amber/20 bg-slate-950 flex items-center justify-center relative mb-6 shadow-xl shadow-black/85 group-hover:border-brand-amber/40 transition-colors duration-300">
                  <User size={40} className="text-slate-400 group-hover:text-brand-amber transition-colors duration-300" />
                  {/* Double Helix border rotating */}
                  <div className="absolute inset-0 border border-dashed border-brand-amber/30 rounded-full animate-[spin_12s_linear_infinite]" />
                </div>

                <h4 className="text-lg font-bold font-display text-white">AJINKYA SWAMI</h4>
                <p className="text-[10px] font-mono tracking-widest text-slate-450 uppercase mt-1">SPECIMEN CLASSIFICATION: SENIOR_QA</p>

                {/* HUD Tech Stats */}
                <div className="w-full mt-8 space-y-2.5 font-mono text-[9px] text-slate-450 border-t border-white/5 pt-6 text-left">
                  <div className="flex justify-between">
                    <span>SPECIMEN STATUS:</span>
                    <span className="text-jungle-green font-bold">STABLE [OK]</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GENETIC CODE:</span>
                    <span className="text-slate-200">QA • D2C • MOTOR</span>
                  </div>
                  <div className="flex justify-between">
                    <span>PRINT TOLERANCE:</span>
                    <span className="text-brand-cyan font-bold font-mono">0.12mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>BIKE SPECS:</span>
                    <span className="text-brand-orange font-bold font-mono">397cc ENGINE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CAMERA SENSOR:</span>
                    <span className="text-slate-200">NIKON Z 30 DX</span>
                  </div>
                </div>
              </div>

              {/* Scan status footer */}
              <div className="border-t border-white/5 pt-3.5 flex justify-between items-center relative z-10 text-[9px] font-mono">
                <span>DNA_GEN_PROFILE:</span>
                <span className="text-brand-cyan font-bold flex items-center gap-1">
                  <Target size={8} /> SECURE
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Block - Description & 6 Cards */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-left">
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-display text-white mb-4">
                Research Report: Specimen Mutation & Talents
              </h3>
              <p className="text-slate-350 text-xs md:text-sm leading-relaxed mb-4">
                My career is built around continuous evolutionary growth. I focus on building reliable software testbeds, validating payment ledgers, calibrating 3D extruder profiles, and indexing web calculators.
              </p>
              <p className="text-slate-350 text-xs md:text-sm leading-relaxed">
                Every node in my professional profile represents an adaptation: using QA frameworks to test software and engineering physical products with equal precision.
              </p>
            </div>

            {/* Dimension Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
            >
              {profileCardsData.map((card) => (
                <motion.div
                  key={card.title}
                  variants={cardVariants}
                  whileHover={{ y: -4 }}
                  className={`glass-panel p-5 rounded-2xl border ${card.colorClass} ${card.glowClass} flex flex-col justify-between transition-all duration-300 group relative overflow-hidden shadow-md`}
                >
                  {/* Subtle top glow overlay */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-[9px] font-mono tracking-widest text-slate-500 uppercase font-semibold">
                        {card.subtitle}
                      </h4>
                      <div className="p-2 bg-slate-950 border border-white/5 rounded-xl">
                        {card.icon}
                      </div>
                    </div>

                    <h3 className="text-base font-bold font-display text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-slate-450 text-[11px] leading-relaxed mb-4">
                      {card.description}
                    </p>

                    {/* DNA Mutation SVG on hover */}
                    <div className="opacity-0 group-hover:opacity-30 transition-opacity duration-300 absolute -bottom-2 -right-2 w-10 h-10 pointer-events-none select-none text-brand-amber">
                      <svg viewBox="0 0 100 100" className="w-full h-full fill-current animate-spin-slow">
                        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" strokeDasharray="6" fill="none" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
