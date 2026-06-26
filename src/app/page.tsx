import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import SideProjects from "@/components/SideProjects";
import WhyHireMe from "@/components/WhyHireMe";
import Certifications from "@/components/Certifications";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#03030d] text-slate-100 selection:bg-brand-cyan/20 selection:text-brand-cyan overflow-hidden">
      {/* Dynamic Floating Navbar */}
      <Navbar />

      {/* Main Sections wrapped in PageWrapper for animations */}
      <PageWrapper>
        <main className="flex-1">
          {/* Hero Section */}
          <div id="home">
            <Hero />
          </div>

          {/* Bento Grid (combines Metrics, Core Skills, and Highlights) */}
          <div id="skills">
            <BentoGrid />
          </div>

          {/* Work Experience Vertical Timeline */}
          <div id="experience">
            <Experience />
          </div>

          {/* Featured Projects & Case Studies Previews */}
          <Projects />

          {/* Digital Products & Side Projects */}
          <SideProjects />

          {/* Why Hire Me Feature Cards */}
          <div id="why-hire-me">
            <WhyHireMe />
          </div>

          {/* Certifications Deck */}
          <div id="certifications">
            <Certifications />
          </div>

          {/* QA Tech Blog Articles Previews */}
          <Blog />

          {/* Contact Form & Widgets */}
          <div id="contact">
            <Contact />
          </div>
        </main>
      </PageWrapper>

      {/* Footer */}
      <Footer />
    </div>
  );
}
