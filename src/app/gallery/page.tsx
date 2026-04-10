"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "Kitchens" | "Bathrooms" | "Entertainment";

const items: {
  src: string;
  alt: string;
  project: string;
  category: Exclude<Category, "All">;
}[] = [
  {
    src: "https://static.wixstatic.com/media/756893_e9608a21d8634a73b905d39d82e0e95e~mv2.jpg",
    alt: "Modern dark kitchen with white stone island",
    project: "Contemporary Kitchen Remodel",
    category: "Kitchens",
  },
  {
    src: "https://static.wixstatic.com/media/756893_661bfa43e371484090cb7008672f7586~mv2.jpg",
    alt: "White farmhouse kitchen with granite island",
    project: "Farmhouse Kitchen",
    category: "Kitchens",
  },
  {
    src: "https://static.wixstatic.com/media/756893_a796e083e0974684aa53840437b97b0d~mv2.jpg",
    alt: "Open kitchen with quartz island and leather stools",
    project: "Quartz Island Kitchen",
    category: "Kitchens",
  },
  {
    src: "https://static.wixstatic.com/media/756893_76ac0e54c80348f7a3121c6c56a000ef~mv2.jpg",
    alt: "Quartzite kitchen with gold fixtures and marble backsplash",
    project: "Quartzite Luxury Kitchen",
    category: "Kitchens",
  },
  {
    src: "https://static.wixstatic.com/media/756893_7f79965e668845369447d1c0bdedf246~mv2.jpg",
    alt: "Open concept kitchen with high ceilings",
    project: "Open Concept Kitchen",
    category: "Kitchens",
  },
  {
    src: "https://static.wixstatic.com/media/756893_a982d8ec313a4b2faf7e54e6d13929c8~mv2.jpg",
    alt: "Full marble shower surround and floating vanity",
    project: "Marble Master Bath",
    category: "Bathrooms",
  },
  {
    src: "https://static.wixstatic.com/media/756893_9e88eee3607b4798bb66d976aa991e1c~mv2.jpg",
    alt: "Dramatic dark marble feature wall and floor",
    project: "Dark Marble Feature Bath",
    category: "Bathrooms",
  },
  {
    src: "https://static.wixstatic.com/media/756893_84f480abda164d9e8a3c8ffb6ab63dda~mv2.jpg",
    alt: "All-marble shower room with stone bench",
    project: "All-Stone Wet Room",
    category: "Bathrooms",
  },
  {
    src: "https://static.wixstatic.com/media/756893_6ae56b1af8e8477d905466b1574ba50b~mv2.jpg",
    alt: "Elegant bathroom with stone tub surround and chandeliers",
    project: "Stone Tub Surround",
    category: "Bathrooms",
  },
  {
    src: "https://static.wixstatic.com/media/756893_8034865fb60540fc805e5dd11b5b2d62~mv2.jpg",
    alt: "Elegant white bar top with arched mirrors",
    project: "Entertainment Bar Top",
    category: "Entertainment",
  },
  {
    src: "https://static.wixstatic.com/media/756893_6a29dda9d3c24d4d8f577bfe33753b73~mv2.jpg",
    alt: "Blue wet bar with stone countertop and tile backsplash",
    project: "Custom Wet Bar",
    category: "Entertainment",
  },
  {
    src: "https://static.wixstatic.com/media/756893_955b0cee76d44291a6290329a8b1531b~mv2.jpg",
    alt: "White quartzite island with warm wood cabinetry",
    project: "Quartzite Statement Island",
    category: "Kitchens",
  },
];

const categories: Category[] = ["All", "Kitchens", "Bathrooms", "Entertainment"];

export default function GalleryPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-brand-cream pt-40 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-0.5 bg-brand-gold mx-auto mb-6" />
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-black mb-5">
            Our Portfolio
          </h1>
          <p className="font-body text-xl text-brand-charcoal/60 leading-relaxed">
            See the craftsmanship that sets us apart.
          </p>
        </div>
      </section>

      {/* ── Filter Bar ───────────────────────────────────── */}
      <section className="bg-white border-b border-brand-gray sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 font-body text-sm font-semibold px-5 py-2 rounded transition-colors duration-200 ${
                  active === cat
                    ? "bg-brand-gold text-white"
                    : "bg-brand-gray text-brand-charcoal hover:bg-brand-gold/20 hover:text-brand-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Masonry Grid ─────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
            >
              {filtered.map((item) => (
                <div
                  key={item.src}
                  className="group relative overflow-hidden rounded-lg break-inside-avoid"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-colors duration-300 flex flex-col items-center justify-center gap-2 p-4">
                    <p className="font-heading text-lg font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      {item.project}
                    </p>
                    <span className="font-body text-xs font-semibold tracking-widest text-brand-gold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="bg-brand-cream py-20 text-center border-t border-brand-gray">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-0.5 bg-brand-gold mx-auto mb-6" />
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-black mb-4">
            Inspired by what you see?
          </h2>
          <p className="font-body text-brand-charcoal/60 mb-8 leading-relaxed">
            We can build something just like it — or completely unique to your space.
          </p>
          <Link
            href="/contact"
            className="inline-block font-body font-semibold text-sm tracking-wide bg-brand-gold text-white px-8 py-3.5 rounded hover:bg-[#a6844e] transition-colors duration-200"
          >
            Request a Similar Project
          </Link>
        </div>
      </section>
    </>
  );
}
