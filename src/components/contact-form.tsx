"use client";

import { FormEvent, useState } from "react";
import styles from "./contact-form.module.css";

type FormDataState = {
  name: string;
  email: string;
  business: string;
  package: string;
  message: string;
};

const initialData: FormDataState = {
  name: "",
  email: "",
  business: "",
  package: "esencial",
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
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("No fue posible enviar el formulario.");
      }

      setFormData(initialData);
      setStatus("Solicitud enviada. Te contactaremos pronto.");
    } catch {
      setStatus("Error al enviar. Escribenos a axel@impulsamx.studio.");
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
            value={formData.package}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, package: event.target.value }))
            }
          >
            <option value="esencial">Shopify Esencial</option>
            <option value="crecimiento">Shopify Crecimiento</option>
            <option value="pro-emprende">Shopify Pro Emprende</option>
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

