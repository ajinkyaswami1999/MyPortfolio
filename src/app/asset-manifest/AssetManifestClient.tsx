"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import CornerCrosshairs from "@/components/CornerCrosshairs";
import DecodeText from "@/components/DecodeText";
import { Terminal, ShieldAlert, Cpu, Printer, Wrench, Search, ArrowUpRight } from "lucide-react";

interface MissionAsset {
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

const missionsData: MissionAsset[] = [
  {
    id: "api-automation-framework",
    title: "ENTERPRISE API AUTOMATION HARNESS",
    classification: "TACTICAL ASSET: AUTOMATED QA REGRESSION TESTBED",
    category: "automation",
    status: "100% OPERATIONAL // 正常",
    metrics: [
      "Core Engines: Postman / Playwright / Newman",
      "Telemetry checks: Daily automated cron test runs",
      "Vulnerability checks: 100% boundary coverage"
    ],
    description: "Custom Python and API regression frameworks engineered to verify bank communication switches, high-concurrency endpoints, and transaction ledgers.",
    link: "/projects/api-automation-framework",
    external: false
  },
  {
    id: "upi-app-testing",
    title: "UPI TRANSACTION GATEWAY",
    classification: "TACTICAL ASSET: FINANCIAL LEDGER SWITCH",
    category: "automation",
    status: "S-RANK VERIFIED [OK]",
    metrics: [
      "Ledger Auditing: Double-debit prevention verified",
      "Load tolerance: 95% response integrity under 10k TPS",
      "Compliance level: Bank switch standard"
    ],
    description: "Exhaustive API test suite validating transaction routing parameters, ledger state calculations, and bank timeout fallback workflows.",
    link: "/projects/upi-app-testing",
    external: false
  },
  {
    id: "ekyc-process-testing",
    title: "BIOMETRIC IDENTITY SYSTEM",
    classification: "TACTICAL ASSET: IDENTITY VERIFICATION NODE",
    category: "infrastructure",
    status: "SECURITY OPTIMAL // 認証済",
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

  const filteredAssets = missionsData.filter(asset => {
    const matchesSearch = asset.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          asset.classification.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === "all" || asset.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6] text-slate-800 selection:bg-amber-200 selection:text-amber-950 overflow-hidden font-mono">
      <Navbar />

      <PageWrapper>
        <main className="flex-1 container mx-auto px-4 md:px-8 pt-32 pb-24 relative z-10">
          
          {/* Page Title Header */}
          <div className="border-b border-amber-200/60 pb-6 mb-8 text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-amber-800 uppercase mb-2 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span>作戦目録 // S-CLASS MISSION MANIFEST</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
              <DecodeText text="TACTICAL MISSION ARCHIVE" />
            </h1>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed mt-2 max-w-2xl font-sans font-medium">
              Production mission archive documenting high-scale fintech systems, API test harness architecture, and enterprise software verification.
            </p>
          </div>

          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-10 bg-white/85 border border-amber-200/80 p-4 rounded-2xl relative backdrop-blur-md shadow-md">
            <CornerCrosshairs colorClass="text-amber-500/60" />
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Query mission profiles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:border-amber-400 focus:bg-white focus:outline-none pl-11 pr-4 py-2.5 rounded-xl text-xs text-slate-900 placeholder-slate-400 transition-colors font-mono"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {["all", "automation", "infrastructure"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3.5 py-1.5 border rounded-lg text-[10px] font-bold uppercase transition-all select-none cursor-pointer font-mono ${
                    activeFilter === cat
                      ? "bg-amber-400 border-amber-400 text-slate-950 shadow-xs"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:border-amber-300 hover:text-slate-950 hover:bg-amber-50/50"
                  }`}
                >
                  {cat === "all" ? "SHOW_ALL // 全て" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Missions Cards Grid */}
          {filteredAssets.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredAssets.map((asset) => (
                <div
                  key={asset.id}
                  className="chamfer-corner border border-slate-200/90 bg-white/85 backdrop-blur-md p-6 relative overflow-hidden flex flex-col justify-between hover:border-amber-400 hover:shadow-xl transition-all duration-300 group shadow-md"
                >
                  <CornerCrosshairs colorClass="text-amber-500/60" />
                  
                  {/* Glowing hover tracker line */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-[9px] font-bold tracking-widest text-amber-800 font-mono block mb-1">
                          {asset.classification}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                          {asset.title}
                        </h3>
                      </div>
                      <span className="px-2.5 py-1 bg-amber-50 border border-amber-200 rounded-md text-amber-950 text-[8px] font-bold font-mono tracking-wider">
                        {asset.status}
                      </span>
                    </div>

                    <p className="text-slate-600 text-xs leading-relaxed mb-6 text-left font-sans">
                      {asset.description}
                    </p>

                    {/* Spec List */}
                    <div className="bg-slate-50/80 border border-slate-200 rounded-2xl p-4 space-y-2 mb-6 font-mono text-[10px] text-left">
                      <div className="text-amber-800 border-b border-slate-200 pb-1.5 mb-1.5 uppercase tracking-wider font-bold">
                        Telemetry Parameters // 検証パラメータ
                      </div>
                      {asset.metrics.map((spec, idx) => (
                        <div key={idx} className="flex justify-between text-slate-700">
                          <span className="text-slate-500 font-medium">PARM_[0{idx + 1}]:</span>
                          <span className="text-slate-900 font-bold">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions Chamfer button */}
                  {asset.external ? (
                    <a
                      href={asset.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chamfer-corner border border-sky-300 bg-sky-50 hover:bg-sky-100 text-sky-950 font-bold py-2.5 px-4 text-[10px] tracking-wider uppercase text-center transition-all duration-300 block select-none cursor-pointer shadow-xs"
                    >
                      <span className="flex items-center justify-center gap-1.5">
                        INITIALIZE CONNECTION <ArrowUpRight size={11} />
                      </span>
                    </a>
                  ) : (
                    <Link
                      href={asset.link}
                      className="chamfer-corner border border-amber-300 bg-amber-100/70 hover:bg-amber-400 text-amber-950 hover:text-slate-950 font-bold py-2.5 px-4 text-[10px] tracking-wider uppercase text-center transition-all duration-300 block select-none cursor-pointer shadow-xs hover:shadow-md"
                    >
                      <span>ACCESS MISSION BRIEF // 詳細</span>
                    </Link>
                  )}

                </div>
              ))}
            </div>
          ) : (
            <div className="chamfer-corner border border-amber-200 bg-white/90 p-12 rounded-3xl text-center relative max-w-md mx-auto shadow-md">
              <CornerCrosshairs colorClass="text-amber-500/60" />
              <ShieldAlert className="text-amber-600 mx-auto mb-4 animate-bounce" size={32} />
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1 font-mono">NO DATA RETRIEVED // 該当なし</h3>
              <p className="text-[10px] text-slate-500 font-mono">
                The query parameters returned zero matching mission profiles. Recalibrate search keywords.
              </p>
            </div>
          )}

        </main>
      </PageWrapper>

      <Footer />
    </div>
  );
}
