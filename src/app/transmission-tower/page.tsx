import React from "react";
import TransmissionTowerClient from "./TransmissionTowerClient";

export const metadata = {
  title: "Comms Channel | Transmission Tower - Ajinkya Swami",
  description: "Establish frequencies with Ajinkya Swami, Senior QA Engineer & Automation Architect. Direct telemetry link to LinkedIn network, GitHub repositories, and encrypted contact channels.",
  alternates: {
    canonical: "https://ajinkyaswami.in/transmission-tower",
  }
};

export default function TransmissionTowerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://ajinkyaswami.in/transmission-tower#contactpage",
    "name": "Comms Channel | Transmission Tower - Ajinkya Swami",
    "description": "Encrypted telemetry link to LinkedIn network, GitHub repositories, and direct mail channels.",
    "url": "https://ajinkyaswami.in/transmission-tower",
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
      <TransmissionTowerClient />
    </>
  );
}
