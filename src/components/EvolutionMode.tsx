"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, AlertOctagon, Terminal } from "lucide-react";

export default function EvolutionMode() {
  const [isActive, setIsActive] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [lightningIntensity, setLightningIntensity] = useState(0);
  const typedBuffer = useRef("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      typedBuffer.current += e.key.toLowerCase();
      
      if (typedBuffer.current.length > 20) {
        typedBuffer.current = typedBuffer.current.slice(-20);
      }

      // Secret code triggers: raptor or evolve
      if (typedBuffer.current.endsWith("raptor") || typedBuffer.current.endsWith("evolve")) {
        setIsActive((prev) => !prev);
        setShowBadge(true);
        typedBuffer.current = "";
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lightning Flash Scheduler
  useEffect(() => {
    if (!isActive) return;

    const triggerLightning = () => {
      setLightningIntensity(0.9);
      setTimeout(() => setLightningIntensity(0), 100);
      setTimeout(() => {
        setLightningIntensity(0.95);
        setTimeout(() => setLightningIntensity(0), 120);
      }, 200);
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.45) {
        triggerLightning();
      }
    }, 5500);

    triggerLightning();
    return () => clearInterval(interval);
  }, [isActive]);

  // Seismic Footstep Rumbles
  useEffect(() => {
    if (!isActive) {
      document.body.classList.remove("screen-rumble");
      return;
    }

    const triggerFootstep = () => {
      document.body.classList.add("screen-rumble");
      setTimeout(() => {
        document.body.classList.remove("screen-rumble");
      }, 300);
    };

    const interval = setInterval(triggerFootstep, 4500);
    triggerFootstep();

    return () => {
      clearInterval(interval);
      document.body.classList.remove("screen-rumble");
    };
  }, [isActive]);

  // Canvas Rain overlay
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

    const rainCount = 140;
    const rainDrops: { x: number; y: number; length: number; speed: number }[] = [];

    for (let i = 0; i < rainCount; i++) {
      rainDrops.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        length: Math.random() * 20 + 8,
        speed: Math.random() * 14 + 10,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = "rgba(239, 68, 68, 0.15)"; // Red-tinted warning rain
      ctx.lineWidth = 1.2;
      ctx.lineCap = "round";

      for (let i = 0; i < rainCount; i++) {
        const drop = rainDrops[i];
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x + 1.2, drop.y + drop.length);
        ctx.stroke();

        drop.y += drop.speed;
        drop.x += 0.8;

        if (drop.y > height) {
          drop.y = -drop.length;
          drop.x = Math.random() * width;
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
      {/* Lightning Strike screen flash */}
      <div 
        className="lightning-flash" 
        style={{ 
          opacity: lightningIntensity,
          transition: "opacity 0.04s ease-out" 
        }} 
      />

      {/* Red Alert warning beacon border flash */}
      {isActive && <div className="lockdown-flash" />}

      <AnimatePresence>
        {isActive && (
          <>
            {/* Rain canvas */}
            <canvas
              ref={canvasRef}
              className="fixed inset-0 z-20 pointer-events-none mix-blend-screen"
            />

            {/* Emergency UI banners */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              className="fixed top-24 left-1/2 -translate-x-1/2 z-40 bg-red-alert/90 border border-red-alert text-slate-950 font-mono text-[9px] font-bold px-4 py-2 rounded-xl flex items-center space-x-2.5 shadow-2xl shadow-red-alert/15"
            >
              <AlertOctagon size={12} className="animate-spin" />
              <span>WARNING: SECURITY PROTOCOL DEVIATION // FACILITY LOCKDOWN ACTIVE</span>
            </motion.div>

            {/* Prehistoric raptor shadow stalking across the screen */}
            <motion.div
              initial={{ x: "110%", opacity: 0 }}
              animate={{ 
                x: "-110%", 
                opacity: [0, 0.3, 0.3, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 8, 
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 10
              }}
              className="fixed bottom-4 left-0 w-[420px] h-[280px] pointer-events-none z-5 select-none opacity-20 filter blur-[4.5px]"
            >
              <svg viewBox="0 0 512 512" className="w-full h-full fill-red-alert">
                <path d="M496 160c-25 0-54 10-69 22-8-36-39-62-75-62h-40v-24h-16v24h-32c-35 0-64 29-64 64v16h-48c-18 0-32 14-32 32v16h-16v16h-16v32h-16v32h-16v64h16c18 0 32-14 32-32v-16h16v-16h16v-16h48v32h16c35 0 64-29 64-64v-16h40c36 0 67-26 75-62 15 12 44 22 69 22h16v-16h-16zM240 240c0-13 11-24 24-24s24 11 24 24-11 24-24 24-24-11-24-24z" />
              </svg>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Explorer Achievement Badge */}
      <AnimatePresence>
        {showBadge && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-6 z-50 glass-panel p-4.5 rounded-2xl border border-red-alert/30 max-w-sm flex items-start space-x-3.5 shadow-2xl shadow-red-alert/5 cursor-pointer"
            onClick={() => setShowBadge(false)}
          >
            <div className="p-2.5 bg-red-alert/10 border border-red-alert/20 rounded-xl text-red-alert">
              <ShieldAlert size={16} />
            </div>
            <div className="text-left">
              <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase block">Achievement Unlocked</span>
              <h4 className="text-xs font-bold font-display text-white mt-0.5">EXPLORER BADGE</h4>
              <p className="text-[10px] text-slate-400 mt-1 leading-normal font-mono">
                {isActive 
                  ? "Raptor Protocol decrypted. Facility alarm systems, emergency rain controls, and distant heavy footsteps are online."
                  : "Facility systems returned to standby mode. Type 'raptor' again to initiate override."}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
