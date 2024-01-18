import { ContactForm } from "~/app/_components/ContactForm";
export default function ContactoPage() {
  return (
    <main className="relative h-full w-full bg-gradient-to-br from-amber-200 to-emerald-300 pt-24 dark:bg-gray-900 dark:from-gray-900 dark:to-gray-900">
      <section
        className="min-w-screen size-screen relative flex min-h-screen items-center justify-center"
        data-header-color="black"
      >
        <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-xl">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl">
                Contáctenos!
              </h1>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                ¿Desea saber más sobre nuestros servicios? rellene el formulario y nos pondremos en contacto con usted en la brevedad posible.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}