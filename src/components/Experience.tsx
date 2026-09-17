"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, RefreshCw, CreditCard, Calendar, Award } from "lucide-react";

interface TimelineEntry {
  stage: string;
  sagaTitle: string;
  powerLevel: string;
  disasterLevel: string;
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
    stage: "ACT_IV // 第四幕",
    sagaTitle: "TOURNAMENT OF POWER // 宇宙サバイバル編",
    powerLevel: "OVER 9000!!",
    disasterLevel: "GOD // 神",
    company: "Payworld India",
    role: "Lead QA Engineer (UPI Systems)",
    duration: "Mar 2023 – Present",
    title: "UPI Payments Concurrency & Multi-Bank Auditing",
    icon: <Cpu className="text-sky-700" size={20} />,
    isCurrent: true,
    responsibilities: [
      "End-to-end user flow validation across NPCI switches, banking APIs, and high-concurrency payment endpoints.",
      "Automated API validation suites in Postman & Newman verifying request-response boundaries and latency benchmarks.",
      "Stress & load test engineering using Apache JMeter simulating 10,000+ TPS peak load scenarios.",
      "Transactional ledger integrity checks preventing double-debits and automated refund state drift."
    ],
    technologies: ["Postman", "JMeter", "SQL", "Python", "Android ADB", "Framer Motion"],
    achievements: [
      "Maintained 95% load testing success rate under simulated peak UPI transaction volume.",
      "Built and deployed a battle-tested library of 150+ automated regression test suites.",
      "Reduced post-release production defect escape by 80% through pre-flight automated CI/CD checks."
    ]
  },
  {
    stage: "ACT_III // 第三幕",
    sagaTitle: "ANDROID & CELL SAGA // 人造人間・セル編",
    powerLevel: "7,500",
    disasterLevel: "DRAGON // 竜",
    company: "Payworld India",
    role: "QA Engineer (Identity & eKYC)",
    duration: "Nov 2022 – Mar 2023",
    title: "eKYC Biometrics Platform & Hardware Gateway",
    icon: <Layers className="text-sky-700" size={20} />,
    responsibilities: [
      "Hardware compatibility and biometric SDK validation for fingerprint scanners and Android POS devices.",
      "Biometric Aadhaar verification API testing against UIDAI gateway transaction specifications.",
      "OTP verification workflow stress testing under network throttle and edge failure simulation.",
      "Verification of encrypted PII fields and tamper-proof user onboarding database logs."
    ],
    technologies: ["RestAssured", "Postman", "SQL", "Android Studio", "PII Encryption"],
    achievements: [
      "Achieved 95% test case coverage across all onboarding states and peripheral variations.",
      "Ensured 98% database record verification accuracy for sensitive encrypted biometric fields."
    ]
  },
  {
    stage: "ACT_II // 第二幕",
    sagaTitle: "NAMEK SAGA // ナメック星編",
    powerLevel: "3,500",
    disasterLevel: "DEMON // 鬼",
    company: "Payworld India",
    role: "Quality Analyst (Pricing & Commission)",
    duration: "Jul 2022 – Nov 2022",
    title: "Dynamic Rate Engine & Ledger Commission Loops",
    icon: <RefreshCw className="text-amber-700" size={20} />,
    responsibilities: [
      "Validation of complex dynamic pricing tables, commission slabs, and real-time merchant settlements.",
      "GST tax invoice check logic verification across multi-tier retail distribution chains.",
      "Functional and database testing of real-time commission payout records and ledger entries.",
      "Collaborating with backend developers to eliminate edge-case rounding errors."
    ],
    technologies: ["Python", "SQL", "Jira", "Excel Modeling", "Agile Sprints"],
    achievements: [
      "Ensured 100% compliance with complex financial pricing and commission business logic.",
      "Coordinated QA deliverables under rapid 2-week Agile sprint cycles."
    ]
  },
  {
    stage: "ACT_I // 第一幕",
    sagaTitle: "SAIYAN SAGA // サイヤ人編",
    powerLevel: "1,500",
    disasterLevel: "TIGER // 虎",
    company: "Payworld India",
    role: "Associate QA Engineer",
    duration: "Mar 2022 – Jul 2022",
    title: "Payment Gateway Core & Settlement Loops",
    icon: <CreditCard className="text-rose-700" size={20} />,
    responsibilities: [
      "Verifying settlement loops, transaction state transitions, and automated payment reversal flows.",
      "Testing gateway failure recovery handlers (timeouts, invalid credentials, bank outages).",
      "GST Invoice Claim validation to guarantee automated tax calculation accuracy.",
      "Validating financial reporting ledger accuracy across merchant-facing management consoles."
    ],
    technologies: ["Postman", "JMeter", "SQL", "API Testbeds"],
    achievements: [
      "Maintained zero-leakage test validation for mission-critical settlement APIs.",
      "Validated end-to-end refund cycles across 10+ payment failure edge cases."
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
    <section id="experience" className="py-24 relative bg-[#FAF9F6] overflow-hidden border-t border-amber-200/60">
      {/* Anime Background Ambient Glows */}
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] rounded-full bg-amber-200/30 filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-rose-200/25 filter blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-20 text-left max-w-3xl">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-amber-800 uppercase mb-2 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span>激闘の軌跡 // SAGAS & CHRONICLES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            CAREER SAGAS
          </h2>
          <p className="text-slate-600 mt-4 text-xs md:text-sm leading-relaxed font-sans font-medium">
            A battle-tested timeline tracking my production sagas across high-volume UPI fintech gateways, eKYC biometric verification, dynamic pricing engines, and automated regression suites.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-400 via-rose-400 to-sky-400 mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central progress line representing electric Ki rail */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-0.5 bg-amber-200/60 -translate-x-1/2 pointer-events-none z-0">
            <motion.div
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-full h-full bg-gradient-to-b from-amber-400 via-rose-400 to-sky-400 origin-top shadow-[0_0_12px_rgba(245,158,11,0.4)]"
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
                  {/* Glowing Dragon Ball / Ki Orb Node that expands on scroll */}
                  <div className="absolute top-6 left-4 md:left-1/2 -translate-x-1/2 z-20">
                    <motion.div 
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1.25 }}
                      viewport={{ once: true }}
                      className={`w-5 h-5 rounded-full border-2 border-white flex items-center justify-center transition-all ${
                        item.isCurrent 
                          ? "bg-amber-500 shadow-[0_0_16px_rgba(245,158,11,0.85)] animate-pulse" 
                          : "bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.7)]"
                      }`} 
                    >
                      <span className="text-[7px] text-white font-black leading-none select-none">★</span>
                    </motion.div>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block w-[45%] pointer-events-none" />

                  {/* Timeline Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 35, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-full md:w-[45%] pl-10 md:pl-0"
                  >
                    <div className="chamfer-corner p-6 md:p-8 border border-amber-200/90 bg-white/90 backdrop-blur-xl hover:border-amber-400 transition-all duration-300 relative group flex flex-col justify-between h-full shadow-lg hover:shadow-xl">
                      {/* Top outline indicator */}
                      <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

                      {/* Header block */}
                      <div>
                        {/* Saga Badge & Threat Level Row */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-[8px] font-mono font-black tracking-widest text-amber-900 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded shadow-xs uppercase">
                              {item.sagaTitle}
                            </span>
                            <span className="text-[7.5px] font-mono font-bold text-rose-800 bg-rose-50 border border-rose-200 px-1.5 py-0.5 rounded">
                              DISASTER: {item.disasterLevel}
                            </span>
                          </div>
                          <span className="text-[8.5px] font-mono text-amber-900 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded font-black flex items-center gap-1">
                            ⚡ {item.powerLevel}
                          </span>
                        </div>

                        {/* Title & Role */}
                        <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="text-[9px] font-mono font-black tracking-widest text-slate-500 uppercase block">
                                {item.stage}
                              </span>
                              <span className="text-[8px] font-mono text-slate-500 font-bold">
                                // {item.company}
                              </span>
                            </div>
                            <h3 className="text-lg md:text-xl font-black font-display text-slate-900 mt-1">
                              {item.title}
                            </h3>
                            <p className="text-xs font-bold text-amber-800 mt-1 font-mono">
                              {item.role}
                            </p>
                          </div>
                          <span className="flex items-center space-x-1.5 text-[9px] font-mono text-amber-950 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md shadow-xs font-bold">
                            <Calendar size={10} className="text-amber-700" />
                            <span>{item.duration}</span>
                          </span>
                        </div>

                        {/* Testing Scope List */}
                        <div className="mb-5">
                          <span className="text-[8.5px] font-mono tracking-widest text-slate-500 font-black uppercase block mb-2">
                            OPERATION LOG DETAILS // 任務詳細
                          </span>
                          <ul className="space-y-1.5">
                            {item.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start text-xs text-slate-700 leading-relaxed font-sans font-medium">
                                <span className="text-amber-600 mr-2 shrink-0 select-none font-bold">▸</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Battle Achievements Highlight (Dragon Ball Stars) */}
                        <div className="mb-5 p-3 rounded-xl bg-amber-50/70 border border-amber-200/80">
                          <span className="text-[8.5px] font-mono tracking-widest text-amber-900 font-black uppercase flex items-center gap-1 mb-1.5">
                            <Award size={11} className="text-amber-600" />
                            BATTLE ACHIEVEMENTS // 戦果
                          </span>
                          <ul className="space-y-1">
                            {item.achievements.map((ach, i) => (
                              <li key={i} className="flex items-start text-[11px] text-slate-800 leading-relaxed font-sans font-medium">
                                <span className="text-amber-600 mr-1.5 shrink-0 select-none font-black">★</span>
                                <span>{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Technologies used list */}
                      <div>
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/80">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-[9px] font-mono px-2 py-0.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-md hover:border-amber-300 hover:bg-amber-50 transition-colors font-medium"
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
