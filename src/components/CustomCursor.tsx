"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  alpha: number;
  size: number;
  color: string;
}

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdRef = useRef(0);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 260, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(any-hover: none)");
    if (mediaQuery.matches) return;

    const colors = ["#F59E0B", "#F43F5E", "#0284C7", "#FB923C"];

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);

      // Add energy spark trail
      if (Math.random() > 0.35) {
        setParticles((prev) => [
          ...prev.slice(-14), // Keep last 14 particles
          {
            id: particleIdRef.current++,
            x: e.clientX,
            y: e.clientY,
            alpha: 0.75,
            size: Math.random() * 3 + 1.5,
            color: colors[Math.floor(Math.random() * colors.length)],
          },
        ]);
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    const addHoverListeners = () => {
      const targets = document.querySelectorAll("a, button, [role='button'], .cursor-pointer, input, textarea");
      targets.forEach((target) => {
        target.addEventListener("mouseenter", () => setIsHovered(true));
        target.addEventListener("mouseleave", () => setIsHovered(false));
      });
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
    };
  }, [cursorX, cursorY, visible]);

  // Fade out particles over time
  useEffect(() => {
    if (particles.length === 0) return;
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({ ...p, alpha: p.alpha - 0.09 }))
          .filter((p) => p.alpha > 0)
      );
    }, 50);

    return () => clearInterval(interval);
  }, [particles]);

  if (!visible) return null;

  return (
    <>
      {/* Anime Ki Spark Trail (Pastel Gold & Cyan) */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="fixed top-0 left-0 rounded-full pointer-events-none z-100"
          style={{
            transform: `translate(${p.x}px, ${p.y}px) translate(-50%, -50%)`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 6px ${p.color}`,
            opacity: p.alpha,
          }}
        />
      ))}

      {/* Scouter HUD / Targeting Crosshair Core */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-100 flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovered ? 1.5 : 1,
        }}
      >
        <motion.svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_2px_6px_rgba(245,158,11,0.35)]"
          animate={{ rotate: isHovered ? 180 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Outer Segmented Reticle (Capsule Ice Cyan) */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#0284C7"
            strokeWidth="3"
            strokeDasharray="18, 14"
            opacity={isHovered ? "0.95" : "0.75"}
          />

          {/* Crosshair Notches (Super Saiyan Gold) */}
          <line x1="50" y1="2" x2="50" y2="16" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="50" y1="84" x2="50" y2="98" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="2" y1="50" x2="16" y2="50" stroke="#0284C7" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="84" y1="50" x2="98" y2="50" stroke="#0284C7" strokeWidth="3.5" strokeLinecap="round" />

          {/* Central Targeting Dot */}
          <circle cx="50" cy="50" r="4.5" fill="#F59E0B" />
          <circle cx="50" cy="50" r="2" fill="#0F172A" />
        </motion.svg>
      </motion.div>
    </>
  );
}
