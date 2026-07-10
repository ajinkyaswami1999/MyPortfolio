import React from "react";
import PersonnelFileClient from "./PersonnelFileClient";

export const metadata = {
  title: "Personnel File | Security Log",
  description: "Chronological security classification record of Ajinkya Swami, Software QA Lead. Interfacing, dynamic commissions, and transaction auditing protocols.",
  alternates: {
    canonical: "https://ajinkyaswami.in/personnel-file",
  }
};

export default function PersonnelFilePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": "Personnel File - Security Log",
    "description": "Chronological security classification record of Ajinkya Swami, Lead QA Engineer.",
    "url": "https://ajinkyaswami.in/personnel-file"
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
