 import { motion } from "framer-motion";
import {
  Palette,
  Code2,
  Laptop,
  ArrowRight,
  Rocket,
  Award,
  Users,
} from "lucide-react";


const internships = [
  {
    title: "UI/UX Designer Intern",
    icon: Palette,
    mode: "Remote / Onsite",
    duration: "3 - 6 Months",
    skills: [
      "Figma",
      "UI Design",
      "UX Research",
      "Wireframing",
      "Prototyping",
    ],
  },

  {
    title: "Frontend Developer Intern",
    icon: Code2,
    mode: "Remote / Onsite",
    duration: "3 - 6 Months",
    skills: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
];


const benefits = [
  {
    icon: Rocket,
    title: "Real Project Experience",
    description:
      "Work on practical product design and software development projects.",
  },

  {
    icon: Users,
    title: "Creative Collaboration",
    description:
      "Collaborate with designers and developers in a professional workflow.",
  },

  {
    icon: Award,
    title: "Internship Certificate",
    description:
      "Receive a certificate after successful completion of the internship.",
  },

  {
    icon: Laptop,
    title: "Career Opportunity",
    description:
      "Strong performers may get opportunities for future roles.",
  },
];



const JobsInternships = () => {

  

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
        right-[-120px]
        top-20
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
          initial={{
            opacity:0,
            y:30
          }}
          animate={{
            opacity:1,
            y:0
          }}
          transition={{
            duration:0.7
          }}
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
            "
          >
            Jobs & Internships
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
            Start Your Journey With

            <span className="block text-[#F56FA6]">
              M G Stack.
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
            Join M G Stack as an intern and gain practical experience by
            working on real product design and software development projects.
            Learn modern workflows and build skills with industry practices.
          </p>

        </motion.div>

      </div>

    </section>



    {/* Internship Positions */}


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
          className="max-w-3xl"
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
            Open Opportunities
          </span>


          <h2
            className="
            mt-8
            text-4xl
            font-black
            text-neutral-950
            lg:text-5xl
            "
          >
            Internship Positions
          </h2>


          <p
            className="
            mt-5
            text-lg
            leading-8
            text-neutral-600
            "
          >
            We are looking for passionate learners who want to improve their
            skills by working on real digital products.
          </p>


        </motion.div>



        <div
          className="
          mt-16
          grid
          gap-8
          lg:grid-cols-2
          "
        >

          {internships.map((item,index)=>{

            const Icon = item.icon;


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
                rounded-[32px]
                border
                border-[#F3E6EC]
                bg-white
                p-8
                shadow-[0_20px_50px_rgba(0,0,0,0.05)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_25px_70px_rgba(245,111,166,0.18)]
                "
              >


                <div
                  className="
                  flex
                  items-center
                  justify-between
                  "
                >

                  <div
                    className="
                    rounded-2xl
                    bg-[#F56FA6]
                    p-4
                    text-white
                    "
                  >

                    <Icon size={26}/>

                  </div>


                  <span
                    className="
                    rounded-full
                    bg-[#FFF0F6]
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-[#E94F92]
                    "
                  >
                    Internship
                  </span>

                </div>



                <h3
                  className="
                  mt-8
                  text-2xl
                  font-black
                  text-neutral-950
                  "
                >
                  {item.title}
                </h3>



                <div className="mt-6 grid grid-cols-2 gap-4">


                  <div className="rounded-2xl bg-[#FCF7FA] p-4">

                    <p className="text-xs text-neutral-500">
                      Duration
                    </p>

                    <p className="mt-1 font-semibold">
                      {item.duration}
                    </p>

                  </div>


                  <div className="rounded-2xl bg-[#FCF7FA] p-4">

                    <p className="text-xs text-neutral-500">
                      Mode
                    </p>

                    <p className="mt-1 font-semibold">
                      {item.mode}
                    </p>

                  </div>


                </div>


                <div className="mt-6 flex flex-wrap gap-2">

                  {item.skills.map((skill)=>(

                    <span
                      key={skill}
                      className="
                      rounded-full
                      border
                      border-[#FFD8EA]
                      px-4
                      py-2
                      text-sm
                      text-neutral-700
                      "
                    >
                      {skill}
                    </span>

                  ))}

                </div>
<a
  href={`mailto:mrunaliguptastack@gmail.com?subject=${encodeURIComponent(
    `Application for ${item.title}`
  )}`}
  className="
  mt-8
  inline-flex
  items-center
  gap-3
  rounded-full
  bg-[#F56FA6]
  px-6
  py-3
  font-semibold
  text-white
  transition-all
  duration-300
  hover:bg-[#E94F92]
  "
>
  Apply Now
  <ArrowRight size={16}/>
</a>
              </motion.div>

            );

          })}


        </div>


      </div>

    </section>

        {/* Requirements */}

    <section className="px-6 py-28 lg:px-8">

      <div className="mx-auto max-w-7xl">


        <motion.div
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
          className="max-w-3xl"
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
            Requirements
          </span>


          <h2
            className="
            mt-8
            text-4xl
            font-black
            text-neutral-950
            lg:text-5xl
            "
          >
            Who Can Apply?
          </h2>


        </motion.div>



        <div
          className="
          mt-12
          grid
          gap-6
          md:grid-cols-2
          "
        >

          {[
            "B.Tech Computer Science students (1st year or above).",
            "Students interested in UI/UX Design or Frontend Development.",
            "Portfolio, projects or design samples should be shared.",
            "Basic understanding of required tools and technologies.",
            "Passion to learn and work on practical projects.",
            "Good communication and problem-solving mindset.",
          ].map((item)=>(
            
            <div
              key={item}
              className="
              rounded-3xl
              border
              border-[#F3E6EC]
              bg-white
              p-6
              text-neutral-700
              shadow-sm
              "
            >

              <div className="flex gap-3">

                <div
                  className="
                  mt-2
                  h-2
                  w-2
                  rounded-full
                  bg-[#F56FA6]
                  "
                />

                <p className="leading-7">
                  {item}
                </p>

              </div>

            </div>

          ))}

        </div>


      </div>

    </section>




    {/* Benefits */}


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
          className="text-center"
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
            Benefits
          </span>


          <h2
            className="
            mt-8
            text-4xl
            font-black
            text-neutral-950
            lg:text-5xl
            "
          >
            Why Join M G Stack?
          </h2>


        </motion.div>



        <div
          className="
          mt-16
          grid
          gap-8
          md:grid-cols-2
          lg:grid-cols-4
          "
        >

          {benefits.map((item,index)=>{

            const Icon = item.icon;


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
                rounded-[32px]
                bg-white
                p-8
                shadow-sm
                transition-all
                hover:-translate-y-2
                hover:shadow-xl
                "
              >

                <div
                  className="
                  inline-flex
                  rounded-2xl
                  bg-[#F56FA6]
                  p-4
                  text-white
                  "
                >

                  <Icon size={25}/>

                </div>


                <h3
                  className="
                  mt-7
                  text-xl
                  font-black
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

    </section>




    {/* CTA */}


    <section className="px-6 py-28 lg:px-8">


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
          relative
          overflow-hidden
          rounded-[40px]
          bg-neutral-950
          p-12
          text-center
          text-white
          lg:p-16
          "
        >


          <div
            className="
            absolute
            right-[-100px]
            top-[-100px]
            h-80
            w-80
            rounded-full
            bg-[#F56FA6]
            opacity-20
            blur-[120px]
            "
          />


          <div className="relative">


            <h2
              className="
              text-4xl
              font-black
              lg:text-5xl
              "
            >
              Ready To Start Learning?
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
              Share your portfolio and details with us. We are always
              interested in passionate people who want to create quality
              digital products.
            </p>



            <a
              href="mailto:mrunaliguptastack@gmail.com"
              className="
              mt-10
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#F56FA6]
              px-8
              py-4
              font-bold
              text-white
              transition
              hover:bg-[#E94F92]
              "
            >

              Apply Now

              <ArrowRight size={18}/>

            </a>


          </div>


        </motion.div>


      </div>


    </section>


  </main>
);
};

export default JobsInternships;