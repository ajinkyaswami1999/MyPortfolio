"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  alpha: number;
}

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdRef = useRef(0);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 220, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(any-hover: none)");
    if (mediaQuery.matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);

      // Add a trail particle every mouse move (throttled slightly by event loop)
      if (Math.random() > 0.4) {
        setParticles((prev) => [
          ...prev.slice(-12), // Keep last 12 particles
          {
            id: particleIdRef.current++,
            x: e.clientX,
            y: e.clientY,
            alpha: 0.6,
          },
        ]);
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    const addHoverListeners = () => {
      const targets = document.querySelectorAll("a, button, [role='button'], .cursor-pointer");
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
          .map((p) => ({ ...p, alpha: p.alpha - 0.08 }))
          .filter((p) => p.alpha > 0)
      );
    }, 60);

    return () => clearInterval(interval);
  }, [particles]);

  if (!visible) return null;

  return (
    <>
      {/* DNA Nucleotide Trail Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="fixed top-0 left-0 w-1 h-1 rounded-full bg-brand-amber/80 pointer-events-none z-100 mix-blend-screen shadow-[0_0_6px_#C58F2C]"
          style={{
            transform: `translate(${p.x}px, ${p.y}px) translate(-50%, -50%)`,
            opacity: p.alpha,
          }}
        />
      ))}

      {/* Rotating DNA Double Helix Core */}
      <motion.div
        className="fixed top-0 left-0 w-7 h-7 pointer-events-none z-100 mix-blend-screen flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovered ? 1.6 : 1,
        }}
      >
        <motion.svg
          viewBox="0 0 100 100"
          className="w-full h-full text-brand-amber stroke-brand-amber stroke-[6]"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          {/* Double Helix Coils */}
          <path d="M 25,50 C 40,25 60,75 75,50" fill="none" />
          <path d="M 25,50 C 40,75 60,25 75,50" fill="none" opacity="0.5" stroke="#38BDF8" />
          
          {/* Connecting Base Pairs */}
          <line x1="38" y1="40" x2="38" y2="60" strokeWidth="4" />
          <line x1="50" y1="50" x2="50" y2="50" strokeWidth="4" />
          <line x1="62" y1="60" x2="62" y2="40" strokeWidth="4" />
          
          {/* Nucleotide Dots */}
          <circle cx="25" cy="50" r="5" fill="#C58F2C" />
          <circle cx="75" cy="50" r="5" fill="#38BDF8" />
        </motion.svg>
      </motion.div>
    </>
  );
}
