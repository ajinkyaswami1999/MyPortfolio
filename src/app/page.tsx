import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import CornerCrosshairs from "@/components/CornerCrosshairs";
import DecodeText from "@/components/DecodeText";
import AboutMe from "@/components/AboutMe";
import { Terminal, Shield, Cpu, RefreshCw, Radio } from "lucide-react";

export const metadata = {
  title: "InGen Control Center | Ajinkya Swami",
  description: "Central Tracking Dashboard - Isla Nublar facilities. Automated QA telemetry, paddock monitoring arrays, and personnel profiles.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#080A0D] text-slate-200 selection:bg-brand-orange/20 selection:text-brand-orange overflow-hidden font-mono">
      <Navbar />

      <PageWrapper>
        <main className="flex-1 container mx-auto px-4 md:px-8 pt-32 pb-24 relative z-10">
          
          {/* Main InGen Console Header */}
          <div className="border border-brand-cyan/20 bg-[#0c1017]/80 p-5 rounded-2xl mb-8 relative">
            <CornerCrosshairs />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="text-left">
                <span className="text-[10px] tracking-widest text-brand-orange font-bold uppercase block mb-1">
                  SYSTEM STATUS: MONITORING ACTIVE
                </span>
                <h1 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
                  <Terminal className="text-brand-cyan shrink-0 animate-pulse" size={20} />
                  <DecodeText text="INGEN SECURITY OVERVIEW: CENTRAL FACILITY TERMINAL" />
                </h1>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 bg-brand-cyan/10 border border-brand-cyan/25 rounded-lg text-brand-cyan text-[11px] font-bold">
                <span className="w-2 h-2 bg-brand-cyan rounded-full animate-ping" />
                <span>ISLA NUBLAR NODE CO-04</span>
              </div>
            </div>
          </div>

          {/* Telemetry Status Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "PADDOCK ENCLOSURES",
                status: "ACTIVE (10,000V)",
                desc: "Bio-perimeter defense field calibration stable.",
                icon: <Shield size={18} className="text-brand-orange" />,
                borderClass: "border-brand-orange/30 bg-brand-orange/5"
              },
              {
                title: "AUTOMATED LEDGER SYNC",
                status: "100% SECURE",
                desc: "Transactional ledger states locked and synchronized.",
                icon: <RefreshCw size={18} className="text-jungle-green animate-spin-slow" />,
                borderClass: "border-jungle-green/30 bg-[#0d1511]"
              },
              {
                title: "CAPACITY / AVAILABILITY",
                status: "ALL SYSTEMS OPERATIONAL",
                desc: "Open for professional contracts and QA consultation.",
                icon: <Cpu size={18} className="text-brand-cyan" />,
                borderClass: "border-brand-cyan/30 bg-brand-cyan/5"
              }
            ].map((node, idx) => (
              <div key={idx} className={`border p-5 rounded-2xl relative text-left ${node.borderClass}`}>
                <CornerCrosshairs />
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2 bg-slate-950 border border-white/5 rounded-lg">
                    {node.icon}
                  </div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                    {node.title}
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-white mb-1">{node.status}</h3>
                <p className="text-[11px] text-slate-450 leading-relaxed">{node.desc}</p>
              </div>
            ))}
          </div>

          {/* Personnel Diagnostic Section */}
          <div className="mb-12">
            <AboutMe />
          </div>

          {/* Sector Overrides Clearance Access Buttons */}
          <div className="max-w-4xl mx-auto border border-brand-orange/25 bg-[#0e121a]/85 p-6 md:p-8 rounded-3xl relative overflow-hidden text-center mb-12">
            <CornerCrosshairs />
            <div className="absolute top-0 right-0 px-3 py-1 bg-brand-orange/10 border-b border-l border-brand-orange/20 rounded-bl-xl text-[8px] uppercase tracking-widest text-brand-orange font-bold">
              PERIMETER OVERRIDE CLEARANCE
            </div>
            
            <h2 className="text-sm tracking-widest text-brand-orange uppercase font-bold mb-3 flex items-center justify-center gap-2">
              <Radio size={16} className="animate-pulse" />
              SYSTEM OVERRIDE CLEARANCE ACCESS
            </h2>
            <p className="text-[11px] text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Diagnostic terminal clearances detected. Override local routing tables to inspect classified manufacturing assets, chronological personnel records, and communications channels.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "ASSET_MANIFEST", href: "/asset-manifest", desc: "Inspect Specimens (Projects)" },
                { label: "PERSONNEL_FILE", href: "/personnel-file", desc: "Service Chronicles (Experience)" },
                { label: "TRANSMISSION_TOWER", href: "/transmission-tower", desc: "Establish Frequencies (Contact)" }
              ].map((btn, idx) => (
                <Link
                  key={idx}
                  href={btn.href}
                  className="bevel-clip border border-brand-orange hover:bg-brand-orange text-brand-orange hover:text-slate-950 font-bold p-4 block transition-colors duration-300 select-none cursor-pointer"
                >
                  <span className="text-sm block tracking-widest">{btn.label}</span>
                  <span className="text-[9px] block text-slate-450 font-normal uppercase mt-1 group-hover:text-slate-950">
                    {btn.desc}
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </main>
      </PageWrapper>

      <Footer />
    </div>
  );
}
