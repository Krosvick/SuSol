import { MainSection } from "../_components/MainSection";
import { SecondarySection } from "../_components/SecondarySection";
import { ContactSection } from "../_components/ContactSection";
import { ClientFooter } from "../_components/ClientsFooter";
import { TRPCReactProvider } from "~/trpc/react";
import { cookies } from "next/headers";

export default async function Home() {

  return (
    <main className="snap-container relative w-full h-screen overflow-y-auto overflow-x-hidden">
      <section className="snap-section full-height w-full">
        <MainSection />
      </section>
      <section className="snap-section full-height w-full">
        <SecondarySection />
      </section>
      <section className="snap-section min-h-screen w-full">
        <TRPCReactProvider cookies={cookies().toString()}>
          <ContactSection />
        </TRPCReactProvider>
      </section>
      <section className="snap-section w-full">
        <ClientFooter />
      </section>
    </main>
  );
}


