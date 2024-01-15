import "~/styles/globals.css";

import { Inter, Poppins } from "next/font/google";
import { cookies } from "next/headers";
import {Providers} from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
          <Providers cookies={cookies().toString()}>
              {children}
          </Providers>
      </body>
    </html>
  );
}
