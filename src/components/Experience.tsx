"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, HelpCircle, Layers, Cpu, CreditCard, RefreshCw } from "lucide-react";

interface SubProject {
  title: string;
  icon: React.ReactNode;
  responsibilities: string[];
  achievements: string[];
}

const payworldProjects: SubProject[] = [
  {
    title: "UPI Application",
    icon: <Cpu className="text-brand-cyan" size={20} />,
    responsibilities: [
      "End-to-end user flow testing across multiple banking interfaces and UPI handles.",
      "API validation using Postman to verify request-response structures and error handling.",
      "Load and performance testing using JMeter simulating high concurrency rates.",
      "Thorough regression suite execution and UI validation on Android and iOS devices.",
      "Complex database validation confirming credit/debit transaction log records."
    ],
    achievements: [
      "Built and maintained a library of 150+ regression test cases.",
      "Maintained 95% load testing success rate under simulated peak transaction times.",
      "Achieved 99.5% database accuracy for transaction ledger mapping.",
      "Reduced post-release production defects by 80% through exhaustive test coverage."
    ]
  },
  {
    title: "eKYC Platform Integration",
    icon: <Layers className="text-brand-blue" size={20} />,
    responsibilities: [
      "Hardware and device compatibility testing for biometric scanners and POS integration.",
      "Validation of biometric fingerprint and iris scanner APIs with vendor gateway workflows.",
      "End-to-end OTP flow testing under poor network scenarios and latency simulation.",
      "Workflow testing covering KYC approval status state transitions.",
      "Database verification of encrypted PII fields and Aadhaar verification logs."
    ],
    achievements: [
      "Achieved 95% use case coverage across all onboarding states.",
      "Ensured 98% database record verification accuracy for sensitive fields.",
      "Resolved device compatibility bottlenecks across 90% of targeted partner hardware devices."
    ]
  },
  {
    title: "Dynamic Rate Plan Engine",
    icon: <RefreshCw className="text-brand-purple" size={20} />,
    responsibilities: [
      "Validation of complex dynamic pricing tables and discount rules.",
      "Regression verification of tax configurations, GST brackets, and merchant settlements.",
      "Functional and database testing of real-time commission payout records.",
      "Creating test specifications and user story mapping docs under Agile sprints.",
      "Collaborating with backend developers to resolve edge-case logic mismatches."
    ],
    achievements: [
      "Ensured 100% compliance with complex pricing business rules.",
      "Documented 30+ pricing rule matrix edge cases used by the development team.",
      "Coordinated QA workflows directly under 2-week Agile sprints."
    ]
  },
  {
    title: "Core Payment Gateway & Financial Reporting",
    icon: <CreditCard className="text-accent-sky" size={20} />,
    responsibilities: [
      "Verifying transaction settlement loops and automated refund triggers.",
      "Testing failure scenario handling (timeouts, wrong credentials, bank-down states).",
      "GST Invoice Claim validation to ensure tax calculation compliance.",
      "Validating financial reporting ledger accuracy and merchant-facing dashboards.",
      "Target creation validation for merchant volume-incentive tracking."
    ],
    achievements: [
      "Maintained zero-leakage test validation for settlement APIs.",
      "Validated end-to-end refund cycles across 10+ edge cases.",
      "Verified ledger export functionality representing thousands of records."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-[#03030d] overflow-hidden">
      {/* Background Aurora */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full aurora-circle-1 filter blur-[100px] opacity-20" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left max-w-3xl">
          <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase mb-2">Professional Journey</span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-cyan to-brand-blue mt-4" />
        </div>

        {/* Timeline Component */}
        <div className="relative border-l border-slate-900 ml-4 md:ml-12 pl-6 md:pl-12 space-y-16">
          {/* Timeline Node - Current Company */}
          <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-brand-cyan border-4 border-slate-950 animate-pulse shadow-[0_0_10px_rgba(0,242,254,0.6)]" />

          {/* Payworld Header */}
          <motion.div
            className="flex flex-col md:flex-row md:items-center md:justify-between mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-2xl font-bold font-display text-white flex items-center gap-3">
                Payworld India
                <span className="text-xs px-2.5 py-1 bg-slate-900 border border-slate-800 text-brand-cyan rounded-full font-mono font-medium">
                  Current
                </span>
              </h3>
              <p className="text-brand-blue font-medium mt-1 text-sm md:text-base">
                Software Quality Assurance Engineer
              </p>
            </div>
            <span className="text-xs md:text-sm font-mono text-slate-500 mt-2 md:mt-0 px-3 py-1 bg-slate-900/60 border border-slate-800 rounded-md">
              March 2022 – Present (4+ Years)
            </span>
          </motion.div>

          {/* Subprojects / Systems Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {payworldProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel glow-card p-6 md:p-8 rounded-2xl flex flex-col justify-between border border-slate-900"
              >
                <div>
                  {/* Project Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2.5 bg-slate-900/80 rounded-xl border border-slate-800">
                      {project.icon}
                    </div>
                    <h4 className="text-lg md:text-xl font-bold font-display text-white">
                      {project.title}
                    </h4>
                  </div>

                  {/* Responsibilities list */}
                  <div className="mb-6">
                    <h5 className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-3">
                      Testing Scope & Responsibilities
                    </h5>
                    <ul className="space-y-2.5">
                      {project.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start text-xs md:text-sm text-slate-400 leading-relaxed">
                          <ChevronRight size={14} className="text-brand-blue mt-0.5 mr-2 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Achievements List */}
                <div className="mt-4 pt-6 border-t border-slate-900">
                  <h5 className="text-xs font-mono tracking-widest text-brand-cyan uppercase mb-3">
                    Measurable Achievements
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.achievements.map((ach, i) => (
                      <div
                        key={i}
                        className="flex items-start space-x-2 bg-slate-900/40 border border-slate-950 p-2.5 rounded-lg"
                      >
                        <CheckCircle2 size={14} className="text-brand-cyan mt-0.5 shrink-0" />
                        <span className="text-xs font-medium text-slate-300 leading-snug">{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
