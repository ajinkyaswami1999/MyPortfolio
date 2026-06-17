"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Download, CheckCircle2 } from "lucide-react";
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

    try {
      const response = await fetch("https://formspree.io/f/mwkgygjo", {
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
    <section id="contact" className="py-24 relative bg-[#03030d] overflow-hidden">
      {/* Background aurora */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full aurora-circle-3 filter blur-[100px] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left max-w-3xl">
          <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase mb-2">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
            Contact Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-cyan to-brand-blue mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Block - Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Location card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-900 flex items-center space-x-4">
              <div className="p-3 bg-brand-cyan/10 border border-brand-cyan/30 rounded-xl">
                <MapPin className="text-brand-cyan" size={20} />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-mono block">Location</span>
                <span className="text-sm md:text-base font-semibold text-white">Gurugram, Haryana, India</span>
              </div>
            </div>

            {/* Email card */}
            <a
              href="mailto:ajinkyaswami1999@gmail.com"
              className="glass-panel p-6 rounded-2xl border border-slate-900 flex items-center space-x-4 hover:border-brand-blue/30 transition-all group"
            >
              <div className="p-3 bg-brand-blue/10 border border-brand-blue/30 rounded-xl">
                <Mail className="text-brand-blue" size={20} />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-mono block">Email Me</span>
                <span className="text-sm md:text-base font-semibold text-white group-hover:text-brand-cyan transition-colors">
                  ajinkyaswami1999@gmail.com
                </span>
              </div>
            </a>

            {/* Phone card */}
            <a
              href="tel:+918875043720"
              className="glass-panel p-6 rounded-2xl border border-slate-900 flex items-center space-x-4 hover:border-brand-purple/30 transition-all group"
            >
              <div className="p-3 bg-brand-purple/10 border border-brand-purple/30 rounded-xl">
                <Phone className="text-brand-purple" size={20} />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-mono block">Call Me</span>
                <span className="text-sm md:text-base font-semibold text-white group-hover:text-brand-cyan transition-colors">
                  +91 8875043720
                </span>
              </div>
            </a>

            {/* Socials Box */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-900 flex flex-col justify-center space-y-4">
              <span className="text-xs font-mono text-slate-500 text-center uppercase tracking-widest block">
                Download & Connect
              </span>
              <div className="flex justify-center items-center space-x-4">
                <a
                  href="https://github.com/ajinkyaswami1999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ajinkya-swami-82751b191/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={20} />
                </a>
                <a
                  href="/Ajinkya_swami_resume.pdf"
                  download="Ajinkya_Swami_Resume.pdf"
                  className="flex items-center space-x-2 px-4 py-3 bg-slate-900 border border-slate-800 hover:border-brand-purple/40 text-slate-200 rounded-xl text-sm font-semibold transition-all"
                >
                  <Download size={16} />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Block - Contact Form */}
          <div className="lg:col-span-7 glass-panel p-8 md:p-10 rounded-3xl border border-slate-900 flex flex-col justify-center">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 flex flex-col items-center justify-center space-y-4"
              >
                <div className="p-4 bg-brand-cyan/15 rounded-full border border-brand-cyan/30 text-brand-cyan animate-pulse">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-display text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. I have received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-xs font-semibold px-5 py-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 rounded-lg transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3.5 bg-slate-950 border border-slate-900 hover:border-slate-800 focus:border-brand-cyan rounded-xl text-white outline-none transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="name@company.com"
                    className="w-full px-4 py-3.5 bg-slate-950 border border-slate-900 hover:border-slate-800 focus:border-brand-cyan rounded-xl text-white outline-none transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your project, role, or proposal..."
                    className="w-full px-4 py-3.5 bg-slate-950 border border-slate-900 hover:border-slate-800 focus:border-brand-cyan rounded-xl text-white outline-none transition-colors text-sm resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-rose-500 font-medium">
                    Oops! There was a problem sending your message. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center space-x-2 text-sm font-semibold py-3.5 bg-gradient-to-r from-brand-cyan to-brand-blue text-slate-950 rounded-xl transition-all cursor-pointer shadow-lg shadow-brand-cyan/10 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <span className="flex items-center space-x-2">
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
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
