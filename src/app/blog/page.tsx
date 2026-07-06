import React from "react";
import type { Metadata } from "next";
import BlogClient from "./BlogClient";
import { blogsData } from "@/data/blogs";

export const metadata: Metadata = {
  title: "QA Engineering Blog | Software Testing Guides",
  description: "Explore technical quality assurance and software testing articles by Ajinkya Swami. Deep dives into financial API testing, UPI checklist items, SQL checkpoints, and automation guides.",
  alternates: {
    canonical: "https://ajinkyaswami1999.github.io/MyPortfolio/blog",
  },
  openGraph: {
    title: "QA Engineering Blog | Software Testing Guides",
    description: "Read technical quality assurance and software testing articles by Ajinkya Swami, Senior FinTech QA Engineer.",
    url: "https://ajinkyaswami1999.github.io/MyPortfolio/blog",
    type: "website",
  }
};

export default function BlogPage() {
  // CollectionPage schema matching articles
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "QA Engineering Blog - Software Testing Guides",
    "description": "Technical QA blog posts covering API test scripts, SQL validations, UPI app performance benchmarks, and automated frameworks.",
    "url": "https://ajinkyaswami1999.github.io/MyPortfolio/blog",
    "about": {
      "@type": "Person",
      "name": "Ajinkya Swami"
    },
    "hasPart": blogsData.map((post) => ({
      "@type": "Article",
      "name": post.title,
      "description": post.summary,
      "datePublished": new Date(post.date).toISOString().split('T')[0],
      "url": `https://ajinkyaswami1999.github.io/MyPortfolio/blog/${post.id}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogClient />
    </>
  );
}
