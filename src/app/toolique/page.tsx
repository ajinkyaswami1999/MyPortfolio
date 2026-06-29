"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import { motion } from "framer-motion";
import { 
  Calculator, 
  ShieldAlert, 
  Sparkles, 
  Search, 
  Wrench, 
  Briefcase, 
  ArrowUpRight 
} from "lucide-react";

interface ToolModule {
  title: string;
  desc: string;
  icon: React.ReactNode;
  tools: string[];
}

const toolCategories: ToolModule[] = [
  {
    title: "Calculators",
    desc: "Sleek utilities for quick mathematical, pricing, and tax calculation splits.",
    icon: <Calculator className="text-brand-amber" size={20} />,
    tools: ["GST/Tax Slab Auditors", "Compound Margin Splits", "Merchant Commission Charts", "Loan Tenacity Gauges"]
  },
  {
    title: "QA Utilities",
    desc: "Testing helpers built to accelerate manual validation and verification.",
    icon: <ShieldAlert className="text-brand-cyan" size={20} />,
    tools: ["Boundary Value Generator", "JSON Schema Verifier", "Regex Pattern Validator", "ASCII Ledger Audit Tool"]
  },
  {
    title: "Productivity",
    desc: "Everyday snippets and formatters designed to minimize administrative friction.",
    icon: <Sparkles className="text-brand-orange" size={20} />,
    tools: ["Markdown Snippet Maker", "Clipboard JSON Beautifier", "ISO Time Delta Tracker", "Base64 Encoder Node"]
  },
  {
    title: "SEO Utilities",
    desc: "Search engine checks engineered to boost page visibility and metadata ranks.",
    icon: <Search className="text-brand-blue" size={20} />,
    tools: ["Canonical Redirect Checker", "Meta tag Character Counter", "Sitemap Ping Automator", "Keyword Density Analyzer"]
  },
  {
    title: "Engineering Tools",
    desc: "Physical manufacturing calculations for 3D slicing and mechanical tolerances.",
    icon: <Wrench className="text-brand-purple" size={20} />,
    tools: ["Filament Weight Converter", "Slicer Extruder Time Grid", "Dimension Snap Tolerances", "Nozzle Melt Heat Ratio"]
  },
  {
    title: "Business Utilities",
    desc: "Ledger and settlement rules checks built to reconcile dynamic billing balances.",
    icon: <Briefcase className="text-emerald-400" size={20} />,
    tools: ["Settlement Refund Tracker", "Invoice Claim Compliance", "GST Balance Sheet Checker", "Dynamic Commission Auditor"]
  }
];

export default function TooliquePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 85, damping: 15 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-slate-100 selection:bg-brand-amber/20 selection:text-brand-amber overflow-hidden relative">
      <Navbar />

      {/* Background grid representing diagnostic lab bench */}
      <div className="absolute inset-0 bg-[#0A0A0A] overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#151515_1px,transparent_1px),linear-gradient(to_bottom,#151515_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-35" />
        
        {/* Soft background spotlights */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-amber/5 filter blur-[95px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-brand-cyan/5 filter blur-[80px] animate-pulse-slow" style={{ animationDelay: "2.5s" }} />
      </div>

      <PageWrapper>
        <main className="flex-1 container mx-auto px-4 md:px-8 pt-32 pb-24 relative z-10">
          {/* Header Block */}
          <div className="max-w-4xl mb-16 text-left">
            <span className="text-xs font-mono tracking-widest text-brand-amber uppercase mb-2 block">
              Scientific Instruments & Modules
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-display text-white">
              Engineering Toolkit: TOOLIQUE
            </h1>
            <p className="text-slate-400 mt-4 text-xs md:text-sm leading-relaxed">
              Welcome to the Engineering Toolkit. Here, scientific measuring instruments, JSON ledger decoders, automated edge-case generators, and indexing scripts are displayed as interactive modules.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-brand-amber to-brand-cyan mt-6" />
          </div>

          {/* Toolkit Diagnostic Modules Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {toolCategories.map((cat) => (
              <motion.div
                key={cat.title}
                variants={itemVariants}
                className="glass-panel p-6 rounded-2xl border border-white/5 bg-[#111111]/75 hover:border-brand-amber/35 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Top metadata tags */}
                  <div className="flex justify-between items-center mb-5">
                    <div className="p-2.5 bg-slate-950 border border-white/5 rounded-xl group-hover:border-brand-amber/30 transition-colors">
                      {cat.icon}
                    </div>
                    <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">
                      Module // Calibrated
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold font-display text-white mb-2 group-hover:text-brand-amber transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-450 leading-relaxed mb-6">
                    {cat.desc}
                  </p>

                  {/* List of sub-tools inside the module */}
                  <div className="space-y-2 border-t border-white/5 pt-4">
                    <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest block mb-1">
                      Available Utilities
                    </span>
                    {cat.tools.map((tool) => (
                      <div key={tool} className="flex items-center text-[11px] text-slate-400 font-mono">
                        <span className="text-brand-amber mr-2">•</span>
                        <span>{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Web Store / Redirect CTA */}
          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 text-center bg-slate-950/60 relative overflow-hidden">
            {/* Background blur glows */}
            <div className="absolute top-1/2 left-10 w-48 h-48 bg-brand-amber/10 rounded-full filter blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 right-10 w-56 h-56 bg-brand-cyan/5 rounded-full filter blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-xl md:text-3xl font-extrabold font-display text-white">
                Launch the Live Toolique Portal
              </h2>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                Check out the live platform, perform automated boundary value validations, format JSON ledger outputs, and utilize production SEO utilities.
              </p>
              <div className="flex justify-center pt-2">
                <a
                  href="https://www.toolique.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 text-xs font-mono uppercase tracking-wider font-bold px-8 py-4 bg-slate-900 border border-brand-amber/35 hover:border-brand-amber text-slate-200 hover:text-white hover:bg-brand-amber/15 rounded-xl transition-all shadow-xl active:scale-95 group"
                >
                  <span>Visit Toolique Web Platform</span>
                  <ArrowUpRight size={14} className="text-brand-amber group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
