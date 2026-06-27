import React from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import TrustMarquee from "@/components/landing/TrustMarquee";
import AboutSection from "@/components/landing/AboutSection";
import FeaturedInventory from "@/components/landing/FeaturedInventory";
import ProcessSteps from "@/components/landing/ProcessSteps";
import ServicesSection from "@/components/landing/ServicesSection";
import ExportMap from "@/components/landing/ExportMap";
import ProofGallery from "@/components/landing/ProofGallery";
import Testimonials from "@/components/landing/Testimonials";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustMarquee />
        <AboutSection />
        <FeaturedInventory />
        <ProcessSteps />
        <ServicesSection />
        <ExportMap />
        <ProofGallery />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
