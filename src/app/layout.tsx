import "~/styles/globals.css";

import { Poppins } from "next/font/google";
import {Providers} from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';

const poppins = Poppins({
  weight: ["200","300","400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://susol.cl'),
  title: {
    default: "SuSol - Instalación, Mantenimiento y Reparación de Paneles Solares y Termos Solares en Tarapacá, Chile",
    template: "%s | SuSol - Energía Renovable Tarapacá"
  },
  description: "Empresa líder en instalación, mantenimiento y reparación de paneles solares y termos solares en Tarapacá, Chile. Especialistas en sistemas fotovoltaicos, autoconsumo, energías limpias y servicio técnico para Iquique, Alto Hospicio y toda la región.",
  keywords: [
    "instalación de paneles solares",
    "mantenimiento de paneles solares",
    "reparación de paneles solares",
    "termos solares",
    "mantenimiento termos solares",
    "reparación termos solares",
    "paneles solares Tarapacá",
    "energía renovable Chile",
    "instaladores de paneles solares",
    "placas solares Iquique",
    "energía solar fotovoltaica",
    "energía solar térmica",
    "autoconsumo energético",
    "energías limpias",
    "sistemas solares",
    "servicio técnico solar",
    "SuSol",
    "Tarapacá",
    "Iquique",
    "Alto Hospicio"
  ].join(', '),
  authors: [{ name: 'SuSol' }],
  creator: 'SuSol',
  publisher: 'SuSol',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://susol.cl',
    siteName: 'SuSol',
    title: 'SuSol - Instalación y Mantenimiento de Paneles Solares y Termos Solares en Tarapacá',
    description: 'Empresa líder en instalación, mantenimiento y reparación de paneles solares y termos solares en Tarapacá, Chile.',
    images: [
      {
        url: '/images/paneles/susol-paneles-solares-tarapaca.jpg',
        width: 1200,
        height: 630,
        alt: 'SuSol - Instalación y mantenimiento de paneles solares en Tarapacá',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SuSol - Instalación y Mantenimiento de Paneles Solares y Termos Solares en Tarapacá',
    description: 'Empresa líder en instalación, mantenimiento y reparación de paneles solares y termos solares en Tarapacá, Chile.',
    images: ['/images/paneles/susol-paneles-solares-tarapaca.jpg'],
  },
  alternates: {
    canonical: 'https://susol.cl',
  },
  verification: {
    google: 'google-site-verification-code-here', // Reemplazar con el código real de Google Search Console
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CL">
      <head>
        <link rel="canonical" href="https://susol.cl" />
        <meta name="geo.region" content="CL-TA" />
        <meta name="geo.placename" content="Tarapacá, Chile" />
        <meta name="geo.position" content="-20.2307;-70.1355" />
        <meta name="ICBM" content="-20.2307, -70.1355" />
      </head>
      <body className={`font-sans ${poppins.variable}`}>
          <Providers>
              {children}
          </Providers>
          <SpeedInsights/>
          <Analytics /> 
      </body>
    </html>
  );
}
