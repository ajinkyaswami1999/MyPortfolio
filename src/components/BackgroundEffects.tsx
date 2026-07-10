"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Code, Database, Bug, Cpu, Layers, Play, Eye } from "lucide-react";

interface FloatingCard {
  id: number;
  text: string;
  subtext: string;
  icon: React.ReactNode;
  colorClass: string;
  initialX: string;
  initialY: string;
  duration: number;
}

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [targetGlow, setTargetGlow] = useState({ x: 0, y: 0 });
  const [securityStatus, setSecurityStatus] = useState("SECURE");
  const [coordinates, setCoordinates] = useState("0.000, 0.000");

  // Mouse parallax values
  const parallaxX = useMotionValue(0);
  const parallaxY = useMotionValue(0);

  // 1. Cursor glow positioning with interpolation & parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      const xOffset = (clientX / width) - 0.5;
      const yOffset = (clientY / height) - 0.5;
      
      parallaxX.set(xOffset);
      parallaxY.set(yOffset);
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;
    const updateGlow = () => {
      setTargetGlow((prev) => {
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;
        const ease = 0.08;
        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease,
        };
      });
      animationFrameId = requestAnimationFrame(updateGlow);
    };
    animationFrameId = requestAnimationFrame(updateGlow);

    // Randomize telemetry coordinates & alert indicators
    const interval = setInterval(() => {
      const lat = (8.4231 + Math.random() * 0.01).toFixed(4);
      const lng = (78.312 + Math.random() * 0.01).toFixed(4);
      setCoordinates(`${lat}° N, ${lng}° W`);
      
      if (Math.random() > 0.85) {
        setSecurityStatus("WARNING: GATEWAY SCANNING");
        setTimeout(() => setSecurityStatus("SECURE"), 3000);
      }
    }, 4000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      clearInterval(interval);
    };
  }, [mousePosition, parallaxX, parallaxY]);

  // Parallax layer transforms
  const backgroundShiftX = useTransform(parallaxX, [-0.5, 0.5], [-20, 20]);
  const backgroundShiftY = useTransform(parallaxY, [-0.5, 0.5], [-20, 20]);
  const hudShiftX = useTransform(parallaxX, [-0.5, 0.5], [15, -15]);
  const hudShiftY = useTransform(parallaxY, [-0.5, 0.5], [15, -15]);

  // 2. Canvas-based floating particles & rain simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
    };
    window.addEventListener("resize", handleResize);

    const particles: {
      x: number;
      y: number;
      radius: number;
      speedY: number;
      speedX: number;
      opacity: number;
      pulseSpeed: number;
      color: string;
      isRain?: boolean;
    }[] = [];

    // Ambient floating embers
    const numParticles = 30;
    const colors = ["rgba(255, 159, 28, 0.35)", "rgba(0, 240, 255, 0.25)", "rgba(255, 59, 48, 0.2)"];
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        speedY: -(Math.random() * 0.4 + 0.1),
        speedX: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.5 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Heavy rain streaks
    const numRain = 40;
    for (let i = 0; i < numRain; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 0.5 + 0.5,
        speedY: Math.random() * 4 + 6,
        speedX: -1.5, // Drifting diagonal rain
        opacity: Math.random() * 0.2 + 0.1,
        pulseSpeed: 0,
        color: "rgba(0, 240, 255, 0.35)",
        isRain: true,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;

        if (!p.isRain) {
          p.opacity += Math.sin(Date.now() * p.pulseSpeed) * 0.005;
        }

        // Reset if moves out of boundary
        if (p.isRain) {
          if (p.y > height) {
            p.y = 0;
            p.x = Math.random() * width;
          }
        } else {
          if (p.y < 0) {
            p.y = height;
            p.x = Math.random() * width;
          }
        }

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        if (p.isRain) {
          // Draw diagonal rain streaks
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + 3, p.y + 12);
          ctx.strokeStyle = p.color;
          ctx.lineWidth = p.radius;
          ctx.globalAlpha = p.opacity;
          ctx.stroke();
        } else {
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0.1, Math.min(0.8, p.opacity));
          ctx.fill();
        }
      });

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const floatingCards: FloatingCard[] = [
    {
      id: 1,
      text: "API: 200 OK",
      subtext: "Payload Valid",
      icon: <Code size={14} />,
      colorClass: "border-brand-cyan/20 text-brand-cyan bg-brand-cyan/5",
      initialX: "12%",
      initialY: "15%",
      duration: 25,
    },
    {
      id: 2,
      text: "SQL: Commit",
      subtext: "Ledger Audited",
      icon: <Database size={14} />,
      colorClass: "border-brand-orange/20 text-brand-orange bg-brand-orange/5",
      initialX: "85%",
      initialY: "20%",
      duration: 30,
    },
    {
      id: 3,
      text: "Bug: Closed",
      subtext: "Verified Fix",
      icon: <Bug size={14} />,
      colorClass: "border-brand-purple/20 text-brand-purple bg-brand-purple/5",
      initialX: "78%",
      initialY: "65%",
      duration: 28,
    },
    {
      id: 4,
      text: "UPI: Secure",
      subtext: "Reconciled 100%",
      icon: <Cpu size={14} />,
      colorClass: "border-brand-cyan/20 text-brand-cyan bg-brand-cyan/5",
      initialX: "12%",
      initialY: "70%",
      duration: 27,
    },
    {
      id: 5,
      text: "eKYC: Pass",
      subtext: "UIDAI Verified",
      icon: <Layers size={14} />,
      colorClass: "border-brand-orange/20 text-brand-orange bg-brand-orange/5",
      initialX: "45%",
      initialY: "82%",
      duration: 32,
    },
    {
      id: 6,
      text: "Auto: Pass",
      subtext: "PyTest Suite",
      icon: <Play size={12} fill="currentColor" />,
      colorClass: "border-brand-purple/20 text-brand-purple bg-brand-purple/5",
      initialX: "50%",
      initialY: "10%",
      duration: 24,
    },
  ];

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#07090D]">
      
      {/* Layer 1: Parallax Fullscreen Unreal Engine Backdrop */}
      <motion.div 
        className="absolute inset-[-40px] bg-cover bg-center bg-no-repeat opacity-[0.24] mix-blend-lighten pointer-events-none transition-transform ease-out duration-300"
        style={{ 
          backgroundImage: 'url("/ingen_facility.png")',
          x: backgroundShiftX,
          y: backgroundShiftY
        }}
      />

      {/* Layer 2: Moving Volumetric Fog Gradients */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
        <div className="absolute w-[200%] h-[100%] bg-gradient-to-r from-transparent via-slate-700 to-transparent top-0 animate-[fogMove_60s_linear_infinite]" />
      </div>
      <style jsx>{`
        @keyframes fogMove {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(50%); }
        }
      `}</style>

      {/* Layer 3: Moving CSS grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#00f2fe_1px,transparent_1px),linear-gradient(to_bottom,#00f2fe_1px,transparent_1px)] bg-[size:5rem_5rem]" 
        style={{
          animation: "gridMovement 45s linear infinite",
        }}
      />
      <style jsx global>{`
        @keyframes gridMovement {
          0% { background-position: 0 0; }
          100% { background-position: 5rem 5rem; }
        }
      `}</style>

      {/* Layer 4: Watchtower Blinking Warning LEDs */}
      <div className="absolute top-[40%] left-[25%] w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping opacity-60" />
      <div className="absolute top-[40%] left-[25%] w-1 h-1 rounded-full bg-brand-orange" />
      
      <div className="absolute top-[32%] right-[22%] w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping opacity-60" style={{ animationDelay: "1s" }} />
      <div className="absolute top-[32%] right-[22%] w-1 h-1 rounded-full bg-brand-cyan" />

      {/* Layer 5: Canvas Floating Particles & Rain streaks */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Layer 6: Holographic HUD Overlay & Radar (Parallax shift) */}
      <motion.div
        style={{ x: hudShiftX, y: hudShiftY }}
        className="absolute bottom-6 left-6 flex items-center space-x-3 bg-slate-950/65 border border-white/5 p-3 rounded-2xl backdrop-blur-md text-[8.5px] font-mono text-left tracking-wide"
      >
        <div className="relative w-8 h-8 rounded-full border border-brand-cyan/25 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-dashed border-brand-cyan/35 animate-[spin_6s_linear_infinite]" />
          <Eye size={10} className="text-brand-cyan animate-pulse" />
        </div>
        <div>
          <span className="text-[7px] text-slate-500 font-bold block">SIGNAL TELEMETRY:</span>
          <span className="text-brand-cyan font-bold block mt-0.5">{coordinates}</span>
          <span className="text-[7px] font-bold mt-0.5 block flex items-center gap-1">
            STATUS: <span className="text-brand-orange animate-pulse">{securityStatus}</span>
          </span>
        </div>
      </motion.div>

      {/* Layer 7: Cursor Glow */}
      <div
        className="absolute w-[350px] h-[350px] rounded-full pointer-events-none filter blur-[80px] opacity-[0.15] bg-radial from-brand-cyan via-brand-blue to-transparent transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${targetGlow.x}px`,
          top: `${targetGlow.y}px`,
        }}
      />

      {/* Layer 8: Floating QA Cards */}
      {floatingCards.map((card) => (
        <motion.div
          key={card.id}
          className={`absolute flex items-center space-x-2.5 px-3 py-2 border rounded-xl shadow-xl backdrop-blur-md ${card.colorClass}`}
          style={{ left: card.initialX, top: card.initialY }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 6,
            delay: card.id * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="p-1.5 bg-slate-950/60 rounded-md border border-white/5 shrink-0">
            {card.icon}
          </div>
          <div className="text-left font-mono">
            <div className="text-[10px] font-bold tracking-tight text-white leading-none mb-0.5">
              {card.text}
            </div>
            <div className="text-[8px] text-slate-400 font-medium leading-none">
              {card.subtext}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
