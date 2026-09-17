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
      return <Cpu className="text-amber-600" size={24} />;
    case "ekyc-process-testing":
    case "mobile-testing-framework":
      return <Layers className="text-sky-600" size={24} />;
    default:
      return <CreditCard className="text-purple-600" size={24} />;
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

export default function ProjectsClient() {
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
    <div className="flex flex-col min-h-screen bg-[#FAF9F6] text-slate-800 selection:bg-amber-100 selection:text-amber-900 overflow-hidden">
      <Navbar />

      <PageWrapper>
        <main className="flex-1 container mx-auto px-4 md:px-8 pt-32 pb-24 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-16 text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-amber-900 uppercase mb-2 bg-amber-100/90 px-3 py-1 rounded-full border border-amber-300/80">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>作戦任務 // S-CLASS MISSIONS</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
              Research Projects & Case Studies
            </h1>
            <p className="text-slate-600 mt-4 text-xs md:text-sm leading-relaxed font-sans">
              Every mission is archived with rigorous verification benchmarks, real-world UPI throughput validations, and biometric compliance metrics. Hover to inspect full engineering telemetry.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-amber-400 via-orange-400 to-sky-400 mt-6" />
          </div>

          {/* Filters & Search Controls */}
          <div className="flex flex-col xl:flex-row gap-6 mb-12 items-stretch justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search projects by title, tool, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white/90 border border-slate-200 hover:border-amber-400 focus:border-amber-500 rounded-2xl text-slate-900 placeholder-slate-400 outline-none transition-colors text-sm shadow-xs backdrop-blur-md"
              />
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap gap-2 items-center">
              <Filter className="text-slate-400 mr-2 hidden sm:block" size={16} />
              <div className="flex flex-wrap gap-1.5">
                {filterCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 font-bold shadow-sm"
                        : "bg-white/85 border border-slate-200 text-slate-700 hover:text-slate-950 hover:border-amber-300 shadow-xs"
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
                  className="glass-panel p-6 md:p-8 rounded-3xl border border-amber-200/80 bg-white/85 flex flex-col justify-between hover:border-amber-400 transition-all duration-300 group relative overflow-hidden shadow-md hover:shadow-lg"
                >
                  {/* Top containment glow light */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent group-hover:via-orange-400 transition-all duration-500" />
                  
                  {/* Chamber Technical Tag */}
                  <div className="absolute top-3 right-6 font-mono text-[8px] text-amber-800/70 uppercase tracking-widest pointer-events-none select-none font-bold">
                    UNIT_CHAMBER_0{index + 1} // S-CLASS
                  </div>

                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center space-x-3.5">
                        <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-xl group-hover:border-amber-400 transition-colors">
                          {getIcon(project.id)}
                        </div>
                        <div className="text-left">
                          <h2 className="text-lg md:text-xl font-extrabold font-display text-slate-900 group-hover:text-amber-700 transition-colors">
                            {project.title}
                          </h2>
                          <span className="text-[10px] font-mono text-amber-800 uppercase tracking-wider block mt-0.5 font-bold">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Testing Type */}
                    <div className="mb-4 bg-amber-50/70 px-3 py-1.5 border border-amber-200/70 rounded-lg inline-block">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 block mb-0.5 font-bold">
                        Calibration Scope
                      </span>
                      <span className="text-xs font-bold text-amber-900">
                        {project.testingType}
                      </span>
                    </div>

                    {/* Summary */}
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6 text-left font-sans">
                      {project.summary}
                    </p>

                    {/* Tools Badges */}
                    <div className="mb-6 text-left">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 block mb-2 font-bold">
                        Validated Arsenal
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-[10px] font-mono px-2.5 py-1 bg-amber-50/80 border border-amber-200/80 text-slate-800 rounded-md font-bold"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Metrics Highlight Grid */}
                    <div className="border-t border-amber-100 pt-5 mt-4 text-left">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 block mb-3 font-bold">
                        Telemetry QA Results
                      </span>
                      <div className="grid grid-cols-2 gap-2.5">
                        {project.metrics.map((metric, i) => (
                          <div
                            key={i}
                            className="flex items-center space-x-2 bg-amber-50/60 border border-amber-200/70 p-2.5 rounded-xl group-hover:border-amber-400 transition-colors"
                          >
                            <Award size={14} className="text-amber-600 shrink-0" />
                            <span className="text-xs font-semibold text-slate-800">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* View Case Study CTA */}
                  <div className="mt-8 pt-5 border-t border-amber-100 flex justify-end">
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex items-center space-x-1.5 text-xs font-mono uppercase tracking-wider font-bold text-amber-800 hover:text-orange-600 transition-colors"
                    >
                      <span>Decapsulate Unit</span>
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20 glass-panel border border-amber-200/80 bg-white/85 rounded-3xl max-w-xl mx-auto shadow-md">
              <p className="text-slate-600 font-medium mb-2 font-sans">No projects found matching the criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="text-xs text-amber-800 font-bold hover:underline cursor-pointer font-mono"
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
