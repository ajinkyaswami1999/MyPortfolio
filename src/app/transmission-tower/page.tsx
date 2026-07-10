import React from "react";
import TransmissionTowerClient from "./TransmissionTowerClient";

export const metadata = {
  title: "Transmission Tower | Satellite Telemetry",
  description: "Establish frequencies with Ajinkya Swami, Software QA Lead. Satellite telemetry link to LinkedIn network, GitHub repositories, and direct mail channels.",
  alternates: {
    canonical: "https://ajinkyaswami.in/transmission-tower",
  }
};

export default function TransmissionTowerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Transmission Tower - Satellite Telemetry",
    "description": "Satellite telemetry link to LinkedIn network, GitHub repositories, and direct mail channels.",
    "url": "https://ajinkyaswami.in/transmission-tower"
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
