"use client";
import { Input, Textarea, Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { api } from "~/trpc/react";
import { ContactFormSchema } from "~/server/zodTypes/ContactFormTypes";
import { track } from "@vercel/analytics/react";
import { useState } from "react";

type ContactForm = z.infer<typeof ContactFormSchema>;

interface FriendlyContactFormProps {
  compact?: boolean;
  title?: string;
  subtitle?: string;
}

export function FriendlyContactForm({ 
  compact = false, 
  title = "¡Hablemos de tu proyecto!", 
  subtitle = "Déjanos tus datos y te contactaremos para una cotización gratuita" 
}: FriendlyContactFormProps) {
  const [showSuccess, setShowSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
    resolver: zodResolver(ContactFormSchema)
  });

  const { isLoading, mutateAsync: mandarFormulario } = api.contact.send.useMutation({
    onSuccess: () => {
      setShowSuccess(true);
      reset();
      setTimeout(() => setShowSuccess(false), 5000);
    }
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      track("friendly contact form submit");
      await mandarFormulario(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (showSuccess) {
    return (
      <div className={`${compact ? 'p-6' : 'p-8'} bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200 dark:border-green-700 text-center`}>
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-2">
          ¡Mensaje enviado con éxito!
        </h3>
        <p className="text-green-600 dark:text-green-300">
          Nos pondremos en contacto contigo muy pronto para ayudarte con tu proyecto de energía solar.
        </p>
      </div>
    );
  }

  return (
    <div className={`${compact ? 'p-6' : 'p-8'} bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700`}>
      <div className="text-center mb-6">
        <h3 className={`${compact ? 'text-xl' : 'text-2xl'} font-bold text-gray-800 dark:text-white mb-2`}>
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
          <Input
            type="text"
            label="Nombre"
            placeholder="Tu nombre"
            {...register("nombre")}
            errorMessage={errors.nombre?.message}
            isInvalid={!!errors.nombre?.message}
            isDisabled={isLoading}
            variant="bordered"
            classNames={{
              input: "text-sm",
              label: "text-sm font-medium"
            }}
          />
          
          <Input
            type="text"
            label="Apellido"
            placeholder="Tu apellido"
            {...register("apellido")}
            errorMessage={errors.apellido?.message}
            isInvalid={!!errors.apellido?.message}
            isDisabled={isLoading}
            variant="bordered"
            classNames={{
              input: "text-sm",
              label: "text-sm font-medium"
            }}
          />
        </div>

        <Input
          type="email"
          label="Correo electrónico"
          placeholder="tu@email.com"
          {...register("correo")}
          errorMessage={errors.correo?.message}
          isInvalid={!!errors.correo?.message}
          isDisabled={isLoading}
          variant="bordered"
          classNames={{
            input: "text-sm",
            label: "text-sm font-medium"
          }}
        />

        <Input
          type="tel"
          label="Teléfono (opcional)"
          placeholder="912345678"
          {...register("telefono")}
          errorMessage={errors.telefono?.message}
          isInvalid={!!errors.telefono?.message}
          isDisabled={isLoading}
          variant="bordered"
          classNames={{
            input: "text-sm",
            label: "text-sm font-medium"
          }}
        />

        <Textarea
          label="Cuéntanos sobre tu proyecto"
          placeholder="Describe tu proyecto de energía solar, ubicación, tipo de propiedad, etc."
          {...register("mensaje")}
          errorMessage={errors.mensaje?.message}
          isInvalid={!!errors.mensaje?.message}
          isDisabled={isLoading}
          variant="bordered"
          minRows={compact ? 3 : 4}
          classNames={{
            input: "text-sm",
            label: "text-sm font-medium"
          }}
        />

        <Button
          type="submit"
          isLoading={isLoading}
          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
          size="lg"
        >
          {isLoading ? "Enviando..." : "Solicitar Cotización Gratuita"}
        </Button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          🔒 Tus datos están seguros. No compartimos información personal.
        </p>
      </div>
    </div>
  );
} 