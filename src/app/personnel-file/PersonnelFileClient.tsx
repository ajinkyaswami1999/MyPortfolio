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
    stage: "SECTOR_LOG_04",
    codename: "UPI Transaction Protocol Auditing & Threat-Load Verification",
    role: "Lead QA Engineer (UPI Systems)",
    duration: "Mar 2023 – Present",
    description: "Orchestrated end-to-end quality assurance cycles for the corporate UPI mobile application across all primary functional components, verifying ledger calculations and concurrent traffic parameters.",
    icon: <Cpu className="text-brand-orange animate-pulse" size={16} />,
    specs: [
      "95% load testing success rate under simulated peak transaction times",
      "Built and maintained a library of 150+ regression test cases",
      "Reduced post-release defects by 80% through exhaustive test coverage"
    ],
    tools: ["Postman", "JMeter", "SQL", "Python", "Android ADB"]
  },
  {
    stage: "SECTOR_LOG_03",
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
    stage: "SECTOR_LOG_02",
    codename: "Dynamic Commission Calculations & Ledger Reconciliation Loops",
    role: "Quality Analyst (Pricing & Commission)",
    duration: "Jul 2022 – Nov 2022",
    description: "Validated dynamic pricing calculations engine commission splits, tax invoice calculations (GST brackets), and real-time merchant commission ledgers during rapid Agile sprints.",
    icon: <RefreshCw className="text-yellow-400 animate-spin-slow" size={16} />,
    specs: [
      "Ensured 100% database match for merchant payout calculations rules",
      "Maintained zero leakage checks inside 2-week active sprint tests"
    ],
    tools: ["Python", "SQL", "Jira", "Excel Modeling", "Agile Sprints"]
  },
  {
    stage: "SECTOR_LOG_01",
    codename: "Core Gateway State Transition Arrays & Automated Error Resolution Engines",
    role: "Associate QA Engineer",
    duration: "Mar 2022 – Jul 2022",
    description: "Monitored merchant settlement loops, transaction refund lifecycles, and gateway fallback timeout rules to ensure compliance and prevent merchant balances from leaking.",
    icon: <Shield className="text-brand-blue" size={16} />,
    specs: [
      "Maintained zero-leakage test validation for settlement gateway interfaces",
      "Validated end-to-end refund cycles across 10+ payment failure rules"
    ],
    tools: ["Postman", "JMeter", "SQL", "API Testbeds"]
  }
];

export default function PersonnelFileClient() {
  return (
    <div className="flex flex-col min-h-screen bg-[#080A0D] text-slate-200 selection:bg-brand-orange/20 selection:text-brand-orange overflow-hidden font-mono">
      <Navbar />

      <PageWrapper>
        <main className="flex-1 container mx-auto px-4 md:px-8 pt-32 pb-24 relative z-10">
          
          {/* Page Title Header */}
          <div className="border-b border-brand-cyan/20 pb-6 mb-12 text-left">
            <span className="text-xs font-mono tracking-widest text-brand-orange uppercase mb-2 block">
              INGEN CLASSIFIED RECORD
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold font-display text-white">
              <DecodeText text="INGEN PERSONNEL EVOLUTION FILE" />
            </h1>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed mt-2 max-w-2xl">
              Chronological security classification log archiving quality control operations, transaction testing frameworks, and biometric interface validations.
            </p>
          </div>

          {/* Vertical Terminal Branching Node Pipeline */}
          <div className="max-w-4xl mx-auto relative pl-6 md:pl-12 border-l border-brand-cyan/15 space-y-12 py-4">
            
            {personnelRecords.map((record, index) => (
              <div key={index} className="relative text-left">
                
                {/* Branching Glowing Pipeline Node Dot */}
                <div className="absolute -left-[31px] md:-left-[55px] top-1.5 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-slate-950 border border-brand-cyan flex items-center justify-center shadow-[0_0_12px_rgba(0,240,255,0.4)] animate-pulse">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                  </div>
                  {/* Branch line overlay */}
                  <div className="h-[1px] w-4 md:w-8 bg-brand-cyan/20" />
                </div>

                {/* Main Node Card */}
                <div className="border border-white/5 bg-[#0b0e14]/75 p-6 rounded-3xl relative overflow-hidden shadow-xl shadow-black/40">
                  <CornerCrosshairs />
                  
                  {/* Top overlay line */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent" />
                  
                  {/* Sub Header */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4 pb-3 border-b border-white/5">
                    <div>
                      <span className="text-[9px] font-bold text-brand-orange uppercase tracking-widest block mb-1">
                        {record.stage} // SPECIMEN STATUS: SECURED
                      </span>
                      <h3 className="text-sm font-bold text-white uppercase font-display leading-tight">
                        {record.codename}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 text-[10px] whitespace-nowrap mt-1 md:mt-0 font-mono">
                      <Calendar size={12} className="text-brand-cyan" />
                      <span>{record.duration}</span>
                    </div>
                  </div>

                  {/* Core details */}
                  <div className="space-y-4">
                    <div>
                      <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-1">Classification Target</span>
                      <span className="text-xs font-bold text-brand-cyan flex items-center gap-1">
                        <Terminal size={12} /> {record.role}
                      </span>
                    </div>

                    <p className="text-slate-400 text-xs leading-relaxed">
                      {record.description}
                    </p>

                    {/* Specifications list */}
                    <div className="space-y-2">
                      <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Operational Impact metrics</span>
                      <div className="space-y-1.5 pl-2">
                        {record.specs.map((spec, sIdx) => (
                          <div key={sIdx} className="text-[11px] text-slate-300 flex items-start gap-1.5 leading-relaxed">
                            <ChevronRight size={10} className="text-brand-orange mt-1 shrink-0" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools Deck */}
                    <div>
                      <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-2">Validated Tools Deck</span>
                      <div className="flex flex-wrap gap-1.5">
                        {record.tools.map((tool, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 bg-slate-950 border border-white/5 rounded-md text-[9px] text-slate-400 font-mono font-bold"
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
