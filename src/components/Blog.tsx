"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogsData } from "@/data/blogs";

export default function Blog() {
  // Select first 3 blog posts for preview on the homepage
  const featuredPosts = blogsData.slice(0, 3);

  return (
    <section id="blog" className="py-24 relative bg-[#03030d] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 text-left">
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase mb-2 block">My Writing</span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
              QA Engineering Blog
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl text-sm md:text-base leading-relaxed">
              Recruiter-focused articles explaining practical testing setups, logic validations, and structural database auditing.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-brand-cyan to-brand-blue mt-4" />
          </div>

          <Link
            href="/blog"
            className="flex items-center space-x-2 text-sm font-bold text-brand-cyan hover:text-brand-cyan/80 mt-6 md:mt-0 transition-colors group cursor-pointer"
          >
            <span>Visit Technical Blog</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-2xl border border-slate-900 overflow-hidden flex flex-col justify-between h-full hover:border-slate-800 hover:border-brand-cyan/20 transition-all group cursor-pointer p-6 md:p-8"
            >
              <Link href={`/blog/${post.id}`} className="flex flex-col justify-between h-full w-full">
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
                <div className="flex items-center space-x-2 text-xs font-bold text-slate-400 group-hover:text-brand-cyan transition-colors mt-4">
                  <span>Read Article</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
