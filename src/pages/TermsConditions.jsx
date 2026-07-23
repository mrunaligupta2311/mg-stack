import { motion } from "framer-motion";


const terms = [
  {
    title: "Introduction",
    content:
      "By accessing and using the M G Stack website, you agree to follow these Terms and Conditions. These terms define the guidelines for using our website and interacting with our services.",
  },

  {
    title: "Website Usage",
    content:
      "You agree to use this website only for lawful purposes. You must not attempt to misuse, damage, or access any part of the website in an unauthorized manner.",
  },

  {
    title: "Services Information",
    content:
      "Information provided on this website describes our services and approach. Project requirements, scope, timelines, and agreements are finalized separately through direct communication.",
  },

  {
    title: "Intellectual Property",
    content:
      "All content, branding, design elements, logos, and materials available on this website belong to M G Stack unless stated otherwise. Unauthorized use or reproduction is not permitted.",
  },

  {
    title: "Client Communication",
    content:
      "Information shared through email, WhatsApp, or other communication channels may be used for responding to inquiries and discussing potential projects.",
  },

  {
    title: "Project Discussions",
    content:
      "Submitting an inquiry or contacting M G Stack does not create a formal business agreement. Work begins only after project requirements and terms are mutually agreed upon.",
  },

  {
    title: "External Links",
    content:
      "Our website may include links to external websites. M G Stack is not responsible for the content, availability, or privacy practices of third-party websites.",
  },

  {
    title: "Limitation of Liability",
    content:
      "While we aim to provide accurate information, M G Stack does not guarantee that the website will always be free from errors or interruptions.",
  },

  {
    title: "Changes To These Terms",
    content:
      "M G Stack reserves the right to update or modify these Terms and Conditions when necessary. Updated terms will be reflected on this page.",
  },
];


const TermsConditions = () => {
  return (
    <main>


      {/* Header */}
      <section className="px-6 pb-20  pt-[110px] lg:px-8 lg:pb-32">

        <div className="mx-auto max-w-7xl">


          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="max-w-4xl"
          >

            <p className="text-sm uppercase tracking-widest text-neutral-500">
              Legal
            </p>


            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-6xl">
              Terms & Conditions
            </h1>


            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              Please review the terms that apply when using the M G Stack
              website and communicating with our team.
            </p>


          </motion.div>


        </div>

      </section>



      {/* Terms */}
      <section className="bg-neutral-50 px-6 py-20 lg:px-8">


        <div className="mx-auto max-w-4xl space-y-8">


          {terms.map((term, index) => (

            <motion.article
              key={term.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.05,
              }}
              className="rounded-3xl bg-white p-8"
            >

              <h2 className="text-xl font-semibold text-neutral-950">
                {term.title}
              </h2>


              <p className="mt-4 leading-7 text-neutral-600">
                {term.content}
              </p>


            </motion.article>

          ))}



          {/* Contact */}
          <motion.article
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            className="rounded-3xl bg-neutral-950 p-8 text-white"
          >

            <h2 className="text-xl font-semibold">
              Contact Us
            </h2>


            <p className="mt-4 text-neutral-300">
              If you have any questions regarding these Terms and Conditions,
              you can contact M G Stack at:
            </p>


            <a
              href="mailto:mrunaliguptastack@gmail.com"
              className="mt-4 inline-block underline"
            >
              mrunaliguptastack@gmail.com
            </a>


          </motion.article>


        </div>


      </section>


    </main>
  );
};


export default TermsConditions;