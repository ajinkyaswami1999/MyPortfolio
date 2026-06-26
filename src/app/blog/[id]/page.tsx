import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Calendar, Clock, Terminal, ChevronRight, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import { blogsData } from "@/data/blogs";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Generate static params for all blog routes at compile time (SSG support)
export async function generateStaticParams() {
  return blogsData.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { id } = await params;
  const post = blogsData.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#03030d] text-slate-100 selection:bg-brand-cyan/20 selection:text-brand-cyan overflow-hidden">
      <Navbar />

      <PageWrapper>
        <main className="flex-1 container mx-auto px-4 md:px-8 pt-32 pb-24 relative z-10">
          
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-xs font-mono text-slate-500 hover:text-brand-cyan transition-colors mb-10 group"
          >
            <ChevronLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Technical Blog</span>
          </Link>

          {/* Article Header */}
          <article className="max-w-4xl mx-auto">
            <header className="mb-12">
              <div className="flex items-center gap-3 text-xs font-mono text-slate-500 mb-4">
                <span className="text-brand-cyan uppercase tracking-wider font-semibold">
                  {post.category}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {post.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold font-display text-white leading-tight">
                {post.title}
              </h1>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mt-6 italic pl-4 border-l-2 border-brand-cyan/40">
                {post.summary}
              </p>
              <div className="h-1 w-24 bg-gradient-to-r from-brand-cyan to-brand-blue mt-8" />
            </header>

            {/* Article Content Body */}
            <div className="space-y-10 text-slate-300 text-sm md:text-base leading-relaxed">
              {post.sections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  {/* Heading */}
                  <h2 className="text-xl md:text-2xl font-bold font-display text-white flex items-center gap-3 pt-4">
                    {section.heading.match(/^\d\./) ? (
                      <Terminal size={18} className="text-brand-cyan shrink-0" />
                    ) : (
                      <ChevronRight size={18} className="text-brand-blue shrink-0" />
                    )}
                    {section.heading}
                  </h2>
                  
                  {/* Text Paragraph */}
                  <p className="text-slate-400 pl-7 text-xs md:text-sm leading-relaxed">
                    {section.text}
                  </p>

                  {/* Code block if any */}
                  {section.code && (
                    <div className="pl-7 mt-4">
                      <div className="w-full bg-slate-950 border border-slate-900 rounded-xl overflow-hidden shadow-xl">
                        {/* Terminal Tab Header */}
                        <div className="flex justify-between items-center px-4 py-2.5 bg-slate-900/60 border-b border-slate-900/80">
                          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-rose-500" />
                            <span className="h-2 w-2 rounded-full bg-amber-500" />
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            <span className="ml-1 text-slate-400">{section.codeLanguage || "code"}</span>
                          </span>
                          <span className="text-[10px] font-mono text-slate-500">QA Console Output</span>
                        </div>
                        {/* Code area */}
                        <pre className="p-5 overflow-x-auto text-[11px] md:text-xs font-mono text-emerald-400 leading-normal text-left">
                          <code>{section.code}</code>
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Recruiter Callout Footer */}
            <div className="mt-16 p-6 md:p-8 glass-panel border border-brand-cyan/20 rounded-3xl bg-brand-cyan/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-full filter blur-xl" />
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={28} className="text-brand-cyan shrink-0 animate-pulse" />
                  <div>
                    <h3 className="text-sm md:text-base font-bold font-display text-white">
                      Recruiting Ajinkya Swami?
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Need a QA engineer with deep FinTech API and Database validation expertise?
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="text-xs font-bold px-4 py-2.5 bg-gradient-to-r from-brand-cyan to-brand-blue text-slate-950 rounded-xl transition-all active:scale-95 shrink-0"
                >
                  Schedule an Interview
                </Link>
              </div>
            </div>

          </article>
        </main>
      </PageWrapper>

      <Footer />
    </div>
  );
}
