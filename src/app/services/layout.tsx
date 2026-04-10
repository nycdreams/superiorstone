import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Superior Stone's countertop services in Boise, ID — granite, quartz, marble, quartzite, porcelain & custom fabrication. Expert install across the Treasure Valley.",
  alternates: { canonical: "https://superiorstone.co/services" },
  openGraph: {
    title: "Services | Superior Stone — Boise Custom Countertops",
    description:
      "Explore Superior Stone's countertop services in Boise, ID — granite, quartz, marble, quartzite, porcelain & custom fabrication. Expert install across the Treasure Valley.",
    url: "https://superiorstone.co/services",
    images: [{ url: "https://static.wixstatic.com/media/756893_f1e558e4001b41ea8e6a225e82da7dc7~mv2.jpg", width: 1200, height: 630, alt: "Quartz kitchen countertop by Superior Stone Boise" }],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
