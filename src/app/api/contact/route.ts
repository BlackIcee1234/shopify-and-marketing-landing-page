import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  business?: string;
  package?: string;
  message?: string;
};

function sanitize(input: string) {
  return input.trim().replace(/[<>]/g, "");
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  const payload = {
    name: sanitize(body.name ?? ""),
    email: sanitize(body.email ?? ""),
    business: sanitize(body.business ?? ""),
    package: sanitize(body.package ?? ""),
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

  // Placeholder de integracion: aqui puedes conectar email, CRM o webhook.
  console.log("Nuevo lead recibido", payload);

  return NextResponse.json({ ok: true });
}

