"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Cpu, Layers, RefreshCw, CreditCard, Calendar } from "lucide-react";

interface TimelineEntry {
  company: string;
  role: string;
  duration: string;
  title: string;
  icon: React.ReactNode;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  isCurrent?: boolean;
}

const experienceTimeline: TimelineEntry[] = [
  {
    company: "Payworld India",
    role: "Lead QA Engineer (UPI Systems)",
    duration: "Mar 2023 – Present",
    title: "UPI Application & Payments Testing",
    icon: <Cpu className="text-brand-orange" size={20} />,
    isCurrent: true,
    responsibilities: [
      "End-to-end flow validation across multiple banking interfaces and payment endpoints.",
      "API validation using Postman to verify request-response structures and boundary edge cases.",
      "Load and performance testing using JMeter simulating high concurrency transaction scenarios.",
      "Database transactional checks confirming ledger integrity and double-debit prevention."
    ],
    technologies: ["Postman", "JMeter", "SQL", "Python", "Android ADB", "Framer Motion"],
    achievements: [
      "Maintained 95% load testing success rate under simulated peak transaction times.",
      "Built and maintained a library of 150+ regression test cases.",
      "Reduced post-release defects by 80% through exhaustive test coverage."
    ]
  },
  {
    company: "Payworld India",
    role: "QA Engineer (Identity & eKYC)",
    duration: "Nov 2022 – Mar 2023",
    title: "eKYC Platform Integration & Biometrics",
    icon: <Layers className="text-brand-cyan" size={20} />,
    responsibilities: [
      "Hardware compatibility and biometric SDK validation for fingerprint scanners and POS devices.",
      "Biometric fingerprint verification API testing against government gateway transaction rules.",
      "OTP verification workflow validation under poor network scenarios and simulation.",
      "Database verification of encrypted PII fields and onboarding log accuracy."
    ],
    technologies: ["RestAssured", "Postman", "SQL", "Android Studio", "PII Encryption"],
    achievements: [
      "Achieved 95% usecase coverage across all onboarding states.",
      "Ensured 98% database record verification accuracy for sensitive fields."
    ]
  },
  {
    company: "Payworld India",
    role: "Quality Analyst (Pricing & Commission)",
    duration: "Jul 2022 – Nov 2022",
    title: "Dynamic Rate & Settlement Engine",
    icon: <RefreshCw className="text-brand-blue" size={20} />,
    responsibilities: [
      "Validation of complex dynamic pricing tables, commission brackets, and merchant settlements.",
      "Tax invoice check logic verification (GST brackets, merchant commission ledgers).",
      "Functional and database testing of real-time commission payout records.",
      "Collaborating with backend developers to resolve edge-case logic mismatches."
    ],
    technologies: ["Python", "SQL", "Jira", "Excel Modeling", "Agile Sprints"],
    achievements: [
      "Ensured 100% compliance with complex pricing business rules.",
      "Coordinated QA workflows directly under 2-week Agile sprints."
    ]
  },
  {
    company: "Payworld India",
    role: "Associate QA Engineer",
    duration: "Mar 2022 – Jul 2022",
    title: "Core Payment Gateway & Financial Reporting",
    icon: <CreditCard className="text-brand-purple" size={20} />,
    responsibilities: [
      "Verifying settlement loops, transaction state transitions, and automated refunds.",
      "Testing failure scenario handling (timeouts, wrong credentials, bank-down states).",
      "GST Invoice Claim validation to ensure tax calculation compliance.",
      "Validating financial reporting ledger accuracy and merchant-facing dashboards."
    ],
    technologies: ["Postman", "JMeter", "SQL", "API Testbeds"],
    achievements: [
      "Maintained zero-leakage test validation for settlement APIs.",
      "Validated end-to-end refund cycles across 10+ payment edge cases."
    ]
  }
];

export default function Experience() {
  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1.5, ease: "easeInOut" as const }
    }
  };

  return (
    <section id="experience" className="py-24 relative bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] rounded-full bg-brand-orange/5 filter blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-20 text-left max-w-3xl">
          <span className="text-xs font-mono tracking-widest text-brand-orange uppercase mb-2 block">
            Professional Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
            Work Experience
          </h2>
          <p className="text-slate-400 mt-4 text-sm md:text-base leading-relaxed">
            A vertical breakdown of my engineering milestones, project responsibilities, and technical validation stacks.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-orange via-brand-cyan to-brand-blue mt-4" />
        </div>

        {/* Futuristic Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Animated Progress Line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-0.5 bg-slate-900 -translate-x-1/2 pointer-events-none z-0">
            <motion.div
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-full h-full timeline-line origin-top"
            />
          </div>

          {/* Timeline Nodes */}
          <div className="space-y-16">
            {experienceTimeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.title}
                  className={`relative flex flex-col md:flex-row items-stretch md:justify-between z-10 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute top-6 left-4 md:left-1/2 -translate-x-1/2 z-20">
                    <div className={`w-3.5 h-3.5 rounded-full border-4 border-[#0A0A0A] bg-slate-950 flex items-center justify-center ${
                      item.isCurrent 
                        ? "bg-brand-orange shadow-[0_0_12px_rgba(226,88,34,0.8)] animate-pulse" 
                        : "bg-brand-cyan shadow-[0_0_10px_rgba(0,229,255,0.6)]"
                    }`} />
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block w-[45%] pointer-events-none" />

                  {/* Timeline Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-full md:w-[45%] pl-10 md:pl-0"
                  >
                    <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 bg-[#0F0F0F]/65 hover:border-brand-orange/30 transition-all duration-300 relative group flex flex-col justify-between h-full shadow-lg shadow-black/40">
                      {/* Metallic border accent */}
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

                      {/* Header block */}
                      <div>
                        <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                          <div>
                            <span className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase">
                              {item.company}
                            </span>
                            <h3 className="text-lg md:text-xl font-bold font-display text-white mt-0.5">
                              {item.title}
                            </h3>
                            <p className="text-xs font-semibold text-brand-orange mt-0.5 font-mono">
                              {item.role}
                            </p>
                          </div>
                          <span className="flex items-center space-x-1.5 text-[10px] font-mono text-slate-400 bg-slate-950 border border-slate-900 px-2.5 py-1 rounded-md">
                            <Calendar size={10} />
                            <span>{item.duration}</span>
                          </span>
                        </div>

                        {/* Testing Scope List */}
                        <div className="mb-6">
                          <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase block mb-2">
                            Key Responsibilities
                          </span>
                          <ul className="space-y-2">
                            {item.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start text-xs text-slate-400 leading-relaxed">
                                <span className="text-brand-cyan mr-2 shrink-0 select-none">•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Technologies used list */}
                      <div>
                        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-[9px] font-mono px-2 py-0.5 bg-slate-950 border border-slate-900 text-slate-400 rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
