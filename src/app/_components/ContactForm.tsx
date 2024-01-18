"use client";
import { Input, Textarea, Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { api } from "~/trpc/react";
import { ContactFormSchema } from "~/server/zodTypes/ContactFormTypes";
import SuccessContact from "./SuccessContact";

type ContactForm = z.infer<typeof ContactFormSchema>;

export function ContactForm(){

    const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>({
        resolver: zodResolver(ContactFormSchema)
    });

    const { isLoading, data, error, isSuccess, mutateAsync: mandarFormulario, isError } = api.contact.send.useMutation();
    const onSubmit = async (data: ContactForm) => {
        try {
            await mandarFormulario(data);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="mx-auto mt-12 max-w-lg">
            {isSuccess ? <SuccessContact {...data} /> : 
            <div className="flex flex-col rounded-xl border p-4 dark:border-gray-700 sm:p-6 lg:p-8 dark:bg-gray-800 bg-zinc-200">
              <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
                Rellene el formulario
              </h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-4 lg:gap-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                      >
                        Nombre<span className="text-red-500">*</span>
                      </label>
                      <Input
                        isRequired
                        type="text"
                        id="nombre"
                        {...register("nombre")}
                        errorMessage={errors.nombre?.message}
                        isInvalid={errors.nombre?.message ? true : false}
                        isDisabled={isLoading}
                        placeholder="Nombre"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="apellido"
                        className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                      >
                        Apellido<span className="text-red-500">*</span>
                      </label>
                      <Input
                        isRequired
                        type="text"
                        id="apellido"
                        {...register("apellido")}
                        errorMessage={errors.apellido?.message}
                        isInvalid={errors.apellido?.message ? true : false}
                        isDisabled={isLoading}
                        placeholder="Apellido"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                    <div>
                      <label
                        htmlFor="correo"
                        className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                      >
                        Correo<span className="text-red-500">*</span>
                      </label>
                      <Input
                        isRequired
                        type="email"
                        id="correo"
                        {...register("correo")}
                        errorMessage={errors.correo?.message}
                        isInvalid={errors.correo?.message ? true : false}
                        isDisabled={isLoading}
                        placeholder="Correo"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="telefono"
                        className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                      >
                        Numero de teléfono
                      </label>
                      <Input
                        type="text"
                        id="telefono"
                        {...register("telefono")}
                        errorMessage={errors.telefono?.message}
                        isDisabled={isLoading}
                        placeholder="Numero de teléfono"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                    >
                        Mensaje<span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="mensaje"
                      rows={4}
                      {...register("mensaje")}
                        errorMessage={errors.mensaje?.message}
                      isDisabled={isLoading}
                      isInvalid={errors.mensaje?.message ? true : false}
                      placeholder="Mensaje"
                      isRequired
                    ></Textarea>
                  </div>
                </div>

                <div className="mt-6 grid">
                  <Button
                    type="submit"
                    isLoading={isLoading}
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
                    className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Enviar mensaje
                  </Button>
                </div>
              </form>
            </div>
          }
          </div>
    )
}