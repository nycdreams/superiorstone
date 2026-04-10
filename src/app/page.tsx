import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Superior Stone fabricates custom granite, quartz, marble & quartzite countertops in Boise, ID. Free in-home estimates for Treasure Valley homeowners and builders.",
  alternates: { canonical: "https://superiorstone.co" },
  openGraph: {
    title: "Home | Superior Stone — Boise Custom Countertops",
    description:
      "Superior Stone fabricates custom granite, quartz, marble & quartzite countertops in Boise, ID. Free in-home estimates for Treasure Valley homeowners and builders.",
    url: "https://superiorstone.co",
    images: [{ url: "https://static.wixstatic.com/media/756893_e9608a21d8634a73b905d39d82e0e95e~mv2.jpg", width: 1200, height: 630, alt: "Modern kitchen with stone countertop by Superior Stone Boise" }],
  },
};

const galleryPhotos = [
  {
    src: "https://static.wixstatic.com/media/756893_e9608a21d8634a73b905d39d82e0e95e~mv2.jpg",
    alt: "Modern kitchen island with stone countertop — Superior Stone Boise",
    label: "Countertop · Kitchen",
    span: "md:col-span-2",
  },
  {
    src: "https://static.wixstatic.com/media/756893_12c6f77a52304e9f854fdb6e1011ddcd~mv2.jpg",
    alt: "Stone countertop installation — Superior Stone Boise",
    label: "Countertop · Kitchen",
    span: "",
  },
  {
    src: "https://static.wixstatic.com/media/756893_76ac0e54c80348f7a3121c6c56a000ef~mv2.jpg",
    alt: "Quartzite kitchen countertop with gold fixtures — Superior Stone Boise",
    label: "Quartzite · Kitchen",
    span: "",
  },
  {
    src: "https://static.wixstatic.com/media/756893_395e8c1f24484a30bd43536a71034d2b~mv2.jpg",
    alt: "Stone countertop installation — Superior Stone Boise",
    label: "Countertop · Kitchen",
    span: "",
  },
  {
    src: "https://static.wixstatic.com/media/756893_4fd30d830697419f8277ef88c3680116~mv2.jpg",
    alt: "Stone countertop installation — Superior Stone Boise",
    label: "Countertop · Kitchen",
    span: "",
  },
  {
    src: "https://static.wixstatic.com/media/756893_a982d8ec313a4b2faf7e54e6d13929c8~mv2.jpg",
    alt: "Marble bathroom vanity and shower — Superior Stone Boise",
    label: "Marble · Bathroom",
    span: "",
  },
  {
    src: "https://static.wixstatic.com/media/756893_843a1064dfbb478ba2226990cddedf27~mv2.jpg",
    alt: "Stone countertop installation — Superior Stone Boise",
    label: "Countertop · Kitchen",
    span: "",
  },
  {
    src: "https://static.wixstatic.com/media/756893_927ddbac2b6e4620a9fbdd1aeac4114f~mv2.jpg",
    alt: "Stone countertop installation — Superior Stone Boise",
    label: "Countertop · Kitchen",
    span: "",
  },
  {
    src: "https://static.wixstatic.com/media/756893_acbbad4c793f431bb25a407a2e32a857~mv2.jpg",
    alt: "Stone countertop installation — Superior Stone Boise",
    label: "Countertop · Kitchen",
    span: "",
  },
  {
    src: "https://static.wixstatic.com/media/756893_b96515da864f457a8568b23fbf70feda~mv2.jpg",
    alt: "Stone countertop installation — Superior Stone Boise",
    label: "Countertop · Kitchen",
    span: "",
  },
  {
    src: "https://static.wixstatic.com/media/756893_d2c8a824825644329724f5fa6ad21a7d~mv2.jpg",
    alt: "Stone countertop installation — Superior Stone Boise",
    label: "Countertop · Kitchen",
    span: "",
  },
  {
    src: "https://static.wixstatic.com/media/756893_ff02e7c1a37348a8a2bc29ef71b659fd~mv2.jpg",
    alt: "Stone countertop installation — Superior Stone Boise",
    label: "Countertop · Kitchen",
    span: "",
  },
];

const trustPoints = [
  {
    title: "Licensed & Insured",
    body: "We hold Idaho contractor license RCE-65056. Every job is fully insured for your peace of mind.",
  },
  {
    title: "Custom Fabrication",
    body: "Each countertop is templated, cut, and finished in-house to your exact specifications — no shortcuts.",
  },
  {
    title: "Locally Owned",
    body: "Proudly serving the Treasure Valley and surrounding areas from our Boise shop since day one.",
  },
  {
    title: "Free Estimates",
    body: "No pressure. We'll measure your space, walk you through your options, and quote you — for free.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Superior Stone",
  description: "Custom stone countertops in Boise, Idaho",
  url: "https://superiorstone.co",
  telephone: "+1-208-447-9593",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2762 S Featherly Way",
    addressLocality: "Boise",
    addressRegion: "ID",
    postalCode: "83709",
    addressCountry: "US",
  },
  areaServed: ["Boise", "Eagle", "Meridian", "Nampa", "Caldwell"],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero — split layout ───────────────────────────── */}
      <section className="min-h-[92vh] grid grid-cols-1 lg:grid-cols-2">

        {/* Left: text */}
        <div className="flex flex-col justify-center bg-white px-8 sm:px-14 lg:px-20 py-24 lg:py-32">
          <div className="w-14 h-0.5 bg-brand-gold mb-8" />
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-black leading-tight mb-6">
            Elegant countertops crafted for{" "}
            <span className="text-brand-gold">timeless beauty</span>
          </h1>
          <p className="font-body text-lg text-brand-charcoal/70 mb-6 leading-relaxed max-w-lg">
            Superior Stone fabricates premium granite, quartz, marble, and porcelain
            countertops for homeowners and builders across the Treasure Valley.
          </p>
          <p className="font-body text-sm text-brand-charcoal/60 mb-10 leading-relaxed max-w-lg border-l-2 border-brand-gold pl-4">
            One of the few Boise fabricators that specializes in{" "}
            <span className="font-semibold text-brand-charcoal">quartzite</span> — one of
            the hardest and most demanding natural stones to cut and finish.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="font-body font-semibold text-sm tracking-wide bg-brand-gold text-white px-7 py-3.5 rounded hover:bg-[#a6844e] transition-colors duration-200 text-center"
            >
              Get a Free Estimate
            </Link>
            <Link
              href="/gallery"
              className="font-body font-semibold text-sm tracking-wide border border-brand-charcoal/30 text-brand-charcoal px-7 py-3.5 rounded hover:border-brand-gold hover:text-brand-gold transition-colors duration-200 text-center"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Right: photo */}
        <div className="relative min-h-[50vh] lg:min-h-full">
          <Image
            src="https://static.wixstatic.com/media/756893_661bfa43e371484090cb7008672f7586~mv2.jpg"
            alt="Custom granite kitchen countertops by Superior Stone Boise"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* ── Stats Trust Bar ──────────────────────────────── */}
      <section className="bg-brand-cream border-y border-brand-gray py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { stat: "500+", label: "Projects Completed" },
              { stat: "15+", label: "Years Experience" },
              { stat: "100%", label: "Satisfaction Guarantee" },
              { stat: "#1 Rated", label: "In Boise" },
            ].map(({ stat, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <span className="font-heading text-4xl sm:text-5xl font-bold text-brand-gold">
                  {stat}
                </span>
                <span className="font-body text-sm text-brand-charcoal/60 tracking-wide">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Preview ─────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-brand-gold mx-auto mb-6" />
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-black mb-4">
              What We Offer
            </h2>
            <p className="font-body text-brand-charcoal/60 text-lg max-w-xl mx-auto">
              Premium natural stone for every room in your home.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Granite Countertops",
                desc: "Durable, heat-resistant granite surfaces available in hundreds of natural patterns and colors.",
              },
              {
                name: "Quartz Countertops",
                desc: "Low-maintenance engineered quartz combining consistent beauty with exceptional durability.",
              },
              {
                name: "Marble Surfaces",
                desc: "Timeless marble for kitchens, bathrooms, and feature walls with elegant veining and finish.",
              },
              {
                name: "Custom Fabrication",
                desc: "Every piece templated, cut, and finished in our Boise shop to your exact specifications.",
              },
            ].map(({ name, desc }) => (
              <Link
                key={name}
                href="/services"
                className="group flex flex-col gap-5 p-7 rounded-lg border border-brand-gray bg-brand-cream hover:border-brand-gold hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-heading text-lg font-bold text-brand-black">
                  {name}
                </h3>
                <p className="font-body text-sm text-brand-charcoal/70 leading-relaxed flex-1">
                  {desc}
                </p>
                <span className="font-body text-xs font-semibold text-brand-gold tracking-wide group-hover:underline underline-offset-2">
                  Learn more
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="font-body text-sm font-semibold tracking-wide text-brand-gold border border-brand-gold px-8 py-3.5 rounded hover:bg-brand-gold hover:text-white transition-colors duration-200"
            >
              See All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Gallery ───────────────────────────────────────── */}
      <section className="bg-brand-cream py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-brand-gold mx-auto mb-6" />
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-black mb-4">
              Our Work
            </h2>
            <p className="font-body text-brand-charcoal/60 text-lg max-w-xl mx-auto">
              Every project is custom-fabricated in our Boise shop and installed by our own crew.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
            {galleryPhotos.slice(0, 6).map((photo) => (
              <div
                key={photo.src}
                className="group relative overflow-hidden rounded-lg break-inside-avoid"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-body text-xs font-semibold tracking-widest text-white/90 uppercase">
                    {photo.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="font-body text-sm font-semibold tracking-wide text-brand-gold border border-brand-gold px-8 py-3.5 rounded hover:bg-brand-gold hover:text-white transition-colors duration-200"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Superior Stone ────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-brand-gold mx-auto mb-6" />
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-black mb-4">
              Why Choose Superior Stone?
            </h2>
            <p className="font-body text-brand-charcoal/60 text-lg max-w-xl mx-auto">
              We&apos;re not a big-box showroom. We&apos;re your local Boise fabricator — hands-on
              from template to install.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {trustPoints.map((point) => (
              <div key={point.title} className="flex flex-col gap-4">
                <div className="w-10 h-0.5 bg-brand-gold" />
                <h3 className="font-heading text-xl font-bold text-brand-black">
                  {point.title}
                </h3>
                <p className="font-body text-sm text-brand-charcoal/70 leading-relaxed">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Area ──────────────────────────────────── */}
      <section className="bg-brand-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-xs font-semibold tracking-widest text-brand-gold uppercase mb-3">
            Serving the Region
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-black mb-4">
            Treasure Valley &amp; Surrounding Areas
          </h2>
          <p className="font-body text-brand-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            We proudly serve Boise, Nampa, Meridian, Eagle, Kuna, Caldwell, Star, and communities
            throughout Southwest Idaho. Not sure if we cover your area?{" "}
            <Link href="/contact" className="text-brand-gold hover:underline underline-offset-2">
              Just ask us.
            </Link>
          </p>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-brand-gold mx-auto mb-6" />
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-black mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                review: "Superior Stone transformed our kitchen. The granite countertops are absolutely stunning and the installation was flawless.",
                name: "Sarah M.",
                location: "Eagle, ID",
              },
              {
                review: "Professional from start to finish. They helped us pick the perfect quartz and delivered exactly on time.",
                name: "Mike and Jennifer T.",
                location: "Meridian, ID",
              },
              {
                review: "Best investment we have made in our home. The marble in our bathroom gets compliments every single time.",
                name: "David R.",
                location: "Nampa, ID",
              },
            ].map(({ review, name, location }) => (
              <div
                key={name}
                className="flex flex-col gap-6 bg-white border border-brand-gray rounded-lg p-8 shadow-sm"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-brand-gold">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="font-body text-brand-charcoal/70 leading-relaxed flex-1">
                  &ldquo;{review}&rdquo;
                </p>
                <div>
                  <p className="font-body font-semibold text-brand-black text-sm">{name}</p>
                  <p className="font-body text-brand-charcoal/40 text-xs tracking-wide">{location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ───────────────────────────────────── */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-brand-cream to-brand-gray">
        <div className="max-w-3xl mx-auto">
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-8" />
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-black leading-tight mb-6">
            Ready to Transform<br className="hidden sm:block" /> Your Space?
          </h2>
          <p className="font-body text-brand-charcoal/60 text-xl mb-12 leading-relaxed max-w-xl mx-auto">
            Get a free in-home consultation and quote — no obligation, no pressure.
          </p>
          <Link
            href="/contact"
            className="inline-block font-body font-semibold text-base tracking-wide bg-brand-gold text-white px-12 py-5 rounded hover:bg-[#a6844e] hover:shadow-lg transition-all duration-200"
          >
            Get My Free Quote
          </Link>
          <p className="font-body text-brand-charcoal/40 text-sm mt-6 tracking-wide">
            Or call us directly: (208) 447-9593
          </p>
        </div>
      </section>
    </>
  );
}
