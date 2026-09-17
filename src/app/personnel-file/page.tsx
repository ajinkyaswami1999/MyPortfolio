import React from "react";
import PersonnelFileClient from "./PersonnelFileClient";

export const metadata = {
  title: "Personnel Dossier | Service Chronicles - Ajinkya Swami",
  description: "Chronological service record and engineering dossier of Ajinkya Swami, Lead QA Engineer & Automation Architect.",
  alternates: {
    canonical: "https://ajinkyaswami.in/personnel-file",
  }
};

export default function PersonnelFilePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://ajinkyaswami.in/personnel-file#profilepage",
    "name": "Personnel Dossier - Service Chronicles | Ajinkya Swami",
    "description": "Chronological service record and engineering dossier of Ajinkya Swami, Lead QA Engineer & Automation Architect.",
    "url": "https://ajinkyaswami.in/personnel-file",
    "isPartOf": {
      "@id": "https://ajinkyaswami.in/#website"
    },
    "mainEntity": {
      "@id": "https://ajinkyaswami.in/#person"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PersonnelFileClient />
    </>
  );
}
