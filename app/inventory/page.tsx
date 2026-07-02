"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, Compass, MapPin, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import ImageSlider from "@/components/landing/ImageSlider";

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
    images: ["/car/c3.jpg", "/car/c1.jpg", "/car/c2.jpg"],
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
    badge: "Taiwan Yard",
    images: ["/car/c2.jpg", "/car/c4.jpg"],
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
  {
    id: "7",
    title: "Toyota Hilux Revo Double Cab",
    category: "cars-lhd",
    categoryLabel: "Car (LHD)",
    year: 2020,
    specs: "2.4L Diesel / 4WD / LHD Conversion",
    price: "$28,500 FOB",
    badge: "Just Added",
    images: ["/car/c3.jpg", "/car/c1.jpg"],
    badgeType: "accent",
    stats: [
      { label: "Engine", val: "2400cc" },
      { label: "Mileage", val: "31,000 km" },
      { label: "Transmission", val: "Manual" },
    ],
  },
  {
    id: "8",
    title: "Caterpillar 950H Wheel Loader",
    category: "machinery",
    categoryLabel: "Machinery",
    year: 2015,
    specs: "Articulated / 3.3m³ Bucket",
    price: "$34,500 FOB",
    badge: "Taiwan Yard",
    images: ["/car/c4.jpg", "/car/c2.jpg", "/car/c1.jpg"],
    badgeType: "dark",
    stats: [
      { label: "Power", val: "211 HP" },
      { label: "Hours", val: "6,200 hrs" },
      { label: "Weight", val: "18.3 Tons" },
    ],
  },
];

function InventoryContent() {
  const searchParams = useSearchParams();
  const defaultCategory = searchParams.get("category") || "all";
  
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState<InventoryItem[]>(initialItems);

  useEffect(() => {
    if (defaultCategory === "cars-lhd" || defaultCategory === "machinery") {
      setActiveTab(defaultCategory);
    } else if (defaultCategory === "cars") {
      setActiveTab("cars-lhd"); 
    }
  }, [defaultCategory]);

  useEffect(() => {
    let result = initialItems;

    if (activeTab !== "all") {
      result = result.filter((item) => item.category === activeTab);
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter((item) => 
        item.title.toLowerCase().includes(q) || 
        item.specs.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q)
      );
    }

    setFilteredItems(result);
  }, [activeTab, searchQuery]);

  return (
    <main className="flex-1 pt-32 pb-24 bg-brand-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-red uppercase tracking-widest bg-brand-red/10 px-3 py-1.5 rounded-full mb-4">
            <MapPin className="w-3.5 h-3.5" /> Global Yard Inventory
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-white mb-6">
            Ready-to-Ship <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-red-light">
              Machinery & Vehicles
            </span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Browse our curated selection of direct-sourced heavy machinery and Left Hand Drive (LHD) vehicles. Available for immediate shipping.
          </p>
        </div>

        <div className="bg-brand-carbon p-6 rounded-2xl shadow-xl shadow-black/20 border border-white/5 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <div className="flex flex-wrap gap-2.5 overflow-x-auto scrollbar-none">
            {[
              { id: "all", label: "Show All" },
              { id: "cars-lhd", label: "LHD Cars" },
              { id: "machinery", label: "Machinery" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide uppercase transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-brand-red text-white shadow-lg shadow-brand-red/20 border border-brand-red"
                    : "bg-brand-black border border-white/5 text-white/60 hover:text-white hover:border-white/20"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80 flex-shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
            <input 
              type="text" 
              placeholder="Search by model, specs..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-brand-black border border-white/5 rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
            />
          </div>
        </div>

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
                className="bg-brand-carbon rounded-2xl border border-white/5 overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all duration-300 shadow-xl shadow-black/10"
              >
                <div className="relative aspect-[16/10] bg-brand-black p-6 flex flex-col justify-between overflow-hidden">
                  <ImageSlider images={item.images} title={item.title} />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent z-10 pointer-events-none" />
                  <div className="absolute inset-0 bg-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-brand-black/90 backdrop-blur-sm border border-white/10 text-white/70 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full">
                      {item.categoryLabel}
                    </span>
                  </div>

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
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h3 className="font-display font-bold text-lg text-white mb-1 line-clamp-1 group-hover:text-brand-red transition-colors">
                      {item.year} {item.title}
                    </h3>
                    <p className="text-sm text-white/60 line-clamp-1">{item.specs}</p>
                  </div>

                  {/* Technical Specs Mini-Grid */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {item.stats.map((stat, i) => (
                      <div key={i} className="bg-brand-black rounded-lg p-2 text-center border border-white/5">
                        <span className="block text-[9px] uppercase tracking-wider text-white/50 mb-0.5">{stat.label}</span>
                        <span className="block text-xs font-semibold text-white/90 truncate">{stat.val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-white/50 block mb-0.5">Est. Value</span>
                      <span className="font-bold text-brand-red">{item.price}</span>
                    </div>
                    <a href="#contact" className="w-10 h-10 rounded-full bg-brand-black border border-white/5 flex items-center justify-center text-white/70 group-hover:bg-brand-red group-hover:text-white transition-all shadow-sm group-hover:border-brand-red">
                      <ChevronRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredItems.length === 0 && (
          <div className="py-20 text-center flex flex-col items-center justify-center">
            <Compass className="w-16 h-16 text-white/10 mb-4" />
            <h3 className="font-display font-bold text-xl text-white mb-2">No units found</h3>
            <p className="text-white/60 text-sm">We couldn't find any inventory matching your current filters.</p>
            <button 
              onClick={() => { setActiveTab("all"); setSearchQuery(""); }}
              className="mt-6 text-sm font-semibold text-brand-red border-b border-brand-red pb-0.5"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default function InventoryPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-brand-black flex items-center justify-center text-white/60">Loading inventory...</div>}>
        <InventoryContent />
      </Suspense>
      <Footer />
    </>
  );
}
