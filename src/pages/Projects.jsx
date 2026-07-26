 import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import projects from "../data/projects";

const Projects = () => {
  return (
    <main className="relative overflow-hidden bg-white">


      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-60 top-20 h-[650px] w-[650px] rounded-full bg-[#FFD3E5] opacity-70 blur-[170px]" />

        <div className="absolute right-[-220px] top-20 h-[600px] w-[600px] rounded-full bg-[#FFB8D4] opacity-40 blur-[180px]" />

      </div>



      {/* Hero */}

      <section className="relative px-6 pt-[120px] pb-24 lg:px-8 lg:pb-32">

        <div className="mx-auto max-w-7xl">

          <motion.div

            initial={{
              opacity:0,
              y:35
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

            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFD3E5] bg-[#FFF8FB] px-5 py-2">

              <Sparkles 
                size={16}
                className="text-[#F56FA6]"
              />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#E94F92]">
                PROJECTS
              </span>

            </div>



            <h1 className="mt-8 text-5xl font-black leading-tight text-neutral-950 lg:text-6xl">

              Digital Products.

              <span className="block text-[#F56FA6]">
                Built With Purpose.
              </span>

            </h1>



            <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600">

              Explore our selected work across software development and
              product design. Each project represents thoughtful design,
              clean engineering and meaningful digital experiences.

            </p>


          </motion.div>

        </div>

      </section>




      {/* Projects Grid */}

      <section className="relative px-6 pb-32 lg:px-8">

        <div className="mx-auto max-w-7xl">


          {projects.length > 0 && (

            <div className="grid gap-10 lg:grid-cols-2">


              {projects.map((project,index)=>(


                <motion.article

                  key={project.id}

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

                  transition={{
                    delay:index*0.12
                  }}


                  className="group overflow-hidden rounded-[36px] border border-[#FFE5F0] bg-white shadow-[0_30px_80px_rgba(245,111,166,0.12)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_35px_90px_rgba(245,111,166,0.22)]"

                >



                  {/* Image */}

                  <div className="aspect-video overflow-hidden bg-[#FFF6FA]">

                    <img

                      src={project.image}

                      alt={project.title}

                      className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-110"

                    />

                  </div>




                  {/* Content */}

                  <div className="p-8">



                    {/* Department */}

                    <span

                      className={`rounded-full border-2 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] ${
                        project.department === "Software Development"
                        ? "border-[#2563EB] text-[#2563EB]"
                        : "border-[#C0841A] text-[#C0841A]"
                      }`}

                    >

                      {project.department}

                    </span>




                    <h2 className="mt-6 text-3xl font-black text-neutral-950">

                      {project.title}

                    </h2>



                    <p className="mt-5 leading-8 text-neutral-600">

                      {project.description}

                    </p>




                    {/* Technology */}

                    <div className="mt-8 flex flex-wrap gap-3">

                      {project.technologies.map((tech)=>(

                        <span

                          key={tech}

                          className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-700"

                        >

                          {tech}

                        </span>

                      ))}

                    </div>




                    {/* View */}

                    <div className="mt-10">

{(project.pdfUrl || project.liveUrl) && (
  <a
    href={project.pdfUrl || project.liveUrl}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-[#374151] px-6 py-3 !font-semibold !text-white transition-all duration-300 hover:scale-105 hover:bg-black"
  >
    View 
    <ArrowRight size={18} className="text-white" />
  </a>
)}




                    </div>


                  </div>


                </motion.article>


              ))}


            </div>

          )}


        </div>

      </section>


    </main>
  );
};


export default Projects;