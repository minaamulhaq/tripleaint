"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, Compass, MapPin, ChevronRight, CheckCircle, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import ImageSlider from "@/components/landing/ImageSlider";

import { initialItems, type InventoryItem } from "@/lib/data";

const categories = [
  { id: "all", label: "Show All Units" },
  { id: "suvs", label: "LHD SUVs" },
  { id: "cars-lhd", label: "LHD Cars" },
  { id: "trucks", label: "Commercial Trucks" },
  { id: "machinery", label: "Heavy Machinery" },
  { id: "parts", label: "Auto Parts" },
];

function InventoryContent() {
  const searchParams = useSearchParams();
  const defaultCategory = searchParams.get("category") || "all";
  
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState<InventoryItem[]>(initialItems);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  useEffect(() => {
    // Map old categories to new ones if accessed via old links
    if (defaultCategory === "cars-lhd" || defaultCategory === "suvs" || defaultCategory === "trucks" || defaultCategory === "machinery" || defaultCategory === "parts") {
      setActiveTab(defaultCategory);
    } else if (defaultCategory === "cars") {
      setActiveTab("suvs"); 
    } else if (defaultCategory === "tractors") {
      setActiveTab("machinery");
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
    <main className="flex-1 pt-32 pb-24 bg-brand-dark min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Mobile Filter Toggle */}
          <button 
            className="lg:hidden w-full bg-brand-card border border-brand-border rounded-xl p-4 flex items-center justify-between text-white font-bold"
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          >
            <span className="flex items-center gap-2"><Filter className="w-5 h-5 text-brand-gold" /> Filter Inventory</span>
            <ChevronRight className={`w-5 h-5 transition-transform ${isMobileFiltersOpen ? 'rotate-90' : ''}`} />
          </button>

          {/* Sidebar Filters */}
          <aside className={`${isMobileFiltersOpen ? 'block' : 'hidden'} lg:block w-full lg:w-72 flex-shrink-0 space-y-6`}>
            {/* Search */}
            <div className="bg-brand-card p-6 rounded-[24px] border border-brand-border shadow-2xl">
              <h3 className="text-[11px] font-bold text-brand-silver uppercase tracking-widest mb-4">Quick Search</h3>
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-silver" />
                <input 
                  type="text" 
                  placeholder="Search by model..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-brand-darker border border-brand-border rounded-[14px] pl-11 pr-4 h-[44px] text-sm text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-brand-card p-6 rounded-[24px] border border-brand-border shadow-2xl">
              <h3 className="text-[11px] font-bold text-brand-silver uppercase tracking-widest mb-4">Vehicle Category</h3>
              <div className="flex flex-col gap-2">
                {categories.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-[12px] text-xs font-bold uppercase transition-all cursor-pointer ${
                      activeTab === tab.id
                        ? "bg-brand-gold/10 border-brand-gold/30 text-brand-gold"
                        : "bg-transparent border-transparent text-brand-silver hover:bg-brand-darker hover:text-white"
                    } border`}
                  >
                    <span>{tab.label}</span>
                    {activeTab === tab.id && <ChevronRight className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Status Panel */}
            <div className="bg-brand-card p-6 rounded-[24px] border border-brand-border shadow-2xl">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#2E9E5B]" />
                <div>
                  <h4 className="text-sm font-bold text-white leading-none mb-1">Stock Verified</h4>
                  <p className="text-[10px] text-brand-silver leading-snug">All units are physically held in our proprietary dispatch yards.</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Grid View */}
          <div className="flex-1 w-full">
            
            {/* Header info bar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-divider">
              <h1 className="font-display font-black text-2xl lg:text-3xl text-white">
                Export Inventory <span className="text-brand-gold font-normal">({filteredItems.length})</span>
              </h1>
              <span className="text-[10px] text-brand-silver font-mono uppercase tracking-widest bg-brand-darker px-3 py-1.5 rounded-md border border-brand-border hidden sm:inline-block">
                Direct Sourcing Portal
              </span>
            </div>

            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
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
                    className="bg-brand-card rounded-[24px] border border-brand-border overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all duration-300 shadow-xl shadow-black/30"
                  >
                    <div className="relative aspect-[16/10] bg-brand-darker p-6 flex flex-col justify-between overflow-hidden">
                      <ImageSlider images={item.images} title={item.title} />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/40 to-transparent z-10 pointer-events-none" />
                      <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-brand-darker/90 backdrop-blur-md border border-brand-border text-white/80 font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full">
                          {item.categoryLabel}
                        </span>
                      </div>

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
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-4">
                        <h3 className="font-display font-bold text-lg text-white mb-1 line-clamp-1 group-hover:text-brand-gold transition-colors">
                          {item.year} {item.title}
                        </h3>
                        <p className="text-sm text-brand-silver line-clamp-1">{item.specs}</p>
                      </div>

                      {/* Technical Specs Mini-Grid */}
                      <div className="grid grid-cols-3 gap-2 mb-6">
                        {item.stats.map((stat, i) => (
                          <div key={i} className="bg-brand-darker rounded-[12px] p-2 text-center border border-brand-border">
                            <span className="block text-[9px] uppercase tracking-widest text-brand-silver mb-1">{stat.label}</span>
                            <span className="block text-xs font-bold text-white truncate">{stat.val}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto pt-5 border-t border-brand-divider flex items-center justify-between">
                        <div>
                          <span className="text-[10px] uppercase tracking-widest text-brand-silver block mb-1">Est. Value</span>
                          <span className="font-bold text-brand-gold text-lg">{item.price}</span>
                        </div>
                        <Link href={`/inventory/${item.id}`} className="w-11 h-11 rounded-full bg-brand-darker border border-brand-border flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all shadow-md">
                          <ChevronRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            
            {filteredItems.length === 0 && (
              <div className="py-20 text-center flex flex-col items-center justify-center bg-brand-card rounded-[24px] border border-brand-border mt-8">
                <Compass className="w-16 h-16 text-brand-border mb-4" />
                <h3 className="font-display font-bold text-xl text-white mb-2">No units found</h3>
                <p className="text-brand-silver text-sm">We couldn't find any inventory matching your current filters.</p>
                <button 
                  onClick={() => { setActiveTab("all"); setSearchQuery(""); }}
                  className="mt-6 text-sm font-bold text-brand-gold border-b border-brand-gold/30 hover:border-brand-gold pb-0.5 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}

export default function InventoryPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-brand-dark flex items-center justify-center text-brand-silver font-bold">Loading inventory...</div>}>
        <InventoryContent />
      </Suspense>
      <Footer />
    </>
  );
}
