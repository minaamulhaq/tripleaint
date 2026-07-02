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
    <section id="how-to-buy" className="py-24 md:py-32 bg-brand-off-white text-brand-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <Reveal y={20}>
            <span className="text-xs font-semibold text-brand-red uppercase tracking-widest block mb-3">Clear Purchasing Protocol</span>
            <h2 className="font-display font-black text-3xl md:text-4xl tracking-tight leading-tight text-brand-black mb-5">
              Four Steps to Secure Global Port Delivery
            </h2>
            <p className="text-brand-muted text-base">
              Sending capital across oceans requires confidence. We protect our international buyers with a transparent, legally documented contract process.
            </p>
          </Reveal>
        </div>

        {/* Process Stepper */}
        <div className="relative">
          
          {/* Animated Curved Arrow (Desktop Only) */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-12 z-0 overflow-visible pointer-events-none text-brand-red">
            <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 50">
              <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M0,25 Q250,50 500,25 T1000,25" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeDasharray="6 6"
                className="opacity-50"
              />
              <motion.polygon
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 1.4, duration: 0.2 }}
                points="990,15 1000,25 990,35"
                fill="currentColor"
                className="opacity-80"
              />
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <Reveal key={step.num} y={30} delay={idx * 0.1}>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                  
                  {/* Step Icon & Number Badge */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-white rounded-2xl border border-black/5 shadow-md flex items-center justify-center text-brand-black group-hover:scale-105 group-hover:border-brand-red/30 transition-all duration-300 relative">
                      <step.icon className="w-8 h-8 text-brand-black group-hover:text-brand-red transition-colors" />
                      
                      {/* Step Number Circle */}
                      <span className="absolute -top-3.5 -right-3.5 w-8 h-8 rounded-full bg-brand-black text-white font-mono text-xs font-black flex items-center justify-center border-2 border-white shadow shadow-black/10">
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Text details */}
                  <h3 className="font-display font-black text-lg text-brand-black mb-3 group-hover:text-brand-red transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-brand-muted leading-relaxed max-w-xs">
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
