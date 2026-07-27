 import { motion } from "framer-motion";
import {
  Gem,
  ShieldCheck,
  Rocket,
  HeartHandshake,
} from "lucide-react";


const values = [
  {
    title: "Business-First Engineering",
    description:
      "Every software solution begins with understanding your business objectives, operational workflows and long-term product vision before development starts.",
    icon: Gem,
  },
  {
    title: "Quality Software Development",
    description:
      "We build reliable, scalable and maintainable software with clean architecture, modern technologies and exceptional attention to detail.",
    icon: ShieldCheck,
  },
  {
    title: "Built To Scale",
    description:
      "Our solutions are engineered for future growth, making it easier to introduce new features, expand functionality and support evolving business needs.",
    icon: Rocket,
  },
  {
    title: "Long-Term Collaboration",
    description:
      "We focus on building lasting partnerships through transparency, continuous improvement and dependable technical support beyond delivery.",
    icon: HeartHandshake,
  },
];


const WhyChooseUs = () => {
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

  <div className="inline-flex items-center gap-2 rounded-full border border-[#FFD3E5] bg-[#FFF8FB] px-5 py-2">

    <Gem
      size={16}
      className="text-[#F56FA6]"
    />

    <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#E94F92]">
      WHY M G STACK
    </span>

  </div>

  <h2 className="mt-8 text-5xl font-black leading-tight text-neutral-950 lg:text-6xl">

    Built With

    <span className="block text-[#F56FA6]">
      Purpose.
    </span>

  </h2>

  <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
We design and develop modern software solutions that combine
business strategy, clean engineering and outstanding user
experiences to help companies grow with confidence.

  </p>

</motion.div>


<div className="mt-20 grid gap-8 lg:grid-cols-2">

  {values.map((value, index) => {

    const Icon = value.icon;

    return (

      <motion.div
        key={value.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.12 }}
        whileHover={{ y: -8 }}
        className="
        group
        rounded-[36px]
        border
        border-[#FFE3EE]
        bg-white
        p-10
        shadow-[0_25px_70px_rgba(245,111,166,0.10)]
        transition-all
        duration-300
        hover:border-[#FFD6E8]
        hover:shadow-[0_35px_90px_rgba(245,111,166,0.18)]
        "
      >

        <div className="flex items-start justify-between">

          <div
            className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-3xl
            bg-[#FFF3F8]
            "
          >

            <Icon
              size={30}
              className="text-[#F56FA6]"
            />

          </div>

        </div>

        <h3 className="mt-8 text-3xl font-black text-neutral-950">

          {value.title}

        </h3>

        <p className="mt-6 leading-8 text-neutral-600">

          {value.description}

        </p>

      </motion.div>

    );

  })}

</div>




<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="
  mt-24
  overflow-hidden
  rounded-[40px]
  border
  border-[#FFE3EE]
  bg-white
  p-10
  shadow-[0_30px_80px_rgba(245,111,166,0.12)]
  lg:p-14
  "
>

  <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

    {/* Left */}

    <div>

      <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#E94F92]">
        OUR APPROACH
      </span>

      <h3 className="mt-5 text-4xl font-black leading-tight text-neutral-950">

        Great Products Are
        <br />

        <span className="text-[#F56FA6]">
          Built Together.
        </span>

      </h3>

      <p className="mt-8 max-w-2xl leading-8 text-neutral-600">

Every successful software product starts with understanding
the business, identifying the right technical solution and
executing it with precision. From planning to deployment,
every decision is made with scalability, performance and
long-term value in mind.
      </p>

    </div>

    {/* Right */}

    <div className="rounded-[30px] bg-[#FFF8FB] p-8">

      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E94F92]">
        Every Project Includes
      </p>

      <div className="mt-8 space-y-5">

        {[

  "Business & product discovery",
  "Software architecture planning",
  "Modern application development",
  "Responsive & accessible interfaces",
  "Clean, maintainable codebase",
  "Scalable & future-ready solutions",



        ].map((item) => (

          <div
            key={item}
            className="flex items-center gap-4"
          >

            <div className="h-2.5 w-2.5 rounded-full bg-[#F56FA6]" />

            <span className="font-medium text-neutral-700">
              {item}
            </span>

          </div>

        ))}

      </div>

    </div>

  </div>

</motion.div>
      </div>

    </section>
  );
};

export default WhyChooseUs;