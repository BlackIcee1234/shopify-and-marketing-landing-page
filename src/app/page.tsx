import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Building2,
  ChartNoAxesCombined,
  ClipboardCheck,
  HandCoins,
  Layers,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { shopifyPackages } from "@/data/packages";
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
          Construimos tiendas Shopify y landing pages de alto impacto para
          crecer con orden y conversion.
        </h1>
        <p className={styles.subtitle}>
          Propuesta moderna, ligera y escalable para emprendedores que quieren
          vender mejor en internet con una base enterprise.
        </p>
        <div className={styles.ctas}>
          <a href="#paquetes" className={styles.primaryCta}>
            <MousePointerClick size={17} />
            Ver paquetes
          </a>
          <Link href="/contacto" className={styles.secondaryCta}>
            <Building2 size={17} />
            Agendar llamada
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.sectionTitle}>
            <Layers size={18} />
            <h2>Que hacemos y como beneficia a tu negocio</h2>
          </div>
          <div className={styles.simpleGrid}>
            <div>
              <h3>Arquitectura comercial clara</h3>
              <p>
                Organizamos menu, catalogo y mensajes para que tu cliente entienda
                rapido que vendes y por que comprarte.
              </p>
            </div>
            <div>
              <h3>Implementacion con enfoque en ventas</h3>
              <p>
                Configuramos promociones, bloques clave y llamados a la accion
                para impulsar conversion desde el inicio.
              </p>
            </div>
            <div>
              <h3>Operacion simple para tu equipo</h3>
              <p>
                Dejamos tu tienda lista para que puedas administrar productos,
                pedidos y contenido sin complicarte.
              </p>
            </div>
            <div>
              <h3>Calidad enterprise</h3>
              <p>
                Aplicamos estructura mantenible, buenas practicas y medidas de
                seguridad para despliegues confiables.
              </p>
            </div>
            <div>
              <h3>Escalabilidad real</h3>
              <p>
                Puedes iniciar con paquete base y crecer por fases con apps,
                bundles y automatizaciones.
              </p>
            </div>
            <div>
              <h3>Velocidad y experiencia</h3>
              <p>
                Sitio ligero, animaciones sutiles y diseno responsive para
                ofrecer mejor experiencia en movil y escritorio.
              </p>
            </div>
          </div>
        </section>

        <section id="paquetes" className={styles.section}>
          <div className={styles.sectionTitle}>
            <BadgeCheck size={18} />
            <h2>Paquetes en MXN</h2>
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
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}
