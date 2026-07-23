 import { motion } from "framer-motion";
import {
  Gem,
  Target,
  Rocket,
  HeartHandshake,
} from "lucide-react";

const values = [
  {
    title: "Premium Quality",
    description:
      "We craft every interface with precision, consistency and attention to detail.",
    icon: Gem,
  },
  {
    title: "Goal Driven",
    description:
      "Our design decisions are guided by business objectives and user needs.",
    icon: Target,
  },
  {
    title: "Modern Development",
    description:
      "We build fast, scalable and responsive products using modern technologies.",
    icon: Rocket,
  },
  {
    title: "Client Partnership",
    description:
      "We collaborate closely with clients to transform ideas into successful products.",
    icon: HeartHandshake,
  },
];

const About = () => {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative px-6 pt-32 pb-24 lg:px-8">
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-[#FFD3E5] blur-3xl opacity-70" />
        <div className="absolute right-0 top-20 h-[28rem] w-[28rem] rounded-full bg-[#FF8FBE] blur-3xl opacity-30" />

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-full bg-[#FFD3E5] px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#E94F92]"
          >
            About M G Stack
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8 text-5xl font-black leading-tight text-neutral-900 lg:text-7xl"
          >
            Building <span className="text-[#F56FA6]">Premium</span> Digital Experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 max-w-2xl mx-auto text-lg leading-8 text-neutral-600"
          >We are focused on Software Development and Product Design, creating premium digital experiences that combine thoughtful design with modern technology.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-24 lg:px-8 bg-[#F7EEF3]">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-neutral-900"
          >
            Our Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-neutral-600"
          >

            M G Stack was created with a simple philosophy: premium quality,
modern technology and exceptional user experience. We combine thoughtful
design with reliable software solutions to create digital products that help
businesses build their presence, engage users and grow with confidence.
          </motion.p>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="rounded-full bg-[#FFD3E5] px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#E94F92]">
              Our Values
            </span>
            <h2 className="mt-8 text-4xl font-bold text-neutral-900 lg:text-6xl">
              What We Believe In
            </h2>
          </motion.div>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="group rounded-[32px] bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(245,111,166,0.25)]"
                >
                  <div className="inline-flex rounded-2xl bg-[#F56FA6] p-4 text-white">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-8 text-2xl font-bold text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-5 leading-8 text-neutral-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
