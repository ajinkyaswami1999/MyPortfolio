"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ClipboardList, Send, Activity, Database, Settings, Terminal, Cloud, ShieldAlert } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  colorClass: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Manual & QA Testing",
    icon: <ClipboardList className="text-brand-cyan" size={24} />,
    skills: ["Regression Testing", "Functional Testing", "Smoke Testing", "Sanity Testing", "User Acceptance Testing (UAT)"],
    colorClass: "from-brand-cyan/20 to-brand-blue/5",
  },
  {
    title: "API Verification",
    icon: <Send className="text-brand-blue" size={24} />,
    skills: ["Postman", "REST APIs", "JSON Validation", "Endpoint Routing", "Header Authentication"],
    colorClass: "from-brand-blue/20 to-brand-purple/5",
  },
  {
    title: "Performance Testing",
    icon: <Activity className="text-brand-purple" size={24} />,
    skills: ["Apache JMeter", "Load Testing", "Stress Testing", "Throughput Metrics", "Latency Simulation"],
    colorClass: "from-brand-purple/20 to-brand-cyan/5",
  },
  {
    title: "Database Testing",
    icon: <Database className="text-accent-sky" size={24} />,
    skills: ["MySQL", "SQL Queries", "Relational Mapping", "Transaction Logs", "Data Integrity Audits"],
    colorClass: "from-accent-sky/20 to-brand-blue/5",
  },
  {
    title: "Automation Engine",
    icon: <Settings className="text-brand-cyan" size={24} />,
    skills: ["Python Scripting", "Selenium WebDriver", "Playwright", "Appium (Mobile)", "Test Harness Architecture"],
    colorClass: "from-brand-cyan/20 to-brand-purple/5",
  },
  {
    title: "Development Stack",
    icon: <Terminal className="text-brand-blue" size={24} />,
    skills: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "HTML5 & CSS3"],
    colorClass: "from-brand-blue/20 to-accent-sky/5",
  },
  {
    title: "Cloud & Devops",
    icon: <Cloud className="text-brand-purple" size={24} />,
    skills: ["AWS Basics", "GitHub Actions", "Git Version Control", "CI/CD Integration", "Environment Configs"],
    colorClass: "from-brand-purple/20 to-brand-blue/5",
  },
  {
    title: "Enterprise Tools",
    icon: <ShieldAlert className="text-accent-sky" size={24} />,
    skills: ["Jira Software", "Postman App", "Android Studio (ADB)", "VS Code", "Chrome DevTools"],
    colorClass: "from-accent-sky/20 to-brand-cyan/5",
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
    <section id="skills" className="py-24 relative bg-[#03030d] overflow-hidden">
      {/* Aurora glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full aurora-circle-2 filter blur-[120px] opacity-15" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left max-w-3xl">
          <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase mb-2">My Skillset</span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-cyan to-brand-blue mt-4" />
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
              className="glass-panel glow-card p-6 rounded-2xl border border-slate-900 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2.5 bg-slate-900/80 border border-slate-800 rounded-xl">
                    {category.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-bold font-display text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Badges list */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1.5 bg-slate-950/80 border border-slate-900/80 text-slate-300 rounded-lg hover:border-brand-cyan/25 hover:text-white transition-all cursor-default flex items-center space-x-1.5"
                    >
                      <Check size={10} className="text-brand-cyan shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative accent footer gradient inside card */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${category.colorClass} opacity-40 rounded-full mt-6`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
