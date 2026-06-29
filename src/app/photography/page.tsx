"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import { motion } from "framer-motion";
import { Camera, Aperture, ZoomIn, Eye, Sparkles } from "lucide-react";

interface PhotoItem {
  id: number;
  title: string;
  category: string;
  specs: string; // Shutter / ISO / Lens
  description: string;
  gradient: string; // CSS gradient class representing color aesthetic
}

const mockPhotos: PhotoItem[] = [
  {
    id: 1,
    title: "Jawa Bobber Exhaust Manifold",
    category: "Automotive",
    specs: "90mm • f/2.8 • 1/160s • ISO 100",
    description: "Close-up macro capturing the brushed metal texture and heat discoloration of the Bobber exhaust exhaust piping.",
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
    description: "Long shutter sweep mapping dynamic traffic speed loops along the central expressway during night peak hours.",
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

export default function PhotographyPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 80, damping: 15 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-slate-100 selection:bg-brand-orange/20 selection:text-brand-orange overflow-hidden">
      <Navbar />

      <PageWrapper>
        <main className="flex-1 pt-32 pb-24">
          <div className="container mx-auto px-4 md:px-8">
            {/* Header Block */}
            <div className="flex flex-col mb-16 text-left max-w-3xl">
              <span className="text-xs font-mono tracking-widest text-brand-orange uppercase mb-2 block">
                Visual Journal
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold font-display text-white">
                Photography & Shutter Logs
              </h1>
              <p className="text-slate-400 mt-4 text-sm md:text-base leading-relaxed">
                Framing raw mechanical details, highway light loops, and close-up macro geometries. I view photography as the validation of light, capturing precision details in the physical world.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-brand-orange via-brand-cyan to-brand-blue mt-4" />
            </div>

            {/* Tech Gear Spec Board */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-panel p-6 rounded-2xl border border-white/5 mb-16 max-w-4xl"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Camera size={18} className="text-brand-orange" />
                <h3 className="text-sm font-bold font-display text-slate-200">WORKSHOP EXIF / CAMERA SPEC SHEET</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs text-slate-400">
                <div className="p-3 bg-slate-950 border border-slate-900 rounded-lg">
                  <span className="text-brand-cyan block text-[9px] uppercase tracking-wider mb-1 font-bold">Primary Body</span>
                  <span className="text-slate-200 font-semibold">Sony Alpha 7 IV</span>
                  <span className="text-slate-500 block mt-0.5 text-[10px]">Full-Frame mirrorless sensor</span>
                </div>
                <div className="p-3 bg-slate-950 border border-slate-900 rounded-lg">
                  <span className="text-brand-cyan block text-[9px] uppercase tracking-wider mb-1 font-bold">Lenses</span>
                  <span className="text-slate-200 font-semibold">90mm Macro f/2.8 G</span>
                  <span className="text-slate-500 block mt-0.5 text-[10px]">35mm Prime f/1.4 | 24-70mm f/2.8</span>
                </div>
                <div className="p-3 bg-slate-950 border border-slate-900 rounded-lg">
                  <span className="text-brand-cyan block text-[9px] uppercase tracking-wider mb-1 font-bold">Aesthetics Focus</span>
                  <span className="text-slate-200 font-semibold">Mechanical Macro & Contrast</span>
                  <span className="text-slate-500 block mt-0.5 text-[10px]">Industrial, high-contrast silhouette</span>
                </div>
              </div>
            </motion.div>

            {/* Grid Gallery */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {mockPhotos.map((photo) => (
                <motion.div
                  key={photo.id}
                  variants={itemVariants}
                  className="glass-panel rounded-2xl border border-white/5 overflow-hidden flex flex-col justify-between group shadow-xl hover:border-brand-orange/30 transition-all duration-300 bg-[#0F0F0F]/60"
                >
                  {/* Photo Visual Frame Mockup */}
                  <div className={`aspect-[4/3] w-full bg-gradient-to-br ${photo.gradient} relative overflow-hidden flex items-center justify-center`}>
                    {/* Metal sheen overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-20" />
                    
                    {/* HUD crosshair */}
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

                  {/* Photo Info */}
                  <div className="p-6 text-left flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-extrabold font-display text-white mb-2 group-hover:text-brand-orange transition-colors">
                        {photo.title}
                      </h3>
                      <p className="text-xs text-slate-450 leading-relaxed mb-4">
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
            </motion.div>
          </div>
        </main>
      </PageWrapper>

      <Footer />
    </div>
  );
}
