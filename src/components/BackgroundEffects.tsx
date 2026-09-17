"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [targetGlow, setTargetGlow] = useState({ x: 0, y: 0 });

  // Mouse parallax values
  const parallaxX = useMotionValue(0);
  const parallaxY = useMotionValue(0);

  // 1. Mouse tracking & parallax interpolation
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

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition, parallaxX, parallaxY]);

  // Parallax layer transforms
  const skyShiftX = useTransform(parallaxX, [-0.5, 0.5], [-20, 20]);
  const skyShiftY = useTransform(parallaxY, [-0.5, 0.5], [-12, 12]);
  const sfxShiftX = useTransform(parallaxX, [-0.5, 0.5], [25, -25]);
  const sfxShiftY = useTransform(parallaxY, [-0.5, 0.5], [15, -15]);

  // 2. High-Performance Canvas Engine: Manga Speedlines, Rising Ki Aura, Serious Punch Shockwaves & SSJ Lightning
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

    // Super Saiyan Rising Ki Embers
    const numKiParticles = 45;
    const kiColors = [
      "rgba(245, 158, 11, 0.7)",   // Super Saiyan Butter Gold
      "rgba(251, 146, 60, 0.65)",  // Kame Gi Peach Orange
      "rgba(2, 132, 199, 0.6)",    // Capsule Corp Ice Cyan
      "rgba(244, 63, 94, 0.55)",   // Serious Punch Coral Rose
      "rgba(16, 185, 129, 0.55)",  // Shenron Jade Ki
    ];

    const kiParticles = Array.from({ length: numKiParticles }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 1,
      speedY: -(Math.random() * 0.85 + 0.35), // Rising upward like Super Saiyan Ki
      speedX: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.2,
      baseOpacity: Math.random() * 0.4 + 0.25,
      pulseSpeed: Math.random() * 0.03 + 0.015,
      color: kiColors[Math.floor(Math.random() * kiColors.length)],
      trailLength: Math.random() * 9 + 4,
    }));

    // One Punch Man Serious Shockwave Rings
    const shockwaves: {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      speed: number;
      opacity: number;
      color: string;
    }[] = [];

    let shockwaveTimer = 0;

    // Super Saiyan 2 Electric Lightning Bolts
    let lightningBolts: {
      segments: { x: number; y: number }[];
      color: string;
      life: number;
    }[] = [];

    let frameCount = 0;

    const animate = () => {
      frameCount++;
      ctx.clearRect(0, 0, width, height);

      const centerX = width * 0.5;
      const centerY = height * 0.45;

      // ----------------------------------------------------
      // A. Manga Speedlines (集中線 / Shuchusen)
      // Delicate, rotating, radiant speedlines centered behind the content
      // ----------------------------------------------------
      ctx.save();
      ctx.translate(centerX, centerY);
      const numRays = 36;
      const angleStep = (Math.PI * 2) / numRays;
      const rayOffset = (frameCount * 0.0015) % angleStep;

      for (let i = 0; i < numRays; i++) {
        const angle = i * angleStep + rayOffset;
        const innerR = Math.min(width, height) * 0.28;
        const outerR = Math.max(width, height) * 1.1;

        // Modulate ray length and thickness for authentic manga hand-drawn feel
        const rayWidth = (i % 3 === 0 ? 1.8 : 0.9);
        const rayAlpha = (i % 2 === 0 ? 0.045 : 0.025);

        ctx.beginPath();
        ctx.moveTo(Math.cos(angle) * innerR, Math.sin(angle) * innerR);
        ctx.lineTo(Math.cos(angle) * outerR, Math.sin(angle) * outerR);
        ctx.strokeStyle = i % 4 === 0 ? "rgba(245, 158, 11, 0.45)" : "rgba(2, 132, 199, 0.35)";
        ctx.lineWidth = rayWidth;
        ctx.globalAlpha = rayAlpha;
        ctx.stroke();
      }
      ctx.restore();
      ctx.globalAlpha = 1.0;

      // ----------------------------------------------------
      // B. Serious Punch Shockwave Rings (OPM Atmospheric Rings)
      // ----------------------------------------------------
      shockwaveTimer++;
      if (shockwaveTimer % 160 === 0) {
        shockwaves.push({
          x: centerX + (Math.random() - 0.5) * 150,
          y: centerY + (Math.random() - 0.5) * 100,
          radius: 20,
          maxRadius: Math.max(width, height) * 0.75,
          speed: 2.8,
          opacity: 0.35,
          color: Math.random() > 0.5 ? "rgba(245, 158, 11, " : "rgba(244, 63, 94, ",
        });
      }

      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += sw.speed;
        sw.opacity = Math.max(0, 0.35 * (1 - sw.radius / sw.maxRadius));

        if (sw.radius >= sw.maxRadius) {
          shockwaves.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.ellipse(sw.x, sw.y, sw.radius, sw.radius * 0.58, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `${sw.color}${sw.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([8, 6]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // ----------------------------------------------------
      // C. Super Saiyan Electric Lightning Arcs (SSJ2 / SSJ3 Crackles)
      // ----------------------------------------------------
      if (frameCount % 120 === 0) {
        const startX = Math.random() * width;
        const startY = Math.random() * height * 0.8 + height * 0.1;
        const segments: { x: number; y: number }[] = [{ x: startX, y: startY }];
        let currX = startX;
        let currY = startY;

        const numSegs = Math.floor(Math.random() * 4) + 3;
        for (let s = 0; s < numSegs; s++) {
          currX += (Math.random() - 0.5) * 45;
          currY += (Math.random() - 0.5) * 45;
          segments.push({ x: currX, y: currY });
        }

        lightningBolts.push({
          segments,
          color: Math.random() > 0.5 ? "rgba(245, 158, 11, 0.55)" : "rgba(2, 132, 199, 0.5)",
          life: 14,
        });
      }

      for (let b = lightningBolts.length - 1; b >= 0; b--) {
        const bolt = lightningBolts[b];
        bolt.life--;

        if (bolt.life <= 0) {
          lightningBolts.splice(b, 1);
          continue;
        }

        ctx.beginPath();
        ctx.moveTo(bolt.segments[0].x, bolt.segments[0].y);
        for (let s = 1; s < bolt.segments.length; s++) {
          ctx.lineTo(bolt.segments[s].x, bolt.segments[s].y);
        }
        ctx.strokeStyle = bolt.color;
        ctx.lineWidth = bolt.life % 2 === 0 ? 1.8 : 1.0;
        ctx.stroke();
      }

      // ----------------------------------------------------
      // D. Rising Super Saiyan Ki Particles with Aura Trails
      // ----------------------------------------------------
      kiParticles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.opacity = p.baseOpacity + Math.sin(Date.now() * p.pulseSpeed) * 0.18;

        if (p.y < -15) {
          p.y = height + 15;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        // Trail
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.speedX * 2.5, p.y + p.trailLength);
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.size;
        ctx.globalAlpha = Math.max(0.05, Math.min(0.85, p.opacity));
        ctx.stroke();

        // Core Sparkle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.9, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(0.95, p.opacity + 0.15));
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

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#FAF9F6]">
      
      {/* ============================================================
          LAYER 1: Luminous Anime Horizon Sky Gradients (Pastel DBZ Sky)
          ============================================================ */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50/60 via-[#FAF9F6] to-amber-50/50 pointer-events-none" />

      {/* Super Saiyan Butter Gold & Kame Peach Radiant Glow Spots */}
      <div className="absolute -top-[12%] left-1/2 -translate-x-1/2 w-[70%] h-[55%] rounded-full bg-amber-200/35 filter blur-[150px] pointer-events-none" />
      <div className="absolute top-[30%] -right-[10%] w-[50%] h-[50%] rounded-full bg-rose-200/30 filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[5%] -left-[10%] w-[50%] h-[50%] rounded-full bg-sky-200/35 filter blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-[10%] right-1/4 w-[45%] h-[45%] rounded-full bg-orange-100/40 filter blur-[140px] pointer-events-none" />

      {/* ============================================================
          LAYER 2: Akira Toriyama's Iconic Swirling Anime Clouds & Nimbus Sky
          ============================================================ */}
      <motion.div
        style={{ x: skyShiftX, y: skyShiftY }}
        className="absolute inset-x-0 top-0 h-[480px] pointer-events-none opacity-45 overflow-hidden"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Top Swirling Anime Cloud Bank (Toriyama Akira signature cumulus lobes) */}
          <path
            d="M -50 120 Q 80 40 220 90 Q 360 10 500 70 Q 640 30 780 80 Q 920 10 1060 60 Q 1200 20 1340 80 Q 1460 50 1520 110 L 1520 -50 L -50 -50 Z"
            fill="url(#cloudGrad1)"
            stroke="#BAE6FD"
            strokeWidth="1.5"
            strokeDasharray="4 2"
            opacity="0.75"
          />

          {/* Mid Layer Floating Puffy Clouds */}
          <g className="animate-[float_8s_ease-in-out_infinite]" opacity="0.65">
            <path
              d="M 120 180 C 120 155 145 135 175 135 C 190 120 225 120 245 135 C 275 125 310 145 310 170 C 330 175 340 195 330 215 C 320 230 130 230 120 180 Z"
              fill="url(#cloudGrad2)"
              stroke="#FDE68A"
              strokeWidth="1.2"
            />
            {/* Swirl detail line inside cloud */}
            <path
              d="M 160 180 Q 190 170 210 185 Q 230 200 255 185"
              stroke="#F59E0B"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
            />
          </g>

          <g className="animate-[float_10s_ease-in-out_infinite_reverse]" opacity="0.6">
            <path
              d="M 1020 160 C 1020 135 1045 115 1075 115 C 1090 100 1125 100 1145 115 C 1175 105 1210 125 1210 150 C 1230 155 1240 175 1230 195 C 1220 210 1030 210 1020 160 Z"
              fill="url(#cloudGrad2)"
              stroke="#BAE6FD"
              strokeWidth="1.2"
            />
            <path
              d="M 1060 160 Q 1090 150 1110 165 Q 1130 180 1155 165"
              stroke="#0284C7"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
            />
          </g>

          <defs>
            <linearGradient id="cloudGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#FEF9C3" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.75" />
            </linearGradient>
            <linearGradient id="cloudGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FEF08A" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* ============================================================
          LAYER 3: Manga Screentone & Subtle Cyber Grid Backdrop
          ============================================================ */}
      <div className="absolute inset-0 manga-halftone opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284C70B_1px,transparent_1px),linear-gradient(to_bottom,#0284C70B_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none opacity-40" />

      {/* ============================================================
          LAYER 4: Massive Japanese Manga Onomatopoeia SFX Watermarks (オノマトペ)
          ============================================================ */}
      <motion.div
        style={{ x: sfxShiftX, y: sfxShiftY }}
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      >
        {/* "GOGOGO..." (ゴゴゴゴ...) - Menacing Ki Rumble Watermark on Right */}
        <div className="absolute top-[22%] right-4 md:right-16 text-right font-display font-black text-amber-500/10 text-7xl md:text-9xl leading-tight tracking-tighter rotate-12 pointer-events-none">
          ゴ<br />ゴ<br />ゴ<br />ゴ
        </div>

        {/* "DOKAAN!" (ドカーン！) - Explosive Blast Watermark on Upper Left */}
        <div className="absolute top-[14%] left-4 md:left-12 font-display font-black text-rose-500/10 text-6xl md:text-8xl tracking-widest -rotate-6 pointer-events-none">
          ドカーン！
        </div>

        {/* "ZUBAT!" (ズバッ！) - High-Speed Serious Strike on Lower Left */}
        <div className="absolute bottom-[24%] left-6 md:left-16 font-display font-black text-sky-500/10 text-6xl md:text-8xl tracking-tight rotate-6 pointer-events-none">
          ズバッ！
        </div>

        {/* "SERIOUS PUNCH // 必殺マジシリーズ" - Kanji Watermark across mid screen */}
        <div className="absolute top-[48%] left-1/2 -translate-x-1/2 font-display font-black text-slate-400/[0.04] text-8xl md:text-[14rem] tracking-widest uppercase whitespace-nowrap pointer-events-none">
          必殺技
        </div>

        {/* Capsule Corp Blueprint Dome & Logo Watermark (Left Center) */}
        <div className="absolute top-[38%] -left-12 md:left-4 w-72 h-72 rounded-full border border-sky-300/20 border-dashed flex items-center justify-center pointer-events-none">
          <div className="w-56 h-56 rounded-full border border-amber-300/20 flex items-center justify-center">
            <span className="text-[10px] font-mono font-black text-sky-700/20 tracking-widest uppercase">
              CAPSULE CORP // WEST CITY LAB
            </span>
          </div>
        </div>

        {/* Hero Association S-Class Disaster Level Compass Watermark (Right Center) */}
        <div className="absolute top-[52%] -right-12 md:right-10 w-80 h-80 rounded-full border border-rose-300/20 flex items-center justify-center pointer-events-none">
          <div className="w-60 h-60 rounded-full border border-dashed border-amber-400/25 flex items-center justify-center">
            <span className="text-[10px] font-mono font-black text-rose-700/20 tracking-widest uppercase">
              HERO ASSN // DISASTER: GOD & DRAGON
            </span>
          </div>
        </div>
      </motion.div>

      {/* ============================================================
          LAYER 5: High-Performance Canvas Engine (Speedlines, Shockwaves, SSJ Lightning & Ki Sparks)
          ============================================================ */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* ============================================================
          LAYER 6: Super Saiyan Ki Golden Aura Flame Horizon (Bottom Edge)
          ============================================================ */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-amber-100/40 via-yellow-50/20 to-transparent pointer-events-none" />
      <svg
        className="absolute inset-x-0 bottom-0 w-full h-28 pointer-events-none opacity-30"
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 120 L 0 50 Q 120 10 240 60 Q 360 110 480 40 Q 600 0 720 70 Q 840 120 960 50 Q 1080 0 1200 60 Q 1320 110 1440 40 L 1440 120 Z"
          fill="url(#kiFlameGrad)"
        />
        <defs>
          <linearGradient id="kiFlameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#FEF08A" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Cursor Soft Ki Glow Halo */}
      <div
        className="absolute w-[360px] h-[360px] rounded-full pointer-events-none filter blur-[90px] opacity-[0.25] bg-radial from-amber-300/60 via-sky-300/30 to-transparent transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${targetGlow.x}px`,
          top: `${targetGlow.y}px`,
        }}
      />

    </div>
  );
}

