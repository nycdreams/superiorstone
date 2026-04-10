import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse Superior Stone's project portfolio — custom granite, quartz, marble & quartzite countertops installed in kitchens and bathrooms across Boise and the Treasure Valley.",
  alternates: { canonical: "https://superiorstone.co/gallery" },
  openGraph: {
    title: "Portfolio | Superior Stone — Boise Custom Countertops",
    description:
      "Browse Superior Stone's project portfolio — custom granite, quartz, marble & quartzite countertops installed in kitchens and bathrooms across Boise and the Treasure Valley.",
    url: "https://superiorstone.co/gallery",
    images: [{ url: "https://static.wixstatic.com/media/756893_661bfa43e371484090cb7008672f7586~mv2.jpg", width: 1200, height: 630, alt: "Custom kitchen countertops by Superior Stone Boise" }],
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
