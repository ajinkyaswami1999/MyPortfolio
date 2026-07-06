import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Transmission Center | Contact Ajinkya Swami",
  description: "Establish a secure satellite communication link with Ajinkya Swami, Senior FinTech Software QA Engineer. Submit inquiries for software QA audits, technical testing consultation, or contract collaborations.",
  alternates: {
    canonical: "https://ajinkyaswami1999.github.io/MyPortfolio/contact",
  },
  openGraph: {
    title: "Transmission Center | Contact Ajinkya Swami",
    description: "Establish a secure satellite communication link with Ajinkya Swami, Senior FinTech Software QA Engineer.",
    url: "https://ajinkyaswami1999.github.io/MyPortfolio/contact",
    type: "website",
  }
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Transmission Center - Contact Ajinkya Swami",
    "description": "Establish a secure satellite communication link with Ajinkya Swami, Senior FinTech Software QA Engineer.",
    "url": "https://ajinkyaswami1999.github.io/MyPortfolio/contact",
    "mainEntity": {
      "@type": "Person",
      "name": "Ajinkya Swami",
      "jobTitle": "Software Quality Assurance Engineer",
      "email": "ajinkyaswami1999@gmail.com",
      "telephone": "+918875043720"
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-slate-100 selection:bg-brand-cyan/20 selection:text-brand-cyan overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <PageWrapper>
        <main className="flex-1 pt-12">
          {/* Contact form client component is rendered here dynamically */}
          <Contact />
        </main>
      </PageWrapper>

      <Footer />
    </div>
  );
}
