import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import CornerCrosshairs from "@/components/CornerCrosshairs";
import DecodeText from "@/components/DecodeText";
import { Terminal, Shield, Cpu, RefreshCw, Radio } from "lucide-react";

import DragonBallsBar from "@/components/Metrics";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ajinkya Swami | Senior QA Engineer & Automation Architect",
  description: "Personal portfolio of Ajinkya Swami - Senior QA Engineer & Automation Architect specializing in high-concurrency UPI payment gateways, eKYC validation, and web utilities.",
  alternates: {
    canonical: "https://ajinkyaswami.in/",
  },
  openGraph: {
    title: "Ajinkya Swami | Senior QA Engineer & Automation Architect",
    description: "Senior QA Engineer & Automation Architect specializing in high-concurrency UPI payment gateways, eKYC validation, and web utilities.",
    url: "https://ajinkyaswami.in/",
    type: "website",
  },
};

export default function Home() {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://ajinkyaswami.in/#website",
        "url": "https://ajinkyaswami.in/",
        "name": "Ajinkya Swami Portfolio",
        "description": "Senior Software Quality Assurance Engineer specializing in high-scale UPI platforms, eKYC compliance, API automation, and database testing.",
        "publisher": {
          "@id": "https://ajinkyaswami.in/#person"
        }
      },
      {
        "@type": "ProfilePage",
        "@id": "https://ajinkyaswami.in/#profilepage",
        "url": "https://ajinkyaswami.in/",
        "name": "Ajinkya Swami",
        "isPartOf": {
          "@id": "https://ajinkyaswami.in/#website"
        },
        "mainEntity": {
          "@id": "https://ajinkyaswami.in/#person"
        }
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6] text-slate-800 selection:bg-amber-200 selection:text-amber-950 overflow-hidden font-mono">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <Navbar />

      <PageWrapper>
        {/* Section 1 & 2: Hero Section */}
        <Hero />

        {/* Section 2.5: The 7 Dragon Balls QA Artifact Bar */}
        <DragonBallsBar />

        <main className="flex-1 container mx-auto px-4 md:px-8 pb-24 relative z-10">
          
          {/* Main Cyber Telemetry Dashboard Banner (Capsule Corp QA Lab) */}
          <div className="border border-amber-200/80 bg-white/85 backdrop-blur-xl p-5 rounded-3xl mb-12 relative shadow-md">
            <CornerCrosshairs colorClass="text-amber-500/60" />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="text-left">
                <span className="text-[9px] tracking-widest text-amber-800 font-black uppercase block mb-1">
                  CAPSULE CORP. LAB NO. 01 // WEST CITY QA ARCHIVE
                </span>
                <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                  <Terminal className="text-amber-600 shrink-0 animate-pulse" size={16} />
                  <DecodeText text="SCOUTER TELEMETRY: HIGH-CONCURRENCY QA RADAR" />
                </h2>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 border border-amber-300 rounded-xl text-amber-950 text-[10px] font-bold font-mono shadow-xs">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping" />
                <span>GRAVITY STATUS: 100G STABLE</span>
              </div>
            </div>
          </div>

          {/* Telemetry Status Grid: DBZ & OPM Training Installations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: "100x GRAVITY RIG // 100倍重力室",
                status: "10,000+ TPS PEAK LOAD",
                desc: "Capsule Corp high-stress training simulation. Payment endpoints & bank gateway switches audited under extreme traffic.",
                icon: <Cpu size={18} className="text-amber-600" />,
                borderClass: "border-amber-200/90 bg-amber-50/70 shadow-xs",
                badge: "CAPSULE TRAINING 100G"
              },
              {
                title: "HYPERBOLIC TIME CHAMBER // 精神と時の部屋",
                status: "150+ AUTOMATED SUITES",
                desc: "1 Year of exhaustive regression paths compressed into 1 Day of CI/CD builds via Postman, Newman & JMeter.",
                icon: <RefreshCw size={18} className="text-emerald-700 animate-spin-slow" />,
                borderClass: "border-emerald-200/90 bg-emerald-50/70 shadow-xs",
                badge: "TIME COMPRESSION MATRIX"
              },
              {
                title: "SERIOUS PUNCH QA // 必殺マジシリーズ",
                status: "0.00% DEFECT ESCAPE",
                desc: "One Punch QA Protocol: Eliminating critical vulnerabilities in a single strike with boundary value analysis.",
                icon: <Shield size={18} className="text-rose-600" />,
                borderClass: "border-rose-200/90 bg-rose-50/70 shadow-xs",
                badge: "ONE PUNCH PROTOCOL"
              }
            ].map((node, idx) => (
              <div key={idx} className={`chamfer-corner border p-5 relative text-left backdrop-blur-md transition-all hover:shadow-md ${node.borderClass}`}>
                <CornerCrosshairs colorClass="text-amber-500/60" />
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-white border border-slate-200 rounded-lg shadow-xs">
                      {node.icon}
                    </div>
                    <span className="text-[9px] text-slate-500 uppercase tracking-widest font-black font-mono">
                      {node.title}
                    </span>
                  </div>
                  <span className="text-[7.5px] px-1.5 py-0.5 bg-white/80 rounded border border-slate-200 font-mono text-slate-600 font-bold hidden sm:block">
                    {node.badge}
                  </span>
                </div>
                <h3 className="text-sm font-black text-slate-900 mb-1 font-mono">{node.status}</h3>
                <p className="text-[11px] text-slate-600 leading-relaxed font-sans font-medium">{node.desc}</p>
              </div>
            ))}
          </div>

          {/* Section 3: Hero Profile (About Me) */}
          <div className="mb-16">
            <AboutMe />
          </div>

          {/* Section 4: Career Sagas (Experience Timeline) */}
          <div className="mb-16">
            <Experience />
          </div>

          {/* Section 5: Production Missions (Portfolio Grid) */}
          <div className="mb-16">
            <Projects />
          </div>

          {/* Section 6: Technical Arsenal (Technical Skills) */}
          <div className="mb-16">
            <Skills />
          </div>

          {/* Section 7: Comms Channel (Secure Contact Deck) */}
          <div className="mb-16">
            <Contact />
          </div>

          {/* Sector Overrides Clearance Access Navigation Buttons */}
          <div className="max-w-4xl mx-auto border border-amber-200/80 bg-white/85 backdrop-blur-xl p-6 md:p-8 rounded-3xl relative overflow-hidden text-center shadow-lg">
            <CornerCrosshairs colorClass="text-amber-500/60" />
            <div className="absolute top-0 right-0 px-3 py-1 bg-amber-100 border-b border-l border-amber-300 rounded-bl-xl text-[8px] uppercase tracking-widest text-amber-950 font-bold font-mono">
              DIRECT CLEARANCE // 認証済
            </div>
            
            <h2 className="text-xs tracking-widest text-amber-800 uppercase font-bold mb-3 flex items-center justify-center gap-2 font-mono">
              <Radio size={14} className="animate-pulse text-amber-600" />
              COMMAND NETWORK DIRECT ACCESS // 接続
            </h2>
            <p className="text-[10px] text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed font-mono">
              Telemetry clearance verified. Access production mission briefs, battle-tested service chronicles, and encrypted communication channels.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "MISSION_ARCHIVE", href: "/asset-manifest", desc: "Production Missions & Case Studies" },
                { label: "PERSONNEL_DOSSIER", href: "/personnel-file", desc: "Service Sagas & Career Log" },
                { label: "COMMS_CHANNEL", href: "/transmission-tower", desc: "Hero Dispatch Frequencies (Contact)" }
              ].map((btn, idx) => (
                <Link
                  key={idx}
                  href={btn.href}
                  className="chamfer-corner border border-amber-300 bg-amber-50/80 hover:bg-amber-400 text-amber-950 hover:text-slate-950 font-bold p-4 block transition-all duration-300 select-none cursor-pointer hover:shadow-md shadow-xs group"
                >
                  <span className="text-xs block tracking-widest font-mono">{btn.label}</span>
                  <span className="text-[8px] block text-slate-500 font-normal uppercase mt-1 group-hover:text-slate-900 font-mono">
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
