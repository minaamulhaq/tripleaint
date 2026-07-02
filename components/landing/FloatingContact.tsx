"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, ChevronRight, Globe, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// ==========================================
// CONFIGURATION: Edit your office details here
// ==========================================
const CONTACT_CONFIG = {
  messengerUsername: "apex.global.exports",
  whatsappOffices: [
    {
      country: "Taiwan Desk (Taipei)",
      phone: "886227770199",
      message: "Hi, I'm interested in your Taiwan inventory."
    }
  ]
};

// SVG Glyphs for Brand Icons
const WhatsAppIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.579 1.966 14.11 .935 11.99.935c-5.437 0-9.86 4.371-9.863 9.803-.001 1.83.5 3.616 1.451 5.17l-1.009 3.688 3.791-.989-.313-.191zM17.65 15c-.295-.148-1.748-.862-2.019-.96-.27-.099-.468-.148-.665.148-.197.295-.762.96-.935 1.157-.172.196-.344.222-.64.074a9.712 9.712 0 0 1-2.528-1.558 10.708 10.708 0 0 1-1.747-2.176c-.172-.295-.018-.455.13-.602.132-.133.295-.344.443-.517.148-.172.197-.295.295-.492.099-.197.05-.369-.025-.517-.074-.148-.665-1.601-.911-2.193-.24-.576-.482-.497-.665-.506-.172-.008-.369-.01-.566-.01s-.517.074-.787.369c-.27.295-1.033 1.01-1.033 2.463s1.058 2.858 1.206 3.055c.148.197 2.083 3.18 5.047 4.46.705.305 1.256.487 1.684.623.708.226 1.353.194 1.862.118.568-.084 1.748-.713 1.994-1.402.246-.689.246-1.28.172-1.402-.074-.123-.27-.197-.566-.346z" />
  </svg>
);

const MessengerIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111S18.627 0 12 0zm1.293 14.83l-3.072-3.27-5.99 3.27 6.59-6.99 3.072 3.27 5.99-3.27-6.59 6.99z" />
  </svg>
);

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [showWhatsAppOptions, setShowWhatsAppOptions] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const widgetRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setShowWhatsAppOptions(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Handle Escape key close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setShowWhatsAppOptions(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setShowWhatsAppOptions(false);
    if (!hasInteracted) {
      setHasInteracted(true);
      sessionStorage.setItem("floating_contact_interacted", "true");
    }
  };

  useEffect(() => {
    const interacted = sessionStorage.getItem("floating_contact_interacted");
    if (interacted) {
      setHasInteracted(true);
    }
  }, []);

  return (
    <div
      ref={widgetRef}
      className="fixed z-50 flex flex-col items-end gap-3 bottom-24 right-6 md:bottom-24 md:right-8"
    >
      {/* Floating Channels Stack */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{
              type: shouldReduceMotion ? "tween" : "spring",
              stiffness: 300,
              damping: 20,
              staggerChildren: 0.05
            }}
            className="flex flex-col items-end gap-3 mb-1"
          >
            {/* Messenger Button */}
            <motion.a
              initial={{ scale: shouldReduceMotion ? 1 : 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: shouldReduceMotion ? 1 : 0.8, opacity: 0 }}
              href={`https://m.me/${CONTACT_CONFIG.messengerUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group relative"
              aria-label="Message us on Facebook Messenger"
            >
              {/* Tooltip */}
              <span className="hidden sm:inline-block absolute right-14 bg-brand-carbon text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                Message us on Messenger
              </span>
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#006AFF] to-[#00B2FF] text-white flex items-center justify-center shadow-lg shadow-black/20 hover:scale-[1.05] hover:rotate-2 transition-all">
                <MessengerIcon />
              </div>
            </motion.a>

            {/* WhatsApp Button (Triggers sub-menu for offices) */}
            <div className="relative flex items-center gap-2 group">
              <button
                onClick={() => setShowWhatsAppOptions(!showWhatsAppOptions)}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 hover:scale-[1.05] hover:-rotate-2 transition-all cursor-pointer"
                aria-label="Contact us on WhatsApp"
                aria-expanded={showWhatsAppOptions}
              >
                <WhatsAppIcon />
              </button>

              {/* Desktop tooltip (hide if sub-menu open) */}
              {!showWhatsAppOptions && (
                <span className="hidden sm:inline-block absolute right-14 bg-brand-carbon text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  Chat on WhatsApp
                </span>
              )}

              {/* Popover / Options sub-menu */}
              <AnimatePresence>
                {showWhatsAppOptions && (
                  <motion.div
                    initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9, x: shouldReduceMotion ? 0 : -10 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9, x: shouldReduceMotion ? 0 : -10 }}
                    className="absolute right-14 bottom-0 bg-brand-carbon border border-white/10 rounded-xl p-4 shadow-2xl w-60 text-left flex flex-col gap-2.5 z-55"
                  >
                    <div className="border-b border-white/10 pb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-white/50 flex items-center gap-1">
                        <Globe className="w-3.5 h-3.5 text-brand-red" /> Select Sourcing Office
                      </span>
                    </div>

                    {CONTACT_CONFIG.whatsappOffices.map((office) => (
                      <a
                        key={office.country}
                        href={`https://wa.me/${office.phone}?text=${encodeURIComponent(office.message)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between bg-brand-black hover:bg-brand-red/10 border border-white/5 hover:border-brand-red/30 p-2.5 rounded-lg text-white transition-all text-xs font-semibold group/item"
                      >
                        <span>{office.country}</span>
                        <ChevronRight className="w-4 h-4 text-white/40 group-hover/item:text-brand-red group-hover/item:translate-x-0.5 transition-all" />
                      </a>
                    ))}

                    <div className="flex items-center gap-1.5 text-[9px] text-brand-silver font-medium pt-1 border-t border-white/5">
                      <ShieldCheck className="w-3.5 h-3.5" /> Certified B2B Trade
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Collapsed Button */}
      <button
        onClick={handleToggle}
        className={`w-14 h-14 rounded-full bg-brand-red text-white flex items-center justify-center shadow-xl shadow-brand-red/25 relative focus-visible:ring-2 ring-offset-2 ring-brand-red cursor-pointer hover:bg-brand-red-dark hover:scale-[1.03] transition-all`}
        aria-label={isOpen ? "Close messaging options" : "Open messaging options"}
        aria-expanded={isOpen}
      >
        {/* Glow pulsing ring (only before first user interaction per session) */}
        {!hasInteracted && !isOpen && (
          <span className="absolute inset-0 rounded-full border-2 border-brand-red animate-ping opacity-60 pointer-events-none" />
        )}

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
