"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Cpu, Database, Award, Compass, ArrowRight, ShieldCheck, Layers, ClipboardList, Briefcase, Calendar, Star, Users } from "lucide-react";
import { projectsData } from "@/data/projects";

// Animated counter hook logic local to Bento Grid
function AnimatedCounter({ value, isDecimal, suffix = "", duration = 1.5 }: { value: number; isDecimal?: boolean; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalFrames = duration * 60;
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeProgress = progress * (2 - progress);
      const currentCount = start + easeProgress * (end - start);

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(isDecimal ? Math.round(currentCount * 10) / 10 : Math.floor(currentCount));
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [isInView, value, isDecimal, duration]);

  return (
    <span ref={ref} className="font-extrabold text-2xl md:text-3xl font-display text-white tracking-tight">
      {isDecimal ? count.toFixed(1) : count}
      <span className="text-brand-cyan pl-0.5">{suffix}</span>
    </span>
  );
}

export default function BentoGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="py-24 relative bg-[#03030d] overflow-hidden">
      {/* Background Aurora */}
      <div className="absolute top-1/2 left-10 w-96 h-96 rounded-full aurora-circle-1 filter blur-[120px] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left max-w-3xl">
          <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase mb-2 block">Competencies</span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
            Professional Overview
          </h2>
          <p className="text-slate-400 mt-4 text-sm md:text-base leading-relaxed">
            A snapshot of my software engineering capabilities, business results, and credentials arranged in a premium bento grid.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-cyan to-brand-blue mt-4" />
        </div>

        {/* Bento Grid layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Card 1: Skills Categories (Double width) */}
          <motion.div
            variants={cardVariants}
            className="glass-panel p-6 md:p-8 rounded-3xl border border-white/5 md:col-span-2 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-2.5 mb-6">
                <div className="p-2.5 bg-slate-900/60 border border-white/5 rounded-xl text-brand-cyan">
                  <ClipboardList size={20} />
                </div>
                <h3 className="text-lg font-bold font-display text-white">
                  Technical Core Skills
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Manual testing column */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase block">
                    Quality Assurance
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {["Regression", "Functional", "Smoke", "Sanity", "UAT"].map((s) => (
                      <span key={s} className="text-xs px-2.5 py-1 bg-slate-950 border border-slate-900 text-slate-350 rounded-lg">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* API & DB column */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase block">
                    API & Database
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {["Postman", "REST APIs", "JSON schemas", "MySQL", "SQL Auditing"].map((s) => (
                      <span key={s} className="text-xs px-2.5 py-1 bg-slate-950 border border-slate-900 text-slate-350 rounded-lg">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Automation & Scripts column */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase block">
                    Automation & Dev
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {["Python", "Selenium", "Playwright", "Appium", "React / TS"].map((s) => (
                      <span key={s} className="text-xs px-2.5 py-1 bg-slate-950 border border-slate-900 text-slate-350 rounded-lg">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-900 flex justify-between items-center">
              <span className="text-[10px] font-mono text-slate-500">Continuous Integration Ready</span>
              <span className="text-glow-cyan text-brand-cyan text-xs font-semibold">Ready to deploy</span>
            </div>
          </motion.div>

          {/* Card 2: Key Metrics (Normal width) */}
          <motion.div
            variants={cardVariants}
            className="glass-panel p-6 md:p-8 rounded-3xl border border-white/5 flex flex-col justify-between"
          >
            <div className="flex items-center space-x-2.5 mb-6">
              <div className="p-2.5 bg-slate-900/60 border border-white/5 rounded-xl text-brand-blue">
                <Briefcase size={20} />
              </div>
              <h3 className="text-lg font-bold font-display text-white">
                Key Accomplishments
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <AnimatedCounter value={4} suffix="+" />
                <span className="text-[10px] text-slate-500 font-medium mt-1">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <AnimatedCounter value={20} suffix="+" />
                <span className="text-[10px] text-slate-500 font-medium mt-1">Projects Completed</span>
              </div>
              <div className="flex flex-col">
                <AnimatedCounter value={1000} suffix="+" />
                <span className="text-[10px] text-slate-500 font-medium mt-1">Regression Cases</span>
              </div>
              <div className="flex flex-col">
                <AnimatedCounter value={100} suffix="+" />
                <span className="text-[10px] text-slate-500 font-medium mt-1">Production APIs</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-900 text-[10px] text-slate-500 flex justify-between">
              <span>DB Accuracy: 99.5%</span>
              <span>Load Success: 95%</span>
            </div>
          </motion.div>

          {/* Card 3: Why Hire Me Summary (Normal width) */}
          <motion.div
            variants={cardVariants}
            className="glass-panel p-6 md:p-8 rounded-3xl border border-white/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-2.5 mb-6">
                <div className="p-2.5 bg-slate-900/60 border border-white/5 rounded-xl text-brand-purple">
                  <Star size={20} />
                </div>
                <h3 className="text-lg font-bold font-display text-white">
                  Why Hire Me
                </h3>
              </div>

              <ul className="space-y-3 text-xs text-slate-400">
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2 font-bold">•</span>
                  <span><strong>Analytical:</strong> Strong debugging logic tracking transactions.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2 font-bold">•</span>
                  <span><strong>Domain Expertise:</strong> FinTech ledger, settlements & GST splits.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2 font-bold">•</span>
                  <span><strong>Automation:</strong> Scripting automated test frameworks in Python.</span>
                </li>
              </ul>
            </div>

            <Link
              href="/#why-hire-me"
              className="mt-6 inline-flex items-center space-x-1 text-xs font-bold text-brand-cyan hover:underline group"
            >
              <span>Explore details</span>
              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Card 4: VOXELIQUE Entrepreneurship Preview (Normal width) */}
          <motion.div
            variants={cardVariants}
            className="glass-panel p-6 md:p-8 rounded-3xl border border-white/5 flex flex-col justify-between bg-gradient-to-br from-slate-950 via-slate-900/60 to-brand-purple/5"
          >
            <div>
              <div className="flex items-center space-x-2.5 mb-5">
                <div className="p-2.5 bg-brand-purple/10 border border-brand-purple/20 rounded-xl text-brand-purple">
                  <Compass size={20} />
                </div>
                <h3 className="text-lg font-bold font-display text-white">
                  Voxelique Startup
                </h3>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Founder of VOXELIQUE, a modern 3D printing brand. Applying quality processes (tolerances calibration, print stress testing) and business skills.
              </p>

              <div className="flex flex-wrap gap-1">
                {["CAD Design", "Storefront", "Digital Mktg"].map((t) => (
                  <span key={t} className="text-[10px] px-2 py-0.5 bg-brand-purple/10 border border-brand-purple/25 text-brand-cyan rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/voxelique"
              className="mt-6 inline-flex items-center space-x-1.5 text-xs font-bold text-brand-cyan hover:underline group"
            >
              <span>Read Business Story</span>
              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Card 5: Certifications Stack (Normal width) */}
          <motion.div
            variants={cardVariants}
            className="glass-panel p-6 md:p-8 rounded-3xl border border-white/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-2.5 mb-5">
                <div className="p-2.5 bg-slate-900/60 border border-white/5 rounded-xl text-brand-cyan">
                  <Award size={20} />
                </div>
                <h3 className="text-lg font-bold font-display text-white">
                  Certifications
                </h3>
              </div>

              <div className="space-y-3.5 text-xs text-slate-400">
                <div className="border-l-2 border-brand-cyan/20 pl-3">
                  <h4 className="font-bold text-white leading-tight">API testing pathway</h4>
                  <span className="text-[9px] text-slate-500 font-mono">Postman Academy</span>
                </div>
                <div className="border-l-2 border-brand-blue/20 pl-3">
                  <h4 className="font-bold text-white leading-tight">Load & Performance testing</h4>
                  <span className="text-[9px] text-slate-500 font-mono">JMeter Standards</span>
                </div>
                <div className="border-l-2 border-brand-purple/20 pl-3">
                  <h4 className="font-bold text-white leading-tight">Automation testing</h4>
                  <span className="text-[9px] text-slate-500 font-mono">Python & Appium</span>
                </div>
              </div>
            </div>

            <Link
              href="/#certifications"
              className="mt-5 inline-flex items-center space-x-1 text-xs font-bold text-brand-cyan hover:underline group"
            >
              <span>View all pathways</span>
              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
