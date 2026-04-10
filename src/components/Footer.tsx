import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery",  href: "/gallery" },
  { label: "Contact",  href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-brand-gray">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Superior Stone"
                width={160}
                height={54}
                className="h-10 w-auto object-contain brightness-0"
              />
            </Link>
            <p className="font-body text-sm leading-relaxed text-brand-charcoal/60">
              Boise&rsquo;s premier custom countertop fabricator. We transform
              kitchens and bathrooms with precision-cut granite, quartz, and
              marble — built to last a lifetime.
            </p>
            <p className="font-body text-xs text-brand-charcoal/40">
              License: RCE-65056
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm font-semibold tracking-widest text-brand-gold uppercase">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-brand-charcoal/60 hover:text-brand-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm font-semibold tracking-widest text-brand-gold uppercase">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3 font-body text-sm text-brand-charcoal/60">
              <li className="flex items-start gap-3">
                <PhoneIcon />
                <a
                  href="tel:+12084479593"
                  className="hover:text-brand-gold transition-colors duration-200"
                >
                  (208) 447-9593
                </a>
              </li>
              <li className="flex items-start gap-3">
                <EmailIcon />
                <a
                  href="mailto:countertops@superiorstone.co"
                  className="hover:text-brand-gold transition-colors duration-200 break-all"
                >
                  countertops@superiorstone.co
                </a>
              </li>
              <li className="flex items-start gap-3">
                <LocationIcon />
                <span>
                  2762 S Featherly Way<br />
                  Boise, ID 83709
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Gold divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-brand-gold/30" />
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="font-body text-xs text-brand-charcoal/40 text-center">
          &copy; {year} Superior Stone. All rights reserved.&nbsp;&nbsp;|&nbsp;&nbsp;Boise, Idaho
        </p>
      </div>

    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
      className="w-4 h-4 mt-0.5 shrink-0 text-brand-gold" aria-hidden="true">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
      className="w-4 h-4 mt-0.5 shrink-0 text-brand-gold" aria-hidden="true">
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
      className="w-4 h-4 mt-0.5 shrink-0 text-brand-gold" aria-hidden="true">
      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.567 3.5-7.627a8 8 0 10-16 0c0 3.06 1.557 5.624 3.5 7.627a19.58 19.58 0 002.683 2.282 16.974 16.974 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  );
}
