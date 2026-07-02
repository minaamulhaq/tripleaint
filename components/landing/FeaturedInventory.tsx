"use client";

import React, { useState, useEffect } from "react";
import Reveal from "./Reveal";
import { ArrowRight, Settings, AlertCircle, PhoneCall, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ImageSlider from "./ImageSlider";

interface InventoryItem {
  id: string;
  title: string;
  category: "cars-lhd" | "cars-rhd" | "tractors" | "machinery" | "parts";
  categoryLabel: string;
  year: number;
  specs: string;
  price: string;
  badge: string;
  images: string[];
  badgeType: "accent" | "teal" | "dark";
  stats: { label: string; val: string }[];
}

const initialItems: InventoryItem[] = [
  {
    id: "1",
    title: "Toyota Land Cruiser Prado TX-L",
    category: "cars-rhd",
    categoryLabel: "Car (RHD)",
    year: 2021,
    specs: "2.7L Petrol / Automatic / 4WD",
    price: "$34,500 FOB",
    badge: "Taiwan Stock",
    images: ["/car/c1.jpg", "/car/c2.jpg", "/car/c3.jpg"],
    badgeType: "teal",
    stats: [
      { label: "Engine", val: "2700cc" },
      { label: "Mileage", val: "22,400 km" },
      { label: "Transmission", val: "Automatic" },
    ],
  },
  {
    id: "2",
    title: "Kubota L5018 Utility Tractor",
    category: "tractors",
    categoryLabel: "Tractor",
    year: 2019,
    specs: "50HP / Direct Injection / 4WD",
    price: "Ask for Price",
    badge: "Taiwan Yard",
    images: ["/car/c2.jpg", "/car/c4.jpg"],
    badgeType: "accent",
    stats: [
      { label: "Power", val: "50 HP" },
      { label: "Hours", val: "1,250 hrs" },
      { label: "Weight", val: "1,850 kg" },
    ],
  },
  {
    id: "3",
    title: "Komatsu PC200-8M0 Excavator",
    category: "machinery",
    categoryLabel: "Machinery",
    year: 2018,
    specs: "Crawler / 1.0m³ Bucket / Heavy Duty",
    price: "$68,000 FOB",
    badge: "Direct Sourced",
    images: ["/car/c3.jpg", "/car/c1.jpg"],
    badgeType: "dark",
    stats: [
      { label: "Capacity", val: "20 Tons" },
      { label: "Hours", val: "4,600 hrs" },
      { label: "Engine", val: "Komatsu SAA6D" },
    ],
  },
  {
    id: "4",
    title: "Mitsubishi Fuso Fighter Cargo Truck",
    category: "cars-lhd",
    categoryLabel: "Car (LHD)",
    year: 2016,
    specs: "7.5T Payload / Manual / Diesel LHD",
    price: "Ask for Price",
    badge: "Taiwan Stock",
    images: ["/car/c4.jpg", "/car/c2.jpg", "/car/c1.jpg"],
    badgeType: "teal",
    stats: [
      { label: "Engine", val: "7,540cc" },
      { label: "Payload", val: "7.5 Tons" },
      { label: "Steering", val: "LHD (Left)" },
    ],
  },
  {
    id: "5",
    title: "Yanmar EF494T Utility Tractor",
    category: "tractors",
    categoryLabel: "Tractor",
    year: 2020,
    specs: "49HP Diesel / Manual Sync Shuttle",
    price: "$14,800 FOB",
    badge: "Taiwan Yard",
    images: ["/car/c1.jpg", "/car/c3.jpg"],
    badgeType: "dark",
    stats: [
      { label: "Power", val: "49 HP" },
      { label: "Hours", val: "840 hrs" },
      { label: "Drive", val: "4WD Option" },
    ],
  },
  {
    id: "6",
    title: "Complete Kubota V2403 Diesel Engine",
    category: "parts",
    categoryLabel: "Parts",
    year: 2022,
    specs: "4-Cylinder Liquid Cooled Engine",
    price: "Ask for Price",
    badge: "In Stock",
    images: ["/car/c2.jpg"],
    badgeType: "accent",
    stats: [
      { label: "Type", val: "Diesel" },
      { label: "Volume", val: "2.4 Liters" },
      { label: "Condition", val: "Fully Rebuilt" },
    ],
  },
];

export default function FeaturedInventory() {
  const featuredItems = initialItems.slice(0, 6); // Just show the top items as featured

  return (
    <section id="inventory" className="py-24 md:py-32 bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <Reveal y={20}>
              <span className="text-xs font-semibold text-brand-red uppercase tracking-widest block mb-3">Live Yard Stock</span>
              <h2 className="font-display font-black text-3xl md:text-4xl tracking-tight leading-tight text-white mb-4">
                Featured Ready-to-Ship Machinery & Vehicles
              </h2>
              <p className="text-white/60 text-sm">
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
                className="bg-brand-carbon rounded-2xl border border-white/5 overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all duration-300 shadow-xl shadow-black/10"
              >
                {/* Visual Representation Block (Styled Card Top) */}
                <div className="relative aspect-[16/10] bg-brand-black p-6 flex flex-col justify-between overflow-hidden">
                  {/* Background graphic */}
                  {/* Image Display Carousel */}
                  <ImageSlider images={item.images} title={item.title} />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent z-10 pointer-events-none" />
                  <div className="absolute inset-0 bg-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-brand-black/90 backdrop-blur-sm border border-white/10 text-white/70 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Stock Origin Tag */}
                  <div className="absolute top-4 right-4 z-20">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow ${
                        item.badgeType === "accent"
                          ? "bg-brand-red text-white"
                          : item.badgeType === "teal"
                          ? "bg-brand-silver text-white"
                          : "bg-white/10 text-white border border-white/10"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Specs & Year */}
                  <div className="relative z-20 flex justify-between items-end border-t border-white/5 pt-3">
                    <span className="font-mono text-xs text-white/50">Year: {item.year}</span>
                    <span className="text-[11px] text-white/40 max-w-[200px] truncate">{item.specs}</span>
                  </div>
                </div>

                {/* Info Block */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display font-black text-lg text-white group-hover:text-brand-red transition-colors line-clamp-1 mb-4">
                    {item.title}
                  </h3>

                  {/* Specs List */}
                  <div className="grid grid-cols-3 gap-2 border-y border-white/5 py-4 mb-6">
                    {item.stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col text-left">
                        <span className="text-[9px] uppercase tracking-wider text-white/40">{stat.label}</span>
                        <span className="text-xs font-semibold text-white/80 mt-0.5 truncate">{stat.val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Row */}
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <span className="block text-[9px] uppercase tracking-wider text-white/40">Logistics Price</span>
                      <span className="text-base font-black text-white">{item.price}</span>
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-brand-red hover:text-white border border-white/10 hover:border-transparent text-white/90 text-xs font-bold px-4 py-2.5 rounded-lg transition-all duration-200"
                    >
                      <PhoneCall className="w-3.5 h-3.5" /> Quote Inquiry
                    </a>
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
              className="inline-flex items-center gap-2 text-xs font-semibold text-brand-red hover:text-white transition-colors border-b border-brand-red pb-1 uppercase tracking-wider"
            >
              View All <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
