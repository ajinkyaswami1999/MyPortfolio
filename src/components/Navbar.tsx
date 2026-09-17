"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Download, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, SnapchatIcon } from "./BrandIcons";

interface NavItem {
  label: string;
  href: string;
  isAnchor?: boolean;
}

const navItems: NavItem[] = [
  { label: "Home // ホーム", href: "/" },
  { label: "Profile // 人物", href: "/#about", isAnchor: true },
  { label: "Sagas // 経歴", href: "/#experience", isAnchor: true },
  { label: "Missions // 作戦", href: "/asset-manifest" },
  { label: "Creative // 創出", href: "/creative-sector" },
  { label: "Comms // 交信", href: "/transmission-tower" },
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
        if (pathname.startsWith("/projects") || pathname.startsWith("/asset-manifest")) {
          setActiveSection("asset-manifest");
        } else if (pathname.startsWith("/creative-sector")) {
          setActiveSection("creative-sector");
        } else if (pathname.startsWith("/transmission-tower") || pathname.startsWith("/contact")) {
          setActiveSection("transmission-tower");
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
          className={`w-full max-w-5xl xl:max-w-[95%] rounded-2xl border transition-all duration-300 pointer-events-auto flex items-center justify-between px-6 py-3 ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl border-amber-200/80 shadow-lg shadow-amber-500/5"
              : "bg-white/70 backdrop-blur-md border-amber-100/90 shadow-sm py-3.5"
          }`}
        >
          {/* Brand Logo & Capsule Corp Tag */}
          <Link href="/" className="flex flex-col group cursor-pointer text-left">
            <span className="text-sm md:text-base font-extrabold font-display tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors">
              AJINKYA SWAMI
            </span>
            <div className="flex items-center space-x-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[7.5px] tracking-widest text-slate-500 font-mono uppercase group-hover:text-amber-700 transition-colors font-bold">
                CAPSULE CORP QA // S-CLASS // カプセル
              </span>
            </div>
          </Link>

          {/* Desktop Control Switch Panel */}
          <nav className="hidden xl:flex items-center space-x-2">
            {navItems.map((item) => {
              const itemKey = item.isAnchor ? item.href.split("#")[1] : item.href === "/" ? "home" : item.href.substring(1);
              const isActive = activeSection === itemKey;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`text-[8.5px] font-mono tracking-wider uppercase font-bold px-2.5 py-1.5 border transition-all flex items-center space-x-1.5 rounded-lg cursor-pointer whitespace-nowrap ${
                    isActive 
                      ? "border-amber-300 text-amber-950 bg-amber-100/70 shadow-sm" 
                      : "border-slate-200/60 bg-white/70 text-slate-600 hover:text-slate-950 hover:bg-amber-50/60 hover:border-amber-200"
                  }`}
                >
                  {/* Status Indicator LED */}
                  <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isActive 
                      ? "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" 
                      : "bg-slate-300 border border-slate-400/40"
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
              className="text-slate-600 hover:text-slate-950 transition-colors p-2.5 bg-white border border-slate-200 rounded-lg hover:border-amber-300 hover:bg-amber-50/60 shadow-xs"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={13} />
            </a>
            <a
              href="https://www.linkedin.com/in/ajinkya-swami/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-950 transition-colors p-2.5 bg-white border border-slate-200 rounded-lg hover:border-amber-300 hover:bg-amber-50/60 shadow-xs"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={13} />
            </a>
            <a
              href="/Ajinkya_swami_resume.pdf"
              download="Ajinkya_Swami_Resume.pdf"
              className="flex items-center space-x-1.5 text-[9px] font-mono tracking-wider uppercase font-bold px-4 py-2.5 bg-amber-100/90 hover:bg-amber-200 text-amber-950 border border-amber-300 rounded-lg transition-all active:scale-95 shadow-sm hover:shadow-md"
            >
              <Download size={11} className="text-amber-700" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Terminal Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden text-slate-700 hover:text-slate-950 p-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none shadow-xs"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </header>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300 xl:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Control Panel Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[290px] z-50 bg-white border-l border-amber-200 shadow-2xl p-6 transition-transform duration-300 transform xl:hidden flex flex-col justify-between ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
            <div className="flex flex-col text-left">
              <span className="text-base font-bold font-display text-slate-900">AJINKYA S.</span>
              <div className="flex items-center space-x-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-[7.5px] tracking-widest text-slate-500 font-mono uppercase font-bold">HERO: S-CLASS QA // 主任</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-slate-900 p-1.5 bg-slate-100 border border-slate-200 rounded-lg" aria-label="Close navigation menu">
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
                  className={`text-xs font-mono font-bold py-2.5 px-3 border rounded-lg flex items-center space-x-2 text-left transition-all ${
                    isActive
                      ? "text-amber-950 border-amber-300 bg-amber-100/80 shadow-xs"
                      : "text-slate-600 bg-slate-50 border-slate-200 hover:text-slate-950 hover:bg-amber-50"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    isActive ? "bg-amber-500 shadow-[0_0_6px_#F59E0B]" : "bg-slate-300 border border-slate-400"
                  }`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-100 space-y-4">
          <div className="flex items-center space-x-2.5 justify-center">
            <a
              href="https://github.com/ajinkyaswami1999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-950 transition-colors p-2.5 bg-slate-50 border border-slate-200 rounded-lg w-full flex justify-center hover:bg-amber-50"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/ajinkya-swami/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-950 transition-colors p-2.5 bg-slate-50 border border-slate-200 rounded-lg w-full flex justify-center hover:bg-amber-50"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href="https://www.instagram.com/ajinkyaswami.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-950 transition-colors p-2.5 bg-slate-50 border border-slate-200 rounded-lg w-full flex justify-center hover:bg-amber-50"
              aria-label="Instagram Profile"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href="https://snapchat.com/t/wgcxkncY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-950 transition-colors p-2.5 bg-slate-50 border border-slate-200 rounded-lg w-full flex justify-center hover:bg-amber-50"
              aria-label="Snapchat Profile"
            >
              <SnapchatIcon size={16} />
            </a>
          </div>

          <a
            href="/Ajinkya_swami_resume.pdf"
            download="Ajinkya_Swami_Resume.pdf"
            className="flex items-center justify-center space-x-1.5 text-[10px] font-mono tracking-wider uppercase font-bold py-3 bg-amber-100 border border-amber-300 text-amber-950 w-full rounded-lg transition-transform active:scale-95 shadow-sm"
          >
            <Download size={13} className="text-amber-700" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </>
  );
}
