import React from "react";
import AssetManifestClient from "./AssetManifestClient";

export const metadata = {
  title: "Mission Archive | Production Case Studies",
  description: "Classified engineering case studies, automated test frameworks, and high-concurrency QA validation registry by Ajinkya Swami.",
  alternates: {
    canonical: "https://ajinkyaswami.in/asset-manifest",
  }
};

export default function AssetManifestPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://ajinkyaswami.in/asset-manifest#collectionpage",
    "name": "Mission Archive - Production Case Studies | Ajinkya Swami",
    "description": "Technical mission archive tracking production QA test suites, fintech gateway integrations, and biometric identity frameworks.",
    "url": "https://ajinkyaswami.in/asset-manifest",
    "isPartOf": {
      "@id": "https://ajinkyaswami.in/#website"
    },
    "author": {
      "@id": "https://ajinkyaswami.in/#person"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AssetManifestClient />
    </>
  );
}
