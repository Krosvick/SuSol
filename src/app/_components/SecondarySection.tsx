import Image from 'next/image'
import Link from 'next/link';
export function SecondarySection(){
    return (
      <section className="min-h-svh min-w-screen relative h-dvh w-full items-center justify-center overflow-hidden px-6 lg:px-52 pb-12 lg:pb-12 pt-28 text-center lg:flex-row lg:gap-5">
        <h2 className='text-xl font-semibold mb-3'>Nuestro plan</h2>
        <div className="grid gap-6 h-full hover:scale-105 transition-all duration-300">
          <Link
            className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 h-full"
            href="/plan-susol"
          >
            <div className="relative h-full w-full overflow-hidden rounded-md before:absolute before:inset-x-0 before:z-[1] before:h-full before:w-full before:bg-gradient-to-t before:from-gray-900/[.7]">
              <Image
                className="absolute start-0 top-0 h-full w-full object-cover"
                src="/images/articles/solar_panel.jpg"
                alt="Image Description" fill={true}
              />
            </div>

            <div className="absolute inset-x-0 top-0 z-10">
              <div className="flex h-full flex-col p-4 sm:p-6">
                <div className="flex items-center">
                  <div className="ms-2.5 sm:ms-4">
                    <p className="font-semibold text-white tracking-wider">SuSol</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-10">
              <div className="flex h-full flex-col p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-white group-hover:text-white/[.8] sm:text-3xl hover:transform transition-all duration-300">
                  Conoce nuestro plan para facilitarte el acceso a la energía renovable
                </h3>
                <p className="mt-2 text-white/[.8]">
                  Queremos brindarte un servicio a tu medida, donde nuestros profesionales te asesorarán en todo el proceso. Podrás generar tu propia energía y ahorrar en tu factura de luz.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    );
}