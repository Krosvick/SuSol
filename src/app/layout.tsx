import "~/styles/globals.css";

import { Poppins } from "next/font/google";
import {Providers} from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';


const poppins = Poppins({
  weight: ["200","300","400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "SuSol",
  description: "Energía renovable para Tarapacá",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
