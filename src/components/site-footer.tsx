import Link from "next/link";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <section>
          <p className={styles.brand}>ImpulsaMX Studio</p>
          <p className={styles.copy}>
            Soluciones Shopify y landing pages con enfoque comercial, calidad
            enterprise y ejecucion rapida para clientes en Mexico.
          </p>
        </section>

        <section className={styles.block}>
          <h4>Navegacion</h4>
          <Link href="/">Inicio</Link>
          <Link href="/portafolio">Portafolio</Link>
          <Link href="/contacto">Contacto</Link>
        </section>

        <section className={styles.block}>
          <h4>Contacto</h4>
          <p>Axel Andree Perez Reyes</p>
          <a href="mailto:axel@impulsamx.studio">axel@impulsamx.studio</a>
          <a href="tel:+525500000000">+52 55 0000 0000</a>
        </section>
      </div>

      <div className={styles.bottom}>
        Hecho por Axel Andree Perez Reyes. Todos los precios mostrados en MXN.
      </div>
    </footer>
  );
}

