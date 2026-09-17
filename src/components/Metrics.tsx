"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ShieldCheck, Cpu, RefreshCw, Layers, Award, Terminal, CheckCircle2 } from "lucide-react";
import CornerCrosshairs from "./CornerCrosshairs";

interface DragonBall {
  stars: number;
  starPositions: { x: number; y: number }[];
  japaneseName: string;
  pillarTitle: string;
  codename: string;
  achievement: string;
  metricValue: string;
  icon: React.ReactNode;
  lore: string;
}

const dragonBallsData: DragonBall[] = [
  {
    stars: 1,
    starPositions: [{ x: 50, y: 50 }],
    japaneseName: "一星球 // Iishinchū",
    pillarTitle: "High-Concurrency UPI Resilience",
    codename: "10,000+ TPS STRESS PROTOCOL",
    achievement: "Simulated 10k+ concurrent UPI payment transactions across dual-factor banking switches with zero database locks.",
    metricValue: "10,000+ TPS",
    icon: <Cpu className="text-amber-600" size={18} />,
    lore: "Forged in peak-hour banking volume tests. Imbued with unbreakable thread concurrency."
  },
  {
    stars: 2,
    starPositions: [{ x: 38, y: 38 }, { x: 62, y: 62 }],
    japaneseName: "二星球 // Nīshinchū",
    pillarTitle: "Biometric Identity & eKYC Gateway",
    codename: "HARDWARE PERIPHERAL SHIELD",
    achievement: "Validated biometric fingerprint scanner APIs, face-match thresholds, and encrypted PII compliance against UIDAI gateway rules.",
    metricValue: "98% VERIFICATION",
    icon: <ShieldCheck className="text-sky-600" size={18} />,
    lore: "Government gateway compliance lock. Zero unauthorized biometric spoofing allowed."
  },
  {
    stars: 3,
    starPositions: [{ x: 50, y: 34 }, { x: 36, y: 64 }, { x: 64, y: 64 }],
    japaneseName: "三星球 // Sanshinchū",
    pillarTitle: "Dynamic Ledger Reconciliation",
    codename: "ZERO DOUBLE-DEBIT ENGINE",
    achievement: "Audited merchant dynamic commission splits, GST tax brackets, and real-time ledger updates with zero balance leakage.",
    metricValue: "100% LEDGER MATCH",
    icon: <RefreshCw className="text-emerald-600" size={18} />,
    lore: "Balances the cosmic ledgers. Ensures every rupee is accounted for across 2-week agile sprints."
  },
  {
    stars: 4,
    starPositions: [{ x: 36, y: 36 }, { x: 64, y: 36 }, { x: 36, y: 64 }, { x: 64, y: 64 }],
    japaneseName: "四星球 // Sūshinchū (Goku's Heirloom)",
    pillarTitle: "The Founder Spirit (Voxelique & Toolique)",
    codename: "AUTONOMOUS CREATOR ENERGY",
    achievement: "Founded Voxelique (3D additive manufacturing brand) & Toolique (instant web utility platform) from concept to deployment.",
    metricValue: "2 VENTURES BUILT",
    icon: <Sparkles className="text-amber-600" size={18} />,
    lore: "The legendary Four-Star Dragon Ball. Represents entrepreneurial grit, full-stack design, and relentless curiosity."
  },
  {
    stars: 5,
    starPositions: [{ x: 34, y: 34 }, { x: 66, y: 34 }, { x: 50, y: 50 }, { x: 34, y: 66 }, { x: 66, y: 66 }],
    japaneseName: "五星球 // Goshinchū",
    pillarTitle: "Exhaustive Automated Regression",
    codename: "150+ TEST HARNESS SUITES",
    achievement: "Constructed comprehensive regression libraries cutting post-release defects by 80% across production mobile builds.",
    metricValue: "80% BUG REDUCTION",
    icon: <Layers className="text-indigo-600" size={18} />,
    lore: "The defensive perimeter. Sweeps through 150+ end-to-end regression paths before release clearance."
  },
  {
    stars: 6,
    starPositions: [{ x: 35, y: 32 }, { x: 65, y: 32 }, { x: 35, y: 50 }, { x: 65, y: 50 }, { x: 35, y: 68 }, { x: 65, y: 68 }],
    japaneseName: "六星球 // Ryūshinchū",
    pillarTitle: "Continuous CI/CD Automated Testbed",
    codename: "POSTMAN • JMETER • NEWMAN RUNNER",
    achievement: "Orchestrated daily automated test runners validating API response codes, JSON schemas, and backend payloads.",
    metricValue: "99.98% PASS RATE",
    icon: <Terminal className="text-orange-600" size={18} />,
    lore: "Synchronized with deployment pipelines. Fires automated Newman suites on every git push."
  },
  {
    stars: 7,
    starPositions: [{ x: 50, y: 30 }, { x: 32, y: 44 }, { x: 68, y: 44 }, { x: 50, y: 50 }, { x: 32, y: 66 }, { x: 68, y: 66 }, { x: 50, y: 70 }],
    japaneseName: "七星球 // Chīshinchū",
    pillarTitle: "Shenron's Release Guarantee",
    codename: "ZERO CRITICAL DEFECT ESCAPE",
    achievement: "Final sign-off certification. Guarantees production stability for millions of transacting merchant endpoints.",
    metricValue: "0 CRITICAL ESCAPE",
    icon: <Award className="text-rose-600" size={18} />,
    lore: "The final ball of completion. When all seven gather, Shenron grants the ultimate wish: flawless release."
  }
];

function RedStar({ size = 8 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#DC2626"
      className="drop-shadow-[0_1px_2px_rgba(153,27,27,0.8)] filter"
    >
      <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
    </svg>
  );
}

export default function DragonBallsBar() {
  const [selectedIdx, setSelectedIdx] = useState<number>(3); // Default to Goku's iconic 4-Star ball!
  const [isSummoned, setIsSummoned] = useState<boolean>(false);

  const selected = dragonBallsData[selectedIdx];

  const handleSummon = () => {
    setIsSummoned(true);
    setTimeout(() => setIsSummoned(false), 8000);
  };

  return (
    <section className="py-12 relative overflow-hidden text-left font-mono">
      {/* Decorative Shenron aura glow behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-amber-300/25 via-emerald-300/20 to-orange-300/25 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Badge & Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8 pb-4 border-b border-amber-200/80">
          <div>
            <div className="inline-flex items-center space-x-2 text-[10px] font-mono tracking-widest text-amber-900 uppercase mb-2 bg-amber-100/90 px-3 py-1 rounded-full border border-amber-300/80 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              <span>神龍召喚 // THE SEVEN DRAGON BALLS OF QUALITY ASSURANCE</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black font-display text-slate-900 tracking-tight flex items-center gap-3">
              <span>THE 7 DRAGON BALLS OF ZERO DEFECTS</span>
              <span className="text-xs font-mono text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-lg font-bold">
                7 / 7 COLLECTED
              </span>
            </h2>
            <p className="text-xs text-slate-600 mt-1.5 max-w-2xl font-sans">
              Seven core engineering pillars powering high-concurrency fintech pipelines. Tap any Dragon Ball to inspect its verified testing telemetry.
            </p>
          </div>

          <button
            onClick={handleSummon}
            className="chamfer-corner border border-amber-400 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-slate-950 font-black px-5 py-2.5 text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2 cursor-pointer shrink-0 select-none"
          >
            <Sparkles size={14} className="animate-spin-slow" />
            <span>SUMMON SHENRON // 願い</span>
          </button>
        </div>

        {/* Shenron Summoning Banner Modal / Alert */}
        <AnimatePresence>
          {isSummoned && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              className="mb-8 p-6 rounded-3xl border-2 border-emerald-400 bg-emerald-50/95 backdrop-blur-xl shadow-2xl relative overflow-hidden text-slate-900"
            >
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-emerald-600 text-white font-mono text-[9px] tracking-widest uppercase font-bold rounded-bl-2xl">
                SHENRON SUMMONED // 出現
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-600 text-white rounded-2xl shadow-lg shrink-0">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-black font-display text-emerald-950 mb-1">
                    神龍: 「どんな願いも一つだけ叶えてやろう...」
                  </h3>
                  <p className="text-xs md:text-sm font-bold text-emerald-900 font-sans leading-relaxed mb-2">
                    &quot;SPEAK THY WISH: I SHALL GRANT IT!&quot; — Wish Requested: &quot;Absolute Zero Defect Releases & Limitless Concurrency Stability.&quot;
                  </p>
                  <p className="text-[11px] font-mono text-emerald-800">
                    STATUS: WISH GRANTED! All 10,000+ UPI TPS and biometric verification endpoints are locked at 100% nominal health.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The 7 Dragon Balls Row */}
        <div className="grid grid-cols-7 gap-2 sm:gap-4 md:gap-6 mb-8 py-4 justify-items-center">
          {dragonBallsData.map((ball, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={ball.stars}
                onClick={() => setSelectedIdx(idx)}
                className={`group relative flex flex-col items-center cursor-pointer transition-all duration-300 focus:outline-none ${
                  isSelected ? "scale-110 -translate-y-2" : "hover:scale-105 hover:-translate-y-1"
                }`}
              >
                {/* Outer Ki Aura Ring */}
                <div
                  className={`absolute -inset-2 rounded-full filter blur-md transition-opacity duration-300 ${
                    isSelected
                      ? "bg-amber-400/60 opacity-100"
                      : "bg-amber-300/30 opacity-0 group-hover:opacity-75"
                  }`}
                />

                {/* 3D Glass Amber Crystal Sphere */}
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-amber-300 via-orange-400 to-amber-600 shadow-[0_4px_18px_rgba(245,158,11,0.5),inset_-4px_-4px_10px_rgba(180,83,9,0.7),inset_3px_3px_10px_rgba(254,240,138,0.9)] flex items-center justify-center overflow-hidden border border-amber-300/80">
                  {/* Specular White Glint (Top Left light reflection) */}
                  <div className="absolute top-1.5 left-2 w-4 sm:w-6 h-2 sm:h-3 bg-white/80 rounded-full blur-[0.4px] rotate-[-28deg] pointer-events-none" />
                  
                  {/* Secondary Rim Reflection (Bottom Right) */}
                  <div className="absolute bottom-1 right-2 w-3 sm:w-4 h-1.5 bg-amber-200/50 rounded-full blur-[0.8px] pointer-events-none" />

                  {/* Red Stars inside the Crystal Orb */}
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 pointer-events-none">
                    {ball.starPositions.map((pos, sIdx) => (
                      <div
                        key={sIdx}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                      >
                        <RedStar size={ball.stars >= 5 ? 7 : 9} />
                      </div>
                    ))}
                  </div>

                  {/* Electric Ki Sparkle overlay on selected */}
                  {isSelected && (
                    <div className="absolute inset-0 border-2 border-white/60 rounded-full animate-ping pointer-events-none opacity-40" />
                  )}
                </div>

                {/* Ball Number Label below */}
                <div className="mt-2.5 text-center">
                  <span
                    className={`text-[9px] sm:text-[10px] font-mono font-black uppercase tracking-wider block transition-colors ${
                      isSelected ? "text-amber-900" : "text-slate-600 group-hover:text-amber-800"
                    }`}
                  >
                    {ball.stars}★
                  </span>
                  <span className="text-[7.5px] text-slate-500 font-mono hidden sm:block">
                    {ball.stars === 4 ? "GOKU'S" : `BALL ${ball.stars}`}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Dragon Ball Telemetry Inspection Deck */}
        <motion.div
          key={selected.stars}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="chamfer-corner border border-amber-200/90 bg-white/90 backdrop-blur-xl p-6 rounded-3xl relative shadow-lg text-left"
        >
          <CornerCrosshairs colorClass="text-amber-500/60" />

          {/* Top Status Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4 pb-3 border-b border-amber-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-300 via-orange-400 to-amber-600 flex items-center justify-center text-white font-black text-xs shadow-md border border-amber-200">
                {selected.stars}★
              </div>
              <div>
                <span className="text-[9px] font-mono font-bold text-amber-800 uppercase tracking-widest block">
                  {selected.japaneseName} // ARTIFACT PILLAR #{selected.stars}
                </span>
                <h3 className="text-base sm:text-lg font-black font-display text-slate-900">
                  {selected.pillarTitle}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-amber-50 px-3 py-1 rounded-xl border border-amber-200 text-amber-950 font-mono text-xs font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              <span>{selected.metricValue}</span>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <div>
                <span className="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1 font-mono">
                  Operational Impact & Verification Scope
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans font-medium">
                  {selected.achievement}
                </p>
              </div>

              <div className="p-3 bg-amber-50/70 border border-amber-200/70 rounded-xl">
                <span className="text-[8.5px] text-amber-800 uppercase tracking-widest font-bold block mb-0.5 font-mono">
                  Dragon Ball Lore & Battle Trait
                </span>
                <p className="text-xs text-slate-600 italic font-sans">
                  &quot;{selected.lore}&quot;
                </p>
              </div>
            </div>

            <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-amber-100 md:pl-6 space-y-2.5 font-mono text-xs">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-slate-500 font-bold">CODENAME:</span>
                <span className="text-[10px] text-amber-900 font-bold">{selected.codename}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-slate-500 font-bold">STATUS:</span>
                <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 size={12} /> VERIFIED
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-slate-500 font-bold">SOUND FX:</span>
                <span className="text-[10px] text-amber-700 font-bold">ピカーン！ (PIKAAN)</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

// Retain named export alias for any legacy imports
export { DragonBallsBar as Metrics };

