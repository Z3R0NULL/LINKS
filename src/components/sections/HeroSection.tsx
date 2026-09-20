
import { useMemo, useEffect, useRef, useState, useCallback } from "react";
import {
  Terminal,
  Code,
  Cpu,
  Bug,
  Wrench,
  Mail,
  ShoppingBag,
  ChevronDown,
} from "lucide-react";
import { CyberGrid } from "@/components/CyberGrid";
import { floatingIcons, socialLinks } from "@/data/portfolio-data";

const FLOAT_ANIMATIONS = [
  "anim-icon-drift",
  "anim-icon-breathe",
  "anim-icon-morph",
  "anim-icon-sway",
  "anim-icon-emerge",
  "anim-icon-wander",
  "anim-icon-flicker",
  "anim-icon-levitate",
];

function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const TYPEWRITER_WORDS = ["programación.", "electrónica.", "ciberseguridad."];
const TYPING_SPEED = 100;
const DELETING_SPEED = 60;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 500;

function useTypewriter(words: string[]) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplay(currentWord.slice(0, display.length + 1));
          if (display.length + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
            return;
          }
        } else {
          setDisplay(currentWord.slice(0, display.length - 1));
          if (display.length - 1 === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
            return;
          }
        }
      },
      isDeleting ? DELETING_SPEED : TYPING_SPEED,
    );

    return () => clearTimeout(timeout);
  }, [display, isDeleting, wordIndex, words]);

  return display;
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number>(0);
  const typedText = useTypewriter(TYPEWRITER_WORDS);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const updateIcons = () => {
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const rect = el.getBoundingClientRect();

      iconRefs.current.forEach((iconEl) => {
        if (!iconEl) return;
        const iconRect = iconEl.getBoundingClientRect();
        const iconCx = iconRect.left - rect.left + iconRect.width / 2;
        const iconCy = iconRect.top - rect.top + iconRect.height / 2;
        const dist = Math.sqrt((mx - iconCx) ** 2 + (my - iconCy) ** 2);
        const proximity = Math.max(0, 1 - dist / 300);

        iconEl.style.opacity = String(0.05 + proximity * 0.2);
        const svg = iconEl.querySelector("svg") as SVGElement | null;
        if (svg) {
          if (proximity > 0) {
            const r = Math.round(156 + 100 * proximity);
            const g = Math.round(163 - 120 * proximity);
            const b = Math.round(175 - 150 * proximity);
            svg.style.color = `rgb(${r},${g},${b})`;
          } else {
            svg.style.color = "#9ca3af";
          }
        }
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateIcons);
    };

    const onMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateIcons);
    };

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);
    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const iconAnimations = useMemo(
    () =>
      floatingIcons.map((_, i) => ({
        anim: FLOAT_ANIMATIONS[
          Math.floor(seededRandom(i * 7) * FLOAT_ANIMATIONS.length)
        ],
        duration: 5 + seededRandom(i * 13) * 7,
      })),
    [],
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center px-6 overflow-hidden"
    >
      <CyberGrid className="opacity-50" />

      {/* Orbes de gradiente animados */}
      <div className="absolute inset-0 -z-10 overflow-hidden animate-entry-fade delay-300">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-red-600/15 blur-[100px] animate-pulse" />
        <div
          className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-white/5 blur-[100px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Iconos flotantes decorativos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingIcons.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              iconRefs.current[index] = el;
            }}
            className={`absolute ${iconAnimations[index].anim}`}
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              animationDelay: item.delay,
              animationDuration: `${iconAnimations[index].duration.toFixed(1)}s`,
              opacity: 0.05,
            }}
          >
            <item.icon className="h-10 w-10" style={{ color: "#9ca3af" }} />
          </div>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="max-w-4xl text-center relative z-10">
        {/* Logo */}
        <div className="mx-auto h-24 w-24 sm:h-28 sm:w-28 relative flex items-center justify-center mb-8 animate-entry-scale">
          <img
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/eefe8903-79f5-459c-9ae9-dcb210b1e70a/logo-1770396517506.png?width=8000&height=8000&resize=contain"
            alt="Z3RØNULL Logo"
            className="h-full w-full object-contain relative z-10 rounded-full ring-2 ring-red-500/60 ring-offset-2 ring-offset-black"
          />
        </div>

        {/* Badge terminal */}
        <div className="mb-4 relative z-10 inline-flex items-center gap-2 rounded-full border border-gray-600/50 bg-white/5 px-4 py-2 text-sm font-mono text-gray-300 backdrop-blur-sm transition-colors duration-75 hover:bg-white/10 hover:border-gray-500 animate-entry delay-200">
          <Terminal className="h-4 w-4 animate-pulse text-red-500" />
          <span className="typing-effect">~/portfolio</span>
          <span className="animate-terminal-blink font-bold text-red-500">
            _
          </span>
        </div>

        {/* Titulo */}
        <div className="mb-4 overflow-hidden pt-2 pb-7 animate-entry delay-300">
          <h1
            className="text-4xl tracking-tight sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Fipps', monospace", lineHeight: "1.1" }}
          >
            <span className="relative inline-block">
              <span style={{ color: "#e20303" }}>Z3RØ</span>
              <span
                className="transition-colors duration-500 hover:text-white"
                style={{ color: "#737373" }}
              >
                NULL
              </span>
            </span>
          </h1>
        </div>

        {/* Subtitulos con roles - barra estilo terminal */}
        <div className="mb-6 inline-flex items-center gap-4 sm:gap-6 px-6 py-3 animate-entry delay-400">
          <div className="flex items-center gap-2 text-gray-300">
            <Code className="h-4 w-4 text-red-500" />
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase">
              Developer
            </span>
          </div>
          <span className="font-mono text-gray-600 text-xs">///</span>
          <div className="flex items-center gap-2 text-gray-300">
            <Cpu className="h-4 w-4 text-red-500" />
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase">
              Maker
            </span>
          </div>
          <span className="font-mono text-gray-600 text-xs">///</span>
          <div className="flex items-center gap-2 text-gray-300">
            <Bug className="h-4 w-4 text-red-500" />
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase">
              Security
            </span>
          </div>
        </div>

        {/* Descripcion */}
        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400 sm:text-xl leading-relaxed animate-entry delay-500">
          Apasionado por la{" "}
          <span className="text-white font-medium">{typedText}</span>
          <span className="animate-terminal-blink font-bold text-red-500">
            |
          </span>
        </p>

        {/* Botones */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-entry delay-600">
          {/* Ver Proyectos - rojo */}
          <a
            href="#proyectos"
            className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-lg bg-red-600 px-8 text-sm font-medium text-white transition-all duration-300 hover:bg-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:scale-105"
          >
            <Wrench className="relative h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
            <span className="relative">Ver Proyectos</span>
          </a>

          {/* Tienda - borde blanco */}
          <a
            href="#shop"
            className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-lg border border-gray-600 bg-white/5 px-8 text-sm font-medium text-gray-300 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-gray-400 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105"
          >
            <ShoppingBag className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            <span>Tienda</span>
          </a>

          {/* Contactar - borde rojo */}
          <a
            href="#contacto"
            className="group inline-flex h-12 items-center justify-center rounded-lg border border-red-500/40 bg-transparent px-8 text-sm font-medium text-red-400 backdrop-blur-sm transition-all duration-300 hover:bg-red-500/10 hover:border-red-400 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:scale-105"
          >
            <Mail className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            Contactar
          </a>
        </div>
      </div>

      {/* Redes sociales */}
      <div className="absolute bottom-10 flex gap-4 animate-entry-fade delay-800">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            className="group relative p-2 text-gray-600 transition-all duration-300 hover:text-gray-300"
            aria-label={social.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="absolute inset-0" />
            <social.icon className="relative h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
          </a>
        ))}
      </div>

      {/* Indicador scroll */}
      <div className="absolute bottom-24 animate-entry-fade delay-1000">
        <ChevronDown className="h-6 w-6 text-gray-600 animate-scroll-hint" />
      </div>
    </section>
  );
}
