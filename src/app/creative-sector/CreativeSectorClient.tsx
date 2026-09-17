"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Box, 
  Palette, 
  Star, 
  ShieldCheck, 
  HeartHandshake, 
  Zap, 
  Globe, 
  Layers, 
  Camera, 
  Aperture, 
  ZoomIn,
  Calculator, 
  ShieldAlert, 
  Sparkles, 
  Search, 
  Wrench, 
  Briefcase,
  ArrowUpRight,
  ExternalLink,
  Cpu,
  Flame,
  Radio,
  Activity,
  Share2,
  Crosshair,
  Award,
  Layers3,
  Sliders,
  CheckCircle2,
  Sparkle,
  Gauge,
  Workflow
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import BackgroundEffects from "@/components/BackgroundEffects";
import CornerCrosshairs from "@/components/CornerCrosshairs";
import DecodeText from "@/components/DecodeText";
import { 
  GithubIcon, 
  LinkedinIcon, 
  InstagramIcon, 
  SnapchatIcon 
} from "@/components/BrandIcons";

// --- Voxelique (Capsule Corp 3D Fabrication Lab) Types & Data ---
interface VoxeliqueSkill {
  title: string;
  japanese: string;
  desc: string;
  metric: string;
  icon: React.ReactNode;
}

const businessSkills: VoxeliqueSkill[] = [
  {
    title: "E-Commerce Web Architecture",
    japanese: "電子商取引網",
    desc: "Engineered the full D2C digital storefront, optimizing checkout validation, cart sessions, inventory databases, and page rendering speeds under 45ms.",
    metric: "LATENCY < 45MS",
    icon: <Globe className="text-cyan-600" size={20} />,
  },
  {
    title: "CAD & Precision Mesh Modeling",
    japanese: "三次元精密設計",
    desc: "Designed custom functional products using parametric CAD, translating organic shapes into watertight, manifold 3D meshes with 0.02mm tolerances.",
    metric: "TOLERANCE ±0.02MM",
    icon: <Palette className="text-purple-600" size={20} />,
  },
  {
    title: "Brand Strategy & Copywriting",
    japanese: "ブランド戦略",
    desc: "Crafted the brand identity, technical product catalogs, marketing materials, and digital advertising campaigns to scale consumer trust and reach.",
    metric: "CTR +38% BOOST",
    icon: <Layers className="text-amber-600" size={20} />,
  },
  {
    title: "D2C Operations & Supply Chain",
    japanese: "物流即応供給",
    desc: "Organized inventory logistics, managed raw material suppliers, resolved customer queries, and enforced strict shock-resistant packaging standards.",
    metric: "100% DEFECT-FREE",
    icon: <HeartHandshake className="text-emerald-600" size={20} />,
  },
];

interface QualityStep {
  step: string;
  title: string;
  japanese: string;
  desc: string;
  stat: string;
  icon: React.ReactNode;
}

const qualitySteps: QualityStep[] = [
  {
    step: "01",
    title: "Slicer Tolerance Calibration",
    japanese: "切削公差校正",
    desc: "Calibrating printing parameters (layer heights, flow rate multipliers, extrusion widths) to ensure physical tolerances remain under 0.05mm deviations.",
    stat: "MICRO-GAP: 0.05MM",
    icon: <Zap size={15} className="text-cyan-600" />,
  },
  {
    step: "02",
    title: "100G Thermal & Bed Profiling",
    japanese: "重力熱均一制御",
    desc: "Dual-zone heatbed leveling and nozzle thermal PID tuning to guarantee first-layer fusion and prevent thermal delamination mid-cycle.",
    stat: "TEMP: 220°C / 60°C",
    icon: <Box size={15} className="text-amber-600" />,
  },
  {
    step: "03",
    title: "Serious Drop-Stress Validation",
    japanese: "本気耐衝撃試験",
    desc: "Subjecting printed structures to Saitama-grade impact drop tests and repetitive shear loads, validating infill density for extreme longevity.",
    stat: "IMPACT LOAD: 150KG",
    icon: <ShieldCheck size={15} className="text-purple-600" />,
  },
];

interface MaterialSpec {
  name: string;
  formula: string;
  extrusion: string;
  bed: string;
  tensile: string;
  useCase: string;
  badgeColor: string;
}

const materialSpecs: MaterialSpec[] = [
  {
    name: "PLA+ Formulation",
    formula: "Polylactic Acid+",
    extrusion: "205°C - 215°C",
    bed: "60°C Glass",
    tensile: "65 MPa",
    useCase: "Display models & low-warp structural prototypes",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300"
  },
  {
    name: "PETG Co-Polyester",
    formula: "Polyethylene Terephthalate",
    extrusion: "235°C - 245°C",
    bed: "80°C Textured",
    tensile: "50 MPa",
    useCase: "Mechanical fixtures, weather-resistant brackets",
    badgeColor: "bg-cyan-100 text-cyan-900 border-cyan-300"
  },
  {
    name: "TPU 95A Elastomer",
    formula: "Thermoplastic Polyurethane",
    extrusion: "220°C - 230°C",
    bed: "50°C Satin",
    tensile: "35 MPa (550% Elong)",
    useCase: "Vibration dampeners, gasket seals, protective skins",
    badgeColor: "bg-rose-100 text-rose-900 border-rose-300"
  },
  {
    name: "Carbon Fiber Nylon",
    formula: "PA-CF Composite",
    extrusion: "260°C - 280°C",
    bed: "95°C Hardened",
    tensile: "110 MPa",
    useCase: "High-rigidity end-use parts, drone frames",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300"
  }
];

// --- Toolique (Hero Association Weaponry & Utility Arsenal) Types & Data ---
interface ToolModule {
  title: string;
  japanese: string;
  desc: string;
  badge: string;
  icon: React.ReactNode;
  tools: string[];
}

const toolCategories: ToolModule[] = [
  {
    title: "Financial & Tax Calculators",
    japanese: "計算兵装",
    desc: "High-precision utilities for instantaneous mathematical conversions, margin splits, and dynamic GST bracket audits.",
    badge: "SPEED: 0.1MS",
    icon: <Calculator className="text-amber-600" size={20} />,
    tools: ["GST/Tax Slab Auditors", "Compound Margin Splits", "Merchant Commission Charts", "Loan Tenacity Gauges"]
  },
  {
    title: "QA Combat Utilities",
    japanese: "品質検証",
    desc: "Mission-critical testing helpers engineered to accelerate boundary validation, regex parsing, and schema assertion.",
    badge: "ZERO FALSE POSITIVES",
    icon: <ShieldAlert className="text-cyan-600" size={20} />,
    tools: ["Boundary Value Generator", "JSON Schema Verifier", "Regex Pattern Validator", "ASCII Ledger Audit Tool"]
  },
  {
    title: "Productivity Accelerators",
    japanese: "超速生産",
    desc: "Everyday code formatters and encoding conduits designed to eliminate repetitive developer friction.",
    badge: "FRICTIONLESS",
    icon: <Sparkles className="text-rose-500" size={20} />,
    tools: ["Markdown Snippet Maker", "Clipboard JSON Beautifier", "ISO Time Delta Tracker", "Base64 Encoder Node"]
  },
  {
    title: "SEO Scouter Radar",
    japanese: "探知レーダー",
    desc: "Search engine reconnaissance sensors engineered to maximize organic discovery, metadata rank, and crawl health.",
    badge: "RANK 1 SCANNER",
    icon: <Search className="text-purple-600" size={20} />,
    tools: ["Canonical Redirect Checker", "Meta tag Character Counter", "Sitemap Ping Automator", "Keyword Density Analyzer"]
  },
  {
    title: "3D Engineering Rig",
    japanese: "立体工学",
    desc: "Physical manufacturing calculations for rapid extrusion estimates, mechanical clearances, and filament weights.",
    badge: "±0.01MM TOLERANCE",
    icon: <Wrench className="text-orange-500" size={20} />,
    tools: ["Filament Weight Converter", "Slicer Extruder Time Grid", "Dimension Snap Tolerances", "Nozzle Melt Heat Ratio"]
  },
  {
    title: "Settlement & Ledger Reconciler",
    japanese: "決算監査",
    desc: "Automated auditing checks built to reconcile dynamic billing balances, fee breakdowns, and payout schedules.",
    badge: "100% RECONCILED",
    icon: <Briefcase className="text-emerald-600" size={20} />,
    tools: ["Settlement Refund Tracker", "Invoice Claim Compliance", "GST Balance Sheet Checker", "Dynamic Commission Auditor"]
  }
];

// --- Photography (Scouter Optical Recon) Types & Data ---
interface PhotoItem {
  id: number;
  title: string;
  category: string;
  japanese: string;
  specs: string;
  shutterPower: string;
  description: string;
  gradient: string;
}

const mockPhotos: PhotoItem[] = [
  {
    id: 1,
    title: "Jawa Bobber Exhaust Manifold",
    category: "Automotive Macro",
    japanese: "排気管熱変色",
    specs: "90mm • f/2.8 • 1/160s • ISO 100",
    shutterPower: "APERTURE: f/2.8 // MACRO",
    description: "Extreme close-up macro capturing brushed metal striations and thermal blue discoloration across the Bobber exhaust piping.",
    gradient: "from-amber-200/50 via-orange-100/40 to-amber-50"
  },
  {
    id: 2,
    title: "Slicer Layer Gaps & Geometries",
    category: "3D Print Macro",
    japanese: "積層微細幾何学",
    specs: "50mm • f/5.6 • 1/80s • ISO 200",
    shutterPower: "LAYER: 0.12MM RESOLUTION",
    description: "Extruder tolerance validation macro, illustrating individual 0.12mm filament layers catching ambient workshop laboratory light.",
    gradient: "from-sky-200/50 via-cyan-100/40 to-blue-50"
  },
  {
    id: 3,
    title: "Gurugram Highway Light Trails",
    category: "Long Exposure",
    japanese: "高速光跡追跡",
    specs: "24mm • f/11 • 8.0s • ISO 50",
    shutterPower: "SHUTTER: 8.0 SECONDS",
    description: "Long shutter sweep mapping speed loops along the central expressway during night peak transit hours.",
    gradient: "from-orange-200/50 via-amber-100/40 to-yellow-50"
  },
  {
    id: 4,
    title: "Street Shadows & Steel Grids",
    category: "Architecture",
    japanese: "陰影構造骨格",
    specs: "35mm • f/1.8 • 1/1000s • ISO 100",
    shutterPower: "SHUTTER: 1/1000 SEC",
    description: "High-contrast monochrome silhouette tracing vertical grids and sharp shadow boundaries along industrial pillars.",
    gradient: "from-slate-200/60 via-slate-100/40 to-white"
  },
  {
    id: 5,
    title: "Raw Filament Extrusion Node",
    category: "Thermal Tech",
    japanese: "溶解熱伝導点",
    specs: "90mm • f/4.0 • 1/125s • ISO 400",
    shutterPower: "TEMP: 220°C NOZZLE",
    description: "Capturing the nozzle melt zone at 220°C, highlighting molten polymer refractions and textured spring steel bed reflection.",
    gradient: "from-purple-200/50 via-violet-100/40 to-indigo-50"
  },
  {
    id: 6,
    title: "Jawa Fuel Tank Profile",
    category: "Automotive Design",
    japanese: "曲線燃料タンク",
    specs: "50mm • f/2.0 • 1/250s • ISO 100",
    shutterPower: "CONTRAST: MIRROR CHROME",
    description: "Specular reflections on metallic charcoal paint, tracing vintage typography curves of the Jawa brand crest.",
    gradient: "from-stone-300/40 via-amber-100/40 to-stone-50"
  }
];

// --- Command Social Media Deck Types & Data ---
interface SocialChannel {
  id: string;
  name: string;
  japanese: string;
  handle: string;
  description: string;
  url: string;
  category: string;
  icon: React.ReactNode;
  badge: string;
  colorClass: string;
  btnClass: string;
}

const socialChannels: SocialChannel[] = [
  {
    id: "insta-photo",
    name: "Theasterlens Photography",
    japanese: "写真観測フィード",
    handle: "@theasterlens",
    description: "Macro mechanical textures, automotive captures, and wildlife reconnaissance expedition logs shot on Nikon Z 30.",
    url: "https://www.instagram.com/theasterlens/",
    category: "Photography & Macro",
    icon: <Camera className="text-orange-600" size={20} />,
    badge: "EXPEDITION OPTICS",
    colorClass: "border-orange-200/80 bg-orange-50/50 hover:border-orange-400",
    btnClass: "bg-orange-100/80 hover:bg-orange-500 text-orange-950 hover:text-white border-orange-300"
  },
  {
    id: "insta-voxelique",
    name: "Voxelique 3D Fabrication",
    japanese: "立体造形工房",
    handle: "@voxelique",
    description: "Custom additive manufacturing prints, CAD design time-lapses, and functional product engineering showcase.",
    url: "https://www.instagram.com/voxelique/",
    category: "3D Print Lab",
    icon: <Box className="text-purple-600" size={20} />,
    badge: "CAPSULE CORP LAB",
    colorClass: "border-purple-200/80 bg-purple-50/50 hover:border-purple-400",
    btnClass: "bg-purple-100/80 hover:bg-purple-600 text-purple-950 hover:text-white border-purple-300"
  },
  {
    id: "insta-personal",
    name: "Personal Instagram",
    japanese: "日常開発記録",
    handle: "@ajinkyaswami.in",
    description: "Personal lifestyle updates, developer chronicles, behind-the-scenes engineering experiments and thoughts.",
    url: "https://www.instagram.com/ajinkyaswami.in/",
    category: "Personal Identity",
    icon: <InstagramIcon className="text-pink-600" size={20} />,
    badge: "HERO LOGS",
    colorClass: "border-pink-200/80 bg-pink-50/50 hover:border-pink-400",
    btnClass: "bg-pink-100/80 hover:bg-pink-500 text-pink-950 hover:text-white border-pink-300"
  },
  {
    id: "linkedin",
    name: "LinkedIn Professional Mesh",
    japanese: "職務通信網",
    handle: "in/ajinkya-swami",
    description: "QA Automation Lead insights, FinTech test architecture, zero-defect release frameworks and professional network.",
    url: "https://www.linkedin.com/in/ajinkya-swami/",
    category: "Professional Mesh",
    icon: <LinkedinIcon className="text-sky-600" size={20} />,
    badge: "S-CLASS QA LEAD",
    colorClass: "border-sky-200/80 bg-sky-50/50 hover:border-sky-400",
    btnClass: "bg-sky-100/80 hover:bg-sky-600 text-sky-950 hover:text-white border-sky-300"
  },
  {
    id: "github",
    name: "GitHub Repositories",
    japanese: "暗号化コード倉庫",
    handle: "@ajinkyaswami1999",
    description: "Open-source test frameworks, CI/CD automation pipelines, portfolio codebases, and developer tools.",
    url: "https://github.com/ajinkyaswami1999",
    category: "Code & Automation",
    icon: <GithubIcon className="text-slate-800" size={20} />,
    badge: "OPEN SOURCE",
    colorClass: "border-slate-200/80 bg-slate-50/50 hover:border-slate-400",
    btnClass: "bg-slate-100/80 hover:bg-slate-800 text-slate-900 hover:text-white border-slate-300"
  },
  {
    id: "snapchat",
    name: "Snapchat Direct Link",
    japanese: "即時交信回線",
    handle: "ajinkyaswami",
    description: "Instant informal transmission link, rapid casual updates, and quick mobile direct pings.",
    url: "https://snapchat.com/t/wgcxkncY",
    category: "Instant Comms",
    icon: <SnapchatIcon className="text-amber-500" size={20} />,
    badge: "DIRECT LINK",
    colorClass: "border-amber-200/80 bg-amber-50/50 hover:border-amber-400",
    btnClass: "bg-amber-100/80 hover:bg-amber-500 text-amber-950 hover:text-slate-950 border-amber-300"
  }
];

export default function CreativeSectorClient() {
  const [activeTab, setActiveTab] = useState<"fabrication" | "toolkit" | "photography">("fabrication");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 85, damping: 15 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6] text-slate-800 selection:bg-amber-100 selection:text-amber-900 overflow-hidden relative">
      <Navbar />

      {/* Global DBZ & OPM Anime Background Engine (Toriyama clouds, manga speedlines, ki aura, shockwaves) */}
      <BackgroundEffects />

      {/* Contextual Tactical HUD Overlay per Active Tab */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <AnimatePresence mode="wait">
          {activeTab === "fabrication" && (
            <motion.div
              key="fabrication-hud"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-35" />
              <div className="absolute top-28 right-8 font-mono text-[9px] text-purple-900/60 tracking-widest text-right space-y-1 hidden md:block">
                <div>CAPSULE CORP R&D // FABRICATION DIVISION</div>
                <div>BUILD PLATE: TEI_TEXTURED SPRING STEEL</div>
                <div>NOZZLE: 220°C // BED: 60°C // 100G STABLE</div>
                <div>CAD VERIFICATION: MANIFOLD WATERTIGHT (OK)</div>
              </div>
            </motion.div>
          )}

          {activeTab === "toolkit" && (
            <motion.div
              key="toolkit-hud"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-35" />
              <div className="absolute top-28 right-8 font-mono text-[9px] text-amber-900/60 tracking-widest text-right space-y-1 hidden md:block">
                <div>HERO ASSOCIATION // WEAPONS & TACTICAL ARSENAL</div>
                <div>PROCESSING LATENCY: 0.1MS (INSTANTANEOUS)</div>
                <div>S-CLASS UTILITY MATRIX: 250+ ACTIVE TOOLS</div>
                <div>SYSTEM INTEGRITY: 100% ZERO-ERROR</div>
              </div>
            </motion.div>
          )}

          {activeTab === "photography" && (
            <motion.div
              key="photography-hud"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              {/* Scouter Viewfinder Framing Grids */}
              <div className="absolute top-1/4 left-0 w-full h-px bg-cyan-300/30" />
              <div className="absolute top-3/4 left-0 w-full h-px bg-cyan-300/30" />
              <div className="absolute left-1/4 top-0 h-full w-px bg-cyan-300/30" />
              <div className="absolute right-1/4 top-0 h-full w-px bg-cyan-300/30" />
              
              {/* Central Scouter Target Reticle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-cyan-400/25 rounded-full flex items-center justify-center pointer-events-none">
                <div className="w-3 h-3 bg-amber-500/40 rounded-full animate-ping" />
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-amber-500/70" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-amber-500/70" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-amber-500/70" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-500/70" />
              </div>

              <div className="absolute top-28 right-8 font-mono text-[9px] text-cyan-900/60 tracking-widest text-right space-y-1 hidden md:block">
                <div>SCOUTER OPTICAL RECON // 索敵写真・観測</div>
                <div>SENSOR: NIKON Z 30 APS-C DX-FORMAT</div>
                <div>EXIF APERTURE: f/2.8 MACRO // 1/160s</div>
                <div>OPTICAL LOCK: ACTIVE // ALL TARGETS TRACKED</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <PageWrapper>
        <main className="flex-1 container mx-auto px-4 md:px-8 pt-32 pb-24 relative z-10">
          
          {/* Section Header & Anime Mission Readout */}
          <div className="max-w-5xl mb-12 text-left">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-amber-900 uppercase bg-amber-100/90 px-3 py-1 rounded-full border border-amber-300/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span>創造部門 // S-CLASS SPECIAL VENTURES • CAPSULE CORP COLLABORATION</span>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-900 border border-cyan-300 font-bold">
                DRAGON RADAR: 324.80 MHz
              </span>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-900 border border-rose-300 font-black">
                SCOUTER POWER: OVER 9,000!!
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black font-display text-slate-900 tracking-tight flex items-center gap-3">
                <DecodeText text="CREATIVE SECTOR" />
              </h1>
              <span className="text-xs md:text-sm font-mono tracking-widest text-amber-800 font-bold">
                創 造 部 門 (CREATIVE ARCHITECTURE)
              </span>
            </div>

            <p className="text-slate-600 mt-4 text-xs md:text-sm leading-relaxed max-w-3xl font-sans">
              Central data command hosting additive 3D fabrication engineering (<strong>Voxelique</strong>), Hero Association tactical developer utilities (<strong>Toolique</strong>), high-resolution Scouter optical logs (<strong>@theasterlens</strong>), and the interconnected creator network. Explore the specialized divisions below.
            </p>

            {/* Quick Telemetry Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
              <div className="bg-white/85 border border-purple-200/80 p-2.5 rounded-xl shadow-xs">
                <div className="text-[9px] font-mono uppercase text-purple-700 font-bold">3D Tolerance</div>
                <div className="text-xs font-black text-slate-900 font-mono">±0.05mm Micro-Gap</div>
              </div>
              <div className="bg-white/85 border border-amber-200/80 p-2.5 rounded-xl shadow-xs">
                <div className="text-[9px] font-mono uppercase text-amber-700 font-bold">Arsenal Modules</div>
                <div className="text-xs font-black text-slate-900 font-mono">250+ Free Web Tools</div>
              </div>
              <div className="bg-white/85 border border-cyan-200/80 p-2.5 rounded-xl shadow-xs">
                <div className="text-[9px] font-mono uppercase text-cyan-700 font-bold">Optical Sensor</div>
                <div className="text-xs font-black text-slate-900 font-mono">Nikon Z 30 DX</div>
              </div>
              <div className="bg-white/85 border border-rose-200/80 p-2.5 rounded-xl shadow-xs">
                <div className="text-[9px] font-mono uppercase text-rose-700 font-bold">Comms Grid</div>
                <div className="text-xs font-black text-slate-900 font-mono">6 Connected Links</div>
              </div>
            </div>

            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 via-amber-400 to-cyan-500 mt-6 rounded-full" />
          </div>

          {/* Selector Switch Console (Anime Division Switcher) */}
          <div className="flex flex-wrap gap-3 mb-12 pb-4 border-b border-amber-200/80 justify-start">
            <button
              onClick={() => setActiveTab("fabrication")}
              className={`text-xs font-mono tracking-wider uppercase font-bold px-4 py-3 border rounded-xl transition-all flex items-center space-x-2.5 cursor-pointer shadow-xs ${
                activeTab === "fabrication"
                  ? "border-purple-400 text-purple-950 bg-purple-100/90 shadow-sm ring-2 ring-purple-300/60"
                  : "border-slate-200 text-slate-600 bg-white/85 hover:text-slate-900 hover:border-purple-300"
              }`}
            >
              <Box size={16} className={activeTab === "fabrication" ? "text-purple-600" : "text-slate-400"} />
              <div className="text-left">
                <div className="text-[11px] font-bold">01 // CAPSULE CORP 3D LAB (Voxelique)</div>
                <div className="text-[8.5px] text-purple-700 font-normal">カプセル立体造形 // 3D PRINTING & CAD</div>
              </div>
            </button>

            <button
              onClick={() => setActiveTab("toolkit")}
              className={`text-xs font-mono tracking-wider uppercase font-bold px-4 py-3 border rounded-xl transition-all flex items-center space-x-2.5 cursor-pointer shadow-xs ${
                activeTab === "toolkit"
                  ? "border-amber-400 text-amber-950 bg-amber-100/90 shadow-sm ring-2 ring-amber-300/60"
                  : "border-slate-200 text-slate-600 bg-white/85 hover:text-slate-900 hover:border-amber-300"
              }`}
            >
              <Zap size={16} className={activeTab === "toolkit" ? "text-amber-600" : "text-slate-400"} />
              <div className="text-left">
                <div className="text-[11px] font-bold">02 // HERO TECH ARSENAL (Toolique)</div>
                <div className="text-[8.5px] text-amber-700 font-normal">必殺計算兵装 // 250+ FREE ONLINE TOOLS</div>
              </div>
            </button>

            <button
              onClick={() => setActiveTab("photography")}
              className={`text-xs font-mono tracking-wider uppercase font-bold px-4 py-3 border rounded-xl transition-all flex items-center space-x-2.5 cursor-pointer shadow-xs ${
                activeTab === "photography"
                  ? "border-cyan-400 text-cyan-950 bg-cyan-100/90 shadow-sm ring-2 ring-cyan-300/60"
                  : "border-slate-200 text-slate-600 bg-white/85 hover:text-slate-900 hover:border-cyan-300"
              }`}
            >
              <Camera size={16} className={activeTab === "photography" ? "text-cyan-600" : "text-slate-400"} />
              <div className="text-left">
                <div className="text-[11px] font-bold">03 // SCOUTER OPTICS & SOCIALS</div>
                <div className="text-[8.5px] text-cyan-700 font-normal">索敵写真・全通信網 // @theasterlens & HUBS</div>
              </div>
            </button>
          </div>

          {/* Active Tab Panel Rendering */}
          <div className="text-left font-sans">
            <AnimatePresence mode="wait">
              
              {/* TAB 1: CAPSULE CORP 3D FABRICATION LAB (Voxelique) */}
              {activeTab === "fabrication" && (
                <motion.div
                  key="fabrication-panel"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="space-y-12"
                >
                  {/* Division Banner */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-purple-50/80 border border-purple-200/80 rounded-2xl gap-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-purple-100 border border-purple-300 rounded-xl text-purple-700">
                        <Box size={22} />
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-purple-900 uppercase">
                          CAPSULE CORP 3D FABRICATION LAB // カプセル立体造形
                        </div>
                        <div className="text-[11px] text-slate-600">
                          Direct-To-Consumer additive engineering, parametric CAD meshes, and rapid micro-prototyping.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[10px] font-bold">
                      <a
                        href="https://www.voxelique.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all flex items-center gap-1.5 shadow-xs"
                      >
                        <span>Storefront (voxelique.com)</span>
                        <ArrowUpRight size={12} />
                      </a>
                      <a
                        href="https://www.instagram.com/voxelique/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 bg-white hover:bg-purple-50 text-purple-900 border border-purple-300 rounded-lg transition-all flex items-center gap-1.5 shadow-xs"
                      >
                        <InstagramIcon size={12} />
                        <span>@voxelique</span>
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Brand Story & Founder's Vision */}
                    <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
                      <div className="glass-panel p-6 md:p-8 rounded-3xl border border-purple-200/90 bg-white/90 shadow-md relative overflow-hidden">
                        <CornerCrosshairs colorClass="text-purple-400/50" />
                        
                        <div className="flex items-center justify-between mb-4">
                          <h2 className="text-lg md:text-xl font-bold font-display text-slate-900 flex items-center gap-3">
                            <Star className="text-purple-600 fill-purple-100" size={20} />
                            <span>The Voxelique Story // 創設理念</span>
                          </h2>
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-purple-100 text-purple-900 border border-purple-300 font-bold">
                            FOUNDER & MAKER
                          </span>
                        </div>

                        <div className="space-y-4 text-slate-600 text-xs md:text-sm leading-relaxed text-left font-sans">
                          <p>
                            Voxelique emerged from the belief that 3D printing should transcend hobbyist novelties into <strong>industrial-grade precision consumer manufacturing</strong>. Drawing inspiration from Akira Toriyama&apos;s Capsule Corporation philosophy, our mission is to compress sophisticated mechanical function into compact, aesthetically flawless physical products.
                          </p>
                          <p>
                            As the sole founder and QA engineer, I built every single layer of the business: from engineering the headless Next.js e-commerce storefront with sub-45ms latencies, to dialing in extrusion flow multipliers on dual-drive direct extruders, calibrating FDM/SLA slicers for 0.05mm dimensional tolerances, and formulating shock-resistant D2C distribution workflows.
                          </p>
                          <p className="text-slate-700 font-medium">
                            Every item that leaves the Voxelique print bed undergoes rigorous drop-shock loading, thermal warp validation, and tactile inspection before arriving at a customer&apos;s door.
                          </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-purple-100 font-mono text-[10px] font-bold">
                          <a
                            href="https://www.voxelique.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1.5 px-4 py-2.5 bg-purple-50 hover:bg-purple-100 border border-purple-300 text-purple-950 rounded-xl transition-all cursor-pointer shadow-xs"
                          >
                            <Box size={14} className="text-purple-600" />
                            <span>Visit Official Storefront</span>
                            <ArrowUpRight size={12} className="text-purple-600" />
                          </a>
                          <a
                            href="https://www.instagram.com/voxelique/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1.5 px-4 py-2.5 bg-white hover:bg-purple-50 border border-purple-200 text-slate-800 hover:text-purple-900 rounded-xl transition-all cursor-pointer shadow-xs"
                          >
                            <InstagramIcon size={14} className="text-purple-600" />
                            <span>Instagram @voxelique</span>
                            <ArrowUpRight size={12} className="text-purple-400" />
                          </a>
                        </div>
                      </div>

                      {/* Capabilities Grid */}
                      <div>
                        <div className="flex items-center justify-between mb-4 pl-1">
                          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-700 font-bold flex items-center gap-2">
                            <Workflow size={14} className="text-purple-600" />
                            <span>Core Engineering & Business Modules</span>
                          </h2>
                          <span className="text-[9px] font-mono text-purple-700 font-semibold">4 CAPABILITIES // 0 FAILS</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {businessSkills.map((skill) => (
                            <div
                              key={skill.title}
                              className="glass-panel p-5 rounded-2xl border border-purple-200/80 bg-white/90 hover:border-purple-400 transition-all flex flex-col justify-between shadow-sm hover:shadow-md relative group"
                            >
                              <div>
                                <div className="flex items-center justify-between mb-3">
                                  <div className="p-2.5 bg-purple-50 border border-purple-200 rounded-xl group-hover:bg-purple-100 transition-colors">
                                    {skill.icon}
                                  </div>
                                  <span className="text-[8.5px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-bold">
                                    {skill.metric}
                                  </span>
                                </div>
                                <div className="text-[9px] font-mono text-purple-700 font-semibold mb-0.5">
                                  {skill.japanese}
                                </div>
                                <h3 className="text-xs md:text-sm font-bold font-display text-slate-900 mb-1.5">
                                  {skill.title}
                                </h3>
                                <p className="text-slate-600 text-[11px] leading-relaxed font-sans text-left">
                                  {skill.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Quality Steps & Material Spec Matrix */}
                    <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
                      
                      {/* SSJ Precision Tolerance Protocol */}
                      <div className="glass-panel p-6 md:p-7 rounded-3xl border border-purple-200/90 bg-purple-50/70 relative overflow-hidden shadow-md">
                        <CornerCrosshairs colorClass="text-purple-400/60" />
                        <div className="flex items-center justify-between mb-4">
                          <h2 className="text-base md:text-lg font-bold font-display text-slate-900 flex items-center gap-2.5">
                            <ShieldCheck className="text-purple-600" size={20} />
                            <span>SSJ Tolerance Protocol</span>
                          </h2>
                          <span className="text-[8.5px] font-mono px-2 py-0.5 rounded bg-purple-200/80 text-purple-900 font-black">
                            QA ZERO-DEFECT
                          </span>
                        </div>
                        <p className="text-slate-600 text-xs leading-relaxed mb-5 text-left font-sans">
                          Rigorous software QA boundary principles applied to physical additive manufacturing clearances and thermodynamic stresses.
                        </p>

                        <div className="space-y-3">
                          {qualitySteps.map((step) => (
                            <div
                              key={step.title}
                              className="flex items-start gap-3 bg-white/95 p-3.5 border border-purple-200/80 rounded-xl text-left shadow-xs hover:border-purple-300 transition-colors"
                            >
                              <div className="p-2 bg-purple-100/70 rounded-lg border border-purple-200 shrink-0 mt-0.5 text-purple-700">
                                {step.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-1">
                                  <div className="text-[9px] font-mono font-bold text-purple-800 uppercase">
                                    PHASE {step.step} // {step.japanese}
                                  </div>
                                  <span className="text-[8px] font-mono px-1.5 py-0.2 bg-amber-100 text-amber-900 rounded font-bold">
                                    {step.stat}
                                  </span>
                                </div>
                                <h3 className="text-xs font-bold text-slate-900 mb-0.5 text-left">
                                  {step.title}
                                </h3>
                                <p className="text-[11px] text-slate-600 leading-normal text-left">
                                  {step.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Capsule Corp Lab Material Spec Sheet */}
                      <div className="glass-panel p-6 border border-purple-200/90 bg-white/90 rounded-3xl shadow-sm relative">
                        <div className="flex items-center justify-between mb-4">
                          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-800 font-bold flex items-center gap-2">
                            <Layers3 size={14} className="text-purple-600" />
                            <span>Material Spec Matrix</span>
                          </h2>
                          <span className="text-[8.5px] font-mono text-purple-700 font-bold">4 FORMULATIONS</span>
                        </div>

                        <div className="space-y-3 font-mono text-[10px]">
                          {materialSpecs.map((mat) => (
                            <div key={mat.name} className="p-3 bg-slate-50/70 border border-slate-200/80 rounded-xl space-y-1.5">
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-slate-900">{mat.name}</span>
                                <span className={`text-[8px] font-mono px-2 py-0.5 rounded border font-bold ${mat.badgeColor}`}>
                                  {mat.formula}
                                </span>
                              </div>
                              <div className="flex justify-between text-slate-600 text-[9.5px]">
                                <span>Thermal: {mat.extrusion} / Bed {mat.bed}</span>
                                <span className="text-purple-800 font-bold">Tensile: {mat.tensile}</span>
                              </div>
                              <div className="text-[9px] text-slate-500 italic">
                                &gt; {mat.useCase}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: HERO ASSOCIATION TECH ARSENAL (Toolique) */}
              {activeTab === "toolkit" && (
                <motion.div
                  key="toolkit-panel"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="space-y-12"
                >
                  {/* Division Banner */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-amber-50/80 border border-amber-200/80 rounded-2xl gap-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-amber-100 border border-amber-300 rounded-xl text-amber-700">
                        <Zap size={22} />
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-amber-900 uppercase">
                          HERO TECH ARSENAL // 必殺計算兵装 (Toolique)
                        </div>
                        <div className="text-[11px] text-slate-600">
                          Genos-grade calculation power: 250+ free, client-side, zero-login developer, QA, and financial tools.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[10px] font-bold">
                      <a
                        href="https://www.toolique.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-lg transition-all flex items-center gap-1.5 shadow-xs font-black"
                      >
                        <span>Launch Toolique Arsenal</span>
                        <ArrowUpRight size={12} />
                      </a>
                    </div>
                  </div>

                  {/* 6 Tactical Arsenal Modules */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {toolCategories.map((cat) => (
                      <motion.div
                        key={cat.title}
                        variants={itemVariants}
                        className="glass-panel p-6 rounded-2xl border border-amber-200/90 bg-white/90 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group shadow-md hover:shadow-lg relative overflow-hidden"
                      >
                        <CornerCrosshairs colorClass="text-amber-400/40" />
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 font-bold">
                              {cat.badge}
                            </span>
                            <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-xl group-hover:border-amber-400 transition-colors">
                              {cat.icon}
                            </div>
                          </div>

                          <div className="text-[9px] font-mono text-amber-700 font-bold mb-1">
                            {cat.japanese}
                          </div>

                          <h3 className="text-base font-extrabold font-display text-slate-900 mb-2">
                            {cat.title}
                          </h3>

                          <p className="text-xs text-slate-600 leading-relaxed mb-5 text-left font-sans">
                            {cat.desc}
                          </p>

                          <div className="space-y-2 border-t border-amber-100 pt-4 text-left">
                            <div className="text-[9px] font-mono uppercase text-slate-400 font-bold tracking-wider mb-2">
                              Tactical Utilities:
                            </div>
                            {cat.tools.map((tool) => (
                              <div key={tool} className="flex items-center justify-between group/item cursor-pointer py-0.5">
                                <span className="text-xs text-slate-700 group-hover/item:text-amber-800 transition-colors font-mono">
                                  ⚡ {tool}
                                </span>
                                <ArrowUpRight size={12} className="text-slate-400 group-hover/item:text-amber-600 transition-colors" />
                              </div>
                            ))}
                          </div>
                        </div>

                        <a
                          href="https://www.toolique.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 w-full flex items-center justify-center space-x-1.5 py-2.5 bg-amber-50 hover:bg-amber-500 border border-amber-300 hover:border-amber-500 text-[10px] font-mono uppercase tracking-wider font-bold text-amber-950 hover:text-slate-950 rounded-xl transition-all cursor-pointer shadow-xs"
                        >
                          <span>Launch {cat.title.split(" ")[0]} Suite</span>
                          <ArrowUpRight size={12} className="text-amber-800" />
                        </a>
                      </motion.div>
                    ))}
                  </div>

                  {/* Toolique Hero CTA Banner */}
                  <div className="p-8 bg-gradient-to-r from-amber-100/90 via-orange-50/80 to-amber-100/90 border border-amber-300/80 rounded-3xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 shadow-md relative overflow-hidden">
                    <CornerCrosshairs colorClass="text-amber-500/50" />
                    <div>
                      <div className="inline-flex items-center gap-2 text-[10px] font-mono text-amber-900 font-bold uppercase mb-1">
                        <Sparkle size={14} className="text-amber-600" />
                        <span>ZERO COOKIES • CLIENT-SIDE EVALUATION • INSTANT RESULTS</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-black font-display text-slate-900">
                        Ready to compute at Serious Punch velocity?
                      </h3>
                      <p className="text-xs md:text-sm text-slate-600 mt-1 max-w-xl">
                        Open the full Toolique suite of 250+ free online tools to run financial reconciliations, QA assertions, and 3D print estimates directly in your browser.
                      </p>
                    </div>
                    <a
                      href="https://www.toolique.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-mono text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2 shrink-0 cursor-pointer"
                    >
                      <span>Explore toolique.in</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: SCOUTER OPTICS & COMMAND SOCIAL MEDIA DECK */}
              {activeTab === "photography" && (
                <motion.div
                  key="photography-panel"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="space-y-16"
                >
                  {/* Division Banner */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-cyan-50/80 border border-cyan-200/80 rounded-2xl gap-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-cyan-100 border border-cyan-300 rounded-xl text-cyan-700">
                        <Camera size={22} />
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-cyan-900 uppercase">
                          SCOUTER OPTICS & RECONNAISSANCE // 索敵写真・観測 (@theasterlens)
                        </div>
                        <div className="text-[11px] text-slate-600">
                          Macro automotive metallurgy, industrial geometry, and high-contrast expedition shutter logs.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[10px] font-bold">
                      <a
                        href="https://www.instagram.com/theasterlens/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-all flex items-center gap-1.5 shadow-xs"
                      >
                        <InstagramIcon size={12} />
                        <span>Instagram @theasterlens</span>
                        <ArrowUpRight size={12} />
                      </a>
                    </div>
                  </div>

                  {/* Scouter Camera Spec Sheet */}
                  <motion.div
                    variants={itemVariants}
                    className="glass-panel p-6 md:p-8 rounded-3xl border border-cyan-200/90 max-w-5xl bg-white/90 shadow-md relative overflow-hidden"
                  >
                    <CornerCrosshairs colorClass="text-cyan-400/60" />
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-orange-100 border border-orange-300 rounded-xl text-orange-600">
                          <Camera size={20} />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold font-display text-slate-900 uppercase tracking-wide">
                            SCOUTER TELEMETRY // OPTICAL EXIF CALIBRATION
                          </h3>
                          <span className="text-[9px] font-mono text-cyan-800">
                            索敵センサー諸元 • NIKON Z-MOUNT RIG
                          </span>
                        </div>
                      </div>
                      <span className="text-[9px] font-mono px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 border border-cyan-300 font-bold">
                        DX MIRRORLESS SENSOR ACTIVE
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs text-slate-600 text-left">
                      <div className="p-4 bg-cyan-50/70 border border-cyan-200/80 rounded-2xl">
                        <span className="text-cyan-800 block text-[9px] uppercase tracking-wider mb-1 font-bold">Primary Optical Body</span>
                        <span className="text-slate-900 font-black text-sm">Nikon Z 30</span>
                        <span className="text-slate-500 block mt-1 text-[9px]">APS-C DX CMOS 20.9 MP • Hybrid Phase-AF</span>
                      </div>
                      <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl">
                        <span className="text-amber-800 block text-[9px] uppercase tracking-wider mb-1 font-bold">Macro Glass Array</span>
                        <span className="text-slate-900 font-black text-sm">90mm Macro f/2.8</span>
                        <span className="text-slate-500 block mt-1 text-[9px]">35mm Prime f/1.4 | 24-70mm f/2.8 S-Line</span>
                      </div>
                      <div className="p-4 bg-rose-50/70 border border-rose-200/80 rounded-2xl">
                        <span className="text-rose-800 block text-[9px] uppercase tracking-wider mb-1 font-bold">Aesthetic Focus</span>
                        <span className="text-slate-900 font-black text-sm">Mechanical Macro</span>
                        <span className="text-slate-500 block mt-1 text-[9px]">Brushed metals, heat tints & monochrome contrast</span>
                      </div>
                      <div className="p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl flex flex-col justify-between items-start">
                        <div>
                          <span className="text-emerald-800 block text-[9px] uppercase tracking-wider mb-1 font-bold">Instagram Stream</span>
                          <span className="text-slate-900 font-black text-sm">@theasterlens</span>
                          <span className="text-slate-500 block mt-1 text-[9px]">Automotive & motorcycle logs</span>
                        </div>
                        <a
                          href="https://www.instagram.com/theasterlens/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 flex items-center space-x-1.5 text-[10px] font-mono font-bold text-emerald-800 hover:text-emerald-950 transition-colors cursor-pointer"
                        >
                          <span>Open Live Feed</span>
                          <ArrowUpRight size={12} />
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* 6 Scouter-Bracketed Photo Recon Cards */}
                  <div>
                    <div className="flex items-center justify-between mb-6 pl-1">
                      <h2 className="text-xs font-mono uppercase tracking-widest text-slate-700 font-bold flex items-center gap-2">
                        <Crosshair size={15} className="text-cyan-600" />
                        <span>Field Reconnaissance Gallery // 観測写真標本</span>
                      </h2>
                      <span className="text-[9px] font-mono text-cyan-800 font-bold">6 ARCHIVED FRAMES</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {mockPhotos.map((photo) => (
                        <motion.div
                          key={photo.id}
                          variants={itemVariants}
                          className="glass-panel rounded-2xl border border-cyan-200/80 overflow-hidden flex flex-col justify-between group shadow-md hover:border-cyan-400 transition-all duration-300 bg-white/90 relative"
                        >
                          <CornerCrosshairs colorClass="text-cyan-400/50" />
                          <div className={`aspect-[4/3] w-full bg-gradient-to-br ${photo.gradient} relative overflow-hidden flex items-center justify-center border-b border-cyan-100`}>
                            {/* Scouter scan lines */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-50" />
                            
                            {/* Central Reticle */}
                            <div className="absolute w-12 h-12 border border-cyan-400/50 rounded-full flex items-center justify-center">
                              <div className="w-2.5 h-2.5 bg-amber-500/70 rounded-full animate-ping" />
                            </div>

                            {/* Viewfinder Corner Ticks */}
                            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-600/70" />
                            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-600/70" />
                            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-600/70" />
                            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-600/70" />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3 backdrop-blur-[2px]">
                              <div className="p-3 bg-white border border-slate-200 rounded-full text-amber-600 shadow-md">
                                <Aperture size={18} className="animate-spin-slow" />
                              </div>
                              <div className="p-3 bg-white border border-slate-200 rounded-full text-cyan-600 shadow-md">
                                <ZoomIn size={18} />
                              </div>
                            </div>

                            {/* Category and Shutter Badges */}
                            <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
                              <span className="text-[8.5px] font-mono text-slate-800 font-black uppercase tracking-wider bg-white/95 px-2.5 py-0.5 rounded border border-cyan-200 shadow-xs">
                                {photo.category}
                              </span>
                              <span className="text-[7.5px] font-mono text-cyan-800 font-bold bg-cyan-100/90 px-1.5 py-0.2 rounded">
                                {photo.japanese}
                              </span>
                            </div>

                            <span className="absolute bottom-3 right-3 text-[8px] font-mono text-amber-900 font-bold bg-amber-100/95 px-2 py-0.5 rounded border border-amber-300 shadow-xs">
                              {photo.shutterPower}
                            </span>
                          </div>

                          <div className="p-6 text-left flex-1 flex flex-col justify-between">
                            <div>
                              <h3 className="text-base font-extrabold font-display text-slate-900 mb-2 group-hover:text-cyan-800 transition-colors">
                                {photo.title}
                              </h3>
                              <p className="text-xs text-slate-600 leading-relaxed mb-4 font-sans text-left">
                                {photo.description}
                              </p>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-cyan-100 font-mono text-[10px] text-cyan-900 font-bold">
                              <div className="flex items-center space-x-2">
                                <Aperture size={12} className="text-cyan-600" />
                                <span>{photo.specs}</span>
                              </div>
                              <a
                                href="https://www.instagram.com/theasterlens/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-600 hover:text-orange-800 transition-colors flex items-center gap-0.5 text-[9px]"
                              >
                                <span>View</span>
                                <ArrowUpRight size={10} />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* PART B: HERO ASSOCIATION COMMAND SOCIAL MEDIA DECK */}
                  <div className="pt-8 border-t border-amber-200/80">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8">
                      <div>
                        <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-amber-900 uppercase bg-amber-100/90 px-3 py-1 rounded-full border border-amber-300/80 mb-2">
                          <Share2 size={13} className="text-amber-700" />
                          <span>全通信チャンネル網 // COMMAND SOCIAL NETWORK DECK</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black font-display text-slate-900">
                          Connected Creator & Engineering Channels
                        </h2>
                        <p className="text-xs md:text-sm text-slate-600 mt-1 max-w-2xl font-sans">
                          Direct real-time communications routes across photography, 3D fabrication, software engineering, and personal chronicles.
                        </p>
                      </div>
                      <span className="text-[10px] font-mono px-3 py-1 rounded bg-slate-100 text-slate-700 border border-slate-300 font-bold">
                        6 OF 6 NETWORKS OPERATIONAL
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {socialChannels.map((channel) => (
                        <div
                          key={channel.id}
                          className={`glass-panel p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md relative bg-white/95 ${channel.colorClass}`}
                        >
                          <CornerCrosshairs colorClass="text-slate-400/40" />
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-[8.5px] font-mono px-2 py-0.5 rounded bg-white/90 text-slate-800 border border-slate-200 font-bold shadow-2xs">
                                {channel.badge}
                              </span>
                              <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
                                {channel.icon}
                              </div>
                            </div>

                            <div className="text-[9px] font-mono text-slate-500 font-semibold mb-0.5">
                              {channel.japanese}
                            </div>
                            <h3 className="text-base font-extrabold font-display text-slate-900 mb-1">
                              {channel.name}
                            </h3>
                            <div className="text-xs font-mono font-bold text-amber-800 mb-3">
                              {channel.handle}
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed mb-6 font-sans">
                              {channel.description}
                            </p>
                          </div>

                          <a
                            href={channel.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl border text-[10px] font-mono font-bold uppercase tracking-wider transition-all shadow-xs cursor-pointer ${channel.btnClass}`}
                          >
                            <span>Connect via {channel.category.split(" ")[0]}</span>
                            <ArrowUpRight size={12} />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Quick Cross-Division Jump Strip (Always visible at page bottom) */}
          <div className="mt-20 pt-8 border-t border-amber-200/80">
            <div className="bg-white/85 border border-amber-200/80 p-5 md:p-6 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3 text-left">
                <div className="w-3 h-3 rounded-full bg-amber-500 animate-pulse" />
                <div>
                  <div className="text-xs font-black font-display text-slate-900">
                    AJINKYA SWAMI // MULTI-VENTURE ECOSYSTEM
                  </div>
                  <div className="text-[11px] text-slate-600 font-mono">
                    Voxelique 3D • Toolique Web Tools • Theasterlens Photography • QA Leadership
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] font-bold">
                <a
                  href="https://voxelique.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200 rounded-lg transition-colors flex items-center gap-1"
                >
                  <Box size={12} className="text-purple-600" />
                  <span>Voxelique.com</span>
                </a>
                <a
                  href="https://toolique.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 rounded-lg transition-colors flex items-center gap-1"
                >
                  <Zap size={12} className="text-amber-600" />
                  <span>Toolique.in</span>
                </a>
                <a
                  href="https://www.instagram.com/theasterlens/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-cyan-50 hover:bg-cyan-100 text-cyan-900 border border-cyan-200 rounded-lg transition-colors flex items-center gap-1"
                >
                  <Camera size={12} className="text-cyan-600" />
                  <span>@theasterlens</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ajinkya-swami/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-sky-50 hover:bg-sky-100 text-sky-900 border border-sky-200 rounded-lg transition-colors flex items-center gap-1"
                >
                  <LinkedinIcon size={12} className="text-sky-600" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

        </main>
      </PageWrapper>

      <Footer />
    </div>
  );
}
