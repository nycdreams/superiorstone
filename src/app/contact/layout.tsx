import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free countertop quote from Superior Stone in Boise, ID. We offer free in-home measurements for granite, quartz, marble & quartzite projects across the Treasure Valley.",
  alternates: { canonical: "https://superiorstone.co/contact" },
  openGraph: {
    title: "Get a Free Quote | Superior Stone — Boise Custom Countertops",
    description:
      "Request a free countertop quote from Superior Stone in Boise, ID. We offer free in-home measurements for granite, quartz, marble & quartzite projects across the Treasure Valley.",
    url: "https://superiorstone.co/contact",
    images: [{ url: "https://static.wixstatic.com/media/756893_e9608a21d8634a73b905d39d82e0e95e~mv2.jpg", width: 1200, height: 630, alt: "Superior Stone Boise — free countertop estimate" }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
