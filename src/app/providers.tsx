// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'
import { TRPCReactProvider } from "~/trpc/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";

export function Providers({children, cookies}: { children: React.ReactNode, cookies: string }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <TRPCReactProvider cookies={cookies}>
              {children}
        </TRPCReactProvider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}