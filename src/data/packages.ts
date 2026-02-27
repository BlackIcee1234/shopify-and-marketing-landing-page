import { ShopifyPackage } from "@/types/package";

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

export function getPackageBySlug(slug: string) {
  return shopifyPackages.find((pkg) => pkg.slug === slug);
}

