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
    quote: "Sourcing Kubota tractors directly from Apex has halved our import agent fees. Their pre-shipment surveyor report matches the physical units 100% on arrival. Payment via T/T wire is secure and shipping booking is fast.",
    author: "Samuel Kiprop",
    role: "Director of Fleet Operations",
    company: "Rift Valley Tractor Distributors",
    location: "Nairobi, Kenya",
    rating: 5,
  },
  {
    id: "2",
    quote: "Importing used Komatsu excavators from Taiwan was always a high-risk gamble until we partnered with Apex. They sent clear video compression audits and managed the entire flat-rack loading. Will continue purchasing.",
    author: "Faisal Al-Mansoori",
    role: "Purchasing Manager",
    company: "Al-Mansoori Heavy Equipments",
    location: "Jebel Ali, Dubai",
    rating: 5,
  },
  {
    id: "3",
    quote: "We buy wholesale shipping containers of dismantled passenger car parts (CKD) and engines. Apex coordinates Tokyo port clearance, packing yards, and original documents dispatch via DHL instantly. A trustworthy B2B supplier.",
    author: "Tan Wei-Sheng",
    role: "Co-Founder",
    company: "Apex Motors Part Trading LLC",
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
    <section className="py-24 md:py-32 bg-[#F6F7F5] text-[#101417]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <Reveal y={20}>
            <span className="text-xs font-semibold text-[#E8732E] uppercase tracking-widest block mb-3">Client Endorsements</span>
            <h2 className="font-display font-black text-3xl md:text-4xl tracking-tight leading-tight text-[#0B1B2B] mb-5">
              Verified Reviews From B2B Importers
            </h2>
            <p className="text-[#5C6670] text-base">
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
              className="bg-white rounded-2xl border border-black/5 p-8 md:p-12 shadow-xl shadow-black/5 relative overflow-hidden"
            >
              {/* Giant quote icon */}
              <Quote className="absolute top-8 right-8 w-24 h-24 text-black/[0.02] pointer-events-none" />

              <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                {/* Author Info Column */}
                <div className="md:w-1/3 flex flex-col items-start text-left">
                  <div className="w-12 h-12 rounded-xl bg-[#0B1B2B] text-white flex items-center justify-center mb-4">
                    <UserCheck className="w-6 h-6 text-[#E8732E]" />
                  </div>
                  <h4 className="font-display font-black text-base text-[#0B1B2B] leading-tight">
                    {testimonials[activeIdx].author}
                  </h4>
                  <p className="text-xs text-[#5C6670] mt-0.5">{testimonials[activeIdx].role}</p>
                  <p className="text-xs font-bold text-[#E8732E] mt-2">{testimonials[activeIdx].company}</p>
                  <p className="text-[10px] text-[#5C6670] font-mono mt-1 uppercase tracking-wider">
                    {testimonials[activeIdx].location}
                  </p>
                </div>

                {/* Content Column */}
                <div className="md:w-2/3 flex flex-col justify-between h-full text-left">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonials[activeIdx].rating }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-[#E8732E] text-[#E8732E]" />
                    ))}
                  </div>

                  <blockquote className="text-base md:text-lg text-[#0B1B2B] font-medium leading-relaxed mb-6 italic">
                    "{testimonials[activeIdx].quote}"
                  </blockquote>

                  {/* Navigation controls */}
                  <div className="flex justify-between items-center pt-6 border-t border-black/5">
                    <div className="flex gap-1.5">
                      {testimonials.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveIdx(idx)}
                          className={`w-2.5 h-2.5 rounded-full transition-all ${
                            activeIdx === idx ? "bg-[#E8732E] w-6" : "bg-black/10 hover:bg-black/20"
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={handlePrev}
                        className="p-2 rounded-lg bg-black/5 hover:bg-black/10 text-[#0B1B2B] transition-colors"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="p-2 rounded-lg bg-black/5 hover:bg-black/10 text-[#0B1B2B] transition-colors"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight className="w-4 h-4" />
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
