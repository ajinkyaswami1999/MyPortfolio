"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Download, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

interface NavItem {
  label: string;
  href: string;
  isAnchor?: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about", isAnchor: true },
  { label: "Experience", href: "/#experience", isAnchor: true },
  { label: "Projects", href: "/projects" },
  { label: "Voxelique", href: "/voxelique" },
  { label: "Toolique", href: "/toolique" },
  { label: "Photography", href: "/photography" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (pathname === "/") {
        const scrollPosition = window.scrollY + 120;
        for (const item of navItems) {
          if (item.isAnchor) {
            const targetId = item.href.split("#")[1];
            const el = document.getElementById(targetId);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                setActiveSection(targetId);
                return;
              }
            }
          }
        }
        if (window.scrollY < 200) {
          setActiveSection("home");
        }
      } else {
        if (pathname.startsWith("/projects")) {
          setActiveSection("projects");
        } else if (pathname.startsWith("/voxelique")) {
          setActiveSection("voxelique");
        } else if (pathname.startsWith("/toolique")) {
          setActiveSection("toolique");
        } else if (pathname.startsWith("/photography")) {
          setActiveSection("photography");
        } else if (pathname.startsWith("/contact")) {
          setActiveSection("contact");
        } else {
          setActiveSection("");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    setIsOpen(false);
    
    if (item.isAnchor) {
      const targetId = item.href.split("#")[1];
      
      if (pathname === "/") {
        e.preventDefault();
        const el = document.getElementById(targetId);
        if (el) {
          const offset = 100;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = el.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
          setActiveSection(targetId);
        }
      } else {
        setActiveSection(targetId);
      }
    } else {
      const activeName = item.href.substring(1) || "home";
      setActiveSection(activeName === "/" ? "home" : activeName);
    }
  };

  return (
    <>
      {/* Floating Sticky Control Panel Navbar */}
      <div className="fixed top-4 left-0 w-full z-50 px-4 md:px-8 flex justify-center pointer-events-none">
        <header
          className={`w-full max-w-5xl rounded-2xl border transition-all duration-300 pointer-events-auto flex items-center justify-between px-6 py-3 ${
            scrolled
              ? "bg-[#111111]/90 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/90"
              : "bg-[#111111]/50 backdrop-blur-md border-white/5 py-4"
          }`}
        >
          {/* Brand Logo & Station Tag */}
          <Link href="/" className="flex flex-col group cursor-pointer text-left">
            <span className="text-sm md:text-base font-extrabold font-display tracking-tight text-white group-hover:text-brand-amber transition-colors">
              AJINKYA SWAMI
            </span>
            <div className="flex items-center space-x-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
              <span className="text-[7.5px] tracking-widest text-slate-450 font-mono uppercase group-hover:text-white transition-colors">
                Facility Terminal
              </span>
            </div>
          </Link>

          {/* Desktop Control Switch Panel */}
          <nav className="hidden xl:flex items-center space-x-2.5">
            {navItems.map((item) => {
              const itemKey = item.isAnchor ? item.href.split("#")[1] : item.href === "/" ? "home" : item.href.substring(1);
              const isActive = activeSection === itemKey;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`text-[9.5px] font-mono tracking-wider uppercase font-bold px-3.5 py-2.5 bg-slate-950 border transition-all flex items-center space-x-2 rounded-lg cursor-pointer ${
                    isActive 
                      ? "border-brand-amber/40 text-brand-amber bg-slate-900" 
                      : "border-white/5 text-slate-400 hover:text-white hover:border-slate-800"
                  }`}
                >
                  {/* Status Indicator LED */}
                  <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isActive 
                      ? "bg-brand-amber shadow-[0_0_8px_#C58F2C]" 
                      : "bg-slate-900 border border-white/10"
                  }`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Console Action Panel */}
          <div className="hidden lg:flex items-center space-x-2.5">
            <a
              href="https://github.com/ajinkyaswami1999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2.5 bg-slate-950 border border-white/5 rounded-lg hover:border-brand-amber/30"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={13} />
            </a>
            <a
              href="https://www.linkedin.com/in/ajinkya-swami-82751b191/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2.5 bg-slate-950 border border-white/5 rounded-lg hover:border-brand-amber/30"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={13} />
            </a>
            <a
              href="/Ajinkya_swami_resume.pdf"
              download="Ajinkya_Swami_Resume.pdf"
              className="flex items-center space-x-1.5 text-[9px] font-mono tracking-wider uppercase font-bold px-4 py-2.5 bg-slate-950 border border-brand-amber/30 hover:border-brand-amber text-slate-200 hover:text-white rounded-lg transition-all active:scale-95"
            >
              <Download size={11} className="text-brand-amber" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Terminal Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden text-slate-300 hover:text-white p-2.5 bg-slate-950 border border-white/5 rounded-xl focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </header>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Control Panel Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[290px] z-50 bg-[#111111] border-l border-white/5 shadow-2xl p-6 transition-transform duration-300 transform xl:hidden flex flex-col justify-between ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
            <div className="flex flex-col text-left">
              <span className="text-base font-bold font-display text-white">AJINKYA S.</span>
              <div className="flex items-center space-x-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                <span className="text-[7.5px] tracking-widest text-slate-450 font-mono uppercase">Station Operator</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white p-1.5 bg-slate-950 border border-white/5 rounded-lg">
              <X size={14} />
            </button>
          </div>

          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const itemKey = item.isAnchor ? item.href.split("#")[1] : item.href === "/" ? "home" : item.href.substring(1);
              const isActive = activeSection === itemKey;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`text-xs font-mono font-bold py-2.5 px-3 bg-slate-950 border rounded-lg flex items-center space-x-2 text-left transition-all ${
                    isActive
                      ? "text-brand-amber border-brand-amber/30 bg-slate-900"
                      : "text-slate-400 border-transparent hover:text-white"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    isActive ? "bg-brand-amber shadow-[0_0_6px_#C58F2C]" : "bg-slate-900 border border-white/10"
                  }`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-white/5 space-y-4">
          <div className="flex items-center space-x-4 justify-center">
            <a
              href="https://github.com/ajinkyaswami1999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2.5 bg-slate-950 border border-white/5 rounded-lg w-full flex justify-center"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/ajinkya-swami-82751b191/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2.5 bg-slate-950 border border-white/5 rounded-lg w-full flex justify-center"
            >
              <LinkedinIcon size={16} />
            </a>
          </div>

          <a
            href="/Ajinkya_swami_resume.pdf"
            download="Ajinkya_Swami_Resume.pdf"
            className="flex items-center justify-center space-x-1.5 text-[10px] font-mono tracking-wider uppercase font-bold py-3 bg-slate-950 border border-brand-amber/30 text-slate-200 w-full rounded-lg transition-transform active:scale-95"
          >
            <Download size={13} className="text-brand-amber" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </>
  );
}
