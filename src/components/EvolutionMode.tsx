"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Sparkles, Shield, Cpu } from "lucide-react";

export default function EvolutionMode() {
  const [isActive, setIsActive] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [auraFlash, setAuraFlash] = useState(0);
  const typedBuffer = useRef("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      typedBuffer.current += e.key.toLowerCase();

      if (typedBuffer.current.length > 20) {
        typedBuffer.current = typedBuffer.current.slice(-20);
      }

      // Secret code triggers: saiyan, saitama, overdrive, opm, dbz, kamehameha, bankai
      if (
        typedBuffer.current.endsWith("saiyan") ||
        typedBuffer.current.endsWith("saitama") ||
        typedBuffer.current.endsWith("overdrive") ||
        typedBuffer.current.endsWith("opm") ||
        typedBuffer.current.endsWith("dbz") ||
        typedBuffer.current.endsWith("kamehameha") ||
        typedBuffer.current.endsWith("bankai")
      ) {
        setIsActive((prev) => !prev);
        setShowBadge(true);
        typedBuffer.current = "";
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Anime Power Aura Surge Scheduler
  useEffect(() => {
    if (!isActive) return;

    const triggerSurge = () => {
      setAuraFlash(0.75);
      setTimeout(() => setAuraFlash(0), 120);
      setTimeout(() => {
        setAuraFlash(0.85);
        setTimeout(() => setAuraFlash(0), 100);
      }, 220);
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.4) {
        triggerSurge();
      }
    }, 4500);

    triggerSurge();
    return () => clearInterval(interval);
  }, [isActive]);

  // Canvas Anime Speedlines & Electric Sparks overlay
  useEffect(() => {
    if (!isActive || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Speedlines emanating from outer boundary toward center
    const lineCount = 50;
    const lines: {
      angle: number;
      length: number;
      dist: number;
      speed: number;
      opacity: number;
      color: string;
    }[] = [];

    const colors = [
      "rgba(245, 158, 11, ",   // Super Saiyan Butter Gold
      "rgba(244, 63, 94, ",    // Serious Punch Rose
      "rgba(2, 132, 199, ",    // Capsule Corp Cyan
      "rgba(249, 115, 22, ",   // Kame Orange
    ];

    for (let i = 0; i < lineCount; i++) {
      lines.push({
        angle: Math.random() * Math.PI * 2,
        dist: Math.random() * Math.max(width, height) * 0.5 + 200,
        length: Math.random() * 80 + 40,
        speed: Math.random() * 18 + 12,
        opacity: Math.random() * 0.7 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const centerX = width / 2;
    const centerY = height / 2;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < lineCount; i++) {
        const l = lines[i];

        const x1 = centerX + Math.cos(l.angle) * l.dist;
        const y1 = centerY + Math.sin(l.angle) * l.dist;
        const x2 = centerX + Math.cos(l.angle) * (l.dist - l.length);
        const y2 = centerY + Math.sin(l.angle) * (l.dist - l.length);

        ctx.strokeStyle = `${l.color}${l.opacity})`;
        ctx.lineWidth = Math.random() * 2 + 1.2;
        ctx.lineCap = "round";

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        l.dist -= l.speed;
        if (l.dist < 80) {
          l.dist = Math.max(width, height) * 0.55 + Math.random() * 100;
          l.angle = Math.random() * Math.PI * 2;
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [isActive]);

  return (
    <>
      {/* Super Saiyan Ki Aura Flash */}
      <div
        className="fixed inset-0 pointer-events-none z-30 transition-opacity"
        style={{
          opacity: auraFlash,
          background:
            "radial-gradient(circle at center, rgba(254,240,138,0.3) 0%, rgba(254,205,211,0.2) 60%, transparent 100%)",
          transitionDuration: "0.06s",
        }}
      />

      {/* Super Saiyan Outer Perimeter Glow */}
      {isActive && (
        <div
          className="fixed inset-0 pointer-events-none z-25 border-2 border-amber-400/50 shadow-[inset_0_0_80px_rgba(245,158,11,0.18)] animate-pulse"
        />
      )}

      <AnimatePresence>
        {isActive && (
          <>
            {/* Speedlines canvas */}
            <canvas
              ref={canvasRef}
              className="fixed inset-0 z-20 pointer-events-none"
            />

            {/* Overdrive Status Banner */}
            <motion.div
              initial={{ y: -50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -30, opacity: 0, scale: 0.95 }}
              className="fixed top-24 left-1/2 -translate-x-1/2 z-40 bg-white/95 border border-amber-300 text-amber-950 font-mono text-[10px] font-bold px-5 py-2.5 rounded-full flex items-center space-x-3 shadow-xl shadow-amber-500/15 backdrop-blur-md"
            >
              <Zap size={14} className="text-amber-500 animate-bounce" />
              <span className="tracking-widest">
                SUPER SAIYAN QA OVERDRIVE // 限界突破 [POWER LEVEL: OVER 9000]
              </span>
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Association Achievement Badge Card */}
      <AnimatePresence>
        {showBadge && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-6 z-50 bg-white/95 p-5 rounded-2xl border border-amber-300/80 max-w-sm flex items-start space-x-3.5 shadow-2xl shadow-amber-500/15 cursor-pointer backdrop-blur-xl group hover:border-amber-400"
            onClick={() => setShowBadge(false)}
          >
            <div className="p-3 bg-amber-100/80 border border-amber-300 rounded-xl text-amber-700 group-hover:scale-110 transition-transform">
              <Sparkles size={18} className="text-amber-600" />
            </div>
            <div className="text-left">
              <div className="flex items-center space-x-2">
                <span className="text-[9px] font-mono tracking-widest text-amber-800 uppercase block font-bold">
                  HERO ASSOCIATION // ヒーロー協会公認
                </span>
                <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-rose-100 text-rose-800 border border-rose-300 font-bold">
                  S-CLASS #1
                </span>
              </div>
              <h4 className="text-xs font-bold font-display text-slate-900 mt-1 tracking-wider">
                LIMIT BREAK: SUPER SAIYAN S-CLASS QA
              </h4>
              <p className="text-[10px] text-slate-600 mt-1 leading-relaxed font-mono">
                {isActive
                  ? "Power level exceeded 9000! Super Saiyan Ki aura and Serious Punch testbed speedlines are online."
                  : "Core telemetry returned to cruising frequency. Type 'saiyan' or 'saitama' anytime to awaken."}
              </p>
              <div className="mt-2 text-[9px] font-mono text-slate-400">
                Click anywhere on this card to dismiss
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
