import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import FloatingContact from "@/components/landing/FloatingContact";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apex Global Exports | Quality Used Vehicles & Heavy Machinery Sourcing",
  description: "Certified B2B exporter of heavy construction machinery, passenger cars, utility tractors, engines, and parts. Dispatching from Japan and Taiwan ports to Africa, the Middle East, and Asia.",
  keywords: "used cars export, buy used tractors, japan excavator export, taiwan machinery export, container ckd parts, JEVIC certified vehicles",
  openGraph: {
    title: "Apex Global Exports | Used Vehicles & Machinery Sourcing",
    description: "Sourcing and shipping premium vehicles & industrial machinery from Japan/Taiwan. 100% inspected, JEVIC certified.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0B1B2B]">
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
