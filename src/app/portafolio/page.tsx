import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Portafolio | ImpulsaMX Studio",
  description: "Casos de clientes y proyectos de ImpulsaMX Studio.",
};

export default function PortfolioPage() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <h1>Portafolio de clientes</h1>
        <p>
          Esta seccion se encuentra en construccion y sera publicada con casos
          reales, resultados y capturas de implementaciones.
        </p>
        <p>
          Si deseas ser uno de nuestros primeros casos destacados, agenda una
          llamada y definimos tu plan de lanzamiento.
        </p>
      </section>
    </main>
  );
}

