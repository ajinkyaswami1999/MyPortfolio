import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ajinkya Swami | FinTech Software QA Engineer",
  description: "Senior Software Quality Assurance Engineer with 4+ years of experience ensuring reliability across high-scale UPI platforms, eKYC systems, API integrations, and database architectures.",
  keywords: [
    "Ajinkya Swami",
    "Software Quality Assurance Engineer",
    "QA Engineer",
    "FinTech Testing",
    "UPI App Testing",
    "eKYC System Testing",
    "API Testing",
    "Database Validation",
    "Selenium",
    "Playwright",
    "Postman",
    "JMeter",
    "MySQL",
    "Payworld India"
  ],
  authors: [{ name: "Ajinkya Swami" }],
  creator: "Ajinkya Swami",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ajinkyaswami1999.github.io/MyPortfolio", // Placeholder or custom domain
    title: "Ajinkya Swami | FinTech Software QA Engineer",
    description: "Senior Software Quality Assurance Engineer with 4+ years of experience ensuring reliability across high-scale UPI platforms, eKYC systems, API integrations, and database architectures.",
    siteName: "Ajinkya Swami Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajinkya Swami | FinTech Software QA Engineer",
    description: "Senior Software Quality Assurance Engineer with 4+ years of experience ensuring reliability across high-scale UPI platforms, eKYC systems, API integrations, and database architectures.",
  },
  alternates: {
    canonical: "https://ajinkyaswami1999.github.io/MyPortfolio",
  }
};

import BackgroundEffects from "@/components/BackgroundEffects";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ajinkya Swami",
    "jobTitle": "Software Quality Assurance Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Payworld India"
    },
    "url": "https://ajinkyaswami1999.github.io/MyPortfolio",
    "sameAs": [
      "https://github.com/ajinkyaswami1999",
      "https://www.linkedin.com/in/ajinkya-swami-82751b191/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "addressCountry": "India"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Malaviya National Institute of Technology (MNIT Jaipur)"
    },
    "knowsAbout": [
      "Manual Testing",
      "API Testing",
      "Database Validation",
      "Automation Testing",
      "Performance Testing",
      "Mobile Testing",
      "FinTech Software Quality Assurance"
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#03030d] text-slate-100 font-sans relative">
        <BackgroundEffects />
        {children}
      </body>
    </html>
  );
}
