"use client";

import { FormEvent, useState } from "react";
import styles from "./contact-form.module.css";

type FormDataState = {
  name: string;
  email: string;
  business: string;
  packageSlug: string;
  message: string;
};

const packageOptions = [
  { value: "sin-definir", label: "Aun no lo defino" },
  { value: "esencial", label: "Shopify Esencial" },
  { value: "crecimiento", label: "Shopify Crecimiento" },
  { value: "pro-emprende", label: "Shopify Pro Emprende" },
  { value: "landing-start", label: "Landing Start" },
  { value: "landing-growth", label: "Landing Growth" },
  { value: "landing-pro", label: "Landing Pro" },
  {
    value: "acompanamiento-ads-basico",
    label: "Acompanamiento Ads Basico",
  },
  {
    value: "acompanamiento-ads-crecimiento",
    label: "Acompanamiento Ads Crecimiento",
  },
] as const;

const initialData: FormDataState = {
  name: "",
  email: "",
  business: "",
  packageSlug: "sin-definir",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormDataState>(initialData);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          packageLabel:
            packageOptions.find((option) => option.value === formData.packageSlug)
              ?.label ?? "Aun no lo defino",
        }),
      });

      if (!response.ok) {
        throw new Error("No fue posible enviar el formulario.");
      }

      setFormData(initialData);
      setStatus("Solicitud enviada. Te contactaremos pronto.");
    } catch {
      setStatus("Error al enviar. Escribenos a andreereyes0@gmail.com.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            value={formData.name}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, name: event.target.value }))
            }
            required
            minLength={2}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Correo</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, email: event.target.value }))
            }
            required
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="business">Negocio</label>
          <input
            id="business"
            value={formData.business}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, business: event.target.value }))
            }
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="package">Paquete de interes</label>
          <select
            id="package"
            value={formData.packageSlug}
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                packageSlug: event.target.value,
              }))
            }
          >
            {packageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, message: event.target.value }))
          }
          placeholder="Cuantame sobre tu proyecto y objetivos de venta."
          required
          minLength={10}
        />
      </div>

      <div className={styles.actions}>
        <button type="submit" disabled={isSending} className={styles.submit}>
          {isSending ? "Enviando..." : "Enviar solicitud"}
        </button>
        {status ? <p className={styles.status}>{status}</p> : null}
      </div>
    </form>
  );
}

