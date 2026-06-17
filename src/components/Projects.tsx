"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Layers, CreditCard, Shield, ExternalLink, X, FileCheck2, Zap, BarChart3, AlertCircle } from "lucide-react";

interface ProjectDetails {
  id: number;
  title: string;
  category: string;
  icon: React.ReactNode;
  bgGradient: string;
  highlights: string[];
  techStack: string[];
  overview: string;
  problem: string;
  responsibilities: string[];
  testingScope: string[];
  businessImpact: string;
  achievements: string[];
}

const projectsData: ProjectDetails[] = [
  {
    id: 1,
    title: "UPI Platform Validation",
    category: "Payment System",
    icon: <Cpu className="text-brand-cyan" size={32} />,
    bgGradient: "from-brand-cyan/20 via-brand-blue/5 to-transparent",
    highlights: ["API Testing", "Performance Testing", "Database Validation", "Mobile Testing"],
    techStack: ["Postman", "Python Scripting", "MySQL Database", "Apache JMeter", "Android ADB"],
    overview: "Comprehensive validation framework for high-throughput Unified Payments Interface (UPI) handling real-time peer-to-peer and peer-to-merchant financial transactions.",
    problem: "Validating heavy parallel transactional volume, assuring absolute consistency of debits/credits, handling multiple banking API gateway timeouts, and testing app performance under peak load conditions.",
    responsibilities: [
      "Configured Postman automation suites to run API mock verification.",
      "Conducted load and stress tests simulating over 10,000 requests per minute.",
      "Engineered automated Python data verification checks to crawl SQL ledger entries.",
      "Validated UPI transaction callback handling for latency and dropped network packets."
    ],
    testingScope: [
      "API payload validations (JSON structure, datatype schemas, error codes)",
      "Multi-device Android app functional flows (intent matching, deep links)",
      "Database transaction consistency & locking verification"
    ],
    businessImpact: "Ensured high uptime for Payworld India's UPI flow, leading to a 95% transaction success rate under heavy load and a major 80% reduction in production ledger errors.",
    achievements: [
      "Maintained 95% load testing success rate.",
      "Created 150+ detailed automated regression test cases.",
      "Identified and reported 40+ critical API routing bugs prior to deployment."
    ]
  },
  {
    id: 2,
    title: "eKYC Biometric Onboarding",
    category: "Identity & Compliance",
    icon: <Layers className="text-brand-blue" size={32} />,
    bgGradient: "from-brand-blue/20 via-brand-purple/5 to-transparent",
    highlights: ["Biometric Devices", "OTP Verification Flow", "Device Compatibility"],
    techStack: ["Aadhaar APIs", "Biometric SDKs", "Postman", "MySQL", "Android Studio (ADB)"],
    overview: "End-to-end verification of customer onboarding portal leveraging OTP validations and biometric fingerprint/iris device integrations.",
    problem: "Ensuring zero identity fraud, managing hardware latency of external biometric scanners across diverse Android device configurations, and securing local caching of personal identity info.",
    responsibilities: [
      "Led full compatibility QA across 15+ distinct Android device brands and OS versions.",
      "Validated secure handshake protocol between biometric scanner drivers and the core app.",
      "Created mock test setups for failure states (low lighting, biometric match failures, timeout limits).",
      "Audited database queries to ensure encrypted storage of PII data."
    ],
    testingScope: [
      "Integration testing with governmental UIDAI/Aadhaar biometric gateways",
      "SMS OTP queue verification (retry thresholds, expiry checks)",
      "PII data encryption and leakage audit"
    ],
    businessImpact: "Created a friction-free merchant onboarding workflow, driving KYC verification times down to seconds with a 95% use case coverage.",
    achievements: [
      "Achieved 95% use case coverage across complex onboarding flows.",
      "Ensured 98% database security and verification accuracy.",
      "Optimized external scanner device driver compatibility for 90% of active partner devices."
    ]
  },
  {
    id: 3,
    title: "Core Payment Gateway Engine",
    category: "Financial Core",
    icon: <CreditCard className="text-brand-purple" size={32} />,
    bgGradient: "from-brand-purple/20 via-brand-cyan/5 to-transparent",
    highlights: ["Transaction Flow", "Settlement Verification", "Refund Validation"],
    techStack: ["Postman", "REST Web Services", "JMeter", "Relational SQL", "Payment SDKs"],
    overview: "Transaction management verification suite responsible for handling card, net banking, and wallet merchant integrations, chargebacks, and automated daily settlements.",
    problem: "Handling double-debit transaction anomalies, multi-currency conversions, automated instant refund loops, and verifying ledger balances during batch bank-down hours.",
    responsibilities: [
      "Built automated integration test scripts to simulate user drop-offs during payment processing.",
      "Audited reconciliation engine logs to ensure merchants are credited with exact margins.",
      "Verified webhooks triggering real-time refund status events.",
      "Performed structural SQL table validation for settlement ledger tables."
    ],
    testingScope: [
      "Chargeback logic and state transitions",
      "Refund automation API verification under partial/full refund scopes",
      "Failure scenario handling (unsupported card formats, expired tokens)"
    ],
    businessImpact: "Ensured zero-margin transaction leaks, providing solid transaction settlement pathways for merchants and a trust-enhanced merchant ledger ecosystem.",
    achievements: [
      "Maintained zero balance leakage during reconciliation test runs.",
      "Verified 100% correctness of automated refund triggers across 10+ failure states.",
      "Tested and verified dynamic pricing and GST billing configurations with zero logic flaws."
    ]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);

  return (
    <section id="projects" className="py-24 relative bg-[#03030d] overflow-hidden">
      {/* Background Aurora */}
      <div className="absolute top-10 right-10 w-90 h-90 rounded-full aurora-circle-3 filter blur-[100px] opacity-15" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left max-w-3xl">
          <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase mb-2">My Work</span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
            Featured Projects
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl text-sm md:text-base leading-relaxed">
            Recruiter-focused QA case studies highlighting core testing setups, complex problem solving, and concrete business outcomes.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-cyan to-brand-blue mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel glow-card rounded-2xl border border-slate-900 overflow-hidden flex flex-col justify-between h-full p-6 md:p-8 cursor-pointer hover:border-brand-cyan/30 transition-all group"
              onClick={() => setSelectedProject(project)}
            >
              <div>
                {/* Category & Icon */}
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono tracking-wider text-slate-500 uppercase">
                    {project.category}
                  </span>
                  <div className="p-3 bg-slate-900/60 rounded-xl group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold font-display text-white mb-4 group-hover:text-brand-cyan transition-colors">
                  {project.title}
                </h3>

                {/* Highlights badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="text-[10px] md:text-xs px-2.5 py-1 bg-slate-950/60 border border-slate-800 text-slate-300 rounded-md"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Study CTA */}
              <div className="flex items-center space-x-2 text-xs font-bold text-brand-cyan mt-6 pt-6 border-t border-slate-900/80 group-hover:underline">
                <span>View QA Case Study</span>
                <ExternalLink size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto glass-panel border border-slate-800 rounded-2xl shadow-2xl p-6 md:p-10 z-10 no-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white p-2 bg-slate-900 border border-slate-800 rounded-xl transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Title & Category */}
              <div className="mb-8 pr-12">
                <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase block mb-1">
                  {selectedProject.category} Case Study
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-display text-white">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Grid content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column (Overview, Problem, Responsibilities) */}
                <div className="lg:col-span-8 space-y-6">
                  {/* Overview */}
                  <div>
                    <h4 className="text-sm font-mono tracking-wider text-slate-400 uppercase mb-2 flex items-center gap-2">
                      <Zap size={14} className="text-brand-cyan" />
                      Overview
                    </h4>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                      {selectedProject.overview}
                    </p>
                  </div>

                  {/* Problem */}
                  <div className="bg-slate-900/40 border border-slate-950 p-4 rounded-xl">
                    <h4 className="text-sm font-mono tracking-wider text-slate-400 uppercase mb-2 flex items-center gap-2">
                      <AlertCircle size={14} className="text-amber-500" />
                      The Testing Problem
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>

                  {/* Testing Responsibilities */}
                  <div>
                    <h4 className="text-sm font-mono tracking-wider text-slate-400 uppercase mb-3 flex items-center gap-2">
                      <FileCheck2 size={14} className="text-brand-blue" />
                      Testing Responsibilities & Work
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start text-xs md:text-sm text-slate-300 leading-relaxed">
                          <span className="h-1.5 w-1.5 bg-brand-cyan rounded-full mt-2 mr-3 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column (Tech Stack, Testing Scope, Business Impact, Achievements) */}
                <div className="lg:col-span-4 space-y-6">
                  {/* Tech Stack */}
                  <div className="glass-panel p-5 border border-slate-900 rounded-xl">
                    <h4 className="text-xs font-mono tracking-wider text-slate-400 uppercase mb-3">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] md:text-xs px-2.5 py-1 bg-slate-950 border border-slate-800 text-brand-cyan rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testing Scope */}
                  <div>
                    <h4 className="text-xs font-mono tracking-wider text-slate-400 uppercase mb-3">
                      Testing Scope
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.testingScope.map((scope, i) => (
                        <li key={i} className="text-[11px] md:text-xs text-slate-400 leading-normal">
                          • {scope}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Business Impact */}
                  <div>
                    <h4 className="text-xs font-mono tracking-wider text-slate-400 uppercase mb-2 flex items-center gap-2">
                      <BarChart3 size={14} className="text-brand-purple" />
                      Business Impact
                    </h4>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {selectedProject.businessImpact}
                    </p>
                  </div>

                  {/* Key Achievements */}
                  <div className="bg-brand-cyan/5 border border-brand-cyan/10 p-5 rounded-xl">
                    <h4 className="text-xs font-mono tracking-wider text-brand-cyan uppercase mb-3 flex items-center gap-2">
                      <Shield size={14} />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.achievements.map((ach, i) => (
                        <li key={i} className="text-xs text-slate-300 font-semibold leading-snug">
                          ✓ {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
