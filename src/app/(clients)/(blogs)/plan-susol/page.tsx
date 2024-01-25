import Link from "next/link";
import Image from "next/image";

export default function PlanSusolPage() {
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
                      Conoce el plan de SuSol
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
                      SuSol es una empresa nueva, nacida en el norte y para el norte. Nuestro objetivo es facilitar el acceso a las energías renovables a través de un servicio personalizado y de calidad. Queremos que nuestros clientes se sientan acompañados en todo el proceso, desde la creación del proyecto hasta la instalación y mantención de los equipos.
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
                    <p className="text-lg text-gray-800 dark:text-gray-200">
                      En SuSol ofrecemos dos tipos de servicios: energía solar térmica y energía solar fotovoltaica. La energía solar térmica es aquella que se utiliza para calentar agua, mientras que la energía solar fotovoltaica es aquella que se utiliza para generar electricidad.
                    </p>
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
                    
                    <h3 className="text-2xl font-bold dark:text-yellow-400 lg:text-3xl">
                        Aprende acerca de las instalaciones que realizamos sobre energía fotovaltaica:
                    </h3>
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
                    <h3 className="text-2xl font-bold dark:text-yellow-400 lg:text-3xl">
                        Quieres aprender más acerca de los servicios de energía solar térmica que realizamos?:
                    </h3>
                    
                    <div className="w-full flex justify-center">
                      <Link href="/energia-solar-termica" className="inline-flex items-center gap-1.5 rounded-sm bg-gray-100 px-3 py-1 text-md text-black hover:bg-gray-200 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 sm:px-4 sm:py-2 sm:text-sm transition duration-200 ease-in-out scale-150 font-semibold">Haz click aquí</Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-2xl font-bold dark:text-yellow-400 lg:text-3xl">
                          Mitos de las energías renovables
                        </h3>
                        <ol className="list-decimal text-lg text-gray-800 dark:text-gray-200 ml-5 gap-5">
                          <li className="py-1">
                            <p>
                              <span className="font-bold">Mito 1:</span> Las energías renovables son caras.
                            </p>
                          </li>
                          <li className="py-1">
                            <p>
                              <span className="font-bold">Mito 2:</span> La energía solar y eólica, se interrumpen y no son continuas.
                            </p>
                          </li>
                          <li className="py-1">
                            <p>
                              <span className="font-bold">Mito 3:</span> Los paneles solares y los aerogeneradores producen enfermedades entre las personas que viven cerca.
                            </p>
                          </li>
                          <li className="py-1">
                            <p>
                              <span className="font-bold">Mito 4:</span>Las energías renovables ocupan el espacio de agricultores y ganaderos  
                            </p>
                          </li>
                          <li className="py-1">
                            <p>
                              <span className="font-bold">Mito 5:</span> Las energías renovables no llegan a cubrir toda la demanda eléctrica
                            </p>
                          </li>
                          <li className="py-1">
                            <p>
                              <span className="font-bold">Mito 6:</span> Los materiales de las energías renovables no son tan buenos para el medioambiente 
                            </p>
                          </li>
                        </ol>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold dark:text-yellow-400 lg:text-3xl">
                          Realidades de las energías renovables
                        </h3>
                        <ol className="list-decimal text-lg text-gray-800 dark:text-gray-200 ml-5">
                          <li className="py-1">
                            <p>
                              <span className="font-bold">Realidad:</span> Gracias a los avances tecnológicos y el desarrollo de esta área de investigación, los costes han reducido de manera impresionante, la energía solar y la eólica se han vuelto las más baratas.
                            </p>
                          </li>
                          <li className="py-1">
                            <p>
                              <span className="font-bold">Realidad:</span>Es muy importante recordar que, al hacer un proyecto de este tipo, siempre habrá un estudio para determinar la ubicación ideal con las condiciones ambientales requeridas, con los recursos naturales necesarios de manera abundante, permitiendo que la generación de energía sea constante. Adicionalmente a este punto, existen diferentes tecnologías para abordar estos puntos, como lo son los inversores, y las baterías, permitiendo que su funcionamiento y desempeño sea el deseado. Volviendo a este tipo de generación de energía la más competitiva. 
                            </p>
                          </li>
                          <li className="py-1">
                            <p>
                              <span className="font-bold">Realidad:</span> Estudios muestran que ningún componente de estos equipos causa una enfermedad, y al no utilizar elementos contaminantes como el combustóleo para la generación de energía, no se considera una tecnología que pudiera dañar la salud.
                              En tecnologías que utilizan componentes contaminantes como el combustóleo, pueden llegar a emitir emisiones contaminantes al aire que puedan ser respiradas por los ciudadanos provocando enfermedades de respiración, sin embargo, los paneles solares y aerogeneradores no utilizan combustóleo para generar energía.
                            </p>
                          </li>
                          <li className="py-1">
                            <p>
                              <span className="font-bold">Realidad:</span> Las instalaciones de energía solar se encuentran comúnmente en terrenos desérticos y que no tienen ningún otro uso. Y al contrario de este mito, los sistemas fotovoltaicos se han implementado en diferentes zonas agrícolas para satisfacer la energía necesaria para los sistemas de riego, facilitando energía en lugares que hasta el momento era difícil conseguir. Y a diferencia de otras tecnologías, esta no emite emisiones contaminantes que pudieran afectar a los sembradíos o animales ganaderos.
                            </p>
                          </li>
                          <li className="py-1">
                            <p>
                              <span className="font-bold">Realidad:</span> La generación de energía proveniente de fuentes renovables ya supera el 38,4 % según datos de Red Eléctrica. Cada vez son más quienes se pasan a este tipo de energías limpias. Podríamos unir las diferentes energías renovables que hay para garantizar el máximo suministro eléctrico posible, poniendo como meta el autoabastecimiento, recarga de coches, iluminación de ciudades, etc. 
                            </p>
                          </li>
                          <li className="py-1">
                            <p>
                              <span className="font-bold">Realidad:</span> Se obliga por ley a reciclar todos los materiales fotovoltaicos, dejando en manos de los fabricantes e importadores la obligación de recoger y procesar los materiales que hayan dejado de funcionar. Por lo tanto, podemos demostrar que esta afirmación es falsa con respecto a las energías renovables y, concretamente, la energía solar. La nula emisión de gases de efecto invernadero de estas fuentes energéticas es otro motivo por el que desmentir que no son adecuadas para el medioambiente.
                            </p>
                          </li>
                        </ol>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}