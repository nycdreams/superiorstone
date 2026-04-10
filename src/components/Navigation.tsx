"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Gallery",  href: "/gallery" },
  { label: "Contact",  href: "/contact" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const pathname = usePathname();

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo — shown in natural black on white nav */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Superior Stone"
              width={180}
              height={60}
              className="h-12 w-auto object-contain brightness-0"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-body text-sm font-medium tracking-wide transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-brand-gold"
                      : "text-brand-charcoal hover:text-brand-gold"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block shrink-0">
            <Link
              href="/contact"
              className="font-body text-sm font-semibold tracking-wide bg-brand-gold text-white px-5 py-2.5 rounded hover:bg-[#a6844e] transition-colors duration-200"
            >
              Get a Free Estimate
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
          >
            <span className={`block h-0.5 w-6 bg-brand-black transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-brand-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-brand-black transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-screen border-t border-brand-gray" : "max-h-0"}`}>
        <ul className="bg-white px-4 pb-6 pt-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block font-body text-base font-medium py-2.5 px-2 rounded transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-brand-gold bg-brand-gray"
                    : "text-brand-charcoal hover:text-brand-gold hover:bg-brand-gray"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-3">
            <Link
              href="/contact"
              className="block font-body text-base font-semibold text-center bg-brand-gold text-white py-3 px-5 rounded hover:bg-[#a6844e] transition-colors duration-200"
            >
              Get a Free Estimate
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
