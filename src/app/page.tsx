import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Entrepreneurship from "@/components/Entrepreneurship";
import WhyHireMe from "@/components/WhyHireMe";
import Certifications from "@/components/Certifications";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#03030d] text-slate-100 selection:bg-brand-cyan/20 selection:text-brand-cyan overflow-hidden">
      {/* Dynamic Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Metrics Grid */}
        <Metrics />

        {/* Work Experience Vertical Timeline */}
        <Experience />

        {/* Technical Skills Cards */}
        <Skills />

        {/* Featured Projects & Case Studies */}
        <Projects />

        {/* Entrepreneurship (VOXELIQUE) */}
        <Entrepreneurship />

        {/* Why Hire Me Feature Cards */}
        <WhyHireMe />

        {/* Certifications Deck */}
        <Certifications />

        {/* QA Tech Blog Articles */}
        <Blog />

        {/* Contact Form & Widgets */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
