import Link from "next/link";
import { Logo } from "./_components/icons/Logo";
import { NavbarAdmin } from "./_components/NavbarAdmin";
import { NavbarClient } from "./_components/NavbarClient";
import Image from "next/image";


export default async function Home() {

  return (
    <>
    <NavbarClient/>
    <main className="relative w-full h-screen overflow-auto snap-y snap-mandatory scroll-smooth">
      <div className="snap-center">
      <section className="min-h-screen min-w-screen size-screen text-center relative overflow-hidden text-white">
        <header className="z-30 relative h-screen flex flex-col justify-center px-5 lg:px-60 text-wrap">
          <div className="mt-48">
            <h2 className="text-3xl dark:text-white font-medium">Siguiendo nuestra filosofia trabajamos por un futuro <span className="text-yellow-400">Brillante</span></h2>
            <h1 className="font-medium text-6xl tracking-wider text-yellow-400 dark:text-yellow-400"><span className="text-white">Somos</span> SuSol</h1>
          </div>
          <p className="h-1/3 lg:pt-36 my-20 lg:my-0 text-sm lg:text-base text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin nibh sit amet. Netus et</p>
        </header>
        <div className="absolute top-0 bottom-0 size-screen z-10">
          <Image src="/images/hero_img.webp" alt="Hero section image" width={1920} height={1080} className="h-screen object-cover"/>
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
    </>
  );
}


