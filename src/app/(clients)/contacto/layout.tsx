import { TRPCReactProvider } from "~/trpc/react";
import { cookies } from "next/headers";

export default function ContactoLayout({
    children, // will be a page or nested layout
    }: {
    children: React.ReactNode
    }) {
    return (
        <>
            <TRPCReactProvider cookies={cookies().toString()}>
                {children}
            </TRPCReactProvider>
        </>
     
    )
}