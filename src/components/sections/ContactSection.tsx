import { Lock, Mail } from "lucide-react";
import { CyberGrid } from "@/components/CyberGrid";
import { socialLinks } from "@/data/portfolio-data";

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative border-t border-white/5 bg-[#0d0d0d] py-24"
    >
      <CyberGrid className="opacity-30" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="scroll-reveal mb-4 flex items-center justify-center gap-3">
          <Lock className="h-6 w-6 text-red-500" />
          <h2 className="text-3xl font-bold sm:text-4xl text-white">
            Contacto
          </h2>
        </div>

        <p
          className="scroll-reveal mx-auto mb-10 max-w-xl text-gray-500"
          style={{ transitionDelay: "0.1s" }}
        >
          ¿Tienes un proyecto de hardware, seguridad o automatización en mente?
          ¿Quieres colaborar? No dudes en contactarme.
        </p>

        <div className="scroll-reveal" style={{ transitionDelay: "0.2s" }}>
          <a
            href="mailto:tu@email.com"
            className="group relative inline-flex h-14 items-center justify-center gap-2 overflow-hidden rounded-lg bg-red-600 px-10 text-sm font-medium text-white transition-all duration-300 hover:bg-red-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.4)] hover:scale-105"
          >
            <Mail className="relative h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            <span className="relative font-mono">Enviar Email</span>
          </a>
        </div>

        <div
          className="scroll-reveal mt-12 flex flex-wrap justify-center gap-4"
          style={{ transitionDelay: "0.3s" }}
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-5 py-3 text-gray-400 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${social.hoverText} ${social.hoverBg} ${social.hoverShadow} ${social.hoverBorder}`}
            >
              <social.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-mono text-sm">{social.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
