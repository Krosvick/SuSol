"use client";
import { Input, Textarea, Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { api } from "~/trpc/react";
import { ContactFormSchema } from "~/server/zodTypes/ContactFormTypes";
import SuccessContact from "./SuccessContact";
import { track } from "@vercel/analytics/react";

type ContactForm = z.infer<typeof ContactFormSchema>;

export function ContactForm(){

    const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>({
        resolver: zodResolver(ContactFormSchema)
    });

    const { isLoading, data, error, isSuccess, mutateAsync: mandarFormulario, isError } = api.contact.send.useMutation();
    const onSubmit = async (data: ContactForm) => {
        try {
            track("contact form submit");
            await mandarFormulario(data);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="mx-auto mt-12 max-w-lg">
            {isSuccess ? <SuccessContact {...data} /> : 
            <div className="flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 lg:p-10 dark:bg-gray-800/90 bg-white/90 backdrop-blur-sm shadow-xl">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  ¡Cuéntanos sobre tu proyecto!
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Completa el formulario y te contactaremos para una cotización personalizada
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-4 lg:gap-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                    <div>
                      <Input
                        isRequired
                        type="text"
                        id="nombre"
                        label="Nombre"
                        placeholder="Tu nombre"
                        {...register("nombre")}
                        errorMessage={errors.nombre?.message}
                        isInvalid={errors.nombre?.message ? true : false}
                        isDisabled={isLoading}
                        variant="bordered"
                        classNames={{
                          input: "text-sm",
                          label: "text-sm font-medium"
                        }}
                      />
                    </div>

                    <div>
                      <Input
                        isRequired
                        type="text"
                        id="apellido"
                        label="Apellido"
                        placeholder="Tu apellido"
                        {...register("apellido")}
                        errorMessage={errors.apellido?.message}
                        isInvalid={errors.apellido?.message ? true : false}
                        isDisabled={isLoading}
                        variant="bordered"
                        classNames={{
                          input: "text-sm",
                          label: "text-sm font-medium"
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <Input
                      isRequired
                      type="email"
                      id="correo"
                      label="Correo electrónico"
                      placeholder="tu@email.com"
                      {...register("correo")}
                      errorMessage={errors.correo?.message}
                      isInvalid={errors.correo?.message ? true : false}
                      isDisabled={isLoading}
                      variant="bordered"
                      classNames={{
                        input: "text-sm",
                        label: "text-sm font-medium"
                      }}
                    />
                  </div>

                  <div>
                    <Input
                      type="tel"
                      id="telefono"
                      label="Número de teléfono (opcional)"
                      placeholder="912345678"
                      {...register("telefono")}
                      errorMessage={errors.telefono?.message}
                      isDisabled={isLoading}
                      variant="bordered"
                      classNames={{
                        input: "text-sm",
                        label: "text-sm font-medium"
                      }}
                    />
                  </div>

                  <div>
                    <Textarea
                      id="mensaje"
                      label="Cuéntanos sobre tu proyecto"
                      placeholder="Describe tu proyecto de energía solar, ubicación, tipo de propiedad, etc."
                      minRows={4}
                      {...register("mensaje")}
                      errorMessage={errors.mensaje?.message}
                      isDisabled={isLoading}
                      isInvalid={errors.mensaje?.message ? true : false}
                      isRequired
                      variant="bordered"
                      classNames={{
                        input: "text-sm",
                        label: "text-sm font-medium"
                      }}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  isLoading={isLoading}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                  size="lg"
                  spinner={
                    <svg
                      className="animate-spin h-5 w-5 text-current"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        fill="currentColor"
                      />
                    </svg>
                  }
                >
                  {isLoading ? "Enviando..." : "Solicitar Cotización Gratuita"}
                </Button>
                
                <div className="text-center">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    🔒 Tus datos están seguros. No compartimos información personal.
                  </p>
                </div>
              </form>
            </div>
          }
          </div>
    )
}