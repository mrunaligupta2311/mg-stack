import { motion } from "framer-motion";
import {
  PenTool,
  MonitorSmartphone,
  Sparkles,
  CheckCircle2,
  Layers,
} from "lucide-react";
const availableServices = [
  {
    title: "Product Design",
    icon: PenTool,
    description:
      "Transforming ideas into thoughtfully designed digital products through research, strategy, UX, UI and interactive prototypes.",

    features: [
      "Product Strategy",
      "User Research",
      "Wireframing",
      "User Experience (UX)",
      "User Interface (UI)",
      "Interactive Prototypes",
      "Design Systems",
    ],
  },

  {
    title: "Frontend Development",
    icon: MonitorSmartphone,
    description:
      "Modern, responsive frontend applications built with clean architecture and pixel-perfect implementation from approved designs.",

    features: [
      "Responsive Websites",
      "React Development",
      "Next.js",
      "Tailwind CSS",
      "Performance Optimization",
      "Pixel Perfect UI",
      "Reusable Components",
    ],
  },
];

const Services = () => {
  return (
    <section className="relative overflow-hidden bg-white py-28">

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-60 top-0 h-[650px] w-[650px] rounded-full bg-[#FFD3E5] blur-[170px] opacity-70" />

        <div className="absolute right-[-220px] bottom-[-120px] h-[650px] w-[650px] rounded-full bg-[#FFB8D4] blur-[180px] opacity-40" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto max-w-3xl text-center"
        >

 <div className="inline-flex items-center gap-2 rounded-full border border-[#FFD3E5] bg-[#FFF8FB] px-5 py-2">

  <Sparkles
    size={16}
    className="text-[#F56FA6]"
  />

  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#E94F92]">
    WHAT WE OFFER
  </span>

</div>

<h2 className="mt-8 text-5xl font-black leading-tight text-neutral-950 lg:text-6xl">

  Product Design

  <span className="block text-[#F56FA6]">
    & Software Development.
  </span>

</h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-600">

            M G Stack specializes in Software Development and product design . Every project is designed with business goals,
            usability and long-term scalability in mind.

          </p>

        </motion.div>

        {/* Available Services */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {availableServices.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                rounded-[36px]
                border
                border-[#FFE3EE]
                bg-white
                p-10
                shadow-[0_30px_80px_rgba(245,111,166,.12)]
                "
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#E94F92]">

                      Available Now

                    </p>

                    <h3 className="mt-4 text-4xl font-black text-neutral-950">

                      {service.title}

                    </h3>

                  </div>

                  <div className="rounded-3xl bg-[#FFF3F8] p-5">

                    <Icon
                      size={34}
                      className="text-[#F56FA6]"
                    />

                  </div>

                </div>

                <p className="mt-8 leading-8 text-neutral-600">

                  {service.description}

                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">

                  {service.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >

                      <CheckCircle2
                        size={18}
                        className="text-[#F56FA6]"
                      />

                      <span className="font-medium text-neutral-700">

                        {feature}

                      </span>

                    </div>

                  ))}

                </div>

              </motion.div>

            );

          })}

        </div>        {/* Future Roadmap */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mt-28"
        >

          <div className="text-center">

            
            

            

            <h2 className="mt-7 text-5xl font-black text-neutral-950">

              Software Development
              <span className="block text-[#F56FA6]">
                Coming Soon.
              </span>

            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-neutral-600">

              As M G Stack grows, we'll expand beyond frontend development
              into complete software engineering services. These services
              are part of our future vision and are currently under
              development.

            </p>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: "Backend Development",
                desc: "REST APIs, authentication, business logic and server-side applications.",
              },
              {
                title: "Database Engineering",
                desc: "SQL & NoSQL database architecture, optimization and management.",
              },
              {
                title: "Full-Stack Development",
                desc: "Complete frontend and backend solutions built as one product.",
              },
              {
                title: "SaaS Applications",
                desc: "Scalable subscription-based software products for startups and businesses.",
              },
              {
                title: "Mobile Applications",
                desc: "Cross-platform mobile applications for Android and iOS.",
              },
              {
                title: "Desktop Software",
                desc: "Modern desktop applications for Windows, macOS and Linux.",
              },
            ].map((item) => (

              <motion.div
                key={item.title}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: .25,
                }}
                className="
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-[#FFE8F1]
                bg-[#FFF9FC]
                p-8
                "
              >

                <div className="absolute right-6 top-6 rounded-full bg-[#FFE3EE] px-3 py-1">

                  <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#E94F92]">

                    Coming Soon

                  </span>

                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFDDEA]">

                  <Layers
                    size={30}
                    className="text-[#F56FA6]"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-neutral-900">

                  {item.title}

                </h3>

                <p className="mt-5 leading-8 text-neutral-600">

                  {item.desc}

                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>        
        
        
      </div>

    </section>

  );
};

export default Services;