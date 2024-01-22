import Link from "next/link";
import Image from "next/image";

export default function energiaFotovoltaicaPage() {
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
                      Conoce sobre la energía solar fotovoltaica
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
                      En SuSol nos dedicamos a la instalación, mantención y reparación de sistemas de energía solar fotovoltaica. Este tipo de energía se utiliza para generar electricidad, ya sea para uso residencial, comercial o industrial. Es una energía limpia, renovable y gratuita, que permite ahorrar dinero y cuidar el medio ambiente.
                    </p>

                    <h3 className="text-2xl font-bold dark:text-yellow-400 lg:text-3xl">
                        Ahorra plata en tu cuenta de luz
                    </h3>
                    <figure className="w-full flex justify-center">
                    <iframe width="370" height="315" src="https://www.youtube.com/embed/EU1Lk7Xn3-U?si=m1FJGeRML1pi5EM0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </figure>
                    <h3 className="text-2xl font-bold dark:text-yellow-400 lg:text-3xl">
                      Tipos de paneles solares
                    </h3>
                    <p className="text-lg text-gray-800 dark:text-gray-200">
                      Actualmente en SuSol trabajamos con dos tipos de paneles solares: <span className="font-bold">Monocristalinos</span> y <span className="font-bold">Policristalinos</span>.
                    </p>

                    <div className="text-center">
                      <div className="grid gap-3 lg:grid-cols-2">
                        <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
                          <figure className="relative h-60 w-full">
                            <Image
                              className="absolute start-0 top-0 h-full w-full rounded-xl object-cover"
                              src="/images/articles/solar_panel.jpg"
                              alt="Panel solar"
                              width={500}
                              height={500}
                            />
                          </figure>
                          <figure className="relative h-60 w-full">
                            <Image
                              className="absolute start-0 top-0 h-full w-full rounded-xl object-cover"
                              src="/images/paneles/1.jpg"
                              alt="Panel solar"
                              width={500}
                              height={500}
                            />
                          </figure>
                        </div>
                        <figure className="relative h-72 w-full sm:h-96 lg:h-full">
                          <Image
                            className="absolute start-0 top-0 h-full w-full rounded-xl object-cover"
                            src="/images/paneles/2.jpg"
                            alt="Panel solar monocristalino"
                            width={500}
                            height={500}
                          />
                        </figure>
                      </div>

                      <span className="mt-3 block text-center text-sm text-gray-500">
                        Paneles solares
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold dark:text-yellow-400 lg:text-3xl">
                      Paneles solares monocristalinos
                    </h3>
                    <p className="text-lg text-gray-800 dark:text-gray-200">
                      Los paneles solares monocristalinos son más eficientes y ocupan menos espacio que los paneles policristalinos. Por lo tanto, son ideales para instalaciones residenciales, donde el espacio es limitado. Además, tienen una vida útil de 25 años, por lo que son una excelente inversión.
                    </p>
                    <h3 className="text-2xl font-bold dark:text-yellow-400 lg:text-3xl">
                      Paneles solares monocristalinos
                    </h3>
                    <p className="text-lg text-gray-800 dark:text-gray-200">
                      Los paneles solares policristalinos son más económicos que los monocristalinos, pero también menos eficientes. Por lo tanto, ocupan más espacio y son menos recomendables para instalaciones residenciales. Sin embargo, son una buena opción para instalaciones comerciales o industriales, donde el espacio no es un problema.
                    </p>
                    <figure>
                      <Image
                        className="w-full rounded-xl object-cover"
                        src="/images/paneles/3.jpg"
                        alt="Paneles solares"
                        width={1500}
                        height={1200}
                      />
                      <figcaption className="mt-3 text-center text-sm text-gray-500">
                        Gran cantidad de paneles solares en una instalación industrial
                      </figcaption>
                    </figure>

                    <div className="space-y-3">
                      <p className="text-lg text-gray-800 dark:text-gray-200">
                        En Susol queremos ademas brindarte distintas modalidades de instalación, para que puedas elegir la que más se acomode a tus necesidades. Puedes conocer más en nuestra sección de:
                      </p>
                      <div className="w-full flex justify-center">
                      <Link href="/plan-susol" className="inline-flex items-center gap-1.5 rounded-sm bg-gray-100 px-3 py-1 text-md text-black hover:bg-gray-200 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 sm:px-4 sm:py-2 sm:text-sm transition duration-200 ease-in-out scale-150 font-semibold">Nuestro Plan</Link>
                      </div>
                      <p className="text-lg text-gray-800 dark:text-gray-200 mt-5">
                        ¿Deseas saber más? puedes contactarnos en nuestra sección de:
                      </p>
                      <div className="w-full flex justify-center">
                      <Link href="/contacto" className="inline-flex items-center gap-1.5 rounded-sm bg-gray-100 px-3 py-1 text-md text-black hover:bg-gray-200 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 sm:px-4 sm:py-2 sm:text-sm transition duration-200 ease-in-out scale-150 font-semibold">Contacto</Link>
                    </div>
                    <p className="text-lg text-gray-800 dark:text-gray-200">
                      Gracias por visitar nuestra pagina!
                    </p>
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