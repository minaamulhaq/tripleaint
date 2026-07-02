"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Search, Globe, ShieldCheck, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

// Custom count up component to avoid library version issues on React 19
function CountUp({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(end);
      return;
    }

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, shouldReduceMotion]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const [vehicleType, setVehicleType] = useState("");
  const [destination, setDestination] = useState("");
  const shouldReduceMotion = useReducedMotion();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (vehicleType || destination) {
      window.location.href = `/inventory?category=${vehicleType}`;
    } else {
      window.location.href = "/inventory";
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center bg-brand-black text-white pt-28 pb-20 overflow-hidden">
      {/* Background visual treatments */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-radial-gradient from-brand-carbon via-brand-black/70 to-brand-black" />

        {/* AAA motif watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
          <span className="font-display font-black text-[40rem] leading-none tracking-tighter">AAA</span>
        </div>

        {/* Chrome silver shimmer line */}
        <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-silver to-transparent opacity-30" />

        {/* Car silhouette */}
        <div className="absolute top-[20%] right-[-10%] w-[60%] opacity-10 select-none pointer-events-none">
          <svg viewBox="0 0 100 40" fill="none" stroke="currentColor" className="w-full h-auto text-brand-silver">
            <path d="M10 30 Q 20 15 40 15 Q 60 15 70 25 Q 80 25 90 30" strokeWidth="1" />
            <path d="M40 15 Q 50 5 70 10 Q 80 15 85 25" strokeWidth="1" />
            <circle cx="30" cy="30" r="5" strokeWidth="1" />
            <circle cx="75" cy="30" r="5" strokeWidth="1" />
          </svg>
        </div>

        {/* Subtle mesh background grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
        {/* Subtle glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red-light/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-silver/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 text-brand-red px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <Globe className="w-3.5 h-3.5 animate-spin-slow" /> Global Export Services Since 2009
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="brand-heading text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08] mb-6 text-white"
          >
            Heavy Machinery & Vehicles. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-red-light">
              Exported Worldwide.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-white/70 text-lg md:text-xl font-normal leading-relaxed max-w-xl mb-8"
          >
            Direct sourcing and certified export of used cars, commercial trucks, tractors, construction machinery, and parts from Taiwan. Secured logistics, verified inspections, and customs clearance.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
            <Link
              href="/inventory"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-br from-brand-red to-brand-red-dark text-white font-bold px-7 py-4 rounded-lg transition-all duration-200 hover:scale-[1.03] shadow-lg shadow-brand-red/25"
            >
              Browse Inventory <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-semibold px-7 py-4 rounded-lg transition-all"
            >
              Talk to Our Team
            </a>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10 w-full"
          >
            <div>
              <p className="font-display font-black text-3xl text-white">
                <CountUp end={17} suffix="+" />
              </p>
              <p className="text-xs text-white/50 uppercase tracking-wider mt-1">Years Experience</p>
            </div>
            <div>
              <p className="font-display font-black text-3xl text-brand-silver">
                <CountUp end={30} suffix="+" />
              </p>
              <p className="text-xs text-white/50 uppercase tracking-wider mt-1">Countries Served</p>
            </div>
            <div>
              <p className="font-display font-black text-3xl text-white">
                <CountUp end={1200} suffix="+" />
              </p>
              <p className="text-xs text-white/50 uppercase tracking-wider mt-1">Units Shipped</p>
            </div>
            <div>
              <p className="font-display font-black text-3xl text-brand-red">
                <CountUp end={100} suffix="%" />
              </p>
              <p className="text-xs text-white/50 uppercase tracking-wider mt-1">Inspected Units</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Quick Search Card on right */}
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.4 }}
          className="lg:col-span-5 bg-brand-carbon/90 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl shadow-black/45"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-brand-red/10 rounded-lg text-brand-red">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">Quick Export Finder</h3>
              <p className="text-xs text-white/50">Check availability in your region</p>
            </div>
          </div>

          <form onSubmit={handleSearchSubmit} className="space-y-4">
            <div>
              <label htmlFor="hero-vehicle-type" className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                Vehicle/Machinery Category
              </label>
              <select
                id="hero-vehicle-type"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all appearance-none"
              >
                <option value="">Select Category...</option>
                <option value="cars">Used Passenger Cars (LHD / RHD)</option>
                <option value="tractors">Used Tractors (Kubota, Yanmar)</option>
                <option value="machinery">Heavy Construction Machinery (Excavators, Loaders)</option>
                <option value="parts">Diesel Engines & Commercial Parts</option>
              </select>
            </div>

            <div>
              <label htmlFor="hero-destination" className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                Destination Region / Country
              </label>
              <select
                id="hero-destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all appearance-none"
              >
                <option value="">Select Destination...</option>
                <option value="africa">Africa (East, West, South)</option>
                <option value="middle-east">Middle East (UAE, Saudi Arabia)</option>
                <option value="asia">Southeast & South Asia</option>
                <option value="south-america">Central & South America</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-br from-brand-red to-brand-red-dark text-white font-bold py-3.5 rounded-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-brand-red/10"
              >
                <Search className="w-4 h-4" /> Search Available Stock
              </button>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-silver" /> Inspection Cleared
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-brand-red" /> Global Port Delivery
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
