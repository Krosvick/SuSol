import { useRouter } from "next/navigation"

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
        <div className="flex flex-col justify-center items-center bg-zinc-200 px-20 py-10 rounded-lg">
            <h1 className="text-3xl font-semibold text-center">¡Gracias por contactarnos!</h1>
            <p className="text-center">Hemos recibido tu mensaje y te responderemos a la brevedad.</p>
            <div className="flex flex-col justify-center items-center mt-5">
                <p className="text-center">Nombre: {nombre}</p>
                <p className="text-center">Apellido: {apellido}</p>
                <p className="text-center">Correo: {correo}</p>
                <p className="text-center">Mensaje: {mensaje}</p>
            </div>
            <p className="text-center mt-5">Serás redirigido a la página de inicio en 5 segundos.</p>
        </div>
    )
}