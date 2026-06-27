"use client";

import React, { useState } from "react";
import Reveal from "./Reveal";
import { X, Search, ChevronLeft, ChevronRight, Eye, Ship, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  id: string;
  title: string;
  tag: string;
  desc: string;
  placeholderText: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Container Dismantling & Packing",
    tag: "Keelung Yard",
    desc: "Rigorous CKD packing of 3 utility tractors into a 40ft container.",
    placeholderText: "CKD Container Loading",
  },
  {
    id: "2",
    title: "Vessel Loading (RoRo Shipping)",
    tag: "Nagoya Port",
    desc: "Export cargo of light duty trucks clearing ramp access to cargo deck.",
    placeholderText: "Ro-Ro Vehicle Boarding",
  },
  {
    id: "3",
    title: "Pre-Shipment Surveyor Certification",
    tag: "Yokohama Yard",
    desc: "Licensed JEVIC surveyor evaluating engine emission compliance.",
    placeholderText: "JEVIC Inspection Certification",
  },
  {
    id: "4",
    title: "Commercial Excavator Dispatch",
    tag: "Taichung Yard",
    desc: "Flat-rack container packaging of Komatsu PC200 crawler excavator.",
    placeholderText: "Excavator Flat-Rack Pack",
  },
  {
    id: "5",
    title: "Diesel Engine Wholesale Load",
    tag: "Tokyo Yard",
    desc: "Crated block engines packed for international B2B distributor.",
    placeholderText: "Bulk Engine Invoicing",
  },
  {
    id: "6",
    title: "B2B Client Port Delivery",
    tag: "Mombasa Port",
    desc: "Successful custom clearing and delivery of Toyota Prado units.",
    placeholderText: "Port Handover Ceremony",
  },
];

export default function ProofGallery() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx(activeIdx === 0 ? galleryItems.length - 1 : activeIdx - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx(activeIdx === galleryItems.length - 1 ? 0 : activeIdx + 1);
    }
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#0B1B2B] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <Reveal y={20}>
            <span className="text-xs font-semibold text-[#E8732E] uppercase tracking-widest block mb-3">Proof of Performance</span>
            <h2 className="font-display font-black text-3xl md:text-4xl tracking-tight leading-tight text-white mb-5">
              Export Operations & Port Deliveries
            </h2>
            <p className="text-white/60 text-base">
              Real records of our daily operations in Japan and Taiwan yards. We document container dismantle processes, vessel boarding, and surveyor audits.
            </p>
          </Reveal>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => (
            <Reveal key={item.id} y={24} delay={idx * 0.05}>
              <div
                onClick={() => setActiveIdx(idx)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#1A2A3A] border border-white/5 shadow-xl cursor-pointer hover:border-[#E8732E]/30 transition-all duration-300"
              >
                {/* Visual placeholder backdrop */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#0B1B2B]/40 to-[#0B1B2B]/90 z-0">
                  <div className="w-12 h-12 rounded-full bg-white/5 text-white/40 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#E8732E]/10 group-hover:text-[#E8732E] transition-all">
                    <Ship className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold text-white/50 group-hover:text-white/80 transition-colors uppercase tracking-wider">{item.placeholderText}</span>
                </div>

                {/* Info Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B] via-[#0B1B2B]/40 to-transparent opacity-90 p-6 flex flex-col justify-end z-10">
                  <div className="mb-2">
                    <span className="bg-[#E8732E] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base text-white group-hover:text-[#E8732E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-white/60 mt-1 line-clamp-2">
                    {item.desc}
                  </p>
                </div>

                {/* View Icon on Hover */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <Eye className="w-4 h-4 text-white" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Custom Lightbox Modal */}
        <AnimatePresence>
          {activeIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveIdx(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-6"
            >
              <button
                onClick={() => setActiveIdx(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/5 p-2.5 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              <div
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full flex flex-col relative"
              >
                {/* Main Content Card */}
                <div className="relative aspect-[16/10] bg-[#1A2A3A] rounded-2xl border border-white/10 shadow-2xl flex flex-col justify-between p-8 overflow-hidden">
                  
                  {/* Decorative corner highlights */}
                  <div className="absolute -top-12 -right-12 w-60 h-60 bg-[#E8732E]/10 rounded-full blur-[80px]" />
                  <div className="absolute -bottom-12 -left-12 w-60 h-60 bg-[#3FA9A0]/10 rounded-full blur-[80px]" />

                  {/* Header info */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 z-10">
                    <span className="flex items-center gap-2 text-xs font-mono text-[#3FA9A0] uppercase font-bold tracking-wider">
                      <Award className="w-4 h-4" /> Official Export Record
                    </span>
                    <span className="bg-white/10 text-white/70 font-mono text-xs px-2.5 py-0.5 rounded">
                      {galleryItems[activeIdx].tag}
                    </span>
                  </div>

                  {/* Mid Illustration placeholder representation */}
                  <div className="flex-1 flex flex-col items-center justify-center text-center z-10 py-10">
                    <Ship className="w-20 h-20 text-[#E8732E] mb-4 animate-pulse" />
                    <h3 className="font-display font-black text-xl md:text-2xl text-white">
                      {galleryItems[activeIdx].placeholderText}
                    </h3>
                  </div>

                  {/* Info Footer */}
                  <div className="z-10 bg-[#0B1B2B]/80 backdrop-blur border border-white/5 p-6 rounded-xl">
                    <h4 className="font-display font-bold text-lg text-[#E8732E]">
                      {galleryItems[activeIdx].title}
                    </h4>
                    <p className="text-sm text-white/70 mt-1">
                      {galleryItems[activeIdx].desc}
                    </p>
                  </div>

                  {/* Left / Right navigation buttons on desktop */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white hover:text-[#E8732E] p-3 rounded-full z-20 border border-white/10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white hover:text-[#E8732E] p-3 rounded-full z-20 border border-white/10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                </div>

                {/* Slide index indicators */}
                <div className="mt-4 flex justify-center gap-2">
                  {galleryItems.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIdx(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        activeIdx === idx ? "bg-[#E8732E] w-6" : "bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
