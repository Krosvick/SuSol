import { SignIn } from "@clerk/nextjs";
import { Suspense } from "react";
import { ClerkCustomProvider } from "~/app/clerkProvider";
 
export default function Page() {
  return(    
    <div className="min-w-screen min-h-screen flex justify-center items-center">
        <Suspense>
            <ClerkCustomProvider>
                <SignIn />
            </ClerkCustomProvider>
        </Suspense>
    </div>
  )
}