"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight, X, BookOpen, AlertCircle, Terminal, CheckCircle2 } from "lucide-react";

interface BlogPost {
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  sections: { heading: string; text: string }[];
}

const blogPosts: BlogPost[] = [
  {
    title: "How I Test Financial APIs: A Complete Guide",
    category: "API Testing",
    readTime: "6 min read",
    date: "May 2026",
    summary: "Breaking down the testing steps for FinTech APIs, covering schema validation, header authorization, double-debit prevention, and negative scenario simulations.",
    sections: [
      {
        heading: "1. The Critical Nature of FinTech APIs",
        text: "Unlike regular web applications, API glitches in financial software translate directly to financial loss, compliance audits, or customer mistrust. Testing here requires a zero-tolerance approach for errors, prioritizing security, consistency, and idempotency."
      },
      {
        heading: "2. The Double-Debit Prevention & Idempotency Check",
        text: "One of the most critical scenarios is ensuring that multiple submissions of the same transaction payload do not charge the user twice. In my testing suites, I validate the presence and processing of unique idempotency keys in request headers. By simulating rapid double-requests in Postman, I confirm that the server correctly returns a cached response for the second request rather than triggering another debit loop."
      },
      {
        heading: "3. Rigorous Schema & Header Validation",
        text: "Every API endpoint must strictly enforce data contracts. I verify that request bodies match expected JSON schemas exactly—validating maximum transaction limits, disallowed characters, and datatype constraints. Headers must contain valid Bearer/JWT tokens, matching signatures, and exact content-type requirements; any deviation should trigger a proper 400 Bad Request or 401 Unauthorized code."
      },
      {
        heading: "4. Simulating Banking Latency & Webhook Timeouts",
        text: "Financial transactions often rely on third-party bank gateways. I test boundary failure cases by mocking gateway responses, simulating timeouts, and verifying that the platform gracefully updates transaction status to 'PENDING' or 'FAILED' instead of hanging indefinitely. Webhook callbacks are tested for retry logic, ensuring that if our service drops, the callback sender retries transmission at progressive backoff intervals."
      }
    ]
  },
  {
    title: "Database Validation Techniques for Ledgers",
    category: "Database Testing",
    readTime: "5 min read",
    date: "April 2026",
    summary: "A practical guide to writing SQL audits for tracking transaction entries, database record locking, and ensuring financial reporting tables remain 100% correct.",
    sections: [
      {
        heading: "1. The Ledger Integrity Challenge",
        text: "In FinTech products, database testing is more than checking if data is saved. It is about auditing double-entry bookkeeping rules: for every debit, there must be a matching credit, and the overall ledger balance must sum to zero."
      },
      {
        heading: "2. Structuring Automated SQL Audits",
        text: "I implement regression SQL scripts that run post-transaction processing. These scripts query transaction ledger tables, verifying that merchant balances reflect the sum of transactions minus commissions. I validate that decimals are tracked to correct precision (e.g., matching the sub-paise level for Indian Rupee UPI systems) to avoid rounding discrepancies."
      },
      {
        heading: "3. Validating Database Record Locking",
        text: "Under high concurrency, multiple queries might try to modify a merchant's balance at the exact same millisecond. I test for race conditions and transaction isolation levels. By simulating concurrent updates, I verify that the database correctly uses row-level locking (SELECT FOR UPDATE) to serialize queries, preventing double-credits or dirty reads."
      },
      {
        heading: "4. Auditing PII and Security Compliance",
        text: "PCI-DSS compliance requires strict protection of cardholder data and personally identifiable information (PII). I test that sensitive database fields, like Aadhaar numbers or bank account strings, are stored in encrypted formats and that server logs do not leak unmasked account credentials."
      }
    ]
  },
  {
    title: "Performance Testing for FinTech at Scale",
    category: "Performance Testing",
    readTime: "8 min read",
    date: "March 2026",
    summary: "How to configure JMeter scripts simulating concurrent transaction requests, analyzing throughput bottlenecks, and resolving database locking slow-downs.",
    sections: [
      {
        heading: "1. Defining Peak Load in Financial Apps",
        text: "Financial apps experience sudden spikes, especially during holidays or salary days. Performance testing ensures that the system handles massive concurrent request traffic without dropping callbacks or timing out transactions."
      },
      {
        heading: "2. Setting up Thread Groups in Apache JMeter",
        text: "I write JMeter test definitions replicating real-user patterns. I configure Thread Groups with ramp-up periods, establishing steady-state loads to evaluate system behavior. By combining payment API execution, login validation, and ledger reporting requests, we stress-test the entire API microservices mesh."
      },
      {
        heading: "3. Identifying Bottlenecks & Lock Escalate Errors",
        text: "During stress tests, common failure zones involve database connection pools or transaction locks. When transactions take longer than expected, connections exhaust, leading to 504 Gateway Timeouts. I analyze JMeter summary reports, monitoring latency and throughput drops, tracing the root cause back to slow-running query execution times or database lock escalations."
      },
      {
        heading: "4. Tuning & Re-Testing",
        text: "QA's job isn't finished with finding bottleneck reports. I collaborate with database administrators to recommend proper indexing patterns or cache layer implementation (Redis). Once optimization changes are made, I re-run identical JMeter suites to confirm throughput improvements under high load."
      }
    ]
  },
  {
    title: "The Ultimate Regression Testing Checklist",
    category: "Manual Testing",
    readTime: "4 min read",
    date: "Feb 2026",
    summary: "A structured QA checklist covering end-to-end app flows, multi-device UI compatibility, SMS gateway queues, and verification cycles before high-scale release.",
    sections: [
      {
        heading: "1. The Need for Structured Checklists",
        text: "While automation handles repetitive regression tests, manual testing is crucial for validation. A comprehensive checklist keeps the release cycle structured, ensuring no critical compliance checks or usability flows are missed."
      },
      {
        heading: "2. Step-by-Step Functional Regression Core",
        text: "My checklist starts with core merchant flows: merchant log-in, profile status (Approved/Rejected), payment link generation, and manual ledger exports. We verify status updates across bank-down periods and check that correct validation errors display for incomplete inputs."
      },
      {
        heading: "3. Mobile & Biometric Integration Checks",
        text: "For Payworld's eKYC and merchant apps, compatibility checks are extensive. The checklist verifies biometric device connection reliability, scanner drivers across diverse Android OS versions, and OTP verification timers under simulated low-network scenarios."
      },
      {
        heading: "4. Pre-Deployment Validation & Sanity Checklist",
        text: "Right before code transitions to production staging, I run a sanity check: verifying server health endpoints, certifying SSL certificate bindings, checking third-party bank integration credentials, and ensuring config files do not carry local host configurations."
      }
    ]
  },
  {
    title: "Manual vs Automation: Finding the FinTech Balance",
    category: "Automation Mindset",
    readTime: "5 min read",
    date: "Jan 2026",
    summary: "Discussing when to rely on manual exploratory testing (device UX, error states) versus automating regressions (APIs, repeatable database schemas) in financial apps.",
    sections: [
      {
        heading: "1. The Automation Trap",
        text: "It is common to assume that 100% automation is the goal. However, in complex FinTech applications with dynamic pricing models, strict compliance checks, and external hardware dependencies, complete automation is often inefficient and fragile."
      },
      {
        heading: "2. Where Automation Excels",
        text: "Automation is indispensable for repetitive, data-intensive tasks. I automate API regression suites, database schema integrity tests, and high-volume merchant rate updates using Python scripts. This saves hours of manual checking during minor version releases."
      },
      {
        heading: "3. Where Manual exploratory Testing is Vital",
        text: "Critical flows like biometric scanner physical behaviors, network packet dropping simulations, and payment error UX must be verified manually. Manual exploratory testing uncovers edge-case race conditions and usability flaws that automation scripts cannot evaluate."
      },
      {
        heading: "4. The Hybrid Testing Strategy",
        text: "I follow a balanced model: automated scripts verify backend contracts (API schemas, ledger calculations) under CI/CD pipelines, while exploratory manual testing evaluates front-end user experience and multi-device compliance during main sprint releases."
      }
    ]
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

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
              className="glass-panel rounded-2xl border border-slate-900 overflow-hidden flex flex-col justify-between h-full hover:border-slate-800 hover:border-brand-cyan/20 transition-all group cursor-pointer p-6 md:p-8"
              onClick={() => setSelectedPost(post)}
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
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-450 group-hover:text-brand-cyan transition-colors mt-4">
                <span>Read Article</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Article Modal Overlay */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              onClick={() => setSelectedPost(null)}
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass-panel border border-slate-800 rounded-2xl shadow-2xl p-6 md:p-10 z-10 no-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white p-2 bg-slate-900 border border-slate-800 rounded-xl transition-colors cursor-pointer"
                aria-label="Close article"
              >
                <X size={20} />
              </button>

              {/* Header */}
              <div className="mb-8 pr-12">
                <div className="flex items-center gap-3 text-xs font-mono text-slate-500 mb-2">
                  <span className="text-brand-cyan uppercase tracking-wider font-semibold">
                    {selectedPost.category}
                  </span>
                  <span>•</span>
                  <span>{selectedPost.date}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold font-display text-white leading-tight">
                  {selectedPost.title}
                </h3>
              </div>

              {/* Content body */}
              <div className="space-y-8 text-slate-300 text-sm md:text-base leading-relaxed">
                {selectedPost.sections.map((section, idx) => (
                  <div key={idx} className="space-y-2.5">
                    <h4 className="text-sm md:text-base font-bold font-display text-white flex items-center gap-2">
                      {section.heading.startsWith("1.") || section.heading.match(/^\d\./) ? (
                        <Terminal size={14} className="text-brand-cyan shrink-0" />
                      ) : (
                        <CheckCircle2 size={14} className="text-brand-blue shrink-0" />
                      )}
                      {section.heading}
                    </h4>
                    <p className="text-slate-400 pl-6 text-xs md:text-sm">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="mt-10 pt-6 border-t border-slate-900 text-center">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition-all cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
