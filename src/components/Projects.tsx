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
    <section id="projects" className="py-24 relative bg-[#FAF9F6] overflow-hidden border-t border-amber-200/60">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-amber-800 uppercase mb-2 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span>作戦任務 // S-CLASS MISSIONS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
              S-CLASS PRODUCTION MISSIONS
            </h2>
            <p className="text-slate-600 mt-4 text-xs md:text-sm leading-relaxed max-w-xl font-sans font-medium">
              Key engineering missions showcasing high-concurrency fintech QA validations, automated biometric identity pipelines, and dynamic settlement engines.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-amber-400 via-rose-400 to-sky-400 mt-4" />
          </div>

          <Link
            href="/asset-manifest"
            className="flex items-center space-x-2 text-xs font-mono font-bold text-amber-800 hover:text-slate-950 mt-6 md:mt-0 transition-colors group cursor-pointer"
          >
            <span>VIEW COMPLETE MISSION ARCHIVE // 全記録</span>
            <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform text-amber-600" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => {
            const projectAnimeData = [
              { scouter: "9,800", threat: "GOD // 神", directive: "CAPSULE CORP PROTOCOL" },
              { scouter: "8,400", threat: "DRAGON // 竜", directive: "HERO ASSN SPECIAL DISPATCH" },
              { scouter: "7,200", threat: "DEMON // 鬼", directive: "FINANCIAL LEDGER DIRECTIVE" }
            ][index] || { scouter: "6,500", threat: "TIGER // 虎", directive: "QA MISSION" };

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="chamfer-corner border border-amber-200/90 bg-white/90 backdrop-blur-md p-6 relative overflow-hidden flex flex-col justify-between h-full group shadow-md hover:border-amber-400 hover:shadow-xl transition-all"
              >
                <CornerCrosshairs colorClass="text-amber-500/60" />
                
                <div className="text-left">
                  {/* Mission Header */}
                  <div className="flex justify-between items-start mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-black tracking-widest text-amber-800 font-mono block">
                          MISSION_0{index + 1} // 作戦
                        </span>
                        <span className="text-[7.5px] px-1.5 py-0.5 bg-amber-100 border border-amber-300 rounded text-amber-950 font-mono font-black">
                          ⚡ {projectAnimeData.scouter}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[8px] px-2 py-0.5 bg-rose-100 border border-rose-300 rounded text-rose-800 font-mono font-black">
                          THREAT: {projectAnimeData.threat}
                        </span>
                        <span className="text-[7.5px] text-slate-400 font-mono hidden sm:inline">
                          // {projectAnimeData.directive}
                        </span>
                      </div>
                    </div>
                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl group-hover:border-amber-300 group-hover:scale-105 transition-all shadow-xs shrink-0">
                      {getIcon(project.id)}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-black text-slate-900 mb-3 group-hover:text-amber-800 transition-colors leading-tight font-display">
                    {project.title}
                  </h3>

                  {/* Objective */}
                  <div className="space-y-1 mb-5">
                    <span className="text-[8.5px] text-slate-500 font-black uppercase tracking-wider font-mono block">Mission Objective // 任務要件</span>
                    <p className="text-slate-600 text-xs leading-relaxed font-sans font-medium">
                      {project.summary}
                    </p>
                  </div>

                  {/* Technology parameters */}
                  <div className="space-y-2 mb-5">
                    <span className="text-[8.5px] text-slate-500 font-black uppercase tracking-wider font-mono block">Tactical Tooling</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[9px] px-2 py-0.5 bg-slate-50 border border-slate-200 text-slate-700 rounded font-mono font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Result metrics */}
                  <div className="space-y-1 mb-6 border-t border-slate-100 pt-4">
                    <span className="text-[8.5px] text-slate-500 font-black uppercase tracking-wider font-mono block">Mission Metrics // 成果</span>
                    <div className="flex flex-col gap-1.5 mt-1.5 font-mono text-[9px]">
                      {project.metrics.slice(0, 2).map((metric, mIdx) => (
                        <div key={mIdx} className="flex justify-between items-center bg-slate-50/70 p-1.5 rounded border border-slate-100">
                          <span className="text-slate-500 font-bold">METRIC_[0{mIdx + 1}]:</span>
                          <span className="text-amber-900 font-black">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* View Study CTA Chamfer Button */}
                <Link
                  href={`/projects/${project.id}`}
                  className="chamfer-corner border border-amber-300 bg-amber-100/80 hover:bg-amber-400 text-amber-950 hover:text-slate-950 font-bold py-2.5 px-4 text-[10px] tracking-wider uppercase text-center transition-all duration-300 block select-none cursor-pointer mt-4 shadow-xs hover:shadow-md"
                >
                  <span className="flex items-center justify-center gap-1.5 font-mono font-black">
                    ACCESS MISSION BRIEF // 詳細 <ExternalLink size={10} />
                  </span>
                </Link>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
