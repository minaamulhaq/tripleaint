import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, CheckCircle2, ShieldAlert, PhoneCall, Gauge, Check } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import ImageSlider from "@/components/landing/ImageSlider";
import { initialItems } from "@/lib/data";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function InventoryDetailsPage({ params }: Props) {
  const { id } = await params;
  const item = initialItems.find((i) => i.id === id);

  if (!item) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-brand-dark min-h-screen">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          
          {/* Back Navigation */}
          <Link 
            href="/inventory" 
            className="inline-flex items-center gap-2 text-brand-silver hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-wider"
          >
            <ChevronLeft className="w-4 h-4" /> Back to Inventory
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Media & Details */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Image Gallery Container */}
              <div className="bg-brand-card rounded-[24px] border border-brand-border overflow-hidden shadow-2xl relative">
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-brand-darker/90 backdrop-blur-md border border-brand-border text-white/80 font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full">
                    {item.categoryLabel}
                  </span>
                </div>
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-[#2E9E5B] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {item.badge}
                  </span>
                </div>
                <div className="aspect-[16/10] bg-brand-darker relative">
                  <ImageSlider images={item.images} title={item.title} />
                </div>
              </div>

              {/* Main Info */}
              <div>
                <h1 className="font-display font-black text-3xl md:text-4xl text-white mb-2">
                  {item.year} {item.title}
                </h1>
                <p className="text-brand-silver text-lg">{item.specs}</p>
              </div>

              {/* Technical Specifications */}
              <div className="bg-brand-card rounded-[24px] border border-brand-border p-8 shadow-xl">
                <h3 className="font-display font-bold text-xl text-white mb-6 flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-brand-gold" /> Technical Specifications
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {item.stats.map((stat, i) => (
                    <div key={i} className="bg-brand-darker rounded-[16px] p-4 border border-brand-border">
                      <span className="block text-[10px] uppercase tracking-widest text-brand-silver mb-1.5">{stat.label}</span>
                      <span className="block text-sm font-bold text-white">{stat.val}</span>
                    </div>
                  ))}
                  {/* Mock extra stats to fill the grid */}
                  <div className="bg-brand-darker rounded-[16px] p-4 border border-brand-border">
                    <span className="block text-[10px] uppercase tracking-widest text-brand-silver mb-1.5">Color</span>
                    <span className="block text-sm font-bold text-white">Factory Standard</span>
                  </div>
                  <div className="bg-brand-darker rounded-[16px] p-4 border border-brand-border">
                    <span className="block text-[10px] uppercase tracking-widest text-brand-silver mb-1.5">Fuel</span>
                    <span className="block text-sm font-bold text-white">Diesel</span>
                  </div>
                  <div className="bg-brand-darker rounded-[16px] p-4 border border-brand-border">
                    <span className="block text-[10px] uppercase tracking-widest text-brand-silver mb-1.5">Drive</span>
                    <span className="block text-sm font-bold text-white">LHD</span>
                  </div>
                </div>
              </div>

              {/* Verification & Trust */}
              <div className="bg-brand-darker border border-[#2E9E5B]/30 rounded-[24px] p-6 lg:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="w-16 h-16 rounded-full bg-[#2E9E5B]/10 flex items-center justify-center flex-shrink-0">
                  <ShieldAlert className="w-8 h-8 text-[#2E9E5B]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white mb-1">Pre-Shipment Inspection Verified</h4>
                  <p className="text-sm text-brand-silver leading-relaxed">
                    This unit has passed our rigorous 150-point export inspection. Condition reports, engine compression videos, and detailed undercarriage photos are available upon formal inquiry.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Action Panel */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-6">
                
                {/* Pricing Card */}
                <div className="bg-brand-card rounded-[24px] border border-brand-border p-8 shadow-2xl">
                  <div className="mb-6">
                    <span className="block text-xs font-bold uppercase tracking-widest text-brand-silver mb-2">Estimated Value (FOB)</span>
                    <div className="font-display font-black text-4xl text-brand-gold">
                      {item.price}
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-sm text-white">
                      <Check className="w-4 h-4 text-[#2E9E5B]" /> Available for Export
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white">
                      <Check className="w-4 h-4 text-[#2E9E5B]" /> Clean Title / Documents
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white">
                      <Check className="w-4 h-4 text-[#2E9E5B]" /> RoRo or Container Shipping
                    </div>
                  </div>

                  <a 
                    href="/#contact"
                    className="w-full bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-bold text-base h-14 rounded-[14px] transition-all duration-300 shadow-lg shadow-brand-gold/10 hover:shadow-brand-gold/20 flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-5 h-5" /> Buy Now
                  </a>
                  
                  <p className="text-center text-[11px] text-brand-silver mt-4">
                    Reference ID: <span className="font-mono text-white">EX-{item.id.padStart(4, '0')}</span>
                    <span className="mx-2 opacity-30">|</span>
                    Listed: <span className="text-white">{new Date(item.dateAdded).toLocaleDateString()}</span>
                  </p>
                </div>

                {/* Logistics Support Card */}
                <div className="bg-brand-darker border border-brand-border rounded-[24px] p-6 shadow-xl">
                  <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">Logistics Support</h4>
                  <ul className="space-y-3 text-xs text-brand-silver">
                    <li className="flex justify-between border-b border-brand-border pb-2">
                      <span>Yard Location</span>
                      <span className="text-white font-medium">Taiwan Hub</span>
                    </li>
                    <li className="flex justify-between border-b border-brand-border pb-2">
                      <span>Est. Loading Time</span>
                      <span className="text-white font-medium">7-14 Days</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Inspection Partners</span>
                      <span className="text-white font-medium">SGS, Bureau Veritas</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
