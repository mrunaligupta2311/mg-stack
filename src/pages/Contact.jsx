 import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";


const contactOptions = [
  {
    title: "Email",
    description:
      "Share your project requirements, ideas or collaboration details. We will get back with the next steps.",
    icon: Mail,
    link: "mailto:mrunaliguptastack@gmail.com",
    label: "mrunaliguptastack@gmail.com",
  },
  {
    title: "WhatsApp",
    description:
      "Have a quick question or want to discuss your project? Connect with us directly.",
    icon: MessageCircle,
    link: "https://wa.me/917359808797",
    label: "+91 73598 08797",
  },
];


const Contact = () => {
  return (
    <main className="overflow-hidden bg-white">


      {/* Hero */}

      <section className="relative px-6 pb-28 pt-32 lg:px-8">


        <div
          className="
          absolute
          -left-40
          top-0
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
              shadow-sm
              "
            >
              Contact
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
              Let's Build
              <span className="block text-[#F56FA6]">
                Something Exceptional.
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
              Have a product idea, design requirement or software project?
              Connect with M G Stack and let's discuss how we can create
              meaningful digital experiences together.
            </p>


          </motion.div>


        </div>


      </section>





      {/* Contact Options */}


      <section
        className="
        bg-[#FCF7FA]
        px-6
        py-28
        lg:px-8
        "
      >


        <div
          className="
          mx-auto
          grid
          max-w-7xl
          gap-8
          lg:grid-cols-2
          "
        >


          {contactOptions.map((item,index)=>{

            const Icon=item.icon;


            return (

              <motion.a
                key={item.title}
                href={item.link}
                target={
                  item.title==="WhatsApp"
                  ? "_blank"
                  : undefined
                }
                rel="noreferrer"
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
                  delay:index*0.12
                }}
                className="
                group
                rounded-[32px]
                border
                border-[#F3E6EC]
                bg-white
                p-10
                shadow-[0_20px_50px_rgba(0,0,0,0.05)]
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-[0_30px_70px_rgba(245,111,166,0.18)]
                "
              >


                <div
                  className="
                  inline-flex
                  rounded-2xl
                  bg-[#FFF0F6]
                  p-4
                  text-[#F56FA6]
                  transition-all
                  duration-300
                  group-hover:bg-[#F56FA6]
                  group-hover:text-white
                  "
                >

                  <Icon size={28}/>

                </div>



                <h2
                  className="
                  mt-8
                  text-3xl
                  font-bold
                  text-neutral-950
                  "
                >
                  {item.title}
                </h2>



                <p
                  className="
                  mt-5
                  leading-8
                  text-neutral-600
                  "
                >
                  {item.description}
                </p>



                <div
                  className="
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#FFF0F6]
                  px-5
                  py-3
                  font-semibold
                  text-[#E94F92]
                  transition-all
                  group-hover:bg-[#F56FA6]
                  group-hover:text-white
                  "
                >

                  {item.label}

                  <ArrowRight
                    size={18}
                    className="
                    transition-transform
                    group-hover:translate-x-1
                    "
                  />

                </div>


              </motion.a>

            );

          })}


        </div>


      </section>      {/* Premium CTA */}

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
            relative
            overflow-hidden
            rounded-[40px]
            bg-neutral-950
            p-12
            text-white
            shadow-[0_30px_80px_rgba(0,0,0,0.18)]
            lg:p-16
            "
          >


            {/* Pink Glow */}

            <div
              className="
              absolute
              -right-32
              -top-32
              h-[420px]
              w-[420px]
              rounded-full
              bg-[#F56FA6]
              opacity-20
              blur-[120px]
              "
            />


            <div
              className="
              absolute
              -left-32
              bottom-[-120px]
              h-[350px]
              w-[350px]
              rounded-full
              bg-[#FF8FBE]
              opacity-10
              blur-[120px]
              "
            />



            <div
              className="
              relative
              mx-auto
              max-w-3xl
              text-center
              "
            >


              <div
                className="
                mx-auto
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/5
                px-5
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#FFD8EA]
                "
              >

                <Sparkles size={14}/>

                M G Stack

              </div>



              <h2
                className="
                mt-8
                text-4xl
                font-black
                tracking-tight
                lg:text-5xl
                "
              >
                Ready To Build
                <span className="block text-[#F56FA6]">
                  Your Next Digital Product?
                </span>
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
                Let's collaborate on product design, user experiences and
                software solutions that help your business grow.
              </p>



              <a
                href="mailto:mrunaliguptastack@gmail.com"
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
                shadow-[0_20px_50px_rgba(245,111,166,0.35)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#E94F92]
                "
              >

                Start A Conversation


                <ArrowRight
                  size={18}
                  className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  "
                />

              </a>


            </div>


          </motion.div>


        </div>


      </section>


    </main>
  );
};


export default Contact;