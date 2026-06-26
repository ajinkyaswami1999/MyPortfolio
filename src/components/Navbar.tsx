"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

interface NavItem {
  label: string;
  href: string;
  isAnchor?: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/#experience", isAnchor: true },
  { label: "Skills", href: "/#skills", isAnchor: true },
  { label: "Projects", href: "/projects" },
  { label: "Voxelique", href: "/voxelique" },
  { label: "Why Hire Me", href: "/#why-hire-me", isAnchor: true },
  { label: "Certifications", href: "/#certifications", isAnchor: true },
  { label: "Blog", href: "/blog" },
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

      // Scroll spy on home page
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
        } else if (pathname.startsWith("/blog")) {
          setActiveSection("blog");
        } else if (pathname.startsWith("/voxelique")) {
          setActiveSection("voxelique");
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
      {/* Floating Apple-inspired Sticky Navbar */}
      <div className="fixed top-4 left-0 w-full z-50 px-4 md:px-8 flex justify-center pointer-events-none">
        <header
          className={`w-full max-w-6xl rounded-2xl border transition-all duration-500 pointer-events-auto flex items-center justify-between px-6 py-3.5 ${
            scrolled
              ? "bg-slate-950/70 backdrop-blur-xl border-white/5 shadow-2xl shadow-black/40"
              : "bg-slate-950/20 backdrop-blur-md border-white/5 md:border-transparent py-4"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex flex-col group cursor-pointer">
            <span className="text-base md:text-lg font-extrabold font-display tracking-tight text-white group-hover:text-brand-cyan transition-colors">
              AJINKYA SWAMI
            </span>
            <span className="text-[9px] tracking-widest text-slate-400 font-mono uppercase group-hover:text-white transition-colors">
              FinTech QA Engineer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6">
            {navItems.map((item) => {
              const itemKey = item.isAnchor ? item.href.split("#")[1] : item.href === "/" ? "home" : item.href.substring(1);
              const isActive = activeSection === itemKey;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`text-xs font-semibold tracking-wide transition-colors relative py-1 hover:text-white ${
                    isActive ? "text-brand-cyan font-bold" : "text-slate-400"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-cyan to-brand-blue" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action / Social Buttons */}
          <div className="hidden lg:flex items-center space-x-3.5">
            <a
              href="https://github.com/ajinkyaswami1999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-900/50 border border-white/5 rounded-xl hover:bg-slate-900"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/ajinkya-swami-82751b191/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-900/50 border border-white/5 rounded-xl hover:bg-slate-900"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href="/Ajinkya_swami_resume.pdf"
              download="Ajinkya_Swami_Resume.pdf"
              className="flex items-center space-x-1.5 text-[11px] font-bold px-4 py-2 bg-white text-slate-950 hover:bg-brand-cyan hover:text-slate-950 rounded-xl transition-all shadow-lg active:scale-95"
            >
              <Download size={12} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden text-slate-300 hover:text-white p-2 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </header>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[280px] z-50 bg-slate-950 border-l border-slate-900 shadow-2xl p-6 transition-transform duration-300 transform xl:hidden flex flex-col justify-between ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-900">
            <div className="flex flex-col">
              <span className="text-lg font-bold font-display text-white">Ajinkya S.</span>
              <span className="text-[10px] text-brand-cyan font-mono uppercase">FinTech QA</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const itemKey = item.isAnchor ? item.href.split("#")[1] : item.href === "/" ? "home" : item.href.substring(1);
              const isActive = activeSection === itemKey;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`text-sm font-semibold py-1.5 transition-colors border-l-2 pl-3 ${
                    isActive
                      ? "text-brand-cyan border-brand-cyan font-bold"
                      : "text-slate-400 border-transparent hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-900/60 space-y-4">
          <div className="flex items-center space-x-4 justify-center">
            <a
              href="https://github.com/ajinkyaswami1999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2.5 bg-slate-900/50 border border-white/5 rounded-xl w-full flex justify-center"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ajinkya-swami-82751b191/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2.5 bg-slate-900/50 border border-white/5 rounded-xl w-full flex justify-center"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>

          <a
            href="/Ajinkya_swami_resume.pdf"
            download="Ajinkya_Swami_Resume.pdf"
            className="flex items-center justify-center space-x-2 text-xs font-semibold py-3 bg-white text-slate-950 w-full rounded-xl transition-transform active:scale-95 shadow-lg shadow-white/5"
          >
            <Download size={14} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </>
  );
}
