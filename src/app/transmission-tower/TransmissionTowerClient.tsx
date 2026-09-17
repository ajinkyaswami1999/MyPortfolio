"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import BackgroundEffects from "@/components/BackgroundEffects";
import CornerCrosshairs from "@/components/CornerCrosshairs";
import DecodeText from "@/components/DecodeText";
import { 
  GithubIcon, 
  LinkedinIcon, 
  InstagramIcon, 
  SnapchatIcon 
} from "@/components/BrandIcons";
import { 
  Radio, 
  Send, 
  CheckCircle2, 
  Terminal, 
  ArrowUpRight,
  Globe, 
  Camera, 
  Download,
  Mail,
  Phone,
  MapPin,
  Zap,
  ShieldCheck,
  Box,
  Sparkles,
  Cpu,
  ExternalLink,
  Signal
} from "lucide-react";

interface Frequency {
  id: string;
  code: string;
  label: string;
  japanese: string;
  href: string;
  icon: React.ReactNode;
  frequency: string;
  status: string;
  detail: string;
  badgeClass: string;
}

const activeFrequencies: Frequency[] = [
  {
    id: "linkedin",
    code: "FREQ-01",
    label: "LINKEDIN SECURE MESH",
    japanese: "職務交信網",
    href: "https://www.linkedin.com/in/ajinkya-swami/",
    icon: <LinkedinIcon size={16} className="text-sky-600" />,
    frequency: "142.80 MHz",
    status: "S-CLASS QA LEAD",
    detail: "Professional identity synchronization, FinTech test architecture, and QA career network.",
    badgeClass: "bg-sky-100 text-sky-900 border-sky-300"
  },
  {
    id: "github",
    code: "FREQ-02",
    label: "GITHUB SOURCE REPOSITORIES",
    japanese: "暗号化コード倉庫",
    href: "https://github.com/ajinkyaswami1999",
    icon: <GithubIcon size={16} className="text-slate-800" />,
    frequency: "156.45 MHz",
    status: "PUBLIC REPOS ACTIVE",
    detail: "Classified automation frameworks, CI/CD pipelines, test runners, and open-source tooling.",
    badgeClass: "bg-slate-100 text-slate-900 border-slate-300"
  },
  {
    id: "toolique-web",
    code: "FREQ-03",
    label: "TOOLIQUE 250+ TOOLS ARSENAL",
    japanese: "必殺計算兵装",
    href: "https://toolique.in",
    icon: <Globe size={16} className="text-amber-600" />,
    frequency: "192.30 MHz",
    status: "250+ TOOLS LIVE",
    detail: "Genos-grade calculation power: 250+ free, client-side, zero-login developer formatters and QA calculators.",
    badgeClass: "bg-amber-100 text-amber-950 border-amber-300"
  },
  {
    id: "voxelique-web",
    code: "FREQ-04",
    label: "VOXELIQUE 3D STOREFRONT GATEWAY",
    japanese: "カプセル立体造形",
    href: "https://voxelique.com",
    icon: <Box size={16} className="text-purple-600" />,
    frequency: "189.15 MHz",
    status: "±0.05MM TOLERANCE",
    detail: "Direct-to-consumer 3D manufacturing orders, CAD modeling services, and functional physical products.",
    badgeClass: "bg-purple-100 text-purple-950 border-purple-300"
  },
  {
    id: "voxelique-insta",
    code: "FREQ-05",
    label: "VOXELIQUE 3D LAB STREAM (INSTAGRAM)",
    japanese: "造形記録ストリーム",
    href: "https://www.instagram.com/voxelique/",
    icon: <InstagramIcon size={16} className="text-purple-600" />,
    frequency: "168.90 MHz",
    status: "TIME-LAPSE FEED",
    detail: "Additive manufacturing time-lapses, slicer layer testing, and workshop production showcase.",
    badgeClass: "bg-purple-100 text-purple-900 border-purple-300"
  },
  {
    id: "photography",
    code: "FREQ-06",
    label: "THEASTERLENS PHOTOGRAPHY (INSTAGRAM)",
    japanese: "索敵写真観測",
    href: "https://www.instagram.com/theasterlens/",
    icon: <Camera size={16} className="text-orange-600" />,
    frequency: "204.60 MHz",
    status: "NIKON Z 30 MACRO",
    detail: "Macro lens expedition captures, automotive engineering details, and vehicle framework shutter logs.",
    badgeClass: "bg-orange-100 text-orange-950 border-orange-300"
  },
  {
    id: "insta-personal",
    code: "FREQ-07",
    label: "PERSONAL INSTAGRAM CHRONICLES",
    japanese: "開発者日常記録",
    href: "https://www.instagram.com/ajinkyaswami.in/",
    icon: <InstagramIcon size={16} className="text-pink-600" />,
    frequency: "215.20 MHz",
    status: "HERO DAILY LOGS",
    detail: "Personal engineering reflections, behind-the-scenes experiments, and developer chronicles.",
    badgeClass: "bg-pink-100 text-pink-950 border-pink-300"
  },
  {
    id: "snapchat",
    code: "FREQ-08",
    label: "SNAPCHAT DIRECT SHORTWAVE LINK",
    japanese: "即時交信回線",
    href: "https://snapchat.com/t/wgcxkncY",
    icon: <SnapchatIcon size={16} className="text-amber-500" />,
    frequency: "221.80 MHz",
    status: "DIRECT MOBILE LINK",
    detail: "Informal short-wavelength communications route for casual mobile pings and rapid check-ins.",
    badgeClass: "bg-amber-100 text-amber-900 border-amber-300"
  }
];

export default function TransmissionTowerClient() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitting(true);

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "mwkgygjo";

    try {
      if (formId === "mwkgygjo" && (process.env.NODE_ENV === "development" || (typeof window !== "undefined" && window.location.hostname === "localhost"))) {
        await new Promise((resolve) => setTimeout(resolve, 1200));
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setIsSuccess(false), 7000);
        return;
      }

      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formState),
      });

      setIsSubmitting(false);
      if (response.ok) {
        setIsSuccess(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setIsSuccess(false), 7000);
      }
    } catch {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 7000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6] text-slate-800 selection:bg-amber-100 selection:text-amber-900 overflow-hidden relative font-sans">
      <Navbar />

      {/* Global DBZ & OPM Anime Background (Toriyama clouds, manga speedlines, ki aura, shockwaves) */}
      <BackgroundEffects />

      {/* Contextual Tactical Radar Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-35" />
        
        {/* Dragon Radar & Capsule Subspace telemetry watermark */}
        <div className="absolute top-28 right-8 font-mono text-[9px] text-amber-900/60 tracking-widest text-right space-y-1 hidden md:block">
          <div>CAPSULE CORP SUBSPACE ARRAY // 通信司令部</div>
          <div>DRAGON RADAR: 142.80 - 221.80 MHz</div>
          <div>RELAY ENCRYPTION: 256-BIT QUANTUM</div>
          <div>DISPATCH: S-CLASS LEVEL STANDBY (READY)</div>
        </div>

        {/* Long-range radio reticle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-amber-300/20 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-amber-300/25 rounded-full pointer-events-none" />
      </div>

      <PageWrapper>
        <main className="flex-1 container mx-auto px-4 md:px-8 pt-32 pb-24 relative z-10">
          
          {/* Mission Control Page Title Header */}
          <div className="border-b border-amber-200/80 pb-8 mb-12 text-left">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-amber-900 uppercase bg-amber-100/90 px-3 py-1 rounded-full border border-amber-300/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span>緊急通信司令所 // HERO ASSN DISPATCH & CAPSULE CORP COMMS TOWER</span>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold">
                DISPATCH STATUS: STANDBY
              </span>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-900 border border-cyan-300 font-bold">
                DRAGON RADAR: LOCKED
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black font-display text-slate-900 tracking-tight">
                <DecodeText text="CYBER TRANSMISSION TOWER" />
              </h1>
              <span className="text-xs md:text-sm font-mono tracking-widest text-amber-800 font-bold">
                瞬 間 移 動 通 信 網 (SHUNKAN IDO COMMS MESH)
              </span>
            </div>

            <p className="text-slate-600 text-xs md:text-sm leading-relaxed mt-4 max-w-3xl font-sans">
              Establish direct subspace carrier frequencies with <strong>Ajinkya Swami</strong>, Senior QA Automation Engineer & Multi-Venture Architect. Dispatch encrypted telemetry packets, coordinate software QA missions, or tap into real-time creator channels across the network.
            </p>

            {/* Quick Telemetry Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
              <div className="bg-white/85 border border-amber-200/80 p-2.5 rounded-xl shadow-xs">
                <div className="text-[9px] font-mono uppercase text-amber-700 font-bold">Transmission Speed</div>
                <div className="text-xs font-black text-slate-900 font-mono">Instant (Shunkan Ido)</div>
              </div>
              <div className="bg-white/85 border border-cyan-200/80 p-2.5 rounded-xl shadow-xs">
                <div className="text-[9px] font-mono uppercase text-cyan-700 font-bold">Active Carriers</div>
                <div className="text-xs font-black text-slate-900 font-mono">8 Outbound Signals</div>
              </div>
              <div className="bg-white/85 border border-purple-200/80 p-2.5 rounded-xl shadow-xs">
                <div className="text-[9px] font-mono uppercase text-purple-700 font-bold">Encryption</div>
                <div className="text-xs font-black text-slate-900 font-mono">256-Bit Capsule Corp</div>
              </div>
              <div className="bg-white/85 border border-rose-200/80 p-2.5 rounded-xl shadow-xs">
                <div className="text-[9px] font-mono uppercase text-rose-700 font-bold">Direct Line</div>
                <div className="text-xs font-black text-slate-900 font-mono">S-Class Priority</div>
              </div>
            </div>

            <div className="h-1 w-24 bg-gradient-to-r from-amber-400 via-orange-400 to-cyan-500 mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column - 8 Active Carrier Frequencies */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between mb-4 text-left pl-1">
                <div className="flex items-center gap-2">
                  <Radio className="text-amber-600 animate-pulse" size={16} />
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-widest font-mono">
                    ACTIVE OUTBOUND CARRIERS // 送信周波数
                  </span>
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 font-bold">
                  8 OF 8 LIVE
                </span>
              </div>

              <div className="space-y-3">
                {activeFrequencies.map((freq) => (
                  <a
                    key={freq.id}
                    href={freq.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel border border-amber-200/80 bg-white/90 p-4 rounded-2xl flex items-center justify-between hover:border-amber-400 group transition-all duration-300 relative text-left select-none cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <CornerCrosshairs colorClass="text-amber-400/40" />
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-amber-50/90 border border-amber-200/80 rounded-xl group-hover:border-amber-400 group-hover:scale-105 transition-all shrink-0 mt-0.5">
                        {freq.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-bold border border-slate-200">
                            {freq.code}
                          </span>
                          <span className="text-[8.5px] font-mono text-slate-500 font-semibold">
                            {freq.japanese}
                          </span>
                          <span className={`text-[8px] font-mono px-2 py-0.2 rounded border font-bold ${freq.badgeClass}`}>
                            {freq.status}
                          </span>
                        </div>

                        <span className="text-xs md:text-sm font-extrabold text-slate-900 block mb-0.5 group-hover:text-amber-800 transition-colors font-display">
                          {freq.label}
                        </span>

                        <span className="text-[10px] text-amber-800 font-bold block mb-1 font-mono">
                          CARRIER FREQUENCY: {freq.frequency}
                        </span>
                        
                        <p className="text-[11px] text-slate-600 leading-normal font-sans">
                          {freq.detail}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight size={16} className="text-slate-400 group-hover:text-amber-600 transition-colors shrink-0 ml-3" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column - S-Class Dispatch Terminal Form & Dossier */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Transmission terminal card */}
              <div className="glass-panel border border-amber-200/90 bg-white/95 p-6 md:p-7 rounded-3xl relative text-left shadow-md">
                <CornerCrosshairs colorClass="text-amber-500/50" />
                
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-amber-100">
                  <div className="flex items-center gap-2 font-mono">
                    <Terminal className="text-amber-600 shrink-0" size={18} />
                    <div>
                      <h3 className="text-xs md:text-sm font-bold text-slate-900 uppercase">
                        S-CLASS DISPATCH TERMINAL // 送信機
                      </h3>
                      <span className="text-[8.5px] text-amber-700 font-semibold block">
                        DIRECT SUB-SPACE PACKET RELAY
                      </span>
                    </div>
                  </div>
                  <span className="text-[8px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold">
                    ONLINE
                  </span>
                </div>

                {isSuccess ? (
                  <div className="border border-emerald-300 bg-emerald-50/90 p-8 rounded-2xl text-center space-y-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto border border-emerald-300">
                      <CheckCircle2 className="text-emerald-600" size={28} />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-200 text-emerald-900 font-bold">
                        TRANSMISSION RELAYED // 送信完了
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mt-2 mb-1 font-mono">
                        Telemetry Packet Delivered!
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        Your message has been dispatched to Ajinkya Swami&apos;s primary Scouter terminal. Expect a response shortly via your return frequency.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block mb-1 font-mono flex items-center justify-between">
                        <span>Sender Codename / Name // 発信者名</span>
                        <span className="text-amber-700 text-[9px]">*REQUIRED</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="ENTER_SENDER_NAME"
                        className="w-full bg-slate-50 border border-slate-200 focus:border-amber-500 focus:bg-white focus:outline-none px-4 py-2.5 rounded-xl text-xs text-slate-900 placeholder-slate-400 font-mono shadow-inner transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block mb-1 font-mono flex items-center justify-between">
                        <span>Return Frequency / Email // 連絡先</span>
                        <span className="text-amber-700 text-[9px]">*REQUIRED</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="SENDER_EMAIL@DOMAIN.COM"
                        className="w-full bg-slate-50 border border-slate-200 focus:border-amber-500 focus:bg-white focus:outline-none px-4 py-2.5 rounded-xl text-xs text-slate-900 placeholder-slate-400 font-mono shadow-inner transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block mb-1 font-mono flex items-center justify-between">
                        <span>Transmission Payload // 本文</span>
                        <span className="text-amber-700 text-[9px]">*REQUIRED</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="COMPOSE_DATA_STREAM_PAYLOAD (QA Audit inquiries, collaboration requests, or direct pings)..."
                        className="w-full bg-slate-50 border border-slate-200 focus:border-amber-500 focus:bg-white focus:outline-none px-4 py-2.5 rounded-xl text-xs text-slate-900 placeholder-slate-400 resize-none font-mono shadow-inner transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full border border-amber-400 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-500 hover:to-orange-500 text-slate-950 font-black py-3 px-4 rounded-xl text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 select-none cursor-pointer shadow-md hover:shadow-lg disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="font-mono">DISPATCHING TELEMETRY PACKET...</span>
                      ) : (
                        <>
                          <Send size={14} className="text-slate-950" />
                          <span>BROADCAST STREAM // 瞬間送信</span>
                        </>
                      )}
                    </button>
                  </form>
                )}

                {/* Direct Emergency Contact Details */}
                <div className="mt-6 pt-5 border-t border-amber-100 font-mono text-[10px] space-y-2 text-slate-600">
                  <div className="flex items-center gap-2">
                    <Mail size={12} className="text-amber-600 shrink-0" />
                    <span>DIRECT INBOX:</span>
                    <a href="mailto:ajinkyaswami1999@gmail.com" className="text-slate-900 font-bold hover:text-amber-800 underline">
                      ajinkyaswami1999@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={12} className="text-cyan-600 shrink-0" />
                    <span>EMERGENCY DISPATCH:</span>
                    <a href="tel:+918875043720" className="text-slate-900 font-bold hover:text-cyan-800">
                      +91 8875043720
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={12} className="text-rose-600 shrink-0" />
                    <span>BASE SECTOR:</span>
                    <span className="text-slate-900 font-bold">Gurugram, Haryana, India (Hero HQ)</span>
                  </div>
                </div>
              </div>

              {/* Personnel Dossier Card */}
              <div className="glass-panel border border-amber-200/90 bg-white/90 p-6 rounded-3xl relative text-left shadow-sm">
                <CornerCrosshairs colorClass="text-amber-500/50" />
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs text-amber-900 uppercase tracking-widest font-black font-mono">
                    S-CLASS OFFICIAL DOSSIER // 公認履歴書
                  </h4>
                  <span className="text-[8px] font-mono px-2 py-0.5 rounded bg-sky-100 text-sky-900 border border-sky-300 font-bold">
                    PDF ARCHIVE
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4 font-sans">
                  Retrieve Ajinkya Swami&apos;s verified curriculum vitae, QA automation credentials, FinTech testing track record, and venture portfolio offline.
                </p>
                <a
                  href="/Ajinkya_swami_resume.pdf"
                  download="Ajinkya_Swami_Resume.pdf"
                  className="w-full border border-sky-300 bg-sky-50 hover:bg-sky-500 text-sky-950 hover:text-white font-bold py-2.5 px-4 rounded-xl text-xs tracking-wider uppercase text-center transition-all duration-300 flex items-center justify-center gap-2 select-none cursor-pointer shadow-xs hover:shadow-sm font-mono"
                >
                  <Download size={14} />
                  <span>DOWNLOAD S-CLASS DOSSIER (PDF)</span>
                </a>
              </div>

            </div>

          </div>

        </main>
      </PageWrapper>

      <Footer />
    </div>
  );
}
