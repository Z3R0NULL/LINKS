# Reparar el icono de la pestaña en producción

## Objetivo
Hacer que el logo del cero rojo aparezca de forma consistente como icono de la pestaña, incluso en navegadores que buscan el formato clásico o conservan una versión anterior en caché.

## Cambios
- Mantener el PNG actual de 64 × 64, que ya está incluido en la carpeta pública y enlazado desde la cabecera.
- Generar también un `favicon.ico` real con tamaños habituales para compatibilidad con navegadores, servidores y exportaciones que solicitan `/favicon.ico` directamente.
- Declarar explícitamente las variantes `icon`, `shortcut icon` y `apple-touch-icon`, incluyendo dimensiones y una versión en la URL para evitar la caché antigua.
- Conservar el título y el resto de la página sin cambios.

## Verificación
- Comprobar que cada archivo del icono responde correctamente desde la web.
- Revisar el HTML final y confirmar que contiene todas las declaraciones.
- Abrir la página en un navegador limpio para comprobar visualmente el icono y descartar errores.

## Detalles técnicos
El proyecto actualmente solo ofrece `favicon.png` y una declaración `rel="icon"`. La solución añadirá la ruta clásica `/favicon.ico` y metadatos alternativos para cubrir el comportamiento distinto entre desarrollo, producción y navegadores con caché persistente.
