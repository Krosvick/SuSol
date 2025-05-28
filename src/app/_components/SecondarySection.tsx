import Image from 'next/image'
import Link from 'next/link';
import { ScrollArrow } from './ScrollArrow';

export function SecondarySection(){
    return (
      <section className="full-height w-full relative flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-12" id="secondary-section">
        <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-center">
          <div className="section-content">
            <h2 className='text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-center'>Nuestro plan</h2>
          </div>
          <div className="flex-1 max-h-[70vh]">
            <Link
              className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 h-full drop-shadow-lg"
              href="/plan-susol"
            >
              <div className="relative h-full w-full overflow-hidden rounded-md before:absolute before:inset-x-0 before:z-[1] before:h-full before:w-full before:bg-gradient-to-t before:from-gray-900/[.7]">
                <Image
                  className="responsive-image"
                  src="/images/articles/solar_panel.jpg"
                  alt="Paneles solares - Plan SuSol" 
                  fill={true}
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10">
                <div className="flex h-full flex-col p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-white group-hover:text-yellow-400 hover:transform transition-all duration-300 text-left">
                    Conoce nuestro plan para facilitarte el acceso a la energía renovable
                  </h3>
                  <p className="mt-2 text-white/[.8] text-left text-sm sm:text-base">
                    Queremos brindarte un servicio a tu medida, donde nuestros profesionales te asesorarán en todo el proceso. Podrás generar tu propia energía, calentar tu agua y climatizar tu hogar, al mismo tiempo que ahorras dinero y cuidas el medio ambiente.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        
        <ScrollArrow targetSectionIndex={2} />
      </section>
    );
}