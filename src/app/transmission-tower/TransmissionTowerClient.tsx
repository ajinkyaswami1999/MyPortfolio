"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
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
  Download
} from "lucide-react";

interface Frequency {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  frequency: string;
  detail: string;
}

const activeFrequencies: Frequency[] = [
  {
    id: "linkedin",
    label: "[FREQ-01] SECURE MESH / LINKEDIN NETWORK",
    href: "https://www.linkedin.com/in/ajinkya-swami/",
    icon: <LinkedinIcon size={14} className="text-brand-cyan" />,
    frequency: "142.80 MHz",
    detail: "Professional identity synchronization ledger."
  },
  {
    id: "github",
    label: "[FREQ-02] ENCRYPTED REPO / GITHUB SOURCE",
    href: "https://github.com/ajinkyaswami1999",
    icon: <GithubIcon size={14} className="text-brand-blue" />,
    frequency: "156.45 MHz",
    detail: "Classified source repositories and automation codebases."
  },
  {
    id: "voxelique-insta",
    label: "[FREQ-03] VISUAL STREAM / VOXELIQUE CORE (INSTAGRAM)",
    href: "https://www.instagram.com/voxelique/",
    icon: <InstagramIcon size={14} className="text-brand-purple" />,
    frequency: "168.90 MHz",
    detail: "3D manufacturing telemetry log screenshots."
  },
  {
    id: "voxelique-web",
    label: "[FREQ-04] VOXELIQUE STOREFRONT GATEWAY",
    href: "https://voxelique.com",
    icon: <Globe size={14} className="text-brand-purple" />,
    frequency: "189.15 MHz",
    detail: "3D print order calculations and material replication models."
  },
  {
    id: "toolique-web",
    label: "[FREQ-05] TOOLIQUE WEB INFRASTRUCTURE",
    href: "https://toolique.in",
    icon: <Globe size={14} className="text-brand-amber" />,
    frequency: "192.30 MHz",
    detail: "MIME-type validations and developer utilities grid."
  },
  {
    id: "photography",
    label: "[FREQ-06] EXPEDITION FEED / PHOTOGRAPHY (INSTAGRAM)",
    href: "https://www.instagram.com/theasterlens/",
    icon: <Camera size={14} className="text-brand-cyan" />,
    frequency: "204.60 MHz",
    detail: "Macro lens expedition captures and vehicle frameworks logs."
  },
  {
    id: "snapchat",
    label: "[FREQ-07] INSTANT DIRECT LINK / SNAPCHAT CHANNEL",
    href: "https://snapchat.com/t/wgcxkncY",
    icon: <SnapchatIcon size={14} className="text-yellow-400" />,
    frequency: "221.80 MHz",
    detail: "Informal short-wavelength communications route."
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#080A0D] text-slate-200 selection:bg-brand-orange/20 selection:text-brand-orange overflow-hidden font-mono">
      <Navbar />

      <PageWrapper>
        <main className="flex-1 container mx-auto px-4 md:px-8 pt-32 pb-24 relative z-10">
          
          {/* Page Title Header */}
          <div className="border-b border-brand-cyan/20 pb-6 mb-12 text-left">
            <span className="text-xs font-mono tracking-widest text-brand-orange uppercase mb-2 block">
              INGEN COMMS DECK
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold font-display text-white">
              <DecodeText text="INGEN TRANSMISSION TOWER" />
            </h1>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed mt-2 max-w-2xl">
              Calibrate receiver systems to target active outbound frequencies or initialize secure direct communications terminals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Block - Satellite Frequencies (75% Grid Layout) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 mb-4 text-left">
                <Radio className="text-brand-orange animate-pulse" size={16} />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Active Outbound Signals</span>
              </div>

              {activeFrequencies.map((freq) => (
                <a
                  key={freq.id}
                  href={freq.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/5 bg-[#0b0e14]/75 p-4 rounded-2xl flex items-center justify-between hover:border-brand-orange/30 group transition-all duration-300 relative text-left select-none cursor-pointer"
                >
                  <CornerCrosshairs />
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-slate-950 border border-white/5 rounded-xl group-hover:border-brand-orange/25 transition-colors">
                      {freq.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-white block mb-0.5 group-hover:text-brand-orange transition-colors">
                        {freq.label}
                      </span>
                      <span className="text-[9px] text-slate-500 font-bold block mb-1">
                        CARRIER FREQUENCY: {freq.frequency}
                      </span>
                      <p className="text-[10px] text-slate-400 leading-normal">
                        {freq.detail}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-slate-700 group-hover:text-brand-orange transition-colors shrink-0 ml-4" />
                </a>
              ))}
            </div>

            {/* Right Block - Terminal Communication Form */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Transmission terminal card */}
              <div className="border border-brand-cyan/20 bg-[#0c1017]/80 p-6 rounded-3xl relative text-left">
                <CornerCrosshairs />
                
                <h3 className="text-sm font-bold text-white uppercase mb-4 flex items-center gap-2">
                  <Terminal className="text-brand-cyan shrink-0" size={16} />
                  SECURE DIRECT COMM TRANSMITTER
                </h3>

                {isSuccess ? (
                  <div className="border border-jungle-green/20 bg-[#0d1511] p-8 rounded-2xl text-center space-y-4">
                    <CheckCircle2 className="text-jungle-green mx-auto" size={36} />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Transmission Relayed</h4>
                      <p className="text-[10px] text-slate-400 leading-relaxed">
                        Data packet securely routed to InGen logs. AJINKYA SWAMI will resolve signal responses shortly.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Sender Handle</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="ENTER_SENDER_NAME"
                        className="w-full bg-slate-950 border border-white/5 focus:border-brand-cyan focus:outline-none px-4 py-2.5 rounded-xl text-xs text-white placeholder-slate-650"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Receiver Address</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="SENDER_EMAIL@DOMAIN.COM"
                        className="w-full bg-slate-950 border border-white/5 focus:border-brand-cyan focus:outline-none px-4 py-2.5 rounded-xl text-xs text-white placeholder-slate-650"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Payload Content</label>
                      <textarea
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="COMPOSE_DATA_STREAM_PAYLOAD..."
                        className="w-full bg-slate-950 border border-white/5 focus:border-brand-cyan focus:outline-none px-4 py-2.5 rounded-xl text-xs text-white placeholder-slate-650 resize-none font-mono"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bevel-clip w-full border border-brand-cyan hover:bg-brand-cyan text-brand-cyan hover:text-slate-950 font-bold py-3 text-xs tracking-widest uppercase transition-colors duration-300 flex items-center justify-center gap-1.5 select-none cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>TRANSMITTING DATA PKT...</span>
                      ) : (
                        <>
                          <Send size={12} />
                          <span>BROADCAST STREAM</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Resume download option */}
              <div className="border border-white/5 bg-[#0b0e14]/75 p-5 rounded-2xl relative text-left">
                <CornerCrosshairs />
                <h4 className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-2">Classified Attachments</h4>
                <p className="text-[10px] text-slate-400 leading-relaxed mb-4">
                  Retrieve personnel dossiers, security certifications, and structural resume logs offline.
                </p>
                <a
                  href="/Ajinkya_swami_resume.pdf"
                  download="Ajinkya_Swami_Resume.pdf"
                  className="bevel-clip border border-brand-orange hover:bg-brand-orange text-brand-orange hover:text-slate-950 font-bold py-2 px-4 text-[9px] tracking-wider uppercase text-center transition-colors duration-300 block select-none cursor-pointer"
                >
                  <span className="flex items-center justify-center gap-1.5">
                    <Download size={11} /> DOWNLOAD DOSSIER (PDF)
                  </span>
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
