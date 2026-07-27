 import { motion } from "framer-motion";
import {
  Search,
  PencilRuler,
  Code2,
  Rocket,
  
} from "lucide-react";
const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understanding your business, users, competitors and project goals before making any design decisions.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",

    description:
  "Turning ideas into well-crafted digital products through product strategy, user experience, interface design and interactive prototyping.",
    icon: PencilRuler,
  },
  {
    number: "03",
    title: "Development",
  
   description:
  "Engineering responsive, high-performance frontend applications with clean architecture, reusable components and pixel-perfect implementation." ,
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Testing, polishing and delivering production-ready solutions ready for real users.",
    icon: Rocket,
  },
];

const Process = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7EEF3] px-6 py-28 lg:px-8">

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#FFD3E5] blur-3xl opacity-70" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#FF8FBE] blur-3xl opacity-40" />

      <div className="relative mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="rounded-full bg-[#FFD3E5] px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#E94F92]">
            Our Process
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight text-neutral-900 lg:text-6xl">
            From Idea
            <span className="block text-[#F56FA6]">
              To Product.
            </span>
          </h2>

          
<p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
  Every successful digital product follows a structured process. From
  understanding business requirements to delivering production-ready
  software, every stage is focused on quality, usability and long-term
  value.
</p>

        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-4">

          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative overflow-hidden rounded-[32px] bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(245,111,166,0.25)]"
              >

                <div className="absolute right-6 top-6 text-6xl font-black text-[#FFD3E5]">
                  {step.number}
                </div>

                <div className="relative z-10">
                  <div className="inline-flex rounded-2xl bg-[#F56FA6] p-4 text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-neutral-900">
                    {step.title}
                  </h3>

                  <p className="mt-5 leading-8 text-neutral-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>     
        
        


      </div>

    </section>
  );
};

export default Process;