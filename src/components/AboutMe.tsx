"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  ShieldCheck, 
  Printer, 
  Wrench, 
  Compass, 
  Camera, 
  Gamepad2, 
  User, 
  Target,
  Maximize2,
  ArrowUpRight,
  Globe
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, SnapchatIcon } from "./BrandIcons";

interface ProfileCard {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  specialization: string;
  powerStat: string;
  disasterLevel: string;
  description: string;
  colorClass: string;
  glowClass: string;
}

const profileCardsData: ProfileCard[] = [
  {
    icon: <ShieldCheck className="text-sky-700" size={20} />,
    title: "Lead QA Specialist",
    subtitle: "HERO ASSN: S-CLASS #1",
    specialization: "CYBORG QA ARCHITECTURE // 技師",
    powerStat: "KI HARNESS: 99.9% // 10K+ TPS",
    disasterLevel: "LEVEL: GOD // 神",
    description: "Architecting high-concurrency UPI payment ledgers, biometric identity validation, and zero-defect automated testing pipelines.",
    colorClass: "border-sky-200/90 text-sky-900 bg-sky-50/20",
    glowClass: "hover:border-sky-400 hover:shadow-lg hover:shadow-sky-500/10"
  },
  {
    icon: <Printer className="text-purple-700" size={20} />,
    title: "Voxelique Founder",
    subtitle: "CAPSULE CORP LAB",
    specialization: "3D ADDITIVE FABRICATION // 創設",
    powerStat: "TOLERANCE: 0.05mm // D2C FORGE",
    disasterLevel: "LEVEL: DRAGON // 竜",
    description: "CAD mesh optimization, slicer micro-tolerance profiling, and physical D2C 3D manufacturing operations for bespoke hardware.",
    colorClass: "border-purple-200/90 text-purple-900 bg-purple-50/20",
    glowClass: "hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10"
  },
  {
    icon: <Wrench className="text-amber-700" size={20} />,
    title: "Toolique Creator",
    subtitle: "HERO ASSN TOOLKIT",
    specialization: "CALCULATION WEAPONRY // 開発",
    powerStat: "LATENCY: <10ms // INSTANT UTILITY",
    disasterLevel: "LEVEL: DEMON // 鬼",
    description: "Building instant online calculating tools, regex validation filters, and high-speed web utility platforms for developers worldwide.",
    colorClass: "border-amber-200/90 text-amber-900 bg-amber-50/20",
    glowClass: "hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/10"
  },
  {
    icon: <Compass className="text-rose-700" size={20} />,
    title: "Jawa Explorer",
    subtitle: "HIGH-SPEED CAVALRY",
    specialization: "DISASTER DISPATCH // 機動",
    powerStat: "RANGE: 1,200km // 300cc RIG",
    disasterLevel: "LEVEL: TIGER // 虎",
    description: "Exploring motorcycle chassis engineering, exhaust combustion acoustics, and high-altitude highway endurance expeditions.",
    colorClass: "border-rose-200/90 text-rose-900 bg-rose-50/20",
    glowClass: "hover:border-rose-400 hover:shadow-lg hover:shadow-rose-500/10"
  },
  {
    icon: <Camera className="text-sky-700" size={20} />,
    title: "Optics & Lens",
    subtitle: "SCOUTER OPTICS",
    specialization: "COMBAT RECONNAISSANCE // 視覚",
    powerStat: "RESOLUTION: 4K RAW // f/1.8",
    disasterLevel: "LEVEL: DEMON // 鬼",
    description: "Framing mechanical symmetry structures, cinematic night lighting values, and street photography archives with precision glass.",
    colorClass: "border-sky-200/90 text-sky-900 bg-sky-50/20",
    glowClass: "hover:border-sky-400 hover:shadow-lg hover:shadow-sky-500/10"
  },
  {
    icon: <Gamepad2 className="text-emerald-700" size={20} />,
    title: "Tactical Gamer",
    subtitle: "100x GRAVITY RIG",
    specialization: "TOURNAMENT COMBAT // 遊戯",
    powerStat: "REFLEX: 1ms INPUT // 240Hz",
    disasterLevel: "LEVEL: DRAGON // 竜",
    description: "Custom high-framerate hardware builds, micro-second reflexes, and tactical coordination tournaments in virtual battlegrounds.",
    colorClass: "border-emerald-200/90 text-emerald-900 bg-emerald-50/20",
    glowClass: "hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10"
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
    <section id="about" className="py-24 relative bg-[#FAF9F6] overflow-hidden border-t border-amber-200/60">
      {/* Anime Ki ambient glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-amber-200/30 filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-rose-200/25 filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left max-w-3xl">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-amber-800 uppercase mb-2 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span>人物ファイル // HERO PROFILE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            HERO PROFILE
          </h2>
          <p className="text-slate-600 mt-4 text-xs md:text-sm leading-relaxed font-sans font-medium">
            A tactical dossier detailing core technical specializations across software QA architecture, high-concurrency fintech automation, 3D additive manufacturing, and digital product creation.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-400 via-rose-400 to-sky-400 mt-4" />
        </div>

        {/* Tactical Dossier details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Block - Avatar Card */}
          <div className="lg:col-span-5 flex flex-col justify-start items-center space-y-6 w-full">
            {/* Holographic Dossier card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[360px] aspect-[3/4] rounded-3xl bg-white/85 backdrop-blur-xl border border-amber-200/80 p-6 flex flex-col justify-between overflow-hidden group shadow-xl"
            >
              {/* Virtual Scanner Line animation (Golden theme) */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-amber-400/80 shadow-[0_0_15px_rgba(245,158,11,0.6)] z-20 pointer-events-none animate-[scan_4s_linear_infinite]" />

              <style jsx>{`
                @keyframes scan {
                  0%, 100% { top: 0%; }
                  50% { top: 100%; }
                }
                @keyframes kiArcPulse {
                  0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
                  50% { opacity: 0.9; transform: scale(1.06) rotate(6deg); }
                }
                @keyframes sparkBlink {
                  0%, 100% { opacity: 0.2; }
                  30% { opacity: 1; }
                  70% { opacity: 0.4; }
                }
              `}</style>

              {/* Scouter HUD corner brackets */}
              <div className="absolute top-3 left-3 text-amber-500/70 pointer-events-none font-mono text-[9px] font-black tracking-tighter">┌ SCAN_HUD</div>
              <div className="absolute top-3 right-3 text-rose-500/70 pointer-events-none font-mono text-[9px] font-black tracking-tighter">LOCK_ON ┐</div>
              <div className="absolute bottom-3 left-3 text-amber-500/70 pointer-events-none font-mono text-[9px] font-black tracking-tighter">└ LEVEL_S</div>
              <div className="absolute bottom-3 right-3 text-amber-500/70 pointer-events-none font-mono text-[9px] font-black tracking-tighter">9000+ ┘</div>

              {/* Tech outline representing Cyber Reticle */}
              <div className="flex-1 flex flex-col items-center justify-center relative z-10 py-6">
                
                {/* Avatar with Super Saiyan Ki Electrical Lightning Arcs */}
                <div className="relative mb-5">
                  {/* Outer Golden Ki Aura Ring */}
                  <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-amber-300/40 via-yellow-200/50 to-orange-300/40 filter blur-md animate-pulse pointer-events-none" />

                  {/* Electric Ki Lightning SVG Sparks */}
                  <svg className="absolute -inset-5 w-34 h-34 pointer-events-none animate-[kiArcPulse_2.5s_ease-in-out_infinite]" viewBox="0 0 100 100">
                    <path
                      d="M 20 25 L 28 32 L 23 42 L 35 48"
                      stroke="#F59E0B"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      className="animate-[sparkBlink_1.2s_infinite]"
                    />
                    <path
                      d="M 80 20 L 72 30 L 82 38 L 70 46"
                      stroke="#0284C7"
                      strokeWidth="1.2"
                      fill="none"
                      strokeLinecap="round"
                      className="animate-[sparkBlink_1.8s_infinite]"
                    />
                    <path
                      d="M 75 75 L 68 68 L 78 58 L 65 52"
                      stroke="#F59E0B"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      className="animate-[sparkBlink_1.4s_infinite]"
                    />
                    <path
                      d="M 25 78 L 32 68 L 22 62 L 32 54"
                      stroke="#F43F5E"
                      strokeWidth="1.2"
                      fill="none"
                      strokeLinecap="round"
                      className="animate-[sparkBlink_2s_infinite]"
                    />
                  </svg>

                  {/* Japanese Manga Ki Spark Sound Effect Stamp */}
                  <div className="absolute -top-3 -right-6 px-1.5 py-0.5 bg-amber-400 text-slate-950 font-black text-[8px] font-mono rounded shadow-xs rotate-12 select-none pointer-events-none animate-bounce">
                    バチバチ!
                  </div>
                  <div className="absolute -bottom-2 -left-6 px-1.5 py-0.5 bg-rose-100 border border-rose-300 text-rose-900 font-black text-[8px] font-mono rounded shadow-xs -rotate-6 select-none pointer-events-none">
                    ゴゴゴ...
                  </div>

                  {/* Profile Picture Frame */}
                  <div className="w-26 h-26 rounded-full border-2 border-amber-400 bg-amber-50 flex items-center justify-center relative shadow-lg shadow-amber-500/20 group-hover:border-amber-500 transition-colors duration-300 overflow-hidden">
                    <Image
                      src="/profile.jpg"
                      alt="Ajinkya Swami"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority
                    />
                    {/* Cyber ring rotating */}
                    <div className="absolute inset-0 border border-dashed border-amber-500/70 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none" />
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-0.5">
                  <h4 className="text-lg font-black font-display text-slate-900">AJINKYA SWAMI</h4>
                  <span className="text-[8px] font-mono px-2 py-0.5 rounded bg-rose-100 text-rose-800 border border-rose-300 font-black">
                    S-CLASS #1
                  </span>
                </div>
                <p className="text-[9.5px] font-mono tracking-widest text-amber-800 uppercase font-black">CAPSULE CORP LEAD QA // 戦闘力 9000+</p>

                {/* Scouter Lock-on Reticle Sub-header */}
                <div className="mt-1 flex items-center gap-1.5 text-[8.5px] font-mono text-emerald-700 bg-emerald-50/80 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>TARGET: LOCKED // ターゲット補足</span>
                </div>

                {/* HUD Tech Stats */}
                <div className="w-full mt-5 space-y-2 font-mono text-[9px] text-slate-600 border-t border-slate-200 pt-4 text-left">
                  <div className="flex justify-between">
                    <span className="font-bold">SCOUTER POWER LEVEL:</span>
                    <span className="text-amber-700 font-black">OVER 9000!! // 異常値</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">DISASTER CLEARANCE:</span>
                    <span className="text-rose-700 font-black">LEVEL: GOD // 災害「神」</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">ACTIVE SERVICE:</span>
                    <span className="text-slate-800 font-semibold">3+ YEARS PRODUCTION</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">CORE ARSENAL:</span>
                    <span className="text-sky-800 font-bold font-mono">QA / AUTOMATION / 3D</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">TRAINING DOJO:</span>
                    <span className="text-amber-800 font-bold">100x GRAVITY CHAMBER</span>
                  </div>
                </div>
              </div>

              {/* Scan status footer */}
              <div className="border-t border-slate-200 pt-3 flex justify-between items-center relative z-10 text-[9px] font-mono">
                <span className="text-slate-500 font-bold">SCOUTER TELEMETRY:</span>
                <span className="text-amber-800 font-black flex items-center gap-1">
                  <Target size={10} className="text-rose-600 animate-pulse" /> VERIFIED // 認証完了
                </span>
              </div>
            </motion.div>

            {/* Cyber Comms Deck (Social links & Websites) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-full max-w-[360px] bg-white/85 backdrop-blur-xl border border-amber-200/80 rounded-3xl p-5 text-left font-mono relative overflow-hidden shadow-xl"
            >
              {/* Top glow overlay */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
              
              <div className="flex items-center space-x-2 mb-4 pb-2.5 border-b border-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                <h4 className="text-[9.5px] tracking-widest text-amber-800 uppercase font-bold">NEURAL_NETWORK // リンク集</h4>
              </div>

              <div className="space-y-2.5">
                {[
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/ajinkya-swami/", icon: <LinkedinIcon size={12} className="text-sky-700" />, text: "in/ajinkya-swami" },
                  { label: "GitHub", href: "https://github.com/ajinkyaswami1999", icon: <GithubIcon size={12} className="text-slate-900" />, text: "github/ajinkyaswami1999" },
                  { label: "Voxelique 3D", href: "https://voxelique.com", icon: <Printer size={12} className="text-purple-700" />, text: "voxelique.com" },
                  { label: "Instagram (Voxelique)", href: "https://www.instagram.com/voxelique/", icon: <InstagramIcon size={12} className="text-purple-700" />, text: "@voxelique" },
                  { label: "Toolique Web", href: "https://toolique.in", icon: <Wrench size={12} className="text-amber-700" />, text: "toolique.in" },
                  { label: "Instagram (Pers.)", href: "https://www.instagram.com/ajinkyaswami.in/", icon: <InstagramIcon size={12} className="text-rose-700" />, text: "@ajinkyaswami.in" },
                  { label: "Instagram (Photo)", href: "https://www.instagram.com/theasterlens/", icon: <Camera size={12} className="text-sky-700" />, text: "@theasterlens" },
                  { label: "Snapchat", href: "https://snapchat.com/t/wgcxkncY", icon: <SnapchatIcon size={12} className="text-amber-700" />, text: "snapchat/ajinkya" }
                ].map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 bg-slate-50/80 border border-slate-200 hover:border-amber-300 hover:bg-amber-50/50 rounded-xl transition-all group/link text-[10px] text-slate-600 hover:text-slate-900 cursor-pointer"
                  >
                    <div className="flex items-center space-x-2.5">
                      <div className="p-1.5 bg-white border border-slate-200 rounded-lg group-hover/link:border-amber-300 transition-colors">
                        {link.icon}
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-[8px] text-slate-500 font-bold uppercase tracking-wider">{link.label}</span>
                        <span className="text-slate-800 font-semibold group-hover/link:text-amber-800 transition-colors mt-0.5">{link.text}</span>
                      </div>
                    </div>
                    <ArrowUpRight size={10} className="text-slate-400 group-hover/link:text-amber-700 transition-colors mr-1" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Block - Description & 6 Cards */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-left">
            <div>
              <div className="text-[10px] font-mono tracking-widest text-amber-800 uppercase mb-2 font-bold">
                TACTICAL PROFILE // 特性
              </div>
              <h3 className="text-xl md:text-3xl font-bold font-display text-slate-900 mb-4">
                Operational Arsenal & Multi-Discipline Domains
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-4 font-sans font-medium">
                My career is forged around rapid evolution and precision execution. I specialize in building deterministic QA test harnesses, stress-testing payment gateways, optimizing 3D CAD meshes, and deploying high-speed web utilities.
              </p>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-sans font-medium">
                Every node represents a calibrated skill: engineering reliable automation pipelines for critical production software and fabricating physical hardware with identical rigor.
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
                  className={`backdrop-blur-md p-5 rounded-2xl border ${card.colorClass} ${card.glowClass} flex flex-col justify-between transition-all duration-300 group relative overflow-hidden shadow-sm`}
                >
                  {/* Subtle top glow overlay */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-3 gap-2">
                      <div className="flex flex-col">
                        <span className="text-[8px] font-mono tracking-widest text-slate-500 uppercase font-black">
                          {card.subtitle}
                        </span>
                        <span className="text-[7.5px] font-mono text-rose-700 font-bold">
                          {card.disasterLevel}
                        </span>
                      </div>
                      <div className="p-2 bg-white/90 border border-slate-200 rounded-xl group-hover:scale-110 transition-transform shadow-xs shrink-0">
                        {card.icon}
                      </div>
                    </div>

                    <h3 className="text-base font-black font-display text-slate-900 mb-1">
                      {card.title}
                    </h3>
                    <p className="text-[9px] font-mono font-bold text-amber-800 uppercase tracking-tight mb-2.5">
                      {card.specialization}
                    </p>
                    <p className="text-slate-600 text-[11px] leading-relaxed mb-4 font-sans font-medium">
                      {card.description}
                    </p>
                  </div>

                  {/* Power Stat Telemetry Footer */}
                  <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-[8.5px] font-mono">
                    <span className="text-slate-500 font-bold">TELEMETRY:</span>
                    <span className="text-slate-900 font-black px-1.5 py-0.5 bg-white/90 rounded border border-slate-200">
                      {card.powerStat}
                    </span>
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
