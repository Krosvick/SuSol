import { MainSection } from "../_components/MainSection";
import { SecondarySection } from "../_components/SecondarySection";
import { ClientFooter } from "../_components/ClientsFooter";


export default async function Home() {

  return (
    <main className="relative w-full h-dvh overflow-auto snap-y snap-mandatory scroll-smooth">
      <div className="snap-center">
        <MainSection />
      </div>
      <div className="snap-center">
        <SecondarySection />
      </div>
      <div className="snap-center">
        <ClientFooter />
      </div>
    </main>
  );
}


