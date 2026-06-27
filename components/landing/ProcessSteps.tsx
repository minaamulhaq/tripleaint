"use client";

import React from "react";
import Reveal from "./Reveal";
import { SearchCheck, FileSpreadsheet, CreditCard, Ship, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Browse & Inquire",
    desc: "Select a model from our yard or send us auction specifications. State your destination port to receive a CIF estimate.",
    icon: SearchCheck,
  },
  {
    num: "02",
    title: "Quote & Contract",
    desc: "We supply a detailed condition report, photographic validation, and a Proforma Invoice (PI) locking in shipping pricing.",
    icon: FileSpreadsheet,
  },
  {
    num: "03",
    title: "Wire & Documentation",
    desc: "Upon 50% deposit clearance via T/T, we secure export certificates, perform port inspection, and book cargo lines.",
    icon: CreditCard,
  },
  {
    num: "04",
    title: "Vessel Dispatch",
    desc: "Vessel sails with your unit. Original B/L, inspection certificates, and export records are dispatched via DHL express.",
    icon: Ship,
  },
];

export default function ProcessSteps() {
  return (
    <section id="how-to-buy" className="py-24 md:py-32 bg-[#F6F7F5] text-[#101417]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <Reveal y={20}>
            <span className="text-xs font-semibold text-[#E8732E] uppercase tracking-widest block mb-3">Clear Purchasing Protocol</span>
            <h2 className="font-display font-black text-3xl md:text-4xl tracking-tight leading-tight text-[#0B1B2B] mb-5">
              Four Steps to Secure Global Port Delivery
            </h2>
            <p className="text-[#5C6670] text-base">
              Sending capital across oceans requires confidence. We protect our international buyers with a transparent, legally documented contract process.
            </p>
          </Reveal>
        </div>

        {/* Process Stepper */}
        <div className="relative">
          
          {/* Horizontal Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[44px] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#E8732E] via-[#3FA9A0] to-[#0B1B2B] opacity-30 z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <Reveal key={step.num} y={30} delay={idx * 0.1}>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                  
                  {/* Step Icon & Number Badge */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-white rounded-2xl border border-black/5 shadow-md flex items-center justify-center text-[#0B1B2B] group-hover:scale-105 group-hover:border-[#E8732E]/30 transition-all duration-300 relative">
                      <step.icon className="w-8 h-8 text-[#0B1B2B] group-hover:text-[#E8732E] transition-colors" />
                      
                      {/* Step Number Circle */}
                      <span className="absolute -top-3.5 -right-3.5 w-8 h-8 rounded-full bg-[#0B1B2B] text-white font-mono text-xs font-black flex items-center justify-center border-2 border-white shadow shadow-black/10">
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Text details */}
                  <h3 className="font-display font-black text-lg text-[#0B1B2B] mb-3 group-hover:text-[#E8732E] transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-[#5C6670] leading-relaxed max-w-xs">
                    {step.desc}
                  </p>

                  {/* Indicator Arrow for Tablet/Mobile */}
                  {idx < 3 && (
                    <div className="lg:hidden mt-6 text-black/20">
                      <ArrowRight className="w-5 h-5 rotate-90 md:rotate-0" />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
