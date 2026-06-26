"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, Filter, ArrowRight, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import { blogsData, blogCategories } from "@/data/blogs";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogsData.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
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
            <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase mb-2 block">My Writings</span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-display text-white">
              QA Engineering Blog
            </h1>
            <p className="text-slate-400 mt-4 text-sm md:text-base leading-relaxed">
              Recruiter-focused technical articles explaining practical testing setups, relational SQL validation patterns, performance load tests, and automation frameworks.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-brand-cyan to-brand-blue mt-6" />
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col xl:flex-row gap-6 mb-12 items-stretch justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                type="text"
                placeholder="Search blog articles by title or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-slate-950/80 border border-slate-900 hover:border-slate-800 focus:border-brand-cyan rounded-2xl text-white outline-none transition-colors text-sm backdrop-blur-md"
              />
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap gap-2 items-center">
              <Filter className="text-slate-500 mr-2 hidden sm:block" size={16} />
              <div className="flex flex-wrap gap-1.5">
                {blogCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-brand-cyan text-slate-950 font-bold shadow-md shadow-brand-cyan/10"
                        : "bg-slate-950/80 border border-slate-900 text-slate-400 hover:text-white hover:border-slate-800"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Listing Grid */}
          {filteredPosts.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  className="glass-panel rounded-3xl border border-slate-900 overflow-hidden flex flex-col justify-between h-full hover:border-slate-800 hover:border-brand-cyan/20 transition-all group cursor-pointer p-6 md:p-8"
                >
                  <Link href={`/blog/${post.id}`} className="flex flex-col justify-between h-full w-full">
                    <div>
                      {/* Meta Details */}
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-4 pb-4 border-b border-slate-900/60">
                        <span className="text-brand-cyan uppercase tracking-wider font-semibold">
                          {post.category}
                        </span>
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center gap-1">
                            <Calendar size={10} />
                            {post.date.split(",")[0]}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={10} />
                            {post.readTime}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-base md:text-lg font-bold font-display text-white mb-3 group-hover:text-brand-cyan transition-colors leading-snug">
                        {post.title}
                      </h2>

                      {/* Summary */}
                      <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
                        {post.summary}
                      </p>
                    </div>

                    {/* Read Link */}
                    <div className="flex items-center space-x-2 text-xs font-bold text-slate-400 group-hover:text-brand-cyan transition-colors mt-4">
                      <span>Read Article</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20 glass-panel border border-slate-900 rounded-3xl max-w-xl mx-auto">
              <p className="text-slate-400 font-medium mb-2">No articles found matching the criteria.</p>
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
