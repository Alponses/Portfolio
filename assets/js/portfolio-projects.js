'use strict';
/* Public showcase. No private GitHub repo links, client data, internal screens or invented metrics. */
const PORTFOLIO_PROJECTS = [
  {
    "id": "soc",
    "name": "SOC Blue Team Lab",
    "group": "security",
    "description": "Laboratorio con Wazuh 4.14.8, agente Windows 11 y Sysmon. Cinco fuentes verificadas el 5 de octubre de 2026; detecciones y casos de investigación siguen en desarrollo.",
    "tags": [
      "Wazuh",
      "Ubuntu",
      "SOC"
    ],
    "url": "https://github.com/Alponses/SOC-Blue-Team-Lab",
    "shot": null,
    "status": "Laboratorio documentado",
    "image": "https://raw.githubusercontent.com/Alponses/SOC-Blue-Team-Lab/main/evidence/deliverable-1/windows-agent-dashboard.png",
    "image_kind": "screenshot"
  },
  {
    "id": "diteh",
    "name": "DITEH — Sistema hospitalario",
    "group": "software",
    "description": "Plataforma de gestión clínica con pacientes, agenda, caja, honorarios, permisos y auditoría. Código y pantallas internas no públicos.",
    "tags": [
      "React",
      "TypeScript",
      "PostgreSQL"
    ],
    "url": null,
    "shot": null,
    "status": "Caso privado",
    "image": "assets/imgs/diteh.png",
    "image_kind": "screenshot"
  },
  {
    "id": "video",
    "name": "Video Factory",
    "group": "automation",
    "description": "Herramientas de automatización audiovisual con panel operativo, trabajos, renderizado y seguimiento de publicaciones.",
    "tags": [
      "Node.js",
      "Docker",
      "FFmpeg"
    ],
    "url": null,
    "shot": null,
    "status": "Caso privado",
    "image": "assets/imgs/portfolio/video-factory-panel.webp",
    "image_kind": "screenshot"
  },
  {
    "id": "medmarket",
    "name": "MedMarket",
    "group": "software",
    "description": "Proyecto de software full-stack documentado en repositorio privado. Presentación pública limitada a su alcance general.",
    "tags": [
      "Full-stack",
      "Producto digital"
    ],
    "url": null,
    "shot": null,
    "status": "Caso privado",
    "image": "assets/imgs/portfolio/medmarket-editorial.svg",
    "image_kind": "editorial"
  },
  {
    "id": "aceros",
    "name": "Aceros Muñoz",
    "group": "software",
    "description": "Sitio comercial y catálogo de materiales de construcción; arquitectura del panel de operaciones en diseño.",
    "tags": [
      "Web",
      "Operaciones",
      "Inventario"
    ],
    "url": null,
    "shot": null,
    "status": "En desarrollo",
    "image": "assets/imgs/portfolio/aceros-munoz.webp",
    "image_kind": "screenshot"
  },
  {
    "id": "vts",
    "name": "Viva Tu Salud — Revista digital",
    "group": "wordpress",
    "description": "Sitio editorial con revista digital, portadas de ediciones e integración de contenidos en WordPress.",
    "tags": [
      "WordPress",
      "PHP",
      "Contenido"
    ],
    "url": "https://vivatusalud.com/",
    "shot": null,
    "status": "Caso comercial",
    "image": "assets/imgs/portfolio/viva-tu-salud.webp",
    "image_kind": "screenshot"
  },
  {
    "id": "ultranoticias",
    "name": "Ultranoticias",
    "group": "wordpress",
    "description": "Trabajé en plugins WordPress para organización editorial y personalización de espacios publicitarios.",
    "tags": [
      "WordPress",
      "PHP",
      "AdTech"
    ],
    "url": "https://ultranoticias.com.mx/",
    "shot": null,
    "status": "Trabajo profesional",
    "image": "assets/imgs/portfolio/ultranoticias-editorial.svg",
    "image_kind": "editorial",
    "live_preview": "https://ultranoticias.com.mx/"
  },
  {
    "id": "presumiendo",
    "name": "Presumiendo México",
    "group": "wordpress",
    "description": "Desarrollo de la experiencia web para televisión digital: programas, episodios, navegación editorial y componentes multimedia.",
    "tags": [
      "Elementor",
      "Plugins",
      "Contenido"
    ],
    "url": "https://presumiendomexico.mx/",
    "shot": null,
    "status": "Trabajo profesional",
    "image": "assets/imgs/portfolio/presumiendo-captura-real.webp",
    "image_kind": "screenshot"
  },
  {
    "id": "mundoventura",
    "name": "MundoVentura",
    "group": "automation",
    "description": "Extendí un sistema de reservas y la integración de Stripe para gestionar cobros y operaciones del equipo.",
    "tags": [
      "WordPress",
      "Stripe",
      "Reservas"
    ],
    "url": "https://mundo-ventura.com.mx/",
    "shot": null,
    "status": "Trabajo profesional",
    "image": "assets/imgs/portfolio/mundo-ventura.webp",
    "image_kind": "screenshot"
  },
  {
    "id": "carrera",
    "name": "Carrera Moto",
    "group": "shopify",
    "description": "Componentes Shopify para compra, variantes, widgets editables e integraciones de e-commerce.",
    "tags": [
      "Shopify",
      "Liquid",
      "E-commerce"
    ],
    "url": "https://carreramoto.mx/",
    "shot": null,
    "status": "Trabajo profesional",
    "image": "assets/imgs/portfolio/carrera-moto-case.webp",
    "image_kind": "editorial"
  },
  {
    "id": "freeleads",
    "name": "FreeLeads",
    "group": "wordpress",
    "description": "Landing de producto orientada a explicar el valor de una solución comercial.",
    "tags": [
      "Web",
      "Landing",
      "Producto"
    ],
    "url": "https://freeleads.io/",
    "shot": null,
    "status": "Trabajo profesional",
    "image": "assets/imgs/portfolio/freeleads-editorial.svg",
    "image_kind": "editorial",
    "live_preview": "https://freeleads.io/"
  },
  {
    "id": "campo",
    "name": "Campo Emilia",
    "group": "shopify",
    "description": "Desarrollé una tienda Shopify con personalización de tema y una experiencia de navegación orientada al catálogo.",
    "tags": [
      "Shopify",
      "Liquid",
      "Frontend"
    ],
    "url": "https://campoemilia.com/",
    "shot": null,
    "status": "Trabajo profesional",
    "image": "assets/imgs/portfolio/campo-emilia-editorial.svg",
    "image_kind": "editorial",
    "live_preview": "https://campoemilia.com/"
  },
  {
    "id": "bms",
    "name": "Business Music Studio",
    "group": "wordpress",
    "description": "Experiencia web para un producto de música para negocios, con diseño e implementación de interfaz.",
    "tags": [
      "HTML",
      "CSS",
      "Producto"
    ],
    "url": "https://businessmusic.studio/",
    "shot": null,
    "status": "Trabajo profesional",
    "image": "assets/imgs/portfolio/business-music.webp",
    "image_kind": "screenshot"
  },
  {
    "id": "acoustics",
    "name": "Ultra Acoustics",
    "group": "wordpress",
    "description": "Rediseño del sitio, organización de contenidos y trabajo de migración.",
    "tags": [
      "WordPress",
      "Migración",
      "Frontend"
    ],
    "url": "https://ultraacoustics.com/",
    "shot": null,
    "status": "Trabajo profesional",
    "image": "assets/imgs/portfolio/ultra-acoustics-editorial.svg",
    "image_kind": "editorial",
    "live_preview": "https://ultraacoustics.com/"
  },
  {
    "id": "freepi",
    "name": "Freepi",
    "group": "wordpress",
    "description": "Rediseño corporativo para comunicar servicios y soluciones técnicas.",
    "tags": [
      "Web",
      "UX",
      "Frontend"
    ],
    "url": "https://freepi.io/",
    "shot": null,
    "status": "Trabajo profesional",
    "image": "assets/imgs/portfolio/freepi-editorial.svg",
    "image_kind": "editorial",
    "live_preview": "https://freepi.io/"
  },
  {
    "id": "sonder",
    "name": "Sonder Radio",
    "group": "wordpress",
    "description": "Experiencia editorial para medio digital, con soporte al sitio y componentes publicitarios.",
    "tags": [
      "WordPress",
      "Contenido",
      "Ads"
    ],
    "url": "https://www.sonder-radio.com/",
    "shot": null,
    "status": "Trabajo profesional",
    "image": "assets/imgs/portfolio/sonder-editorial.svg",
    "image_kind": "editorial",
    "live_preview": "https://www.sonder-radio.com/"
  }
];
(function () {
  const host = document.getElementById('archiveGrid');
  if (!host) return;
  const search = document.getElementById('archiveSearch');
  const filters = [...document.querySelectorAll('[data-archive-filter]')];
  const counter = document.getElementById('archiveCount');
  const empty = document.getElementById('archiveEmpty');
  const featured = new Set(['soc', 'diteh', 'video', 'presumiendo']);
  const priority = ['mundoventura', 'bms', 'aceros', 'vts', 'carrera', 'campo', 'ultranoticias', 'freeleads', 'freepi', 'acoustics', 'sonder', 'medmarket'];
  const extras = PORTFOLIO_PROJECTS.filter(project => !featured.has(project.id)).sort((a,b) => {
    const weight = item => priority.includes(item.id) ? priority.indexOf(item.id) : (item.shot ? 100 : 200);
    return weight(a) - weight(b);
  });
  const categories = {
    software: 'Sistemas y aplicaciones',
    wordpress: 'Web y WordPress',
    shopify: 'Shopify',
    automation: 'Integraciones y automatización',
    security: 'Ciberseguridad'
  };
  let selected = 'all';

  function escapeHTML(input) {
    return String(input).replace(/[&<>"']/g, ch => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[ch]));
  }

  function entry(project, index) {
    const title = escapeHTML(project.name);
    const group = escapeHTML(categories[project.group] || project.group);
    const description = escapeHTML(project.description);
    const terms = project.tags.map(escapeHTML).join(' / ');
    const destination = project.url ? escapeHTML(project.url) : '';
    const src = project.image || null;
    const kind = project.image_kind === 'editorial' ? 'Portada editorial original para ' : 'Captura del proyecto ';
    const photoNote = project.image_kind === 'editorial' ? '<span class="archive-cover-note">Vista editorial · no es captura del producto</span>' : '';
    const cover = src ? [
      '<div class="archive-entry-photo">',
      '<img src="', escapeHTML(src), '"', project.live_preview ? ' data-live-preview="' + escapeHTML(project.live_preview) + '"' : '',
      ' alt="', kind, title,
      '" loading="lazy" decoding="async" fetchpriority="low" width="960" height="540">',
      photoNote,
      '<span class="archive-photo-unavailable" hidden>Imagen temporalmente no disponible</span>',
      '</div>'
    ].join('') : '';
    return [
      '<article class="archive-entry', src ? '' : ' archive-entry--text', '">',
      cover,
      '<div class="archive-entry-copy">',
      '<div class="archive-entry-meta"><span>', String(index + 1).padStart(2, '0'),
      ' / ', group, '</span></div>',
      '<h3>', title, '</h3>',
      '<p>', description, '</p>',
      '<div class="archive-entry-stack">', terms, '</div>',
      destination
        ? '<a class="archive-entry-link" target="_blank" rel="noopener noreferrer" href="' + destination + '">Visitar sitio público <span aria-hidden="true">↗</span></a>'
        : '<span class="archive-entry-private">Caso descriptivo · interfaz o código no publicados</span>',
      '</div></article>'
    ].join('');
  }

  // Public-site previews are optional upgrades. The checked-in editorial cover
  // stays visible if the screenshot service is slow, blocked or returns an error.
  const provider = 'https://image.thum.io/get/noanimate/width/640/crop/380/maxAge/168/';
  let previewObserver;
  function hydratePublicPreviews() {
    if (previewObserver) previewObserver.disconnect();
    const targets = [...host.querySelectorAll('img[data-live-preview]')];
    function requestPreview(img) {
      if (img.dataset.previewRequested === 'true') return;
      img.dataset.previewRequested = 'true';
      const site = img.dataset.livePreview;
      if (!/^https:\/\/[a-z0-9.-]+\/?/.test(site)) return;
      const picture = new Image();
      picture.decoding = 'async';
      picture.fetchPriority = 'low';
      picture.onload = () => {
        if (!img.isConnected || picture.naturalWidth < 180 || picture.naturalHeight < 100) return;
        img.src = picture.src;
        img.alt = 'Vista pública reciente de ' + img.closest('.archive-entry')?.querySelector('h3')?.textContent;
        const label = img.closest('.archive-entry-photo')?.querySelector('.archive-cover-note');
        if (label) label.textContent = 'Vista del sitio público · puede haber cambiado';
      };
      picture.onerror = () => {}; // Keep the local cover when remote preview fails.
      picture.src = provider + site;
    }
    if (!('IntersectionObserver' in window)) return; // Local images are already rendered.
    previewObserver = new IntersectionObserver(entries => {
      for (const item of entries) {
        if (!item.isIntersecting) continue;
        previewObserver.unobserve(item.target);
        requestPreview(item.target);
      }
    }, {rootMargin: '140px 0px'});
    targets.forEach(img => previewObserver.observe(img));
  }

  // Archive items remain visible without JavaScript-dependent entrance animations.
  function render() {
    const query = search.value.trim().toLocaleLowerCase('es');
    const rows = extras.filter(project => {
      const categoryMatches = selected === 'all' || project.group === selected;
      const text = [project.name, project.description, project.group, ...project.tags]
        .join(' ').toLocaleLowerCase('es');
      return categoryMatches && (!query || text.includes(query));
    });
    host.innerHTML = rows.map((project, index) => entry(project, index)).join('');
    counter.textContent = query || selected !== 'all'
      ? rows.length+ ' resultados de ' + extras.length + ' proyectos adicionales'
      : extras.length + ' proyectos adicionales · 4 casos destacados arriba';
    empty.hidden = rows.length > 0;
    host.querySelectorAll('.archive-entry-photo img').forEach(img => {
      const fail = () => {
        img.hidden = true;
        const note = img.closest('.archive-entry-photo')?.querySelector('.archive-photo-unavailable');
        if (note) note.hidden = false;
      };
      img.addEventListener('error', fail, { once: true });
      if (img.complete && img.naturalWidth === 0) fail();
    });
    hydratePublicPreviews();
    // Local covers render immediately; remote previews upgrade only when a card comes near the viewport.
  }

  filters.forEach(button => button.addEventListener('click', () => {
    selected = button.dataset.archiveFilter;
    filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
    render();
  }));
  search.addEventListener('input', render);
  render();
})();
