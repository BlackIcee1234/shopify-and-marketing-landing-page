import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contacto | ImpulsaMX Studio",
  description:
    "Contacta a ImpulsaMX Studio para cotizar tu tienda Shopify o landing page.",
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <div className={styles.layout}>
        <section className={styles.info}>
          <h1>Hablemos de tu proyecto</h1>
          <p>
            Te ayudamos a elegir el paquete ideal de acuerdo con tu etapa de
            negocio, presupuesto y fecha de lanzamiento.
          </p>
          <ul>
            <li>Correo: andreereyes0@gmail.com</li>
            <li>Telefono: +52 3329860651</li>
            <li>Atencion: Lunes a Viernes, 9:00 a 18:00</li>
          </ul>
        </section>

        <section className={styles.formBox}>
          <ContactForm />
        </section>
      </div>
    </main>
  );
}

