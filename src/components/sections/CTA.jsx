 
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-white py-28">

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
          relative
          overflow-hidden
          rounded-[40px]
          bg-neutral-950
          px-8
          py-12
          shadow-2xl
          lg:flex
          lg:items-center
          lg:justify-between
          lg:px-14
          "
        >

          
        {/* CTA */}


<div
  className="
  absolute
  -right-28
  -top-28
  h-[620px]
  w-[620px]
  rounded-full
  bg-gradient-to-br
  from-[#F56FA6]/25
  via-[#FF9FC8]/15
  to-transparent
  blur-[140px]
  "
/>

          <div className="relative">


            <p className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#F56FA6]
            ">
              Build Something Great
            </p>



            <h2 className="
              mt-5
              max-w-xl
              text-4xl
              font-black
              leading-tight
              text-white
              lg:text-5xl
            ">

              Have an idea?
              <br />

              Let's build it together.

            </h2>



            <p className="
              mt-6
              max-w-xl
              text-lg
              leading-8
              text-neutral-300
            ">

              We design and develop scalable software products,
              SaaS platforms, mobile applications, and digital
              experiences for modern businesses.

            </p>


          </div>



          <Link

            to="/contact"

            className="
            group
            relative
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
            transition-all
            duration-300
            hover:bg-[#E94F92]
            hover:shadow-[0_20px_40px_rgba(245,111,166,0.35)]
            lg:mt-0
            "

          >

            Let's Build

            <ArrowUpRight
              size={18}
              className="
              transition-transform
              group-hover:translate-x-1
              group-hover:-translate-y-1
              "
            />

          </Link>


        </motion.div>
        

      </div>

    </section>
  );
};

export default CTA;