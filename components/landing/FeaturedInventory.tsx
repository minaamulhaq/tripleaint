"use client";

import React, { useState, useEffect } from "react";
import Reveal from "./Reveal";
import { ArrowRight, Compass, Settings, AlertCircle, PhoneCall, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface InventoryItem {
  id: string;
  title: string;
  category: "cars-lhd" | "cars-rhd" | "tractors" | "machinery" | "parts";
  categoryLabel: string;
  year: number;
  specs: string;
  price: string;
  badge: string;
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
    badge: "Japan Stock",
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
    badge: "Japan Yard",
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
    badgeType: "accent",
    stats: [
      { label: "Type", val: "Diesel" },
      { label: "Volume", val: "2.4 Liters" },
      { label: "Condition", val: "Fully Rebuilt" },
    ],
  },
];

export default function FeaturedInventory() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [filteredItems, setFilteredItems] = useState<InventoryItem[]>(initialItems);

  useEffect(() => {
    // Listen for custom search events from Hero Quick Search
    const handleQuickSearch = (e: Event) => {
      const { vehicleType } = (e as CustomEvent).detail;
      if (vehicleType) {
        if (vehicleType === "cars") {
          setActiveTab("cars-rhd"); // Default to RHD for search match
        } else {
          setActiveTab(vehicleType);
        }
      }
    };

    window.addEventListener("quick-search", handleQuickSearch);
    return () => window.removeEventListener("quick-search", handleQuickSearch);
  }, []);

  useEffect(() => {
    if (activeTab === "all") {
      setFilteredItems(initialItems);
    } else {
      setFilteredItems(initialItems.filter((item) => item.category === activeTab));
    }
  }, [activeTab]);

  return (
    <section id="inventory" className="py-24 md:py-32 bg-[#0B1B2B] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <Reveal y={20}>
              <span className="text-xs font-semibold text-[#E8732E] uppercase tracking-widest block mb-3">Live Yard Stock</span>
              <h2 className="font-display font-black text-3xl md:text-4xl tracking-tight leading-tight text-white mb-4">
                Featured Ready-to-Ship Machinery & Vehicles
              </h2>
              <p className="text-white/60 text-sm">
                Each unit listed has cleared technical inspection and is ready for immediate container packing or Roll-on/Roll-off shipping. Custom orders sourced on demand.
              </p>
            </Reveal>
          </div>
          <div className="mt-6 md:mt-0">
            <Reveal y={10} delay={0.2}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#E8732E] hover:text-white transition-colors border-b border-[#E8732E] pb-1 uppercase tracking-wider"
              >
                Inquire About Custom Sourcing <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </Reveal>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-4 border-b border-white/10 overflow-x-auto scrollbar-none">
          {[
            { id: "all", label: "Show All" },
            { id: "cars-lhd", label: "Cars (LHD)" },
            { id: "cars-rhd", label: "Cars (RHD)" },
            { id: "tractors", label: "Tractors" },
            { id: "machinery", label: "Machinery" },
            { id: "parts", label: "Engines & Parts" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase border transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-[#E8732E] border-[#E8732E] text-white shadow-lg shadow-[#E8732E]/20"
                  : "bg-[#1A2A3A] border-white/5 hover:border-white/20 text-white/70 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid Container */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="bg-[#1A2A3A] rounded-2xl border border-white/5 overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all duration-300 shadow-xl shadow-black/10"
              >
                {/* Visual Representation Block (Styled Card Top) */}
                <div className="relative aspect-[16/10] bg-[#0B1B2B] p-6 flex flex-col justify-between overflow-hidden">
                  {/* Background graphic */}
                  <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B1B2B]/60 to-[#0B1B2B] z-10" />
                  <div className="absolute inset-0 bg-[#E8732E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-[#0B1B2B]/90 backdrop-blur-sm border border-white/10 text-white/70 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Stock Origin Tag */}
                  <div className="absolute top-4 right-4 z-20">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow ${
                        item.badgeType === "accent"
                          ? "bg-[#E8732E] text-white"
                          : item.badgeType === "teal"
                          ? "bg-[#3FA9A0] text-white"
                          : "bg-white/10 text-white border border-white/10"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Graphic Display Icon in the center representing machinery */}
                  <div className="flex-1 flex items-center justify-center relative z-10 py-6">
                    <Compass className="w-16 h-16 text-white/5 group-hover:text-[#E8732E]/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                  </div>

                  {/* Specs & Year */}
                  <div className="relative z-20 flex justify-between items-end border-t border-white/5 pt-3">
                    <span className="font-mono text-xs text-white/50">Year: {item.year}</span>
                    <span className="text-[11px] text-white/40 max-w-[200px] truncate">{item.specs}</span>
                  </div>
                </div>

                {/* Info Block */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display font-black text-lg text-white group-hover:text-[#E8732E] transition-colors line-clamp-1 mb-4">
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
                      className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-[#E8732E] hover:text-white border border-white/10 hover:border-transparent text-white/90 text-xs font-bold px-4 py-2.5 rounded-lg transition-all duration-200"
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
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#1A2A3A] hover:bg-white/5 border border-white/10 text-white font-bold px-8 py-4 rounded-xl transition-all"
            >
              Request Sourcing Quote for Custom Models <ArrowRight className="w-5 h-5 text-[#E8732E]" />
            </a>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
