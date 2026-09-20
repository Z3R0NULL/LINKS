
import { useEffect, useRef, useState, useCallback } from "react";

/**
 * CyberGrid - Fondo decorativo con cuadrícula estilo "cyberpunk".
 *
 * Muestra una cuadrícula sutil de líneas verdes (emerald) que cubre
 * todo el contenedor padre. Cuando el usuario mueve el mouse sobre
 * el contenedor, se ilumina un círculo alrededor del cursor creando
 * un efecto de "linterna" o "glow" interactivo.
 *
 * Funcionamiento:
 * 1. Se renderiza una cuadrícula base con opacidad baja (cyber-grid)
 * 2. Se superpone una cuadrícula brillante (cyber-grid-glow)
 * 3. La cuadrícula brillante se muestra solo en un radio de 250px
 *    alrededor del cursor usando CSS mask-image
 * 4. Los eventos de mouse se escuchan en el elemento padre
 *
 * @param className - Clases CSS adicionales (ej: "opacity-50")
 */
export function CyberGrid({ className }: { className?: string }) {
  // Referencia al div de la cuadrícula para calcular posiciones
  const gridRef = useRef<HTMLDivElement>(null);

  // Posición del mouse relativa al contenedor
  // Se inicia fuera de pantalla (-1000) para que el glow no sea visible al inicio
  const [mouse, setMouse] = useState({ x: -1000, y: -1000 });

  // Actualizar la posición del mouse relativa al contenedor
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const el = gridRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    // Convertir coordenadas absolutas del mouse a coordenadas relativas al grid
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  // Cuando el mouse sale del contenedor, ocultar el efecto glow
  const handleMouseLeave = useCallback(() => {
    setMouse({ x: -1000, y: -1000 });
  }, []);

  // Registrar los event listeners en el elemento padre
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseleave", handleMouseLeave);

    // Limpieza al desmontar el componente
    return () => {
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <div ref={gridRef} className={`absolute inset-0 ${className ?? ""}`}>
      {/* Cuadrícula base - siempre visible con opacidad baja */}
      <div className="absolute inset-0 cyber-grid" />

      {/* Cuadrícula brillante - solo visible cerca del cursor */}
      <div
        className="absolute inset-0 cyber-grid-glow transition-opacity duration-300"
        style={{
          // Solo mostrar cuando el mouse está dentro del contenedor
          opacity: mouse.x > -500 ? 1 : 0,
          // Máscara circular que sigue al cursor (radio de 250px)
          maskImage: `radial-gradient(circle 250px at ${mouse.x}px ${mouse.y}px, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 250px at ${mouse.x}px ${mouse.y}px, black 0%, transparent 100%)`,
        }}
      />
    </div>
  );
}
