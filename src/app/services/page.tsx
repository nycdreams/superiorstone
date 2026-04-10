"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    name: "Granite",

    description:
      "One of the hardest and most versatile natural stones available. Granite works equally well in kitchens, bathroom vanities, and outdoor applications — heat-resistant, scratch-resistant, and unique in every slab.",
    bullets: [
      "Kitchens: islands, perimeter counters, and bar tops",
      "Bathrooms: single and double vanity tops, shower surrounds",
      "Hundreds of natural colors and movement patterns in stock",
      "Sealed and finished in-house for long-term durability",
    ],
    image: "https://static.wixstatic.com/media/756893_d43455034a5b4d2584a659707b1ccdc0~mv2.jpg",
    alt: "Black granite kitchen countertops with professional range — Superior Stone Boise",
  },
  {
    name: "Quartz",
    description:
      "Engineered quartz is the go-to material for low-maintenance elegance. Non-porous and consistent throughout, it performs beautifully in both kitchens and bathrooms without ever needing to be sealed.",
    bullets: [
      "Kitchens: counters, islands, and backsplash coordination",
      "Bathrooms: vanity tops, tub decks, and niche shelving",
      "Non-porous surface resists stains and bacteria",
      "No sealing required — ever",
    ],
    image: "https://static.wixstatic.com/media/756893_f1e558e4001b41ea8e6a225e82da7dc7~mv2.jpg",
    alt: "Modern kitchen with large white quartz island — Superior Stone Boise",
  },
  {
    name: "Marble",
    description:
      "Marble brings timeless elegance to any surface. Each slab is hand-selected for veining and tone. Whether it is a kitchen island centerpiece or a full bathroom feature wall, marble makes a statement that never goes out of style.",
    bullets: [
      "Kitchens: islands, perimeter counters, and range hoods",
      "Bathrooms: vanities, shower walls, tub surrounds, and floors",
      "Unique veining patterns — no two slabs ever alike",
      "Sealing performed by our trusted partner Permatreat",
    ],
    image: "https://static.wixstatic.com/media/756893_927ddbac2b6e4620a9fbdd1aeac4114f~mv2.jpg",
    alt: "Large marble island with white veining in modern kitchen — Superior Stone Boise",
  },
  {
    name: "Quartzite",
    description:
      "Quartzite is a natural metamorphic rock harder than granite — and one of the most difficult stones to cut and finish correctly. Superior Stone is one of the few Boise fabricators that specializes in quartzite, with the tooling and expertise to do it right.",
    bullets: [
      "Kitchens: show-stopping islands and perimeter counters",
      "Bathrooms: luxury vanities and full stone wet rooms",
      "Harder and more durable than granite or marble",
      "Requires specialist fabrication — we are one of few in Boise who offer it",
    ],
    image: "https://static.wixstatic.com/media/756893_955b0cee76d44291a6290329a8b1531b~mv2.jpg",
    alt: "White quartzite kitchen island with warm wood cabinetry — Superior Stone Boise",
  },
  {
    name: "Porcelain",
    description:
      "Large-format porcelain slabs deliver the look of natural stone with unmatched durability and minimal upkeep. UV stable and virtually impervious to staining, porcelain is ideal for kitchens, bathrooms, and outdoor spaces.",
    bullets: [
      "Kitchens: counters, islands, and waterfall edges",
      "Bathrooms: vanities, wet walls, floors, and shower surrounds",
      "UV stable — will not fade in outdoor or sunlit installations",
      "No sealing required, resistant to heat and scratching",
    ],
    image: "https://static.wixstatic.com/media/756893_e5fd08e44a944cb2a33cd6a4d83fbfa3~mv2.jpg",
    alt: "Stone-look porcelain bathroom with vaulted ceiling — Superior Stone Boise",
  },
  {
    name: "Custom Fabrication",
    description:
      "Every piece we make is custom — templated, cut, and finished in our Boise shop. We handle complex layouts, waterfall edges, integrated sinks, and specialty stone. No project is too detailed.",
    bullets: [
      "Full in-shop fabrication with precision CNC and hand finishing",
      "Waterfall edges, mitered joints, and custom edge profiles",
      "Undermount, vessel, and farmhouse sink cutouts",
      "Template-to-install turnaround typically 1–2 weeks",
    ],
    image: "https://static.wixstatic.com/media/756893_b166a1af39694973a52097fe81276b61~mv2.jpg",
    alt: "Custom dark granite kitchen island — Superior Stone Boise",
  },
];

const faqs = [
  {
    q: "How long does a typical countertop project take?",
    a: "From your free in-home measurement to completed installation, most projects take 1–2 weeks. We template your space, fabricate in our Boise shop, and schedule installation at your convenience. Rush timelines are sometimes available — just ask.",
  },
  {
    q: "Do I need to seal my countertops after installation?",
    a: "Quartz countertops require no sealing — ever. Granite and marble are sealed during fabrication and we recommend resealing every 1–2 years depending on use. We'll walk you through the care routine for your specific material at installation.",
  },
  {
    q: "What is quartzite and why is it more expensive?",
    a: "Quartzite is a natural metamorphic rock — harder than granite and one of the most difficult stones to cut and finish correctly. It requires specialized tooling and expertise. Superior Stone is one of the few Boise fabricators that specializes in quartzite, and we take pride in getting it right.",
  },
  {
    q: "Can you match existing countertops or cabinetry?",
    a: "Yes. We work with samples and photos to find the closest match available. For partial replacements, we'll do our best to source slabs from the same lot if possible, and we'll be upfront with you if a perfect match isn't achievable.",
  },
  {
    q: "Do you handle demolition and removal of existing countertops?",
    a: "Yes — removal and disposal of your existing countertops is included with most installations. Just let us know during your estimate and we'll confirm the details for your specific project.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-brand-gray">
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="font-heading text-lg font-semibold text-brand-black group-hover:text-brand-gold transition-colors duration-200">
          {q}
        </span>
        <span className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-brand-gray text-brand-gold transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 pb-5" : "max-h-0"}`}>
        <p className="font-body text-brand-charcoal/70 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-brand-cream pt-40 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-0.5 bg-brand-gold mx-auto mb-6" />
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-black mb-5">
            Our Services
          </h1>
          <p className="font-body text-xl text-brand-charcoal/60 leading-relaxed">
            From selection to installation — we handle everything.
          </p>
        </div>
      </section>

      {/* ── Service Sections ─────────────────────────────── */}
      {services.map((service, i) => {
        const imageLeft = i % 2 === 0;
        return (
          <section key={service.name} className={`py-20 ${i % 2 === 0 ? "bg-white" : "bg-brand-cream"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${imageLeft ? "" : "lg:flex-row-reverse"}`}>

                {/* Image */}
                <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>

                {/* Text */}
                <div className="w-full lg:w-1/2">
                  <div className="w-10 h-0.5 bg-brand-gold mb-5" />
                  <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-black mb-3">
                    {service.name}
                  </h2>

                  <p className="font-body text-brand-charcoal/70 leading-relaxed mb-7">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-brand-gold" />
                        <span className="font-body text-sm text-brand-charcoal/80 leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-block font-body text-sm font-semibold tracking-wide bg-brand-gold text-white px-8 py-3.5 rounded hover:bg-[#a6844e] transition-colors duration-200"
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-brand-gold mx-auto mb-6" />
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-black mb-4">
              Common Questions
            </h2>
            <p className="font-body text-brand-charcoal/60 text-lg">
              Everything you need to know before you start.
            </p>
          </div>
          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="bg-brand-gray py-20 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-0.5 bg-brand-gold mx-auto mb-6" />
          <h2 className="font-heading text-4xl font-bold text-brand-black mb-4">
            Ready to get started?
          </h2>
          <p className="font-body text-brand-charcoal/60 text-lg mb-8 leading-relaxed">
            Book a free in-home measurement and we will bring samples, answer your questions, and quote you on the spot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="font-body font-semibold text-sm tracking-wide bg-brand-gold text-white px-8 py-3.5 rounded hover:bg-[#a6844e] transition-colors duration-200"
            >
              Book a Free Estimate
            </Link>
            <a
              href="tel:+12084479593"
              className="font-body font-semibold text-sm tracking-wide border border-brand-charcoal/30 text-brand-charcoal px-8 py-3.5 rounded hover:border-brand-gold hover:text-brand-gold transition-colors duration-200"
            >
              Call (208) 447-9593
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
