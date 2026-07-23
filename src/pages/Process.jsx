import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Layout,
  Palette,
  MessageSquare,
  FileCheck,
} from "lucide-react";


const processSteps = [
  {
    number: "01",
    title: "Discovery & Understanding",
    description:
      "We understand your product idea, business goals, user needs, and project requirements before starting the design journey.",
    icon: Search,
  },

  {
    number: "02",
    title: "Research & Planning",
    description:
      "We analyze user expectations, explore design directions, and plan the structure needed for a meaningful product experience.",
    icon: MessageSquare,
  },

  {
    number: "03",
    title: "Wireframing",
    description:
      "We create wireframes to define screen structure, user flow, and overall product experience before visual design.",
    icon: Layout,
  },

  {
    number: "04",
    title: "UI Design",
    description:
      "We transform ideas into polished interfaces with thoughtful typography, layouts, components, and visual systems.",
    icon: Palette,
  },

  {
    number: "05",
    title: "Prototype & Review",
    description:
      "We create interactive prototypes, collect feedback, and refine the experience to improve usability and clarity.",
    icon: PenTool,
  },

  {
    number: "06",
    title: "Final Delivery",
    description:
      "We organize and deliver final design files, assets, and documentation for a smooth transition.",
    icon: FileCheck,
  },
];


const Process = () => {
  return (
    <main>


      {/* Hero */}
      <section className="px-6 pb-20  pt-[110px] lg:px-8 lg:pb-32">

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="max-w-4xl"
          >

            <p className="text-sm uppercase tracking-widest text-neutral-500">
              Our Process
            </p>


            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-6xl">
              A structured approach to building better products.
            </h1>


            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
              We follow a thoughtful product design process that helps turn
              ideas into clear, user-focused digital experiences.
            </p>


          </motion.div>

        </div>

      </section>



      {/* Steps */}
      <section className="bg-neutral-50 px-6 py-20 lg:px-8">

        <div className="mx-auto max-w-7xl">


          <div className="grid gap-8 md:grid-cols-2">


            {processSteps.map((step, index) => {

              const Icon = step.icon;


              return (

                <motion.article
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="rounded-3xl bg-white p-8"
                >

                  <div className="flex items-center justify-between">

                    <span className="text-sm font-medium text-neutral-400">
                      {step.number}
                    </span>


                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-white">
                      <Icon size={22}/>
                    </div>

                  </div>



                  <h2 className="mt-8 text-2xl font-semibold text-neutral-950">
                    {step.title}
                  </h2>


                  <p className="mt-4 leading-7 text-neutral-600">
                    {step.description}
                  </p>


                </motion.article>

              );

            })}


          </div>


        </div>

      </section>



      {/* Collaboration */}
      <section className="px-6 py-20 lg:px-8">

        <div className="mx-auto max-w-7xl rounded-3xl bg-neutral-950 p-10 text-white">


          <h2 className="text-3xl font-semibold">
            Collaboration that keeps projects moving.
          </h2>


          <div className="mt-8 grid gap-5 sm:grid-cols-2">


            <p className="rounded-2xl bg-white/10 p-5">
              Clear communication throughout the design process.
            </p>


            <p className="rounded-2xl bg-white/10 p-5">
              Regular feedback and design improvements.
            </p>


            <p className="rounded-2xl bg-white/10 p-5">
              Transparent workflow and project discussions.
            </p>


            <p className="rounded-2xl bg-white/10 p-5">
              Focus on creating meaningful user experiences.
            </p>


          </div>


        </div>

      </section>



    </main>
  );
};


export default Process;