"use client";

import React from "react";
import Reveal from "./Reveal";
import { Truck, Tractor, Hammer, Archive, MonitorPlay, Settings, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Passenger & Commercial Vehicles",
    desc: "Export of high-quality Japanese and Taiwanese sedan cars, SUVs, heavy-duty logistics trucks, refrigerated vans, and B2B transit buses.",
    icon: Truck,
  },
  {
    title: "Agricultural Tractors",
    desc: "Authorized sourcing of leading brands like Kubota, Yanmar, and Mitsubishi. Verified engine compression, hydraulics, and power take-off (PTO).",
    icon: Tractor,
  },
  {
    title: "Heavy Construction Machinery",
    desc: "Export of excavators, loaders, road rollers, and forklifts from Caterpillar, Komatsu, and Hitachi. Full mechanical diagnostic testing included.",
    icon: Hammer,
  },
  {
    title: "Dismantling & CKD Packing",
    desc: "Complete Complete-Knocked-Down (CKD) or Semi-Knocked-Down (SKD) packing into 20ft/40ft containers to reduce import duties in local markets.",
    icon: Archive,
  },
  {
    title: "Live Bid Auction Agent",
    desc: "Direct bidding capabilities at USS, TAA, and CAA dealer auctions. Get raw auction prices with a fixed agent commission—no hidden markups.",
    icon: MonitorPlay,
  },
  {
    title: "Wholesale Engine & OEM Parts",
    desc: "Bulk container loading of containerized diesel engines (Toyota 1HZ, Nissan TD27, Isuzu 4BD1), suspension gears, and commercial components.",
    icon: Settings,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#0B1B2B] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <Reveal y={20}>
            <span className="text-xs font-semibold text-[#E8732E] uppercase tracking-widest block mb-3">Capabilities & Infrastructure</span>
            <h2 className="font-display font-black text-3xl md:text-4xl tracking-tight leading-tight text-white mb-5">
              End-to-End International Sourcing Solutions
            </h2>
            <p className="text-white/60 text-base">
              From individual machinery units to entire fleet purchases, our logistics network handles container packings, vehicle dismantling, and custom port delivery.
            </p>
          </Reveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <Reveal key={svc.title} y={24} delay={idx * 0.05}>
              <div className="h-full bg-[#1A2A3A] p-8 rounded-2xl border border-white/5 hover:border-[#E8732E]/30 transition-all duration-300 group flex flex-col justify-between">
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#0B1B2B] text-[#E8732E] flex items-center justify-center mb-6 group-hover:scale-105 transition-all">
                    <svc.icon className="w-6 h-6" />
                  </div>

                  {/* Text details */}
                  <h3 className="font-display font-black text-lg text-white mb-3 group-hover:text-[#E8732E] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs md:text-sm text-white/60 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-white/50 group-hover:text-white transition-colors">
                  <span>Inquire Service</span>
                  <ArrowRight className="w-4 h-4 text-[#E8732E] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
