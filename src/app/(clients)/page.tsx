import Link from "next/link";
import { Logo } from "~/app/_components/icons/Logo";
import { NavbarAdmin } from "~/app/_components/NavbarAdmin";
import { NavbarClient } from "~/app/_components/NavbarClient";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { MainSection } from "../_components/MainSection";
import { SecondarySection } from "../_components/SecondarySection";


export default async function Home() {

  return (
    <main className="relative w-full h-screen overflow-auto snap-y snap-mandatory scroll-smooth">
      <div className="snap-center">
        <MainSection />
      </div>
      <div className="snap-center">
        <SecondarySection />
      </div>
    </main>
  );
}


