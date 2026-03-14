"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import {
  ArrowDownRight,
  CheckCircle2,
  GripVertical,
  Layers3,
  MessageCircle,
  Package,
  Plus,
  Rocket,
  Sparkles,
  SquareKanban,
  Trash2,
  Wrench,
  Zap,
} from "lucide-react";
import { useMemo, useState } from "react";
import type { DragEvent, MouseEvent } from "react";
import Image from "next/image";
import catalogo from "@/data/accsx-packages.json";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WHATSAPP_NUMBER = "525500000000";

const servicios = [
  {
    titulo: "Sitios web",
    descripcion: "Páginas modernas y claras para convertir más visitas en clientes.",
    icono: Layers3,
  },
  {
    titulo: "Automatización",
    descripcion: "Procesos automáticos para ahorrar tiempo y operar con menos fricción.",
    icono: Zap,
  },
  {
    titulo: "Sistemas digitales",
    descripcion: "Integraciones y herramientas que conectan tus áreas clave.",
    icono: SquareKanban,
  },
];

const proceso = [
  { titulo: "Cuéntanos tu idea", icono: MessageCircle },
  { titulo: "Diseñamos la solución", icono: Sparkles },
  { titulo: "Construimos y lanzamos", icono: Rocket },
  { titulo: "Mantenemos y mejoramos", icono: Wrench },
];

const serviciosArrastrables = [
  { id: "landing", nombre: "Landing page comercial", precio: 2900 },
  { id: "shopify", nombre: "Tienda Shopify base", precio: 5900 },
  { id: "google-business", nombre: "Registro Google Business", precio: 1800 },
  { id: "seo-local", nombre: "SEO local mensual", precio: 1500 },
  { id: "capacitacion-redes", nombre: "Capacitación de redes", precio: 1200 },
  { id: "capacitacion-ads", nombre: "Capacitación de campañas", precio: 1600 },
];

const money = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 0,
});

function crearLinkWhatsapp(mensaje: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}

export function LandingExperience() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(-200);
  const pointerY = useMotionValue(-200);
  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 28, mass: 0.4 });
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 28, mass: 0.4 });
  const [seleccionados, setSeleccionados] = useState<string[]>([]);
  const [dragActivo, setDragActivo] = useState(false);

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 26 },
    visible: { opacity: 1, y: 0 },
  };

  function handlePointerMove(event: MouseEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(event.clientX - bounds.left);
    pointerY.set(event.clientY - bounds.top);
  }

  const disponibles = useMemo(
    () => serviciosArrastrables.filter((servicio) => !seleccionados.includes(servicio.id)),
    [seleccionados],
  );

  const paqueteActual = useMemo(
    () => serviciosArrastrables.filter((servicio) => seleccionados.includes(servicio.id)),
    [seleccionados],
  );

  const totalPaquete = useMemo(
    () => paqueteActual.reduce((acc, item) => acc + item.precio, 0),
    [paqueteActual],
  );

  function agregarServicio(id: string) {
    setSeleccionados((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }

  function quitarServicio(id: string) {
    setSeleccionados((prev) => prev.filter((item) => item !== id));
  }

  function onDragStart(event: DragEvent<HTMLDivElement>, id: string) {
    event.dataTransfer.setData("text/plain", id);
    event.dataTransfer.effectAllowed = "copy";
  }

  function onDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    const id = event.dataTransfer.getData("text/plain");
    if (id) agregarServicio(id);
    setDragActivo(false);
  }

  const mensajePaquete = useMemo(() => {
    if (paqueteActual.length === 0) {
      return "Hola ACCSX, quiero que me recomienden un paquete para mi negocio.";
    }

    const lineas = paqueteActual.map((item) => `- ${item.nombre} (${money.format(item.precio)})`);
    return `Hola ACCSX, quiero este paquete:\n${lineas.join("\n")}\nTotal estimado: ${money.format(totalPaquete)}.`;
  }, [paqueteActual, totalPaquete]);

  return (
    <div
      className="relative isolate overflow-hidden bg-[#020F2E] text-white"
      onMouseMove={handlePointerMove}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(54,192,183,0.18),transparent_28%),radial-gradient(circle_at_85%_8%,rgba(31,111,165,0.24),transparent_28%),linear-gradient(180deg,#020F2E,#061A3E)]" />
      {!reduceMotion ? (
        <motion.div
          className="pointer-events-none absolute z-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(111,211,176,0.25),rgba(111,211,176,0))] blur-2xl"
          style={{ left: smoothX, top: smoothY, translateX: "-50%", translateY: "-50%" }}
        />
      ) : null}

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 pb-16 pt-6 md:gap-6 md:px-6 md:pt-10">
        <motion.section
          variants={reveal}
          initial={reduceMotion ? "visible" : "hidden"}
          animate="visible"
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.05] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm md:p-10"
        >
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-3 py-2">
                <Image
                  src="/accsx_logo.png"
                  alt="Logo ACCSX"
                  width={30}
                  height={30}
                  className="h-7 w-7 rounded-md object-cover"
                  priority
                />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B8C7E0]">ACCSX</p>
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Soluciones digitales claras para vender más y operar mejor.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#B8C7E0] md:text-base">
                Nos enfocamos en paquetes concretos: landing page, tienda Shopify, Google
                Business, SEO local y capacitación para redes y campañas.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <a
                    href={crearLinkWhatsapp(
                      "Hola ACCSX, quiero iniciar mi proyecto y conocer qué paquete me conviene.",
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Inicia tu proyecto
                  </a>
                </Button>
                <Button size="lg" variant="ghost" asChild>
                  <a href="#paquetes">
                    Ver paquetes y precios
                    <ArrowDownRight size={16} />
                  </a>
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-2">
              <Image
                src="/accsx_logo.png"
                alt="Visual de marca ACCSX"
                width={700}
                height={980}
                className="h-64 w-full rounded-xl object-cover object-top sm:h-72 lg:h-[22rem]"
              />
            </div>
          </div>
        </motion.section>

        <motion.section
          variants={reveal}
          initial={reduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 md:p-7"
        >
          <h2 className="text-2xl font-semibold md:text-3xl">Qué hacemos</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {servicios.map((servicio) => {
              const Icono = servicio.icono;
              return (
                <Card
                  key={servicio.titulo}
                  className="group border-white/12 bg-[linear-gradient(180deg,rgba(10,34,73,0.88),rgba(7,27,58,0.75))] transition duration-300 hover:-translate-y-1 hover:border-[#6FD3B0]/60"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#1F6FA5,#36C0B7,#6FD3B0)] text-[#022a2f] shadow-[0_8px_20px_rgba(54,192,183,0.35)] transition group-hover:scale-105">
                    <Icono size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">{servicio.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#B8C7E0]">{servicio.descripcion}</p>
                </Card>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          id="como-funciona"
          variants={reveal}
          initial={reduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 md:p-7"
        >
          <h2 className="text-2xl font-semibold md:text-3xl">Cómo trabajamos</h2>
          <div className="relative mt-5 grid gap-3 md:grid-cols-4">
            <div className="pointer-events-none absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-transparent via-[#6FD3B0]/60 to-transparent md:block" />
            {proceso.map((paso, index) => {
              const Icono = paso.icono;
              return (
                <Card
                  key={paso.titulo}
                  className="relative border-white/12 bg-[linear-gradient(180deg,rgba(11,37,81,0.86),rgba(7,27,58,0.74))] p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-[#6FD3B0]/60"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-[#9bc0f8]">Paso {index + 1}</p>
                  <div className="mx-auto mt-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#6FD3B0]">
                    <Icono size={18} />
                  </div>
                  <p className="mt-3 text-sm font-medium text-[#eaf1ff]">{paso.titulo}</p>
                </Card>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          id="arma-tu-paquete"
          variants={reveal}
          initial={reduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 md:p-7"
        >
          <h2 className="text-2xl font-semibold md:text-3xl">Arma tu paquete rápido</h2>
          <p className="mt-2 text-sm text-[#B8C7E0] md:text-base">
            Arrastra servicios al panel derecho. En móvil también puedes usar el botón +.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="space-y-2.5">
              {disponibles.map((servicio) => (
                <div
                  key={servicio.id}
                  draggable
                  onDragStart={(event) => onDragStart(event, servicio.id)}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(10,35,75,0.9),rgba(8,28,60,0.76))] px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-medium text-white">{servicio.nombre}</p>
                    <p className="text-xs text-[#9fb9df]">{money.format(servicio.precio)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <GripVertical size={16} className="text-[#9fb9df]" />
                    <button
                      type="button"
                      onClick={() => agregarServicio(servicio.id)}
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div
              onDragOver={(event) => {
                event.preventDefault();
                setDragActivo(true);
              }}
              onDragLeave={() => setDragActivo(false)}
              onDrop={onDrop}
              className={`rounded-2xl border border-dashed p-4 ${
                dragActivo ? "border-[#6FD3B0] bg-[#6FD3B0]/10" : "border-white/25 bg-white/5"
              }`}
            >
              <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-[#dce7ff]">
                <Package size={16} className="text-[#6FD3B0]" />
                Tu paquete seleccionado
              </p>
              {paqueteActual.length === 0 ? (
                <p className="rounded-xl border border-white/10 bg-white/5 px-3 py-4 text-sm text-[#B8C7E0]">
                  Suelta servicios aquí o usa el botón +.
                </p>
              ) : (
                <div className="space-y-2">
                  {paqueteActual.map((servicio) => (
                    <div
                      key={servicio.id}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2"
                    >
                      <div>
                        <p className="text-sm font-medium text-white">{servicio.nombre}</p>
                        <p className="text-xs text-[#9fb9df]">{money.format(servicio.precio)}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => quitarServicio(servicio.id)}
                        className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-4 border-t border-white/10 pt-4">
                <p className="text-sm text-[#b8c7e0]">
                  Total estimado:{" "}
                  <span className="font-semibold text-[#B9FFE8]">{money.format(totalPaquete)}</span>
                </p>
                <Button asChild className="mt-3 w-full">
                  <a href={crearLinkWhatsapp(mensajePaquete)} target="_blank" rel="noreferrer">
                    Enviar selección por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="paquetes"
          variants={reveal}
          initial={reduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 md:p-7"
        >
          <h2 className="text-2xl font-semibold md:text-3xl">Paquetes y precios</h2>
          <p className="mt-2 max-w-2xl text-sm text-[#B8C7E0] md:text-base">
            Todo está en un JSON para mantener los paquetes claros, editables y fáciles de
            entender.
          </p>

          <div className="mt-6 space-y-6">
            {catalogo.categories.map((categoria) => {
              const paquetesCategoria = catalogo.packages.filter(
                (paquete) => paquete.categoryId === categoria.id,
              );

              return (
                <section key={categoria.id}>
                  <h3 className="text-xl font-semibold">{categoria.title}</h3>
                  <p className="mt-1 text-sm text-[#AFC2E2]">{categoria.description}</p>

                  <div className="mt-3 grid gap-3 md:grid-cols-2">
                    {paquetesCategoria.map((paquete) => (
                      <Card
                        key={paquete.id}
                        className="border-white/12 bg-[linear-gradient(180deg,rgba(10,35,75,0.9),rgba(8,28,60,0.76))]"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <h4 className="text-lg font-semibold">{paquete.name}</h4>
                          <span className="rounded-full border border-[#6FD3B0]/50 bg-[#6FD3B0]/10 px-2.5 py-1 text-xs font-semibold text-[#c4fff0]">
                            {paquete.discountLabel}
                          </span>
                        </div>

                        <div className="mt-3">
                          <p className="text-sm text-[#9fb9df] line-through">
                            Antes {money.format(paquete.regularPrice)}
                          </p>
                          <p className="text-2xl font-bold text-[#B9FFE8]">
                            Ahora {money.format(paquete.promoPrice)}
                          </p>
                        </div>

                        <p className="mt-3 text-sm font-medium text-[#d5e6ff]">Qué haremos por ti:</p>
                        <ul className="mt-2 space-y-2">
                          {paquete.deliverables.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-[#DCE8FF]">
                              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#6FD3B0]" />
                              {item}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-4">
                          <Button asChild className="w-full">
                            <a
                              href={crearLinkWhatsapp(
                                `Hola ACCSX, me interesa el paquete "${paquete.name}" por ${money.format(paquete.promoPrice)}.`,
                              )}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Quiero este paquete
                            </a>
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          id="combos"
          variants={reveal}
          initial={reduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border border-[#6FD3B0]/30 bg-[linear-gradient(145deg,rgba(8,32,70,0.94),rgba(7,27,57,0.92))] p-5 md:p-7"
        >
          <h2 className="text-2xl font-semibold md:text-3xl">Combos que sí suman</h2>
          <p className="mt-2 text-sm text-[#B8C7E0] md:text-base">
            Paquetes combinados con mayor ahorro para acelerar resultados desde el inicio.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {catalogo.bundles.map((combo) => (
              <Card
                key={combo.id}
                className="border-[#6FD3B0]/35 bg-[linear-gradient(180deg,rgba(12,48,83,0.9),rgba(10,33,59,0.8))]"
              >
                <h3 className="text-lg font-semibold">{combo.name}</h3>
                <ul className="mt-3 space-y-2">
                  {combo.includes.map((item) => (
                    <li key={item} className="text-sm text-[#DCE8FF]">
                      • {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 border-t border-white/10 pt-3">
                  <p className="text-xs text-[#9db5db] line-through">
                    Valor normal: {money.format(combo.regularPrice)}
                  </p>
                  <p className="text-xl font-bold text-[#B9FFE8]">
                    Combo: {money.format(combo.promoPrice)}
                  </p>
                  <p className="text-xs text-[#d3fff0]">
                    Ahorras {money.format(combo.saving)}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="cta"
          variants={reveal}
          initial={reduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center md:p-10"
        >
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            ¿Quieres que te recomiende el paquete ideal?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#B8C7E0] md:text-base">
            Escríbenos y te decimos exactamente qué incluye, cuánto cuesta y qué se puede
            lanzar primero con tu presupuesto.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" asChild>
              <a
                href={crearLinkWhatsapp(
                  "Hola ACCSX, quiero que me recomienden el paquete ideal para mi negocio.",
                )}
                target="_blank"
                rel="noreferrer"
              >
                Inicia tu proyecto
              </a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a
                href={crearLinkWhatsapp("Hola ACCSX, quiero más información por WhatsApp.")}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>
            </Button>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
