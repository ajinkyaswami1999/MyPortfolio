import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-slate-100 selection:bg-brand-orange/20 selection:text-brand-orange overflow-hidden">
      {/* Dynamic Floating Navbar */}
      <Navbar />

      {/* Main Sections wrapped in PageWrapper for animations */}
      <PageWrapper>
        <main className="flex-1">
          {/* Hero Section */}
          <Hero />

          {/* About Me Section */}
          <AboutMe />

          {/* Work Experience Vertical Timeline */}
          <Experience />
        </main>
      </PageWrapper>

      {/* Footer */}
      <Footer />
    </div>
  );
}
