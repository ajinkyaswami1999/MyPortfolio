import React from "react";
import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";
import { projectsData } from "@/data/projects";

export const metadata: Metadata = {
  title: "Research Projects | Software QA Case Studies",
  description: "Exhaustive software quality assurance case studies by Ajinkya Swami. Review testing calibrations, UPI payment ledger validation, eKYC compliance checks, and API automation frameworks.",
  alternates: {
    canonical: "https://ajinkyaswami.in/projects",
  },
  openGraph: {
    title: "Research Projects | Software QA Case Studies",
    description: "Explore software testing and quality engineering case studies by Ajinkya Swami, Senior FinTech QA Engineer.",
    url: "https://ajinkyaswami.in/projects",
    type: "website",
  }
};

export default function ProjectsPage() {
  // CollectionPage schema matching case studies
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Research Projects - Software QA Case Studies",
    "description": "Exhaustive quality engineering case studies covering payment gateways, UPI switches, Aadhaar integrations, and automation frameworks.",
    "url": "https://ajinkyaswami.in/projects",
    "about": {
      "@type": "Person",
      "name": "Ajinkya Swami"
    },
    "hasPart": projectsData.map((project) => ({
      "@type": "CreativeWork",
      "name": project.title,
      "description": project.summary,
      "url": `https://ajinkyaswami.in/projects/${project.id}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectsClient />
    </>
  );
}
