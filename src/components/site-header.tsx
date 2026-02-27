"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import styles from "./site-header.module.css";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/" onClick={closeMenu}>
          <span className={styles.logoDot} />
          ImpulsaMX Studio
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="main-nav"
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <nav
          id="main-nav"
          className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}
          aria-label="Navegacion principal"
        >
          <Link href="/" onClick={closeMenu}>
            Inicio
          </Link>
          <Link href="/#shopify" onClick={closeMenu}>
            Shopify
          </Link>
          <Link href="/#landing" onClick={closeMenu}>
            Landing
          </Link>
          <Link href="/#marketing" onClick={closeMenu}>
            Marketing
          </Link>
          <Link href="/portafolio" onClick={closeMenu}>
            Portafolio
          </Link>
          <Link href="/contacto" className={styles.cta} onClick={closeMenu}>
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}

