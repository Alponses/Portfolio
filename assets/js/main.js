'use strict';

/* ────────────────────────────────────────────
   CONTACT —  key de web3forms.com
──────────────────────────────────────────── */
const FORM_ACCESS_KEY = 'bdcbfce4-16fc-4dec-8459-aa83a3233d29'; 

/* ────────────────────────────────────────────
   DATA — Edit projects here
──────────────────────────────────────────── */
const PROJECT_DATA = [
  {
    id: 1,
    name: 'Ultranoticias',
    category: 'Media',
    status: 'En producción',
    type: 'Medio digital regional / Plugins WordPress / AdTech / Personalización editorial',
    role: 'WordPress Plugin Developer · Ad Operations Systems Builder',
    url: 'https://ultranoticias.com.mx/',
    stackTags: ['WordPress', 'PHP', 'Elementor', 'Shortcodes', 'Geolocalización IP', 'Google Ad Manager', 'Google AdSense'],
    desc: 'Desarrollo de plugins editoriales y publicitarios para un medio digital regional, con personalización de contenido por ubicación y una operación de anuncios más simple para el equipo editorial.',
    problem: 'El sitio necesitaba facilitar dos cosas al mismo tiempo: mostrar contenido más contextual al visitante y reducir la fricción operativa al administrar anuncios.',
    solution: 'Desarrollé desde cero dos plugins: uno para personalización editorial por IP en el header y otro para conectar la operación publicitaria con Google Ad Manager y Google AdSense desde WordPress y Elementor.',
    value: 'El resultado convierte una operación editorial compleja en una estructura más eficiente para publicar, monetizar y administrar bloques publicitarios sin depender de pegar código cada vez.',
    learning: 'Construí plugins para que un medio regional administre contenido y anuncios con más inteligencia y menos fricción.',
    type_en: 'Regional digital media / WordPress plugins / AdTech / Editorial personalization',
    role_en: 'WordPress Plugin Developer · Ad Operations Systems Builder',
    desc_en: 'Editorial and advertising plugin development for a regional digital media outlet, with location-based content personalization and a simpler ad operation for the editorial team.',
    problem_en: 'The site needed to show more contextual content to visitors while reducing operational friction in ad management.',
    solution_en: 'I built two plugins from scratch: one for IP-based editorial personalization in the header and another to connect ad operations with Google Ad Manager and Google AdSense from WordPress and Elementor.',
    value_en: 'The work turns a complex editorial operation into a more efficient structure for publishing, monetizing and managing ad blocks without pasting code every time.',
    learning_en: 'I built plugins so a regional media outlet could manage content and ads with more intelligence and less friction.'
  },
  {
    id: 2,
    name: 'SEAL Internacional',
    category: 'Automatización',
    status: 'En producción',
    type: 'Formularios con pagos / Automatización comercial / Plugin WordPress / Servicios internacionales',
    role: 'Payments & Workflow Automation Developer',
    url: 'https://sealinternacional.com/',
    stackTags: ['WordPress', 'PHP', 'Stripe', 'Formularios avanzados', 'Multi-moneda', 'wp-admin', 'Seguimiento interno'],
    desc: 'Digitalización de formularios y pagos para una plataforma de estudios, visas y experiencias internacionales, con seguimiento administrativo dentro de WordPress.',
    problem: 'El negocio necesitaba reducir dependencia de trámites presenciales y volver más administrable la compra y seguimiento de servicios internacionales.',
    solution: 'Desarrollé formularios con Stripe, guardado parcial, control de estados y un plugin para que el administrador revisara compras, seguimientos y formularios incompletos desde el wp-admin. También integré manejo de pagos en distintas monedas.',
    value: 'El proyecto pasó de un proceso más manual a un flujo digital que facilita cobro, captura de datos, seguimiento y control administrativo.',
    learning: 'Transformé trámites y pagos complejos en flujos digitales más claros, rastreables y administrables.',
    type_en: 'Paid forms / Commercial automation / WordPress plugin / International services',
    role_en: 'Payments & Workflow Automation Developer',
    desc_en: 'Form and payment digitization for a study, visa and international experiences platform, with administrative tracking inside WordPress.',
    problem_en: 'The business needed to reduce dependency on in-person processes and make purchasing and tracking international services easier to administer.',
    solution_en: 'I built Stripe-connected forms, partial saves, status control and an admin plugin to review purchases, follow-ups and incomplete forms from wp-admin. I also added multi-currency payment handling.',
    value_en: 'The project moved a manual process into a digital flow that improves payment collection, data capture, tracking and administrative control.',
    learning_en: 'I transformed complex procedures and payments into clearer, traceable and administrable digital flows.'
  },
  {
    id: 3,
    name: 'Presumiendo México',
    category: 'Media',
    status: 'En producción',
    type: 'Plataforma de televisión digital / Plugin Elementor / Widgets a medida / Contenido multimedia',
    role: 'WordPress Plugin & Content Experience Developer',
    url: 'https://presumiendomexico.mx/',
    stackTags: ['WordPress', 'Elementor', 'PHP', 'JavaScript', 'CSS', 'Widgets personalizados', 'Arquitectura de contenido'],
    desc: 'Rediseño funcional y desarrollo de un plugin para Elementor con widgets personalizados para una plataforma de televisión digital enfocada en programas, turismo y contenido audiovisual.',
    problem: 'La plataforma necesitaba modernizar su presencia y organizar distintos tipos de contenido audiovisual y turístico sin depender de estructuras rígidas.',
    solution: 'Desarrollé un plugin para Elementor con widgets propios para TV en vivo, carruseles dinámicos de programas y módulos turísticos especializados.',
    value: 'El sitio quedó con una base más flexible para administrar contenidos, destacar programación y presentar secciones temáticas sin rehacer la experiencia cada vez.',
    learning: 'Convertí una web de TV digital en una plataforma más modular, editable y preparada para crecer.',
    type_en: 'Digital TV platform / Elementor plugin / Custom widgets / Multimedia content',
    role_en: 'WordPress Plugin & Content Experience Developer',
    desc_en: 'Functional redesign and Elementor plugin development with custom widgets for a digital TV platform focused on shows, tourism and audiovisual content.',
    problem_en: 'The platform needed to modernize its presence and organize audiovisual and tourism content without depending on rigid structures.',
    solution_en: 'I built an Elementor plugin with custom widgets for live TV, dynamic show carousels and specialized tourism modules.',
    value_en: 'The site gained a more flexible base to manage content, feature programming and present thematic sections without rebuilding the experience each time.',
    learning_en: 'I turned a digital TV website into a more modular, editable and growth-ready platform.'
  },
  {
    id: 4,
    name: 'Radioactiva TX',
    category: 'Media',
    status: 'En producción',
    type: 'Radio digital / Reproductor persistente / Frontend a medida / Experiencia en streaming',
    role: 'Frontend Audio Experience Developer',
    url: 'https://www.radioactivatx.org/',
    stackTags: ['HTML', 'CSS', 'JavaScript', 'localStorage', 'Fetch', 'DOMParser', 'Metadata streaming'],
    desc: 'Desarrollo de un reproductor de radio a medida, sin plugins, para mantener la transmisión activa mientras el usuario navega por el sitio.',
    problem: 'El cliente necesitaba que la radio no se detuviera al navegar, aun cuando la base del sitio no estaba pensada para una experiencia persistente.',
    solution: 'Desarrollé el reproductor desde cero en HTML, CSS y JavaScript, resolviendo persistencia, estaciones, volumen, metadatos y carga dinámica de contenido sin interrumpir el stream.',
    value: 'La experiencia de escucha se volvió continua, más profesional y mucho más cercana a lo que el usuario espera de una radio digital real.',
    learning: 'Construí un reproductor persistente sin plugins para que la radio siguiera viva mientras el usuario seguía navegando.',
    type_en: 'Digital radio / Persistent player / Custom frontend / Streaming experience',
    role_en: 'Frontend Audio Experience Developer',
    desc_en: 'Custom radio player development, without plugins, to keep the stream active while users navigate the site.',
    problem_en: 'The client needed the radio stream to keep playing while users navigated, even though the site was not built as a persistent experience.',
    solution_en: 'I built the player from scratch in HTML, CSS and JavaScript, handling persistence, stations, volume, metadata and dynamic content loading without interrupting the stream.',
    value_en: 'The listening experience became continuous, more professional and closer to what users expect from a real digital radio site.',
    learning_en: 'I built a persistent player without plugins so the radio stayed alive while users kept browsing.'
  },
  {
    id: 5,
    name: 'MundoVentura',
    category: 'Automatización',
    status: 'En producción',
    type: 'Reservas de viajes / Plugin legado escalado / Pagos con Stripe / Administración operativa',
    role: 'Booking & Payments Systems Developer',
    url: 'https://mundo-ventura.com.mx/',
    stackTags: ['WordPress', 'Plugin legacy upgrade', 'Stripe', 'Reservas', 'Correos', 'Panel administrativo', 'Lógica de montos'],
    desc: 'Mejora de un plugin existente para reservas y pagos en una agencia de viajes, integrando Stripe y fortaleciendo tanto la experiencia del cliente como la operación administrativa.',
    problem: 'El sistema de reservas y pagos venía arrastrando limitaciones de una versión vieja sin soporte real.',
    solution: 'Mejoré el plugin existente, integré Stripe, reforcé reservas y correos, y ajusté la capa administrativa para manejar montos fijos, pagos diferenciados, reservas y condiciones por viaje.',
    value: 'El flujo quedó más sólido para vender, reservar y administrar viajes con menos fricción operativa y más control interno.',
    learning: 'Escalé un plugin legado de reservas y pagos hasta convertirlo en una herramienta más confiable para vender viajes.',
    type_en: 'Travel bookings / Scaled legacy plugin / Stripe payments / Operational admin',
    role_en: 'Booking & Payments Systems Developer',
    desc_en: 'Improvement of an existing booking and payment plugin for a travel agency, integrating Stripe and strengthening both customer experience and admin operations.',
    problem_en: 'The booking and payment system carried limitations from an old version without real support.',
    solution_en: 'I improved the existing plugin, integrated Stripe, reinforced bookings and emails, and adjusted the admin layer to handle fixed amounts, differentiated payments, reservations and trip conditions.',
    value_en: 'The flow became more solid for selling, booking and managing trips with less operational friction and more internal control.',
    learning_en: 'I scaled a legacy booking and payment plugin into a more reliable tool for selling trips.'
  },
  {
    id: 6,
    name: 'Carrera Moto',
    category: 'E-commerce',
    status: 'En producción',
    type: 'Shopify / Integraciones de marketing / Widgets editables / Autonomía del cliente',
    role: 'Shopify Integrations & Admin Experience Developer',
    url: 'https://carreramoto.mx/',
    stackTags: ['Shopify', 'Liquid', 'Widgets personalizados', 'Mailchimp', 'Newsletters', 'Popups', 'UX admin'],
    desc: 'Customizaciones Shopify e integraciones de newsletter para una marca rider, enfocadas en autonomía operativa, captación y edición flexible del contenido.',
    problem: 'La tienda necesitaba mayor autonomía para editar contenido y una mejor conexión entre captación, newsletter y operación de marketing.',
    solution: 'Implementé integraciones con Mailchimp y desarrollé widgets personalizados para hacer la tienda más editable y menos dependiente de soporte.',
    value: 'El cliente ganó más control sobre su sitio, mejor capacidad de captación y una operación diaria más ligera.',
    learning: 'Llevé una tienda Shopify hacia una operación más autónoma, editable y mejor conectada con marketing.',
    type_en: 'Shopify / Marketing integrations / Editable widgets / Client autonomy',
    role_en: 'Shopify Integrations & Admin Experience Developer',
    desc_en: 'Shopify customizations and newsletter integrations for a rider brand, focused on operational autonomy, acquisition and flexible content editing.',
    problem_en: 'The store needed more autonomy for editing content and a better connection between acquisition, newsletter and marketing operations.',
    solution_en: 'I implemented Mailchimp integrations and developed custom widgets to make the store more editable and less dependent on support.',
    value_en: 'The client gained more control over the site, better acquisition capacity and lighter daily operations.',
    learning_en: 'I moved a Shopify store toward a more autonomous, editable and marketing-connected operation.'
  },
  {
    id: 7,
    name: 'FreeLeads',
    category: 'Web',
    status: 'En producción',
    type: 'Landing de producto / Sistema comercial / Comunicación de valor',
    role: 'Product Landing Developer · Conversion-Focused Web Designer',
    url: 'https://freeleads.io/',
    stackTags: ['UX comercial', 'WhatsApp', 'Automatización', 'IA', 'WooCommerce', 'Comunicación de producto'],
    desc: 'Landing orientada a explicar un sistema comercial con WhatsApp, leads, inventario, finanzas y automatización sin saturar al visitante.',
    problem: 'El sistema tenía muchas capacidades y necesitaba una presentación más compacta, clara y orientada a valor.',
    solution: 'Organicé la comunicación del producto, prioricé funciones clave y lo presenté como una herramienta de ventas y operación, no como una lista técnica de módulos.',
    value: 'La página ayuda a entender rápido qué resuelve FreeLeads y por qué puede ser relevante para una empresa con proceso comercial activo.',
    learning: 'Convertí un producto complejo en una landing clara, vendible y enfocada en valor real.',
    type_en: 'Product landing / Commercial system / Value communication',
    role_en: 'Product Landing Developer · Conversion-Focused Web Designer',
    desc_en: 'Landing page designed to explain a commercial system with WhatsApp, leads, inventory, finance and automation without overwhelming the visitor.',
    problem_en: 'The system had many capabilities and needed a more compact, clear and value-oriented presentation.',
    solution_en: 'I organized the product communication, prioritized key features and presented it as a sales and operations tool instead of a technical module list.',
    value_en: 'The page helps visitors quickly understand what FreeLeads solves and why it matters for companies with active sales processes.',
    learning_en: 'I turned a complex product into a clear, marketable landing focused on real value.'
  },
  {
    id: 8,
    name: 'Campo Emilia',
    category: 'E-commerce',
    status: 'En producción',
    type: 'Shopify / Liquid / E-commerce desde cero',
    role: 'Shopify Theme Developer · Frontend E-commerce Developer',
    url: 'https://campoemilia.com/',
    stackTags: ['Shopify', 'Liquid', 'CSS', 'Pagos', 'Figma handoff', 'Tipografía', 'Widgets personalizados'],
    desc: 'Tienda Shopify construida desde cero con widgets personalizados, configuración de pagos, estructura de menú, footer y consistencia tipográfica basada en Figma.',
    problem: 'La marca necesitaba una tienda coherente con su universo visual y suficientemente editable para operar contenido y producto sin romper el estilo.',
    solution: 'Construí la tienda desde cero en Shopify, desarrollé widgets personalizados y aterricé el diseño a una experiencia consistente en tipografía, estructura y compra.',
    value: 'El proyecto quedó con una base sólida para vender, contar historia de marca y mantener una identidad visual coherente en toda la experiencia.',
    learning: 'Una tienda Shopify hecha desde cero para mantener diseño, edición y operación en una misma línea.',
    type_en: 'Shopify / Liquid / E-commerce from scratch',
    role_en: 'Shopify Theme Developer · Frontend E-commerce Developer',
    desc_en: 'Shopify store built from scratch with custom widgets, payment setup, menu structure, footer and typography consistency based on Figma.',
    problem_en: 'The brand needed a store aligned with its visual universe and editable enough to operate content and products without breaking the style.',
    solution_en: 'I built the store from scratch in Shopify, developed custom widgets and translated the design into a consistent typography, structure and purchasing experience.',
    value_en: 'The project gained a solid base for selling, telling the brand story and maintaining a coherent visual identity across the experience.',
    learning_en: 'A Shopify store built from scratch to keep design, editing and operations aligned.'
  },
  {
    id: 9,
    name: 'Business Music Studio',
    category: 'Web',
    status: 'En producción',
    type: 'Landing de producto / Música para negocios / HTML + CSS / Suscripciones',
    role: 'Landing Experience Developer · Sensory Web Designer',
    url: 'https://businessmusic.studio/',
    stackTags: ['HTML', 'CSS', 'Estructura de conversión', 'Producto sensorial', 'Suscripciones', 'Música para negocios'],
    desc: 'Landing desarrollada para comunicar una plataforma de música para negocios con enfoque sensorial, player físico, implementación rápida y propuesta comercial clara.',
    problem: 'El cliente necesitaba una página que no se sintiera genérica y que transmitiera una experiencia sonora, legal y comercial más clara.',
    solution: 'Replanteé buena parte de la interfaz en HTML y CSS para dejar atrás la base de plantilla y orientar la experiencia hacia una marca más sensorial.',
    value: 'La landing comunica mejor la propuesta del producto y lo separa de una oferta genérica de playlists o ambientación musical.',
    learning: 'Transformé una base de plantilla en una landing con una atmósfera más sensorial y más alineada al producto.',
    type_en: 'Product landing / Music for businesses / HTML + CSS / Subscriptions',
    role_en: 'Landing Experience Developer · Sensory Web Designer',
    desc_en: 'Landing page built to communicate a music platform for businesses with a sensory approach, physical player, quick implementation and clear commercial value.',
    problem_en: 'The client needed a page that did not feel generic and communicated a clearer sonic, legal and commercial experience.',
    solution_en: 'I rebuilt a large part of the interface in HTML and CSS to move away from the template base and aim the experience toward a more sensory brand.',
    value_en: 'The landing communicates the product proposition better and separates it from a generic playlist or music ambience offer.',
    learning_en: 'I transformed a template base into a landing with a more sensory atmosphere aligned with the product.'
  },
  {
    id: 10,
    name: 'Artesanías Huasca',
    category: 'E-commerce',
    status: 'En producción',
    type: 'WooCommerce / Elementor / E-commerce artesanal / Experiencia visual de producto',
    role: 'E-commerce Experience Designer & Developer',
    url: 'https://artesaniashuasca.com/',
    stackTags: ['WooCommerce', 'Elementor', 'Composición visual', 'Presentación de producto', 'Diseño comercial'],
    desc: 'Tienda de e-commerce artesanal diseñada para destacar un producto único con una presentación visual menos genérica y más memorable.',
    problem: 'El cliente quería expandirse con una tienda que no pareciera un WooCommerce más, sino una experiencia alineada con la singularidad del producto.',
    solution: 'Trabajé la dirección visual del e-commerce, la forma de presentar los productos y una composición más diferenciada para que la tienda se sintiera propia.',
    value: 'La tienda refuerza el valor percibido del producto y ayuda a que la experiencia se sienta más especial que una vitrina genérica.',
    learning: 'Diseñé una tienda artesanal para que el producto se sintiera tan único como su origen.',
    type_en: 'WooCommerce / Elementor / Artisan e-commerce / Visual product experience',
    role_en: 'E-commerce Experience Designer & Developer',
    desc_en: 'Artisan e-commerce store designed to highlight a unique product with a less generic and more memorable visual presentation.',
    problem_en: 'The client wanted to expand with a store that did not feel like another generic WooCommerce site, but like an experience aligned with the product uniqueness.',
    solution_en: 'I worked on the visual direction, product presentation and a more differentiated composition so the store felt ownable.',
    value_en: 'The store reinforces perceived product value and makes the experience feel more special than a generic showcase.',
    learning_en: 'I designed an artisan store so the product felt as unique as its origin.'
  },
  {
    id: 11,
    name: 'Ultra Acoustics',
    category: 'Web',
    status: 'En producción',
    type: 'Rediseño web / Migración de contenido / Optimización',
    role: 'Web Redesign & Content Migration Developer',
    url: 'https://ultraacoustics.com/',
    stackTags: ['WordPress', 'Elementor', 'CSS', 'Migración de contenido', 'Optimización'],
    desc: 'Rediseño completo para una marca de experiencia sensorial, cuidando la migración de contenido histórico y una presencia más tecnológica y actual.',
    problem: 'La marca necesitaba un aire más fresco y tecnológico, pero sin sacrificar contenido histórico, posicionamiento ni claridad comercial.',
    solution: 'Trabajé el rediseño, la reorganización del contenido y la optimización para que la transición entre lo viejo y lo nuevo no rompiera la experiencia.',
    value: 'El sitio se percibe más actual, más ordenado y mejor alineado con una marca de soluciones sensoriales para negocios.',
    learning: 'Renové la cara digital de la marca sin perder la historia ni la información que la sostenía.',
    type_en: 'Web redesign / Content migration / Optimization',
    role_en: 'Web Redesign & Content Migration Developer',
    desc_en: 'Complete redesign for a sensory experience brand, preserving historical content migration while creating a more technological and current presence.',
    problem_en: 'The brand needed a fresher and more technological presence without sacrificing historical content, positioning or commercial clarity.',
    solution_en: 'I worked on the redesign, content reorganization and optimization so the transition from old to new did not break the experience.',
    value_en: 'The site feels more current, more ordered and better aligned with a sensory solutions brand for businesses.',
    learning_en: 'I renewed the digital face of the brand without losing the history and information that supported it.'
  },
  {
    id: 12,
    name: 'Freepi',
    category: 'Web',
    status: 'En producción',
    type: 'Rediseño corporativo / Página de servicios / Portafolio tecnológico',
    role: 'Brand Web Redesign Developer',
    url: 'https://freepi.io/',
    stackTags: ['WordPress', 'Diseño web', 'UX', 'Branding digital', 'Estructura comercial'],
    desc: 'Rediseño total de la presencia web de una empresa de desarrollo para hacerla sentir más moderna, más clara y más alineada con su portafolio actual.',
    problem: 'La marca necesitaba una presencia más moderna que representara mejor la amplitud de sus servicios y su evolución como empresa.',
    solution: 'Rediseñé la página y trabajé una presentación más clara del portafolio, servicios y narrativa comercial.',
    value: 'El sitio ayuda a percibir a la marca como una empresa más actual, más sólida y más alineada con su oferta real.',
    learning: 'Rediseñé la web para que la marca se viera tan actual como los servicios que ya estaba ofreciendo.',
    type_en: 'Corporate redesign / Services page / Technology portfolio',
    role_en: 'Brand Web Redesign Developer',
    desc_en: 'Full redesign of a development company website to make it feel more modern, clearer and aligned with its current portfolio.',
    problem_en: 'The brand needed a more modern presence that represented the breadth of its services and its evolution as a company.',
    solution_en: 'I redesigned the page and created a clearer presentation of the portfolio, services and commercial narrative.',
    value_en: 'The site helps the brand feel more current, more solid and better aligned with its real offer.',
    learning_en: 'I redesigned the web presence so the brand looked as current as the services it was already offering.'
  },
  {
    id: 13,
    name: 'Arkan Biotech',
    category: 'Web',
    status: 'En producción',
    type: 'Sitio informativo / Diseño desde cero / Marca científica premium',
    role: 'Information Design & Frontend Developer',
    url: 'https://arkanbiotech.com/',
    stackTags: ['WordPress', 'Frontend web', 'Diseño visual', 'Jerarquía informativa', 'Branding digital'],
    desc: 'Sitio informativo desarrollado desde cero para una marca científica, con una dirección visual más premium y una narrativa más clara.',
    problem: 'El contenido necesitaba una experiencia web más cuidada para comunicar ciencia y especialización sin sentirse genérico.',
    solution: 'Construí la experiencia visual y la estructura de la página desde cero, usando los textos base como punto de partida.',
    value: 'El sitio proyecta una marca más seria, premium y coherente con un giro científico y especializado.',
    learning: 'Construí una experiencia informativa más elegante para una marca que necesitaba verse tan seria como su tema.',
    type_en: 'Informational site / Design from scratch / Premium scientific brand',
    role_en: 'Information Design & Frontend Developer',
    desc_en: 'Informational site developed from scratch for a scientific brand, with a more premium visual direction and clearer narrative.',
    problem_en: 'The content needed a more careful web experience to communicate science and specialization without feeling generic.',
    solution_en: 'I built the visual experience and page structure from scratch, using the base texts as the starting point.',
    value_en: 'The site projects a more serious, premium and coherent brand for a specialized scientific field.',
    learning_en: 'I built a more elegant informational experience for a brand that needed to look as serious as its subject.'
  },
  {
    id: 14,
    name: 'TecnoShop México',
    category: 'Web',
    status: 'En producción',
    type: 'Sitio comercial / Catálogo informativo / Adaptación desde plantilla',
    role: 'Commercial Website Developer',
    url: 'https://tecnoshopmexico.com.mx/',
    stackTags: ['WordPress', 'Elementor', 'CSS', 'Estructura comercial', 'Catálogo de productos'],
    desc: 'Sitio comercial para una tienda de tecnología y electrónica, orientado a presentar categorías, confianza y contacto de forma clara.',
    problem: 'El cliente necesitaba una página para explicar mejor su negocio, sus categorías y su propuesta de valor local.',
    solution: 'Adapté la plantilla, estructuré mejor las secciones y llevé la página hacia un formato más comercial e informativo.',
    value: 'El sitio permite presentar productos, servicios y beneficios de forma más clara para un visitante que apenas conoce el negocio.',
    learning: 'Tomé una base de plantilla y la transformé en una presencia web más funcional para vender tecnología.',
    type_en: 'Commercial website / Informational catalog / Template adaptation',
    role_en: 'Commercial Website Developer',
    desc_en: 'Commercial site for a technology and electronics store, focused on presenting categories, trust and contact clearly.',
    problem_en: 'The client needed a page to explain the business, categories and local value proposition better.',
    solution_en: 'I adapted the template, structured the sections better and moved the page toward a more commercial and informational format.',
    value_en: 'The site presents products, services and benefits more clearly for visitors discovering the business.',
    learning_en: 'I took a template base and turned it into a more functional web presence for selling technology.'
  },
  {
    id: 15,
    name: 'Sonder Radio',
    category: 'Media',
    status: 'En producción',
    type: 'Medio digital local / WordPress / Ads / Sitio editorial',
    role: 'Editorial Website Developer · Ad Operations Support',
    url: 'https://www.sonder-radio.com/',
    stackTags: ['WordPress', 'Estructura editorial', 'Google AdSense', 'Gestión de anuncios', 'Mantenimiento web'],
    desc: 'Sitio de noticias local desarrollado en función del presupuesto, la operación editorial y la monetización con anuncios.',
    problem: 'El cliente necesitaba una página informativa funcional y monetizable, alineada al alcance de un medio local.',
    solution: 'Desarrollé el sitio y apoyé la implementación de Google AdSense y la gestión principal de anuncios y ajustes operativos.',
    value: 'El proyecto quedó montado para publicar noticias, organizar contenido y sostener un modelo básico de monetización publicitaria.',
    learning: 'Desarrollé una web editorial local pensada para publicar, monetizar y operar con claridad.',
    type_en: 'Local digital media / WordPress / Ads / Editorial site',
    role_en: 'Editorial Website Developer · Ad Operations Support',
    desc_en: 'Local news site developed around budget, editorial operation and ad monetization requirements.',
    problem_en: 'The client needed a functional and monetizable informational site aligned with the scope of a local media outlet.',
    solution_en: 'I developed the site and supported Google AdSense implementation, main ad management and operational adjustments.',
    value_en: 'The project was set up to publish news, organize content and sustain a basic advertising monetization model.',
    learning_en: 'I developed a local editorial website designed to publish, monetize and operate clearly.'
  },
  {
    id: 16,
    name: 'Norvian',
    category: 'Web',
    status: 'En producción',
    type: 'Marca digital / Servicios tecnológicos / Sistemas a medida',
    role: 'Web & Digital Systems Developer',
    stackTags: ['Web', 'Automatización', 'IA', 'Estrategia digital'],
    desc: 'Proyecto de soluciones digitales para comunicar páginas web, agentes IA y software a la medida desde una narrativa clara de negocio.',
    problem: 'Negocios necesitan presencia digital y herramientas más claras para vender y operar mejor.',
    solution: 'Trabajé narrativa de servicios, estructura comercial, diseño web, enfoque tecnológico y sistemas digitales a medida.',
    value: 'Ayuda a comunicar tecnología de forma entendible, sobria y orientada a problemas reales de negocio.',
    learning: 'La tecnología se comunica mejor cuando se explica desde problemas reales, no desde tecnicismos.',
    type_en: 'Digital brand / Technology services / Custom systems',
    role_en: 'Web & Digital Systems Developer',
    desc_en: 'Digital solutions project to communicate websites, AI agents and custom software through a clear business narrative.',
    problem_en: 'Businesses need digital presence and clearer tools to sell and operate better.',
    solution_en: 'I worked on service narrative, commercial structure, web design, technological focus and custom digital systems.',
    value_en: 'It helps communicate technology in a clear, sober and business-problem-oriented way.',
    learning_en: 'Technology communicates better when explained through real problems, not jargon.'
  },
];

/* ────────────────────────────────────────────
   DATA — Edit stack here
──────────────────────────────────────────── */
const STACK_DATA = {
  'Frontend': [
    { name: 'HTML',        level: 'Uso frecuente' },
    { name: 'CSS',         level: 'Uso frecuente' },
    { name: 'JavaScript',  level: 'Uso frecuente' },
    { name: 'TypeScript',  level: 'Uso frecuente' },
    { name: 'AJAX',        level: 'Uso frecuente' },
    { name: 'JSON',        level: 'Uso frecuente' },
    { name: 'Vue.js',      level: 'En aprendizaje' },
    { name: 'Tailwind', level: 'Uso frecuente' }
  ],
  'CMS / E-commerce': [
    { name: 'WordPress',   level: 'Uso frecuente' },
    { name: 'PHP',         level: 'Uso frecuente' },
    { name: 'Elementor',         level: 'Uso frecuente' },
    { name: 'Plugins WordPress', level: 'Uso frecuente' },
    { name: 'Shopify',           level: 'Uso frecuente' },
    { name: 'Liquid',      level: 'Uso frecuente' },
    { name: 'WooCommerce', level: 'Uso frecuente' }
  ],
  'Backend': [
    { name: 'Python',      level: 'Uso frecuente' },
    { name: 'Django',      level: 'Uso frecuente' },
    { name: 'Laravel',     level: 'Uso frecuente' },
    { name: 'REST APIs',   level: 'Uso frecuente' },
    { name: 'Git',         level: 'Uso frecuente' },
    { name: 'GitHub',      level: 'Uso frecuente' },
    { name: 'MySQL',       level: 'Uso frecuente' },
    { name: 'PostgreSQL',  level: 'Uso frecuente' },
    { name: 'Docker',      level: 'En aprendizaje' }
  ],
  'Infraestructura / Hosting': [
    { name: 'VPS',         level: 'Uso frecuente' },
    { name: 'WHM',         level: 'Uso frecuente' },
    { name: 'cPanel',      level: 'Uso frecuente' },
    { name: 'SonicPanel',  level: 'Uso frecuente' },
    { name: 'Cloudflare',  level: 'Uso frecuente' }
  ],
  'Integraciones': [
    { name: 'Stripe',      level: 'Uso frecuente' },
    { name: 'Mailchimp',   level: 'Uso frecuente' },
    { name: 'Brevo',       level: 'Uso frecuente' },
    { name: 'n8n',              level: 'Uso frecuente' },
    { name: 'Automatizaciones', level: 'Uso frecuente' },
    { name: 'IA / Agentes',     level: 'Uso frecuente' }
  ],
  'Marketing / Analítica': [
    { name: 'SEO',                   level: 'Uso frecuente' },
    { name: 'Google Analytics',      level: 'Uso frecuente' },
    { name: 'Google Search Console', level: 'Uso frecuente' },
    { name: 'Google Ads Manager',    level: 'Uso frecuente' },
    { name: 'Google AdSense',        level: 'Uso frecuente' },
    { name: 'Google Cloud Console',  level: 'Uso frecuente' },
    { name: 'Google Play Console',   level: 'Uso frecuente' },
    { name: 'App Store Connect',     level: 'Uso frecuente' }
  ],
  'Ciberseguridad': [
    { name: 'Linux',       level: 'En aprendizaje' },
    { name: 'Kali Linux',  level: 'En aprendizaje' },
    { name: 'Wireshark',   level: 'En aprendizaje' },
    { name: 'Nmap',        level: 'En aprendizaje' },
    { name: 'DNS',         level: 'En aprendizaje' },
    { name: 'Firewalls',   level: 'En aprendizaje' },
    { name: 'OWASP',       level: 'En aprendizaje' }
  ]
};


/* ────────────────────────────────────────────
   DATA — Activity timeline
──────────────────────────────────────────── */
const TIMELINE_DATA = [
  { color: 'green',  date: 'Hoy',           date_en: 'Today',       cat: 'Web',            cat_en: 'Web',        catClass: 'badge-green',  text: 'Desarrollo y optimización de sitios WordPress para clientes activos.',            text_en: 'Developing and optimizing WordPress sites for active clients.' },
  { color: 'orange', date: 'Esta semana',   date_en: 'This week',   cat: 'E-commerce',     cat_en: 'E-commerce', catClass: 'badge-orange', text: 'E-commerce y páginas web ya son terreno conocido: construyo, optimizo y opero con criterio propio.',    text_en: 'E-commerce and web pages are already familiar ground: I build, optimize and operate with my own judgment.' },
  { color: 'warm',   date: 'Reciente',      date_en: 'Recent',      cat: 'Integraciones',  cat_en: 'Integrations', catClass: 'badge-warm', text: 'Integraciones con Stripe, Mailchimp y APIs para automatizar flujos de venta.',   text_en: 'Integrations with Stripe, Mailchimp and APIs to automate sales flows.' },
  { color: 'cyan',   date: 'Reciente',      date_en: 'Recent',      cat: 'SEO',            cat_en: 'SEO',        catClass: 'badge-cyan',   text: 'Optimización de sitios web, SEO técnico y configuración de analítica.',           text_en: 'Website optimization, technical SEO and analytics setup.' },
  { color: 'purple', date: 'Extra',         date_en: 'Extra',       cat: 'Automatización', cat_en: 'Automation', catClass: 'badge-purple', text: 'Automatizaciones con n8n e integraciones para reducir trabajo manual en operaciones.',  text_en: 'Automations with n8n and integrations to reduce manual work in operations.' },
  { color: 'purple', date: 'Aprendiendo',   date_en: 'Learning',    cat: 'Seguridad',      cat_en: 'Security',   catClass: 'badge-orange', text: 'Explorando ciberseguridad como línea de crecimiento profesional.',               text_en: 'Exploring cybersecurity as a professional growth path.' },
  { color: 'cyan',   date: 'En progreso',   date_en: 'In progress', cat: 'UI/UX',          cat_en: 'UI/UX',      catClass: 'badge-cyan',   text: 'Diseño de interfaces para sistemas internos y productos digitales.',             text_en: 'Interface design for internal systems and digital products.' }
];

/* ────────────────────────────────────────────
   UTILITIES
──────────────────────────────────────────── */
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function getStatusBadge(status) {
  const map = {
    'En producción':    'badge-green',
    'En desarrollo':    'badge-cyan',
    'Sistema interno':  'badge-muted',
    'Prototipo avanzado': 'badge-warm',
    'Media platform':   'badge-purple',
    'E-commerce':       'badge-orange'
  };
  return map[status] || 'badge-muted';
}

function getCatBadge(cat) {
  const map = {
    'Web': 'badge-cyan', 'E-commerce': 'badge-orange',
    'Media': 'badge-warm', 'Automatización': 'badge-muted'
  };
  return map[cat] || 'badge-muted';
}

function categoryLabel(cat) {
  return currentLang === 'en' ? (CATEGORY_EN[cat] || cat) : cat;
}

/* ────────────────────────────────────────────
   LOGIN
──────────────────────────────────────────── */
function initLogin() {
  const form   = $('#login-form');
  const pwIn   = $('#login-password');
  const eyeOn  = $('#eye-icon');
  const eyeOff = $('#eye-off-icon');
  const errBox = $('#login-error');

  $('#toggle-pw-btn').addEventListener('click', () => {
    const show = pwIn.type === 'password';
    pwIn.type  = show ? 'text' : 'password';
    eyeOn.style.display  = show ? 'none'  : '';
    eyeOff.style.display = show ? ''      : 'none';
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = $('#login-email').value.trim();
    const pass  = pwIn.value.trim();

    if (!email || !pass) {
      showLoginError('Ingresa tu correo y contraseña para continuar.');
      return;
    }

    errBox.classList.remove('show');
    form.style.display = 'none';
    startLoginLoader();
  });
}

function showLoginError(msg) {
  const errBox = $('#login-error');
  errBox.textContent = msg;
  errBox.classList.add('show');
  $('#login-email').classList.toggle('error', !$('#login-email').value.trim());
  $('#login-password').classList.toggle('error', !$('#login-password').value.trim());
}

function startLoginLoader() {
  const loader = $('#login-loader');
  const step   = $('#loader-step');
  loader.classList.add('show');

  const steps = [t('login.loader1'), t('login.loader2'), t('login.loader3')];
  let i = 0;
  step.textContent = steps[i];

  function advance() {
    i++;
    if (i < steps.length) {
      step.textContent = steps[i];
      setTimeout(advance, 850);
    } else {
      setTimeout(showDashboard, 600);
    }
  }
  setTimeout(advance, 850);
}

function showDashboard() {
  $('#login-screen').style.display = 'none';
  const dash = $('#dashboard');
  dash.classList.remove('hidden');
  dash.classList.add('visible');
  initDashboard();
}

/* ────────────────────────────────────────────
   DASHBOARD INIT
──────────────────────────────────────────── */
function initDashboard() {
  if (currentLang !== 'es') setLang(currentLang);
  renderStack();
  renderFeatured();
  renderTimeline();
  renderProjects(PROJECT_DATA);
  initNavigation();
  initScrollSpy();
  initMobileNav();
  initHamburger();
  initProjectControls();
  initModal();
  initContactForm();
  initTopbarSearch();
  // mostrar sección inicial y disparar contadores
  const overview = document.getElementById('overview');
  if (overview) overview.classList.add('s-visible');
  setTimeout(triggerCounters, 120);
}

/* ────────────────────────────────────────────
   NAVIGATION — SPA: muestra una sección a la vez
──────────────────────────────────────────── */
let currentSection = 'overview';

function scrollToSection(id) { switchSection(id); } // alias para llamadas en HTML

function switchSection(id) {
  if (id === currentSection) return;

  // ocultar sección actual
  const prev = document.getElementById(currentSection);
  if (prev) prev.classList.remove('s-visible');

  // mostrar nueva
  const next = document.getElementById(id);
  if (next) {
    next.classList.add('s-visible');
    $('#content').scrollTop = 0;
  }

  currentSection = id;
  setActiveNav(id);

  // counters se re-disparan al entrar a overview
  if (id === 'overview') triggerCounters();
}

function setActiveNav(id) {
  $$('.nav-item').forEach(el => el.classList.remove('active'));
  const navEl = $(`.nav-item[data-section="${id}"]`);
  if (navEl) navEl.classList.add('active');

  $$('.mobile-nav-btn').forEach(el => el.classList.remove('active'));
  const mNavEl = $(`.mobile-nav-btn[data-section="${id}"]`);
  if (mNavEl) mNavEl.classList.add('active');

  const crumb = $('#breadcrumb-text');
  if (crumb) {
    const labels = {
      overview: t('crumb.overview'), proyectos: t('crumb.proyectos'),
      stack: t('crumb.stack'),
      'sobre-mi': t('crumb.sobre-mi'), actividad: t('crumb.actividad'),
      inbox: t('crumb.inbox'),
    };
    crumb.textContent = labels[id] || id;
  }
}

function initNavigation() {
  $$('.nav-item').forEach(el => {
    el.addEventListener('click', () => {
      switchSection(el.dataset.section);
      if (window.innerWidth <= 768) closeSidebar();
    });
  });
}

/* scroll-spy eliminado — la navegación SPA ya gestiona el estado activo */
function initScrollSpy() {}

/* ────────────────────────────────────────────
   MOBILE SIDEBAR
──────────────────────────────────────────── */
function initHamburger() {
  $('#hamburger-btn').addEventListener('click', () => {
    document.body.classList.toggle('sidebar-open');
    const overlay = $('#sidebar-overlay');
    if (overlay) overlay.classList.toggle('show');
  });
  $('#sidebar-overlay').addEventListener('click', closeSidebar);
}

function closeSidebar() {
  document.body.classList.remove('sidebar-open');
  const overlay = $('#sidebar-overlay');
  if (overlay) overlay.classList.remove('show');
}

function initMobileNav() {
  $$('.mobile-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => switchSection(btn.dataset.section));
  });
}

/* ────────────────────────────────────────────
   COUNTERS — se disparan al entrar a overview
──────────────────────────────────────────── */
let countersDone = false;

function triggerCounters() {
  if (countersDone) return;
  countersDone = true;
  $$('.metric-value[data-count]').forEach(el => animateCounter(el));
}

function initCounters() {} // vacío — se dispara desde initDashboard / switchSection

function animateCounter(el) {
  const target  = parseInt(el.dataset.count, 10);
  const suffix  = el.dataset.suffix || '';
  if (prefersReducedMotion()) { el.textContent = (target < 10 ? '0' + target : target) + suffix; return; }
  const dur = 900;
  const start = performance.now();
  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / dur, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const val = Math.round(eased * target);
    el.textContent = (val < 10 ? '0' + val : val) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ────────────────────────────────────────────
   FEATURED PROJECTS RENDER
──────────────────────────────────────────── */
const FEATURED_IDS = [3, 11, 9, 5]; // Presumiendo México, Ultra Acoustics, Business Music Studio, MundoVentura

function renderFeatured() {
  const container = $('#featured-grid');
  if (!container) return;
  const isEN = currentLang === 'en';
  const projects = FEATURED_IDS.map(id => PROJECT_DATA.find(p => p.id === id)).filter(Boolean);

  container.innerHTML = projects.map(p => `
    <div class="featured-card">
      <div class="featured-card-header">
        <div>
          <div class="featured-card-name">${p.name}</div>
          <div class="featured-card-role">${isEN ? (p.role_en || p.role) : p.role}</div>
        </div>
        ${p.url ? `<a href="${p.url}" target="_blank" rel="noopener" class="featured-card-link">↗ Ver sitio</a>` : ''}
      </div>
      <div class="featured-card-row">
        <div class="featured-card-label">Problema</div>
        <div class="featured-card-text">${isEN ? (p.problem_en || p.problem) : p.problem}</div>
      </div>
      <div class="featured-card-row">
        <div class="featured-card-label">Mi aporte</div>
        <div class="featured-card-text">${isEN ? (p.solution_en || p.solution) : p.solution}</div>
      </div>
      <div class="featured-card-row">
        <div class="featured-card-label">Resultado</div>
        <div class="featured-card-text">${isEN ? (p.value_en || p.value) : p.value}</div>
      </div>
      <div class="featured-card-tags">
        ${p.stackTags.slice(0, 5).map(t => `<span class="featured-card-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ────────────────────────────────────────────
   PROJECTS RENDER
──────────────────────────────────────────── */
let activeCategory = 'Todos';
let searchQuery    = '';

function renderProjects(list) {
  const orderedList = prioritizeProjects(list);
  renderTable(orderedList);
  renderCards(orderedList);
}

function projectField(project, field) {
  const enField = field + '_en';
  return currentLang === 'en' && project[enField] ? project[enField] : project[field] || '';
}

function prioritizeProjects(list) {
  return [...list].sort((a, b) => {
    if (a.name === 'Presumiendo México') return -1;
    if (b.name === 'Presumiendo México') return 1;
    return 0;
  });
}

function truncateText(text, max = 132) {
  if (!text || text.length <= max) return text || '';
  return text.slice(0, max).trim() + '…';
}

function renderTable(list) {
  const tbody = $('#projects-tbody');
  if (!tbody) return;
  const tbEN = currentLang === 'en';
  if (!list.length) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;color:var(--muted);padding:2rem">${t('projects.empty')}</td></tr>`;
    return;
  }
  tbody.innerHTML = list.map(p => `
    <tr data-id="${p.id}">
      <td>
        <div>${p.name}</div>
        <div class="table-stack">${projectField(p, 'role') || p.stackTags.slice(0,3).join(' · ')}</div>
      </td>
      <td>
        <span class="badge ${getCatBadge(p.category)}">${categoryLabel(p.category)}</span>
        <div class="table-stack">${projectField(p, 'type') || p.category}</div>
      </td>
      <td><span class="badge ${getStatusBadge(p.status)}">${tbEN ? (STATUS_EN[p.status] || p.status) : (STATUS_ES[p.status] || p.status)}</span></td>
      <td style="color:var(--muted);font-size:.78rem">${p.stackTags.join(', ')}</td>
      <td><button class="btn-outline" style="font-size:.75rem;padding:.3rem .7rem;white-space:nowrap" onclick="openModal(${p.id})">${t('projects.detail')}</button></td>
    </tr>
  `).join('');

  tbody.querySelectorAll('tr').forEach(tr => {
    tr.addEventListener('click', () => openModal(parseInt(tr.dataset.id)));
  });
}

function renderCards(list) {
  const container = $('#projects-cards');
  if (!container) return;
  const cEN = currentLang === 'en';
  if (!list.length) {
    container.innerHTML = `<p style="color:var(--muted);text-align:center;padding:2rem">${t('projects.empty')}</p>`;
    return;
  }
  container.innerHTML = list.map(p => `
    <div class="project-card-item" onclick="openModal(${p.id})">
      <div class="project-card-name">${p.name}</div>
      <div class="project-card-meta">
        <span class="badge ${getCatBadge(p.category)}">${categoryLabel(p.category)}</span>
        <span class="badge ${getStatusBadge(p.status)}">${cEN ? (STATUS_EN[p.status] || p.status) : (STATUS_ES[p.status] || p.status)}</span>
      </div>
      <div class="project-card-desc">${truncateText(projectField(p, 'desc'))}</div>
    </div>
  `).join('');
}

function filterProjects() {
  const q = searchQuery.toLowerCase();
  const filtered = PROJECT_DATA.filter(p => {
    const matchCat = activeCategory === 'Todos' || p.category === activeCategory;
    const haystack = [
      p.name, p.category, CATEGORY_EN[p.category], p.status, p.type, p.type_en, p.role, p.role_en,
      p.desc, p.desc_en, p.problem, p.solution, p.value, p.learning,
      p.stackTags.join(' '), p.url
    ].filter(Boolean).join(' ').toLowerCase();
    const matchQ = !q || haystack.includes(q);
    return matchCat && matchQ;
  });
  renderProjects(filtered);
}

function initProjectControls() {
  const searchIn = $('#project-search');
  if (searchIn) {
    searchIn.addEventListener('input', e => {
      searchQuery = e.target.value;
      filterProjects();
    });
  }

  $$('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      $$('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.dataset.cat;
      filterProjects();
    });
  });
}

/* ────────────────────────────────────────────
   MODAL
──────────────────────────────────────────── */
function initModal() {
  $('#modal-close-btn').addEventListener('click', closeModal);
  $('#project-modal').addEventListener('click', e => {
    if (e.target === $('#project-modal')) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(id) {
  const p = PROJECT_DATA.find(x => x.id === id);
  if (!p) return;

  const mEN = currentLang === 'en';
  const statusLabel = mEN ? (STATUS_EN[p.status] || p.status) : (STATUS_ES[p.status] || p.status);
  $('#modal-project-name').textContent = p.name;
  $('#modal-badges').innerHTML = `
    <span class="badge ${getCatBadge(p.category)}">${categoryLabel(p.category)}</span>
    <span class="badge ${getStatusBadge(p.status)}">${statusLabel}</span>
  `;
  const siteLink = $('#modal-site-link');
  if (siteLink) {
    if (p.url) {
      siteLink.href = p.url;
      siteLink.textContent = t('modal.site');
      siteLink.style.display = 'inline-flex';
    } else {
      siteLink.removeAttribute('href');
      siteLink.style.display = 'none';
    }
  }
  $('#modal-type').textContent     = projectField(p, 'type') || p.category;
  $('#modal-role').textContent     = projectField(p, 'role') || '';
  $('#modal-desc').textContent     = projectField(p, 'desc');
  $('#modal-problem').textContent  = projectField(p, 'problem');
  $('#modal-solution').textContent = projectField(p, 'solution');
  $('#modal-value').textContent    = projectField(p, 'value');
  $('#modal-learning').textContent = projectField(p, 'learning');
  $('#modal-stack').innerHTML = p.stackTags.map(tag => `<span class="modal-tag">${tag}</span>`).join('');

  const overlay = $('#project-modal');
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  const focusable = overlay.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])');
  if (focusable.length) focusable[0].focus();
}

function closeModal() {
  $('#project-modal').classList.add('hidden');
  document.body.style.overflow = '';
}

/* ────────────────────────────────────────────
   STACK RENDER
──────────────────────────────────────────── */
function renderStack() {
  const container = $('#stack-grid');
  if (!container) return;

  const stEN = currentLang === 'en';
  container.innerHTML = Object.entries(STACK_DATA).map(([group, items]) => `
    <div>
      <div class="stack-group-title">${stEN ? (STACK_GROUPS_EN[group] || group) : group}</div>
      <div class="stack-badges">
        ${items.map(item => `
          <div class="stack-badge">
            ${item.name}
            <span class="stack-badge-level">${stEN ? (STACK_LEVELS_EN[item.level] || item.level) : item.level}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}


/* ────────────────────────────────────────────
   TIMELINE RENDER
──────────────────────────────────────────── */
function renderTimeline() {
  const tl = $('#timeline');
  if (!tl) return;

  const tlEN = currentLang === 'en';
  tl.innerHTML = TIMELINE_DATA.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot ${item.color}"></div>
      <div class="timeline-meta">
        <span class="timeline-date">${tlEN ? item.date_en : item.date}</span>
        <span class="badge ${item.catClass}">${tlEN ? item.cat_en : item.cat}</span>
      </div>
      <div class="timeline-text">${tlEN ? item.text_en : item.text}</div>
    </div>
  `).join('');
}

/* ────────────────────────────────────────────
   CONTACT FORM
──────────────────────────────────────────── */
function initContactForm() {
  const form = $('#contact-form');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const name  = $('#cf-name').value.trim();
    const email = $('#cf-email').value.trim();
    const msg   = $('#cf-msg').value.trim();

    if (!name || !email || !msg) {
      showFormError(currentLang === 'en' ? 'Please fill in all fields.' : 'Por favor completa todos los campos.');
      return;
    }

    const btn = form.querySelector('.btn-send');
    const originalText = btn.textContent;
    btn.textContent = currentLang === 'en' ? 'Sending…' : 'Enviando…';
    btn.disabled = true;
    clearFormError();

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: "bdcbfce4-16fc-4dec-8459-aa83a3233d29",
          name,
          email,
          message: msg,
          subject: `Mensaje desde portafolio — ${name}`,
        }),
      });

      const data = await res.json();

      if (data.success) {
        $('#inbox-form-wrap').style.display = 'none';
        $('#inbox-success').classList.add('show');
      } else {
        btn.textContent = originalText;
        btn.disabled = false;
        showFormError(currentLang === 'en' ? 'Could not send. Please try again.' : 'No se pudo enviar. Intenta de nuevo.');
      }
    } catch {
      btn.textContent = originalText;
      btn.disabled = false;
      showFormError(currentLang === 'en' ? 'Connection error. Please try again.' : 'Error de conexión. Intenta de nuevo.');
    }
  });
}

function showFormError(msg) {
  let err = $('#form-error');
  if (!err) {
    err = document.createElement('p');
    err.id = 'form-error';
    err.style.cssText = 'font-size:.78rem;color:#f87171;margin:.5rem 0 0;line-height:1.5';
    $('#contact-form .btn-send').insertAdjacentElement('afterend', err);
  }
  err.textContent = msg;
}

function clearFormError() {
  const err = $('#form-error');
  if (err) err.textContent = '';
}

/* ────────────────────────────────────────────
   TOPBAR SEARCH (visual — syncs to projects)
──────────────────────────────────────────── */
function initTopbarSearch() {
  const input = $('#topbar-search');
  if (!input) return;
  input.addEventListener('input', e => {
    const q = e.target.value.trim();
    if (q) {
      searchQuery = q;
      filterProjects();
      switchSection('proyectos');
      const projSearch = $('#project-search');
      if (projSearch) projSearch.value = q;
    }
  });
}

/* ────────────────────────────────────────────
   FONTS — carga garantizada con FontFace API
──────────────────────────────────────────── */
(function loadFonts() {
  const base = 'https://fonts.gstatic.com/s/';
  const fonts = [
    { name: 'Inter',         w: '400', url: base + 'inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50ShasZBsmTpccobrfhOY.woff2' },
    { name: 'Inter',         w: '500', url: base + 'inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50ShasZBsmTpccobrfhOY.woff2' },
    { name: 'Inter',         w: '600', url: base + 'inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50ShasZBsmTpccobrfhOY.woff2' },
    { name: 'Space Grotesk', w: '500', url: base + 'spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gozuM65p-oE3A.woff2' },
    { name: 'Space Grotesk', w: '600', url: base + 'spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gozuM65p-oE3A.woff2' },
    { name: 'Space Grotesk', w: '700', url: base + 'spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gozuM65p-oE3A.woff2' },
  ];
  fonts.forEach(f => {
    const face = new FontFace(f.name, `url(${f.url})`, { weight: f.w });
    face.load().then(loaded => document.fonts.add(loaded)).catch(() => {});
  });
})();

/* ────────────────────────────────────────────
   I18N
──────────────────────────────────────────── */
let currentLang = 'es';

const STATUS_ES = {
  'En producción':  'Producción',
  'En desarrollo':  'Desarrollo',
  'Sistema interno':'Interno',
};

const STATUS_EN = {
  'En producción':  'Production',
  'En desarrollo':  'Development',
  'Sistema interno':'Internal',
};

const CATEGORY_EN = {
  'Web': 'Web',
  'E-commerce': 'E-commerce',
  'Media': 'Media',
  'Automatización': 'Automation',
};

const STACK_LEVELS_EN = {
  'Uso frecuente':         'Frequently used',
  'Proyecto real':         'Real project',
  'Integración avanzada':  'Advanced integration',
  'En aprendizaje':        'Learning',
};

const STACK_GROUPS_EN = {
  'Frontend':               'Frontend',
  'CMS / E-commerce':       'CMS / E-commerce',
  'Backend':                'Backend',
  'Pagos e integraciones':  'Payments & integrations',
  'Marketing / Analítica':  'Marketing / Analytics',
  'Ciberseguridad':         'Cybersecurity',
};

const UI = {
  es: {
    'login.topbar.badge':    'Sistema activo',
    'login.title':           'Inicia sesión',
    'login.subtitle':        'Accede al portafolio de Gabo.',
    'login.email.label':     'Correo electrónico',
    'login.password.label':  'Contraseña',
    'login.btn':             'Iniciar sesión',
    'login.loader1':         'Validando acceso…',
    'login.loader2':         'Cargando proyectos…',
    'login.loader3':         'Abriendo portafolio…',
    'breadcrumb.prefix':     'Portafolio',
    'topbar.badge':          'Portafolio activo',
    'topbar.cta':            'Hablemos',
    'topbar.search':         'Buscar proyectos, stack o procesos…',
    'sidebar.status':        'Disponible para proyectos',
    'nav.proyectos':         'Proyectos',
    'nav.sobre-mi':          'Sobre mí',
    'nav.actividad':         'Actividad',
    'nav.inbox':             'Inbox',
    'sidebar.sys-label':     'Estado del sistema',
    'sidebar.sys-val':       'Creando algo mejor',
    'sidebar.upd-label':     'Última actualización',
    'sidebar.upd-val':       'Hoy',
    'overview.badge1':       'Portafolio activo',
    'overview.badge2':       'Disponible para nuevos proyectos',
    'overview.headline':     'Web Developer con experiencia práctica en WordPress, Elementor, e-commerce, HTML/CSS e integraciones.',
    'overview.desc':         'He trabajado en sitios para medios, agencias, tiendas, CRM y plataformas comerciales. Me gusta que una web no solo se vea bien, sino que ayude a vender, ordenar procesos y generar confianza.',
    'overview.btn.projects': 'Ver proyectos',
    'overview.btn.talk':     'Hablemos',
    'lead.title':            'Lead status',
    'lead.label1':           'Visitante',
    'lead.val1':             'Nuevo',
    'lead.label2':           'Estado',
    'lead.val2':             'Listo para conversar',
    'lead.label3':           'Interés',
    'lead.val3':             'Sistemas · Web · E-commerce · Automatización',
    'lead.label4':           'Acción',
    'lead.btn':              'Enviar mensaje',
    'metric.label1':         'Proyectos',
    'metric.desc1':          'Proyectos entregados',
    'metric.label2':         'Herramientas',
    'metric.desc2':          'Tecnologías usadas en producción',
    'metric.label3':         'Áreas',
    'metric.desc3':          'Áreas de trabajo',
    'metric.label4':         'Destacados',
    'metric.desc4':          'Casos de mayor impacto',
    'projects.eyebrow':      'Módulo 02',
    'projects.heading':      'Proyectos',
    'projects.sub':          'Sitios web, tiendas, integraciones y plataformas que he construido para clientes reales.',
    'projects.search':       'Buscar proyecto…',
    'projects.filter.all':   'Todos',
    'projects.th1':          'Proyecto',
    'projects.th2':          'Tipo',
    'projects.th3':          'Estado',
    'projects.th4':          'Stack',
    'projects.detail':       'Ver detalle',
    'projects.empty':        'Sin resultados',
    'stack.eyebrow':         'Módulo 03',
    'stack.heading':         'Stack',
    'stack.sub':             'Tecnologías que uso en proyectos reales con clientes.',
    'about.eyebrow':         'Módulo 05',
    'about.heading':         'Sobre mí',
    'about.sub':             'Web Developer · WordPress · E-commerce · Integraciones.',
    'about.bio1':            'Soy Gabo. Me especializo en crear sitios web funcionales para negocios reales: desde landing pages y tiendas online hasta integraciones con pagos, formularios, automatizaciones y analítica.',
    'about.bio2':            'He trabajado en proyectos para medios digitales, agencias, tiendas e-commerce, plataformas internas y CRM.',
    'about.bio3':            'Me interesa que lo que construyo no solo se vea bien, sino que ayude a vender, ordenar procesos y generar confianza.',
    'about.building':        'Actualmente estoy construyendo',
    'activity.eyebrow':      'Módulo 06',
    'activity.heading':      'Actividad reciente',
    'activity.sub':          'En qué he estado trabajando últimamente.',
    'inbox.eyebrow':         'Módulo 07',
    'inbox.heading':         'Contacto',
    'inbox.sub':             '¿Tienes un proyecto web, tienda o integración que necesitas desarrollar?',
    'inbox.title':           'Escríbeme',
    'inbox.desc':            'Cuéntame tu proyecto y te respondo en menos de 24 horas.',
    'inbox.name.label':      'Nombre',
    'inbox.name.ph':         'Tu nombre',
    'inbox.email.label':     'Correo electrónico',
    'inbox.msg.label':       'Mensaje',
    'inbox.msg.ph':          'Cuéntame sobre tu proyecto o idea…',
    'inbox.send':            'Enviar mensaje',
    'inbox.success.title':   'Mensaje enviado',
    'inbox.success.desc':    'Recibí tu mensaje. Te respondo en menos de 24 horas.',
    'inbox.success.badge':   'Inbox activo',
    'inbox.side.direct':     'Contacto directo',
    'inbox.btn.projects':    'Ver proyectos',
    'inbox.side.status':     'Estado del inbox',
    'inbox.side.badge':      'Inbox abierto',
    'inbox.side.note':       'Respondo en menos de 24 horas.',
    'modal.type':            'Tipo',
    'modal.role':            'Rol',
    'modal.site':            'Visitar sitio',
    'modal.desc':            'Descripción',
    'modal.problem':         'Problema',
    'modal.solution':        'Mi aporte',
    'modal.value':           'Valor generado',
    'modal.stack':           'Stack',
    'modal.learning':        'Frase de caso',
    'crumb.overview':        'Overview',
    'crumb.proyectos':       'Proyectos',
    'crumb.stack':           'Stack',
    'crumb.sobre-mi':        'Sobre mí',
    'crumb.actividad':       'Actividad',
    'crumb.inbox':           'Inbox',
  },
  en: {
    'login.topbar.badge':    'System active',
    'login.title':           'Sign in',
    'login.subtitle':        "Access Gabo's portfolio.",
    'login.email.label':     'Email',
    'login.password.label':  'Password',
    'login.btn':             'Sign in',
    'login.loader1':         'Validating access…',
    'login.loader2':         'Loading projects…',
    'login.loader3':         'Opening portfolio…',
    'breadcrumb.prefix':     'Portfolio',
    'topbar.badge':          'Portfolio active',
    'topbar.cta':            "Let's talk",
    'topbar.search':         'Search projects, stack or processes…',
    'sidebar.status':        'Available for projects',
    'nav.proyectos':         'Projects',
    'nav.sobre-mi':          'About me',
    'nav.actividad':         'Activity',
    'nav.inbox':             'Inbox',
    'sidebar.sys-label':     'System status',
    'sidebar.sys-val':       'Building something better',
    'sidebar.upd-label':     'Last update',
    'sidebar.upd-val':       'Today',
    'overview.badge1':       'Portfolio active',
    'overview.badge2':       'Available for new projects',
    'overview.headline':     'Web Developer with hands-on experience in WordPress, Elementor, e-commerce, HTML/CSS and integrations.',
    'overview.desc':         "I've worked on sites for media, agencies, stores, CRMs and commercial platforms. I care that a website not only looks good, but helps sell, organize processes and build trust.",
    'overview.btn.projects': 'See projects',
    'overview.btn.talk':     "Let's talk",
    'lead.title':            'Lead status',
    'lead.label1':           'Visitor',
    'lead.val1':             'New',
    'lead.label2':           'Status',
    'lead.val2':             'Ready to talk',
    'lead.label3':           'Interest',
    'lead.val3':             'Systems · Web · E-commerce · Automation',
    'lead.label4':           'Action',
    'lead.btn':              'Send message',
    'metric.label1':         'Projects',
    'metric.desc1':          'Delivered projects',
    'metric.label2':         'Tools',
    'metric.desc2':          'Technologies used in production',
    'metric.label3':         'Areas',
    'metric.desc3':          'Work areas',
    'metric.label4':         'Featured',
    'metric.desc4':          'Highest-impact cases',
    'projects.eyebrow':      'Module 02',
    'projects.heading':      'Projects',
    'projects.sub':          'Websites, stores, integrations and platforms I have built for real clients.',
    'projects.search':       'Search project…',
    'projects.filter.all':   'All',
    'projects.th1':          'Project',
    'projects.th2':          'Type',
    'projects.th3':          'Status',
    'projects.th4':          'Stack',
    'projects.detail':       'View detail',
    'projects.empty':        'No results',
    'stack.eyebrow':         'Module 03',
    'stack.heading':         'Stack',
    'stack.sub':             'Technologies I use in real client projects.',
    'about.eyebrow':         'Module 05',
    'about.heading':         'About me',
    'about.sub':             'Web Developer · WordPress · E-commerce · Integrations.',
    'about.bio1':            "I'm Gabo. I specialize in building functional websites for real businesses: from landing pages and online stores to integrations with payments, forms, automations and analytics.",
    'about.bio2':            "I've worked on projects for digital media, agencies, e-commerce stores, internal platforms and CRMs.",
    'about.bio3':            "I care that what I build not only looks good, but helps sell, organize processes and build trust.",
    'about.building':        'Currently building',
    'activity.eyebrow':      'Module 06',
    'activity.heading':      'Recent activity',
    'activity.sub':          "What I've been working on lately.",
    'inbox.eyebrow':         'Module 07',
    'inbox.heading':         'Contact',
    'inbox.sub':             'Do you have a web project, store or integration you need built?',
    'inbox.title':           'Write to me',
    'inbox.desc':            "Tell me about your project and I'll get back to you within 24 hours.",
    'inbox.name.label':      'Name',
    'inbox.name.ph':         'Your name',
    'inbox.email.label':     'Email',
    'inbox.msg.label':       'Message',
    'inbox.msg.ph':          'Tell me about your project or idea…',
    'inbox.send':            'Send message',
    'inbox.success.title':   'Request registered',
    'inbox.success.desc':    "Got your message. I'll reply within 24 hours.",
    'inbox.success.badge':   'Inbox active',
    'inbox.side.direct':     'Direct contact',
    'inbox.btn.projects':    'See projects',
    'inbox.side.status':     'Inbox status',
    'inbox.side.badge':      'Inbox open',
    'inbox.side.note':       'I reply within 24 hours.',
    'modal.type':            'Type',
    'modal.role':            'Role',
    'modal.site':            'Visit site',
    'modal.desc':            'Description',
    'modal.problem':         'Problem',
    'modal.solution':        'My contribution',
    'modal.value':           'Value generated',
    'modal.stack':           'Stack',
    'modal.learning':        'Case line',
    'crumb.overview':        'Overview',
    'crumb.proyectos':       'Projects',
    'crumb.stack':           'Stack',
    'crumb.sobre-mi':        'About me',
    'crumb.actividad':       'Activity',
    'crumb.inbox':           'Inbox',
  }
};

function t(key) { return (UI[currentLang] || UI.es)[key] || key; }

function toggleLang() {
  setLang(currentLang === 'es' ? 'en' : 'es');
}

function setLang(lang) {
  currentLang = lang;
  const label = lang === 'es' ? 'EN' : 'ES';
  const btn = $('#lang-toggle');
  if (btn) btn.textContent = label;
  const btnLogin = $('#lang-toggle-login');
  if (btnLogin) btnLogin.textContent = label;

  /* — login screen — */
  setText('#login-topbar-badge',  t('login.topbar.badge'));
  setText('.login-title',         t('login.title'));
  setText('.login-subtitle',      t('login.subtitle'));
  const lEmail = $('#login-email');
  if (lEmail && lEmail.previousElementSibling) lEmail.previousElementSibling.textContent = t('login.email.label');
  const lPass = $('#login-password');
  if (lPass) {
    const lPassLabel = lPass.closest('.login-field') ? lPass.closest('.login-field').querySelector('label') : null;
    if (lPassLabel) lPassLabel.textContent = t('login.password.label');
  }
  const loginBtn = $('#login-btn');
  if (loginBtn) loginBtn.textContent = t('login.btn');

  /* — topbar — */
  const tbBadge = $('#topbar-badge-text');
  if (tbBadge) tbBadge.textContent = t('topbar.badge');
  const tbCta = $('#topbar-cta');
  if (tbCta) tbCta.textContent = t('topbar.cta');
  const tbSearch = $('#topbar-search');
  if (tbSearch) tbSearch.placeholder = t('topbar.search');

  /* — sidebar — */
  const sideStatus = $('.sidebar-status');
  if (sideStatus) sideStatus.textContent = t('sidebar.status');
  setNavItemText('proyectos', t('nav.proyectos'));
  setNavItemText('sobre-mi',  t('nav.sobre-mi'));
  setNavItemText('actividad', t('nav.actividad'));
  setNavItemText('inbox',     t('nav.inbox'));
  const footLabels = $$('.sidebar-foot-label');
  const footVals   = $$('.sidebar-foot-val');
  if (footLabels[0]) footLabels[0].textContent = t('sidebar.sys-label');
  if (footVals[0])   footVals[0].textContent   = t('sidebar.sys-val');
  if (footLabels[1]) footLabels[1].textContent = t('sidebar.upd-label');
  if (footVals[1])   footVals[1].textContent   = t('sidebar.upd-val');

  /* — overview — */
  const obadges = $$('.overview-badges .badge');
  if (obadges[0]) obadges[0].textContent = t('overview.badge1');
  if (obadges[1]) obadges[1].textContent = t('overview.badge2');
  const headline = $('.overview-headline');
  if (headline) headline.textContent = t('overview.headline');
  const odesc = $('.overview-desc');
  if (odesc) odesc.textContent = t('overview.desc');
  const obtns = $$('.overview-btns button');
  if (obtns[0]) obtns[0].textContent = t('overview.btn.projects');
  if (obtns[1]) obtns[1].textContent = t('overview.btn.talk');

  /* — lead card — */
  const leadTitle = $('.lead-card-title');
  if (leadTitle) leadTitle.textContent = t('lead.title');
  const leadLabels = $$('.lead-label');
  const leadVals   = $$('.lead-val');
  if (leadLabels[0]) leadLabels[0].textContent = t('lead.label1');
  if (leadVals[0])   { const badge = leadVals[0].querySelector('.badge'); if (badge) badge.textContent = t('lead.val1'); }
  if (leadLabels[1]) leadLabels[1].textContent = t('lead.label2');
  if (leadVals[1])   leadVals[1].textContent   = t('lead.val2');
  if (leadLabels[2]) leadLabels[2].textContent = t('lead.label3');
  if (leadVals[2])   leadVals[2].textContent   = t('lead.val3');
  if (leadLabels[3]) leadLabels[3].textContent = t('lead.label4');
  const leadBtn = leadVals[3] ? leadVals[3].querySelector('button') : null;
  if (leadBtn) leadBtn.textContent = t('lead.btn');

  /* — metrics — */
  const mLabels = $$('.metric-label');
  const mDescs  = $$('.metric-desc');
  ['1','2','3','4'].forEach((n, i) => {
    if (mLabels[i]) mLabels[i].textContent = t('metric.label' + n);
    if (mDescs[i])  mDescs[i].textContent  = t('metric.desc'  + n);
  });

  /* — proyectos section — */
  setText('#proyectos .section-eyebrow', t('projects.eyebrow'));
  setText('#proyectos .section-heading', t('projects.heading'));
  setText('#proyectos .section-sub',     t('projects.sub'));
  const projSearch = $('#project-search');
  if (projSearch) projSearch.placeholder = t('projects.search');
  $$('.filter-pill').forEach(pill => {
    pill.textContent = pill.dataset.cat === 'Todos' ? t('projects.filter.all') : categoryLabel(pill.dataset.cat);
  });
  const ths = $$('#projects-table thead th');
  ['th1','th2','th3','th4'].forEach((k, i) => { if (ths[i]) ths[i].textContent = t('projects.' + k); });

  /* — stack section — */
  setText('#stack .section-eyebrow', t('stack.eyebrow'));
  setText('#stack .section-heading', t('stack.heading'));
  setText('#stack .section-sub',     t('stack.sub'));

  /* — sobre mí — */
  setText('#sobre-mi .section-eyebrow', t('about.eyebrow'));
  setText('#sobre-mi .section-heading', t('about.heading'));
  setText('#sobre-mi .section-sub',     t('about.sub'));
  const bios = $$('.about-bio-text');
  ['bio1','bio2','bio3'].forEach((k, i) => { if (bios[i]) bios[i].textContent = t('about.' + k); });
  const buildTitle = $('.about-building-title');
  if (buildTitle) buildTitle.textContent = t('about.building');

  /* — actividad — */
  setText('#actividad .section-eyebrow', t('activity.eyebrow'));
  setText('#actividad .section-heading', t('activity.heading'));
  setText('#actividad .section-sub',     t('activity.sub'));

  /* — inbox — */
  setText('#inbox .section-eyebrow', t('inbox.eyebrow'));
  setText('#inbox .section-heading', t('inbox.heading'));
  setText('#inbox .section-sub',     t('inbox.sub'));
  setText('.inbox-title',            t('inbox.title'));
  setText('.inbox-desc',             t('inbox.desc'));
  const cfName  = $('#cf-name');  if (cfName)  { cfName.previousElementSibling.textContent  = t('inbox.name.label');  cfName.placeholder  = t('inbox.name.ph'); }
  const cfEmail = $('#cf-email'); if (cfEmail) { cfEmail.previousElementSibling.textContent = t('inbox.email.label'); }
  const cfMsg   = $('#cf-msg');   if (cfMsg)   { cfMsg.previousElementSibling.textContent   = t('inbox.msg.label');   cfMsg.placeholder   = t('inbox.msg.ph'); }
  setText('.btn-send',               t('inbox.send'));
  setText('#inbox-success .inbox-success-title', t('inbox.success.title'));
  setText('#inbox-success .inbox-success-desc',  t('inbox.success.desc'));
  const successBadge = $('#inbox-success .badge');
  if (successBadge) successBadge.textContent = t('inbox.success.badge');
  const sideTitles = $$('.inbox-side-title');
  if (sideTitles[0]) sideTitles[0].textContent = t('inbox.side.direct');
  if (sideTitles[1]) sideTitles[1].textContent = t('inbox.side.status');
  const inboxProjBtn = $$('.btn-contact')[2];
  if (inboxProjBtn) {
    for (let i = inboxProjBtn.childNodes.length - 1; i >= 0; i--) {
      if (inboxProjBtn.childNodes[i].nodeType === 3 && inboxProjBtn.childNodes[i].textContent.trim()) {
        inboxProjBtn.childNodes[i].textContent = ' ' + t('inbox.btn.projects') + ' ';
        break;
      }
    }
  }
  const sideBadge = $$('.inbox-side-card')[1] ? $$('.inbox-side-card')[1].querySelector('.badge') : null;
  if (sideBadge) sideBadge.textContent = t('inbox.side.badge');
  const sideNote = $$('.inbox-side-card')[1] ? $$('.inbox-side-card')[1].querySelector('p') : null;
  if (sideNote) sideNote.textContent = t('inbox.side.note');

  /* — modal labels — */
  const mLabs = $$('.modal-label');
  ['modal.type','modal.role','modal.desc','modal.problem','modal.solution','modal.value','modal.stack','modal.learning'].forEach((k, i) => {
    if (mLabs[i]) mLabs[i].textContent = t(k);
  });
  const modalSite = $('#modal-site-link');
  if (modalSite) modalSite.textContent = t('modal.site');

  /* — mobile nav — */
  setMobileNavText('overview', t('crumb.overview'));
  setMobileNavText('proyectos', t('nav.proyectos'));
  setMobileNavText('stack',     t('crumb.stack'));
  setMobileNavText('inbox',     t('crumb.inbox'));

  /* — breadcrumb prefix + label — */
  setText('#breadcrumb-prefix', t('breadcrumb.prefix'));
  updateBreadcrumb();

  /* — re-render dynamic sections — */
  renderStack();
  renderFeatured();
  renderTimeline();
  filterProjects();

  localStorage.setItem('lang', lang);
}

function setText(selector, text) {
  const el = $(selector);
  if (el) el.textContent = text;
}

function setNavItemText(section, text) {
  const el = $(`.nav-item[data-section="${section}"]`);
  if (!el) return;
  for (let i = el.childNodes.length - 1; i >= 0; i--) {
    if (el.childNodes[i].nodeType === 3 && el.childNodes[i].textContent.trim()) {
      el.childNodes[i].textContent = '\n          ' + text + '\n        ';
      break;
    }
  }
}

function setMobileNavText(section, text) {
  const btn = $(`.mobile-nav-btn[data-section="${section}"]`);
  if (!btn) return;
  const spans = btn.querySelectorAll('span');
  if (spans.length > 1) spans[spans.length - 1].textContent = text;
}

function updateBreadcrumb() {
  const crumb = $('#breadcrumb-text');
  if (!crumb) return;
  const map = {
    overview: t('crumb.overview'), proyectos: t('crumb.proyectos'),
    stack: t('crumb.stack'),
    'sobre-mi': t('crumb.sobre-mi'), actividad: t('crumb.actividad'),
    inbox: t('crumb.inbox'),
  };
  crumb.textContent = map[currentSection] || currentSection;
}

/* ────────────────────────────────────────────
   BOOT
──────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang');
  if (saved && saved !== 'es') currentLang = saved;
  showDashboard();
});
