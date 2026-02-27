import { ShopifyPackage } from "@/types/package";
import { ServicePackage } from "@/types/service-package";

export const shopifyPackages: ShopifyPackage[] = [
  {
    slug: "esencial",
    name: "Shopify Esencial",
    subtitle: "Lanzamiento rapido para validar ventas con inversion controlada.",
    priceMxn: "$3,800 MXN",
    regularPriceMxn: "$4,900 MXN",
    bestFor: "Emprendedores en etapa inicial.",
    timeline: "4 a 7 dias habiles",
    support: "7 dias habiles",
    includes: [
      "Configuracion inicial de tienda Shopify",
      "Implementacion sobre tema predeterminado oficial de Shopify",
      "Carga de hasta 15 productos",
      "Colecciones, politicas de tienda, metodos de pago y envio base",
      "Ajustes de home, menu principal y footer",
      "Revision responsive para movil y escritorio",
    ],
    benefits: [
      "Reduce tiempo de salida al mercado",
      "Mantiene costos bajos sin sacrificar calidad",
      "Permite empezar a vender con una base profesional",
      "Facilita operacion diaria para equipos pequenos",
    ],
    clientNeeds: [
      "Logo y paleta de marca",
      "Catalogo y precios de productos",
      "Politicas comerciales de tu negocio",
      "Cuenta Shopify activa y acceso de colaborador",
    ],
  },
  {
    slug: "crecimiento",
    name: "Shopify Crecimiento",
    subtitle: "Mayor estructura comercial para aumentar conversion.",
    priceMxn: "$7,100 MXN",
    regularPriceMxn: "$8,800 MXN",
    bestFor: "Negocios con catalogo en expansion.",
    timeline: "7 a 12 dias habiles",
    support: "14 dias habiles",
    includes: [
      "Todo lo incluido en Shopify Esencial",
      "Carga de hasta 50 productos",
      "Configuracion de cupones y descuentos de lanzamiento",
      "SEO base en paginas clave",
      "Paginas extra (FAQ y contacto extendido)",
      "Capacitacion de operacion de 60 minutos",
    ],
    benefits: [
      "Mejora el orden del catalogo para vender mas",
      "Aumenta confianza del cliente con informacion clara",
      "Permite ejecutar promociones desde el primer mes",
      "Mejora visibilidad inicial en buscadores",
    ],
    clientNeeds: [
      "Contenido de productos con fotos y descripciones",
      "Reglas de promociones y cupones",
      "Datos fiscales y de envio",
      "Definir a quien se dirige cada coleccion",
    ],
  },
  {
    slug: "pro-emprende",
    name: "Shopify Pro Emprende",
    subtitle: "Operacion mas completa para marcas que quieren escalar.",
    priceMxn: "$13,300 MXN",
    regularPriceMxn: "$16,100 MXN",
    bestFor: "Marcas que requieren mayor profundidad comercial.",
    timeline: "12 a 20 dias habiles",
    support: "30 dias habiles",
    includes: [
      "Todo lo incluido en Shopify Crecimiento",
      "Carga de hasta 120 productos",
      "Bundles y promociones por volumen",
      "Integracion de 1 app clave (reviews o upsell)",
      "Flujos basicos de email (bienvenida o carrito abandonado)",
      "Capacitacion en 2 sesiones de 60 minutos",
    ],
    benefits: [
      "Incrementa ticket promedio con estrategias de bundle",
      "Fortalece conversion con prueba social y automatizacion",
      "Reduce tareas manuales en el dia a dia",
      "Escala con una base comercial mas robusta",
    ],
    clientNeeds: [
      "Definir estrategia de promociones",
      "Aprobar app principal a integrar",
      "Segmentos de clientes y objetivos de venta",
      "Responsable interno para revision y aprobaciones",
    ],
  },
];

export const shopifyPlanCosts = [
  {
    plan: "Basic",
    monthly: "$660 MXN/mes",
    yearlyEquivalent: "$490 MXN/mes",
  },
  {
    plan: "Grow",
    monthly: "$1,220 MXN/mes",
    yearlyEquivalent: "$920 MXN/mes",
  },
  {
    plan: "Advanced",
    monthly: "$6,780 MXN/mes",
    yearlyEquivalent: "$5,080 MXN/mes",
  },
];

export const externalCosts = [
  "Dominio .com: aproximado de $220 a $450 MXN por ano",
  "Suscripcion de Shopify segun plan elegido",
  "Apps opcionales: desde $0 y segun funcionalidad",
];

export const portfolioClients: string[] = [];

export const landingPackages: ServicePackage[] = [
  {
    slug: "landing-start",
    category: "landing",
    name: "Landing Start",
    priceMxn: "$2,000 MXN",
    subtitle: "Pagina de una seccion para oferta principal y captacion rapida.",
    includes: [
      "Diseno base con copy orientado a conversion",
      "Secciones clave: propuesta, beneficios, CTA y contacto",
      "Integracion de formulario de contacto",
      "Version responsive para movil y escritorio",
      "Entrega lista para despliegue rapido",
    ],
    notIncludes: [
      "Branding completo o diseno de logo",
      "Produccion de fotos o video",
      "Campanas de anuncios",
      "Desarrollo de sistema administrativo",
    ],
    benefits: [
      "Presentas tu oferta de forma clara",
      "Generas mas consultas por WhatsApp y formulario",
      "Validas propuesta comercial con baja inversion",
    ],
    maintenance: "$450 MXN/mes",
  },
  {
    slug: "landing-growth",
    category: "landing",
    name: "Landing Growth",
    priceMxn: "$4,400 MXN",
    subtitle: "Landing mas completa para captacion continua y mejor confianza.",
    includes: [
      "Todo lo de Landing Start",
      "Secciones extra: FAQ, proceso, testimonios o casos",
      "Ajustes SEO base y metadata",
      "2 rondas de ajustes post-entrega",
      "Configuracion de eventos basicos de conversion",
    ],
    notIncludes: [
      "Integraciones enterprise complejas",
      "Automatizaciones avanzadas de CRM",
      "Diseno grafico avanzado fuera del alcance",
    ],
    benefits: [
      "Mejora claridad comercial y autoridad",
      "Aumenta calidad del lead recibido",
      "Facilita optimizacion por etapas",
    ],
    maintenance: "$700 MXN/mes",
  },
  {
    slug: "landing-pro",
    category: "landing",
    name: "Landing Pro",
    priceMxn: "$7,100 MXN",
    subtitle: "Landing premium para campanas constantes y escalar captacion.",
    includes: [
      "Todo lo de Landing Growth",
      "Estructura modular para futuras campanas",
      "Integracion con email y automatizacion basica",
      "Dashboard simple con metricas clave",
      "Soporte inicial extendido de arranque",
    ],
    notIncludes: [
      "Gestion completa de pauta",
      "Produccion audiovisual profesional",
      "Desarrollo de plataforma a medida",
    ],
    benefits: [
      "Estandariza la captacion de oportunidades",
      "Permite crecer por fases con bajo riesgo",
      "Reduce dependencia de cambios tecnicos continuos",
    ],
    maintenance: "$1,100 MXN/mes",
  },
];

export const marketingPackages: ServicePackage[] = [
  {
    slug: "acompanamiento-ads-basico",
    category: "marketing",
    name: "Acompanamiento Ads Basico",
    priceMxn: "$1,500 MXN/mes",
    subtitle: "Guia simple para activar anuncios y generar trafico inicial.",
    includes: [
      "Acompanamiento basico mensual",
      "Soporte para segmentacion inicial en Meta Ads",
      "1 pieza creativa simple con apoyo de IA",
      "Revision de mensajes y CTA a WhatsApp o sitio",
      "Reporte basico de trafico y clics",
    ],
    notIncludes: [
      "No se garantiza volumen de ventas",
      "No incluye gestion diaria de cuenta de anuncios",
      "No incluye diseno grafico profesional ilimitado",
      "No incluye agencia full-service",
    ],
    benefits: [
      "Te ayuda a iniciar sin costos de agencia altos",
      "Mantiene enfoque en atraer trafico calificado",
      "Tu equipo conserva control de cierre de ventas",
    ],
    maintenance: "Mensual",
  },
  {
    slug: "acompanamiento-ads-crecimiento",
    category: "marketing",
    name: "Acompanamiento Ads Crecimiento",
    priceMxn: "$2,800 MXN/mes",
    subtitle: "Seguimiento mensual con estructura basica para campanas continuas.",
    includes: [
      "Todo lo del plan basico",
      "2 reuniones de seguimiento al mes",
      "Sugerencias de optimizacion de segmentacion",
      "2 piezas creativas simples con apoyo de IA",
      "Tablero simple de avance mensual",
    ],
    notIncludes: [
      "No somos agencia de performance avanzada",
      "No incluye promesa de resultados de venta",
      "No incluye produccion multimedia profesional",
    ],
    benefits: [
      "Da continuidad a tus campanas mes con mes",
      "Permite tomar decisiones por datos basicos",
      "Evita costos elevados de servicios full marketing",
    ],
    maintenance: "Mensual",
  },
];

export const maintenanceByShopifyPackage = [
  { package: "Shopify Esencial", monthly: "$700 MXN/mes" },
  { package: "Shopify Crecimiento", monthly: "$1,200 MXN/mes" },
  { package: "Shopify Pro Emprende", monthly: "$1,900 MXN/mes" },
];

export function getPackageBySlug(slug: string) {
  return shopifyPackages.find((pkg) => pkg.slug === slug);
}

export function getServicePackageBySlug(slug: string) {
  return [...landingPackages, ...marketingPackages].find(
    (pkg) => pkg.slug === slug,
  );
}

