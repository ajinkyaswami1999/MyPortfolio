"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cpu, Layers, CreditCard, ArrowRight, ExternalLink } from "lucide-react";
import { projectsData } from "@/data/projects";

// Mapping project category icons
const getIcon = (id: string) => {
  switch (id) {
    case "upi-app-testing":
      return <Cpu className="text-brand-cyan" size={32} />;
    case "ekyc-process-testing":
      return <Layers className="text-brand-blue" size={32} />;
    case "dynamic-rate-plan":
    case "payment-gateway":
    default:
      return <CreditCard className="text-brand-purple" size={32} />;
  }
};

export default function Projects() {
  // Take first 3 projects for the home page preview
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section id="projects" className="py-24 relative bg-[#03030d] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 text-left">
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase mb-2 block">My Work</span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
              Featured QA Case Studies
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl text-sm md:text-base leading-relaxed">
              Recruiter-focused QA case studies highlighting core testing setups, complex problem solving, and concrete business outcomes.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-brand-cyan to-brand-blue mt-4" />
          </div>

          <Link
            href="/projects"
            className="flex items-center space-x-2 text-sm font-bold text-brand-cyan hover:text-brand-cyan/80 mt-6 md:mt-0 transition-colors group cursor-pointer"
          >
            <span>View All Case Studies</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
              className="glass-panel glow-card rounded-2xl border border-slate-900 overflow-hidden flex flex-col justify-between h-full p-6 md:p-8 cursor-pointer hover:border-brand-cyan/30 transition-all group"
            >
              <Link href={`/projects/${project.id}`} className="flex flex-col justify-between h-full w-full">
                <div>
                  {/* Category & Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-mono tracking-wider text-slate-500 uppercase">
                      {project.category}
                    </span>
                    <div className="p-3 bg-slate-900/60 rounded-xl group-hover:scale-110 transition-transform">
                      {getIcon(project.id)}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold font-display text-white mb-4 group-hover:text-brand-cyan transition-colors">
                    {project.title}
                  </h3>

                  {/* Short summary */}
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Highlights badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.metrics.slice(0, 3).map((metric) => (
                      <span
                        key={metric}
                        className="text-[10px] md:text-xs px-2.5 py-1 bg-slate-950/60 border border-slate-800 text-brand-cyan rounded-md"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Study CTA */}
                <div className="flex items-center space-x-2 text-xs font-bold text-brand-cyan mt-6 pt-6 border-t border-slate-900/80 group-hover:underline">
                  <span>View Full Case Study</span>
                  <ExternalLink size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
