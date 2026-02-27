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
          <div className={styles.keywords}>
            <span>Shopify</span>
            <span>Landing Pages</span>
            <span>Acompanamiento Ads Basico</span>
            <span>Mantenimiento</span>
          </div>
        </section>

        <section className={styles.block}>
          <h4>Navegacion</h4>
          <Link href="/">Inicio</Link>
          <Link href="/#landing">Landing</Link>
          <Link href="/#marketing">Marketing</Link>
          <Link href="/portafolio">Portafolio</Link>
          <Link href="/contacto">Contacto</Link>
        </section>

        <section className={styles.block}>
          <h4>Contacto</h4>
          <p>Axel Andree Perez Reyes</p>
          <a href="mailto:andreereyes0@gmail.com">andreereyes0@gmail.com</a>
          <a href="tel:+523329860651">+52 3329860651</a>
        </section>
      </div>

      <div className={styles.bottom}>
        Hecho por Axel Andree Perez Reyes. Todos los precios mostrados en MXN.
        En marketing ofrecemos acompanamiento basico, no promesa de ventas.
      </div>
    </footer>
  );
}

