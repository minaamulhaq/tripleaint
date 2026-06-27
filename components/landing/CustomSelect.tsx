"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  id?: string;
  options: Option[];
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

export default function CustomSelect({
  options,
  value,
  onChange,
  placeholder = "Select an option...",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Select Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-[#0B1B2B] hover:bg-[#0B1B2B]/80 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E8732E] focus:ring-1 focus:ring-[#E8732E] transition-all cursor-pointer text-left"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={selectedOption ? "text-white" : "text-white/40"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-white/50 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#E8732E]" : ""
          }`}
        />
      </button>

      {/* Options Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="absolute z-30 w-full mt-2 bg-[#1A2A3A] border border-white/10 rounded-lg shadow-2xl overflow-hidden max-h-60 overflow-y-auto scrollbar-none"
            role="listbox"
          >
            {options.map((opt) => (
              <li
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`flex items-center justify-between px-4 py-3 text-sm cursor-pointer transition-colors ${
                  opt.value === value
                    ? "bg-[#E8732E] text-white font-semibold"
                    : "text-white/80 hover:bg-[#0B1B2B] hover:text-white"
                }`}
                role="option"
                aria-selected={opt.value === value}
              >
                <span>{opt.label}</span>
                {opt.value === value && <Check className="w-4 h-4 text-white" />}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
