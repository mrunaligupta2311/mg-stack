 import { motion } from "framer-motion";
import {
  ExternalLink,
  Sparkles,
} from "lucide-react";

import projects from "../../data/projects";

const FeaturedProjects = () => {
  const featuredProjects = projects.slice(0, 2);

  return (
    <section className="relative overflow-hidden bg-white px-6 py-28 lg:px-8">

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-60 top-0 h-[650px] w-[650px] rounded-full bg-[#FFD3E5] opacity-70 blur-[170px]" />

        <div className="absolute right-[-220px] bottom-[-120px] h-[650px] w-[650px] rounded-full bg-[#FFB8D4] opacity-40 blur-[180px]" />

      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-[#FFD3E5] bg-[#FFF8FB] px-5 py-2">

            <Sparkles
              size={16}
              className="text-[#F56FA6]"
            />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#E94F92]">
              FEATURED PROJECTS
            </span>

          </div>

          <h2 className="mt-8 text-5xl font-black leading-tight text-neutral-950 lg:text-6xl">

            Selected Work.

            <span className="block text-[#F56FA6]">
              Crafted With Precision.
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-600">

            Every project reflects our commitment to thoughtful product design,
            modern engineering and exceptional user experiences. We build
            software that is fast, scalable and designed to create real
            business value.

          </p>

        </motion.div>

        {featuredProjects.length > 0 && (

          <div className="mt-20 grid gap-10 lg:grid-cols-2">

            {featuredProjects.map((project, index) => (

              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group overflow-hidden rounded-[36px] border border-[#FFE5F0] bg-white shadow-[0_30px_80px_rgba(245,111,166,0.12)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_35px_90px_rgba(245,111,166,0.25)]"
              >

                <div className="aspect-video overflow-hidden bg-[#FFF6FA]">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top transition-all duration-700 group-hover:scale-110"
                  />

                </div>

                <div className="p-8">              <span className="rounded-full bg-[#FFDDEE] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#E94F92]">

                    {project.category}

                  </span>

                  <h3 className="mt-6 text-3xl font-black text-neutral-900">

                    {project.title}

                  </h3>

                  <p className="mt-5 leading-8 text-neutral-600">

                    {project.description}

                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">

                    {project.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="rounded-full bg-[#FFF3F8] px-4 py-2 text-sm font-semibold text-[#E94F92]"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  {project.liveUrl && (

                    <div className="mt-10">

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#F56FA6] px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#E94F92]"
                      >

                        Visit Live Project

                        <ExternalLink size={18} />

                      </a>

                    </div>

                  )}

                </div>

              </motion.article>

            ))}

          </div>

        )}

      </div>  
      
        </section>
  );
};

export default FeaturedProjects;