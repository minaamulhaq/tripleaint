import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-darker text-white pt-16 pb-8 border-t border-brand-border relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Logo & Info */}
          <div className="flex flex-col items-start">
            <Link href="/" className="inline-block bg-transparent rounded-xl py-1.5 mb-2">
              <Image 
                src="/logo/triple-a-logo.png" 
                alt="Triple A International" 
                width={200} 
                height={50} 
                className="h-10 lg:h-14 w-auto rounded-lg" 
                style={{ filter: "brightness(0) invert(1)" }}
                unoptimized
              />
            </Link>
            <p className="font-display italic text-brand-gold text-sm font-semibold mb-4">
              LHD Vehicles • Machinery • Parts
            </p>
            <p className="text-brand-silver text-xs leading-relaxed max-w-sm mb-6">
              Certified B2B exporter of heavy construction machinery, engines, and premium LHD passenger vehicles from Taiwan to buyers worldwide.
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-brand-silver font-medium bg-brand-silver/10 px-3 py-1 rounded-full border border-brand-silver/20">
              <ShieldCheck className="w-3.5 h-3.5" /> JUMVEA Member License No. 49302
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/40 mb-4">
              Corporate Directory
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-brand-silver">
              <a href="#about" className="hover:text-brand-gold transition-colors">Why Sourced From Us</a>
              <a href="#inventory" className="hover:text-brand-gold transition-colors">Featured Yard Stock</a>
              <a href="#how-to-buy" className="hover:text-brand-gold transition-colors">Port Import Stepper</a>
              <a href="#services" className="hover:text-brand-gold transition-colors">Container Dismantling & CKD</a>
              <a href="#destinations" className="hover:text-brand-gold transition-colors">Global Export Ports</a>
              <a href="#gallery" className="hover:text-brand-gold transition-colors">Yard Dispatch Gallery</a>
            </div>
          </div>

          {/* Yard Hub Locations */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/40 mb-4">
              Corporate Yards
            </h4>
            <div className="flex flex-col gap-4 text-xs text-white/70">
              <div>
                <p className="font-semibold text-white">Keelung Port Yard (Taiwan)</p>
                <p className="text-[11px] text-white/50 mt-0.5">Zhongzheng District, Keelung Port Area</p>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/40 mb-4">
              Export Desk
            </h4>
            <div className="flex flex-col gap-3 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-silver flex-shrink-0" />
                <span>+886 2 2777 0199 (TW Line)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-silver flex-shrink-0" />
                <span>sales@tripleainternational.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/40">
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            <span>© {new Date().getFullYear()} Triple A International. All rights reserved.</span>
            <Link href="#" className="hover:text-white transition-colors">Terms of Trade</Link>
            <Link href="#" className="hover:text-white transition-colors">CIF Agreement Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Charter</Link>
          </div>
          <div>
            <span>Official Licensed Port Authority Agent</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
