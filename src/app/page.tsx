import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  ClipboardCheck,
  FileBadge2,
  HandCoins,
  Hammer,
  LineChart,
  MonitorSmartphone,
  MousePointerClick,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import {
  landingPackages,
  maintenanceByShopifyPackage,
  marketingPackages,
  shopifyPackages,
} from "@/data/packages";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.badge}>
          <Sparkles size={16} />
          Estudio Shopify para marcas en Mexico
        </div>
        <p className={styles.brand}>ImpulsaMX Studio</p>
        <h1>
          Shopify, Landing y acompanamiento de trafico.
          <br />
          Claro, profesional y en MXN.
        </h1>
        <p className={styles.subtitle}>
          Te ayudamos a lanzar y mejorar tu presencia digital con enfoque
          practico: estructura, conversion y seguimiento.
        </p>
        <div className={styles.ctas}>
          <a href="#shopify" className={styles.primaryCta}>
            <MousePointerClick size={17} />
            Ver paquetes
          </a>
          <Link href="/contacto" className={styles.secondaryCta}>
            <BriefcaseBusiness size={17} />
            Agendar llamada
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.sectionKeywords}>
          <span>
            <ShieldCheck size={14} />
            Calidad enterprise
          </span>
          <span>
            <MonitorSmartphone size={14} />
            Responsive
          </span>
          <span>
            <SearchCheck size={14} />
            Estructura clara
          </span>
          <span>
            <LineChart size={14} />
            Enfoque conversion
          </span>
          <span>
            <Wrench size={14} />
            Mantenimiento mensual
          </span>
        </section>

        <section className={styles.sectionBenefits}>
          <div className={styles.sectionTitle}>
            <FileBadge2 size={18} />
            <h2>Que ofrecemos y resultado esperado</h2>
          </div>
          <div className={styles.simpleGrid}>
            <div>
              <h3>Shopify y Landing listos para publicar</h3>
              <p>
                Te entregamos una base profesional y ordenada para empezar a
                captar clientes rapido.
              </p>
            </div>
            <div>
              <h3>Enfoque en trafico y contacto</h3>
              <p>
                Nuestro objetivo es generar mas visitas hacia tu pagina y
                WhatsApp para abrir oportunidades.
              </p>
            </div>
            <div>
              <h3>Sin promesas irreales</h3>
              <p>
                En acompanamiento de anuncios no prometemos ventas. Tu equipo
                se enfoca en cierre y producto, nosotros en guia y trafico.
              </p>
            </div>
          </div>
        </section>

        <section id="shopify" className={styles.section} aria-label="Paquetes Shopify">
          <div className={styles.sectionTitle}>
            <BadgeCheck size={18} />
            <h2>Paquetes Shopify</h2>
          </div>
          <p className={styles.sectionText}>
            Todos los paquetes de Shopify se implementan sobre tema
            predeterminado oficial para mantener costos controlados, estabilidad
            y salida rapida al mercado.
          </p>
          <div className={styles.grid}>
            {shopifyPackages.map((pkg, idx) => (
              <article
                key={pkg.name}
                className={`${styles.card} ${idx === 1 ? styles.featured : ""}`}
              >
                <h3>{pkg.name}</h3>
                <p className={styles.price}>{pkg.priceMxn}</p>
                <p className={styles.regularPrice}>
                  Precio regular: {pkg.regularPriceMxn}
                </p>
                <p className={styles.cardSubtitle}>{pkg.subtitle}</p>
                <ul>
                  {pkg.includes.slice(0, 4).map((item) => (
                    <li key={item}>
                      <ShieldCheck size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className={styles.cardActions}>
                  <Link href={`/paquetes/${pkg.slug}`} className={styles.cardLink}>
                    Ver detalle completo
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="landing" className={styles.section}>
          <div className={styles.sectionTitle}>
            <Hammer size={18} />
            <h2>Paquetes Landing (fuera de Shopify)</h2>
          </div>
          <p className={styles.sectionText}>
            Solucion para captar leads, presentar servicios o lanzar campanas
            sin depender de ecommerce.
          </p>
          <div className={styles.grid}>
            {landingPackages.map((pkg) => (
              <article key={pkg.slug} className={styles.card}>
                <h3>{pkg.name}</h3>
                <p className={styles.price}>{pkg.priceMxn}</p>
                <p className={styles.cardSubtitle}>{pkg.subtitle}</p>
                <ul>
                  {pkg.includes.slice(0, 4).map((item) => (
                    <li key={item}>
                      <ShieldCheck size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className={styles.cardActions}>
                  <Link href={`/servicios/${pkg.slug}`} className={styles.cardLink}>
                    Ver alcance e incluye
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="marketing" className={styles.section}>
          <div className={styles.sectionTitle}>
            <ChartNoAxesCombined size={18} />
            <h2>Acompanamiento de Marketing (basico)</h2>
          </div>
          <p className={styles.sectionText}>
            Apoyo mensual para iniciar publicidad digital y generar trafico a
            pagina y WhatsApp. No es servicio de agencia full marketing.
          </p>
          <div className={styles.gridTwo}>
            {marketingPackages.map((pkg) => (
              <article key={pkg.slug} className={styles.card}>
                <h3>{pkg.name}</h3>
                <p className={styles.price}>{pkg.priceMxn}</p>
                <p className={styles.cardSubtitle}>{pkg.subtitle}</p>
                <ul>
                  {pkg.includes.slice(0, 4).map((item) => (
                    <li key={item}>
                      <ShieldCheck size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className={styles.cardActions}>
                  <Link href={`/servicios/${pkg.slug}`} className={styles.cardLink}>
                    Ver alcance y limites
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionTitle}>
            <Boxes size={18} />
            <h2>Extras que pueden escalar tu tienda</h2>
          </div>
          <div className={styles.tags}>
            {[
              "Carga adicional de productos",
              "Banners promocionales",
              "Bundles y cross-sell avanzado",
              "Integraciones con apps premium",
              "SEO tecnico ampliado",
              "Mantenimiento mensual",
            ].map((extra) => (
              <span key={extra}>{extra}</span>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionTitle}>
            <Wrench size={18} />
            <h2>Mantenimiento mensual por paquete Shopify</h2>
          </div>
          <div className={styles.maintenanceGrid}>
            {maintenanceByShopifyPackage.map((plan) => (
              <article key={plan.package} className={styles.maintenanceCard}>
                <h3>{plan.package}</h3>
                <p>{plan.monthly}</p>
                <span>Actualizaciones, soporte y ajustes menores</span>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionTitle}>
            <ChartNoAxesCombined size={18} />
            <h2>Portafolio</h2>
          </div>
          <div className={styles.emptyPortfolio}>
            <p>Estamos preparando la seccion de clientes y casos publicados.</p>
            <p>
              Tu proyecto puede ser uno de los primeros casos destacados de
              ImpulsaMX Studio.
            </p>
            <Link href="/portafolio">Ver espacio de portafolio</Link>
          </div>
        </section>

        <section id="contacto" className={styles.section}>
          <div className={styles.sectionTitle}>
            <ClipboardCheck size={18} />
            <h2>Contactanos y te enviamos propuesta personalizada</h2>
          </div>
          <p className={styles.sectionText}>
            Completando este formulario evaluamos tu negocio, sugerimos el
            paquete mas conveniente y definimos una ruta clara de lanzamiento.
          </p>
          <div className={styles.contactBox}>
            <div className={styles.contactLead}>
              <h3>Informacion clave para iniciar</h3>
              <ul>
                <li>
                  <HandCoins size={14} />
                  Presupuesto aproximado y paquete de interes
                </li>
                <li>
                  <HandCoins size={14} />
                  Tipo de producto y volumen de catalogo
                </li>
                <li>
                  <HandCoins size={14} />
                  Fecha objetivo de lanzamiento
                </li>
                <li>
                  <HandCoins size={14} />
                  Si ya tienes dominio y plan Shopify activo
                </li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}
