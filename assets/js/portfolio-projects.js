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
    "status": "Laboratorio documentado"
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
    "status": "Caso privado"
  },
  {
    "id": "video",
    "name": "Video Factory",
    "group": "automation",
    "description": "Automatización audiovisual por trabajos y workers, con renderizado, control de publicación y validaciones de contenido.",
    "tags": [
      "Node.js",
      "Docker",
      "FFmpeg"
    ],
    "url": null,
    "shot": null,
    "status": "Caso privado"
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
    "status": "Caso privado"
  },
  {
    "id": "norvian",
    "name": "Norvian CRM",
    "group": "software",
    "description": "Desarrollo de un CRM; los detalles internos y el repositorio permanecen privados.",
    "tags": [
      "CRM",
      "Sistemas"
    ],
    "url": null,
    "shot": null,
    "status": "Caso privado"
  },
  {
    "id": "aceros",
    "name": "Aceros Muñoz",
    "group": "software",
    "description": "Sitio comercial y propuesta de administración de inventario, proveedores y ventas. Proyecto en desarrollo.",
    "tags": [
      "Web",
      "Operaciones",
      "Inventario"
    ],
    "url": null,
    "shot": null,
    "status": "En desarrollo"
  },
  {
    "id": "inventario",
    "name": "Gestión de inventario para taller",
    "group": "software",
    "description": "Prototipo de gestión de entradas, salidas, tareas y usuarios; implementación planeada en WordPress y MySQL.",
    "tags": [
      "WordPress",
      "PHP",
      "MySQL"
    ],
    "url": null,
    "shot": null,
    "status": "Prototipo"
  },
  {
    "id": "vts",
    "name": "Viva Tu Salud — Revista digital",
    "group": "wordpress",
    "description": "Experiencia de revista digital y publicación editorial sobre WordPress, con desarrollo de integraciones y visualización de ediciones.",
    "tags": [
      "WordPress",
      "PHP",
      "Contenido"
    ],
    "url": "https://vivatusalud.com/",
    "shot": null,
    "status": "Caso comercial"
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
    "shot": "https://ultranoticias.com.mx/",
    "status": "Trabajo profesional"
  },
  {
    "id": "seal",
    "name": "SEAL Internacional",
    "group": "automation",
    "description": "Integré formularios, pagos y seguimiento administrativo en un proceso comercial dentro de WordPress.",
    "tags": [
      "WordPress",
      "Pagos",
      "Workflows"
    ],
    "url": "https://sealinternacional.com/",
    "shot": "https://sealinternacional.com/",
    "status": "Trabajo profesional"
  },
  {
    "id": "presumiendo",
    "name": "Presumiendo México",
    "group": "wordpress",
    "description": "Desarrollé componentes de navegación y reproducción para programas, episodios y secciones de contenido en la plataforma web.",
    "tags": [
      "Elementor",
      "Plugins",
      "Contenido"
    ],
    "url": "https://presumiendomexico.mx/",
    "shot": "https://presumiendomexico.mx/",
    "status": "Trabajo profesional"
  },
  {
    "id": "radioactiva",
    "name": "Radioactiva TX",
    "group": "wordpress",
    "description": "Reproductor web persistente y experiencia de escucha digital.",
    "tags": [
      "Streaming",
      "JavaScript",
      "UX"
    ],
    "url": "https://www.radioactivatx.org/",
    "shot": "https://www.radioactivatx.org/",
    "status": "Trabajo profesional"
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
    "shot": "https://mundo-ventura.com.mx/",
    "status": "Trabajo profesional"
  },
  {
    "id": "carrera",
    "name": "Carrera Moto",
    "group": "shopify",
    "description": "Personalicé fichas de producto: validación de tallas y colores, widgets editables, venta complementaria y accesos de compra.",
    "tags": [
      "Shopify",
      "Liquid",
      "E-commerce"
    ],
    "url": "https://carreramoto.mx/",
    "shot": "https://carreramoto.mx/",
    "status": "Trabajo profesional"
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
    "shot": "https://freeleads.io/",
    "status": "Trabajo profesional"
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
    "shot": "https://campoemilia.com/",
    "status": "Trabajo profesional"
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
    "shot": "https://businessmusic.studio/",
    "status": "Trabajo profesional"
  },
  {
    "id": "huasca",
    "name": "Artesanías Huasca",
    "group": "wordpress",
    "description": "Tienda WooCommerce orientada a presentar productos artesanales con una experiencia visual cuidada.",
    "tags": [
      "WooCommerce",
      "Elementor",
      "UX"
    ],
    "url": "https://artesaniashuasca.com/",
    "shot": "https://artesaniashuasca.com/",
    "status": "Trabajo profesional"
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
    "shot": "https://ultraacoustics.com/",
    "status": "Trabajo profesional"
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
    "shot": "https://freepi.io/",
    "status": "Trabajo profesional"
  },
  {
    "id": "arkan",
    "name": "Arkan Biotech",
    "group": "wordpress",
    "description": "Diseño e implementación de un sitio de información científica con énfasis en claridad visual.",
    "tags": [
      "Frontend",
      "Diseño web"
    ],
    "url": "https://arkanbiotech.com/",
    "shot": "https://arkanbiotech.com/",
    "status": "Trabajo profesional"
  },
  {
    "id": "tecno",
    "name": "TecnoShop México",
    "group": "wordpress",
    "description": "Sitio comercial con catálogo y adaptación de interfaz.",
    "tags": [
      "Web",
      "Catálogo",
      "Frontend"
    ],
    "url": "https://tecnoshopmexico.com.mx/",
    "shot": "https://tecnoshopmexico.com.mx/",
    "status": "Trabajo profesional"
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
    "shot": "https://www.sonder-radio.com/",
    "status": "Trabajo profesional"
  }
];
(function () {
  const host = document.getElementById('archiveGrid');
  if (!host) return;
  const search = document.getElementById('archiveSearch');
  const filters = [...document.querySelectorAll('[data-archive-filter]')];
  const counter = document.getElementById('archiveCount');
  const empty = document.getElementById('archiveEmpty');
  const featured = new Set(['soc', 'diteh', 'video']);
  const priority = ['carrera', 'presumiendo', 'campo', 'ultranoticias', 'bms', 'seal', 'mundoventura', 'huasca', 'radioactiva', 'acoustics'];
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
  let observer = null;

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
    const src = project.shot
      ? 'https://s.wordpress.com/mshots/v1/' + encodeURIComponent(project.shot) + '?w=1000'
      : null;
    const cover = src ? [
      '<div class="archive-entry-photo">',
      '<img src="', escapeHTML(src), '" alt="Vista del sitio público de ', title,
      '" loading="lazy" decoding="async" width="960" height="540">',
      '<span class="archive-photo-unavailable" hidden>Previsualización temporalmente no disponible</span>',
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

  function reveal(entries) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      document.body.classList.contains('motion-off') || !('IntersectionObserver' in window)) {
      entries.forEach(el => el.classList.add('is-visible'));
      return;
    }
    if (observer) observer.disconnect();
    observer = new IntersectionObserver(items => {
      items.forEach(item => {
        if (item.isIntersecting) {
          item.target.classList.add('is-visible');
          observer.unobserve(item.target);
        }
      });
    }, { threshold: .07, rootMargin: '0px 0px 35px 0px' });
    entries.forEach(el => observer.observe(el));
  }

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
      ? rows.length + ' resultados de ' + extras.length + ' proyectos adicionales'
      : extras.length + ' proyectos adicionales · 3 casos destacados arriba';
    empty.hidden = rows.length > 0;
    host.querySelectorAll('.archive-entry-photo img').forEach(img => {
      const fail = () => {
        img.hidden = true;
        const note = img.nextElementSibling;
        if (note) note.hidden = false;
      };
      img.addEventListener('error', fail, { once: true });
      if (img.complete && img.naturalWidth === 0) fail();
    });
    reveal([...host.querySelectorAll('.archive-entry')]);
  }

  filters.forEach(button => button.addEventListener('click', () => {
    selected = button.dataset.archiveFilter;
    filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
    render();
  }));
  search.addEventListener('input', render);
  document.getElementById('motionBtn')?.addEventListener('click', () =>
    [...host.querySelectorAll('.archive-entry')].forEach(entry => entry.classList.add('is-visible')));
  render();
})();
