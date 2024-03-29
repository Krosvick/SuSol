import Link from "next/link";
import Image from "next/image";
import { CarruselTermos } from "~/app/_components/CarruselTermos";


export default function energiaTermicaPage() {
    return (
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

                    <h1 className="text-3xl font-bold dark:text-yellow-400 lg:text-5xl">
                        Conoce sobre la energía solar termica
                    </h1>

                    <div className="flex items-center gap-x-5">
                      <Link
                        className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 sm:px-4 sm:py-2 sm:text-sm transition duration-200 ease-in-out"
                        href="/contacto"
                      >
                        Contacto
                      </Link>
                    </div>

                    <p className="text-lg text-gray-800 dark:text-gray-200">
                      En SuSol también nos dedicamos a la instalación, mantención y reparación de sistemas de energía solar térmica. Este tipo de energía se utiliza para calentar agua, ya sea para uso sanitario o para calefacción. Es una energía limpia, renovable y gratuita, que permite ahorrar dinero y cuidar el medio ambiente.
                    </p>
                    <p className="text-lg text-gray-800 dark:text-gray-200">
                      Esta energía aprovecha la radiación solar para obtener calor, tanto para agua caliente como para calefaccionar ambientes.
                    </p>

                    <p className="text-lg text-gray-800 dark:text-gray-200">
                      Las siguientes son algunas de las ventajas de la energía solar térmica:
                    </p>
                    <div className="flex w-full justify-center">
                    <CarruselTermos />
                    </div>
                    <h3 className="text-2xl font-bold dark:text-yellow-400 lg:text-3xl">
                        Tipos de sistemas de energía solar térmica
                    </h3>
                    <p className="text-lg text-gray-800 dark:text-gray-200">
                    Actualmente existen dos tipos de sistemas de energía solar térmica: <span className="font-bold">Presurizados</span> y por <span className="font-bold">Gravedad</span>. El primero es el más utilizado en viviendas, ya que es más económico y fácil de instalar. El segundo es más eficiente, pero también más caro y complejo de instalar.
                    </p>
                    <h3 className="text-2xl font-bold dark:text-yellow-400 lg:text-3xl">
                        Sistemas presurizados
                    </h3>
                    <p className="text-lg text-gray-800 dark:text-gray-200">
                    Los sistemas presurizados son los más utilizados en viviendas. Se caracterizan por tener un circuito cerrado, en el que el agua circula por los tubos y se calienta con la energía del sol. Luego, el agua caliente se almacena en un termo, donde se mantiene a la temperatura deseada.
                    </p>
                    <div className="w-full flex justify-center">
                     <figure className="lg:w-1/3 w-full">
                        <Image
                          src="/images/termos/presurizado.jpg"
                          alt="Termo"
                          width={500}
                          height={500}
                          className="w-full h-auto rounded-xl object-cover"
                        />
                        <figcaption className="mt-3 text-center text-sm text-gray-500">
                          Termo presurizado
                        </figcaption>
                    </figure>
                    </div>
                    <h3 className="text-2xl font-bold dark:text-yellow-400 lg:text-3xl">
                        Sistemas por gravedad
                    </h3>
                    <p className="text-lg text-gray-800 dark:text-gray-200">
                    Los sistemas por gravedad son más eficientes que los presurizados, ya que no requieren de una bomba para que el agua circule. Sin embargo, son más caros y complejos de instalar, por lo que se utilizan principalmente en edificios y grandes instalaciones.
                    </p>
                     <div className="w-full flex justify-center">
                      <figure className="lg:w-1/3 w-full">
                          <Image
                            src="/images/termos/info.jpg"
                            alt="Termo"
                            width={500}
                            height={500}
                            className="w-full h-auto rounded-xl object-cover"
                          />
                          <figcaption className="mt-3 text-center text-sm text-gray-500">
                            Funcionamiento de un sistema de energía solar térmica
                          </figcaption>
                      </figure>
                    </div>
                    <h3 className="text-2xl font-bold dark:text-yellow-400 lg:text-3xl">
                      En los hogares
                    </h3>
                    <p className="text-lg text-gray-800 dark:text-gray-200">
                      Para aprovechar el calor solar se utilizan paneles solares térmicos. La instalación solar térmica se ubica en los tejados y consta de los siguientes dispositivos:
                    </p>
                    <ol className="list-decimal ml-5">
                      <li className="text-lg text-gray-800 dark:text-gray-200">
                        Colector o panel solar térmico
                      </li>
                      <li className="text-lg text-gray-800 dark:text-gray-200">
                        Deposito de almacenamiento
                      </li>
                      <li className="text-lg text-gray-800 dark:text-gray-200">
                        Caldera
                      </li>
                      <li className="text-lg text-gray-800 dark:text-gray-200">
                        Estación solar
                      </li>
                      <li className="text-lg text-gray-800 dark:text-gray-200">
                        Consumo del agua (ducha)
                      </li>
                    </ol>
                    <div className="w-full flex justify-center">
                      <figure className="lg:w-2/3 w-full">
                          <Image
                            src="/images/termos/casa.jpg"
                            alt="Termo"
                            width={500}
                            height={500}
                            className="w-full h-auto rounded-xl object-cover"
                          />
                          <figcaption className="mt-3 text-center text-sm text-gray-500">
                            Instalación en una casa
                          </figcaption>
                      </figure>
                    </div>
                   
                    <p className="text-lg text-gray-800 dark:text-gray-200">
                    En SuSol nos dedicamos a la instalación de sistemas de energía solar térmica. Si quieres saber más sobre nuestros servicios, no dudes en ir a nuestro: <Link href="/contacto" className="inline-flex items-center gap-1.5 rounded-sm bg-gray-100 px-3 py-1 text-md text-black hover:bg-gray-200 dark:bg-yellow-400 dark:text-black dark:hover:bg-gray-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 sm:px-4 sm:py-2 sm:text-sm transition duration-200 ease-in-out ">Contacto</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}