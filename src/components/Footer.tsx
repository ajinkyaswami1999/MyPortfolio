import React from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, SnapchatIcon } from "./BrandIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF9F6] border-t border-amber-200/60 py-12 relative overflow-hidden">
      {/* Subtle border blur */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 relative z-10">
        {/* Left Info */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
            <span className="text-sm font-black text-slate-900 tracking-wide font-display">
              AJINKYA SWAMI
            </span>
            <span className="text-[7.5px] font-mono px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 font-black">
              HERO: S-CLASS #1
            </span>
          </div>
          <p className="text-xs text-slate-600 font-sans font-medium">
            Software Quality Assurance Lead • FinTech Specialist • Digital Product Builder
          </p>
          <p className="text-[8px] font-mono text-slate-400 mt-1 uppercase tracking-wider">
            CAPSULE CORP LAB NO. 01 // WEST CITY • DRAGON RADAR ACTIVE
          </p>
        </div>

        {/* Center Social Links */}
        <div className="flex items-center justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/ajinkya-swami/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-amber-800 hover:border-amber-300 hover:bg-amber-50/60 transition-all duration-300 shadow-xs"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="https://github.com/ajinkyaswami1999"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-amber-800 hover:border-amber-300 hover:bg-amber-50/60 transition-all duration-300 shadow-xs"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.instagram.com/ajinkyaswami.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-amber-800 hover:border-amber-300 hover:bg-amber-50/60 transition-all duration-300 shadow-xs"
            aria-label="Personal Instagram"
          >
            <InstagramIcon size={18} />
          </a>
          <a
            href="https://snapchat.com/t/wgcxkncY"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-amber-800 hover:border-amber-300 hover:bg-amber-50/60 transition-all duration-300 shadow-xs"
            aria-label="Personal Snapchat"
          >
            <SnapchatIcon size={18} />
          </a>
        </div>

        {/* Right Info */}
        <div className="text-center md:text-right text-xs text-slate-500 space-y-1 font-sans">
          <p>&copy; {currentYear} Ajinkya Swami. All rights reserved.</p>
          <p>
            Email:{" "}
            <a href="mailto:ajinkyaswami1999@gmail.com" className="hover:text-amber-800 transition-colors underline font-medium">
              ajinkyaswami1999@gmail.com
            </a>{" "}
            | Phone: +91 8875043720
          </p>
        </div>
      </div>
    </footer>
  );
}
