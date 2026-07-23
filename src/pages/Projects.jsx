 import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import projects from "../data/projects";

const Projects = () => {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative px-6 pt-[110px] pb-20 lg:px-8 lg:pb-32">
        {/* Background Glow */}
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#FFD3E5] opacity-50 blur-3xl" />
        <div className="absolute right-0 top-20 h-[28rem] w-[28rem] rounded-full bg-[#FF8FBE] opacity-20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
              Projects
            </p>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-neutral-950 sm:text-6xl">
              Selected Work &{" "}
              <span className="text-[#F56FA6]">Digital Experiences.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              Explore real projects built by M G Stack, focusing on thoughtful
              design, clean development and practical digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-neutral-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {projects.length === 0 ? (
            <div className="rounded-[32px] border border-neutral-100 bg-white p-12 text-center shadow-sm">
              <h2 className="text-2xl font-semibold text-neutral-950">
                Projects Coming Soon
              </h2>
              <p className="mt-3 text-neutral-600">
                We are preparing our portfolio with real projects.
              </p>
            </div>
          ) : (
            <div className="grid gap-10 lg:grid-cols-2">
              {projects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group overflow-hidden rounded-[32px] border border-neutral-100 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                      {project.category}
                    </p>
                    <h2 className="mt-4 text-3xl font-bold text-neutral-950">
                      {project.title}
                    </h2>
                    <p className="mt-5 leading-8 text-neutral-600">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-7 flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-[#FFD3E5] px-4 py-2 text-xs font-medium text-[#E94F92]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="mt-8 flex flex-wrap gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F56FA6] to-[#FF8FBE] px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:from-[#FF8FBE] hover:to-[#F56FA6] shadow-md hover:shadow-lg"
                        >
                          Live Demo <ExternalLink size={16} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-950 transition-all hover:-translate-y-1 hover:border-[#F56FA6] hover:text-[#F56FA6]"
                        >
                          Code <Code size={16} />
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
