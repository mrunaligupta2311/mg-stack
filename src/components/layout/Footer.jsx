 import { Link } from "react-router-dom";
import { Mail, Phone, Globe } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Globe,
    url: "https://linkedin.com/company/mg-stack",
  },
  {
    name: "Instagram",
    icon: Globe,
    url: "https://instagram.com/mg.stack",
  },
];

const linkIconClass =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-pink-100 bg-white shadow-sm transition-all duration-300 group-hover:border-pink-500 group-hover:shadow-md";

const socialIconClass =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-pink-100 bg-white text-neutral-700 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-pink-500 group-hover:bg-pink-500 group-hover:text-white group-hover:shadow-md";

const Footer = () => {
  const [linkedin, instagram] = socialLinks;

  return (
    <footer className="relative border-t border-pink-100 bg-gradient-to-b from-white via-pink-50 to-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-24 h-[280px] w-[280px] rounded-full bg-pink-200 opacity-40 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[280px] w-[280px] rounded-full bg-pink-400 opacity-20 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-3 lg:items-start">
          {/* Brand */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Link to="/" className="inline-block">
              <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 transition-transform duration-300 hover:scale-105 sm:text-[44px]">
                M G Stack
              </h2>
            </Link>
            <div className="mt-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-pink-500 via-pink-400 to-pink-200" />
            <p className="mt-6 max-w-md text-[15px] leading-7 text-neutral-600">
              Building premium software solutions with modern engineering,
              thoughtful product design, and exceptional digital experiences
              for businesses worldwide.
            </p>
          </div>

          {/* Mobile: 2 rows only */}
          <div className="flex flex-col gap-5 lg:hidden">
            {/* Row 1: Email (left) | LinkedIn (right) */}
            <div className="flex items-center justify-between gap-3">
              <a
                href="mailto:mrunaliguptastack@gmail.com"
                className="group flex min-w-0 items-center gap-2.5"
              >
                <div className={linkIconClass}>
                  <Mail size={16} className="text-pink-500" />
                </div>
                <span className="truncate text-xs font-medium text-neutral-700 transition-colors group-hover:text-pink-500 sm:text-sm">
                  mrunaliguptastack@gmail.com
                </span>
              </a>

              <a
                href={linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="group flex shrink-0 items-center gap-2.5"
              >
                <span className="text-xs font-medium text-neutral-700 transition-colors group-hover:text-pink-500 sm:text-sm">
                  {linkedin.name}
                </span>
                <div className={socialIconClass}>
                  <linkedin.icon size={16} />
                </div>
              </a>
            </div>

            {/* Row 2: Phone (left) | Instagram (right) */}
            <div className="flex items-center justify-between gap-3">
              <a
                href="https://wa.me/917359808797"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2.5"
              >
                <div className={linkIconClass}>
                  <Phone size={16} className="text-pink-500" />
                </div>
                <span className="text-xs font-medium text-neutral-700 transition-colors group-hover:text-pink-500 sm:text-sm">
                  +91 73598 08797
                </span>
              </a>

              <a
                href={instagram.url}
                target="_blank"
                rel="noreferrer"
                className="group flex shrink-0 items-center gap-2.5"
              >
                <span className="text-xs font-medium text-neutral-700 transition-colors group-hover:text-pink-500 sm:text-sm">
                  {instagram.name}
                </span>
                <div className={socialIconClass}>
                  <instagram.icon size={16} />
                </div>
              </a>
            </div>
          </div>

          {/* Desktop: Contact column */}
          <div className="hidden flex-col lg:flex lg:items-start">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">
              Contact
            </p>
            <div className="flex flex-col gap-5">
              <a
                href="mailto:mrunaliguptastack@gmail.com"
                className="group flex items-center gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-pink-100 bg-white shadow-sm transition-all duration-300 group-hover:border-pink-500 group-hover:shadow-md">
                  <Mail size={18} className="text-pink-500" />
                </div>
                <span className="text-sm font-medium text-neutral-700 transition-colors group-hover:text-pink-500">
                  mrunaliguptastack@gmail.com
                </span>
              </a>
              <a
                href="https://wa.me/917359808797"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-pink-100 bg-white shadow-sm transition-all duration-300 group-hover:border-pink-500 group-hover:shadow-md">
                  <Phone size={18} className="text-pink-500" />
                </div>
                <span className="text-sm font-medium text-neutral-700 transition-colors group-hover:text-pink-500">
                  +91 73598 08797
                </span>
              </a>
            </div>
          </div>

          {/* Desktop: Connect column */}
          <div className="hidden flex-col lg:flex lg:items-end">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">
              Connect
            </p>
            <div className="flex flex-col items-end gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4"
                  >
                    <span className="text-sm font-medium text-neutral-700 transition-colors group-hover:text-pink-500">
                      {social.name}
                    </span>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-pink-100 bg-white text-neutral-700 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-pink-500 group-hover:bg-pink-500 group-hover:text-white group-hover:shadow-md">
                      <Icon size={18} />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-pink-100 pt-6 sm:mt-14">
          <div className="flex flex-col items-center gap-4 text-center text-sm text-neutral-500 md:flex-row md:items-center md:justify-between md:text-left">
            <p>© {new Date().getFullYear()} M G Stack. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6 md:justify-end">
              <Link to="/privacy-policy" className="transition-colors hover:text-pink-500">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="transition-colors hover:text-pink-500">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;