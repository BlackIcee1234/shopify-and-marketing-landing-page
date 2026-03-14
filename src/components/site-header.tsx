"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071634]/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.14em] text-white"
          href="/"
          onClick={closeMenu}
        >
          <Image
            src="/accsx_logo.png"
            alt="ACCSX"
            width={26}
            height={26}
            className="h-6 w-6 rounded-md object-cover"
            priority
          />
          ACCSX
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 p-2 text-white md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="main-nav"
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <nav
          id="main-nav"
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute left-4 right-4 top-[62px] flex-col gap-2 rounded-2xl border border-white/15 bg-[#0a2147]/95 p-3 md:static md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0`}
          aria-label="Navegación principal"
        >
          <Link className="rounded-lg px-3 py-2 text-sm text-[#d3e3ff] hover:bg-white/10" href="/" onClick={closeMenu}>
            Inicio
          </Link>
          <Link
            className="rounded-lg px-3 py-2 text-sm text-[#d3e3ff] hover:bg-white/10"
            href="/#como-funciona"
            onClick={closeMenu}
          >
            Proceso
          </Link>
          <Link
            className="rounded-lg px-3 py-2 text-sm text-[#d3e3ff] hover:bg-white/10"
            href="/#paquetes"
            onClick={closeMenu}
          >
            Paquetes
          </Link>
          <Link
            className="rounded-lg px-3 py-2 text-sm text-[#d3e3ff] hover:bg-white/10"
            href="/#arma-tu-paquete"
            onClick={closeMenu}
          >
            Arma tu paquete
          </Link>
          <Link
            className="rounded-lg px-3 py-2 text-sm text-[#d3e3ff] hover:bg-white/10"
            href="/#combos"
            onClick={closeMenu}
          >
            Combos
          </Link>
          <Link
            className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition hover:border-[#6FD3B0]/60 hover:bg-white/15"
            href="/#cta"
            onClick={closeMenu}
          >
            Inicia tu proyecto
          </Link>
        </nav>
      </div>
    </header>
  );
}

