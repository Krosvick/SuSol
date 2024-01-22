import Link from "next/link";
import Image from "next/image";

export default function PlanSusolPage() {
    return (
      <main className="relative h-screen w-full">
        <section className="min-w-screen size-screen relative flex min-h-screen items-center justify-center pt-24 lg:pt-32">
          <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-y-8 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-0">
              <div className="lg:col-span-2">
                <div className="py-8">
                  <div className="space-y-5 lg:space-y-8">
                    <Link
                      className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="/"
                    >
                      <svg
                        className="h-4 w-4 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                      Regresar a la pagina principal
                    </Link>

                    <h2 className="text-3xl font-bold dark:text-yellow-400 lg:text-5xl">
                      Conoce el plan de SuSol
                    </h2>

                    <div className="flex items-center gap-x-5">
                      <Link
                        className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 sm:px-4 sm:py-2 sm:text-sm transition duration-200 ease-in-out"
                        href="/contacto"
                      >
                        Contacta con nosotros
                      </Link>
                      <p className="text-xs text-gray-800 dark:text-gray-200 sm:text-sm">
                        19 de enero de 2024
                      </p>
                    </div>

                    <p className="text-lg text-gray-800 dark:text-gray-200">
                      SuSol es una empresa nacional, nueva pero con ganas de desafiar el mercado de la energía renovable. Nuestro objetivo es facilitar el acceso a la energía solar, a través de un servicio personalizado y de calidad. Queremos que nuestros clientes se sientan acompañados en todo el proceso, desde la asesoría hasta la instalación y mantención de los equipos.
                    </p>
                    <div className="w-full flex justify-center">
                      <Link href="/contacto" className="inline-flex items-center gap-1.5 rounded-sm bg-gray-100 px-3 py-1 text-md text-black hover:bg-gray-200 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 sm:px-4 sm:py-2 sm:text-sm transition duration-200 ease-in-out scale-150 font-semibold">Contáctanos</Link>
                    </div>

                    <p className="text-lg text-gray-800 dark:text-gray-200">
                      Muchas veces las personas tienen el mito de que la energía solar es cara y que no pueden acceder a ella. Sin embargo, en SuSol queremos cambiar esa percepción, ya que creemos que la energía solar es una inversión a largo plazo, que permite ahorrar dinero o incluso, a ganarlo. Además, es una energía limpia y renovable, que permite cuidar el medio ambiente.
                    </p>
                    <h3 className="text-2xl font-bold dark:text-yellow-400 lg:text-3xl">
                        Nuestros servicios
                    </h3>
                    <div className="text-center">
                      <div className="grid gap-3 lg:grid-cols-2">
                        <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
                          <figure className="relative h-60 w-full">
                            <Image
                              className="absolute start-0 top-0 h-full w-full rounded-xl object-cover"
                              src="/images/paneles/3.jpg"
                              alt="Image Description"
                              width={500}
                              height={500}
                            />
                          </figure>
                          <figure className="relative h-60 w-full">
                            <Image
                              className="absolute start-0 top-0 h-full w-full rounded-xl object-cover"
                              src="/images/paneles/2.jpg"
                              alt="Image Description"
                              width={500}
                              height={500}
                            />
                          </figure>
                        </div>
                        <figure className="relative h-72 w-full sm:h-96 lg:h-full">
                          <Image
                            className="absolute start-0 top-0 h-full w-full rounded-xl object-cover"
                            src="/images/articles/termo_lg.jpg"
                            alt="Image Description"
                            width={500}
                            height={500}
                          />
                        </figure>
                      </div>

                      <span className="mt-3 block text-center text-sm text-gray-500">
                        Imágenes de nuestros servicios
                      </span>
                    </div>

                    <p className="text-lg text-gray-800 dark:text-gray-200">
                      Queremos hablarte brevemente de los tipos de instalación fotovoltaica que realizamos en SuSol:
                    </p>
                    <h3 className="text-2xl font-bold dark:text-yellow-400 lg:text-3xl">
                        Instalación off-grid o aislada
                    </h3>
                    <p className="text-lg text-gray-800 dark:text-gray-200">
                      Este tipo de instalación es ideal para lugares donde no llega la red eléctrica, como por ejemplo, casas de campo o de veraneo. En este caso, se instala un sistema fotovoltaico que permite generar y almacenar energía, para que la vivienda pueda funcionar de manera independiente.
                    </p>

                    <h3 className="text-2xl font-bold dark:text-yellow-400 lg:text-3xl">
                        Instalación on-grid o conectada a la red
                    </h3>
                    <p className="text-lg text-gray-800 dark:text-gray-200">
                      Este tipo de instalación es ideal para viviendas que ya tienen acceso a la red eléctrica, ya que permite generar energía y vender el excedente a la compañía eléctrica. De esta manera, se puede ahorrar dinero en la cuenta de la luz.
                    </p>
                    
                    <h3 className="text-2xl font-bold dark:text-yellow-400 lg:text-3xl">
                        Instalación híbrida
                    </h3>
                    <p className="text-lg text-gray-800 dark:text-gray-200">
                      Este tipo de instalación es ideal para viviendas que ya tienen acceso a la red eléctrica, pero que quieren ser más independientes. En este caso, se instala un sistema fotovoltaico que permite generar energía y almacenarla en baterías, para que la vivienda pueda funcionar de manera independiente. Además, se puede vender el excedente a la compañía eléctrica puesto que el sistema está conectado a la red.
                    </p>
                    <p className="text-lg text-gray-800 dark:text-gray-200">
                      Quieres saber más acerca de la energía solar fotovoltaica?:
                    </p>
                    <div className="w-full flex justify-center">
                      <Link href="/energia-solar-fotovoltaica" className="inline-flex items-center gap-1.5 rounded-sm bg-gray-100 px-3 py-1 text-md text-black hover:bg-gray-200 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 sm:px-4 sm:py-2 sm:text-sm transition duration-200 ease-in-out scale-150 font-semibold">Haz click aquí</Link>
                    </div>

                    <blockquote className="p-4 text-center sm:px-7">
                      <p className="text-xl font-medium text-gray-800 dark:text-gray-200 lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal">
                        La energía solar no solo nos brinda luz, sino que también ilumina el camino hacia un mundo más limpio y saludable.
                      </p>
                      <p className="mt-5 text-gray-800 dark:text-gray-200">
                        Leonardo DiCaprio
                      </p>
                    </blockquote>
                    <h2 className="text-2xl font-bold dark:text-yellow-400 lg:text-3xl">
                        Energía solar térmica
                    </h2>

                    <p className="text-lg text-gray-800 dark:text-gray-200">
                      Además de la energía fotovoltaica, en SuSol también realizamos instalaciones de energía solar térmica. Este tipo de energía permite calentar el agua de la vivienda, a través de un sistema de paneles solares térmicos. De esta manera, se puede ahorrar dinero en la cuenta del gas.
                    </p>
                    <p className="text-lg text-gray-800 dark:text-gray-200">
                      Quieres saber más acerca de la energía solar térmica?:
                    </p>
                    <div className="w-full flex justify-center">
                      <Link href="/energia-solar-termica" className="inline-flex items-center gap-1.5 rounded-sm bg-gray-100 px-3 py-1 text-md text-black hover:bg-gray-200 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 sm:px-4 sm:py-2 sm:text-sm transition duration-200 ease-in-out scale-150 font-semibold">Haz click aquí</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
}