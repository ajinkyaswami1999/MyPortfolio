import React from "react";
import type { Metadata } from "next";
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const post = blogsData.find((p) => p.id === id);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | QA Engineering Blog`,
    description: post.summary,
    alternates: {
      canonical: `https://ajinkyaswami.in/blog/${post.id}`,
    },
    openGraph: {
      title: `${post.title} | QA Engineering Blog`,
      description: post.summary,
      url: `https://ajinkyaswami.in/blog/${post.id}`,
      type: "article",
      publishedTime: new Date(post.date).toISOString().split('T')[0],
      authors: ["Ajinkya Swami"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | QA Engineering Blog`,
      description: post.summary,
    }
  };
}

// Generate static params for all blog routes at compile time (SSG support)
export async function generateStaticParams() {
  return blogsData.map((post) => ({
    id: post.id,
  }));
}

function getBlogPostDigest(id: string): { question: string; answer: string }[] {
  switch (id) {
    case "how-i-test-financial-apis":
      return [
        {
          question: "How do you prevent double-debit errors in financial payment APIs?",
          answer: "Double debits are prevented by enforcing strict idempotency validation. We inject a unique Idempotency Key in the API headers. When a payment request is retried due to latencies or clicks, the server recognizes the duplicate key and returns the cached payment response instead of processing a new charge."
        },
        {
          question: "What is the best way to handle bank gateway timeouts during a payment transaction?",
          answer: "Gateways timeouts must trigger a state of 'PENDING' rather than a hard fail. The system should gracefully mock/handle 504 status codes, hold transaction ledgers open, and initiate a background reconciliation loop to query status directly from bank nodes."
        }
      ];
    case "sql-queries-every-qa-should-know":
      return [
        {
          question: "Why should QA engineers write complex subqueries and joins?",
          answer: "QA engineers use joins and subqueries to audit transaction data integrity, ensure that user billing ledgers exactly balance with payment gateways, and verify that foreign keys are maintained correctly without orphan entries."
        },
        {
          question: "How do you detect duplicate records in a database table?",
          answer: "To detect duplicates, write a query using GROUP BY on the target fields and a HAVING count(*) > 1 filter. This isolates identical data packets violating unique index constraints."
        }
      ];
    case "upi-app-testing-checklist":
      return [
        {
          question: "What are the critical check points for UPI payment testing?",
          answer: "UPI payment checks include validating dual-factor device binding (SMS/SIM verification), handling multi-bank routing limits, validating database balance updates, checking transaction limits, and simulating weak-network offline scenarios."
        },
        {
          question: "How do you verify device binding in UPI systems?",
          answer: "Device binding is tested by validating SMS payload callbacks, verifying that a user cannot register the same account on unauthorized devices without re-binding, and checking session tokens under dynamic SIM-swap scenarios."
        }
      ];
    case "ekyc-testing-scenarios":
      return [
        {
          question: "What is the primary verification flow in eKYC integrations?",
          answer: "The flow involves validating OCR text capture accuracy from identity documents (PAN/Aadhaar), executing real-time biometric face-match comparisons, verifying documents against government portals (UIDAI/NSDL), and checking audit trial logs."
        },
        {
          question: "How do you test eKYC OCR failures?",
          answer: "We test OCR by feeding blurry, low-contrast, or cropped documents and validating that the system rejects the upload with clear validation messages instead of failing silently or crashing."
        }
      ];
    case "manual-testing-vs-automation":
      return [
        {
          question: "When should you automate a test case versus executing it manually?",
          answer: "Automate stable, repetitive, regression flows (like login, signup, transaction cycles) where inputs are fixed. Keep high-value exploratory tests, physical biometric flows, and new feature verifications manual."
        },
        {
          question: "What is the key advantage of automation in QA?",
          answer: "Automation increases test coverage velocity, enables parallel multi-browser runs (via Playwright or Selenium), and ensures immediate regression alerts are sent during CI/CD deployment phases."
        }
      ];
    case "postman-api-testing-best-practices":
      return [
        {
          question: "How do you maintain environment variables in Postman?",
          answer: "Use environment scopes to separate Local, Sandbox, and Production URLs. Store authentication tokens, client secrets, and API credentials in variables, making test collections portable across dev stages."
        },
        {
          question: "How do you automate Postman tests in CI/CD pipelines?",
          answer: "Postman test collections are exported as JSON and executed programmatically inside pipelines using Newman (Postman command-line runner), returning exit status codes indicating test success."
        }
      ];
    case "jmeter-load-testing-guide":
      return [
        {
          question: "How do you configure load profiles in Apache JMeter?",
          answer: "Set up Thread Groups to control the number of concurrent virtual users, ramp-up time parameters, and loop counts. Use CSV Data Set Configs to feed dynamic payloads for high-throughput validations."
        },
        {
          question: "What metrics indicate a server bottleneck during load tests?",
          answer: "Key metrics include response time latency (TTFB), error rate spikes, throughput transactions per second (TPS), and server resource consumption profiles (CPU/memory exhaustion)."
        }
      ];
    case "database-testing-in-fintech-projects":
      return [
        {
          question: "What is transactional database verification in FinTech?",
          answer: "It checks ACID compliance (Atomicity, Consistency, Isolation, Durability). If a multi-step transaction fails at a bank node, all intermediate local database updates must be rolled back completely to prevent state mismatch."
        },
        {
          question: "How do you verify data locking during concurrent writes?",
          answer: "We simulate concurrent payment requests on a single wallet balance and assert that row locks prevent simultaneous writes, avoiding race conditions or wallet balance inflation."
        }
      ];
    default:
      return [];
  }
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { id } = await params;
  const post = blogsData.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  const digest = getBlogPostDigest(post.id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.summary,
    "datePublished": new Date(post.date).toISOString().split('T')[0],
    "author": {
      "@type": "Person",
      "name": "Ajinkya Swami",
      "url": "https://ajinkyaswami.in/"
    },
    "publisher": {
      "@type": "Person",
      "name": "Ajinkya Swami"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ajinkyaswami.in/blog/${post.id}`
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
            href="/blog"
            className="inline-flex items-center space-x-2 text-xs font-mono text-slate-500 hover:text-brand-cyan transition-colors mb-10 group"
          >
            <ChevronLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Technical Blog</span>
          </Link>

          {/* Article Header */}
          <article className="max-w-4xl mx-auto">
            <header className="mb-12">
              <div className="flex items-center gap-3 text-xs font-mono text-slate-500 mb-4 text-left">
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
              <h1 className="text-3xl md:text-5xl font-extrabold font-display text-white leading-tight text-left">
                {post.title}
              </h1>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mt-6 italic pl-4 border-l-2 border-brand-cyan/40 text-left">
                {post.summary}
              </p>
              <div className="h-1 w-24 bg-gradient-to-r from-brand-cyan to-brand-blue mt-8" />
            </header>

            {/* Generative Engine Calibration Node (Q&A Digest) */}
            {digest.length > 0 && (
              <div className="mb-12 glass-panel p-6 md:p-8 rounded-3xl border border-brand-cyan/25 bg-[#111111]/70 relative overflow-hidden">
                <div className="absolute top-0 right-0 px-3 py-1 bg-brand-cyan/10 border-b border-l border-brand-cyan/20 rounded-bl-xl font-mono text-[7.5px] uppercase tracking-widest text-brand-cyan animate-pulse">
                  AI SEARCH CALIBRATION NODE
                </div>
                <h2 className="text-sm font-mono text-brand-cyan uppercase tracking-widest mb-4 flex items-center gap-2 text-left">
                  <Terminal size={14} />
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
