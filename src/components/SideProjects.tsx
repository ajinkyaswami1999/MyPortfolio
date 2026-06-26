"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Terminal, 
  Box, 
  Globe, 
  ArrowRight, 
  ExternalLink, 
  Wrench,
  TrendingUp,
  Cpu
} from "lucide-react";
import { InstagramIcon } from "./BrandIcons";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  primaryLink: { text: string; href: string; icon?: React.ReactNode; isExternal?: boolean };
  secondaryLink?: { text: string; href: string; icon?: React.ReactNode; isExternal?: boolean };
  accentColor: string; // "cyan", "purple", "blue"
  icon: React.ReactNode;
}

const sideProjectsData: ProjectCardProps[] = [
  {
    title: "Payworld QA Career",
    subtitle: "Software Quality Engineering Lead",
    description: "Driving testing strategy, automated verification, and QA excellence across core FinTech products, high-throughput payment gateways, eKYC microservices, and UPI APIs.",
    badge: "Day Job & Career",
    tags: ["API Testing", "FinTech Compliance", "Automation Frameworks", "Load Analysis"],
    metrics: [
      { label: "Production APIs Tested", value: "100+" },
      { label: "Projects Delivered", value: "20+" },
      { label: "Regression Test Cases", value: "Thousands" }
    ],
    primaryLink: { text: "View QA Experience", href: "#experience" },
    accentColor: "cyan",
    icon: <ShieldCheck className="text-brand-cyan" size={24} />
  },
  {
    title: "VOXELIQUE",
    subtitle: "Premium 3D Printing Brand",
    description: "An e-commerce and creative manufacturing brand delivering premium 3D printed products, custom models, and functional design solutions. Managed from concept CAD sketch to store logistics.",
    badge: "Product Business",
    tags: ["3D Manufacturing", "CAD & Product Design", "Direct-to-Consumer", "Operations"],
    metrics: [
      { label: "Physical Tolerances", value: "0.1mm" },
      { label: "Platform", value: "E-Commerce" },
      { label: "Media Outreach", value: "Active Feed" }
    ],
    primaryLink: { text: "Visit Storefront", href: "https://www.voxelique.com/", isExternal: true },
    secondaryLink: { text: "Instagram", href: "https://www.instagram.com/voxelique/", icon: <InstagramIcon size={14} />, isExternal: true },
    accentColor: "purple",
    icon: <Box className="text-brand-purple" size={24} />
  },
  {
    title: "Toolique",
    subtitle: "Developer & Productivity Web Tools",
    description: "A tools-based public web platform providing functional online calculators, developer formatters, QA utilities, and localized tools, optimized for extreme search engine visibility.",
    badge: "Side Project / SEO Venture",
    tags: ["SEO Optimization", "Web Utilities", "Product Growth", "Developer Tools"],
    metrics: [
      { label: "Growth Strategy", value: "SEO Led" },
      { label: "Availability", value: "100% Free" },
      { label: "Audience Target", value: "Devs & Public" }
    ],
    primaryLink: { text: "Visit Website", href: "https://www.toolique.in/", isExternal: true },
    accentColor: "blue",
    icon: <Wrench className="text-brand-blue" size={24} />
  }
];

export default function SideProjects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 15 }
    }
  };

  const getAccentStyles = (color: string) => {
    switch (color) {
      case "cyan":
        return {
          border: "border-brand-cyan/20 hover:border-brand-cyan/40",
          glow: "from-brand-cyan/5 via-slate-900/60 to-transparent",
          badgeBg: "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan",
          iconBg: "bg-brand-cyan/10 border-brand-cyan/35",
          highlightText: "text-brand-cyan",
          btnBg: "bg-brand-cyan/10 hover:bg-brand-cyan/25 border-brand-cyan/30 text-brand-cyan",
          primaryBtn: "bg-brand-cyan text-slate-950 hover:bg-brand-cyan-light"
        };
      case "purple":
        return {
          border: "border-brand-purple/20 hover:border-brand-purple/40",
          glow: "from-brand-purple/5 via-slate-900/60 to-transparent",
          badgeBg: "bg-brand-purple/10 border-brand-purple/20 text-brand-cyan",
          iconBg: "bg-brand-purple/10 border-brand-purple/35",
          highlightText: "text-brand-purple",
          btnBg: "bg-brand-purple/10 hover:bg-brand-purple/25 border-brand-purple/30 text-brand-cyan",
          primaryBtn: "bg-brand-purple text-white hover:bg-brand-purple-light"
        };
      case "blue":
      default:
        return {
          border: "border-brand-blue/20 hover:border-brand-blue/40",
          glow: "from-brand-blue/5 via-slate-900/60 to-transparent",
          badgeBg: "bg-brand-blue/10 border-brand-blue/20 text-brand-cyan",
          iconBg: "bg-brand-blue/10 border-brand-blue/35",
          highlightText: "text-brand-blue",
          btnBg: "bg-brand-blue/10 hover:bg-brand-blue/25 border-brand-blue/30 text-brand-cyan",
          primaryBtn: "bg-brand-blue text-white hover:bg-brand-blue-light"
        };
    }
  };

  return (
    <section id="side-projects" className="py-24 relative bg-[#03030d] overflow-hidden border-t border-slate-900/60">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-brand-purple/5 via-brand-cyan/5 to-transparent filter blur-[150px] opacity-25 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left max-w-3xl">
          <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase mb-2 block">
            Digital Ventures & Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
            My Digital Products & Side Projects
          </h2>
          <p className="text-slate-400 mt-4 text-sm md:text-base leading-relaxed">
            I am more than a Software Quality Engineer. I sketch physical products, deploy web-scale utility platforms, design storefront operations, and optimize platforms for search engine visibility. Here is how I blend QA precision with product development.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-blue mt-4" />
        </div>

        {/* 3-Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {sideProjectsData.map((project) => {
            const styles = getAccentStyles(project.accentColor);
            return (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className={`glass-panel p-6 md:p-8 rounded-3xl border ${styles.border} flex flex-col justify-between transition-all duration-300 bg-gradient-to-br ${styles.glow} relative group`}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <span className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-md border ${styles.badgeBg}`}>
                      {project.badge}
                    </span>
                    <div className={`p-2.5 border rounded-2xl ${styles.iconBg} backdrop-blur-md`}>
                      {project.icon}
                    </div>
                  </div>

                  {/* Header Title */}
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-extrabold font-display text-white group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 font-mono mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-350 text-xs md:text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlight Metrics */}
                  <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-white/5 mb-6">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <span className={`text-sm md:text-base font-extrabold font-display block text-slate-200`}>
                          {metric.value}
                        </span>
                        <span className="text-[9px] text-slate-500 block uppercase tracking-wider mt-0.5 leading-tight">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 bg-slate-950 border border-slate-900 text-slate-400 rounded-md font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  {project.primaryLink.isExternal ? (
                    <a
                      href={project.primaryLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center space-x-1.5 text-xs font-bold py-2.5 px-4 rounded-xl transition-all duration-300 border border-slate-800 bg-slate-950 text-slate-200 hover:text-white hover:border-slate-700"
                    >
                      <span>{project.primaryLink.text}</span>
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <Link
                      href={project.primaryLink.href}
                      className="flex-1 inline-flex items-center justify-center space-x-1.5 text-xs font-bold py-2.5 px-4 rounded-xl transition-all duration-300 border border-slate-800 bg-slate-950 text-slate-200 hover:text-white hover:border-slate-700"
                    >
                      <span>{project.primaryLink.text}</span>
                      <ArrowRight size={12} />
                    </Link>
                  )}

                  {project.secondaryLink && (
                    <a
                      href={project.secondaryLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-1.5 text-xs font-bold py-2.5 px-4 rounded-xl transition-all duration-300 bg-slate-900/60 border border-white/5 text-slate-300 hover:text-white hover:bg-slate-900/90"
                    >
                      {project.secondaryLink.icon}
                      <span>{project.secondaryLink.text}</span>
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
