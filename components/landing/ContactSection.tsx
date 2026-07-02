"use client";

import React, { useState } from "react";
import Reveal from "./Reveal";
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldAlert, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    category: "",
    message: "",
    honeypot: "", // Honeypot field for spam prevention
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = "Company/Contact name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email";
    }
    if (!formData.country.trim()) tempErrors.country = "Destination country is required";
    if (!formData.message.trim()) tempErrors.message = "Message details are required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    // Check honeypot - if filled, silently fail (bots fill everything)
    if (formData.honeypot) {
      setStatus("success");
      return;
    }

    setStatus("loading");
    
    // Mock API delay
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        category: "",
        message: "",
        honeypot: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-dark text-white relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-brand-card p-8 md:p-10 rounded-[24px] border border-brand-border shadow-2xl">
            <Reveal y={20}>
              <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block mb-3">Direct Quotation</span>
              <h3 className="font-display font-black text-2xl md:text-3xl text-white mb-6">
                Submit an Export Inquiry
              </h3>
              <p className="text-brand-silver text-sm mb-8">
                Receive shipping estimates, CIF rates, and inspection validation. Our coordinators respond within 4 business hours.
              </p>
            </Reveal>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#2E9E5B]/10 border border-[#2E9E5B]/30 rounded-xl p-8 text-center flex flex-col items-center justify-center"
              >
                <CheckCircle2 className="w-16 h-16 text-[#2E9E5B] mb-4" />
                <h4 className="font-display font-bold text-lg text-white">Inquiry Received Successfully</h4>
                <p className="text-sm text-brand-silver mt-2 max-w-sm">
                  We have assigned your request to our regional export coordinator. Check your inbox and WhatsApp/Line shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-xs text-brand-gold border-b border-brand-gold pb-0.5 font-bold uppercase tracking-wider hover:text-white hover:border-white transition-colors"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Honeypot field (hidden from users, exposed to spam bots) */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company-name" className="block text-[11px] font-bold uppercase tracking-widest text-brand-silver mb-2">
                      Company / Full Name <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      id="company-name"
                      type="text"
                      placeholder="e.g. Rift Valley Imports Ltd"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-brand-darker border border-brand-border rounded-[14px] px-4 py-4 text-sm text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                    />
                    {errors.name && <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1"><ShieldAlert className="w-3.5 h-3.5" /> {errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email-address" className="block text-[11px] font-bold uppercase tracking-widest text-brand-silver mb-2">
                      Email Address <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      id="email-address"
                      type="email"
                      placeholder="buyer@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-brand-darker border border-brand-border rounded-[14px] px-4 py-4 text-sm text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1"><ShieldAlert className="w-3.5 h-3.5" /> {errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="whatsapp-phone" className="block text-[11px] font-bold uppercase tracking-widest text-brand-silver mb-2">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      id="whatsapp-phone"
                      type="text"
                      placeholder="+254 700 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-brand-darker border border-brand-border rounded-[14px] px-4 py-4 text-sm text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="destination-port" className="block text-[11px] font-bold uppercase tracking-widest text-brand-silver mb-2">
                      Destination Port & Country <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      id="destination-port"
                      type="text"
                      placeholder="Mombasa, Kenya"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full bg-brand-darker border border-brand-border rounded-[14px] px-4 py-4 text-sm text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                    />
                    {errors.country && <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1"><ShieldAlert className="w-3.5 h-3.5" /> {errors.country}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="machinery-type" className="block text-[11px] font-bold uppercase tracking-widest text-brand-silver mb-2">
                    Inquiry Category
                  </label>
                  <select
                    id="machinery-type"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-brand-darker border border-brand-border rounded-[14px] px-4 py-4 text-sm text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all appearance-none"
                  >
                    <option value="" className="bg-brand-darker text-white">Select Category...</option>
                    <option value="cars" className="bg-brand-darker text-white">Used Vehicles (Passenger / SUVs)</option>
                    <option value="commercial" className="bg-brand-darker text-white">Commercial Trucks & Vans</option>
                    <option value="construction" className="bg-brand-darker text-white">Heavy Machinery (Excavators, Loaders)</option>
                    <option value="container" className="bg-brand-darker text-white">Bulk Engine & Dismantled Parts Container</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message-details" className="block text-[11px] font-bold uppercase tracking-widest text-brand-silver mb-2">
                    Purchase Details / Model Specifications <span className="text-brand-gold">*</span>
                  </label>
                  <textarea
                    id="message-details"
                    rows={4}
                    placeholder="Specify model numbers, target year range, and quantity (e.g. 3x Komatsu PC200 shipped CIF Mombasa Port)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-brand-darker border border-brand-border rounded-[14px] px-4 py-4 text-sm text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all resize-none"
                  />
                  {errors.message && <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1"><ShieldAlert className="w-3.5 h-3.5" /> {errors.message}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-brand-gold hover:bg-brand-gold-light disabled:bg-brand-gold/50 text-brand-dark font-bold py-4 h-[54px] rounded-[14px] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-brand-gold/10 hover:shadow-brand-gold/20"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-brand-dark" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Securing quote route...
                      </>
                    ) : (
                      <>
                        <Send className="w-4.5 h-4.5" /> Submit RFQ Sourcing Request
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Info & Offices */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Reveal y={20}>
                <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block mb-3">Corporate Directory</span>
                <h3 className="font-display font-black text-2xl md:text-3xl text-white mb-6">
                  Physical Office Yard Hubs
                </h3>
                <p className="text-brand-silver text-sm mb-8 leading-relaxed">
                  We own physical logistics yards where you can inspect items or coordinate packing directly.
                </p>
              </Reveal>

              <div className="space-y-6">

                {/* TW Office */}
                <Reveal y={15} delay={0.2}>
                  <div className="bg-brand-card p-6 rounded-[16px] border border-brand-border flex gap-4 shadow-lg">
                    <div className="w-10 h-10 rounded-[10px] bg-brand-gold/10 border border-brand-gold/20 text-brand-gold flex items-center justify-center mt-0.5 flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">Taiwan Taipei Port HQ</h4>
                      <p className="text-xs text-brand-silver mt-2 leading-relaxed">
                        Zhongzheng District, Taipei City, Taiwan<br />
                        Yard: Keelung Port Container terminal
                      </p>
                      <div className="flex flex-col xl:flex-row xl:items-center gap-2 xl:gap-4 mt-4 text-[13px] font-medium text-brand-silver">
                        <span className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-brand-gold" /> +886 2 2777 0199</span>
                        <span className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-brand-gold" /> tw@triple-a-intl.com</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Certifications footer badge */}
            <div className="mt-12 lg:mt-0 p-6 bg-brand-darker border border-brand-border rounded-[16px] flex gap-4 items-center shadow-lg">
              <Globe className="w-10 h-10 text-brand-gold flex-shrink-0" />
              <div>
                <h5 className="font-bold text-[13px] text-white">Bonded Customs Exporter</h5>
                <p className="text-[11px] text-brand-silver mt-1">Licensed under Ministry of Transportation and Tourism (JP) & Ministry of Economic Affairs (TW).</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
