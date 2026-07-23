 import { motion } from "framer-motion";
import {
  PenTool,
  Layout,
  Palette,
  FileCheck,
  Search,
  Code,
  Database,
  Layers,
  Smartphone,
  Monitor,
} from "lucide-react";


const currentServices = [
  {
    icon: Search,
    title: "User Research & Strategy",
    description:
      "Understanding users, business goals and product requirements to create a strong foundation for meaningful digital products.",
  },
  {
    icon: Layout,
    title: "Wireframing & User Flows",
    description:
      "Creating structured layouts and user journeys that make products clear, intuitive and easy to use.",
  },
  {
    icon: Palette,
    title: "Product UI/UX Design",
    description:
      "Designing modern and engaging interfaces with thoughtful layouts, typography, colors and consistent design systems.",
  },
  {
    icon: PenTool,
    title: "Interactive Prototyping",
    description:
      "Creating realistic prototypes to visualize product experiences, validate ideas and improve user interactions.",
  },
  {
    icon: FileCheck,
    title: "Design Handoff",
    description:
      "Delivering organized design files, assets and specifications for a smooth transition from design to development.",
  },
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Building responsive and modern web interfaces that bring designs to life with clean and scalable code.",
  },
];


const futureServices = [
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Expanding into APIs, authentication systems, business logic and scalable server-side solutions.",
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    description:
      "Building complete software solutions by combining frontend, backend and database technologies.",
  },
  {
    icon: Database,
    title: "Database Engineering",
    description:
      "Developing reliable database structures, optimization strategies and data management systems.",
  },
  {
    icon: Layers,
    title: "SaaS Applications",
    description:
      "Creating scalable software products designed for startups and growing businesses.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Expanding into modern mobile applications for Android and iOS platforms.",
  },
  {
    icon: Monitor,
    title: "Desktop Software",
    description:
      "Building dedicated desktop applications for different business requirements.",
  },
];


const Services = () => {
  return (
    <main className="bg-white">


      {/* Hero */}

      <section className="relative px-6 pt-[110px] pb-20 lg:px-8 lg:pb-32">

        <div
          className="
          absolute
          -left-32
          top-10
          h-96
          w-96
          rounded-full
          bg-[#FFD3E5]
          blur-3xl
          opacity-60
          "
        />


        <div
          className="
          absolute
          right-0
          top-20
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-[#FF8FBE]
          blur-3xl
          opacity-20
          "
        />



        <div className="relative mx-auto max-w-7xl">


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >


            <p
              className="
              text-sm
              uppercase
              tracking-widest
              text-neutral-500
              "
            >
              Services
            </p>



            <h1
              className="
              mt-5
              text-4xl
              font-bold
              tracking-tight
              text-neutral-950
              sm:text-6xl
              "
            >
              Product Design & Software Solutions
              that create meaningful digital experiences.
            </h1>



            <p
              className="
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-neutral-600
              "
            >
              M G Stack helps businesses transform ideas into digital products
              through thoughtful product design and modern software solutions.
            </p>


          </motion.div>


        </div>

      </section>



      {/* Current Services */}


      <section
        className="
        bg-neutral-50
        px-6
        py-20
        lg:px-8
        "
      >

        <div className="mx-auto max-w-7xl">


          <h2
            className="
            mb-12
            text-center
            text-3xl
            font-semibold
            text-neutral-900
            "
          >
            Our Services
          </h2>



          <div
            className="
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
            "
          >


            {currentServices.map((service, index) => {

              const Icon = service.icon;


              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="
                  rounded-3xl
                  bg-white
                  p-8
                  shadow-sm
                  transition
                  hover:-translate-y-2
                  hover:shadow-xl
                  "
                >

                  <div
                    className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-neutral-950
                    text-white
                    "
                  >

                    <Icon size={22}/>

                  </div>


                  <h2
                    className="
                    mt-8
                    text-2xl
                    font-semibold
                    text-neutral-950
                    "
                  >
                    {service.title}
                  </h2>


                  <p
                    className="
                    mt-4
                    leading-7
                    text-neutral-600
                    "
                  >
                    {service.description}
                  </p>


                </motion.article>
              );

            })}


          </div>


        </div>


      </section>      {/* Future Capabilities */}

      <section
        className="
        px-6
        py-20
        lg:px-8
        "
      >

        <div className="mx-auto max-w-7xl">


          <h2
            className="
            mb-12
            text-center
            text-3xl
            font-semibold
            text-neutral-900
            "
          >
            Future Capabilities
          </h2>



          <div
            className="
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
            "
          >


            {futureServices.map((service, index) => {

              const Icon = service.icon;


              return (

                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="
                  rounded-3xl
                  border
                  border-neutral-100
                  bg-white
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                  "
                >


                  <div
                    className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#F56FA6]
                    text-white
                    "
                  >

                    <Icon size={22}/>

                  </div>



                  <h2
                    className="
                    mt-8
                    text-2xl
                    font-semibold
                    text-neutral-950
                    "
                  >
                    {service.title}
                  </h2>



                  <p
                    className="
                    mt-4
                    leading-7
                    text-neutral-600
                    "
                  >
                    {service.description}
                  </p>


                </motion.article>

              );

            })}


          </div>


        </div>


      </section>





      {/* CTA */}


      <section
        className="
        px-6
        py-20
        lg:px-8
        "
      >

        <div
          className="
          mx-auto
          max-w-7xl
          rounded-3xl
          bg-neutral-950
          p-10
          text-center
          text-white
          "
        >


          <h2
            className="
            text-3xl
            font-semibold
            "
          >
            Have a product idea?
          </h2>



          <p
            className="
            mx-auto
            mt-4
            max-w-xl
            text-neutral-300
            "
          >
            Let's discuss how thoughtful design and software solutions
            can help bring your product ideas to life.
          </p>

<a
  href="/contact"
  className="
    mt-8
    inline-flex
    items-center
    justify-center
    rounded-full
    bg-gradient-to-r
    from-pink-500
    to-pink-600
    px-8
    py-3
    font-semibold
    text-white
    shadow-md
    transition-all
    duration-300
    hover:shadow-lg
    hover:-translate-y-1
    hover:from-pink-600
    hover:to-pink-700
  "
>

            Contact Us
          </a>


        </div>


      </section>



    </main>
  );
};


export default Services;