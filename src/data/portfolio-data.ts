/**
 * ============================================================
 * DATOS DEL PORTAFOLIO - portfolio-data.ts
 * ============================================================
 *
 * Este archivo centraliza todos los datos estáticos del portafolio:
 * - Proyectos realizados
 * - Habilidades técnicas
 * - Iconos flotantes decorativos
 * - Productos de la tienda
 * - Enlaces a redes sociales
 *
 * Al tener los datos separados del código visual (componentes),
 * es más fácil actualizar la información sin tocar el diseño.
 * ============================================================
 */

import {
  Shield,
  Cpu,
  Wifi,
  Home,
  Printer,
  Bot,
  Terminal,
  Lock,
  Eye,
  Bug,
  Fingerprint,
  Key,
  Radio,
  Zap,
  CircuitBoard,
  Code,
  Binary,
  Braces,
  Network,
  FileCode,
  Hash,
  Cog,
  Github,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react";
import { TikTokIcon } from "@/components/icons/TikTokIcon";

// ────────────────────────────────────────────
// PROYECTOS
// ────────────────────────────────────────────
// Cada proyecto tiene un título, descripción, etiquetas tecnológicas,
// una categoría (para mostrar el icono correcto) y links.
export const projects = [
  {
    title: "WiFi Deauther",
    description:
      "Dispositivo de hardware para pruebas de seguridad WiFi. Detecta redes vulnerables y realiza auditorías de autenticación.",
    tags: ["ESP32", "Python", "Ciberseguridad"],
    category: "ciberseguridad",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    github: "#",
    demo: "#",
  },
  {
    title: "Robot Seguidor de Línea",
    description:
      "Robot autónomo con sensores infrarrojos que sigue trayectorias. Chasis impreso en 3D y controlado por Arduino.",
    tags: ["Arduino", "C++", "Impresión 3D"],
    category: "robotica",
    image:
      "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?w=600&h=400&fit=crop",
    github: "#",
    demo: "#",
  },
  {
    title: "BT Auth Scanner",
    description:
      "Herramienta de análisis de seguridad Bluetooth. Escanea dispositivos y detecta vulnerabilidades de autenticación.",
    tags: ["Python", "Bluetooth", "Raspberry Pi"],
    category: "ciberseguridad",
    image:
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&h=400&fit=crop",
    github: "#",
    demo: "#",
  },
  {
    title: "Sistema Domótica",
    description:
      "Automatización del hogar con control de luces, temperatura y seguridad. Interfaz web y control por voz.",
    tags: ["ESP8266", "MQTT", "Home Assistant"],
    category: "domotica",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop",
    github: "#",
    demo: "#",
  },
  {
    title: "Keylogger Detector",
    description:
      "Script en Python para detectar y analizar actividad sospechosa de keyloggers en sistemas Windows/Linux.",
    tags: ["Python", "Seguridad", "Análisis"],
    category: "ciberseguridad",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    github: "#",
    demo: "#",
  },
  {
    title: "Brazo Robótico",
    description:
      "Brazo robótico de 6 ejes con piezas impresas en 3D. Control mediante joystick y programación de movimientos.",
    tags: ["Arduino", "Servos", "Impresión 3D"],
    category: "robotica",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    github: "#",
    demo: "#",
  },
];

// ────────────────────────────────────────────
// HABILIDADES
// ────────────────────────────────────────────
// Cada habilidad tiene un nombre, un icono de lucide-react
// y una lista de sub-habilidades o tecnologías relacionadas.
export const skills = [
  {
    name: "Ciberseguridad",
    icon: Shield,
    items: [
      "Pentesting",
      "Análisis de redes",
      "WiFi/Bluetooth Security",
      "Python scripting",
    ],
  },
  {
    name: "Electrónica",
    icon: Cpu,
    items: ["Arduino", "ESP32/ESP8266", "Raspberry Pi", "Diseño de PCB"],
  },
  {
    name: "Robótica",
    icon: Bot,
    items: ["Sensores", "Motores/Servos", "Control PID", "Visión artificial"],
  },
  {
    name: "Domótica",
    icon: Home,
    items: ["MQTT", "Home Assistant", "Zigbee/Z-Wave", "Automatización"],
  },
  {
    name: "Redes",
    icon: Wifi,
    items: [
      "WiFi hacking",
      "Bluetooth LE",
      "Protocolos IoT",
      "Análisis de tráfico",
    ],
  },
  {
    name: "Fabricación",
    icon: Printer,
    items: ["Impresión 3D", "Diseño CAD", "Soldadura", "Prototipado"],
  },
];

// ────────────────────────────────────────────
// ICONOS FLOTANTES (decorativos del Hero)
// ────────────────────────────────────────────
// Se muestran de fondo en la sección principal con una animación flotante.
// Cada uno tiene:
//   - icon:  componente de icono de lucide-react
//   - delay: retraso de la animación para que no se muevan todos igual
//   - x, y:  posición en porcentaje dentro del contenedor
export const floatingIcons = [
  // Iconos de Ciberseguridad
  { icon: Lock, delay: "0s", x: 8, y: 15 },
  { icon: Eye, delay: "0.5s", x: 85, y: 20 },
  { icon: Bug, delay: "1s", x: 75, y: 70 },
  { icon: Fingerprint, delay: "1.5s", x: 12, y: 75 },
  { icon: Key, delay: "2s", x: 90, y: 50 },
  { icon: Shield, delay: "2.5s", x: 50, y: 85 },
  // Iconos de Electrónica
  { icon: CircuitBoard, delay: "0.3s", x: 20, y: 45 },
  { icon: Cpu, delay: "1.2s", x: 70, y: 35 },
  { icon: Radio, delay: "1.8s", x: 35, y: 80 },
  { icon: Zap, delay: "2.2s", x: 60, y: 15 },
  // Iconos de Programación
  { icon: Code, delay: "0.7s", x: 40, y: 25 },
  { icon: Binary, delay: "1.4s", x: 25, y: 60 },
  { icon: Braces, delay: "2.1s", x: 80, y: 80 },
  { icon: Terminal, delay: "0.9s", x: 55, y: 55 },
  { icon: FileCode, delay: "1.7s", x: 15, y: 30 },
  // Iconos de Maker / Redes
  { icon: Cog, delay: "0.4s", x: 65, y: 45 },
  { icon: Network, delay: "1.6s", x: 45, y: 65 },
  { icon: Hash, delay: "2.3s", x: 30, y: 10 },
];

// ────────────────────────────────────────────
// PRODUCTOS DE LA TIENDA
// ────────────────────────────────────────────
// Cada producto tiene datos para mostrarlo y un link a MercadoLibre.
// Reemplazar los "#" con los links reales de MercadoLibre.
export const shopProducts = [
  {
    title: "WiFi Deauther V3",
    description: "Dispositivo listo para usar. Incluye case impreso en 3D.",
    price: "$15.000",
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&h=400&fit=crop",
    mercadoLibreUrl: "#",
  },
  {
    title: "Bad USB Rubber Ducky",
    description: "Herramienta de pentesting con scripts personalizables.",
    price: "$8.500",
    image:
      "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=600&h=400&fit=crop",
    mercadoLibreUrl: "#",
  },
  {
    title: "ESP32 Dev Kit",
    description: "Kit completo con sensores y componentes para proyectos IoT.",
    price: "$12.000",
    image:
      "https://images.unsplash.com/photo-1608564697071-ddf911d81370?w=600&h=400&fit=crop",
    mercadoLibreUrl: "#",
  },
  {
    title: "Brazo Robótico Mini",
    description: "Brazo robótico ensamblado con Arduino y control remoto.",
    price: "$25.000",
    image:
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop",
    mercadoLibreUrl: "#",
  },
];

// ────────────────────────────────────────────
// REDES SOCIALES
// ────────────────────────────────────────────
// Links a las redes sociales del autor.
// Cada red tiene su color de marca que se activa al hover (fondo, texto, sombra, borde).
// Reemplazar los "#" con los links reales.
export const socialLinks = [
  {
    icon: Youtube,
    label: "YouTube",
    href: "#",
    hoverText: "hover:text-white",
    hoverBg: "hover:bg-white/10",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]",
    hoverBorder: "hover:border-white/20",
  },
  {
    icon: TikTokIcon,
    label: "TikTok",
    href: "#",
    hoverText: "hover:text-white",
    hoverBg: "hover:bg-white/10",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]",
    hoverBorder: "hover:border-white/20",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "#",
    hoverText: "hover:text-white",
    hoverBg: "hover:bg-white/10",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]",
    hoverBorder: "hover:border-white/20",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "#",
    hoverText: "hover:text-white",
    hoverBg: "hover:bg-white/10",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]",
    hoverBorder: "hover:border-white/20",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "#",
    hoverText: "hover:text-white",
    hoverBg: "hover:bg-white/10",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]",
    hoverBorder: "hover:border-white/20",
  },
];

// ────────────────────────────────────────────
// VIDEOS DE YOUTUBE
// ────────────────────────────────────────────
// Lista de videos de YouTube para mostrar en la sección de Videos.
// Cada video tiene un ID de YouTube, título y descripción.
export const youtubeVideos = [
  {
    id: "IT1uBUsOmUY", // Ejemplo de ID de video
    title: "Mi Primer Proyecto de Robótica",
    description: "Una breve demostración de mi primer brazo robótico funcional.",
  },
  {
    id: "VeMaF27B0nA", // Ejemplo de ID de video
    title: "Auditoría WiFi con ESP32",
    description: "Cómo utilizar el WiFi Deauther para pruebas de penetración.",
  },
  {
    id: "gpB4600keWA", // Ejemplo de ID de video
    title: "Automatización con Home Assistant",
    description: "Configuración básica para controlar luces y temperatura.",
  },
];