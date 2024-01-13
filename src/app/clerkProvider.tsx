 "use client";
 import { ClerkProvider } from "@clerk/nextjs";
import { esES } from "@clerk/localizations";
 export function ClerkCustomProvider({ children }: { children: React.ReactNode }) {
   return (
   <ClerkProvider localization={esES}
          appearance={{
            elements:{
              footer: 'hidden',
            },
          }}
          >
      {children}
   </ClerkProvider>
   )
 }