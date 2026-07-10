import React from "react";
import AssetManifestClient from "./AssetManifestClient";

export const metadata = {
  title: "Asset Manifest | InGen Specimen Profiles",
  description: "Classified engineering specimens, 3D printing manufacturing nodes, and paddock automation frameworks validation registry.",
  alternates: {
    canonical: "https://ajinkyaswami.in/asset-manifest",
  }
};

export default function AssetManifestPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "InGen Asset Manifest - Specimen Profiles",
    "description": "Classified engineering specimens database tracking manufacturing, utility infrastructure, and QA paddock automation frameworks.",
    "url": "https://ajinkyaswami.in/asset-manifest"
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
