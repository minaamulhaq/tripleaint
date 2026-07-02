import type { Metadata } from "next";
import { Inter, Sora, Barlow } from "next/font/google";
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

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Triple A International — Used Cars, Parts & Export",
  description: "Quality used cars, tractors, machinery and parts exported worldwide from Taiwan. B2B vehicle export specialists with 17+ years of experience.",
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Triple A International",
    description: "Global used vehicle & machinery export specialists.",
    images: ['/og-image.jpg'],
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
      className={`${inter.variable} ${sora.variable} ${barlow.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col bg-brand-dark overflow-x-hidden w-full relative">
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
