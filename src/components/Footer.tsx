import React from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./BrandIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 py-12 relative overflow-hidden">
      {/* Subtle border blur */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 relative z-10">
        {/* Left Info */}
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-white tracking-wide font-display">
            AJINKYA SWAMI
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Software Quality Assurance Lead • FinTech Specialist • Digital Product Builder
          </p>
        </div>

        {/* Center Social Links */}
        <div className="flex items-center justify-center space-x-5">
          <a
            href="https://www.linkedin.com/in/ajinkya-swami-82751b191/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-slate-950 border border-white/5 rounded-xl text-slate-400 hover:text-brand-amber hover:border-brand-amber/35 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="https://github.com/ajinkyaswami1999"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-slate-950 border border-white/5 rounded-xl text-slate-400 hover:text-brand-amber hover:border-brand-amber/35 transition-all duration-300"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.instagram.com/2ajinkya6/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-slate-950 border border-white/5 rounded-xl text-slate-400 hover:text-brand-amber hover:border-brand-amber/35 transition-all duration-300"
            aria-label="Personal Instagram"
          >
            <InstagramIcon size={18} />
          </a>
        </div>

        {/* Right Info */}
        <div className="text-center md:text-right text-xs text-slate-500 space-y-1">
          <p>&copy; {currentYear} Ajinkya Swami. All rights reserved.</p>
          <p>
            Email:{" "}
            <a href="mailto:ajinkyaswami1999@gmail.com" className="hover:text-brand-amber transition-colors underline">
              ajinkyaswami1999@gmail.com
            </a>{" "}
            | Phone: +91 8875043720
          </p>
        </div>
      </div>
    </footer>
  );
}
