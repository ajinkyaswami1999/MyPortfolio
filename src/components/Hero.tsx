"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Play, CheckCircle2, Terminal as TerminalIcon, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-36 pb-16 overflow-hidden bg-[#03030d]"
    >
      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#090915_1px,transparent_1px),linear-gradient(to_bottom,#090915_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none opacity-40" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Content */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-brand-cyan/5 border border-brand-cyan/15 text-brand-cyan text-[10px] font-mono tracking-widest uppercase mb-6 shadow-sm shadow-brand-cyan/5"
          >
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-cyan"></span>
            </span>
            <span>Quality Engineering • FinTech QA</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-tight tracking-tight text-white mb-6 max-w-2xl"
          >
            Building{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple">
              Reliable
            </span>{" "}
            Financial Software Through{" "}
            <span className="text-glow-cyan text-brand-cyan">Precision</span> QA Engineering.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl mb-8"
          >
            I am a Software Quality Assurance Engineer with 4+ years of experience ensuring reliability across high-scale UPI platforms, dynamic rate plan pricing models, eKYC validation engines, and core transaction ledgers.
          </motion.p>

          {/* Core Tags */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-1.5 mb-8 max-w-lg"
          >
            {[
              "Manual Testing",
              "API Testing",
              "Database Validation",
              "Performance Testing",
              "SQL Audits",
              "Mobile Testing",
              "Automation (Python)",
            ].map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold px-2.5 py-1 bg-slate-900/40 border border-white/5 text-slate-350 rounded-md hover:border-brand-blue/20 hover:text-white transition-all cursor-default"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3.5 w-full sm:w-auto"
          >
            <Link
              href="/projects"
              className="flex items-center justify-center space-x-2 text-xs font-bold px-5 py-3 bg-gradient-to-r from-brand-cyan to-brand-blue hover:from-brand-cyan hover:to-brand-blue text-slate-950 rounded-xl transition-all shadow-lg active:scale-95 w-full sm:w-auto cursor-pointer"
            >
              <span>Explore Case Studies</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center space-x-2 text-xs font-bold px-5 py-3 bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 text-white rounded-xl transition-all active:scale-95 w-full sm:w-auto cursor-pointer"
            >
              <Mail size={14} />
              <span>Contact Me</span>
            </Link>
            <a
              href="/Ajinkya_swami_resume.pdf"
              download="Ajinkya_Swami_Resume.pdf"
              className="flex items-center justify-center space-x-2 text-xs font-bold px-5 py-3 bg-slate-950 border border-brand-purple/20 hover:border-brand-purple/50 text-slate-200 rounded-xl transition-all active:scale-95 w-full sm:w-auto"
            >
              <Download size={14} />
              <span>Resume</span>
            </a>
          </motion.div>

          {/* Socials Connection */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-4 mt-10"
          >
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono font-medium">Connect:</span>
            <a
              href="https://github.com/ajinkyaswami1999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-brand-cyan transition-colors"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ajinkya-swami-82751b191/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-brand-cyan transition-colors"
            >
              <LinkedinIcon size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Vercel-style QA Console Mockup */}
        <motion.div
          className="lg:col-span-5 relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          {/* Main Dashboard Container */}
          <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-2xl glass-panel border border-white/5 bg-slate-950/80 p-5 shadow-2xl overflow-hidden flex flex-col justify-between">
            {/* Console Header */}
            <div className="flex justify-between items-center pb-3 border-b border-slate-900">
              <div className="flex space-x-1.5 items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-[10px] font-mono text-slate-500 ml-2">transaction_test_runner.py</span>
              </div>
              <TerminalIcon size={12} className="text-slate-500" />
            </div>

            {/* Simulated Live Logs */}
            <div className="flex-1 font-mono text-[10px] text-left py-4 space-y-2 overflow-hidden select-none">
              <div className="text-slate-500">[INFO] Initializing UPI Test Suite execution...</div>
              <div className="text-slate-500">[INFO] Loaded 150 automated regression tests.</div>
              <div className="text-slate-300 flex justify-between">
                <span>RUNNING: check_double_debit_prevention...</span>
                <span className="text-brand-cyan animate-pulse">PENDING</span>
              </div>
              <div className="text-emerald-400">PASS: API 200 OK • Idempotency key verified.</div>
              <div className="text-slate-300 flex justify-between">
                <span>RUNNING: audit_sql_commission_margin...</span>
                <span className="text-brand-cyan animate-pulse">PENDING</span>
              </div>
              <div className="text-emerald-400">PASS: DB Record commit. Variance: 0.0000.</div>
              <div className="text-slate-300">RUNNING: load_test_peak_reconciliation...</div>
              <div className="text-emerald-400">PASS: JMeter test OK. Latency: 48ms (99th pct).</div>
            </div>

            {/* Console Footer Stats bar */}
            <div className="pt-3 border-t border-slate-900 flex justify-between items-center text-[10px] font-mono">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 size={12} className="text-brand-cyan" />
                <span className="text-slate-300 font-bold">150 / 150 PASSED</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-slate-500">Coverage:</span>
                <span className="text-white font-bold">95.0%</span>
              </div>
            </div>

            {/* Glowing active card overlays */}
            <div className="absolute top-1/3 -right-6 px-3 py-2 bg-brand-purple/10 border border-brand-purple/20 rounded-xl backdrop-blur-md flex items-center space-x-2 shadow-lg shadow-brand-purple/5">
              <ShieldCheck size={14} className="text-brand-purple" />
              <span className="text-[9px] font-mono text-slate-300">UPI API Reconciled</span>
            </div>

            <div className="absolute bottom-1/4 -left-6 px-3 py-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-xl backdrop-blur-md flex items-center space-x-1.5 shadow-lg shadow-brand-cyan/5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
              <span className="text-[9px] font-mono text-slate-300">Peak Load Tested</span>
            </div>
          </div>

          {/* Backdrop Glow */}
          <div className="absolute w-72 h-72 bg-brand-blue/5 rounded-full filter blur-2xl z-0" />
        </motion.div>
      </div>
    </section>
  );
}
