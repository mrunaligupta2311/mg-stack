 import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://linkedin.com/company/mg-stack",
    color: "#0A66C2",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    url: "https://instagram.com/mg_stack",
    color: "#E4405F",
  },
];

const linkIconClass =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-pink-100 bg-white shadow-sm transition-all duration-300 group-hover:border-pink-500 group-hover:shadow-md";

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

          {/* Mobile */}
          <div className="flex flex-col gap-5 lg:hidden">

            {/* Row 1 */}
            <div className="flex items-center justify-between gap-3">

              <a
                href="mailto:mrunaliguptastack@gmail.com"
                className="group flex min-w-0 items-center gap-2.5"
              >
                <div className={linkIconClass}>
                  <MdEmail size={20} style={{ color: "#EA4335" }} />
                </div>

                <span className="truncate text-xs font-medium text-neutral-700 group-hover:text-pink-500 sm:text-sm">
                  mrunaliguptastack@gmail.com
                </span>
              </a>

              <a
                href={linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2.5"
              >
                <span className="text-xs font-medium text-neutral-700 group-hover:text-pink-500 sm:text-sm">
                  {linkedin.name}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-pink-100 bg-white shadow-sm">
                  <FaLinkedinIn
                    size={18}
                    style={{ color: linkedin.color }}
                  />
                </div>
              </a>

            </div>

            {/* Row 2 */}
            <div className="flex items-center justify-between gap-3">

              <a
                href="https://wa.me/917359808797"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2.5"
              >
                <div className={linkIconClass}>
                  <FaWhatsapp size={20} style={{ color: "#25D366" }} />
                </div>

                <span className="text-xs font-medium text-neutral-700 group-hover:text-pink-500 sm:text-sm">
                  +91 73598 08797
                </span>
              </a>

              <a
                href={instagram.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2.5"
              >
                <span className="text-xs font-medium text-neutral-700 group-hover:text-pink-500 sm:text-sm">
                  {instagram.name}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-pink-100 bg-white shadow-sm">
                  <SiInstagram
                    size={18}
                    style={{ color: instagram.color }}
                  />
                </div>
              </a>

            </div>

          </div>          {/* Desktop: Contact */}
          <div className="hidden flex-col lg:flex lg:items-start">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">
              Contact
            </p>

            <div className="flex flex-col gap-5">
              <a
                href="mailto:mrunaliguptastack@gmail.com"
                className="group flex items-center gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-pink-100 bg-white shadow-sm transition-all duration-300 group-hover:border-pink-500 group-hover:shadow-md">
                  <MdEmail size={22} style={{ color: "#EA4335" }} />
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
                  <FaWhatsapp size={22} style={{ color: "#25D366" }} />
                </div>

                <span className="text-sm font-medium text-neutral-700 transition-colors group-hover:text-pink-500">
                  +91 73598 08797
                </span>
              </a>
            </div>
          </div>

          {/* Desktop: Connect */}
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

                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-pink-100 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-pink-500 group-hover:shadow-md">
                      <Icon
                        size={18}
                        style={{ color: social.color }}
                      />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

        </div>        {/* Bottom */}
        <div className="mt-10 border-t border-pink-100 pt-6 sm:mt-14">
          <div className="flex flex-col items-center gap-4 text-center text-sm text-neutral-500 md:flex-row md:items-center md:justify-between md:text-left">
            <p>
              © {new Date().getFullYear()} M G Stack. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6 md:justify-end">
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