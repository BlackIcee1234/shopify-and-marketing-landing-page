import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getServicePackageBySlug,
  landingPackages,
  marketingPackages,
} from "@/data/packages";
import styles from "./page.module.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const allServicePackages = [...landingPackages, ...marketingPackages];

export async function generateStaticParams() {
  return allServicePackages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePackageBySlug(slug);
  if (!service) return { title: "Servicio no encontrado | ImpulsaMX Studio" };

  return {
    title: `${service.name} | ImpulsaMX Studio`,
    description: `${service.name} en ${service.priceMxn}. Alcance, beneficios y limites del servicio.`,
  };
}

export default async function ServicePackagePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServicePackageBySlug(slug);
  if (!service) notFound();

  const isMarketing = service.category === "marketing";

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1>{service.name}</h1>
        <p className={styles.price}>{service.priceMxn}</p>
        <p className={styles.subtitle}>{service.subtitle}</p>
      </section>

      <div className={styles.layout}>
        <section className={styles.card}>
          <h2>Que incluye</h2>
          <ul className={styles.list}>
            {service.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.card}>
          <h2>Que beneficio te da</h2>
          <ul className={styles.list}>
            {service.benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.card}>
          <h2>Lo que no incluye</h2>
          <ul className={styles.list}>
            {service.notIncludes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.card}>
          <h2>Mantenimiento y continuidad</h2>
          <ul className={styles.list}>
            <li>Costo de mantenimiento o seguimiento: {service.maintenance}</li>
            <li>Atencion por periodos mensuales.</li>
            <li>Escalable por fases segun objetivos del negocio.</li>
          </ul>
        </section>
      </div>

      <section className={styles.note}>
        {isMarketing ? (
          <p>
            Nota importante: en estos paquetes de marketing ofrecemos
            acompanamiento basico para generar trafico a tu pagina y WhatsApp.
            No prometemos resultados de ventas, ya que el cierre depende de tu
            producto, precio, oferta y proceso comercial.
          </p>
        ) : (
          <p>
            Nota importante: los paquetes de landing no incluyen branding
            completo ni produccion creativa avanzada. Es posible agregar esos
            servicios como extra segun el alcance.
          </p>
        )}
        <Link href="/contacto" className={styles.cta}>
          Quiero una propuesta de este servicio
        </Link>
      </section>
    </main>
  );
}

