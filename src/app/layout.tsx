import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://superiorstone.co"),
  title: {
    default: "Superior Stone — Boise Custom Countertops",
    template: "%s | Superior Stone — Boise Custom Countertops",
  },
  description:
    "Superior Stone fabricates premium granite, quartz, marble, quartzite, and porcelain countertops for homeowners and builders across Boise and the Treasure Valley.",
  openGraph: {
    siteName: "Superior Stone",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-brand-cream text-brand-charcoal">
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
