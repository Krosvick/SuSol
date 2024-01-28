import Link from "next/link";
import Image from "next/image";
import { MythCard } from "~/app/_components/MythCard";
import { BlogCard } from "~/app/_components/BlogCard";

export default function PlanSusolPage() {
    const mitos = {
      mito1: {
        mito: "Las energías renovables son caras.",
        realidad: "Los avances tecnológicos han reducido los costes de las energías renovables, siendo la solar y eólica las más baratas."
      },
      mito2: {
        mito: "La energía solar y eólica, se interrumpen y no son continuas.",
        realidad: "Existen estudios y tecnologías que garantizan la generación constante de energía solar y eólica."
      },
      mito3: {
        mito: "Los paneles solares y los aerogeneradores producen enfermedades entre las personas que viven cerca.",
        realidad: "Estudios demuestran que estos equipos no causan enfermedades y no utilizan elementos contaminantes."
      },
      mito4: {
        mito: "Las energías renovables ocupan el espacio de agricultores y ganaderos.",
        realidad: "Las instalaciones de energía solar se ubican en terrenos desérticos y pueden beneficiar a zonas agrícolas."
      },
      mito5: {
        mito: "Las energías renovables no llegan a cubrir toda la demanda eléctrica.",
        realidad: "La generación de energía renovable ya supera el 38,4 % y puede garantizar el suministro eléctrico."
      },
      mito6: {
        mito: "Los materiales de las energías renovables no son tan buenos para el medioambiente.",
        realidad: "La ley obliga a reciclar todos los materiales fotovoltaicos, y no emiten gases de efecto invernadero."
      }
    }
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
                        Contacto
                      </Link>
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
                      En SuSol ofrecemos dos tipos de servicios: instalación, mantención y reparación de:
                    </p>
                    <BlogCard title="Energía solar fotovoltaica" text="Con la cual podrás generar tu propia energía eléctrica, para tu consumo o para vender los excedentes a la red eléctrica."/>
                    <BlogCard title="Energía solar térmica" text="Con está podrás tener agua caliente las 24 horas del día, y asi ahorrar energía(gas). además de poder calefaccionar tu hogar."/>
                    <BlogCard title="Energía Eólica" text="Con la cual también podrás generar tu propia energía eléctrica, utilizando el viento como fuente de energía."/>
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
                    <h3 className="text-2xl font-bold dark:text-yellow-400 lg:text-3xl">
                        Mitos y realidades de la energía solar:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {Object.values(mitos).map((mito, index) => (
                        <MythCard key={index} Myth={mito.mito} Reality={mito.realidad}/>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}