import { motion } from "framer-motion";
import { ArrowLeft, Home, Mail } from "lucide-react";
import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-20">

      <section className="mx-auto max-w-4xl text-center">


        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="text-sm uppercase tracking-[0.3em] text-neutral-500"
        >
          Error
        </motion.p>



        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-6 text-8xl font-semibold tracking-tight text-neutral-950 sm:text-9xl"
        >
          404
        </motion.h1>



        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
          className="mt-6 text-3xl font-semibold text-neutral-950"
        >
          Page not found
        </motion.h2>



        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
          className="mx-auto mt-5 max-w-xl text-neutral-600"
        >
          The page you are looking for does not exist or may have been moved.
          Let's get you back to exploring M G Stack.
        </motion.p>



        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
          }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >


          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-7 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            <Home size={18}/>
            Go Home
          </Link>



          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-7 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-100"
          >
            <Mail size={18}/>
            Contact Us
          </Link>


        </motion.div>



        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.6,
          }}
          className="mt-16"
        >

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-neutral-950"
          >
            <ArrowLeft size={16}/>
            Return to homepage
          </Link>


        </motion.div>


      </section>


    </main>
  );
};


export default NotFound;