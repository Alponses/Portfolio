# Portafolio — guía de imágenes y publicación

Este repositorio contiene la web pública de Gabriel Muñoz. La actualización `feat/visual-portfolio-projects-2026` conserva la portada editorial, agrega fotografías de **referencia** y un catálogo de proyectos filtrable.

## Sustituir fotografías de referencia

1. Exporta una foto real tuya en **WebP** con buena iluminación: `assets/imgs/gabriel-portrait.webp` (vertical, idealmente 1200 × 1500 o proporción 4:5).
2. Exporta una segunda fotografía real trabajando o frente a tu equipo: `assets/imgs/gabriel-workspace.webp` (horizontal o vertical; la página se adapta).
3. Sube ambas rutas al repositorio. Mientras falten, el HTML muestra imágenes públicas de referencia de Unsplash, **que no corresponden a Gabriel**.
4. Elimina los avisos «FOTO DE REFERENCIA» del HTML cuando hayas incorporado fotos reales.

No hay fotografías personales sintéticas presentadas como auténticas.

## Portafolio de proyectos

- Archivo de proyectos: `assets/js/portfolio-projects.js`. Actualiza nombre, descripción, categoría, tecnologías, estado y vínculo desde ese archivo.
- Capturas de sitios: los proyectos comerciales públicos usan una previsualización automatizada del sitio mediante WordPress mShots. Son vistas actuales del **sitio público**, no evidencia exacta de una versión entregada por el autor. La tarjeta conserva un diseño alternativo cuando la imagen no está disponible.
- Proyectos privados: no enlazar a repositorios privados, no subir pantallas internas sin autorización, no exponer datos de clientes o pacientes, ni atribuir métricas no verificadas.
- El laboratorio SOC únicamente describe entregables documentados y marca Windows/Sysmon como pendientes.

## Vista local

Abre `index.html` en un navegador o usa un servidor estático (por ejemplo `python3 -m http.server 8000`). No requiere build ni dependencias de npm.

## Publicación

Revisa la rama y las fotos antes de fusionar a `main`. Esta rama no cambia los archivos del antiguo prototipo en `assets/index.html`.
