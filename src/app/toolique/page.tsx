"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TooliqueRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace("/creative-sector");
  }, [router]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center font-mono text-xs text-slate-500">
      <span>REDIRECTING TO CREATIVE SECTOR...</span>
    </div>
  );
}
