import React from "react";
import type { Metadata } from "next";
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${project.title} | QA Case Study`,
    description: project.summary,
    alternates: {
      canonical: `https://ajinkyaswami1999.github.io/MyPortfolio/projects/${project.id}`,
    },
    openGraph: {
      title: `${project.title} | QA Case Study`,
      description: project.summary,
      url: `https://ajinkyaswami1999.github.io/MyPortfolio/projects/${project.id}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | QA Case Study`,
      description: project.summary,
    }
  };
}

// Generate static params for all project routes at compile time (SSG support)
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

function getProjectDigest(id: string): { question: string; answer: string }[] {
  switch (id) {
    case "upi-app-testing":
      return [
        {
          question: "What core issues did you validate in the UPI App Testing project?",
          answer: "We tested SIM binding mechanics, dual-factor device locks, transaction limits, database ledger updates under rapid concurrent transactions, and fallback states when third-party bank gateways timeout."
        }
      ];
    case "ekyc-process-testing":
      return [
        {
          question: "How did you test user biometric face matching in eKYC?",
          answer: "We audited biometric face matching by executing API testing with dynamic confidence threshold limits, validating Aadhaar OCR document scan extractions, and testing edge cases with blurry or incomplete document uploads."
        }
      ];
    case "dynamic-rate-plan":
      return [
        {
          question: "What was the QA focus on the Dynamic Rate Plan project?",
          answer: "The focus was verifying the pricing engine algorithm. We audited commission splits, transaction taxation, chargeback rates, and ledger balance consistency across dynamic distributor slabs."
        }
      ];
    case "payment-gateway":
      return [
        {
          question: "How did you test transaction security and limits in the Payment Gateway project?",
          answer: "We executed boundary value analysis on payment amounts, simulated double-debit attempts via double request clicks, validated idempotency keys, and verified compliance ledger audits."
        }
      ];
    case "gst-invoice-claim":
      return [
        {
          question: "What validation rules were tested for GST Invoice Claims?",
          answer: "We validated tax invoice data calculations, checking document verification rules, GSTIN format validations, and automated refund ledger offsets to prevent tax claim leakages."
        }
      ];
    case "target-creation":
      return [
        {
          question: "What did you build for Target Creation and Commission testing?",
          answer: "We calibrated business intelligence incentives, checking performance target milestones and database query procedures to calculate payout percentages accurately."
        }
      ];
    case "api-automation-framework":
      return [
        {
          question: "How is the API Automation Framework structured?",
          answer: "Built using Postman, Newman, and Playwright, the framework executes automated test runner validation suites on daily builds, testing schema compliance, response codes, and data values."
        }
      ];
    case "mobile-testing-framework":
      return [
        {
          question: "What mobile platforms does your framework test?",
          answer: "It executes automated regression testing across multiple Android and iOS device sizes, validating deep links, push notification behaviors, SIM binding, and payment screen UI layouts."
        }
      ];
    default:
      return [];
  }
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const digest = getProjectDigest(project.id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": project.title,
    "description": project.summary,
    "dependencies": project.tools.join(", "),
    "author": {
      "@type": "Person",
      "name": "Ajinkya Swami",
      "url": "https://ajinkyaswami1999.github.io/MyPortfolio/"
    },
    "publisher": {
      "@type": "Person",
      "name": "Ajinkya Swami"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ajinkyaswami1999.github.io/MyPortfolio/projects/${project.id}`
    }
  };

  const faqJsonLd = digest.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": digest.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  return (
    <div className="flex flex-col min-h-screen bg-[#03030d] text-slate-100 selection:bg-brand-cyan/20 selection:text-brand-cyan overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
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
          <div className="max-w-4xl mb-12 text-left">
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

          {/* Generative Engine Calibration Node (Q&A Digest) */}
          {digest.length > 0 && (
            <div className="mb-12 glass-panel p-6 md:p-8 rounded-3xl border border-brand-cyan/25 bg-[#111111]/70 max-w-4xl relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-brand-cyan/10 border-b border-l border-brand-cyan/20 rounded-bl-xl font-mono text-[7.5px] uppercase tracking-widest text-brand-cyan animate-pulse">
                AI SEARCH CALIBRATION NODE
              </div>
              <h2 className="text-sm font-mono text-brand-cyan uppercase tracking-widest mb-4 flex items-center gap-2 text-left">
                <Shield size={14} className="shrink-0" />
                AI Overview Q&A Digest (AEO / GEO Cache)
              </h2>
              <div className="space-y-6">
                {digest.map((item, idx) => (
                  <div key={idx} className="space-y-2 border-b border-white/5 pb-4 last:border-b-0 last:pb-0 text-left">
                    <h3 className="text-xs md:text-sm font-extrabold text-white flex items-start gap-2 leading-relaxed text-left">
                      <span className="text-brand-cyan select-none font-mono font-bold shrink-0">Q:</span>
                      <span>{item.question}</span>
                    </h3>
                    <p className="text-xs text-slate-400 pl-4 border-l border-brand-cyan/30 leading-relaxed text-left">
                      <span className="text-slate-500 font-mono font-bold text-[10px] select-none block mb-1">AEO RESPONSE DATA:</span>
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

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
