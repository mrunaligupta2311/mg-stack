import { motion } from "framer-motion";


const sections = [
  {
    title: "Introduction",
    content:
      "At M G Stack, we respect your privacy and are committed to protecting the information you choose to share with us. This Privacy Policy explains how information is collected and used when you interact with our website.",
  },

  {
    title: "Information We Collect",
    content:
      "We may collect information that you voluntarily provide when you contact us or communicate with our team. This may include your name, email address, phone number, and project-related details.",
  },

  {
    title: "How We Use Your Information",
    content:
      "The information you provide is used to respond to your inquiries, discuss potential projects, provide relevant communication, and improve our services.",
  },

  {
    title: "Information Sharing",
    content:
      "M G Stack does not sell, rent, or trade your personal information. We do not share your information with third parties unless required by law or necessary to provide requested services.",
  },

  {
    title: "Data Security",
    content:
      "We take reasonable measures to protect the information shared with us. However, no method of electronic communication or storage can be guaranteed to be completely secure.",
  },

  {
    title: "Third Party Links",
    content:
      "Our website may contain links to external websites in the future. M G Stack is not responsible for the privacy practices or content of third-party websites.",
  },

  {
    title: "Children's Privacy",
    content:
      "Our website is not intended to collect personal information from children. We encourage parents and guardians to monitor online activities.",
  },

  {
    title: "Changes To This Privacy Policy",
    content:
      "M G Stack may update this Privacy Policy when necessary to reflect changes in our website, services, or legal requirements.",
  },
];


const PrivacyPolicy = () => {
  return (
    <main>


      {/* Header */}
      <section className="px-6 pb-20  pt-[110px] lg:px-8 lg:pb-28">

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
              Privacy Policy
            </h1>


            <p className="mt-6 text-lg text-neutral-600">
              Learn how M G Stack handles information shared through our website.
            </p>

          </motion.div>

        </div>

      </section>



      {/* Content */}
      <section className="bg-neutral-50 px-6 py-20 lg:px-8">

        <div className="mx-auto max-w-4xl space-y-8">


          {sections.map((section, index) => (

            <motion.article
              key={section.title}
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
                {section.title}
              </h2>


              <p className="mt-4 leading-7 text-neutral-600">
                {section.content}
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
              If you have questions about this Privacy Policy, you can contact
              M G Stack at:
            </p>


            <a
              href="mailto:mrunaliguptastack@gmail.com"
              className="mt-4 inline-block text-white underline"
            >
              mrunaliguptastack@gmail.com
            </a>


          </motion.article>


        </div>

      </section>


    </main>
  );
};


export default PrivacyPolicy;