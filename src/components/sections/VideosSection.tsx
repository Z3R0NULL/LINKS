import { Youtube, ExternalLink } from "lucide-react";
import { CyberGrid } from "@/components/CyberGrid";
import { youtubeVideos } from "@/data/portfolio-data";

export function VideosSection() {
  return (
    <section
      id="videos"
      className="relative border-t border-white/5 bg-[#0a0a0a] py-24"
    >
      <CyberGrid className="opacity-20" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="scroll-reveal mb-4 flex items-center justify-center gap-3">
          <Youtube className="h-6 w-6 text-red-500" />
          <h2 className="text-center text-3xl font-bold sm:text-4xl text-white">
            Videos
          </h2>
        </div>

        <p
          className="scroll-reveal mx-auto mb-12 max-w-2xl text-center text-gray-500"
          style={{ transitionDelay: "0.1s" }}
        >
          Tutoriales, demostraciones y auditorías de seguridad en mi canal
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {youtubeVideos.map((video, index) => (
            <div
              key={video.id}
              className="scroll-reveal group relative flex flex-col overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] transition-all duration-200 hover:border-red-500/20 hover:-translate-y-1"
              style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
            >
                {/* Video Thumbnail */}
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-video overflow-hidden bg-black"
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
                  />

                  {/* Decorative overlay for consistent look */}
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                </a>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-3 text-lg font-semibold text-gray-100 transition-colors duration-150 group-hover:text-white">
                    {video.title}
                  </h3>

                <p className="flex-1 text-sm text-gray-500 leading-relaxed line-clamp-2">
                  {video.description}
                </p>

                <div className="mt-5 pt-4 border-t border-white/[0.04]">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 text-sm text-gray-600 transition-colors duration-150 hover:text-red-400"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>Ver en YouTube</span>
                  </a>
                </div>
              </div>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div
          className="mt-16 text-center scroll-reveal"
          style={{ transitionDelay: "0.5s" }}
        >
            <a
              href="https://youtube.com/@Z3R0NULL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-red-500/20 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]"
            >
            <Youtube className="h-4 w-4" />
            Suscríbete al canal
          </a>
        </div>
      </div>
    </section>
  );
}
