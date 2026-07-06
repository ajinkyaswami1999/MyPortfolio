import React from "react";
import type { Metadata } from "next";
import CreativeSectorClient from "./CreativeSectorClient";

export const metadata: Metadata = {
  title: "Creative Sector | 3D Design, Web Tools, Photography",
  description: "Explore the creative portfolio of Ajinkya Swami. Voxelique digital fabrication lab, Toolique developer calculators, and macro photography logs covering industrial and automotive expedition structures.",
  alternates: {
    canonical: "https://ajinkyaswami1999.github.io/MyPortfolio/creative-sector",
  },
  openGraph: {
    title: "Creative Sector | 3D Design, Web Tools, Photography",
    description: "Explore the creative portfolio of Ajinkya Swami, featuring 3D design fabrication, online tools, and expedition photography.",
    url: "https://ajinkyaswami1999.github.io/MyPortfolio/creative-sector",
    type: "website",
  }
};

export default function CreativeSectorPage() {
  // WebPage schema representing a portfolio catalog section
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Creative Sector - 3D Design, Web Tools & Photography",
    "description": "Central data hub hosting 3D printing calibrations, developer utilities, and high-resolution macro photography logs.",
    "url": "https://ajinkyaswami1999.github.io/MyPortfolio/creative-sector",
    "publisher": {
      "@type": "Person",
      "name": "Ajinkya Swami"
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
        "description": "Developer formatters, QA calculators, and localized productivity web utilities.",
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
