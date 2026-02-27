import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://impulsamx.studio"),
  title: "ImpulsaMX Studio | Shopify y Web para Emprendedores",
  description:
    "Servicios Shopify y landing pages en MXN para emprendedores en Mexico. Implementacion profesional, rapida y enfocada en conversion.",
  applicationName: "ImpulsaMX Studio",
  keywords: [
    "Shopify Mexico",
    "Landing page profesional",
    "Ecommerce para emprendedores",
    "Diseno web MXN",
  ],
  openGraph: {
    title: "ImpulsaMX Studio",
    description:
      "Paquetes Shopify y landing pages con enfoque enterprise para clientes mexicanos.",
    locale: "es_MX",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
