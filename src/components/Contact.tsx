"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Download, CheckCircle2, Radio } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, SnapchatIcon } from "./BrandIcons";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "mwkgygjo";

    if (formId === "mwkgygjo" && (process.env.NODE_ENV === "development" || (typeof window !== "undefined" && window.location.hostname === "localhost"))) {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 relative bg-[#FAF9F6] overflow-hidden border-t border-amber-200/60">
      {/* Background aurora */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-amber-200/30 filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-rose-200/25 filter blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left max-w-3xl">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-amber-800 uppercase mb-2 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span>通信リンク // HERO COMMS DISPATCH</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            COMMS TRANSMITTER
          </h2>
          <p className="text-slate-600 mt-3 text-xs md:text-sm leading-relaxed font-sans font-medium">
            Establish a direct channel with my terminal. Inquiries, enterprise contracts, and QA consulting signals are logged for rapid return dispatch.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-400 via-rose-400 to-sky-400 mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Block - Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Location card */}
            <div className="chamfer-corner p-6 border border-slate-200/80 bg-white/85 backdrop-blur-md flex items-center space-x-4 shadow-sm">
              <div className="p-3 bg-sky-50 border border-sky-200 rounded-xl text-sky-700">
                <MapPin size={18} />
              </div>
              <div className="text-left">
                <span className="text-xs text-slate-500 font-mono block font-bold">Station Coordinates</span>
                <span className="text-xs md:text-sm font-bold text-slate-900">Gurugram, Haryana, India</span>
              </div>
            </div>

            {/* Email card */}
            <a
              href="mailto:ajinkyaswami1999@gmail.com"
              className="chamfer-corner p-6 border border-slate-200/80 bg-white/85 backdrop-blur-md flex items-center space-x-4 hover:border-amber-400 transition-all group shadow-sm"
            >
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-700 group-hover:scale-110 transition-transform">
                <Mail size={18} />
              </div>
              <div className="text-left">
                <span className="text-xs text-slate-500 font-mono block font-bold">Direct Email Link</span>
                <span className="text-xs md:text-sm font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                  ajinkyaswami1999@gmail.com
                </span>
              </div>
            </a>

            {/* Phone card */}
            <a
              href="tel:+918875043720"
              className="chamfer-corner p-6 border border-slate-200/80 bg-white/85 backdrop-blur-md flex items-center space-x-4 hover:border-rose-400 transition-all group shadow-sm"
            >
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 group-hover:scale-110 transition-transform">
                <Phone size={18} />
              </div>
              <div className="text-left">
                <span className="text-xs text-slate-500 font-mono block font-bold">Hotline Frequency</span>
                <span className="text-xs md:text-sm font-bold text-slate-900 group-hover:text-rose-800 transition-colors">
                  +91 8875043720
                </span>
              </div>
            </a>

            {/* Connect & Download */}
            <div className="chamfer-corner p-6 border border-slate-200/80 bg-white/85 backdrop-blur-md flex flex-col justify-center space-y-4 shadow-sm">
              <span className="text-xs font-mono text-amber-800 text-center uppercase tracking-widest block font-bold">
                HERO FREQUENCIES // ネットワーク
              </span>
              <div className="flex justify-center items-center space-x-3">
                <a
                  href="https://github.com/ajinkyaswami1999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 hover:text-slate-950 hover:border-amber-300 hover:bg-amber-50/50 transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ajinkya-swami/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 hover:text-slate-950 hover:border-amber-300 hover:bg-amber-50/50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={16} />
                </a>
                <a
                  href="https://www.instagram.com/ajinkyaswami.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 hover:text-slate-950 hover:border-amber-300 hover:bg-amber-50/50 transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={16} />
                </a>
                <a
                  href="https://snapchat.com/t/wgcxkncY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 hover:text-slate-950 hover:border-amber-300 hover:bg-amber-50/50 transition-colors"
                  aria-label="Snapchat"
                >
                  <SnapchatIcon size={16} />
                </a>
                <a
                  href="/Ajinkya_swami_resume.pdf"
                  download="Ajinkya_Swami_Resume.pdf"
                  className="flex items-center space-x-1.5 px-4 py-2.5 bg-amber-100/90 border border-amber-300 hover:bg-amber-200 text-amber-950 rounded-xl text-xs font-mono font-bold transition-all shadow-xs"
                  aria-label="Download Resume PDF"
                >
                  <Download size={13} className="text-amber-700" />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Block - Contact Form */}
          <div className="lg:col-span-7 chamfer-corner p-8 md:p-10 border border-amber-200/80 flex flex-col justify-center relative overflow-hidden bg-white/85 backdrop-blur-xl shadow-lg">
            {/* Top frequency light */}
            <div className="absolute top-3 right-4 flex items-center space-x-1.5 font-mono text-[8px] text-slate-500 font-bold select-none">
              <Radio size={10} className="text-amber-600 animate-pulse" />
              <span>FREQ: 144.800 MHz // HERO ASSN DISPATCH</span>
            </div>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 flex flex-col items-center justify-center space-y-4"
              >
                <div className="p-4 bg-emerald-50 rounded-full border border-emerald-300 text-emerald-700 animate-pulse">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-lg md:text-xl font-bold font-display text-slate-900">
                  TRANSMISSION TRANSMITTED // 送信完了
                </h3>
                <p className="text-slate-600 text-xs max-w-sm mx-auto leading-relaxed font-sans">
                  Your signal has been delivered directly to the pilot terminal. Expect response dispatch shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-xs font-mono uppercase tracking-wider font-bold px-5 py-2.5 bg-amber-100 border border-amber-300 hover:bg-amber-200 text-amber-950 rounded-xl transition-all cursor-pointer"
                >
                  New Transmission // 新規送信
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div>
                  <label htmlFor="name" className="block text-[9px] font-mono text-slate-600 uppercase tracking-widest mb-1.5 font-bold">
                    Packet Sender Name // 発信元
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="E.g. Technical Recruiter / Engineering Lead"
                    className="w-full px-4 py-3 bg-slate-50/80 border border-slate-200 focus:border-amber-400 focus:bg-white rounded-xl text-slate-900 placeholder-slate-400 outline-none transition-all text-xs font-mono"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[9px] font-mono text-slate-600 uppercase tracking-widest mb-1.5 font-bold">
                    Sender Return Route (Email) // 連絡先
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 bg-slate-50/80 border border-slate-200 focus:border-amber-400 focus:bg-white rounded-xl text-slate-900 placeholder-slate-400 outline-none transition-all text-xs font-mono"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[9px] font-mono text-slate-600 uppercase tracking-widest mb-1.5 font-bold">
                    Payload Message // 本文
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe project requirements, QA scope, or contract terms..."
                    className="w-full px-4 py-3 bg-slate-50/80 border border-slate-200 focus:border-amber-400 focus:bg-white rounded-xl text-slate-900 placeholder-slate-400 outline-none transition-all text-xs font-mono resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-[10px] text-rose-600 font-mono font-bold">
                    [ERROR] Transmission drop occurred. Re-check network link and resubmit.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="chamfer-corner w-full flex items-center justify-center space-x-2 text-xs font-mono uppercase tracking-wider font-bold py-3.5 bg-gradient-to-r from-amber-400 via-rose-400 to-sky-400 text-slate-950 transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <span className="flex items-center space-x-2">
                      <span className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Packet...</span>
                    </span>
                  ) : (
                    <>
                      <span>Broadcast Transmission // 送信</span>
                      <Send size={12} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
