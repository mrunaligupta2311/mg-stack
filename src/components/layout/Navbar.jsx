 import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import Logo from "../../assets/icons/M_G_Stack_logo.ico";

const navigation = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Careers",
    path: "/careers",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)] backdrop-blur-xl"
            : "bg-white/60 backdrop-blur-lg"
        }`}
      >
        <div className="mx-auto flex h-[92px] max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* Brand */}

          <Link
            to="/"
            className="group flex items-center gap-4"
          >
            <div className="relative">

              <div
                className="
                absolute
                inset-0
                rounded-2xl
                bg-[#F56FA6]
                opacity-25
                blur-xl
                transition
                duration-500
                group-hover:opacity-60
                "
              />

              <img
                src={Logo}
                alt="M G Stack"
                className="
                relative
                h-14
                w-14
                rounded-2xl
                object-cover
                shadow-lg
                transition
                duration-300
                group-hover:scale-105
                "
              />

            </div>

            <div>

              <h2
                className="
                text-xl
                font-black
                tracking-tight
                text-neutral-950
                "
              >
                M G Stack
              </h2>

              <p
                className="
                mt-1
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-neutral-600
                "
              >
                SOFTWARE DEVELOPMENT

                <span className="mx-2 text-[#F56FA6]">
                  •
                </span>

                PRODUCT DESIGN
              </p>

            </div>

          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-8 lg:flex">

            {navigation.map((item) => (

              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-[#F56FA6]"
                      : "text-neutral-600 hover:text-[#F56FA6]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.name}</span>

                    <motion.span
                      initial={false}
                      animate={{
                        width: isActive ? "100%" : "0%",
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="
                      absolute
                      -bottom-3
                      left-0
                      h-[2px]
                      rounded-full
                      bg-[#F56FA6]
                      "
                    />
                  </>
                )}
              </NavLink>

            ))}

          </nav>          {/* Right Actions */}

          <div className="flex items-center gap-4">

            <Link
              to="/contact"
              
 className="
hidden
lg:flex
group
items-center
gap-2
rounded-full
bg-[#F56FA6]
px-7
py-3.5
text-sm
font-semibold
text-white
shadow-[0_12px_30px_rgba(245,111,166,0.28)]
transition-all
duration-300
hover:-translate-y-[2px]
hover:bg-[#E94F92]
hover:shadow-[0_18px_40px_rgba(233,79,146,0.38)]
active:bg-[#E94F92]
active:translate-y-0
"
            >
              Start a Conversation

              <ArrowUpRight
  size={17}
  className="
  transition-transform
  duration-300
  group-hover:translate-x-1
  group-hover:-translate-y-1
  "
/>
            </Link>

            <button
              onClick={() => setMobileMenu(true)}
              className="
              rounded-2xl
              border
              border-[#FFD3E5]
              bg-[#FFF5FA]
              p-3
              text-[#F56FA6]
              transition
              hover:bg-[#FFD3E5]
              lg:hidden
              "
            >
              <Menu size={24} />
            </button>

          </div>

        </div>

      </motion.header>

      {/* Mobile Menu */}

      <AnimatePresence>

        {mobileMenu && (

          <>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenu(false)}
              className="
              fixed
              inset-0
              z-40
              bg-black/40
              backdrop-blur-sm
              lg:hidden
              "
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 28,
              }}
              className="
              fixed
              right-0
              top-0
              z-50
              flex
              h-screen
              w-[340px]
              flex-col
              bg-white
              shadow-2xl
              lg:hidden
              "
            >

              {/* Mobile Header */}

              <div
                className="
                flex
                items-center
                justify-between
                border-b
                border-neutral-100
                px-6
                py-6
                "
              >

                <Link
                  to="/"
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center gap-3"
                >

                  <img
                    src={Logo}
                    alt="M G Stack"
                    className="h-11 w-11 rounded-xl object-cover"
                  />

                  <div>

                    <h2 className="font-black text-neutral-950">
                      M G Stack
                    </h2>

                    <p
                      className="
                      mt-1
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-neutral-600
                      "
                    >
                      SOFTWARE DEVELOPMENT

                      <span className="mx-2 text-[#F56FA6]">
                        •
                      </span>

                      PRODUCT DESIGN
                    </p>

                  </div>

                </Link>

                <button
                  onClick={() => setMobileMenu(false)}
                  className="
                  rounded-xl
                  bg-[#FFF5FA]
                  p-2.5
                  text-[#F56FA6]
                  "
                >
                  <X size={22} />
                </button>

              </div>

              {/* Mobile Navigation */}

              <nav
                className="
                flex
                flex-1
                flex-col
                gap-2
                px-6
                py-8
                "
              >

                {navigation.map((item) => (

                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenu(false)}
                    className={({ isActive }) =>
                      `
                      rounded-2xl
                      px-5
                      py-4
                      text-base
                      font-semibold
                      transition-all
                      ${
                        isActive
                          ? "bg-[#F56FA6] text-white shadow-lg shadow-pink-200"
                          : "text-neutral-700 hover:bg-[#FFF5FA] hover:text-[#F56FA6]"
                      }
                      `
                    }
                  >
                    {item.name}
                  </NavLink>

                ))}

                <Link
                  to="/contact"
                  onClick={() => setMobileMenu(false)}
                  className="
                  mt-5
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-neutral-950
                  px-5
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#F56FA6]
                  "
                >
                  Start a Conversation

                  <ArrowUpRight size={18} />
                </Link>

              </nav>              {/* Mobile Footer */}

              <div
                className="
                border-t
                border-neutral-100
                px-6
                py-6
                "
              >

                <p
                  className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-neutral-600
                  "
                >
                  SOFTWARE DEVELOPMENT

                  <span className="mx-2 text-[#F56FA6]">
                    •
                  </span>

                  PRODUCT DESIGN
                </p>

                <p
                  className="
                  mt-4
                  text-xs
                  leading-6
                  text-neutral-400
                  "
                >
                  © {new Date().getFullYear()} M G Stack.
                  <br />
                  Crafted with precision.
                </p>

              </div>

            </motion.aside>

          </>

        )}

      </AnimatePresence>

    </>

  );

};

export default Navbar;