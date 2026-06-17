"use client";

import React from "react";
import { motion } from "framer-motion";
import { Package, Globe, Palette, Box, Activity, Megaphone, HeartHandshake } from "lucide-react";

interface CapabilityItem {
  label: string;
  icon: React.ReactNode;
  desc: string;
}

const voxeliqueCapabilities: CapabilityItem[] = [
  {
    label: "Website Development",
    icon: <Globe className="text-brand-cyan" size={18} />,
    desc: "Designed and engineered the full e-commerce interface, enabling seamless product catalog navigation and checkout flows.",
  },
  {
    label: "Product Design & 3D Printing",
    icon: <Palette className="text-brand-blue" size={18} />,
    desc: "Crafted aesthetic functional products using CAD, optimizing slicer profiles for FDM/SLA 3D printing accuracy.",
  },
  {
    label: "Brand Building & Digital Marketing",
    icon: <Megaphone className="text-brand-purple" size={18} />,
    desc: "Orchestrated the brand identity, product photography, social media campaigns, and search engine optimization (SEO).",
  },
  {
    label: "Customer Experience",
    icon: <HeartHandshake className="text-accent-sky" size={18} />,
    desc: "Managed direct-to-consumer operations, resolving feedback loops, logistics, packaging, and custom order requests.",
  },
];

export default function Entrepreneurship() {
  return (
    <section id="voxelique" className="py-24 relative bg-[#03030d] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full radial-gradient bg-gradient-to-r from-brand-purple/5 to-transparent filter blur-[120px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left max-w-3xl">
          <span className="text-xs font-mono tracking-widest text-brand-purple uppercase mb-2">Beyond My Career</span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
            Entrepreneurship & Creation
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-purple to-brand-cyan mt-4" />
        </div>

        {/* Brand Card & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Block - Brand Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-panel glow-card p-8 md:p-10 rounded-3xl border border-brand-purple/20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900/60 to-brand-purple/5"
          >
            {/* Geometric 3D Box decoration */}
            <div className="absolute -right-8 -top-8 text-brand-purple/10 opacity-30 pointer-events-none">
              <Box size={220} />
            </div>

            <div className="flex items-center space-x-4 mb-6 relative z-10">
              <div className="p-3 bg-brand-purple/10 border border-brand-purple/30 rounded-2xl">
                <Package className="text-brand-purple" size={32} />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-wide font-display text-white">
                  VOXELIQUE
                </h3>
                <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest">
                  Founder & Designer
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 relative z-10">
              VOXELIQUE is a modern 3D printing brand specializing in premium functional and decorative products. As the founder, I direct the complete product cycle from physical CAD sketching to manufacturing and digital storefront operations.
            </p>

            <div className="flex flex-wrap gap-2 relative z-10">
              {["3D Manufacturing", "E-Commerce", "Product CAD Design", "Operations"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] md:text-xs px-3 py-1 bg-brand-purple/10 border border-brand-purple/30 text-brand-cyan rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Block - Capabilities Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {voxeliqueCapabilities.map((cap, index) => (
              <motion.div
                key={cap.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-panel p-6 rounded-2xl border border-slate-900 flex flex-col items-start hover:border-slate-800 transition-all"
              >
                <div className="p-2.5 bg-slate-900/80 border border-slate-800 rounded-xl mb-4">
                  {cap.icon}
                </div>
                <h4 className="text-sm md:text-base font-bold font-display text-white mb-2">
                  {cap.label}
                </h4>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  {cap.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
