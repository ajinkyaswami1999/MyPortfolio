"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import CornerCrosshairs from "@/components/CornerCrosshairs";
import DecodeText from "@/components/DecodeText";
import { Terminal, ShieldAlert, Cpu, Printer, Wrench, Search, ArrowUpRight } from "lucide-react";

interface SpecimenAsset {
  id: string;
  title: string;
  classification: string;
  category: "manufacturing" | "infrastructure" | "automation";
  status: string;
  metrics: string[];
  description: string;
  link: string;
  external?: boolean;
}

const specimensData: SpecimenAsset[] = [
  {
    id: "voxelique",
    title: "VOXELIQUE 3D LAB",
    classification: "ASSET TYPE: MANUFACTURING / TYPE-01 (3D PRINT REPLICATION)",
    category: "manufacturing",
    status: "STABLE CALIBRATION",
    metrics: [
      "Print Tolerance: 0.12mm",
      "Extruder Calibration: Stable",
      "Material Tolerance: PETG / PLA / ABS"
    ],
    description: "Designed and engineered high-precision 3D physical modeling replicator platforms using automated asset generation pipelines.",
    link: "https://voxelique.com",
    external: true
  },
  {
    id: "toolique",
    title: "TOOLIQUE UTILITIES",
    classification: "ASSET TYPE: UTILITY INFRASTRUCTURE",
    category: "infrastructure",
    status: "SYSTEMS NOMINAL",
    metrics: [
      "Process Mode: Multithreaded",
      "Validations: Regex Array Verification",
      "Response Delay: < 8ms"
    ],
    description: "Deployed developer utilities platform offering client-side JSON filters, document manipulation engines, and QA calculators.",
    link: "https://toolique.in",
    external: true
  },
  {
    id: "paddock-qa-frameworks",
    title: "PERIMETER MONITORING AUTOMATION",
    classification: "ASSET TYPE: PADDOCK MONITORING AUTOMATION",
    category: "automation",
    status: "SECURING LOGS",
    metrics: [
      "Core Engines: Postman / Playwright / Newman",
      "Telemetry checks: Daily automated cron test runs",
      "Vulnerability checks: 100% boundary pass"
    ],
    description: "Custom Python and API regression frameworks engineered to verify bank communication switches and transaction ledgers.",
    link: "/projects/api-automation-framework",
    external: false
  },
  {
    id: "upi-app-testing",
    title: "UPI TRANSACTION GATEWAY",
    classification: "ASSET TYPE: FINANCIAL LEDGER SWITCH",
    category: "automation",
    status: "VERIFIED [OK]",
    metrics: [
      "Ledger Auditing: Double-debit checks complete",
      "Load tolerance: 95% response integrity",
      "Compliance level: Bank switch standard"
    ],
    description: "Exhaustive API test suite validating transaction routing parameters, ledgers calculations, and bank timeout fallback states.",
    link: "/projects/upi-app-testing",
    external: false
  },
  {
    id: "ekyc-process-testing",
    title: "BIOMETRIC IDENTITY SYSTEM",
    classification: "ASSET TYPE: IDENTITY VERIFICATION NODE",
    category: "infrastructure",
    status: "PERIMETER SECURE",
    metrics: [
      "Scan calibration: Aadhaar Biometrics / Face verification",
      "Integrations: Fingerprint reader POS SDKs",
      "PII encryption check: 100% logs covered"
    ],
    description: "Audited biometric SDK inputs, OCR scan document extractions, and user validation funnels for government portal standards.",
    link: "/projects/ekyc-process-testing",
    external: false
  }
];

export default function AssetManifestClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredAssets = specimensData.filter(asset => {
    const matchesSearch = asset.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          asset.classification.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === "all" || asset.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#080A0D] text-slate-200 selection:bg-brand-orange/20 selection:text-brand-orange overflow-hidden font-mono">
      <Navbar />

      <PageWrapper>
        <main className="flex-1 container mx-auto px-4 md:px-8 pt-32 pb-24 relative z-10">
          
          {/* Page Title Header */}
          <div className="border-b border-brand-cyan/20 pb-6 mb-8 text-left">
            <span className="text-xs font-mono tracking-widest text-brand-orange uppercase mb-2 block">
              INGEN CLASSIFIED REGISTRY
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold font-display text-white">
              <DecodeText text="INGEN ASSET MANIFEST" />
            </h1>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed mt-2 max-w-2xl">
              Specimen tracking database monitoring manufacturing units, developer infrastructure, and testing automation systems.
            </p>
          </div>

          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-10 bg-[#0c1017]/60 border border-white/5 p-4 rounded-2xl relative">
            <CornerCrosshairs />
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
              <input
                type="text"
                placeholder="Query specimen profile..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-white/10 focus:border-brand-cyan focus:outline-none pl-11 pr-4 py-2 rounded-xl text-xs text-white placeholder-slate-650 transition-colors"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {["all", "manufacturing", "infrastructure", "automation"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3 py-1.5 border rounded-lg text-[10px] font-bold uppercase transition-all select-none cursor-pointer ${
                    activeFilter === cat
                      ? "bg-brand-orange border-brand-orange text-slate-950"
                      : "bg-slate-950 border-white/5 text-slate-400 hover:border-brand-orange/30 hover:text-brand-orange"
                  }`}
                >
                  {cat === "all" ? "SHOW_ALL" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Specimens Spec Cards Grid */}
          {filteredAssets.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredAssets.map((asset) => (
                <div
                  key={asset.id}
                  className="border border-white/5 bg-[#0b0e14]/75 p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between hover:border-brand-cyan/25 transition-all duration-300 group shadow-lg shadow-black/40"
                >
                  <CornerCrosshairs />
                  
                  {/* Glowing hover tracker line */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-[9px] font-bold tracking-widest text-slate-500 block mb-1">
                          {asset.classification}
                        </span>
                        <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">
                          {asset.title}
                        </h3>
                      </div>
                      <span className="px-2.5 py-1 bg-brand-cyan/10 border border-brand-cyan/25 rounded-md text-brand-cyan text-[8px] font-bold tracking-wider">
                        {asset.status}
                      </span>
                    </div>

                    <p className="text-slate-400 text-xs leading-relaxed mb-6 text-left">
                      {asset.description}
                    </p>

                    {/* Spec List */}
                    <div className="bg-slate-950/50 border border-white/5 rounded-2xl p-4 space-y-2 mb-6 font-mono text-[10px] text-left">
                      <div className="text-brand-cyan border-b border-white/5 pb-1.5 mb-1.5 uppercase tracking-wider font-bold">
                        Telemetry Parameters
                      </div>
                      {asset.metrics.map((spec, idx) => (
                        <div key={idx} className="flex justify-between text-slate-350">
                          <span>PARM_[0{idx + 1}]:</span>
                          <span className="text-slate-200 font-bold">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions Beveled button */}
                  {asset.external ? (
                    <a
                      href={asset.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bevel-clip border border-brand-orange hover:bg-brand-orange text-brand-orange hover:text-slate-950 font-bold py-2.5 px-4 text-[10px] tracking-wider uppercase text-center transition-colors duration-300 block select-none cursor-pointer"
                    >
                      <span className="flex items-center justify-center gap-1">
                        INITIALIZE CONNECTION <ArrowUpRight size={11} />
                      </span>
                    </a>
                  ) : (
                    <Link
                      href={asset.link}
                      className="bevel-clip border border-brand-cyan hover:bg-brand-cyan text-brand-cyan hover:text-slate-950 font-bold py-2.5 px-4 text-[10px] tracking-wider uppercase text-center transition-colors duration-300 block select-none cursor-pointer"
                    >
                      <span>INSPECT LOCAL ARCHIVES</span>
                    </Link>
                  )}

                </div>
              ))}
            </div>
          ) : (
            <div className="border border-brand-orange/20 bg-brand-orange/5 p-12 rounded-3xl text-center relative max-w-md mx-auto">
              <CornerCrosshairs />
              <ShieldAlert className="text-brand-orange mx-auto mb-4 animate-bounce" size={32} />
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">NO DATA RETRIEVED</h3>
              <p className="text-[10px] text-slate-500">
                The query parameters returned zero classified assets. Recalibrate search keywords.
              </p>
            </div>
          )}

        </main>
      </PageWrapper>

      <Footer />
    </div>
  );
}
