"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ShieldCheck, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Inventory", href: "/inventory" },
  { label: "How to Buy", href: "/#how-to-buy" },
  { label: "Services", href: "/#services" },
  { label: "Destinations", href: "/#destinations" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active hash based on scroll position
      const scrollPosition = window.scrollY + 100;
      for (const link of navLinks) {
        if (link.href.startsWith('/#')) {
          try {
            const selector = link.href.substring(1);
            const el = document.querySelector(selector);
            if (el) {
              const top = (el as HTMLElement).offsetTop;
              const height = (el as HTMLElement).offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                setActiveHash(link.href);
                break;
              }
            }
          } catch (e) {
            // Ignore invalid selectors
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-brand-black/90 backdrop-blur-md py-4 border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="transition-all duration-300 bg-transparent">
              <Image
                src="/logo/triple-a-logo.png"
                alt="Triple A International"
                width={240}
                height={60}
                className="h-9 lg:h-12 w-auto rounded-lg"
                unoptimized
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeHash === link.href || (pathname === link.href && !link.href.startsWith("/#") && (link.href !== "/" || activeHash === ""));
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative text-sm font-semibold transition-colors py-2 ${
                    isActive ? "text-white" : "text-white hover:text-brand-red"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-white font-semibold bg-white/10 px-2.5 py-1 rounded-full border border-white/20">
              <ShieldCheck className="w-3.5 h-3.5" /> Licensed Exporter
            </div>
            <Link
              href="/inventory"
              className="inline-flex items-center gap-2 bg-gradient-to-br from-brand-red to-brand-red-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:scale-[1.03] shadow-md shadow-brand-red/20"
            >
              BUY NOW <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white/90 hover:text-white p-1"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] lg:hidden bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-brand-black p-8 flex flex-col border-l border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-12">
                <Link href="/" onClick={() => setIsOpen(false)} className="bg-transparent rounded-xl py-1">
                  <Image
                    src="/logo/triple-a-logo.png"
                    alt="Triple A International"
                    width={180}
                    height={40}
                    className="h-8 w-auto rounded-lg"
                    unoptimized
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white p-1"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link, idx) => {
                  const isActive = activeHash === link.href || (pathname === link.href && !link.href.startsWith("/#") && (link.href !== "/" || activeHash === ""));
                  return (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      key={link.label}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-semibold py-1 flex items-center justify-between border-b border-white/10 ${
                          isActive ? "text-brand-red" : "text-white hover:text-brand-red"
                        }`}
                      >
                        {link.label}
                        <ArrowRight className={`w-4 h-4 ${isActive ? "text-brand-red" : "text-white/40"}`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-auto flex flex-col gap-4">
                <div className="flex items-center justify-center gap-2 text-xs text-white font-semibold bg-white/10 py-2 rounded-lg border border-white/20">
                  <ShieldCheck className="w-4 h-4" /> Official Licensing Certified
                </div>
                <Link
                  href="/inventory"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center bg-gradient-to-br from-brand-red to-brand-red-dark text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-brand-red/20"
                >
                  BUY NOW <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
