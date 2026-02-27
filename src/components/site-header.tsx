import Link from "next/link";
import styles from "./site-header.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/">
          <span className={styles.logoDot} />
          ImpulsaMX Studio
        </Link>

        <nav className={styles.nav} aria-label="Navegacion principal">
          <Link href="/">Inicio</Link>
          <Link href="/portafolio">Portafolio</Link>
          <Link href="/paquetes/esencial">Paquetes</Link>
          <Link href="/contacto" className={styles.cta}>
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}

