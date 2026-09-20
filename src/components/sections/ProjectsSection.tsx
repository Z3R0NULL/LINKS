import { Terminal, Github, ExternalLink } from "lucide-react";
import { CyberGrid } from "@/components/CyberGrid";
import { projects } from "@/data/portfolio-data";

export function ProjectsSection() {
  return (
    <section id="proyectos" className="relative py-24">
      <CyberGrid className="opacity-20" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="scroll-reveal mb-4 flex items-center justify-center gap-3">
          <Terminal className="h-6 w-6 text-red-500" />
          <h2 className="text-center text-3xl font-bold sm:text-4xl text-white">
            Proyectos
          </h2>
        </div>

        <p
          className="scroll-reveal mx-auto mb-12 max-w-2xl text-center text-gray-500"
          style={{ transitionDelay: "0.1s" }}
        >
          Una selección de mis proyectos de hardware, seguridad y automatización
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="scroll-reveal group relative flex flex-col overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] transition-all duration-200 hover:border-red-500/20 hover:-translate-y-1"
              style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Image area */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                <div className="absolute top-3 right-3">
                  <span className="rounded-full bg-black/60 backdrop-blur-sm px-3 py-1 text-[10px] font-medium tracking-wider text-gray-300 border border-white/10 uppercase transition-colors duration-200 group-hover:text-red-400/70 group-hover:border-red-500/15">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-200 transition-colors duration-150 group-hover:text-white">
                  {project.title}
                </h3>

                <p className="mb-4 flex-1 text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-medium tracking-wider text-gray-500 border border-white/[0.04] uppercase transition-colors duration-150 group-hover:text-gray-400 group-hover:border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 border-t border-white/[0.04] pt-4">
                  <a
                    href={project.github}
                    className="group/link inline-flex items-center gap-1.5 text-sm text-gray-600 transition-colors duration-150 hover:text-red-400"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>Código</span>
                  </a>
                  <a
                    href={project.demo}
                    className="group/link inline-flex items-center gap-1.5 text-sm text-gray-600 transition-colors duration-150 hover:text-red-400"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>Ver más</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
