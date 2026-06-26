"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#03030d] text-slate-100 selection:bg-brand-cyan/20 selection:text-brand-cyan overflow-hidden">
      <Navbar />

      <PageWrapper>
        <main className="flex-1 pt-12">
          {/* We reuse the Contact form component which contains full glassmorphic forms and details */}
          <Contact />
        </main>
      </PageWrapper>

      <Footer />
    </div>
  );
}
