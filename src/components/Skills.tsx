"use client";

import React from "react";
import { motion } from "framer-motion";
import CornerCrosshairs from "./CornerCrosshairs";
import { Check, ClipboardList, Send, Activity, Database, Settings, Terminal, Cloud, ShieldAlert } from "lucide-react";

interface SkillCategory {
  title: string;
  techniqueName: string;
  animeTag: string;
  powerOutput: string;
  icon: React.ReactNode;
  skills: string[];
  colorClass: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Manual & QA Testing",
    techniqueName: "SERIOUS PUNCH PROTOCOL // マジ殴り",
    animeTag: "ONE PUNCH MAN // 必殺技",
    powerOutput: "ZERO-DEFECT STRIKE",
    icon: <ClipboardList className="text-rose-700" size={22} />,
    skills: ["Regression Testing", "Functional Testing", "Smoke Testing", "Sanity Testing", "User Acceptance Testing (UAT)"],
    colorClass: "from-rose-300/40 via-amber-200/40 to-transparent",
  },
  {
    title: "API Verification",
    techniqueName: "INSTANT TRANSMISSION // 瞬間移動",
    animeTag: "DRAGON BALL Z // 移動術",
    powerOutput: "<50ms RESPONSE",
    icon: <Send className="text-sky-700" size={22} />,
    skills: ["Postman", "REST APIs", "JSON Validation", "Endpoint Routing", "Header Authentication"],
    colorClass: "from-sky-300/40 via-cyan-200/40 to-transparent",
  },
  {
    title: "Performance Testing",
    techniqueName: "KAMEHAMEHA STRESS WAVE // かめはめ波",
    animeTag: "DRAGON BALL Z // 最大出力",
    powerOutput: "10,000+ TPS STRESS",
    icon: <Activity className="text-amber-700" size={22} />,
    skills: ["Apache JMeter", "Load Testing", "Stress Testing", "Throughput Metrics", "Latency Simulation"],
    colorClass: "from-amber-300/40 via-orange-200/40 to-transparent",
  },
  {
    title: "Database Testing",
    techniqueName: "SPIRIT BOMB DATA AUDIT // 元気玉",
    animeTag: "DRAGON BALL Z // 全集中",
    powerOutput: "100% ACID INTEGRITY",
    icon: <Database className="text-emerald-700" size={22} />,
    skills: ["MySQL", "SQL Queries", "Relational Mapping", "Transaction Logs", "Data Integrity Audits"],
    colorClass: "from-emerald-300/40 via-sky-200/40 to-transparent",
  },
  {
    title: "Automation Engine",
    techniqueName: "INCINERATION CANNON // 焼却砲",
    animeTag: "ONE PUNCH MAN // GENOS",
    powerOutput: "150+ SUITES RUN",
    icon: <Settings className="text-purple-700" size={22} />,
    skills: ["Python Scripting", "Selenium WebDriver", "Playwright", "Appium (Mobile)", "Test Harness Architecture"],
    colorClass: "from-purple-300/40 via-rose-200/40 to-transparent",
  },
  {
    title: "Development Stack",
    techniqueName: "CAPSULE CORP LAB FORGE // カプセル",
    animeTag: "CAPSULE CORP // 技術部",
    powerOutput: "REACT / NEXT HYPERSPEED",
    icon: <Terminal className="text-sky-700" size={22} />,
    skills: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "HTML5 & CSS3"],
    colorClass: "from-sky-300/40 via-amber-200/40 to-transparent",
  },
  {
    title: "Cloud & DevOps",
    techniqueName: "HYPERBOLIC TIME CI/CD // 精神と時",
    animeTag: "DRAGON BALL Z // 時間短縮",
    powerOutput: "1 YEAR IN 1 DAY",
    icon: <Cloud className="text-amber-700" size={22} />,
    skills: ["AWS Basics", "GitHub Actions", "Git Version Control", "CI/CD Integration", "Environment Configs"],
    colorClass: "from-amber-300/40 via-emerald-200/40 to-transparent",
  },
  {
    title: "Enterprise Tools",
    techniqueName: "SCOUTER TACTICAL HUD // スカウター",
    animeTag: "SCOUTER HUD // 索敵",
    powerOutput: "OVER 9000 TELEMETRY",
    icon: <ShieldAlert className="text-rose-700" size={22} />,
    skills: ["Jira Software", "Postman App", "Android Studio (ADB)", "VS Code", "Chrome DevTools"],
    colorClass: "from-rose-300/40 via-sky-200/40 to-transparent",
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="skills" className="py-24 relative bg-[#FAF9F6] overflow-hidden border-t border-amber-200/60">
      {/* Glow spotlight */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-amber-200/30 filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left max-w-3xl">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-amber-800 uppercase mb-2 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span>必殺技マトリクス // TECHNIQUES ARSENAL</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            TECHNICAL ARSENAL
          </h2>
          <p className="text-slate-600 mt-4 text-xs md:text-sm leading-relaxed font-sans font-medium">
            A battle-tested matrix cataloging automated test harnesses, performance testbeds, database auditing tools, and full-stack development technologies.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-400 via-rose-400 to-sky-400 mt-4" />
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="chamfer-corner p-6 border border-amber-200/80 bg-white/90 backdrop-blur-md flex flex-col justify-between hover:border-amber-400 hover:shadow-xl transition-all duration-300 relative group shadow-sm"
            >
              <CornerCrosshairs colorClass="text-amber-500/60" />
              <div>
                {/* Anime Technique Header */}
                <div className="flex items-start justify-between gap-3 mb-4 text-left">
                  <div>
                    <span className="text-[7.5px] font-mono tracking-widest text-slate-500 uppercase font-black block mb-0.5">
                      {category.animeTag}
                    </span>
                    <h3 className="text-sm font-black font-display text-slate-900 leading-tight">
                      {category.title}
                    </h3>
                    <p className="text-[8.5px] font-mono font-bold text-amber-800 tracking-tight mt-1">
                      {category.techniqueName}
                    </p>
                  </div>
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl group-hover:border-amber-300 group-hover:scale-110 transition-all shrink-0 shadow-xs">
                    {category.icon}
                  </div>
                </div>

                {/* Badges list */}
                <div className="flex flex-wrap gap-1.5 text-left mb-4">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[9.5px] px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-700 rounded-lg hover:border-amber-300 hover:text-slate-950 hover:bg-amber-50 transition-all cursor-default flex items-center space-x-1.5 font-medium"
                    >
                      <Check size={9} className="text-amber-600 shrink-0 font-bold" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Power Output Telemetry & Accent Footer */}
              <div>
                <div className="flex items-center justify-between text-[8px] font-mono mb-2 pt-3 border-t border-slate-100">
                  <span className="text-slate-400 font-bold">OUTPUT:</span>
                  <span className="text-amber-900 font-black px-1.5 py-0.5 bg-amber-50 rounded border border-amber-200">
                    {category.powerOutput}
                  </span>
                </div>
                <div className={`h-1.5 w-full bg-gradient-to-r ${category.colorClass} rounded-full`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
