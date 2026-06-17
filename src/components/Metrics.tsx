"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Briefcase, FileSpreadsheet, Database, Cpu, Layers, Landmark } from "lucide-react";

interface MetricItem {
  id: number;
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  isDecimal?: boolean;
}

const metricsData: MetricItem[] = [
  {
    id: 1,
    value: 4,
    suffix: "+",
    label: "Years Experience",
    icon: <Calendar className="text-brand-cyan" size={24} />,
  },
  {
    id: 2,
    value: 8,
    suffix: "+",
    label: "Projects Delivered",
    icon: <Briefcase className="text-brand-blue" size={24} />,
  },
  {
    id: 3,
    value: 150,
    suffix: "+",
    label: "Regression Test Cases",
    icon: <FileSpreadsheet className="text-brand-purple" size={24} />,
  },
  {
    id: 4,
    value: 99.5,
    suffix: "%",
    label: "Database Accuracy",
    icon: <Database className="text-accent-sky" size={24} />,
    isDecimal: true,
  },
  {
    id: 5,
    value: 95,
    suffix: "%",
    label: "Load Testing Success",
    icon: <Cpu className="text-brand-cyan" size={24} />,
  },
  {
    id: 6,
    value: 6,
    suffix: "+",
    label: "Production APIs Tested",
    icon: <Layers className="text-brand-blue" size={24} />,
  },
  {
    id: 7,
    value: 10, // Representing "Millions" as a countdown and then showing "Millions" label
    suffix: "M+",
    label: "Financial Transactions Validated",
    icon: <Landmark className="text-brand-purple" size={24} />,
  },
];

function Counter({ value, isDecimal, duration = 1.5 }: { value: number; isDecimal?: boolean; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalFrames = duration * 60;
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quad formula
      const easeProgress = progress * (2 - progress);
      const currentCount = start + easeProgress * (end - start);

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(isDecimal ? Math.round(currentCount * 10) / 10 : Math.floor(currentCount));
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [isInView, value, isDecimal, duration]);

  return <span ref={ref}>{isDecimal ? count.toFixed(1) : count}</span>;
}

export default function Metrics() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="metrics" className="py-20 relative bg-[#03030d] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {metricsData.map((metric) => (
            <motion.div
              key={metric.id}
              variants={cardVariants}
              className="glass-panel glow-card p-5 md:p-6 rounded-2xl flex flex-col justify-between items-center text-center group border border-slate-900 shadow-xl"
            >
              {/* Icon */}
              <div className="p-3 bg-slate-900/60 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {metric.icon}
              </div>

              {/* Number Counter */}
              <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-display text-white tracking-tight mb-2">
                {metric.label === "Financial Transactions Validated" ? (
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-blue">
                    Millions
                  </span>
                ) : (
                  <>
                    <Counter value={metric.value} isDecimal={metric.isDecimal} />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-blue pl-0.5">
                      {metric.suffix}
                    </span>
                  </>
                )}
              </div>

              {/* Label */}
              <div className="text-xs md:text-sm font-medium text-slate-400 leading-snug">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
