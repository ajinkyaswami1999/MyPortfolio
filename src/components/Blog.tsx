"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

interface BlogPost {
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "How I Test Financial APIs: A Complete Guide",
    category: "API Testing",
    readTime: "6 min read",
    date: "May 2026",
    summary: "Breaking down the testing steps for FinTech APIs, covering schema validation, header authorization, double-debit prevention, and negative scenario simulations.",
  },
  {
    title: "Database Validation Techniques for Ledgers",
    category: "Database Testing",
    readTime: "5 min read",
    date: "April 2026",
    summary: "A practical guide to writing SQL audits for tracking transaction entries, database record locking, and ensuring financial reporting tables remain 100% correct.",
  },
  {
    title: "Performance Testing for FinTech at Scale",
    category: "Performance Testing",
    readTime: "8 min read",
    date: "March 2026",
    summary: "How to configure JMeter scripts simulating concurrent transaction requests, analyzing throughput bottlenecks, and resolving database locking slow-downs.",
  },
  {
    title: "The Ultimate Regression Testing Checklist",
    category: "Manual Testing",
    readTime: "4 min read",
    date: "Feb 2026",
    summary: "A structured QA checklist covering end-to-end app flows, multi-device UI compatibility, SMS gateway queues, and verification cycles before high-scale release.",
  },
  {
    title: "Manual vs Automation: Finding the FinTech Balance",
    category: "Automation Mindset",
    readTime: "5 min read",
    date: "Jan 2026",
    summary: "Discussing when to rely on manual exploratory testing (device UX, error states) versus automating regressions (APIs, repeatable database schemas) in financial apps.",
  },
];

export default function Blog() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="blog" className="py-24 relative bg-[#03030d] overflow-hidden">
      {/* Background Aurora */}
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full aurora-circle-2 filter blur-[100px] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left max-w-3xl">
          <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase mb-2">My Writing</span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
            QA Engineering Blog
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl text-sm md:text-base leading-relaxed">
            Recruiter-focused articles explaining practical testing setups, logic validations, and structural database auditing.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-cyan to-brand-blue mt-4" />
        </div>

        {/* Blog Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.title}
              variants={itemVariants}
              className="glass-panel rounded-2xl border border-slate-900 overflow-hidden flex flex-col justify-between h-full hover:border-slate-800 transition-all group cursor-pointer p-6 md:p-8"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-4 pb-4 border-b border-slate-900/60">
                  <span className="text-brand-cyan uppercase tracking-wider font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={10} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={10} />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-bold font-display text-white mb-3 group-hover:text-brand-cyan transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Summary */}
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
                  {post.summary}
                </p>
              </div>

              {/* Read Link */}
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-400 group-hover:text-brand-cyan transition-colors">
                <span>Read Article</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
