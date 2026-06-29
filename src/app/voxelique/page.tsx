"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Box, Palette, Star, ArrowUpRight, ShieldCheck, HeartHandshake, Zap, Landmark, Globe, Layers, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";

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

export default function VoxeliquePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-slate-100 selection:bg-brand-purple/20 selection:text-brand-purple overflow-hidden relative">
      <Navbar />

      {/* 3D Printing Bed Background Grid */}
      <div className="absolute inset-0 bg-[#0A0A0A] overflow-hidden pointer-events-none z-0">
        {/* Subtle grid mimicking a build plate grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#151515_1px,transparent_1px),linear-gradient(to_bottom,#151515_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-35" />
        
        {/* Build Plate Major Coordinate Axis Lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-brand-purple/15 shadow-[0_0_10px_rgba(127,0,255,0.3)]" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-brand-purple/15 shadow-[0_0_10px_rgba(127,0,255,0.3)]" />
        
        {/* Build Plate HUD info overlay */}
        <div className="absolute top-28 left-8 font-mono text-[9px] text-slate-600 uppercase tracking-widest space-y-1 opacity-70">
          <div>BUILD PLATE: TEI_TEXTURED</div>
          <div>VOLUME: 220 x 220 x 250 mm</div>
          <div>X-AXIS: CALIBRATED (OK)</div>
          <div>Y-AXIS: CALIBRATED (OK)</div>
        </div>
        
        <div className="absolute bottom-12 right-8 font-mono text-[9px] text-slate-600 uppercase tracking-widest space-y-1 opacity-70 text-right">
          <div>EXTRUDER: 0.4mm HARDENED_STEEL</div>
          <div>TEMP: 220°C / BED: 60°C</div>
          <div>SLICER PROFILE: 0.12mm_FINE</div>
          <div>INFILL: 20% GYROID</div>
        </div>

        {/* Moving background glow spots */}
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-brand-purple/5 filter blur-[90px] animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] rounded-full bg-brand-cyan/5 filter blur-[80px] animate-pulse-slow" style={{ animationDelay: "3s" }} />
      </div>

      <PageWrapper>
        <main className="flex-1 container mx-auto px-4 md:px-8 pt-32 pb-24 relative z-10">
          {/* Header */}
          <div className="max-w-4xl mb-16 text-left">
            <span className="text-xs font-mono tracking-widest text-brand-purple uppercase mb-2 block">
              Founder Profile & Operations
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-display text-white">
              Beyond QA: Building VOXELIQUE
            </h1>
            <p className="text-slate-400 mt-4 text-sm md:text-base leading-relaxed">
              VOXELIQUE is a modern 3D printing brand where I work on product design, 3D printing, customer experience, pricing, branding, content creation, website development, and digital marketing. Here is how I apply engineering and quality frameworks to run a business.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-brand-purple to-brand-cyan mt-6" />
          </div>

          {/* Grid Layout - Brand Story & Quality Process */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            {/* Left Block - Brand Story */}
            <div className="lg:col-span-7 space-y-6">
              <div className="glass-panel p-6 md:p-8 rounded-3xl border border-slate-900 bg-gradient-to-br from-slate-950 via-slate-900/60 to-brand-purple/5">
                <h2 className="text-xl md:text-2xl font-bold font-display text-white mb-4 flex items-center gap-3">
                  <Star className="text-brand-purple" size={24} />
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

              {/* Business Skills Grid */}
              <div>
                <h2 className="text-lg md:text-xl font-bold font-display text-white mb-6">
                  Core Business & Tech Capabilities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {businessSkills.map((skill) => (
                    <div
                      key={skill.title}
                      className="glass-panel p-5 rounded-2xl border border-slate-900 hover:border-slate-800 transition-all flex flex-col items-start"
                    >
                      <div className="p-2 bg-slate-900/80 border border-slate-800 rounded-xl mb-3">
                        {skill.icon}
                      </div>
                      <h3 className="text-sm font-bold font-display text-white mb-1.5">{skill.title}</h3>
                      <p className="text-slate-450 text-[11px] md:text-xs leading-relaxed">{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Block - Product Quality Process */}
            <div className="lg:col-span-5 space-y-6">
              {/* Quality assurance process card */}
              <div className="glass-panel p-6 md:p-8 rounded-3xl border border-brand-purple/20 bg-brand-purple/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-purple/5 rounded-full filter blur-xl" />
                <h2 className="text-xl md:text-2xl font-bold font-display text-white mb-4 flex items-center gap-3">
                  <ShieldCheck className="text-brand-purple" size={24} />
                  Product Quality Process
                </h2>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
                  QA isn't just for software codes. In 3D manufacturing, I apply identical Quality Assurance principles (boundary limits testing, regression diagnostics, input validations) to physical print runs.
                </p>
                <div className="space-y-4">
                  {qualitySteps.map((step) => (
                    <div
                      key={step.title}
                      className="flex items-start gap-3 bg-slate-950/60 p-3.5 border border-slate-900 rounded-xl"
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

              {/* What I Learned Highlights */}
              <div className="glass-panel p-6 border border-slate-900 rounded-3xl">
                <h2 className="text-sm font-mono uppercase tracking-widest text-slate-500 mb-4">
                  What I Learned
                </h2>
                <ul className="space-y-2.5 text-xs text-slate-400">
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2 font-bold">•</span>
                    <span><strong>Customer-centric QA:</strong> Test flows are only as good as the customer experience they support.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2 font-bold">•</span>
                    <span><strong>Data-driven optimization:</strong> Analyzing advertising conversion rates, cart drop-offs, and shipping logs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2 font-bold">•</span>
                    <span><strong>System scalability:</strong> Ensuring e-commerce databases scale smoothly during discount runs.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Product Gallery Section */}
          <div className="mb-16">
            <div className="flex flex-col mb-10 text-left">
              <span className="text-xs font-mono tracking-widest text-brand-purple uppercase mb-1">Portfolio Gallery</span>
              <h2 className="text-2xl md:text-3xl font-extrabold font-display text-white">
                Product Gallery Showcase
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Geometric Desktop Organizer", desc: "Hexagonal modular design with exact tolerance snap-fits." },
                { title: "Parametric Acoustic Phone Stand", desc: "Acoustic amplification channel design printed in premium PLA." },
                { title: "Artistic Low-Poly Vase Mesh", desc: "Matte dual-color filament printed in vase mode at 0.2mm layers." },
                { title: "Functional Helical Gear Assembly", desc: "Rotational mechanical gears with strict dimensional checks." }
              ].map((prod, index) => (
                <div
                  key={index}
                  className="glass-panel p-5 rounded-2xl border border-slate-900 flex flex-col justify-between h-56 relative overflow-hidden group cursor-pointer hover:border-brand-purple/30 transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-slate-900/10 z-0 opacity-80" />
                  
                  {/* Decorative mesh outline to simulate 3D prints */}
                  <div className="absolute inset-2 border border-dashed border-slate-900/60 rounded-xl z-0 flex items-center justify-center">
                    <Box size={48} className="text-slate-900 group-hover:text-brand-purple/10 transition-colors" />
                  </div>

                  <span className="text-[10px] font-mono text-brand-purple tracking-widest uppercase z-10">
                    3D Model Preview
                  </span>

                  <div className="z-10 mt-auto">
                    <h3 className="text-sm font-bold text-white mb-1 group-hover:text-brand-cyan transition-colors">
                      {prod.title}
                    </h3>
                    <p className="text-[10px] text-slate-500 leading-normal">{prod.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Web Store / Instagram Call to Actions */}
          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-slate-900 text-center bg-slate-950/60 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-10 w-48 h-48 bg-brand-purple/10 rounded-full filter blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 right-10 w-56 h-56 bg-brand-cyan/5 rounded-full filter blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-xl md:text-3xl font-extrabold font-display text-white">
                Experience VOXELIQUE Storefront
              </h2>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                Check out the active storefront web app, browse custom functional products, and follow our print logs and design campaigns on Instagram.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://voxelique.com" // Placeholder/Voxelique url
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 text-xs font-semibold px-6 py-3 bg-gradient-to-r from-brand-purple to-brand-cyan text-white rounded-xl transition-all shadow-lg active:scale-95 group"
                >
                  <span>Visit Storefront Website</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="https://instagram.com/voxelique" // Instagram channel
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 text-xs font-semibold px-6 py-3 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 rounded-xl transition-all active:scale-95"
                >
                  <span>Instagram Profile Feed</span>
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
