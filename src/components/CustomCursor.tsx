"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device supports hover (not mobile/tablet)
    const mediaQuery = window.matchMedia("(any-hover: none)");
    if (mediaQuery.matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
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

    // Initial attachment and mutation observer to watch dynamic DOM insertions
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

  if (!visible) return null;

  return (
    <>
      {/* Center glowing dot representing fossil core */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-brand-amber pointer-events-none z-100 mix-blend-screen shadow-[0_0_10px_#C58F2C]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovered ? 1.6 : 1,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      />
      {/* Outer ring representing diagnostic targeting scope */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-amber/30 pointer-events-none z-100 flex items-center justify-center mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovered ? 1.5 : 1,
          borderColor: isHovered ? "#38BDF8" : "rgba(197, 143, 44, 0.3)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {/* Subtle crosshairs in cursor ring */}
        <div className="w-1 h-[1px] bg-brand-amber/20 absolute left-0" />
        <div className="w-1 h-[1px] bg-brand-amber/20 absolute right-0" />
        <div className="h-1 w-[1px] bg-brand-amber/20 absolute top-0" />
        <div className="h-1 w-[1px] bg-brand-amber/20 absolute bottom-0" />
      </motion.div>
    </>
  );
}
