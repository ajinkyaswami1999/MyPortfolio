import React from "react";
import type { Metadata } from "next";
import CreativeSectorClient from "./CreativeSectorClient";

export const metadata: Metadata = {
  title: "Creative Sector | 3D Design, Web Tools, Photography",
  description: "Explore the creative portfolio of Ajinkya Swami. Voxelique digital fabrication lab, Toolique featuring 250+ free online developer calculators and QA tools, and macro photography logs covering industrial and automotive expedition structures.",
  alternates: {
    canonical: "https://ajinkyaswami.in/creative-sector",
  },
  openGraph: {
    title: "Creative Sector | 3D Design, Web Tools, Photography",
    description: "Explore the creative portfolio of Ajinkya Swami, featuring 3D design fabrication, Toolique with 250+ free online tools, and expedition photography.",
    url: "https://ajinkyaswami.in/creative-sector",
    type: "website",
  }
};

export default function CreativeSectorPage() {
  // WebPage schema representing a portfolio catalog section
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://ajinkyaswami.in/creative-sector#webpage",
    "name": "Creative Sector - 3D Design, Web Tools & Photography",
    "description": "Central data hub hosting 3D printing calibrations, Toolique platform with 250+ free online tools, and high-resolution macro photography logs.",
    "url": "https://ajinkyaswami.in/creative-sector",
    "isPartOf": {
      "@id": "https://ajinkyaswami.in/#website"
    },
    "publisher": {
      "@id": "https://ajinkyaswami.in/#person"
    },
    "mainEntity": [
      {
        "@type": "Brand",
        "name": "Voxelique",
        "description": "Premium 3D printing and custom modeling direct-to-consumer brand.",
        "url": "https://www.voxelique.com/"
      },
      {
        "@type": "WebApplication",
        "name": "Toolique",
        "description": "Platform with 250+ free online developer formatters, QA calculators, converters, and localized productivity web utilities.",
        "url": "https://www.toolique.in/"
      },
      {
        "@type": "CreativeWork",
        "name": "Theasterlens Photography",
        "description": "Macro industrial and automotive photography logs.",
        "url": "https://www.instagram.com/theasterlens/"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CreativeSectorClient />
    </>
  );
}
