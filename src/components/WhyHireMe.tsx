"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Bug, AlertOctagon, Landmark, ShieldCheck, Cpu, Database, TrendingUp, Users } from "lucide-react";

interface HireReason {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const hireReasons: HireReason[] = [
  {
    title: "Strong Analytical Thinking",
    desc: "Approaching test scenarios with a logic-first architecture to trace complex states and flag architectural vulnerabilities.",
    icon: <BrainCircuit className="text-brand-cyan" size={24} />,
  },
  {
    title: "Excellent Debugging Skills",
    desc: "Isolating product malfunctions, analyzing system errors, and preparing pinpoint logs to reduce developer cycles.",
    icon: <Bug className="text-brand-blue" size={24} />,
  },
  {
    title: "Production Issue Analysis",
    desc: "Post-release diagnostics, tracking user-reported bugs, recreating edge cases, and feeding issues back to dev cycles.",
    icon: <AlertOctagon className="text-brand-purple" size={24} />,
  },
  {
    title: "Financial Domain Expertise",
    desc: "Deep knowledge of payment channels, bank status webhooks, merchant margins, reconciliations, and strict security compliance.",
    icon: <Landmark className="text-accent-sky" size={24} />,
  },
  {
    title: "Rigorous API Validation",
    desc: "Assuring REST endpoints remain highly functional, checking headers, JWT authorization tokens, and JSON schemas.",
    icon: <ShieldCheck className="text-brand-cyan" size={24} />,
  },
  {
    title: "Automation Mindset",
    desc: "Writing code to test code. Leveraging scripting tools (Python, Selenium) to eliminate repetitive manual validation loops.",
    icon: <Cpu className="text-brand-blue" size={24} />,
  },
  {
    title: "Database Verification",
    desc: "Validating database integrity using SQL scripts, verifying balance ledgers, transaction records, and database indexing speeds.",
    icon: <Database className="text-brand-purple" size={24} />,
  },
  {
    title: "Performance Optimization",
    desc: "Conducting performance, load, and stress test cycles with JMeter to prepare financial systems for high traffic spikes.",
    icon: <TrendingUp className="text-accent-sky" size={24} />,
  },
  {
    title: "Agile Collaboration",
    desc: "Active engagement in sprint planning, writing test cases alongside development criteria, and enabling fast release schedules.",
    icon: <Users className="text-brand-cyan" size={24} />,
  },
];

export default function WhyHireMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
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

  return (
    <section id="why-hire-me" className="py-24 relative bg-[#03030d] overflow-hidden">
      {/* Background Aurora */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full aurora-circle-1 filter blur-[90px] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left max-w-3xl">
          <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase mb-2">My Value Proposition</span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
            Why Hire Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-cyan to-brand-blue mt-4" />
        </div>

        {/* Reasons Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {hireReasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="glass-panel p-6 md:p-8 rounded-2xl border border-slate-900 hover:border-slate-800 transition-all flex flex-col justify-start items-start text-left group"
            >
              {/* Icon */}
              <div className="p-3 bg-slate-900/60 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold font-display text-white mb-3 group-hover:text-brand-cyan transition-colors">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
