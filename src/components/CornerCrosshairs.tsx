"use client";

import React from "react";

export default function CornerCrosshairs() {
  return (
    <>
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-brand-cyan select-none pointer-events-none font-mono text-sm z-30 font-extrabold">+</div>
      <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-brand-cyan select-none pointer-events-none font-mono text-sm z-30 font-extrabold">+</div>
      <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-brand-cyan select-none pointer-events-none font-mono text-sm z-30 font-extrabold">+</div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-brand-cyan select-none pointer-events-none font-mono text-sm z-30 font-extrabold">+</div>
    </>
  );
}
