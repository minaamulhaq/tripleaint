"use client";

import React, { useState, useEffect, useRef } from "react";
import Reveal from "./Reveal";
import { Quote, Star, ChevronLeft, ChevronRight, UserCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Sourcing Caterpillar wheel loaders directly from Triple A has halved our import agent fees. Their pre-shipment surveyor report matches the physical units 100% on arrival. Payment via T/T wire is secure and shipping booking is fast.",
    author: "Samuel Kiprop",
    role: "Director of Fleet Operations",
    company: "Rift Valley Machinery Distributors",
    location: "Nairobi, Kenya",
    rating: 5,
  },
  {
    id: "2",
    quote: "Importing used Komatsu excavators from Taiwan was always a high-risk gamble until we partnered with Triple A. They sent clear video compression audits and managed the entire flat-rack loading. Will continue purchasing.",
    author: "Faisal Al-Mansoori",
    role: "Purchasing Manager",
    company: "Al-Mansoori Heavy Equipments",
    location: "Jebel Ali, Dubai",
    rating: 5,
  },
  {
    id: "3",
    quote: "We buy wholesale shipping containers of dismantled passenger car parts (CKD) and engines. Triple A coordinates Tokyo port clearance, packing yards, and original documents dispatch via DHL instantly. A trustworthy B2B supplier.",
    author: "Tan Wei-Sheng",
    role: "Co-Founder",
    company: "Triple A Motors Part Trading LLC",
    location: "Manila, Philippines",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 md:py-32 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <Reveal y={20}>
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block mb-3">Client Endorsements</span>
            <h2 className="font-display font-black text-3xl md:text-4xl tracking-tight leading-tight text-white mb-5">
              Verified Reviews From B2B Importers
            </h2>
            <p className="text-brand-silver text-base">
              See how machinery dealerships, construction firms, and commercial vehicle importers rate our direct sourcing and port dispatch efficiency.
            </p>
          </Reveal>
        </div>

        {/* Testimonial Box */}
        <div className="max-w-4xl mx-auto">
          <Reveal y={30}>
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="bg-brand-card rounded-[24px] border border-brand-border p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Giant quote icon */}
              <Quote className="absolute top-8 right-8 w-32 h-32 text-brand-border pointer-events-none opacity-50" />

              <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                {/* Author Info Column */}
                <div className="md:w-1/3 flex flex-col items-start text-left">
                  <div className="w-12 h-12 rounded-[12px] bg-brand-darker border border-brand-border text-white flex items-center justify-center mb-5">
                    <UserCheck className="w-6 h-6 text-brand-gold" />
                  </div>
                  <h4 className="font-display font-black text-lg text-white leading-tight">
                    {testimonials[activeIdx].author}
                  </h4>
                  <p className="text-[13px] text-brand-silver mt-1">{testimonials[activeIdx].role}</p>
                  <p className="text-[13px] font-bold text-brand-gold mt-3">{testimonials[activeIdx].company}</p>
                  <p className="text-[10px] text-brand-silver font-mono mt-1.5 uppercase tracking-widest">
                    {testimonials[activeIdx].location}
                  </p>
                </div>

                {/* Content Column */}
                <div className="md:w-2/3 flex flex-col justify-between h-full text-left">
                  {/* Stars */}
                  <div className="flex gap-1.5 mb-5">
                    {Array.from({ length: testimonials[activeIdx].rating }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>

                  <blockquote className="text-base md:text-[19px] text-white font-medium leading-relaxed mb-8 italic">
                    "{testimonials[activeIdx].quote}"
                  </blockquote>

                  {/* Navigation controls */}
                  <div className="flex justify-between items-center pt-6 border-t border-brand-divider">
                    <div className="flex gap-2">
                      {testimonials.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveIdx(idx)}
                          className={`w-2.5 h-2.5 rounded-full transition-all ${
                            activeIdx === idx ? "bg-brand-gold w-8" : "bg-brand-silver/30 hover:bg-brand-silver/60"
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={handlePrev}
                        className="p-2.5 rounded-xl bg-brand-darker border border-brand-border hover:border-brand-gold/50 text-white transition-colors"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft className="w-4 h-4 text-brand-gold" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="p-2.5 rounded-xl bg-brand-darker border border-brand-border hover:border-brand-gold/50 text-white transition-colors"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight className="w-4 h-4 text-brand-gold" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
