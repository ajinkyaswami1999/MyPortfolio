import React from "react";
import { Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Info */}
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-white tracking-wide">
            AJINKYA SWAMI
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Software Quality Assurance Engineer • FinTech Specialist
          </p>
        </div>

        {/* Right Info */}
        <div className="text-center md:text-right text-xs text-slate-500 space-y-1">
          <p>&copy; {currentYear} Ajinkya Swami. All rights reserved.</p>
          <p>
            Email:{" "}
            <a href="mailto:ajinkyaswami1999@gmail.com" className="hover:text-brand-cyan transition-colors underline">
              ajinkyaswami1999@gmail.com
            </a>{" "}
            | Phone: +91 8875043720
          </p>
        </div>
      </div>
    </footer>
  );
}
