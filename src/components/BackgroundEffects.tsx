"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Code, Database, Bug, Cpu, Layers, Play } from "lucide-react";

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

  // 1. Cursor glow positioning with interpolation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;
    const updateGlow = () => {
      setTargetGlow((prev) => {
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;
        // Interpolation factor for smooth lag effect
        const ease = 0.08;
        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease,
        };
      });
      animationFrameId = requestAnimationFrame(updateGlow);
    };
    animationFrameId = requestAnimationFrame(updateGlow);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition]);

  // 2. Canvas-based floating particles for high performance
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
    }[] = [];

    const numParticles = 40;
    const colors = ["rgba(0, 242, 254, 0.4)", "rgba(79, 172, 254, 0.3)", "rgba(127, 0, 255, 0.3)"];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        speedY: -(Math.random() * 0.4 + 0.1), // Float upwards
        speedX: (Math.random() - 0.5) * 0.2, // Drifting sideways
        opacity: Math.random() * 0.5 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.opacity += Math.sin(Date.now() * p.pulseSpeed) * 0.01;

        // Reset if floats off screen
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0 || p.x > width) {
          p.speedX *= -1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(0.8, p.opacity));
        ctx.fill();
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

  // Floating QA Cards Configuration
  const floatingCards: FloatingCard[] = [
    {
      id: 1,
      text: "API: 200 OK",
      subtext: "Payload Valid",
      icon: <Code size={14} />,
      colorClass: "border-brand-cyan/20 text-brand-cyan bg-brand-cyan/5",
      initialX: "10%",
      initialY: "15%",
      duration: 25,
    },
    {
      id: 2,
      text: "SQL: Commit",
      subtext: "Ledger Audited",
      icon: <Database size={14} />,
      colorClass: "border-brand-blue/20 text-brand-blue bg-brand-blue/5",
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
      colorClass: "border-accent-sky/20 text-accent-sky bg-accent-sky/5",
      initialX: "12%",
      initialY: "70%",
      duration: 27,
    },
    {
      id: 5,
      text: "eKYC: Pass",
      subtext: "UIDAI Verified",
      icon: <Layers size={14} />,
      colorClass: "border-brand-cyan/20 text-brand-cyan bg-brand-cyan/5",
      initialX: "45%",
      initialY: "80%",
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
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#03030d]">
      {/* 1. Moving CSS grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#00f2fe_1px,transparent_1px),linear-gradient(to_bottom,#00f2fe_1px,transparent_1px)] bg-[size:5rem_5rem]" 
        style={{
          animation: "gridMovement 40s linear infinite",
        }}
      />
      <style jsx global>{`
        @keyframes gridMovement {
          0% { background-position: 0 0; }
          100% { background-position: 5rem 5rem; }
        }
      `}</style>

      {/* 2. Canvas Floating Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* 3. Aurora Radial Gradient Blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full aurora-circle-1 filter blur-[150px] opacity-25" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full aurora-circle-2 filter blur-[180px] opacity-20" />
      <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full aurora-circle-3 filter blur-[140px] opacity-15" />

      {/* 4. Cursor Glow */}
      <div
        className="absolute w-[350px] h-[350px] rounded-full pointer-events-none filter blur-[80px] opacity-[0.15] bg-radial from-brand-cyan via-brand-blue to-transparent transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${targetGlow.x}px`,
          top: `${targetGlow.y}px`,
        }}
      />

      {/* 5. Floating QA Cards */}
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
