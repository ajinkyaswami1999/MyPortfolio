"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cpu, Layers, CreditCard, ArrowRight, ExternalLink } from "lucide-react";
import { projectsData } from "@/data/projects";
import CornerCrosshairs from "./CornerCrosshairs";

// Mapping project category icons
const getIcon = (id: string) => {
  switch (id) {
    case "upi-app-testing":
      return <Cpu className="text-brand-cyan" size={24} />;
    case "ekyc-process-testing":
      return <Layers className="text-brand-blue" size={24} />;
    case "dynamic-rate-plan":
    case "payment-gateway":
    default:
      return <CreditCard className="text-brand-orange" size={24} />;
  }
};

export default function Projects() {
  // Take first 3 projects for the home page preview
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section id="projects" className="py-24 relative bg-[#07090D] overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 text-left">
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-widest text-brand-orange uppercase mb-2 block">
              SYSTEM MANIFEST
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
              RESEARCH PROJECTS
            </h2>
            <p className="text-slate-400 mt-4 text-xs md:text-sm leading-relaxed max-w-xl">
              Classified experiments detailing automated test validations, structural integrity checks, and dynamic ledger calculations.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-brand-orange via-brand-cyan to-jungle-green mt-4" />
          </div>

          <Link
            href="/asset-manifest"
            className="flex items-center space-x-2 text-xs font-mono font-bold text-brand-cyan hover:text-brand-cyan/80 mt-6 md:mt-0 transition-colors group cursor-pointer"
          >
            <span>INSPECT ALL SPECIMEN RECORDS</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-white/5 bg-[#0b0e14]/75 p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between h-full group shadow-lg shadow-black/40"
            >
              <CornerCrosshairs />
              
              <div className="text-left">
                {/* Experiment Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-slate-500 block mb-1">
                      EXP_REF_0{index + 1}
                    </span>
                    <span className="text-[9px] px-2 py-0.5 bg-brand-cyan/10 border border-brand-cyan/20 rounded text-brand-cyan font-bold">
                      VERIFIED [OK]
                    </span>
                  </div>
                  <div className="p-2.5 bg-slate-950 border border-white/5 rounded-xl group-hover:border-brand-orange/20 transition-colors">
                    {getIcon(project.id)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors leading-tight">
                  {project.title}
                </h3>

                {/* Objective */}
                <div className="space-y-1 mb-6">
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Experiment Objective</span>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Technology parameters */}
                <div className="space-y-2 mb-6">
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Core Mutation Suite</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] px-2 py-0.5 bg-slate-950 border border-white/5 text-slate-350 rounded font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Result metrics */}
                <div className="space-y-1 mb-6 border-t border-white/5 pt-4">
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Telemetric Output</span>
                  <div className="flex flex-col gap-1 mt-1.5 font-mono text-[9px] text-slate-350">
                    {project.metrics.slice(0, 2).map((metric, mIdx) => (
                      <div key={mIdx} className="flex justify-between">
                        <span>METRIC_[0{mIdx + 1}]:</span>
                        <span className="text-slate-200 font-bold">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Study CTA Beveled Button */}
              <Link
                href={`/projects/${project.id}`}
                className="bevel-clip border border-brand-cyan hover:bg-brand-cyan text-brand-cyan hover:text-slate-950 font-bold py-2.5 px-4 text-[10px] tracking-wider uppercase text-center transition-colors duration-300 block select-none cursor-pointer mt-4"
              >
                <span className="flex items-center justify-center gap-1">
                  INSPECT EXPERIMENT <ExternalLink size={10} />
                </span>
              </Link>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
