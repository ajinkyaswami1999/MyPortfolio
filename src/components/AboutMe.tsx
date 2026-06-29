"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Printer, 
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
  colorClass: string; // cyan, orange, blue, purple, green
  glowClass: string;
}

const profileCardsData: ProfileCard[] = [
  {
    icon: <ShieldCheck className="text-brand-cyan" size={20} />,
    title: "QA Engineer",
    subtitle: "Quality & Precision",
    description: "Spearheading FinTech API auditing, database ledger checks, and automated mobile/web test pipelines.",
    colorClass: "border-brand-cyan/20 text-brand-cyan",
    glowClass: "group-hover:border-brand-cyan/40"
  },
  {
    icon: <Printer className="text-brand-purple" size={20} />,
    title: "Founder of Voxelique",
    subtitle: "3D Printing Brand",
    description: "Managing full product life cycles from CAD sketches to 3D printer slicing and customer deliveries.",
    colorClass: "border-brand-purple/20 text-brand-purple",
    glowClass: "group-hover:border-brand-purple/40"
  },
  {
    icon: <Compass className="text-brand-orange" size={20} />,
    title: "Jawa Bobber Rider",
    subtitle: "Highway Enthusiast",
    description: "Fascinated by raw mechanical engineering, exhaust acoustics, and cruising open highways on two wheels.",
    colorClass: "border-brand-orange/20 text-brand-orange",
    glowClass: "group-hover:border-brand-orange/40"
  },
  {
    icon: <Camera className="text-brand-blue" size={20} />,
    title: "Photographer",
    subtitle: "Visual Storyteller",
    description: "Capturing details, light patterns, street photography, and macro close-ups of mechanical structures.",
    colorClass: "border-brand-blue/20 text-brand-blue",
    glowClass: "group-hover:border-brand-blue/40"
  },
  {
    icon: <Gamepad2 className="text-emerald-400" size={20} />,
    title: "Gamer",
    subtitle: "Strategy & Reflexes",
    description: "Immersive narrative gaming, tactical coordination, and performance PC hardware tuning.",
    colorClass: "border-emerald-400/20 text-emerald-400",
    glowClass: "group-hover:border-emerald-450"
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
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-brand-orange/5 filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-brand-cyan/5 filter blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left max-w-3xl">
          <span className="text-xs font-mono tracking-widest text-brand-orange uppercase mb-2 block">
            The Creator behind the code
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
            About Me
          </h2>
          <p className="text-slate-400 mt-4 text-sm md:text-base leading-relaxed">
            I am a quality analyst, physical brand builder, and motorcycle enthusiast who views software quality, physical manufacturing, and lifestyle photography through the same lens of craftsmanship and precision.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-orange via-brand-cyan to-brand-blue mt-4" />
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
              className="relative w-full max-w-[360px] aspect-[3/4] rounded-3xl glass-panel border border-white/5 p-6 flex flex-col justify-between overflow-hidden group shadow-2xl shadow-black/60"
            >
              {/* Virtual Scanner Line animation */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-cyan/60 shadow-[0_0_15px_rgba(0,229,255,0.8)] z-20 pointer-events-none animate-[scan_4s_linear_infinite]" />

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
                <div className="w-24 h-24 rounded-full border border-brand-orange/20 bg-slate-950 flex items-center justify-center relative mb-6 shadow-xl shadow-black/85 group-hover:border-brand-orange/40 transition-colors duration-300">
                  <User size={40} className="text-slate-400 group-hover:text-brand-orange transition-colors duration-300" />
                  {/* Rotating status ring */}
                  <div className="absolute inset-0 border border-dashed border-brand-cyan/25 rounded-full animate-[spin_10s_linear_infinite]" />
                </div>

                <h4 className="text-lg font-bold font-display text-white">AJINKYA SWAMI</h4>
                <p className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mt-1">Creator Profile #2629</p>

                {/* HUD Tech Stats */}
                <div className="w-full mt-8 space-y-2.5 font-mono text-[9px] text-slate-450 border-t border-white/5 pt-6 text-left">
                  <div className="flex justify-between">
                    <span>ROLE:</span>
                    <span className="text-brand-cyan font-bold">QA LEAD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SECTORS:</span>
                    <span className="text-slate-200">FINTECH • D2C</span>
                  </div>
                  <div className="flex justify-between">
                    <span>BIKE SPECS:</span>
                    <span className="text-brand-orange font-bold">JAWA BOBBER</span>
                  </div>
                  <div className="flex justify-between">
                    <span>TOLERANCE:</span>
                    <span className="text-slate-200">0.1MM CALIB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>RESOLUTION:</span>
                    <span className="text-slate-200">RAW IMAGE SYNC</span>
                  </div>
                </div>
              </div>

              {/* Scan status footer */}
              <div className="border-t border-white/5 pt-3.5 flex justify-between items-center relative z-10 text-[9px] font-mono">
                <span className="text-slate-500">SYS_SCAN_STATUS:</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <Target size={8} /> SECURE
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Block - Description & 5 Cards */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-left">
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-display text-white mb-4">
                Multidisciplinary Creation & Engineering
              </h3>
              <p className="text-slate-350 text-xs md:text-sm leading-relaxed mb-4">
                Whether developing test architectures for API payments, calibrating 3D extruder profiles for custom models, or lining up shots through a camera viewport, my philosophy remains constant: **Craft with precision. Test for perfection. Drive with passion.**
              </p>
              <p className="text-slate-350 text-xs md:text-sm leading-relaxed">
                I thrive in technical troubleshooting and quality optimization. I enjoy building systems from the ground up, whether they are automated test libraries or actual physical products.
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
                  className={`glass-panel p-5 rounded-2xl border ${card.colorClass} flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 group relative overflow-hidden`}
                >
                  {/* Subtle top glow overlay */}
                  <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent`} />
                  
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
