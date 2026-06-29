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
    title: "QA Engineer",
    subtitle: "Quality & Precision",
    description: "Architecting API regression validations, financial ledger audits, and automated mobile test cycles.",
    colorClass: "border-brand-cyan/20 text-brand-cyan",
    glowClass: "hover:border-brand-cyan/50 hover:shadow-brand-cyan/10"
  },
  {
    icon: <Printer className="text-brand-purple" size={20} />,
    title: "Founder of Voxelique",
    subtitle: "3D Printing Brand",
    description: "Developing custom mechanical prototypes, slicer profile calibrations, and running D2C shipping pipelines.",
    colorClass: "border-brand-purple/20 text-brand-purple",
    glowClass: "hover:border-brand-purple/50 hover:shadow-brand-purple/10"
  },
  {
    icon: <Wrench className="text-brand-amber" size={20} />,
    title: "Creator of Toolique",
    subtitle: "Web Tools Platform",
    description: "Engineering handy online utilities, SEO conversion scripts, and QA testing aids built for search growth.",
    colorClass: "border-brand-amber/20 text-brand-amber",
    glowClass: "hover:border-brand-amber/50 hover:shadow-brand-amber/10"
  },
  {
    icon: <Compass className="text-brand-orange" size={20} />,
    title: "Jawa Bobber Rider",
    subtitle: "Mechanical Cruiser",
    description: "Appreciating raw internal combustion engineering, physical exhaust setups, and mapping road routes.",
    colorClass: "border-brand-orange/20 text-brand-orange",
    glowClass: "hover:border-brand-orange/50 hover:shadow-brand-orange/10"
  },
  {
    icon: <Camera className="text-brand-blue" size={20} />,
    title: "Photographer",
    subtitle: "Visual Storyteller",
    description: "Capturing mechanical geometry, focal frame layouts, lighting values, and macro close-ups.",
    colorClass: "border-brand-blue/20 text-brand-blue",
    glowClass: "hover:border-brand-blue/50 hover:shadow-brand-blue/10"
  },
  {
    icon: <Gamepad2 className="text-emerald-400" size={20} />,
    title: "Gamer",
    subtitle: "Reflexes & Performance",
    description: "Tuning high-framerate PC hardware setups, competitive matches, and exploring rich story arcs.",
    colorClass: "border-emerald-400/20 text-emerald-400",
    glowClass: "hover:border-emerald-400/50 hover:shadow-emerald-400/10"
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
      {/* Moving Background Glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-brand-amber/5 filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-brand-cyan/5 filter blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left max-w-3xl">
          <span className="text-xs font-mono tracking-widest text-brand-amber uppercase mb-2 block">
            Evolution Profile
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
            Evolution Profile
          </h2>
          <p className="text-slate-400 mt-4 text-sm md:text-base leading-relaxed">
            I believe that software, hardware, and design exist in a continuous cycle of discovery. My work connects digital quality assurance with physical D2C business development.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-amber via-brand-orange to-brand-cyan mt-4" />
        </div>

        {/* Profile Card & Info Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Block - Portrait HUD Scanner Layout */}
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

              {/* Tech outline representing portrait */}
              <div className="flex-1 flex flex-col items-center justify-center relative z-10 py-10">
                <div className="w-24 h-24 rounded-full border border-brand-amber/20 bg-slate-950 flex items-center justify-center relative mb-6 shadow-xl shadow-black/85 group-hover:border-brand-amber/40 transition-colors duration-300">
                  <User size={40} className="text-slate-400 group-hover:text-brand-amber transition-colors duration-300" />
                  {/* Rotating status ring */}
                  <div className="absolute inset-0 border border-dashed border-brand-amber/25 rounded-full animate-[spin_10s_linear_infinite]" />
                </div>

                <h4 className="text-lg font-bold font-display text-white">AJINKYA SWAMI</h4>
                <p className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mt-1">Lab DNA Profile #2629</p>

                {/* HUD Tech Stats */}
                <div className="w-full mt-8 space-y-2.5 font-mono text-[9px] text-slate-450 border-t border-white/5 pt-6 text-left">
                  <div className="flex justify-between">
                    <span>ROLE:</span>
                    <span className="text-brand-cyan font-bold">QA LEAD / CREATOR</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SECTORS:</span>
                    <span className="text-slate-200">FINTECH • D2C • WEB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>BIKE SPECS:</span>
                    <span className="text-brand-orange font-bold">JAWA BOBBER</span>
                  </div>
                  <div className="flex justify-between">
                    <span>FOSSILS UNLOCKED:</span>
                    <span className="text-brand-amber font-bold font-mono">ARCHAEOPTERYX</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CAMERA BODY:</span>
                    <span className="text-slate-200">NIKON Z 30</span>
                  </div>
                </div>
              </div>

              {/* Scan status footer */}
              <div className="border-t border-white/5 pt-3.5 flex justify-between items-center relative z-10 text-[9px] font-mono">
                <span className="text-slate-500">LAB_EVOLVE_STATUS:</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <Target size={8} /> INTEGRATED
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Block - Description & 6 Cards */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-left">
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-display text-white mb-4">
                Continuous Systems Evolution
              </h3>
              <p className="text-slate-350 text-xs md:text-sm leading-relaxed mb-4">
                My passion is quality engineering. I focus on building reliable software, creating physical products, solving real-world challenges, continuous learning, and building sustainable businesses.
              </p>
              <p className="text-slate-350 text-xs md:text-sm leading-relaxed">
                Whether deploying ledger integrations for Payworld payments, slicing meshes for VOXELIQUE, or indexing tools for Toolique, I apply testing diagnostics to ensure that every build is robust.
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
                  className={`glass-panel p-5 rounded-2xl border ${card.colorClass} ${card.glowClass} flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 group relative overflow-hidden shadow-md`}
                >
                  {/* Subtle top glow overlay */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xs font-mono tracking-widest text-slate-400 uppercase font-semibold">
                        {card.subtitle}
                      </h4>
                      <div className="p-2 bg-slate-950 border border-white/5 rounded-xl">
                        {card.icon}
                      </div>
                    </div>

                    <h3 className="text-base font-bold font-display text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-slate-450 text-[11px] leading-relaxed">
                      {card.description}
                    </p>
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
