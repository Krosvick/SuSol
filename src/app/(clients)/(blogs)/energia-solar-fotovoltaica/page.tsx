import Link from "next/link";
import Image from "next/image";

export default function energiaFotovoltaicaPage() {
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
                      Conoce sobre la energía solar fotovoltaica
                    </h1>

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
                      El panel solar monocristalino, está compuesta por células de un único cristal de cilicio, tienen una eficiencia que ronda entre el 18% y el 23%, rendimiento muy superior al panel solar policristalino, lo que significa que genera más energía con la misma cantidad de luz solar, además de tener una vida útil muy superior (25 a 30 años), su valor en el mercado es superior.
                    </p>
                    <h3 className="text-2xl font-bold dark:text-yellow-400 lg:text-3xl">
                      Paneles solares policristalinos
                    </h3>
                    <p className="text-lg text-gray-800 dark:text-gray-200">
                      Los paneles solares policristalinos son la unión de varios cristales de silicio, la eficiencia de estos paneles ronda entre el 14% y el 16%, es decir que la capacidad de generar energía es inferior a los monocristalinos, puesto que usan una tecnología menos avanzada y su valor en el mercado es inferior.
                    </p>
                    <h3 className="text-2xl font-bold dark:text-yellow-400 lg:text-3xl">Cuando se trata de elegir un tipo de panel solar, es importante considerar sus necesidades.</h3>
                    <h4 className="text-lg font-medium dark:text-yellow-400 lg:text-2xl">Instalación solar conectada a la red (on-grid)</h4>
                    <p className="text-lg text-gray-800 dark:text-gray-200">
                      Este tipo de instalación se encuentra conectado a la red de distribución, permitiendo que los clientes puedan generar y consumir energía solar, pero con el respaldo de la red eléctrica, en caso de que su hogar o empresa consuma más energía generada por los paneles, además de poder inyectar los excedentes de energía a la red de distribución, generando saldos a favor.
                    </p>
                    <div className="flex justify-center w-full">
                      <figure className="lg:w-2/3 w-full">
                        <Image
                          className="w-full h-auto rounded-xl object-cover"
                          src="/images/paneles/on-grid.jpg"
                          alt="Paneles solares"
                          width={1500}
                          height={1200}
                        />
                        <figcaption className="mt-3 text-center text-sm text-gray-500">
                          Instalación solar conectada a la red
                        </figcaption>
                      </figure>
                    </div>
                    <h4 className="text-lg font-medium dark:text-yellow-400 lg:text-2xl">Instalación solar autónoma (off-grid)</h4>
                    <p className="text-lg text-gray-800 dark:text-gray-200">
                      este tipo de instalación no requiere estar conectado a la red de distribución, ya que cuenta con un conjunto de baterías capas de almacenar toda la energía generada durante el día, de esta forma, puede ser utilizada en cualquier momento, siendo un sistema totalmente independiente y autónomo. Este sistema normalmente es recomendado para lugares donde no hay red de distribución eléctrica.
                    </p>
                    <div className="flex justify-center w-full">
                      <figure className="lg:w-2/3 w-full">
                        <Image
                          className="w-full h-auto rounded-xl object-cover"
                          src="/images/paneles/off-grid.jpg"
                          alt="Paneles solares"
                          width={1500}
                          height={1200}
                        />
                        <figcaption className="mt-3 text-center text-sm text-gray-500">
                          Instalación solar autónoma
                        </figcaption>
                      </figure>
                    </div>
                    <h4 className="text-lg font-medium dark:text-yellow-400 lg:text-2xl">Instalación solar híbrida</h4>
                    <p className="text-lg text-gray-800 dark:text-gray-200">
                     Este sistema te da la posibilidad de almacenar la energía en baterías para ser utilizada en los momentos de falla de suministro de la red de distribución, además te permite vender el excedente de energía cuando esta sea superior al consumo de tu hogar o empresa.
                    </p>
                    <div className="flex justify-center w-full">
                      <figure className="lg:w-2/3 w-full">
                        <Image
                          className="w-full h-auto rounded-xl object-cover"
                          src="/images/paneles/hybrid.jpg"
                          alt="Paneles solares"
                          width={1500}
                          height={1200}
                        />
                        <figcaption className="mt-3 text-center text-sm text-gray-500">
                          Instalación solar híbrida
                        </figcaption>
                      </figure>
                    </div>
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
    );
}