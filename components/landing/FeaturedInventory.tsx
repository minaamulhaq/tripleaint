"use client";

import React, { useState, useEffect } from "react";
import Reveal from "./Reveal";
import { ArrowRight, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ImageSlider from "./ImageSlider";

import Link from "next/link";
import { initialItems } from "@/lib/data";

export default function FeaturedInventory() {
  const featuredItems = initialItems.slice(0, 6);

  return (
    <section id="inventory" className="py-24 md:py-32 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <Reveal y={20}>
              <span className="text-[11px] font-bold text-brand-gold uppercase tracking-widest block mb-3">Live Yard Stock</span>
              <h2 className="font-display font-black text-3xl md:text-4xl tracking-tight leading-tight text-white mb-4">
                Featured Ready-to-Ship Machinery & Vehicles
              </h2>
              <p className="text-brand-silver text-sm leading-relaxed">
                Each unit listed has cleared technical inspection and is ready for immediate container packing or Roll-on/Roll-off shipping. Custom orders sourced on demand.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Grid Container */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {featuredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="bg-brand-card rounded-[24px] border border-brand-border overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all duration-300 shadow-xl shadow-black/30"
              >
                {/* Visual Representation Block (Styled Card Top) */}
                <div className="relative aspect-[16/10] bg-brand-darker p-6 flex flex-col justify-between overflow-hidden">
                  <ImageSlider images={item.images} title={item.title} />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/40 to-transparent z-10 pointer-events-none" />
                  <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-brand-darker/90 backdrop-blur-md border border-brand-border text-white/80 font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Stock Origin Tag */}
                  <div className="absolute top-4 right-4 z-20">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md ${
                        item.badgeType === "accent"
                          ? "bg-brand-gold text-brand-dark"
                          : item.badgeType === "teal"
                          ? "bg-brand-silver text-brand-dark"
                          : "bg-brand-darker/90 text-brand-gold border border-brand-gold/30 backdrop-blur-md"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Specs & Year */}
                  <div className="relative z-20 flex justify-between items-end border-t border-white/5 pt-3">
                    <span className="font-mono text-xs text-brand-silver">Year: {item.year}</span>
                    <span className="text-[11px] text-brand-silver max-w-[200px] truncate">{item.specs}</span>
                  </div>
                </div>

                {/* Info Block */}
                <div className="p-6 flex flex-col flex-grow">
                  <Link href={`/inventory/${item.id}`} className="font-display font-black text-lg text-white group-hover:text-brand-gold transition-colors line-clamp-1 mb-4 before:absolute before:inset-0 before:z-10">
                    {item.title}
                  </Link>

                  {/* Specs List */}
                  <div className="grid grid-cols-3 gap-2 border-y border-brand-divider py-5 mb-6">
                    {item.stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col text-left">
                        <span className="text-[10px] uppercase tracking-widest text-brand-silver">{stat.label}</span>
                        <span className="text-[13px] font-bold text-white mt-1 truncate">{stat.val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Row */}
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest text-brand-silver mb-1">Logistics Price</span>
                      <span className="text-lg font-black text-white">{item.price}</span>
                    </div>

                    <Link
                      href={`/inventory/${item.id}`}
                      className="inline-flex items-center gap-2 bg-transparent hover:bg-brand-gold text-brand-gold hover:text-brand-dark border border-brand-gold text-[13px] font-bold px-5 h-[42px] rounded-[10px] transition-all duration-300 relative z-30"
                    >
                      <PhoneCall className="w-4 h-4" /> View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Global Stock CTA */}
        <div className="mt-16 text-center">
          <Reveal y={15} delay={0.1}>
            <a
              href="/inventory"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-gold hover:text-brand-gold-light transition-colors border-b border-brand-gold/30 hover:border-brand-gold pb-1 uppercase tracking-widest"
            >
              View Full Inventory <ArrowRight className="w-4 h-4" />
            </a>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
