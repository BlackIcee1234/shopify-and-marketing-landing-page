import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import {
  externalCosts,
  getPackageBySlug,
  maintenanceByShopifyPackage,
  shopifyPackages,
  shopifyPlanCosts,
} from "@/data/packages";
import styles from "./page.module.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return shopifyPackages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    return { title: "Paquete no encontrado | ImpulsaMX Studio" };
  }

  return {
    title: `${pkg.name} | ImpulsaMX Studio`,
    description: `${pkg.name} en ${pkg.priceMxn}. Incluye beneficios, alcance y requisitos del cliente.`,
  };
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  const maintenance = maintenanceByShopifyPackage.find(
    (plan) => plan.package === pkg.name,
  );

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1>{pkg.name}</h1>
        <p className={styles.price}>
          {pkg.priceMxn} <span>| Regular: {pkg.regularPriceMxn}</span>
        </p>
        <p className={styles.subtitle}>{pkg.subtitle}</p>
        <div className={styles.meta}>
          <span>Ideal para: {pkg.bestFor}</span>
          <span>Tiempo estimado: {pkg.timeline}</span>
          <span>Soporte posterior: {pkg.support}</span>
          <span>Tema predeterminado oficial de Shopify</span>
        </div>
      </section>

      <div className={styles.layout}>
        <section className={styles.card}>
          <h2>Que incluye exactamente</h2>
          <ul className={styles.list}>
            {pkg.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.card}>
          <h2>Para que te sirve cada parte</h2>
          <ul className={styles.list}>
            {pkg.benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.card}>
          <h2>Lo que necesitas preparar como cliente</h2>
          <ul className={styles.list}>
            {pkg.clientNeeds.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.card}>
          <h2>Costos externos y pasos obligatorios</h2>
          <ul className={styles.list}>
            <li>Comprar dominio para tu marca.</li>
            <li>Contratar tu plan de Shopify.</li>
            <li>Configurar metodos de pago con tus datos fiscales.</li>
            <li>Definir metodos de pago y politicas comerciales.</li>
            {externalCosts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className={styles.card}>
        <h2>No incluye y se cotiza por separado</h2>
        <ul className={styles.list}>
          <li>Diseno de logo o branding completo.</li>
          <li>Compra de tema premium y ajustes avanzados de diseno.</li>
          <li>Produccion de foto o video profesional.</li>
          <li>Campanas de anuncios administradas por agencia externa.</li>
          <li>
            Mantenimiento mensual recomendado para este paquete:{" "}
            {maintenance?.monthly ?? "a cotizar"}
          </li>
        </ul>
      </section>

      <section className={styles.card}>
        <h2>Planes de Shopify (referencia en MXN)</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Plan</th>
              <th>Mensual aprox.</th>
              <th>Anual (equivalente mensual)</th>
            </tr>
          </thead>
          <tbody>
            {shopifyPlanCosts.map((plan) => (
              <tr key={plan.plan}>
                <td>{plan.plan}</td>
                <td>{plan.monthly}</td>
                <td>{plan.yearlyEquivalent}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link href="/contacto" className={styles.cta}>
          Quiero este paquete
          <ArrowRight size={15} />
        </Link>
      </section>
    </main>
  );
}

