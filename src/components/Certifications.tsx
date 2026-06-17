"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldAlert, Cpu, Send, RefreshCw, Layers } from "lucide-react";

interface CertificationItem {
  title: string;
  provider: string;
  desc: string;
  icon: React.ReactNode;
}

const certifications: CertificationItem[] = [
  {
    title: "Automation Testing Pathway",
    provider: "Professional Development",
    desc: "Rigorous training on scripting automated UI and API regressions using Python, Selenium WebDriver, and Playwright framework configurations.",
    icon: <Cpu className="text-brand-cyan" size={24} />,
  },
  {
    title: "API Testing & Validation",
    provider: "Postman Academy",
    desc: "In-depth specialization on writing API test collections, JSON Schema schema matchers, environment config mapping, and automation via Newman runners.",
    icon: <Send className="text-brand-blue" size={24} />,
  },
  {
    title: "Performance & Load Engineering",
    provider: "JMeter Validation Standard",
    desc: "Practical application of performance testing setups simulating high multi-user concurrent loads, tracing latency limits, bottlenecks, and server stress.",
    icon: <Layers className="text-brand-purple" size={24} />,
  },
  {
    title: "Security Testing & Pen-Testing Basics",
    provider: "Secure Software Standard",
    desc: "Understanding authorization mechanisms, OWASP Top 10 vulnerabilities, API security validation, JWT verification, and SQL Injection prevention.",
    icon: <ShieldAlert className="text-accent-sky" size={24} />,
  },
  {
    title: "Agile QA Leadership & Methodologies",
    provider: "Scrum Alliance / Agile Framework",
    desc: "Collaboration principles in two-week sprint structures, writing precise user stories, tracking QA metrics in Jira, and organizing defect triage meetings.",
    icon: <RefreshCw className="text-brand-cyan" size={24} />,
  },
];

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <section id="certifications" className="py-24 relative bg-[#03030d] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full aurora-circle-1 filter blur-[100px] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left max-w-3xl">
          <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase mb-2">Qualifications & Learning</span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
            Professional Certifications
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-cyan to-brand-blue mt-4" />
        </div>

        {/* Certifications Deck */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              className="glass-panel p-6 md:p-8 rounded-2xl border border-slate-900 hover:border-slate-800 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header info */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-slate-900/60 rounded-xl group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <Award className="text-slate-600 group-hover:text-brand-cyan transition-colors" size={20} />
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-bold font-display text-white mb-1 group-hover:text-brand-cyan transition-colors">
                  {cert.title}
                </h3>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-4">
                  {cert.provider}
                </span>

                {/* Desc */}
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  {cert.desc}
                </p>
              </div>

              {/* Glowing card base line */}
              <div className="h-1 w-0 bg-brand-cyan group-hover:w-full transition-all duration-300 rounded-full mt-6" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
