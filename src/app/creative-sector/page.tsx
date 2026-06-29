"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Box, 
  Palette, 
  Star, 
  ShieldCheck, 
  HeartHandshake, 
  Zap, 
  Globe, 
  Layers, 
  Camera, 
  Aperture, 
  ZoomIn,
  Calculator, 
  ShieldAlert, 
  Sparkles, 
  Search, 
  Wrench, 
  Briefcase,
  ArrowUpRight 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";

// --- Voxelique (Fabrication Lab) Types & Mock Data ---
interface VoxeliqueSkill {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const businessSkills: VoxeliqueSkill[] = [
  {
    title: "E-Commerce Web Engineering",
    desc: "Engineered the full digital storefront, optimizing checkout validation, cart sessions, inventory databases, and page rendering speeds.",
    icon: <Globe className="text-brand-cyan" size={20} />,
  },
  {
    title: "CAD & Product Design",
    desc: "Designed custom functional tools and aesthetic products using CAD models, translating shapes into optimized 3D printable meshes.",
    icon: <Palette className="text-brand-blue" size={20} />,
  },
  {
    title: "Brand Building & Copywriting",
    desc: "Crafted the brand identity, product catalogs, marketing materials, and digital advertisements to grow client reach.",
    icon: <Layers className="text-brand-purple" size={20} />,
  },
  {
    title: "D2C Operations & Logistics",
    desc: "Organized inventory logistics, managed suppliers, resolved customer queries, and verified packaging standards to ensure client satisfaction.",
    icon: <HeartHandshake className="text-accent-sky" size={20} />,
  },
];

const qualitySteps: VoxeliqueSkill[] = [
  {
    title: "1. Slicer Tolerance Auditing",
    desc: "Calibrating printing parameters (layer heights, flow rate multipliers, extrusion widths) to ensure physical tolerances remain under 0.1mm deviations.",
    icon: <Zap size={14} className="text-brand-cyan" />,
  },
  {
    title: "2. Thermal & Level Profiling",
    desc: "Calibrating bed leveling heights and nozzle thermal consistency to guarantee bed adhesion and prevent warping failures mid-run.",
    icon: <Box size={14} className="text-brand-blue" />,
  },
  {
    title: "3. Structural Stress Validation",
    desc: "Subjecting printed products to drop tests and stress loads, validating wall shell thickness configurations and infill densities for long-term usage.",
    icon: <ShieldCheck size={14} className="text-brand-purple" />,
  },
];

// --- Toolique (Toolkit) Types & Mock Data ---
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

// --- Photography (Field Logs) Types & Mock Data ---
interface PhotoItem {
  id: number;
  title: string;
  category: string;
  specs: string;
  description: string;
  gradient: string;
}

const mockPhotos: PhotoItem[] = [
  {
    id: 1,
    title: "Jawa Bobber Exhaust Manifold",
    category: "Automotive",
    specs: "90mm • f/2.8 • 1/160s • ISO 100",
    description: "Close-up macro capturing the brushed metal texture and heat discoloration of the Bobber exhaust piping.",
    gradient: "from-amber-600/30 via-slate-900 to-[#0A0A0A]"
  },
  {
    id: 2,
    title: "Slicer Layer Gaps & Geometries",
    category: "Macro / 3D Print Logs",
    specs: "50mm • f/5.6 • 1/80s • ISO 200",
    description: "Extruder tolerance validation close-up, illustrating individual 0.12mm filament layers reflecting neon workshop light.",
    gradient: "from-brand-cyan/20 via-slate-900 to-[#0A0A0A]"
  },
  {
    id: 3,
    title: "Gurugram Highway Light Trails",
    category: "Long Exposure",
    specs: "24mm • f/11 • 8.0s • ISO 50",
    description: "Long shutter sweep mapping traffic speed loops along the central expressway during night peak hours.",
    gradient: "from-brand-orange/20 via-slate-900 to-[#0A0A0A]"
  },
  {
    id: 4,
    title: "Street Shadows & Steel Grids",
    category: "Architecture",
    specs: "35mm • f/1.8 • 1/1000s • ISO 100",
    description: "High-contrast monochrome silhouette tracing vertical grids and sharp shadow boundaries along industrial pillars.",
    gradient: "from-slate-800/30 via-slate-900 to-[#0A0A0A]"
  },
  {
    id: 5,
    title: "Raw Filament Extrusion Node",
    category: "Macro / Tech",
    specs: "90mm • f/4.0 • 1/125s • ISO 400",
    description: "Capturing the nozzle melt zone at 220°C, highlighting raw thermal refractions and print bed reflection.",
    gradient: "from-brand-purple/20 via-slate-900 to-[#0A0A0A]"
  },
  {
    id: 6,
    title: "Jawa Fuel Tank Profile",
    category: "Automotive",
    specs: "50mm • f/2.0 • 1/250s • ISO 100",
    description: "Mirror reflections on metallic charcoal paint, tracing the vintage typography curves of the Jawa brand crest.",
    gradient: "from-[#222]/50 via-slate-900 to-[#0A0A0A]"
  }
];

export default function CreativeSectorPage() {
  const [activeTab, setActiveTab] = useState<"fabrication" | "toolkit" | "documentation">("fabrication");

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

      {/* Dynamic Background Layouts */}
      <div className="absolute inset-0 bg-[#0A0A0A] overflow-hidden pointer-events-none z-0">
        <AnimatePresence mode="wait">
          {activeTab === "fabrication" && (
            <motion.div
              key="fabrication-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#151515_1px,transparent_1px),linear-gradient(to_bottom,#151515_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-35" />
              <div className="absolute top-1/2 left-0 w-full h-px bg-brand-purple/10 shadow-[0_0_10px_rgba(127,0,255,0.2)]" />
              <div className="absolute left-1/2 top-0 h-full w-px bg-brand-purple/10 shadow-[0_0_10px_rgba(127,0,255,0.2)]" />
              <div className="absolute top-28 left-8 font-mono text-[9px] text-slate-650 tracking-widest space-y-1 opacity-70">
                <div>BUILD PLATE: TEI_TEXTURED</div>
                <div>X-AXIS: CALIBRATED (OK)</div>
                <div>TEMP: EXTRUDER 220°C / BED 60°C</div>
              </div>
            </motion.div>
          )}

          {activeTab === "toolkit" && (
            <motion.div
              key="toolkit-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#151515_1px,transparent_1px),linear-gradient(to_bottom,#151515_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30" />
              <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-amber/5 filter blur-[95px]" />
            </motion.div>
          )}

          {activeTab === "documentation" && (
            <motion.div
              key="documentation-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              {/* Camera viewfinder grids */}
              <div className="absolute top-1/3 left-0 w-full h-px bg-white/3 opacity-20" />
              <div className="absolute top-2/3 left-0 w-full h-px bg-white/3 opacity-20" />
              <div className="absolute left-1/3 top-0 h-full w-px bg-white/3 opacity-20" />
              <div className="absolute left-2/3 top-0 h-full w-px bg-white/3 opacity-20" />
              
              {/* AF bracket box */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 opacity-30 rounded flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-cyan/40" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-cyan/40" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-cyan/40" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-cyan/40" />
              </div>
              <div className="absolute bottom-12 left-8 font-mono text-[9px] text-slate-650 tracking-widest">
                <div>f/2.8 • ISO 100 • 50mm</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <PageWrapper>
        <main className="flex-1 container mx-auto px-4 md:px-8 pt-32 pb-24 relative z-10">
          
          {/* Section Header */}
          <div className="max-w-4xl mb-12 text-left">
            <span className="text-xs font-mono tracking-widest text-brand-amber uppercase mb-2 block">
              Facility Sector 04
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold font-display text-white">
              Creative Sector
            </h1>
            <p className="text-slate-400 mt-4 text-xs md:text-sm leading-relaxed max-w-2xl font-sans">
              Central data node hosting additive print calibrators, scientific engineering tools, and raw photography shutter logs. Toggle between lab departments below.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-brand-amber via-brand-orange to-jungle-green mt-5" />
          </div>

          {/* Selector Switch Console */}
          <div className="flex flex-wrap gap-2.5 mb-16 pb-3 border-b border-white/5 justify-start">
            <button
              onClick={() => setActiveTab("fabrication")}
              className={`text-[9.5px] font-mono tracking-widest uppercase font-bold px-4 py-2.5 border rounded-lg transition-all flex items-center space-x-2 cursor-pointer ${
                activeTab === "fabrication"
                  ? "border-brand-purple/40 text-brand-purple bg-brand-purple/5 shadow-[0_0_10px_rgba(139,92,246,0.1)]"
                  : "border-white/5 text-slate-400 hover:text-white hover:border-slate-800"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${activeTab === "fabrication" ? "bg-brand-purple animate-pulse" : "bg-slate-800"}`} />
              <span>01 // Fabrication Lab</span>
            </button>

            <button
              onClick={() => setActiveTab("toolkit")}
              className={`text-[9.5px] font-mono tracking-widest uppercase font-bold px-4 py-2.5 border rounded-lg transition-all flex items-center space-x-2 cursor-pointer ${
                activeTab === "toolkit"
                  ? "border-brand-amber/40 text-brand-amber bg-brand-amber/5 shadow-[0_0_10px_rgba(197,143,44,0.1)]"
                  : "border-white/5 text-slate-400 hover:text-white hover:border-slate-800"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${activeTab === "toolkit" ? "bg-brand-amber animate-pulse" : "bg-slate-800"}`} />
              <span>02 // Toolkit Modules</span>
            </button>

            <button
              onClick={() => setActiveTab("documentation")}
              className={`text-[9.5px] font-mono tracking-widest uppercase font-bold px-4 py-2.5 border rounded-lg transition-all flex items-center space-x-2 cursor-pointer ${
                activeTab === "documentation"
                  ? "border-brand-cyan/40 text-brand-cyan bg-brand-cyan/5 shadow-[0_0_10px_rgba(56,189,248,0.1)]"
                  : "border-white/5 text-slate-400 hover:text-white hover:border-slate-800"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${activeTab === "documentation" ? "bg-brand-cyan animate-pulse" : "bg-slate-800"}`} />
              <span>03 // Field Documentation</span>
            </button>
          </div>

          {/* Active Tab Panel Rendering */}
          <div className="text-left font-sans">
            <AnimatePresence mode="wait">
              {activeTab === "fabrication" && (
                <motion.div
                  key="fabrication-panel"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="space-y-12"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Brand story */}
                    <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
                      <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/5 bg-[#111111]/75">
                        <h2 className="text-lg md:text-xl font-bold font-display text-white mb-4 flex items-center gap-3">
                          <Star className="text-brand-purple" size={20} />
                          The Brand Story
                        </h2>
                        <div className="space-y-4 text-slate-400 text-xs md:text-sm leading-relaxed">
                          <p>
                            Voxelique emerged from a passion for additive manufacturing and industrial design. The core thesis was simple: transition 3D printing from a hobbyist prototyping tool into a high-quality manufacturing method for premium functional and decorative products.
                          </p>
                          <p>
                            As the sole founder, I took on all responsibilities. I built the e-commerce storefront, calibrated multiple FDM/SLA 3D printers, set up merchant pipelines, managed social media advertising campaigns, and coordinated D2C logistics. This entrepreneurial journey gave me deep, cross-functional understanding of how tech platforms support business outcomes.
                          </p>
                        </div>
                      </div>

                      {/* Capabilities */}
                      <div>
                        <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4 pl-1">
                          Core Business & Tech Capabilities
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {businessSkills.map((skill) => (
                            <div
                              key={skill.title}
                              className="glass-panel p-5 rounded-2xl border border-white/5 bg-[#111111]/60 hover:border-brand-purple/30 transition-all flex flex-col items-start"
                            >
                              <div className="p-2 bg-slate-950 border border-slate-900 rounded-xl mb-3">
                                {skill.icon}
                              </div>
                              <h3 className="text-xs font-bold font-display text-white mb-1.5">{skill.title}</h3>
                              <p className="text-slate-500 text-[10.5px] leading-relaxed font-sans">{skill.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Quality steps */}
                    <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
                      <div className="glass-panel p-6 md:p-8 rounded-3xl border border-brand-purple/20 bg-brand-purple/5 relative overflow-hidden">
                        <h2 className="text-lg md:text-xl font-bold font-display text-white mb-4 flex items-center gap-3">
                          <ShieldCheck className="text-brand-purple" size={20} />
                          Product Quality Process
                        </h2>
                        <p className="text-slate-400 text-xs leading-relaxed mb-6">
                          QA principles (boundary limits, input validation) applied directly to additive manufacturing clearances and dimensional accuracy.
                        </p>
                        <div className="space-y-3.5">
                          {qualitySteps.map((step) => (
                            <div
                              key={step.title}
                              className="flex items-start gap-3 bg-slate-950/60 p-3.5 border border-white/5 rounded-xl text-left"
                            >
                              <div className="p-1 bg-slate-900 rounded-md border border-slate-800 shrink-0 mt-0.5">
                                {step.icon}
                              </div>
                              <div>
                                <h3 className="text-xs font-bold text-white mb-0.5">{step.title}</h3>
                                <p className="text-[10px] text-slate-500 leading-normal">{step.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Materials */}
                      <div className="glass-panel p-6 border border-brand-purple/20 bg-slate-950/40 rounded-3xl">
                        <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">
                          Lab Material Spec Sheet
                        </h2>
                        <div className="space-y-3 font-mono text-[9px] text-slate-400">
                          <div className="flex justify-between border-b border-white/5 pb-2">
                            <span>PLA (Decorative / Low-Warp):</span>
                            <span className="text-[#F3F0E8] font-bold">205°C Extrusion / 60°C Bed</span>
                          </div>
                          <div className="flex justify-between border-b border-white/5 pb-2">
                            <span>PETG (Mechanical / Chemical):</span>
                            <span className="text-[#F3F0E8] font-bold">240°C Extrusion / 80°C Bed</span>
                          </div>
                          <div className="flex justify-between border-b border-white/5 pb-2">
                            <span>TPU (Flexible / Vibration):</span>
                            <span className="text-[#F3F0E8] font-bold">220°C Extrusion / 50°C Bed</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Carbon Fiber Nylon (Functional):</span>
                            <span className="text-[#F3F0E8] font-bold">270°C Extrusion / 95°C Bed</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {activeTab === "toolkit" && (
                <motion.div
                  key="toolkit-panel"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {toolCategories.map((cat) => (
                    <motion.div
                      key={cat.title}
                      variants={itemVariants}
                      className="glass-panel p-6 rounded-2xl border border-white/5 bg-[#111111]/75 hover:border-brand-amber/35 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-base font-extrabold font-display text-white">
                            {cat.title}
                          </h3>
                          <div className="p-2.5 bg-slate-950 border border-white/5 rounded-xl group-hover:border-brand-amber/30 transition-colors">
                            {cat.icon}
                          </div>
                        </div>

                        <p className="text-xs text-slate-400 leading-relaxed mb-6">
                          {cat.desc}
                        </p>

                        <div className="space-y-2 border-t border-white/5 pt-4">
                          {cat.tools.map((tool) => (
                            <div key={tool} className="flex items-center justify-between group/item cursor-pointer">
                              <span className="text-xs text-slate-500 group-hover/item:text-slate-350 transition-colors font-mono">
                                • {tool}
                              </span>
                              <ArrowUpRight size={10} className="text-slate-750 group-hover/item:text-brand-amber transition-colors" />
                            </div>
                          ))}
                        </div>
                      </div>

                      <a
                        href="https://www.toolique.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 w-full flex items-center justify-center space-x-1.5 py-2.5 bg-slate-950 hover:bg-slate-900 border border-white/5 hover:border-brand-amber/40 text-[10px] font-mono uppercase tracking-wider font-bold text-slate-200 hover:text-white rounded-xl transition-all"
                      >
                        <span>Launch Toolset</span>
                        <ArrowUpRight size={11} className="text-brand-amber" />
                      </a>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === "documentation" && (
                <motion.div
                  key="documentation-panel"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="space-y-12"
                >
                  {/* Camera Spec Board */}
                  <motion.div
                    variants={itemVariants}
                    className="glass-panel p-6 rounded-2xl border border-white/5 max-w-4xl bg-[#111111]/70"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <Camera size={18} className="text-brand-orange" />
                      <h3 className="text-xs font-bold font-display text-slate-200 font-sans">WORKSHOP EXIF / CAMERA SPEC SHEET</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs text-slate-400">
                      <div className="p-3 bg-slate-950 border border-white/5 rounded-lg">
                        <span className="text-brand-cyan block text-[9px] uppercase tracking-wider mb-1 font-bold">Primary Body</span>
                        <span className="text-slate-200 font-semibold">Nikon Z 30</span>
                        <span className="text-slate-500 block mt-0.5 text-[9px]">APS-C DX-format mirrorless sensor</span>
                      </div>
                      <div className="p-3 bg-slate-950 border border-white/5 rounded-lg">
                        <span className="text-brand-cyan block text-[9px] uppercase tracking-wider mb-1 font-bold">Lenses</span>
                        <span className="text-slate-200 font-semibold">90mm Macro f/2.8 G</span>
                        <span className="text-slate-500 block mt-0.5 text-[9px]">35mm Prime f/1.4 | 24-70mm f/2.8</span>
                      </div>
                      <div className="p-3 bg-slate-950 border border-white/5 rounded-lg">
                        <span className="text-brand-cyan block text-[9px] uppercase tracking-wider mb-1 font-bold">Aesthetics Focus</span>
                        <span className="text-slate-200 font-semibold">Mechanical Macro & Contrast</span>
                        <span className="text-slate-500 block mt-0.5 text-[9px]">Industrial, high-contrast silhouette</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Photo Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockPhotos.map((photo) => (
                      <motion.div
                        key={photo.id}
                        variants={itemVariants}
                        className="glass-panel rounded-2xl border border-white/5 overflow-hidden flex flex-col justify-between group shadow-xl hover:border-brand-orange/30 transition-all duration-300 bg-[#0F0F0F]/60"
                      >
                        <div className={`aspect-[4/3] w-full bg-gradient-to-br ${photo.gradient} relative overflow-hidden flex items-center justify-center`}>
                          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-20" />
                          <div className="absolute w-6 h-6 border border-white/10 rounded-full flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-brand-orange/40 rounded-full" />
                          </div>
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                            <div className="p-2.5 bg-slate-950 border border-white/10 rounded-full text-brand-orange">
                              <Aperture size={18} className="animate-spin-slow" />
                            </div>
                            <div className="p-2.5 bg-slate-950 border border-white/10 rounded-full text-brand-cyan">
                              <ZoomIn size={18} />
                            </div>
                          </div>
                          <span className="absolute top-3 left-3 text-[9px] font-mono text-slate-500 uppercase tracking-widest bg-slate-950/80 px-2 py-0.5 rounded border border-white/5">
                            {photo.category}
                          </span>
                        </div>

                        <div className="p-6 text-left flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="text-base font-extrabold font-display text-white mb-2 group-hover:text-brand-orange transition-colors">
                              {photo.title}
                            </h3>
                            <p className="text-xs text-slate-405 leading-relaxed mb-4 font-sans">
                              {photo.description}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2 pt-4 border-t border-white/5 font-mono text-[9px] text-brand-cyan">
                            <Aperture size={10} />
                            <span>{photo.specs}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </PageWrapper>

      <Footer />
    </div>
  );
}
