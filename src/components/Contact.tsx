"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Download, CheckCircle2, Radio } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

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
    <section id="contact" className="py-24 relative bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      {/* Background aurora */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-brand-amber/5 filter blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left max-w-3xl">
          <span className="text-xs font-mono tracking-widest text-brand-amber uppercase mb-2">Transmission Deck</span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
            Transmit Signal
          </h2>
          <p className="text-slate-400 mt-3 text-xs md:text-sm leading-relaxed">
            Send a transmission packet to the Evolution Lab. All signals are queued, reconciled, and audited for quality.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-amber via-brand-orange to-brand-cyan mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Block - Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Location card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 flex items-center space-x-4">
              <div className="p-3 bg-brand-amber/10 border border-brand-amber/30 rounded-xl">
                <MapPin className="text-brand-amber" size={18} />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-mono block">Station Coordinates</span>
                <span className="text-xs md:text-sm font-semibold text-white">Gurugram, Haryana, India</span>
              </div>
            </div>

            {/* Email card */}
            <a
              href="mailto:ajinkyaswami1999@gmail.com"
              className="glass-panel p-6 rounded-2xl border border-white/5 flex items-center space-x-4 hover:border-brand-amber/35 transition-all group"
            >
              <div className="p-3 bg-brand-cyan/10 border border-brand-cyan/30 rounded-xl">
                <Mail className="text-brand-cyan" size={18} />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-mono block">Email Link</span>
                <span className="text-xs md:text-sm font-semibold text-white group-hover:text-brand-amber transition-colors">
                  ajinkyaswami1999@gmail.com
                </span>
              </div>
            </a>

            {/* Phone card */}
            <a
              href="tel:+918875043720"
              className="glass-panel p-6 rounded-2xl border border-white/5 flex items-center space-x-4 hover:border-brand-orange/35 transition-all group"
            >
              <div className="p-3 bg-brand-orange/10 border border-brand-orange/30 rounded-xl">
                <Phone className="text-brand-orange" size={18} />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-mono block">Hotline Frequency</span>
                <span className="text-xs md:text-sm font-semibold text-white group-hover:text-brand-amber transition-colors">
                  +91 8875043720
                </span>
              </div>
            </a>

            {/* Connect & Download */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-center space-y-4">
              <span className="text-xs font-mono text-slate-500 text-center uppercase tracking-widest block">
                Connect Diagnostics
              </span>
              <div className="flex justify-center items-center space-x-4">
                <a
                  href="https://github.com/ajinkyaswami1999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-950 border border-white/5 rounded-xl text-slate-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ajinkya-swami-82751b191/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-950 border border-white/5 rounded-xl text-slate-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={16} />
                </a>
                <a
                  href="/Ajinkya_swami_resume.pdf"
                  download="Ajinkya_Swami_Resume.pdf"
                  className="flex items-center space-x-1.5 px-4 py-2.5 bg-slate-950 border border-brand-amber/30 hover:border-brand-amber text-slate-200 hover:text-white rounded-xl text-xs font-mono font-bold transition-all"
                >
                  <Download size={13} className="text-brand-amber" />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Block - Contact Form */}
          <div className="lg:col-span-7 glass-panel p-8 md:p-10 rounded-3xl border border-white/5 flex flex-col justify-center relative overflow-hidden bg-[#111111]/80">
            {/* Top warning light */}
            <div className="absolute top-2 right-4 flex items-center space-x-1.5 font-mono text-[8px] text-slate-500 select-none">
              <Radio size={10} className="text-brand-amber animate-pulse" />
              <span>FREQ: 144.800 MHz // LINK: SECURE</span>
            </div>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 flex flex-col items-center justify-center space-y-4"
              >
                <div className="p-4 bg-brand-amber/15 rounded-full border border-brand-amber/30 text-brand-amber animate-pulse">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-lg md:text-xl font-bold font-display text-white">
                  TRANSMISSION RECONCILED
                </h3>
                <p className="text-slate-400 text-xs max-w-sm mx-auto leading-relaxed">
                  Your signal has been integrated into the lab queue queue. Expect audit confirmation shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-xs font-mono uppercase tracking-wider font-bold px-5 py-2.5 bg-slate-950 border border-white/5 hover:border-brand-amber text-slate-350 rounded-xl transition-all cursor-pointer"
                >
                  New Transmission
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div>
                  <label htmlFor="name" className="block text-[9px] font-mono text-slate-450 uppercase tracking-widest mb-1.5">
                    Packet Sender Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="E.g. Lead Recruiter"
                    className="w-full px-4 py-3 bg-slate-950 border border-white/5 focus:border-brand-amber rounded-xl text-white outline-none transition-colors text-xs font-mono"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[9px] font-mono text-slate-450 uppercase tracking-widest mb-1.5">
                    Sender Return Route (Email)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 bg-slate-950 border border-white/5 focus:border-brand-amber rounded-xl text-white outline-none transition-colors text-xs font-mono"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[9px] font-mono text-slate-450 uppercase tracking-widest mb-1.5">
                    Payload Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your project, role scope, or pipeline calibrations..."
                    className="w-full px-4 py-3 bg-slate-950 border border-white/5 focus:border-brand-amber rounded-xl text-white outline-none transition-colors text-xs font-mono resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-[10px] text-rose-500 font-mono">
                    [ERROR] Packet drop occurred. Re-check network link and resubmit.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center space-x-2 text-xs font-mono uppercase tracking-wider font-bold py-3.5 bg-gradient-to-r from-brand-amber to-brand-orange text-slate-950 rounded-xl transition-all cursor-pointer shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <span className="flex items-center space-x-2">
                      <span className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Packet...</span>
                    </span>
                  ) : (
                    <>
                      <span>Transmit Packet</span>
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
