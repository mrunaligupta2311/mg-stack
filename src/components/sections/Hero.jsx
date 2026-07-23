 import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Globe,
  Palette,
  Code2,
  Layers3,
  MoveRight,
} from "lucide-react";

const process = [
  "Discover",
  "Design",
  "Develop",
  "Launch",
];

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Figma",
];

const services = [
  {
    title: "Product Design",
    description: "Research • UX • UI",
    icon: Palette,
  },
  {
    title: "Software Development",
    description: "Modern • Scalable",
    icon: Code2,
  },
  {
    title: "Digital Products",
    description: "Web • Mobile • SaaS",
    icon: Globe,
  },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white  pt-0 pb-28 lg:pt-28">
    {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-72 -top-72 h-[900px] w-[900px] rounded-full bg-[#FFD3E5] blur-[180px] opacity-80" />

        <div className="absolute right-[-320px] top-[-120px] h-[760px] w-[760px] rounded-full bg-[#FF8FBE] blur-[180px] opacity-20" />

        <div className="absolute bottom-[-340px] left-1/2 h-[820px] w-[820px] -translate-x-1/2 rounded-full bg-[#FFF4F8] blur-[220px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-24 lg:grid-cols-[1.05fr_0.95fr]">

          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >  
                      <div
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#FFD3E5]
              bg-[#FFF8FB]
              px-5
              py-2
              "
            >
              <Sparkles
                size={16}
                className="text-[#F56FA6]"
              />

              <span
                className="
                text-xs
                font-bold
                uppercase
                tracking-[0.24em]
                text-[#E94F92]
                "
              >
                SOFTWARE DEVELOPMENT • PRODUCT DESIGN
              </span>

            </div>

            <h1
              className="
              mt-6
              max-w-4xl
              text-[4rem]
              font-black
              leading-[0.92]
              tracking-[-0.06em]
              text-neutral-950
              sm:text-[5rem]
              lg:text-[6.3rem]
              "
            >

              Building

              <span className="block text-[#F56FA6]">
                Digital Products
              </span>

              That Help

              <span className="block">
                Businesses Grow.
              </span>

            </h1>

            <p
              className="
              mt-8
              max-w-2xl
              text-[19px]
              leading-9
              text-neutral-600
              "
            >
              M G Stack designs thoughtful digital experiences and develops
              modern software for startups, founders and growing businesses.
              Every product is built with a strong focus on usability,
              scalability and long-term business value.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                to="/contact"
                className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#F56FA6]
                px-9
                py-4
                font-semibold
                text-white
                shadow-[0_18px_45px_rgba(245,111,166,0.28)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#E94F92]
                hover:shadow-[0_24px_60px_rgba(233,79,146,0.36)]
                "
              >

                Start Your Project

                <ArrowUpRight
                  size={18}
                  className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  "
                />

              </Link>

              <Link
                to="/projects"
                className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#FFD3E5]
                bg-white
                px-9
                py-4
                font-semibold
                text-neutral-900
                transition-all
                duration-300
                hover:border-[#F56FA6]
                hover:text-[#F56FA6]
                "
              >

                Explore Our Work

                <ArrowRight size={18} />

              </Link>

            </div>

          </motion.div>

<div className="relative">

  <div className="absolute -left-14 top-10 h-80 w-80 rounded-full bg-[#FFD3E5] blur-[130px] opacity-70" />

  <div className="absolute -right-12 bottom-10 h-80 w-80 rounded-full bg-[#FF8FBE] blur-[150px] opacity-30" />

  <div className="relative space-y-8">


    {/* Product Design */}

    <motion.div

      whileHover={{ y: -8 }}

      transition={{ duration: .3 }}

      className="
      rounded-[36px]
      border
      border-[#FFE3EE]
      bg-white
      p-10
      shadow-[0_30px_80px_rgba(245,111,166,0.12)]
      "
    >

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#E94F92]">
            Product Design
          </p>

          <h2 className="mt-5 text-4xl font-black text-neutral-950">
            Beautiful
            <br />
            User Experiences
          </h2>

        </div>

        <div className="rounded-3xl bg-[#FFF3F8] p-5">

          <Palette
            size={34}
            className="text-[#F56FA6]"
          />

        </div>

      </div>

      <p className="mt-8 leading-8 text-neutral-600">

        User Research • Wireframes • UI Design • Interactive Prototypes

      </p>

      <div className="mt-8 flex flex-wrap gap-3">

        {[
          "Research",
          "Wireframes",
          "UI Design",
          "Prototype",
        ].map((item) => (

          <span

            key={item}

            className="
            rounded-full
            bg-[#FFF6FA]
            px-4
            py-2
            text-sm
            font-semibold
            text-[#E94F92]
            "

          >

            {item}

          </span>

        ))}

      </div>

    </motion.div>

    {/* Software */}

    <motion.div

      whileHover={{ y: -8 }}

      transition={{ duration: .3 }}
className="
rounded-[36px]
border
border-[#FFE3EE]
bg-white
p-10
shadow-[0_35px_90px_rgba(245,111,166,0.12)]
transition-all
duration-300
hover:-translate-y-2
hover:shadow-[0_45px_110px_rgba(245,111,166,0.18)]
">

      <div className="flex items-center justify-between">

        <div>

<p className="text-sm font-bold uppercase tracking-[0.22em] text-[#E94F92]">
  Software Development
</p>
<h2 className="mt-5 text-4xl font-black text-neutral-950">
  Modern
  <br />
  Software Solutions
</h2>
        </div>
<div className="rounded-3xl bg-[#FFF3F8] p-5">
  <Code2
    size={34}
    className="text-[#F56FA6]"
  />
</div>
      </div>
<p className="mt-8 leading-8 text-neutral-600">
  Modern Softwares built with performance,
  scalability and maintainability at their core.
</p>
      <div className="mt-8 flex flex-wrap gap-3">

        {[
          "React",
          "Next.js",
          "Node.js",
          "APIs",
        ].map((item) => (

          <span

            key={item}
className="
rounded-full
bg-[#FFF6FA]
px-4
py-2
text-sm
font-semibold
text-[#E94F92]
"

          >

            {item}

          </span>

        ))}

      </div>

    </motion.div>

  </div>

</div>





</div>

</div>

</section>

    );
};

export default Hero;