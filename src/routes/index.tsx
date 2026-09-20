import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Facebook,
  Github,
  Globe,
  Instagram,
  Terminal,
  Youtube,
} from "lucide-react";
import { FaDiscord } from "react-icons/fa6";
import { CyberGrid } from "@/components/CyberGrid";
import { TikTokIcon } from "@/components/icons/TikTokIcon";

const logoUrl =
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/eefe8903-79f5-459c-9ae9-dcb210b1e70a/logo-1770396517506.png?width=8000&height=8000&resize=contain";

const links = [
  {
    label: "Discord",
    description: "Servidor, comunidad y conversaciones",
    href: "https://discord.gg/7WgZtx6pBm",
    icon: FaDiscord,
  },
  {
    label: "YouTube",
    description: "Videos, proyectos y tutoriales",
    href: "https://www.youtube.com/@Z3R0NULL",
    icon: Youtube,
  },
  {
    label: "Instagram",
    description: "Novedades y detrás de escena",
    href: "https://instagram.com/z3r0null.sh",
    icon: Instagram,
  },
  {
    label: "TikTok",
    description: "Clips, procesos y contenido diario",
    href: "https://tiktok.com/@z3r0null.sh",
    icon: TikTokIcon,
  },
  {
    label: "Facebook",
    description: "Comunidad y actualizaciones",
    href: "https://facebook.com/z3r0null",
    icon: Facebook,
  },
  {
    label: "GitHub",
    description: "Código y proyectos open source",
    href: "https://github.com/Z3R0NULL",
    icon: Github,
  },
  {
    label: "Página Oficial",
    description: "Web principal, demos y lanzamientos",
    href: "https://z3r0null.site",
    icon: Globe,
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Z3RØNULL | Links" },
      {
        name: "description",
        content: "Todos los enlaces oficiales de Z3RØNULL en un solo lugar.",
      },
      { property: "og:title", content: "Z3RØNULL | Links" },
      {
        property: "og:description",
        content: "Todos los enlaces oficiales de Z3RØNULL en un solo lugar.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: logoUrl },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:image", content: logoUrl },
    ],
  }),
  component: LinkInBio,
});

function LinkInBio() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-5 py-10 text-foreground sm:px-8 sm:py-14">
      <CyberGrid className="opacity-50" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-destructive to-transparent opacity-70" />

      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center">
        <header className="flex w-full flex-col items-center text-center">
          <div className="animate-entry-scale relative mb-5 flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28">
            <div className="absolute inset-1 rounded-full bg-destructive/20 blur-xl" />
            <img
              src={logoUrl}
              alt="Logo de Z3RØNULL"
              className="relative z-10 h-full w-full rounded-full object-contain ring-2 ring-destructive/60 ring-offset-2 ring-offset-background"
            />
          </div>

          <div className="animate-entry delay-100 mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur-sm">
            <Terminal className="h-3.5 w-3.5 text-destructive" />
            <span>~/links</span>
            <span className="animate-terminal-blink font-bold text-destructive">_</span>
          </div>

          <h1 className="font-pixel animate-entry delay-200 pb-3 text-4xl leading-tight sm:text-5xl">
            <span className="text-destructive">Z3RØ</span>
            <span className="text-muted-foreground">NULL</span>
          </h1>

          <p className="animate-entry delay-300 mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Developer · Maker · Security
          </p>
          <p className="animate-entry delay-400 mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            Mis redes y proyectos, todos en un solo lugar.
          </p>
        </header>

        <nav aria-label="Redes sociales" className="mt-9 grid w-full gap-3">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir ${link.label}`}
                className="social-link animate-entry group flex min-h-20 w-full items-center gap-4 border border-border bg-card/70 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-destructive/60 hover:bg-card hover:shadow-[0_0_28px_var(--link-glow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-5"
                style={{ animationDelay: `${500 + index * 80}ms` }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors duration-300 group-hover:border-destructive/40 group-hover:text-destructive">
                  <Icon className="h-5 w-5" />
                </span>

                <span className="min-w-0 flex-1 text-left">
                  <span className="block font-mono text-base font-semibold text-foreground">
                    {link.label}
                  </span>
                  <span className="mt-0.5 block truncate text-xs text-muted-foreground sm:text-sm">
                    {link.description}
                  </span>
                </span>

                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-destructive" />
              </a>
            );
          })}
        </nav>

        <footer className="animate-entry-fade delay-1000 mt-9 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-destructive shadow-[0_0_10px_var(--link-glow)]" />
          <span>Todos mis enlaces</span>
        </footer>
      </div>
    </main>
  );
}