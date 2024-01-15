import Link from "next/link";
import { Logo } from "~/app/_components/icons/Logo";
import { NavbarAdmin } from "~/app/_components/NavbarAdmin";
import { NavbarClient } from "~/app/_components/NavbarClient";
import Image from "next/image";
import { Button } from "@nextui-org/react";


export default async function Home() {

  return (
    <main className="relative w-full h-screen overflow-auto snap-y snap-mandatory scroll-smooth">
      <div className="snap-center">
      <section className="min-h-screen min-w-screen size-screen text-center relative overflow-hidden text-white" data-header-color="white">
        <header className="z-30 relative h-screen flex flex-col justify-center px-5 lg:px-60 text-wrap">
          <div className="mt-52">
            <h2 className="text-3xl dark:text-white font-medium">Siguiendo nuestra filosofía trabajamos por un futuro <span className="text-yellow-400">Brillante</span></h2>
            <h1 className="font-medium text-6xl tracking-wider text-yellow-400 dark:text-yellow-400"><span className="text-white">Somos</span> SuSol</h1>
            <Button as={Link} className="mt-5" href="/contacto">Contáctenos</Button>
          </div>
          <p className="h-1/3 lg:pt-28 my-20 lg:my-0 text-sm lg:text-base text-center">Brindamos soluciones de energías renovables para Tarapacá y el país, con el fin de lograr un Chile más sustentable.</p>
        </header>
        <div className="absolute top-0 bottom-0 size-screen z-10">
          <Image src="/images/hero_img.webp" alt="Hero section image" width={1920} height={1080} className="h-screen object-cover" priority={true}/>
        </div>
      </section>
      </div>
      <div className="snap-center">
      <section className="min-h-screen min-w-screen size-screen text-center relative overflow-hidden">
        <header className="z-30 relative h-screen flex flex-col justify-center items-center">
          <h1 className="dark:text-white text-6xl">SuSol</h1>
          <h2 className="text-3xl">texto relleno</h2>
          <p>cositas</p>
        </header>
      </section>
      </div>
    </main>
  );
}


