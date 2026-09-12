import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "SAY PRODUCTION — Jasa Dokumentasi Profesional Lamongan",
  description: "Layanan foto dan video profesional berkualitas tinggi untuk wedding, prewedding, event, dan komersial di Lamongan dan sekitarnya.",
  keywords: ["jasa foto", "jasa video", "wedding", "prewedding", "dokumentasi event", "fotografer Lamongan", "videografer Lamongan", "Say Production"],
  metadataBase: new URL("https://sayproduction.my.id"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SAY PRODUCTION — Jasa Dokumentasi Profesional",
    description: "Layanan foto dan video profesional untuk wedding, prewedding, dan event di Lamongan.",
    url: "https://sayproduction.my.id",
    siteName: "SAY PRODUCTION",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAY PRODUCTION — Jasa Dokumentasi Profesional",
    description: "Layanan foto dan video profesional untuk wedding, prewedding, dan event di Lamongan.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
