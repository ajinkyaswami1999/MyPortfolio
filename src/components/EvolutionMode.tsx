"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, CloudRain, ShieldAlert } from "lucide-react";

export default function EvolutionMode() {
  const [isActive, setIsActive] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [lightningIntensity, setLightningIntensity] = useState(0);
  const typedBuffer = useRef("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Keyboard listener for evolve / raptor
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      typedBuffer.current += e.key.toLowerCase();
      
      // Limit buffer length
      if (typedBuffer.current.length > 20) {
        typedBuffer.current = typedBuffer.current.slice(-20);
      }

      if (typedBuffer.current.endsWith("evolve") || typedBuffer.current.endsWith("raptor")) {
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
      // Rapid double flash
      setLightningIntensity(0.85);
      setTimeout(() => setLightningIntensity(0), 100);
      setTimeout(() => {
        setLightningIntensity(0.95);
        setTimeout(() => setLightningIntensity(0), 150);
      }, 250);
    };

    // Random lightning every 8 to 15 seconds
    const interval = setInterval(() => {
      if (Math.random() > 0.4) {
        triggerLightning();
      }
    }, 6000);

    // Initial trigger
    triggerLightning();

    return () => clearInterval(interval);
  }, [isActive]);

  // Seismic Rumbling (footsteps)
  useEffect(() => {
    if (!isActive) {
      document.body.classList.remove("screen-rumble");
      return;
    }

    const triggerFootstep = () => {
      document.body.classList.add("screen-rumble");
      setTimeout(() => {
        document.body.classList.remove("screen-rumble");
      }, 350);
    };

    // Seismic footstep every 5 seconds
    const interval = setInterval(triggerFootstep, 5000);
    triggerFootstep(); // Initial step

    return () => {
      clearInterval(interval);
      document.body.classList.remove("screen-rumble");
    };
  }, [isActive]);

  // Canvas Rain Animation
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

    const rainCount = 120;
    const rainDrops: { x: number; y: number; length: number; speed: number }[] = [];

    for (let i = 0; i < rainCount; i++) {
      rainDrops.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        length: Math.random() * 20 + 10,
        speed: Math.random() * 12 + 10,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = "rgba(197, 143, 44, 0.18)"; // Faint amber rain lines
      ctx.lineWidth = 1;
      ctx.lineCap = "round";

      for (let i = 0; i < rainCount; i++) {
        const drop = rainDrops[i];
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x + 1.5, drop.y + drop.length);
        ctx.stroke();

        drop.y += drop.speed;
        drop.x += 1; // Slanted rain

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
          transition: "opacity 0.05s ease-out" 
        }} 
      />

      <AnimatePresence>
        {isActive && (
          <>
            {/* Rain Canvas overlay */}
            <canvas
              ref={canvasRef}
              className="fixed inset-0 z-20 pointer-events-none mix-blend-screen"
            />

            {/* Ambient dark amber sky vignette */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#C58F2C/10_100%)] z-10 pointer-events-none"
            />

            {/* T-Rex silhouette running across the background */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ 
                x: "100%", 
                opacity: [0, 0.25, 0.25, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 9, 
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 12
              }}
              className="fixed bottom-0 left-0 w-[500px] h-[350px] pointer-events-none z-5 select-none opacity-20 filter blur-[4px]"
            >
              {/* Custom T-Rex SVG Shadow outline */}
              <svg viewBox="0 0 512 512" className="w-full h-full fill-brand-amber">
                <path d="M496 160c-25 0-54 10-69 22-8-36-39-62-75-62h-40v-24h-16v24h-32c-35 0-64 29-64 64v16h-48c-18 0-32 14-32 32v16h-16v16h-16v32h-16v32h-16v64h16c18 0 32-14 32-32v-16h16v-16h16v-16h48v32h16c35 0 64-29 64-64v-16h40c36 0 67-26 75-62 15 12 44 22 69 22h16v-16h-16zM240 240c0-13 11-24 24-24s24 11 24 24-11 24-24 24-24-11-24-24z" />
              </svg>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Evolution Mode Unlocked Badge */}
      <AnimatePresence>
        {showBadge && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-6 z-50 glass-panel p-4.5 rounded-2xl border border-brand-amber/30 max-w-sm flex items-start space-x-3.5 shadow-2xl shadow-brand-amber/5 cursor-pointer"
            onClick={() => setShowBadge(false)}
          >
            <div className="p-2.5 bg-brand-amber/10 border border-brand-amber/20 rounded-xl text-brand-amber">
              <Sparkles size={16} />
            </div>
            <div>
              <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase block">Secret Unlocked</span>
              <h4 className="text-xs font-bold font-display text-white mt-0.5">EVOLUTION MODE ACTIVE</h4>
              <p className="text-[10px] text-slate-400 mt-1 leading-normal">
                {isActive 
                  ? "Amber rain, seismograph footstep rumbles, and prehistoric shadows have awakened."
                  : "Prehistoric atmosphere returned to hibernation. Type 'evolve' again to awaken."}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
