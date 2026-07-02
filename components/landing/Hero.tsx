"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Search, Globe, ShieldCheck, MapPin, Calendar, Truck, CheckCircle } from "lucide-react";
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
    <section className="relative min-h-[95vh] flex items-center justify-center bg-brand-dark text-white pt-28 pb-20 overflow-hidden">
      {/* Background visual treatments */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-radial-gradient from-brand-card via-brand-dark/90 to-brand-dark" />

        {/* AAA motif watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] select-none pointer-events-none">
          <span className="font-display font-black text-[40rem] leading-none tracking-tighter">AAA</span>
        </div>

        {/* Golden shimmer line */}
        <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-20" />

        {/* Subtle mesh background grid - Industrial texture */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#D4AF37_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        {/* Subtle glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
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
            className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 text-brand-gold px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <Globe className="w-4 h-4 animate-spin-slow" /> Premium Global Logistics
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="brand-heading text-4xl md:text-5xl lg:text-[64px] tracking-tight leading-[1.1] mb-6 text-white"
          >
            Heavy Machinery & Vehicles.<br />
            <span className="text-brand-gold">Exported Worldwide.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-brand-silver text-lg md:text-xl font-normal leading-relaxed max-w-xl mb-10"
          >
            Direct sourcing and certified export of premium LHD cars, commercial trucks, construction machinery, and parts. Secured logistics, verified inspections, and customs clearance.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto">
            <Link
              href="/inventory"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-bold px-8 h-[54px] rounded-[14px] transition-all duration-300 shadow-lg shadow-brand-gold/20"
            >
              Browse Inventory <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold/10 font-bold px-8 h-[54px] rounded-[14px] transition-all duration-300"
            >
              Talk to Our Team
            </a>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-brand-border w-full"
          >
            <div className="flex flex-col items-start">
              <Calendar className="w-6 h-6 text-brand-gold mb-3 opacity-80" strokeWidth={1.5} />
              <p className="font-display font-black text-3xl text-white">
                <CountUp end={17} suffix="+" />
              </p>
              <p className="text-[11px] text-brand-silver uppercase tracking-wider mt-1">Years Experience</p>
            </div>
            <div className="flex flex-col items-start">
              <Globe className="w-6 h-6 text-brand-gold mb-3 opacity-80" strokeWidth={1.5} />
              <p className="font-display font-black text-3xl text-white">
                <CountUp end={30} suffix="+" />
              </p>
              <p className="text-[11px] text-brand-silver uppercase tracking-wider mt-1">Countries Served</p>
            </div>
            <div className="flex flex-col items-start">
              <Truck className="w-6 h-6 text-brand-gold mb-3 opacity-80" strokeWidth={1.5} />
              <p className="font-display font-black text-3xl text-white">
                <CountUp end={1200} suffix="+" />
              </p>
              <p className="text-[11px] text-brand-silver uppercase tracking-wider mt-1">Units Shipped</p>
            </div>
            <div className="flex flex-col items-start">
              <CheckCircle className="w-6 h-6 text-brand-gold mb-3 opacity-80" strokeWidth={1.5} />
              <p className="font-display font-black text-3xl text-white">
                <CountUp end={100} suffix="%" />
              </p>
              <p className="text-[11px] text-brand-silver uppercase tracking-wider mt-1">Inspected Units</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Quick Search Card on right */}
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.4 }}
          className="lg:col-span-5 bg-brand-card/90 backdrop-blur-xl p-8 rounded-[24px] border border-brand-border shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-brand-gold/10 rounded-xl text-brand-gold">
              <Search className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white">Global Export Finder</h3>
              <p className="text-sm text-brand-silver">Check availability in your region</p>
            </div>
          </div>

          <form onSubmit={handleSearchSubmit} className="space-y-5">
            <div>
              <label htmlFor="hero-vehicle-type" className="block text-[11px] font-bold uppercase tracking-widest text-brand-silver mb-2">
                Vehicle/Machinery Category
              </label>
              <select
                id="hero-vehicle-type"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="w-full bg-brand-darker border border-brand-border rounded-[14px] px-5 h-[54px] text-sm text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all appearance-none"
              >
                <option value="">Select Category...</option>
                <option value="cars">Used LHD Passenger Cars</option>
                <option value="suvs">LHD SUVs & Pickups</option>
                <option value="trucks">Commercial Trucks</option>
                <option value="machinery">Heavy Construction Machinery</option>
                <option value="parts">Diesel Engines & Auto Parts</option>
              </select>
            </div>

            <div>
              <label htmlFor="hero-destination" className="block text-[11px] font-bold uppercase tracking-widest text-brand-silver mb-2">
                Destination Region / Country
              </label>
              <select
                id="hero-destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-brand-darker border border-brand-border rounded-[14px] px-5 h-[54px] text-sm text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all appearance-none"
              >
                <option value="">Select Destination...</option>
                <option value="africa">Africa</option>
                <option value="middle-east">Middle East</option>
                <option value="asia">Asia</option>
                <option value="americas">Americas</option>
                <option value="europe">Europe</option>
              </select>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-bold h-[54px] rounded-[14px] transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-brand-gold/10"
              >
                <Search className="w-5 h-5" /> Search Available Stock
              </button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-brand-border flex items-center justify-between text-xs text-brand-silver">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-brand-gold" /> Inspection Cleared
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-brand-gold" /> Global Port Delivery
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
