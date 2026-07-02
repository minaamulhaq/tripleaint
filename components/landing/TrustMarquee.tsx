"use client";

import React from "react";
import { Ship, ShieldCheck, Compass, Anchor, FileCheck, CheckCircle } from "lucide-react";

const trustItems = [
  { text: "JEVIC certified inspections", icon: ShieldCheck },
  { text: "JUMVEA Association Member", icon: CheckCircle },
  { text: "Direct Tokyo & Yokohama Port Logistics", icon: Anchor },
  { text: "Taiwan Keelung Port Exports", icon: Ship },
  { text: "QISJ Certified Inspection Agency Partner", icon: FileCheck },
  { text: "Bilateral custom clearing expertise", icon: Compass },
  { text: "Verified Bureau Veritas compliance", icon: ShieldCheck },
  { text: "East & West Africa shipping routes", icon: Ship },
];

export default function TrustMarquee() {
  return (
    <section className="relative bg-brand-carbon py-6 border-y border-white/10 overflow-hidden select-none">
      {/* Background tint overlay */}
      <div className="absolute inset-0 bg-brand-black/20 pointer-events-none" />
      
      {/* Fade edge gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-carbon to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-carbon to-transparent z-10 pointer-events-none" />

      {/* Marquee Ticker */}
      <div className="flex w-max relative">
        <div className="flex animate-[marquee_30s_linear_infinite] gap-16 whitespace-nowrap pr-16 items-center">
          {trustItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5 text-white/60 font-semibold text-xs md:text-sm uppercase tracking-wider">
              <item.icon className="w-4 h-4 text-brand-red" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Duplicate content to make seamless looping */}
        <div className="flex animate-[marquee_30s_linear_infinite] gap-16 whitespace-nowrap pr-16 items-center" aria-hidden="true">
          {trustItems.map((item, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-2.5 text-white/60 font-semibold text-xs md:text-sm uppercase tracking-wider">
              <item.icon className="w-4 h-4 text-brand-red" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-100%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
