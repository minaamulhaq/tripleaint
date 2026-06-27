"use client";

import React, { useState } from "react";
import Reveal from "./Reveal";
import { Ship, Anchor, Globe2, Compass, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const tradeHubs = [
  { name: "Tokyo Port (Japan Hub)", x: 78, y: 35, role: "origin" },
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
    <section id="destinations" className="py-24 md:py-32 bg-[#F6F7F5] text-[#101417] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Map display */}
          <div className="lg:col-span-8 relative">
            <Reveal y={30}>
              <div className="bg-[#0B1B2B] rounded-2xl p-6 md:p-10 border border-white/5 shadow-2xl relative">
                
                {/* SVG Schematic Node Map */}
                <div className="relative w-full aspect-[2/1] overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                    {/* Grid overlay */}
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />

                    {/* Shipping Corridor Connection Lines */}
                    {/* Japan to Mombasa */}
                    <path d="M 78 35 Q 60 55 42 68" stroke="#E8732E" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.6" className="animate-[dash_5s_linear_infinite]" />
                    {/* Japan to Jebel Ali */}
                    <path d="M 78 35 Q 64 42 54 50" stroke="#E8732E" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.6" />
                    {/* Taiwan to Mombasa */}
                    <path d="M 74 44 Q 58 60 42 68" stroke="#3FA9A0" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.6" />
                    {/* Taiwan to Durban */}
                    <path d="M 74 44 Q 50 70 39 88" stroke="#3FA9A0" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.6" />
                    {/* Taiwan to Manila */}
                    <path d="M 74 44 L 76 52" stroke="#3FA9A0" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.6" />
                    {/* Taiwan to Port Klang */}
                    <path d="M 74 44 Q 70 52 67 58" stroke="#3FA9A0" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.6" />

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
                          fill={hub.role === "origin" ? "#E8732E" : "#3FA9A0"}
                          opacity="0.4"
                          className="animate-ping"
                        />
                        {/* Main Dot */}
                        <circle
                          cx={hub.x}
                          cy={hub.y}
                          r="1.8"
                          fill={hub.role === "origin" ? "#E8732E" : "#3FA9A0"}
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
                        className={`text-[9px] font-bold font-mono px-1.5 py-0.5 rounded whitespace-nowrap border shadow transition-all ${
                          activeHub === hub.name
                            ? "opacity-100 bg-[#E8732E] border-[#E8732E] text-white scale-100"
                            : "opacity-0 scale-95"
                        }`}
                      >
                        {hub.name}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map status legend */}
                <div className="mt-6 flex flex-wrap gap-6 items-center justify-between text-xs text-white/50 border-t border-white/5 pt-4">
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#E8732E]" /> Origins (JP/TW Yards)</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#3FA9A0]" /> Shipping Ports</span>
                  </div>
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Interactive Shipping Corridors</span>
                </div>

              </div>
            </Reveal>
          </div>

          {/* Statistics text */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <Reveal y={20}>
              <span className="text-xs font-semibold text-[#E8732E] uppercase tracking-widest block mb-3">Global Export Reach</span>
              <h2 className="font-display font-black text-3xl tracking-tight leading-tight text-[#0B1B2B] mb-6">
                Connected Sourcing Routes to All Major B2B Hubs
              </h2>
              <p className="text-[#5C6670] text-sm leading-relaxed mb-6">
                We manage bulk sea cargo routes from Tokyo and Yokohama (Japan) and Keelung (Taiwan). We ship directly to Mombasa, Dar es Salaam, Dubai, Durban, and Southeast Asian ports.
              </p>
            </Reveal>

            <div className="space-y-4">
              <Reveal y={15} delay={0.1}>
                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-black/5 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-[#E8732E]/10 text-[#E8732E] flex items-center justify-center mt-0.5">
                    <Ship className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#0B1B2B]">East & West African Corridors</h4>
                    <p className="text-[11px] text-[#5C6670] mt-0.5">Weekly container and RoRo booking access to Kenya, Tanzania, and South Africa ports.</p>
                  </div>
                </div>
              </Reveal>

              <Reveal y={15} delay={0.2}>
                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-black/5 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-[#3FA9A0]/10 text-[#3FA9A0] flex items-center justify-center mt-0.5">
                    <Globe2 className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#0B1B2B]">Custom Clearance & Bilaterals</h4>
                    <p className="text-[11px] text-[#5C6670] mt-0.5">Full processing of JEVIC certificates, customs bonds, and export declaration documentation.</p>
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
