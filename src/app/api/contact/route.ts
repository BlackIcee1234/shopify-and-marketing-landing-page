import { BrevoClient } from "@getbrevo/brevo";
import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  business?: string;
  packageSlug?: string;
  packageLabel?: string;
  message?: string;
};

function sanitize(input: string) {
  return input.trim().replace(/[<>]/g, "");
}

function getBrevoClient() {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) return null;

  return new BrevoClient({ apiKey, maxRetries: 2 });
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  const payload = {
    name: sanitize(body.name ?? ""),
    email: sanitize(body.email ?? ""),
    business: sanitize(body.business ?? ""),
    packageSlug: sanitize(body.packageSlug ?? ""),
    packageLabel: sanitize(body.packageLabel ?? "Aun no lo defino"),
    message: sanitize(body.message ?? ""),
  };

  if (
    payload.name.length < 2 ||
    payload.message.length < 10 ||
    !payload.email.includes("@")
  ) {
    return NextResponse.json(
      { message: "Datos invalidos en el formulario." },
      { status: 400 },
    );
  }

  const toEmail = process.env.BREVO_TO_EMAIL;
  const fromEmail = process.env.BREVO_FROM_EMAIL;
  const fromName = process.env.BREVO_FROM_NAME ?? "ImpulsaMX Studio";
  const brevo = getBrevoClient();

  if (!brevo || !toEmail || !fromEmail) {
    console.log("Lead recibido sin envio de email (faltan variables)", payload);
    return NextResponse.json({
      ok: true,
      message: "Solicitud recibida. Email no configurado aun.",
    });
  }

  const htmlContent = `
    <h2>Nuevo lead desde la landing</h2>
    <p><strong>Nombre:</strong> ${payload.name}</p>
    <p><strong>Correo:</strong> ${payload.email}</p>
    <p><strong>Negocio:</strong> ${payload.business}</p>
    <p><strong>Paquete:</strong> ${payload.packageLabel}</p>
    <p><strong>Slug paquete:</strong> ${payload.packageSlug}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${payload.message}</p>
  `;

  try {
    await brevo.transactionalEmails.sendTransacEmail({
      subject: `Nuevo lead: ${payload.name}`,
      sender: { email: fromEmail, name: fromName },
      to: [{ email: toEmail }],
      replyTo: { email: payload.email, name: payload.name },
      htmlContent,
      textContent: [
        "Nuevo lead desde la landing",
        `Nombre: ${payload.name}`,
        `Correo: ${payload.email}`,
        `Negocio: ${payload.business}`,
        `Paquete: ${payload.packageLabel}`,
        `Slug paquete: ${payload.packageSlug}`,
        `Mensaje: ${payload.message}`,
      ].join("\n"),
    });
  } catch (error) {
    console.error("Error enviando correo con Brevo", error);
    return NextResponse.json(
      { message: "No se pudo enviar el correo de contacto." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

