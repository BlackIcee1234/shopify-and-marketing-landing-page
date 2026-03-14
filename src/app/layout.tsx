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
  metadataBase: new URL("https://accsx.com"),
  title: "ACCSX | Sistemas Digitales para Empresas",
  description:
    "ACCSX diseña y desarrolla sitios web, automatizaciones e integraciones para empresas que buscan crecer con tecnología.",
  applicationName: "ACCSX",
  keywords: [
    "ACCSX",
    "Sistemas digitales",
    "Automatización empresarial",
    "Desarrollo web para empresas",
  ],
  openGraph: {
    title: "ACCSX",
    description:
      "Sistemas digitales, automatizaciones e integraciones para negocios modernos.",
    locale: "es_MX",
    type: "website",
    images: ["/accsx_logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
  },
  manifest: "/favicon_io/site.webmanifest",
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
