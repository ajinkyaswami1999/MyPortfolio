"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import CornerCrosshairs from "@/components/CornerCrosshairs";
import DecodeText from "@/components/DecodeText";
import { Terminal, Shield, Cpu, RefreshCw, Layers, Calendar, ChevronRight } from "lucide-react";

interface RecordStage {
  stage: string;
  codename: string;
  role: string;
  duration: string;
  description: string;
  icon: React.ReactNode;
  specs: string[];
  tools: string[];
}

const personnelRecords: RecordStage[] = [
  {
    stage: "ACT_IV // 第四幕",
    codename: "UPI Transaction Protocol Auditing & High-Concurrency Verification",
    role: "Lead QA Engineer (UPI Systems)",
    duration: "Mar 2023 – Present",
    description: "Orchestrated end-to-end quality assurance cycles for the corporate UPI mobile application across all primary functional components, verifying ledger calculations and concurrent traffic parameters.",
    icon: <Cpu className="text-brand-cyan animate-pulse" size={16} />,
    specs: [
      "95% load testing success rate under simulated peak transaction times",
      "Built and maintained a library of 150+ regression test cases",
      "Reduced post-release defects by 80% through exhaustive test coverage"
    ],
    tools: ["Postman", "JMeter", "SQL", "Python", "Android ADB"]
  },
  {
    stage: "ACT_III // 第三幕",
    codename: "Hardware Peripheral Interfacing & Biometric Identity Verification Protocols",
    role: "QA Engineer (Identity & eKYC)",
    duration: "Nov 2022 – Mar 2023",
    description: "Audited biometric fingerprint scanner API testing, biometric face matching threshold algorithms, and encrypted PII validations against government gateway compliance rules.",
    icon: <Layers className="text-brand-cyan" size={16} />,
    specs: [
      "Achieved 95% biometric scanner state validation usecase coverage",
      "Ensured 98% database record verification accuracy for PII details"
    ],
    tools: ["RestAssured", "Postman", "SQL", "Android Studio", "PII Encryption"]
  },
  {
    stage: "ACT_II // 第二幕",
    codename: "Dynamic Commission Calculations & Ledger Reconciliation Loops",
    role: "Quality Analyst (Pricing & Commission)",
    duration: "Jul 2022 – Nov 2022",
    description: "Validated dynamic pricing calculations engine commission splits, tax invoice calculations (GST brackets), and real-time merchant commission ledgers during rapid Agile sprints.",
    icon: <RefreshCw className="text-brand-orange animate-spin-slow" size={16} />,
    specs: [
      "Ensured 100% database match for merchant payout calculations rules",
      "Maintained zero leakage checks inside 2-week active sprint tests"
    ],
    tools: ["Python", "SQL", "Jira", "Excel Modeling", "Agile Sprints"]
  },
  {
    stage: "ACT_I // 第一幕",
    codename: "Core Gateway State Transition Arrays & Automated Error Resolution Engines",
    role: "Associate QA Engineer",
    duration: "Mar 2022 – Jul 2022",
    description: "Monitored merchant settlement loops, transaction refund lifecycles, and gateway fallback timeout rules to ensure compliance and prevent merchant balances from leaking.",
    icon: <Shield className="text-neon-crimson" size={16} />,
    specs: [
      "Maintained zero-leakage test validation for settlement gateway interfaces",
      "Validated end-to-end refund cycles across 10+ payment failure rules"
    ],
    tools: ["Postman", "JMeter", "SQL", "API Testbeds"]
  }
];

export default function PersonnelFileClient() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6] text-slate-800 selection:bg-amber-100 selection:text-amber-900 overflow-hidden font-mono">
      <Navbar />

      <PageWrapper>
        <main className="flex-1 container mx-auto px-4 md:px-8 pt-32 pb-24 relative z-10">
          
          {/* Page Title Header */}
          <div className="border-b border-amber-200/80 pb-6 mb-12 text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-amber-800 uppercase mb-2 bg-amber-100/80 px-3 py-1 rounded-full border border-amber-300/70">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>人事記録 // S-CLASS HERO DOSSIER</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
              <DecodeText text="PERSONNEL DOSSIER: SERVICE SAGAS" />
            </h1>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed mt-2 max-w-2xl font-sans">
              Chronological engineering log archiving high-concurrency UPI payment validation, biometric gateway audits, and automated test harnesses.
            </p>
          </div>

          {/* Vertical Terminal Branching Node Pipeline */}
          <div className="max-w-4xl mx-auto relative pl-6 md:pl-12 border-l-2 border-amber-200/80 space-y-12 py-4">
            
            {personnelRecords.map((record, index) => (
              <div key={index} className="relative text-left">
                
                {/* Branching Glowing Pipeline Node Dot */}
                <div className="absolute -left-[31px] md:-left-[55px] top-1.5 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-white border-2 border-amber-500 flex items-center justify-center shadow-[0_0_12px_rgba(245,158,11,0.4)]">
                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                  </div>
                  {/* Branch line overlay */}
                  <div className="h-[2px] w-4 md:w-8 bg-amber-300/80" />
                </div>

                {/* Main Node Card */}
                <div className="chamfer-corner border border-amber-200/80 bg-white/85 backdrop-blur-xl p-6 relative overflow-hidden shadow-md hover:border-amber-400 hover:shadow-lg transition-all duration-300">
                  <CornerCrosshairs colorClass="text-amber-500/50" />
                  
                  {/* Top overlay line */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                  
                  {/* Sub Header */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4 pb-3 border-b border-amber-100">
                    <div>
                      <span className="text-[9px] font-bold text-amber-700 uppercase tracking-widest block mb-1 font-mono">
                        {record.stage} // STATUS: VERIFIED
                      </span>
                      <h3 className="text-sm md:text-base font-extrabold text-slate-900 uppercase font-display leading-tight">
                        {record.codename}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-700 text-[10px] whitespace-nowrap mt-1 md:mt-0 font-mono bg-amber-50/90 px-2.5 py-1 rounded-md border border-amber-200/80 shadow-xs">
                      <Calendar size={12} className="text-amber-600" />
                      <span>{record.duration}</span>
                    </div>
                  </div>

                  {/* Core details */}
                  <div className="space-y-4">
                    <div>
                      <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-1 font-mono">Classification Role</span>
                      <span className="text-xs font-bold text-amber-800 flex items-center gap-1.5 font-mono">
                        <Terminal size={12} className="text-amber-600" /> {record.role}
                      </span>
                    </div>

                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-sans">
                      {record.description}
                    </p>

                    {/* Specifications list */}
                    <div className="space-y-2">
                      <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block font-mono">Operational Impact Metrics</span>
                      <div className="space-y-1.5 pl-2 font-sans">
                        {record.specs.map((spec, sIdx) => (
                          <div key={sIdx} className="text-xs text-slate-700 flex items-start gap-1.5 leading-relaxed">
                            <ChevronRight size={12} className="text-amber-600 mt-0.5 shrink-0" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools Deck */}
                    <div>
                      <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-2 font-mono">Validated Arsenal</span>
                      <div className="flex flex-wrap gap-1.5">
                        {record.tools.map((tool, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 bg-amber-50/80 border border-amber-200/80 rounded-md text-[10px] text-slate-800 font-mono font-bold hover:border-amber-400 transition-colors"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </main>
      </PageWrapper>

      <Footer />
    </div>
  );
}
