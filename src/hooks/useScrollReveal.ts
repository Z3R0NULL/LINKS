import { useEffect, useRef } from "react";

/**
 * Hook personalizado para animar elementos cuando aparecen en el viewport.
 *
 * Usa IntersectionObserver para activar la clase "revealed" sobre los
 * elementos hijos con la clase "scroll-reveal". El revelado es one-shot
 * (una vez visible, queda visible) para evitar parpadeos al hacer scroll
 * hacia arriba y para que en producción —donde el layout puede tardar
 * por imágenes/fuentes— los elementos no queden "atascados" invisibles.
 *
 * Robustez para producción:
 *  - rootMargin generoso: revela un poco antes de entrar al viewport.
 *  - Fallback inmediato: cualquier .scroll-reveal ya visible al montar
 *    se revela aunque el IO aún no haya disparado.
 *  - Re-chequeo al `load` y al `resize`: cubre el caso en el que las
 *    imágenes/fuentes cambian el layout después de la hidratación.
 *  - MutationObserver: observa nuevos .scroll-reveal añadidos después.
 */
export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Marca un elemento como revelado y deja de observarlo.
    const reveal = (target: Element) => {
      if (!target.classList.contains("revealed")) {
        target.classList.add("revealed");
      }
      observer.unobserve(target);
    };

    // Comprueba manualmente si un elemento está dentro del viewport.
    const isInViewport = (target: Element) => {
      const rect = target.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const vw = window.innerWidth || document.documentElement.clientWidth;
      return rect.top < vh && rect.bottom > 0 && rect.left < vw && rect.right > 0;
    };

    // Observer principal: revela cuando el elemento entra al viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) reveal(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    );

    // Registra todos los .scroll-reveal actuales.
    const observeAll = () => {
      el.querySelectorAll(".scroll-reveal:not(.revealed)").forEach((child) => {
        observer.observe(child);
        // Fallback inmediato: si ya está visible, revelar al instante.
        if (isInViewport(child)) reveal(child);
      });
    };
    observeAll();

    // Re-chequeo cuando terminan de cargar imágenes/fuentes y al redimensionar.
    const recheck = () => {
      el.querySelectorAll(".scroll-reveal:not(.revealed)").forEach((child) => {
        if (isInViewport(child)) reveal(child);
      });
    };
    window.addEventListener("load", recheck);
    window.addEventListener("resize", recheck);
    // Red de seguridad: revela todo lo que aún quede visible tras 1.5s.
    const safety = window.setTimeout(recheck, 1500);

    // Vigila nodos añadidos dinámicamente para observarlos también.
    const mo = new MutationObserver(() => observeAll());
    mo.observe(el, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
      window.removeEventListener("load", recheck);
      window.removeEventListener("resize", recheck);
      window.clearTimeout(safety);
    };
  }, []);

  return ref;
}
