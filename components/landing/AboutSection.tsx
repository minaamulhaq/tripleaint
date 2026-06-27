"use client";

import React from "react";
import Reveal from "./Reveal";
import { CheckCircle2, ShieldCheck, MapPin, Award, Scale, Globe } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#F6F7F5] text-[#101417]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Visual graphic representing trust indicators */}
          <div className="lg:col-span-6 relative order-last lg:order-first">
            <Reveal y={40} delay={0.2}>
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full bg-[#0B1B2B] rounded-2xl p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-2xl shadow-black/10 border border-white/5">
                {/* Visual Accent Gradients */}
                <div className="absolute -top-12 -right-12 w-60 h-60 bg-[#E8732E]/10 rounded-full blur-[80px]" />
                <div className="absolute -bottom-12 -left-12 w-60 h-60 bg-[#3FA9A0]/10 rounded-full blur-[80px]" />
                
                {/* Header graphic */}
                <div className="flex justify-between items-start z-10">
                  <div className="flex gap-2">
                    <span className="w-3.5 h-3.5 bg-red-500 rounded-full" />
                    <span className="w-3.5 h-3.5 bg-yellow-500 rounded-full" />
                    <span className="w-3.5 h-3.5 bg-green-500 rounded-full" />
                  </div>
                  <div className="text-[10px] font-mono text-white/40 tracking-wider uppercase border border-white/10 px-2 py-0.5 rounded">
                    Global Verification System
                  </div>
                </div>

                {/* Main Content inside visual card */}
                <div className="my-8 z-10">
                  <div className="flex items-center gap-3.5 text-white mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#E8732E] flex items-center justify-center text-white">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-display font-black text-lg">Licensed Export Entity</h4>
                      <p className="text-xs text-white/50">Registration ID: JUMVEA-TW-9482-A</p>
                    </div>
                  </div>
                  
                  {/* Mock Map / Points */}
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between text-xs text-white/70 border-b border-white/10 pb-2">
                      <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#E8732E]" /> Japan (Tokyo & Nagoya Offices)</span>
                      <span className="font-mono text-white/40">Registered since 2009</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-white/70 border-b border-white/10 pb-2">
                      <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#E8732E]" /> Taiwan (Taipei HQ & Port Offices)</span>
                      <span className="font-mono text-white/40">Registered since 2012</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-white/70 border-b border-white/10 pb-2">
                      <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#E8732E]" /> USA (Houston Logistics Branch)</span>
                      <span className="font-mono text-white/40">Registered since 2018</span>
                    </div>
                  </div>
                </div>

                {/* Footer status bar */}
                <div className="flex items-center justify-between text-[11px] text-white/40 border-t border-white/10 pt-4 z-10">
                  <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[#2E9E5B]" /> Safe Export Guarantee</span>
                  <span className="text-[#3FA9A0] font-semibold">100% Legally Bonded</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: About text and trust checklist */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <Reveal y={20}>
              <div className="text-xs font-semibold text-[#E8732E] uppercase tracking-widest mb-3">
                Established Global Operator
              </div>
              <h2 className="font-display font-black text-3xl md:text-4xl tracking-tight leading-tight text-[#0B1B2B] mb-6">
                Over 17 Years of Certified B2B Trade & Logistics Integrity
              </h2>
              <p className="text-[#5C6670] leading-relaxed mb-6">
                Apex Global Exports serves international businesses by sourcing and shipping top-tier heavy machinery, tractors, commercial engines, and passenger vehicles. Unlike middle-tier agents, we own physical processing yards and hold official export licenses across Japan, Taiwan, and the USA.
              </p>
              <p className="text-[#5C6670] leading-relaxed mb-8">
                Our in-house staff of certified mechanics and surveyors inspect every single vehicle, generator, or engine before it leaves the yard. We manage the entire lifecycle—from bidding and procurement to port validation, customs clearing, and roll-on/roll-off (RoRo) or container shipping.
              </p>
            </Reveal>

            {/* Credibility highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Reveal y={15} delay={0.1}>
                <div className="flex flex-col gap-2.5 p-4 bg-white rounded-xl shadow-md shadow-black/5 border border-black/5">
                  <div className="w-9 h-9 rounded-lg bg-[#3FA9A0]/10 text-[#3FA9A0] flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#0B1B2B] leading-tight">Licensed Surveyors</h5>
                    <p className="text-[11px] text-[#5C6670] mt-0.5">Rigorous pre-shipment inspections.</p>
                  </div>
                </div>
              </Reveal>

              <Reveal y={15} delay={0.2}>
                <div className="flex flex-col gap-2.5 p-4 bg-white rounded-xl shadow-md shadow-black/5 border border-black/5">
                  <div className="w-9 h-9 rounded-lg bg-[#E8732E]/10 text-[#E8732E] flex items-center justify-center">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#0B1B2B] leading-tight">Multi-Country Presence</h5>
                    <p className="text-[11px] text-[#5C6670] mt-0.5">Local offices in JP, TW, and USA.</p>
                  </div>
                </div>
              </Reveal>

              <Reveal y={15} delay={0.3}>
                <div className="flex flex-col gap-2.5 p-4 bg-white rounded-xl shadow-md shadow-black/5 border border-black/5">
                  <div className="w-9 h-9 rounded-lg bg-[#0B1B2B]/10 text-[#0B1B2B] flex items-center justify-center">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#0B1B2B] leading-tight">Direct Source</h5>
                    <p className="text-[11px] text-[#5C6670] mt-0.5">Auction yards & fleet trade access.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
