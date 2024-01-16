import Image from 'next/image'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

export function MainSection(){
    return (
        <section className="min-h-screen min-w-screen size-screen text-center relative overflow-hidden text-white" data-header-color="white">
        <header className="z-30 relative h-screen flex flex-col justify-center px-5 lg:px-60 text-wrap">
          <div className="mt-52">
            <h2 className="text-3xl dark:text-white font-medium">Siguiendo nuestra filosofía trabajamos por un futuro <span className="text-yellow-400">Brillante</span></h2>
            <h1 className="font-medium text-6xl tracking-wider text-yellow-400 dark:text-yellow-400"><span className="text-white">Somos</span> SuSol</h1>
            <Button as={Link} className="mt-5 p-5 hover:scale-110 data-[hover=true]:opacity-100 bg-yellow-400 dark:text-black rounded-sm font-medium text-lg" radius='none' href="/contacto">Contáctenos</Button>
          </div>
          <p className="h-1/3 lg:pt-28 my-20 lg:my-0 text-sm lg:text-base text-center">Brindamos soluciones de energías renovables para Tarapacá y el país, con el fin de lograr un Chile más sustentable al alcance de todos los chilenos</p>
        </header>
        <div className="absolute top-0 bottom-0 size-screen z-10">
          <Image src="/images/hero_img.webp" alt="Hero section image" width={1920} height={1080} className="h-screen object-cover" priority={true}/>
        </div>
      </section>
    )
}