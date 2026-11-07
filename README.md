# Gabriel Muñoz — Portafolio

Sitio estático, publicado mediante GitHub Pages. Repositorio: `Alponses/Portfolio`.

## Casos públicos

El archivo `assets/js/portfolio-projects.js` contiene **16 proyectos**. Cuatro se muestran en el bloque principal (DITEH, SOC Blue Team Lab, Video Factory y Presumiendo México) y **12 casos adicionales** aparecen en el archivo. El buscador trabaja sobre esos 12 casos sin duplicar los destacados.

## Imágenes

- `assets/imgs/diteh.png`: imagen de DITEH ya presente en el repositorio antes de estos cambios.
- `assets/imgs/portfolio/video-factory-panel.webp`: captura de panel entregada para el portafolio.
- `assets/imgs/portfolio/mundo-ventura.webp`: captura de MundoVentura proporcionada por el usuario.
- `assets/imgs/portfolio/business-music.webp`: captura de Business Music Studio proporcionada por el usuario.
- `assets/imgs/portfolio/aceros-munoz.webp`: captura de Aceros Muñoz proporcionada por el usuario.
- `assets/imgs/portfolio/viva-tu-salud.webp`: captura de Viva Tu Salud proporcionada por el usuario.
- `assets/imgs/portfolio/presumiendo-case.webp` y `carrera-moto-case.webp`: **portadas editoriales originales** creadas para no publicar capturas cuyo permiso está pendiente. No son pantallas reales del producto.
- La imagen de Wazuh se enlaza al repositorio público `Alponses/SOC-Blue-Team-Lab` y corresponde a una evidencia histórica del 05/oct/2026.

Las imágenes subidas se exportaron a **WebP**, sin incluir las barras del navegador cuando aplicaba. Las imágenes bajo el primer pliegue se cargan en diferido. No se utiliza el servicio remoto mShots para evitar páginas de error 404 incrustadas.

**Permisos:** los paquetes de DITEH, Carrera Moto y Presumiendo México que tenían avisos de autorización pendiente no se publicaron. Para Presumiendo y Carrera Moto se incluyen portadas editoriales creadas aparte. Reemplazar estas portadas por capturas del cliente solo después de confirmar el permiso correspondiente.

## Fotos personales pendientes

- `assets/imgs/gabriel-portrait.webp`: retrato 4:5 auténtico.
- `assets/imgs/gabriel-workspace.webp`: foto auténtica del espacio de trabajo.

Mientras no estén disponibles, la página identifica las fotografías como *de referencia*.

## Validación

```bash
node --check assets/js/portfolio-projects.js
node scripts/check-portfolio.mjs
```

No requiere Node ni servidor para que el visitante vea el sitio; estas instrucciones son para validar el repositorio.
