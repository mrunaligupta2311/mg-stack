 import { motion } from "framer-motion";
import {
  Rocket,
  Users,
  Gem,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";


const culturePoints = [
  {
    title: "Continuous Learning",
    description:
      "Learn through practical projects, improve your skills and grow with modern design and development practices.",
    icon: GraduationCap,
  },
  {
    title: "Modern Technology",
    description:
      "Work with modern tools, technologies and workflows used to create quality digital products.",
    icon: Rocket,
  },
  {
    title: "Creative Collaboration",
    description:
      "Collaborate with designers and developers to transform ideas into meaningful digital experiences.",
    icon: Users,
  },
  {
    title: "Quality Mindset",
    description:
      "Focus on clean design, attention to detail and delivering work that meets professional standards.",
    icon: Gem,
  },
];


const Careers = () => {
  return (
    <main className="overflow-hidden bg-white">


      {/* Hero */}

      <section className="relative px-6 pb-28 pt-32 lg:px-8">


        <div
          className="
          absolute
          -left-40
          top-10
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#FFD8EA]
          opacity-40
          blur-[160px]
          "
        />


        <div
          className="
          absolute
          right-[-100px]
          top-32
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#F56FA6]
          opacity-10
          blur-[170px]
          "
        />


        <div className="relative mx-auto max-w-7xl">


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >


            <span
              className="
              inline-flex
              rounded-full
              border
              border-[#FFD8EA]
              bg-white
              px-5
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#E94F92]
              shadow-sm
              "
            >
              Careers
            </span>


            <h1
              className="
              mt-8
              text-5xl
              font-black
              leading-[1.05]
              tracking-[-0.04em]
              text-neutral-950
              lg:text-7xl
              "
            >
              Build Your
              <span className="block text-[#F56FA6]">
                Future With M G Stack.
              </span>
            </h1>


            <p
              className="
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-neutral-600
              "
            >
              Join M G Stack and gain practical experience by working on
              real-world digital products, improving your skills in product
              design, Software development and modern technologies.
            </p>


          </motion.div>


        </div>


      </section>





      {/* Why Join Us */}


      <section
        className="
        bg-[#FCF7FA]
        px-6
        py-28
        lg:px-8
        "
      >


        <div className="mx-auto max-w-7xl">


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >


            <span
              className="
              inline-flex
              rounded-full
              bg-[#FFF0F6]
              px-5
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#E94F92]
              "
            >
              Why Join Us
            </span>


            <h2
              className="
              mt-8
              text-4xl
              font-bold
              tracking-tight
              text-neutral-950
              lg:text-6xl
              "
            >
              Grow With
              <span className="block text-[#F56FA6]">
                M G Stack.
              </span>
            </h2>


          </motion.div>



          <div
            className="
            mt-20
            grid
            gap-8
            lg:grid-cols-4
            "
          >

            {culturePoints.map((item,index)=>{

              const Icon=item.icon;

              return (

                <motion.div
                  key={item.title}
                  initial={{
                    opacity:0,
                    y:30
                  }}
                  whileInView={{
                    opacity:1,
                    y:0
                  }}
                  viewport={{
                    once:true
                  }}
                  transition={{
                    delay:index*0.1
                  }}
                  className="
                  group
                  rounded-[28px]
                  border
                  border-[#F3E6EC]
                  bg-white/80
                  p-8
                  backdrop-blur-sm
                  shadow-[0_20px_50px_rgba(0,0,0,0.05)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_25px_70px_rgba(245,111,166,0.15)]
                  "
                >

                  <div
                    className="
                    inline-flex
                    rounded-2xl
                    bg-[#FFF0F6]
                    p-4
                    text-[#F56FA6]
                    transition
                    group-hover:bg-[#F56FA6]
                    group-hover:text-white
                    "
                  >
                    <Icon size={26}/>
                  </div>


                  <h3
                    className="
                    mt-8
                    text-xl
                    font-bold
                    text-neutral-950
                    "
                  >
                    {item.title}
                  </h3>


                  <p
                    className="
                    mt-4
                    leading-7
                    text-neutral-600
                    "
                  >
                    {item.description}
                  </p>


                </motion.div>

              );

            })}

          </div>


        </div>


      </section>      {/* CTA */}

      <section
        className="
        px-6
        py-28
        lg:px-8
        "
      >

        <div className="mx-auto max-w-7xl">


          <motion.div
            initial={{
              opacity:0,
              y:40
            }}
            whileInView={{
              opacity:1,
              y:0
            }}
            viewport={{
              once:true
            }}
            className="
            rounded-[40px]
            bg-neutral-950
            p-12
            text-center
            text-white
            border
            border-neutral-800
            shadow-[0_30px_80px_rgba(0,0,0,0.18)]
            lg:p-16
            "
          >


            <h2
              className="
              text-4xl
              font-bold
              tracking-tight
              lg:text-5xl
              "
            >
              Ready To Start Your Journey?
            </h2>



            <p
              className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-neutral-300
              "
            >
              Explore our current opportunities and become part of a team
              building premium digital products.
            </p>



            <Link
              to="/jobs-internships"
              className="
              group
              mt-10
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#F56FA6]
              px-8
              py-4
              font-semibold
              text-white
              shadow-[0_15px_40px_rgba(245,111,166,0.25)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#E94F92]
              "
            >

              View Jobs & Internships


              <ArrowRight
                size={18}
                className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                "
              />

            </Link>


          </motion.div>


        </div>


      </section>


    </main>
  );
};


export default Careers;