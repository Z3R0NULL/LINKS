import { Zap } from "lucide-react";
import { CyberGrid } from "@/components/CyberGrid";
import { skills } from "@/data/portfolio-data";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaPhp,
  FaWindows,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiGnubash,
  SiLua,
  SiGit,
  SiUnity,
  SiLinux,
  SiGithub,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import type { IconType } from "react-icons";

const languageIcons: { name: string; color: string; icon: IconType }[] = [
  { name: "HTML", color: "#E34F26", icon: FaHtml5 },
  { name: "CSS", color: "#1572B6", icon: FaCss3Alt },
  { name: "JavaScript", color: "#F7DF1E", icon: FaJsSquare },
  { name: "Python", color: "#3776AB", icon: FaPython },
  { name: "Bash", color: "#4EAA25", icon: SiGnubash },
  { name: "PHP", color: "#777BB4", icon: FaPhp },
  { name: "C#", color: "#68217A", icon: TbBrandCSharp },
  { name: "C++", color: "#00599C", icon: SiCplusplus },
  { name: "Lua", color: "#2C2D72", icon: SiLua },
  { name: "TypeScript", color: "#3178C6", icon: SiTypescript },
];

const techIcons: { name: string; color: string; icon: IconType }[] = [
  { name: "Git", color: "#F05032", icon: SiGit },
  { name: "React", color: "#61DAFB", icon: FaReact },
  { name: "Next.js", color: "#FFFFFF", icon: SiNextdotjs },
  { name: "Node.js", color: "#339933", icon: FaNodeJs },
  { name: "Tailwind CSS", color: "#06B6D4", icon: SiTailwindcss },
  { name: "Unity", color: "#FFFFFF", icon: SiUnity },
  { name: "VS Code", color: "#007ACC", icon: DiVisualstudio },
  { name: "Linux", color: "#FCC624", icon: SiLinux },
  { name: "Windows", color: "#0078D6", icon: FaWindows },
  { name: "GitHub", color: "#FFFFFF", icon: SiGithub },
];

export function SkillsSection() {
  return (
    <section className="relative border-t border-white/5 bg-[#0d0d0d] py-24">
      <CyberGrid className="opacity-30" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="scroll-reveal mb-4 flex items-center justify-center gap-3">
          <Zap className="h-6 w-6 text-red-500" />
          <h2 className="text-center text-3xl font-bold sm:text-4xl text-white">
            Habilidades
          </h2>
        </div>

        <p
          className="scroll-reveal mx-auto mb-12 max-w-2xl text-center text-gray-500"
          style={{ transitionDelay: "0.1s" }}
        >
          Áreas en las que me especializo y tecnologías que domino
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="scroll-reveal group relative rounded-xl border border-white/[0.06] bg-[#111111]/80 p-6 transition-all duration-150 hover:border-white/15 hover:bg-white/[0.04] hover:-translate-y-1"
              style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 transition-colors duration-150 group-hover:bg-red-500/10 group-hover:border-red-500/20">
                  <skill.icon className="h-5 w-5 text-gray-400 transition-all duration-150 group-hover:text-red-400 group-hover:rotate-12 group-hover:scale-110" />
                </div>
                <h3 className="font-semibold text-white">{skill.name}</h3>
              </div>

              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-500 transition-colors duration-150 group-hover:text-gray-400"
                  >
                    <span className="h-1 w-1 rounded-full bg-gray-600 transition-colors duration-150 group-hover:bg-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Lenguajes y Tecnologías */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Iconos de lenguajes de programación */}
          <div
            className="scroll-reveal rounded-xl border border-white/[0.06] bg-[#111111]/60 px-6 py-6"
            style={{ transitionDelay: "0.8s" }}
          >
            <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
              Lenguajes
            </p>
            <div className="grid grid-cols-5 gap-y-6 gap-x-2 max-w-sm mx-auto justify-items-center">
              {languageIcons.map((lang) => (
                <div
                  key={lang.name}
                  className="group/lang flex flex-col items-center gap-2 transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] transition-all duration-200 group-hover/lang:border-white/15 group-hover/lang:bg-white/[0.06]">
                    <lang.icon
                      className="h-5 w-5 transition-all duration-300 text-gray-400 grayscale opacity-30 brightness-[0.8] group-hover/lang:text-[var(--hover-color)] group-hover/lang:grayscale-0 group-hover/lang:opacity-100 group-hover/lang:brightness-100 group-hover/lang:scale-110"
                      style={{ "--hover-color": lang.color } as React.CSSProperties}
                    />
                  </div>
                  <span className="text-[10px] font-medium text-gray-600 transition-colors duration-200 group-hover/lang:text-gray-400">
                    {lang.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tecnologías */}
          <div
            className="scroll-reveal rounded-xl border border-white/[0.06] bg-[#111111]/60 px-6 py-6"
            style={{ transitionDelay: "0.9s" }}
          >
            <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
              Tecnologías
            </p>
            <div className="grid grid-cols-5 gap-y-6 gap-x-2 max-w-sm mx-auto justify-items-center">
              {techIcons.map((tech) => (
                <div
                  key={tech.name}
                  className="group/lang flex flex-col items-center gap-2 transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] transition-all duration-200 group-hover/lang:border-white/15 group-hover/lang:bg-white/[0.06]">
                    <tech.icon
                      className="h-5 w-5 transition-all duration-300 text-gray-400 grayscale opacity-30 brightness-[0.8] group-hover/lang:text-[var(--hover-color)] group-hover/lang:grayscale-0 group-hover/lang:opacity-100 group-hover/lang:brightness-100 group-hover/lang:scale-110"
                      style={{ "--hover-color": tech.color } as React.CSSProperties}
                    />
                  </div>
                  <span className="text-[10px] font-medium text-gray-600 transition-colors duration-200 group-hover/lang:text-gray-400">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
