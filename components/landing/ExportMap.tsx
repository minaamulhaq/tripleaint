"use client";

import React, { useState } from "react";
import Reveal from "./Reveal";
import { Ship, Anchor, Globe2, Compass, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const tradeHubs = [
  { name: "Keelung Port (Taiwan Hub)", x: 74, y: 44, role: "origin" },
  { name: "Port of Mombasa (Kenya)", x: 42, y: 68, role: "destination" },
  { name: "Port of Dar es Salaam (Tanzania)", x: 41, y: 74, role: "destination" },
  { name: "Jebel Ali Port (Dubai, UAE)", x: 54, y: 50, role: "destination" },
  { name: "Port of Durban (South Africa)", x: 39, y: 88, role: "destination" },
  { name: "Port of Manila (Philippines)", x: 76, y: 52, role: "destination" },
  { name: "Port Klang (Malaysia)", x: 67, y: 58, role: "destination" },
];

export default function ExportMap() {
  const [activeHub, setActiveHub] = useState<string | null>(null);

  return (
    <section id="destinations" className="py-24 md:py-32 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Map display */}
          <div className="lg:col-span-8 relative">
            <Reveal y={30}>
              <div className="bg-brand-darker rounded-[24px] p-6 md:p-10 border border-brand-border shadow-2xl relative">
                
                {/* SVG Schematic Node Map */}
                <div className="relative w-full aspect-[2/1] overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                    {/* Grid overlay */}
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="var(--color-brand-border)" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />

                    {/* Shipping Corridor Connection Lines */}
                    {/* Taiwan to Mombasa */}
                    <path d="M 74 44 Q 58 60 42 68" stroke="var(--color-brand-gold)" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.8" className="animate-[dash_5s_linear_infinite]" />
                    {/* Taiwan to Durban */}
                    <path d="M 74 44 Q 50 70 39 88" stroke="var(--color-brand-silver)" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.6" />
                    {/* Taiwan to Manila */}
                    <path d="M 74 44 L 76 52" stroke="var(--color-brand-silver)" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.6" />
                    {/* Taiwan to Port Klang */}
                    <path d="M 74 44 Q 70 52 67 58" stroke="var(--color-brand-silver)" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.6" />

                    {/* Nodes */}
                    {tradeHubs.map((hub) => (
                      <g
                        key={hub.name}
                        className="cursor-pointer group"
                        onMouseEnter={() => setActiveHub(hub.name)}
                        onMouseLeave={() => setActiveHub(null)}
                      >
                        {/* Pulse Ring */}
                        <circle
                          cx={hub.x}
                          cy={hub.y}
                          r="3"
                          fill={hub.role === "origin" ? "var(--color-brand-gold)" : "var(--color-brand-silver)"}
                          opacity="0.4"
                          className="animate-ping"
                        />
                        {/* Main Dot */}
                        <circle
                          cx={hub.x}
                          cy={hub.y}
                          r="1.8"
                          fill={hub.role === "origin" ? "var(--color-brand-gold)" : "var(--color-brand-silver)"}
                          className="group-hover:scale-150 transition-transform"
                        />
                      </g>
                    ))}
                  </svg>

                  {/* HTML Labels / Tooltips */}
                  {tradeHubs.map((hub) => (
                    <div
                      key={hub.name}
                      style={{ left: `${hub.x}%`, top: `${hub.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-6 pointer-events-none transition-all"
                    >
                      <div
                        className={`text-[9px] font-bold font-mono px-2 py-1 rounded whitespace-nowrap border shadow-lg transition-all ${
                          activeHub === hub.name
                            ? "opacity-100 bg-brand-gold border-brand-gold text-brand-dark scale-100"
                            : "opacity-0 scale-95"
                        }`}
                      >
                        {hub.name}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map status legend */}
                <div className="mt-8 flex flex-wrap gap-6 items-center justify-between text-xs text-brand-silver border-t border-brand-border pt-4">
                  <div className="flex gap-4">
                    <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-brand-gold shadow-sm" /> Origins (JP/TW Yards)</span>
                    <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-brand-silver shadow-sm" /> Shipping Ports</span>
                  </div>
                  <span className="text-[10px] font-mono text-brand-silver/50 uppercase tracking-widest">Interactive Shipping Corridors</span>
                </div>

              </div>
            </Reveal>
          </div>

          {/* Statistics text */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <Reveal y={20}>
              <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block mb-3">Global Export Reach</span>
              <h2 className="font-display font-black text-3xl tracking-tight leading-tight text-white mb-6">
                Connected Sourcing Routes to All Major B2B Hubs
              </h2>
              <p className="text-brand-silver text-sm leading-relaxed mb-8">
                We manage bulk sea cargo routes from Keelung (Taiwan). We ship directly to Mombasa, Dar es Salaam, Dubai, Durban, and Southeast Asian ports.
              </p>
            </Reveal>

            <div className="space-y-4">
              <Reveal y={15} delay={0.1}>
                <div className="flex items-start gap-4 bg-brand-card p-5 rounded-[16px] border border-brand-border shadow-lg">
                  <div className="w-10 h-10 rounded-[10px] bg-brand-gold/10 text-brand-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Ship className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">East & West African Corridors</h4>
                    <p className="text-[11px] text-brand-silver mt-1">Weekly container and RoRo booking access to Kenya, Tanzania, and South Africa ports.</p>
                  </div>
                </div>
              </Reveal>

              <Reveal y={15} delay={0.2}>
                <div className="flex items-start gap-4 bg-brand-card p-5 rounded-[16px] border border-brand-border shadow-lg">
                  <div className="w-10 h-10 rounded-[10px] bg-brand-silver/10 text-brand-silver flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Custom Clearance & Bilaterals</h4>
                    <p className="text-[11px] text-brand-silver mt-1">Full processing of JEVIC certificates, customs bonds, and export declaration documentation.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
      `}</style>
    </section>
  );
}
