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
    <div className="flex flex-col min-h-screen bg-[#03030d] text-slate-100 selection:bg-brand-cyan/20 selection:text-brand-cyan overflow-hidden">
      <Navbar />

      <PageWrapper>
        <main className="flex-1 container mx-auto px-4 md:px-8 pt-32 pb-24 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase mb-2 block">Case Studies</span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-display text-white">
              FinTech Quality Assurance Projects
            </h1>
            <p className="text-slate-400 mt-4 text-sm md:text-base leading-relaxed">
              Exhaustive quality engineering case studies covering payment gateways, UPI switches, Aadhaar integrations, dynamic billing rules, automation setups, and performance optimizations.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-brand-cyan to-brand-blue mt-6" />
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
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  className="glass-panel glow-card p-6 md:p-8 rounded-3xl border border-slate-900 flex flex-col justify-between hover:border-brand-cyan/25 transition-all group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="p-2.5 bg-slate-900/80 border border-slate-800 rounded-xl">
                          {getIcon(project.id)}
                        </div>
                        <div>
                          <h2 className="text-xl md:text-2xl font-bold font-display text-white group-hover:text-brand-cyan transition-colors">
                            {project.title}
                          </h2>
                          <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mt-0.5">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Testing Type */}
                    <div className="mb-4">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-1">
                        Testing Scope
                      </span>
                      <span className="text-xs font-semibold text-brand-cyan">
                        {project.testingType}
                      </span>
                    </div>

                    {/* Summary */}
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    {/* Tools Badges */}
                    <div className="mb-6">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-2.5">
                        Tools Leveraged
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-[10px] px-2.5 py-1 bg-slate-950/80 border border-slate-900 text-slate-300 rounded-md"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Metrics Highlight Grid */}
                    <div className="border-t border-slate-900/60 pt-6 mt-4">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-3">
                        QA Results & Metrics
                      </span>
                      <div className="grid grid-cols-2 gap-3">
                        {project.metrics.map((metric, i) => (
                          <div
                            key={i}
                            className="flex items-center space-x-2 bg-slate-950/40 border border-slate-900/50 p-2.5 rounded-xl"
                          >
                            <Award size={14} className="text-brand-cyan shrink-0" />
                            <span className="text-xs font-medium text-slate-350">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* View Case Study CTA */}
                  <div className="mt-8 pt-6 border-t border-slate-900/80 flex justify-end">
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex items-center space-x-2 text-xs font-bold text-brand-cyan hover:underline group-hover:text-white transition-colors"
                    >
                      <span>Explore Full Case Study</span>
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
