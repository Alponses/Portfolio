'use strict';
/* Public showcase. No private GitHub repo links, client data, internal screens or invented metrics. */
const PORTFOLIO_PROJECTS = [
  {
    "id": "soc",
    "name": "SOC Blue Team Lab",
    "group": "security",
    "description": "Laboratorio defensivo con Wazuh, honeypot aislado y arquitectura de telemetría. Windows y Sysmon forman parte del siguiente entregable.",
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
    "description": "Plugins y herramientas editoriales, soporte para publicidad y personalización en un medio digital.",
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
    "description": "Digitalización de formularios, pagos y seguimiento administrativo mediante integración con WordPress.",
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
    "description": "Widgets y componentes para presentar contenido multimedia y experiencia editorial en WordPress.",
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
    "description": "Mejoras a un sistema de reservas, pagos con Stripe y administración comercial.",
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
    "description": "Integraciones de Shopify, ajustes de experiencia de compra y componentes editables para el equipo comercial.",
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
    "description": "Desarrollo de experiencia de comercio electrónico y personalización de tema en Shopify.",
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
(function(){
const host=document.getElementById('archiveGrid'); if(!host)return;
const search=document.getElementById('archiveSearch');const filters=[...document.querySelectorAll('[data-archive-filter]')];
const counter=document.getElementById('archiveCount'); const empty=document.getElementById('archiveEmpty');
const counts={all:PORTFOLIO_PROJECTS.length}; let current='all';
const categories={security:'Ciberseguridad',software:'Apps & sistemas',wordpress:'Web & WordPress',shopify:'Shopify',automation:'Automatización'};
function esc(t){return String(t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function card(x){const href=x.url?esc(x.url):'';const shot=x.shot?'https://s.wordpress.com/mshots/v1/'+encodeURIComponent(x.shot)+'?w=960':'';
return '<article class="archive-card">'+
'<div class="archive-media">'+(shot?'<img loading="lazy" decoding="async" alt="Vista pública de '+esc(x.name)+'" src="'+esc(shot)+'">':'')+
'<div class="archive-fallback"><span>'+esc(categories[x.group])+'</span><b>'+esc(x.name)+'</b></div><span class="archive-badge">'+esc(x.status)+'</span></div>'+
'<div class="archive-card-body"><div class="archive-card-top"><span>'+esc(categories[x.group])+'</span><span>2026 / PORTFOLIO</span></div><h3>'+esc(x.name)+'</h3><p>'+esc(x.description)+'</p>'+
'<div class="archive-tags">'+x.tags.map(tag=>'<span>'+esc(tag)+'</span>').join('')+'</div>'+
(x.url?'<a class="archive-card-link" target="_blank" rel="noopener noreferrer" href="'+href+'">'+(x.group==='security'?'Ver repositorio público':'Explorar sitio público')+' <span aria-hidden="true">↗</span></a>':'<span class="archive-card-note">Caso descriptivo · material interno no publicado</span>')+'</div></article>';
}
function render(){const q=search.value.trim().toLocaleLowerCase('es');const rows=PORTFOLIO_PROJECTS.filter(p=>(current==='all'||p.group===current)&&(!q||[p.name,p.description,p.group,...p.tags].join(' ').toLocaleLowerCase('es').includes(q)));
host.innerHTML=rows.map(card).join('');counter.textContent=rows.length+' de '+PORTFOLIO_PROJECTS.length+' proyectos';empty.hidden=rows.length!==0;
host.querySelectorAll('.archive-media img').forEach(img=>{img.addEventListener('error',()=>{img.hidden=true;}, {once:true});if(img.complete&&!img.naturalWidth)img.hidden=true;});
}
filters.forEach(btn=>btn.addEventListener('click',()=>{current=btn.dataset.archiveFilter;filters.forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));render();}));search.addEventListener('input',render);render();
})();
