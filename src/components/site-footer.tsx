import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050f26]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:justify-between md:px-6">
        <section className="max-w-xl">
          <p className="text-sm font-semibold tracking-[0.14em] text-white">ACCSX</p>
          <p className="mt-2 text-sm leading-relaxed text-[#B8C7E0]">
            Diseñamos soluciones digitales para empresas que necesitan crecer con procesos más
            inteligentes, rápidos y conectados.
          </p>
        </section>
        <section className="flex flex-col gap-2 text-sm text-[#D8E6FF]">
          <Link href="/">Inicio</Link>
          <Link href="/#como-funciona">Proceso</Link>
          <Link href="/#paquetes">Paquetes</Link>
          <Link href="/#combos">Combos</Link>
          <Link href="/#cta">Inicia tu proyecto</Link>
        </section>
      </div>
      <div className="mx-auto w-full max-w-6xl border-t border-white/10 px-4 py-4 text-xs text-[#8ea6cc] md:px-6">
        ACCSX · Sistemas digitales, automatizaciones e integraciones para negocios.
      </div>
    </footer>
  );
}

