import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NHServer — Lightweight Node.js Framework",
  description: "NHServer es un micro-framework web para Node.js. Sin dependencias, enrutamiento rápido, middleware integrado.",
  authors: [{ name: "andresdev-tech" }],
  openGraph: {
    title: "NHServer — Lightweight Node.js Framework",
    description: "NHServer es un micro-framework web para Node.js. Sin dependencias, enrutamiento rápido, middleware integrado.",
    url: "https://nhserver.dev",
    siteName: "NHServer",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NHServer — Lightweight Node.js Framework",
    description: "NHServer es un micro-framework web para Node.js. Sin dependencias, enrutamiento rápido, middleware integrado.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0D0F12",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
