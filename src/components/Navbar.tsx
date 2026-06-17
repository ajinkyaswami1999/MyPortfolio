"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Voxelique", href: "#voxelique" },
  { label: "Why Hire Me", href: "#why-hire-me" },
  { label: "Certifications", href: "#certifications" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section highlighting logic
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.href.substring(1));
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href.substring(1));
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 80; // height of sticky navbar
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
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-900 shadow-lg py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex flex-col group cursor-pointer"
          >
            <span className="text-xl md:text-2xl font-extrabold font-display tracking-tight text-white group-hover:text-brand-cyan transition-colors">
              AJINKYA SWAMI
            </span>
            <span className="text-[10px] md:text-xs tracking-widest text-slate-400 font-mono uppercase group-hover:text-white transition-colors">
              FinTech QA Engineer
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium tracking-wide transition-colors relative py-1 hover:text-white ${
                  activeSection === item.href.substring(1)
                    ? "text-brand-cyan font-semibold"
                    : "text-slate-400"
                }`}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-cyan to-brand-blue" />
                )}
              </a>
            ))}
          </nav>

          {/* Socials / Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://github.com/ajinkyaswami1999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2 glass-panel rounded-lg"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ajinkya-swami-82751b191/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2 glass-panel rounded-lg"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="/Ajinkya_swami_resume.pdf"
              download="Ajinkya_Swami_Resume.pdf"
              className="flex items-center space-x-2 text-xs font-semibold px-4 py-2 bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-cyan hover:to-brand-blue text-white rounded-lg transition-all shadow-md shadow-brand-blue/10 active:scale-95"
            >
              <Download size={14} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden text-slate-300 hover:text-white p-2 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Navigation */}
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
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-base font-medium py-1.5 transition-colors border-l-2 pl-3 ${
                  activeSection === item.href.substring(1)
                    ? "text-brand-cyan border-brand-cyan font-semibold"
                    : "text-slate-400 border-transparent hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-900 space-y-4">
          <div className="flex items-center space-x-4 justify-center">
            <a
              href="https://github.com/ajinkyaswami1999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2.5 glass-panel rounded-lg w-full flex justify-center"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ajinkya-swami-82751b191/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2.5 glass-panel rounded-lg w-full flex justify-center"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>

          <a
            href="/Ajinkya_swami_resume.pdf"
            download="Ajinkya_Swami_Resume.pdf"
            className="flex items-center justify-center space-x-2 text-sm font-semibold py-3 bg-gradient-to-r from-brand-blue to-brand-purple text-white w-full rounded-lg transition-transform active:scale-95 shadow-lg shadow-brand-blue/10"
          >
            <Download size={16} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </>
  );
}
