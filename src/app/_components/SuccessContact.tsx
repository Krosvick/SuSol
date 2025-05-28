import { useRouter } from "next/navigation"
import { contactConfig } from "~/lib/contact-config"

type SuccessContactProps = {
    nombre: string;
    apellido: string;
    correo: string;
    mensaje: string;
}

export default function SuccessContact({ nombre, apellido, correo, mensaje }: SuccessContactProps) {
    const router = useRouter();
    setTimeout(() => {
        router.push('/');
    }, 5000);
    return (
        <div className="flex flex-col justify-center items-center bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 px-8 py-12 rounded-2xl border border-green-200 dark:border-green-700 shadow-xl">
            <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            </div>
            
            <h1 className="text-3xl font-bold text-green-800 dark:text-green-200 text-center mb-4">
                ¡Mensaje enviado con éxito!
            </h1>
            
            <p className="text-green-700 dark:text-green-300 text-center mb-8 text-lg">
                Gracias por contactarnos, <span className="font-semibold">{nombre}</span>. Hemos recibido tu mensaje y nos pondremos en contacto contigo muy pronto.
            </p>
            
            <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 mb-8 w-full max-w-md">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
                    Resumen de tu consulta:
                </h3>
                <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Nombre:</span>
                        <span className="font-medium text-gray-800 dark:text-gray-200">{nombre} {apellido}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Correo:</span>
                        <span className="font-medium text-gray-800 dark:text-gray-200">{correo}</span>
                    </div>
                    <div className="pt-2">
                        <span className="text-gray-600 dark:text-gray-400 block mb-1">Mensaje:</span>
                        <p className="text-gray-800 dark:text-gray-200 text-xs bg-gray-50 dark:bg-gray-700 p-2 rounded">
                            {mensaje.length > 100 ? `${mensaje.substring(0, 100)}...` : mensaje}
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="text-center">
                <p className="text-green-600 dark:text-green-400 text-sm mb-2">
                    ⏱️ Tiempo de respuesta promedio: {contactConfig.responseTime}
                </p>
                <p className="text-green-600 dark:text-green-400 text-sm">
                    Serás redirigido a la página de inicio en 5 segundos...
                </p>
            </div>
        </div>
    )
}