 import { Link } from "react-router-dom";
import { Mail, Phone, Globe } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Globe,
    url: "https://linkedin.com/company/mg-stack",
  },
  {
    name: "GitHub",
    icon: Globe,
    url: "https://github.com/mrunaligupta2311",
  },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-pink-100 bg-gradient-to-b from-white via-pink-50 to-white">
      {/* Glow Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-24 h-[280px] w-[280px] rounded-full bg-pink-200 opacity-40 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[280px] w-[280px] rounded-full bg-pink-400 opacity-20 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        {/* Main Grid */}


        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:items-start space-y-12 sm:space-y-0">


        {/* Brand Left */}
          <div className="lg:text-left text-center">
            <Link to="/" className="inline-block">
              <h2 className="text-[44px] font-extrabold tracking-tight text-neutral-900 transition-transform duration-300 hover:scale-105">
                M G Stack
              </h2>
            </Link>
            <div className="mx-auto lg:mx-0 mt-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-pink-500 via-pink-400 to-pink-200" />
            <p className="mt-6 max-w-md text-[15px] leading-7 text-neutral-600 mx-auto lg:mx-0">
              Building premium software solutions with modern engineering,
              thoughtful product design, and exceptional digital experiences
              for businesses worldwide.
            </p>
          </div>

          {/* Contact Center */}
          <div className="text-center">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">
              Contact
            </p>
            <div className="space-y-5 inline-block text-left">
              <a
                href="mailto:mrunaliguptastack@gmail.com"
                className="group flex items-center gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-pink-100 bg-white shadow-sm transition-all duration-300 group-hover:border-pink-500 group-hover:shadow-md">
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
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-pink-100 bg-white shadow-sm transition-all duration-300 group-hover:border-pink-500 group-hover:shadow-md">
                  <Phone size={18} className="text-pink-500" />
                </div>
                <span className="text-sm font-medium text-neutral-700 transition-colors group-hover:text-pink-500">
                  +91 73598 08797
                </span>
              </a>
            </div>
          </div>

          {/* Connect Right */}
          <div className="lg:text-right text-center">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">
              Connect
            </p>
            <div className="space-y-4 inline-block text-left lg:inline-block lg:text-right">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 lg:justify-end"
                  >
                    <span className="text-sm font-medium text-neutral-700 transition-colors group-hover:text-pink-500">
                      {social.name}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-pink-100 bg-white text-neutral-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-pink-500 group-hover:bg-pink-500 group-hover:text-white shadow-sm group-hover:shadow-md">
                      <Icon size={18} />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-pink-100 pt-6">
          <div className="flex flex-col gap-6 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} M G Stack. All rights reserved.</p>
            <div className="flex gap-6 justify-center md:justify-end">
              <Link
                to="/privacy-policy"
                className="transition-colors hover:text-pink-500"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-conditions"
                className="transition-colors hover:text-pink-500"
              >
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
