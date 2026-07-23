import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services does M G Stack currently provide?",
    answer:
      "M G Stack currently focuses on Product Design services, including UI/UX design and creating user-focused digital experiences.",
  },
  {
    question: "How does the design process work?",
    answer:
      "Our process focuses on understanding the product idea, defining user needs, creating design solutions, and delivering polished design outputs.",
  },
  {
    question: "Can I work with M G Stack for a new product idea?",
    answer:
      "Yes. If you have a product idea and need help with design direction or user experience, you can contact us to discuss your requirements.",
  },
  {
    question: "Does M G Stack provide development services?",
    answer:
      "Currently, our primary focus is Product Design. We are building towards expanding our digital product capabilities in the future.",
  },
  {
    question: "How can I start a project with M G Stack?",
    answer:
      "You can contact us through email or WhatsApp. Share your requirements, and we will discuss the next steps.",
  },
  {
    question: "Is M G Stack hiring?",
    answer:
      "Yes. We are looking for talented people and interns who want to grow and contribute. Visit our Careers page for opportunities.",
  },
];


const FAQ = () => {

  const [activeIndex, setActiveIndex] = useState(null);


  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <main>


      {/* Header */}
      <section className="px-6 pb-20  pt-[110px] lg:px-8 lg:pb-32">

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="max-w-3xl"
          >

            <p className="text-sm font-medium uppercase tracking-wider text-neutral-500">
              FAQ
            </p>


            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-6xl">
              Frequently Asked Questions
            </h1>


            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Find answers about our services, process, and how we work.
            </p>

          </motion.div>

        </div>

      </section>



      {/* FAQ List */}
      <section className="bg-neutral-50 px-6 py-20 lg:px-8">

        <div className="mx-auto max-w-4xl space-y-4">

          {faqs.map((faq, index) => (

            <motion.div
              key={faq.question}
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
              className="rounded-3xl bg-white p-6"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >

                <h2 className="text-lg font-semibold text-neutral-950">
                  {faq.question}
                </h2>


                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100">

                  {activeIndex === index ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}

                </span>

              </button>



              {activeIndex === index && (

                <motion.p
                  initial={{
                    opacity: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  className="mt-5 text-sm leading-7 text-neutral-600"
                >
                  {faq.answer}
                </motion.p>

              )}

            </motion.div>

          ))}

        </div>

      </section>


    </main>
  );
};

export default FAQ;
