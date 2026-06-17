"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Play, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#03030d]"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 z-0" />

      {/* Aurora Blurs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full aurora-circle-1 animate-pulse-slow filter blur-[80px] z-0" />
      <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] rounded-full aurora-circle-2 animate-pulse-slow filter blur-[100px] z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full aurora-circle-3 animate-pulse-slow filter blur-[120px] z-0" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
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
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass-panel border border-brand-cyan/20 text-brand-cyan text-xs font-mono tracking-wider uppercase mb-6 shadow-sm shadow-brand-cyan/5"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
            </span>
            <span>FinTech Quality Assurance Specialist</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-tight tracking-tight text-white mb-6"
          >
            Building{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple">
              Reliable
            </span>{" "}
            Financial Software Through{" "}
            <span className="text-glow-cyan text-brand-cyan">Precision</span> Quality Engineering.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-base md:text-lg lg:text-xl max-w-2xl mb-8 leading-relaxed"
          >
            I am a FinTech QA Engineer with 4+ years of experience ensuring reliability across payment systems, UPI platforms, eKYC workflows, APIs, databases, and mobile applications. I specialize in manual testing, automation, validation, and performance engineering.
          </motion.p>

          {/* Tags */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 mb-8 max-w-xl"
          >
            {[
              "Manual Testing",
              "API Testing",
              "Database Validation",
              "Performance Testing",
              "SQL",
              "Mobile Testing",
              "Automation (Python)",
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-slate-900/60 border border-slate-800 text-slate-300 rounded-md hover:border-brand-blue/30 hover:text-white transition-all cursor-default"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollTo("projects")}
              className="flex items-center justify-center space-x-2 text-sm font-semibold px-6 py-3.5 bg-gradient-to-r from-brand-cyan to-brand-blue hover:from-brand-cyan hover:to-brand-blue text-slate-950 rounded-xl transition-all shadow-lg shadow-brand-cyan/20 active:scale-95 w-full sm:w-auto cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className="flex items-center justify-center space-x-2 text-sm font-semibold px-6 py-3.5 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 text-white rounded-xl transition-all active:scale-95 w-full sm:w-auto cursor-pointer"
            >
              <Mail size={16} />
              <span>Contact Me</span>
            </button>
            <a
              href="/Ajinkya_swami_resume.pdf"
              download="Ajinkya_Swami_Resume.pdf"
              className="flex items-center justify-center space-x-2 text-sm font-semibold px-6 py-3.5 bg-slate-950 border border-brand-purple/30 hover:border-brand-purple/70 text-slate-200 rounded-xl transition-all active:scale-95 w-full sm:w-auto"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
          </motion.div>

          {/* Social Icons Link */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-4 mt-8"
          >
            <span className="text-xs text-slate-500 uppercase tracking-widest font-mono">Connect:</span>
            <a
              href="https://github.com/ajinkyaswami1999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-brand-cyan transition-colors"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ajinkya-swami-82751b191/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-brand-cyan transition-colors"
            >
              <LinkedinIcon size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Interactive Visual */}
        <motion.div
          className="lg:col-span-5 relative flex justify-center items-center h-full min-h-[400px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          {/* Avatar Container with glowing border */}
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl glow-card glass-panel overflow-hidden flex flex-col justify-center items-center p-6 border border-slate-800 z-10">
            {/* Silhouette / Photo Placeholder */}
            <div className="absolute inset-2 rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden flex justify-center items-end">
              {/* Sleek abstract character vector/gradient */}
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-tr from-brand-purple/40 to-brand-cyan/20 blur-xl absolute -bottom-10" />
              <div className="text-center pb-10 z-10 px-4">
                <span className="text-glow-cyan text-brand-cyan text-5xl font-extrabold font-display tracking-wider block mb-1">
                  AS
                </span>
                <span className="text-slate-400 text-xs font-mono tracking-widest uppercase block mb-4">
                  QA Portfolio Silhouette
                </span>
                <span className="text-[10px] py-1 px-3 bg-slate-900 border border-slate-800 rounded-full text-slate-400 font-mono">
                  Ajinkya Swami • Gurugram
                </span>
              </div>
            </div>

            {/* Glowing active elements simulating live testing */}
            <div className="absolute -top-4 -right-4 bg-brand-cyan/10 border border-brand-cyan/30 rounded-xl p-3 backdrop-blur-md flex items-center space-x-2 animate-float shadow-lg shadow-brand-cyan/5">
              <CheckCircle2 size={16} className="text-brand-cyan" />
              <span className="text-[10px] font-mono text-slate-300">API 200 OK</span>
            </div>

            <div className="absolute bottom-6 -left-6 bg-brand-purple/10 border border-brand-purple/30 rounded-xl p-3 backdrop-blur-md flex items-center space-x-2 animate-float shadow-lg shadow-brand-purple/5" style={{ animationDelay: "2s" }}>
              <ShieldCheck size={16} className="text-brand-purple" />
              <span className="text-[10px] font-mono text-slate-300">UPI Secure</span>
            </div>

            <div className="absolute top-1/2 -left-8 bg-slate-900/95 border border-slate-800 rounded-lg p-2.5 backdrop-blur-md shadow-md text-left z-20">
              <div className="flex items-center space-x-1.5 mb-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                <span className="text-[8px] font-mono text-slate-400">LOAD TEST</span>
              </div>
              <div className="text-[10px] font-mono font-bold text-white">95% Success Rate</div>
            </div>
          </div>

          {/* Decorative glowing backdrops */}
          <div className="absolute w-80 h-80 bg-brand-blue/10 rounded-full filter blur-2xl z-0" />
        </motion.div>
      </div>
    </section>
  );
}
