"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cpu, Layers, CreditCard, ChevronRight, Filter, Search, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import { projectsData } from "@/data/projects";

const getIcon = (id: string) => {
  switch (id) {
    case "upi-app-testing":
    case "api-automation-framework":
      return <Cpu className="text-brand-cyan" size={24} />;
    case "ekyc-process-testing":
    case "mobile-testing-framework":
      return <Layers className="text-brand-blue" size={24} />;
    default:
      return <CreditCard className="text-brand-purple" size={24} />;
  }
};

const filterCategories = [
  "All",
  "FinTech UPI Platform",
  "Identity & Compliance",
  "FinTech Pricing Engine",
  "Transaction Processing",
  "Compliance & Billing",
  "Business Intelligence & Incentives",
  "Automation Engineering",
  "Mobile QA & Automation"
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
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
    <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-slate-100 selection:bg-brand-cyan/20 selection:text-brand-cyan overflow-hidden">
      <Navbar />

      <PageWrapper>
        <main className="flex-1 container mx-auto px-4 md:px-8 pt-32 pb-24 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs font-mono tracking-widest text-brand-amber uppercase mb-2 block">Case Studies</span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-display text-white">
              Research Projects
            </h1>
            <p className="text-slate-400 mt-4 text-xs md:text-sm leading-relaxed">
              Every project is archived inside a secure containment chamber. Hovering decapsulates the unit, verifying case study details and QA validations.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-brand-amber to-brand-cyan mt-6" />
          </div>

          {/* Filters & Search Controls */}
          <div className="flex flex-col xl:flex-row gap-6 mb-12 items-stretch justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                type="text"
                placeholder="Search projects by title, tool, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-slate-950/80 border border-slate-900 hover:border-slate-800 focus:border-brand-cyan rounded-2xl text-white outline-none transition-colors text-sm backdrop-blur-md"
              />
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap gap-2 items-center">
              <Filter className="text-slate-500 mr-2 hidden sm:block" size={16} />
              <div className="flex flex-wrap gap-1.5">
                {filterCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-brand-cyan text-slate-950 font-bold shadow-md shadow-brand-cyan/10"
                        : "bg-slate-950/80 border border-slate-900 text-slate-400 hover:text-white hover:border-slate-800"
                    }`}
                  >
                    {cat === "All" ? "All Categories" : cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Listing Grid */}
          {filteredProjects.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  whileHover={{ scale: 1.015, y: -4 }}
                  className="glass-panel p-6 md:p-8 rounded-3xl border border-slate-900 bg-[#111111]/75 flex flex-col justify-between hover:border-brand-cyan/40 transition-all duration-300 group relative overflow-hidden shadow-2xl shadow-black/80"
                >
                  {/* Top containment glow light */}
                  <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent group-hover:via-brand-cyan transition-all duration-500" />
                  
                  {/* Chamber Technical Tag */}
                  <div className="absolute top-3 right-6 font-mono text-[7px] text-slate-600 uppercase tracking-widest pointer-events-none select-none">
                    UNIT_CHAMBER_0{index + 1} // SECURE
                  </div>

                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center space-x-3.5">
                        <div className="p-2.5 bg-slate-950 border border-white/5 rounded-xl text-brand-cyan group-hover:border-brand-cyan/35 transition-colors">
                          {getIcon(project.id)}
                        </div>
                        <div>
                          <h2 className="text-lg md:text-xl font-extrabold font-display text-white group-hover:text-brand-cyan transition-colors">
                            {project.title}
                          </h2>
                          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mt-0.5">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Testing Type */}
                    <div className="mb-4 bg-slate-950/40 px-3 py-1.5 border border-white/5 rounded-lg inline-block">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 block mb-0.5">
                        Calibration Scope
                      </span>
                      <span className="text-xs font-semibold text-brand-cyan">
                        {project.testingType}
                      </span>
                    </div>

                    {/* Summary */}
                    <p className="text-slate-400 text-xs leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    {/* Tools Badges */}
                    <div className="mb-6">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 block mb-2">
                        Containment Utilities
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-[9px] font-mono px-2 py-0.5 bg-slate-950 border border-slate-900 text-slate-400 rounded-md"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Metrics Highlight Grid */}
                    <div className="border-t border-white/5 pt-5 mt-4">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 block mb-3">
                        Excavation QA Results
                      </span>
                      <div className="grid grid-cols-2 gap-2.5">
                        {project.metrics.map((metric, i) => (
                          <div
                            key={i}
                            className="flex items-center space-x-2 bg-slate-950/60 border border-slate-900/60 p-2.5 rounded-xl group-hover:border-brand-cyan/20 transition-colors"
                          >
                            <Award size={13} className="text-brand-cyan shrink-0" />
                            <span className="text-[11px] font-medium text-slate-350">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* View Case Study CTA */}
                  <div className="mt-8 pt-5 border-t border-white/5 flex justify-end">
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex items-center space-x-1.5 text-xs font-mono uppercase tracking-wider font-bold text-brand-cyan hover:text-white transition-colors"
                    >
                      <span>Decapsulate Unit</span>
                      <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20 glass-panel border border-slate-900 rounded-3xl max-w-xl mx-auto">
              <p className="text-slate-400 font-medium mb-2">No projects found matching the criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="text-xs text-brand-cyan font-bold hover:underline cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </main>
      </PageWrapper>

      <Footer />
    </div>
  );
}
