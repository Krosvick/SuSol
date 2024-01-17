import Image from 'next/image'

export default function NosotrosPage() {
  return (
    <main className="relative h-full w-full pt-24 bg-gradient-to-tr from-amber-200 to-emerald-300 dark:bg-gray-900 dark:from-gray-900 dark:to-gray-900">
      <section className="min-w-screen flex min-h-screen flex-col items-center justify-center p-5">
        <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 bg-slate-900 rounded-md dark:bg-zinc-200 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90" data-header-color="black">
          <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
            <div className="relative h-full w-auto">
              <Image
                src="/images/articles/solarinstaller.jpg"
                alt="Equipo SuSol"
                width={500}
                height={500}
              />
            </div>

            <div className="mt-5 sm:mt-10 lg:mt-0">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-2 md:space-y-4">
                  <h2 className="text-3xl font-bold dark:text-gray-800 text-gray-200 lg:text-4xl">
                    SuSol apuesta por las energías renovables
                  </h2>
                  <p className="text-zinc-300 dark:text-gray-900">
                    Creemos que el futuro de la energía es renovable. Por eso, nos dedicamos a la instalación de paneles solares para hogares y empresas. Nuestro objetivo es ayudar a las personas a ahorrar en su factura de la luz y a reducir su huella de carbono.
                  </p>
                </div>

                <ul role="list" className="space-y-2 sm:space-y-4">
                  <li className="flex space-x-3">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="h-3.5 w-3.5 flex-shrink-0"
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
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>

                    <span className="text-sm text-gray-200 dark:text-gray-900 sm:text-base">
                      <span className="font-bold">Instalación, mantención y reparación</span> de paneles fotovoltaicos
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="h-3.5 w-3.5 flex-shrink-0"
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
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>

                    <span className="text-sm text-gray-200 dark:text-gray-900 sm:text-base">
                      Precios <span className="font-bold">Personalizados</span>
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="h-3.5 w-3.5 flex-shrink-0"
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
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>

                    <span className="text-sm text-gray-200 dark:text-gray-900 sm:text-base">
                      Variedad de instalaciones <span className="font-bold">a medida</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-4 grid h-1/3 w-full max-w-[85rem] grid-cols-1 lg:grid-cols-2 gap-6 text-white dark:text-gray-900">
          <div className="rounded-xl bg-slate-900 dark:bg-zinc-200 p-6 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90">
            <p className="text-center text-4xl">☀️</p>

            <h2 className="mt-2 text-center text-lg font-semibold">
              Misión
            </h2>

            <p className="mt-2 flex-grow text-center">
              Elevar la calidad del ser humano mediante las energías renovables. Ser el precursor del cambio de modelo energético. Nuestro propósito es ayudar a cambiar el modelo energético actual por uno más sostenible y amigable con el medio ambiente.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900 dark:bg-zinc-200 p-6 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90">
            <p className="text-center text-4xl">🏬</p>
            <h2 className="mt-2 text-center text-lg font-semibold">
              Visión
            </h2>

            <p className="mt-2 flex-grow text-center">
              Crear una nueva vida mediante las eficiencias energéticas, lograr un acceso universal a la energía sustentable, no contaminante. Mejorar la calidad de vida de todos ofreciendo una energía 100% renovable y eficiente a un costo accesible para todos.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}