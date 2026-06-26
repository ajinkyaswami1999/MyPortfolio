import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Cpu, Shield, Clock, Award, Target, ListCheck, BookOpen, Wrench, AlertTriangle, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import { projectsData } from "@/data/projects";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Generate static params for all project routes at compile time (SSG support)
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#03030d] text-slate-100 selection:bg-brand-cyan/20 selection:text-brand-cyan overflow-hidden">
      <Navbar />

      <PageWrapper>
        <main className="flex-1 container mx-auto px-4 md:px-8 pt-32 pb-24 relative z-10">
          {/* Back Button */}
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-xs font-mono text-slate-500 hover:text-brand-cyan transition-colors mb-10 group"
          >
            <ChevronLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Case Studies</span>
          </Link>

          {/* Project Title Block */}
          <div className="max-w-4xl mb-12">
            <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase mb-2 block">
              {project.category} Case Study
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold font-display text-white leading-tight">
              {project.title}
            </h1>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mt-4">
              {project.summary}
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-brand-cyan to-brand-blue mt-6" />
          </div>

          {/* Detail Cards Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Main column - Technical Case Study contents */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Overview */}
              <div className="glass-panel p-6 md:p-8 rounded-3xl border border-slate-900">
                <h2 className="text-lg md:text-xl font-bold font-display text-white mb-4 flex items-center gap-2.5">
                  <BookOpen size={20} className="text-brand-cyan" />
                  Project Overview
                </h2>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Problem Statement */}
              <div className="bg-slate-950/80 border border-slate-900 p-6 md:p-8 rounded-3xl relative overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-full filter blur-xl" />
                <h2 className="text-lg md:text-xl font-bold font-display text-white mb-4 flex items-center gap-2.5">
                  <AlertTriangle size={20} className="text-rose-500" />
                  The Testing Problem
                </h2>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* My Role */}
              <div className="glass-panel p-6 md:p-8 rounded-3xl border border-slate-900">
                <h2 className="text-lg md:text-xl font-bold font-display text-white mb-4 flex items-center gap-2.5">
                  <Target size={20} className="text-brand-blue" />
                  My Role & Ownership
                </h2>
                <p className="text-slate-350 text-xs md:text-sm leading-relaxed">
                  {project.role}
                </p>
              </div>

              {/* Testing Scope */}
              <div className="glass-panel p-6 md:p-8 rounded-3xl border border-slate-900">
                <h2 className="text-lg md:text-xl font-bold font-display text-white mb-4 flex items-center gap-2.5">
                  <ListCheck size={20} className="text-brand-cyan" />
                  Testing Scope
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-2">
                  {project.testingScope.map((scope, index) => (
                    <li key={index} className="flex items-start text-xs md:text-sm text-slate-300 leading-normal">
                      <span className="h-1.5 w-1.5 bg-brand-cyan rounded-full mt-2 mr-3 shrink-0" />
                      <span>{scope}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Test Strategy */}
              <div className="glass-panel p-6 md:p-8 rounded-3xl border border-slate-900">
                <h2 className="text-lg md:text-xl font-bold font-display text-white mb-4 flex items-center gap-2.5">
                  <Cpu size={20} className="text-brand-blue" />
                  Test Strategy & Execution
                </h2>
                <ul className="space-y-3.5 pl-2">
                  {project.testStrategy.map((strat, index) => (
                    <li key={index} className="flex items-start text-xs md:text-sm text-slate-400 leading-relaxed">
                      <span className="text-brand-cyan font-mono mr-3 shrink-0">0{index + 1}.</span>
                      <span>{strat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges & Solutions */}
              <div className="glass-panel p-6 md:p-8 rounded-3xl border border-slate-900">
                <h2 className="text-lg md:text-xl font-bold font-display text-white mb-4 flex items-center gap-2.5">
                  <AlertTriangle size={20} className="text-brand-purple" />
                  QA Challenges & Workarounds
                </h2>
                <ul className="space-y-4 pl-2">
                  {project.challenges.map((chal, index) => (
                    <li key={index} className="flex items-start text-xs md:text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-4 border border-slate-900/60 rounded-xl">
                      <span className="h-2 w-2 bg-brand-purple rounded-full mt-2 mr-4 shrink-0" />
                      <span>{chal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Screenshots Mockup Placeholder */}
              <div className="glass-panel p-6 md:p-8 rounded-3xl border border-slate-900 text-center relative overflow-hidden">
                <h2 className="text-lg md:text-xl font-bold font-display text-white mb-4">
                  Testing Dashboard & Execution Logs
                </h2>
                <div className="w-full aspect-video rounded-xl bg-slate-950 border border-slate-900 flex flex-col justify-center items-center p-6 relative">
                  <div className="w-16 h-16 rounded-full bg-brand-cyan/5 border border-brand-cyan/20 flex justify-center items-center text-brand-cyan mb-4 animate-pulse">
                    <Cpu size={28} />
                  </div>
                  <span className="text-xs font-mono text-slate-400 tracking-wide uppercase">
                    Testing Log Output Preview
                  </span>
                  <span className="text-[10px] text-slate-600 font-mono mt-2">
                    Appium logs / Postman runners / JMeter transaction reports
                  </span>
                  {/* Decorative glowing lines to simulate screen details */}
                  <div className="absolute bottom-4 left-4 right-4 h-1.5 bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-gradient-to-r from-brand-cyan to-brand-blue rounded-full animate-pulse" />
                  </div>
                </div>
              </div>

            </div>

            {/* Right sidebar column - Case highlights */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Technology Stack List */}
              <div className="glass-panel p-5 border border-slate-900 rounded-2xl">
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                  <Wrench size={12} />
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2.5 py-1.5 bg-slate-950 border border-slate-900 text-brand-cyan rounded-lg"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testing Scope Summary */}
              <div className="glass-panel p-5 border border-slate-900 rounded-2xl">
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">
                  Scope Parameters
                </h3>
                <div className="text-xs text-slate-400">
                  <p className="flex justify-between py-1.5 border-b border-slate-900/60">
                    <span>Validation Level:</span>
                    <span className="text-white font-semibold">Production Sanity</span>
                  </p>
                  <p className="flex justify-between py-1.5 border-b border-slate-900/60">
                    <span>Run Frequency:</span>
                    <span className="text-white font-semibold">Continuous CI/CD</span>
                  </p>
                  <p className="flex justify-between py-1.5">
                    <span>Methodology:</span>
                    <span className="text-white font-semibold">Hybrid Agile</span>
                  </p>
                </div>
              </div>

              {/* Core Results highlights */}
              <div className="glass-panel p-6 border border-slate-900 rounded-2xl">
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-brand-cyan" />
                  QA Impact & Results
                </h3>
                <ul className="space-y-3.5">
                  {project.results.map((res, index) => (
                    <li key={index} className="text-xs md:text-sm text-slate-300 font-medium leading-snug">
                      ✓ {res}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics counter grid */}
              <div className="bg-brand-cyan/5 border border-brand-cyan/10 p-6 rounded-2xl">
                <h3 className="text-xs font-mono uppercase tracking-widest text-brand-cyan mb-4 flex items-center gap-2">
                  <Award size={14} />
                  Performance Metrics
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {project.detailedMetrics.map((met, index) => (
                    <div
                      key={index}
                      className="bg-slate-950/80 border border-slate-900/80 p-4 rounded-xl flex justify-between items-center"
                    >
                      <span className="text-xs text-slate-400 font-medium">{met.label}</span>
                      <span className="text-sm font-bold text-brand-cyan">{met.value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </main>
      </PageWrapper>

      <Footer />
    </div>
  );
}
