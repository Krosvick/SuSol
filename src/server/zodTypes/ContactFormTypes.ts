import * as z from 'zod';

export const ContactFormSchema = z.object({
    nombre: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres' }),
    apellido: z.string().min(2, { message: 'El apellido debe tener al menos 2 caracteres' }),
    correo: z.string().email({ message: 'Debe ser un correo válido' }),
    //telefonos en chile comienzan con 9 y tienen 8 digitos
    telefono: z.union([z.string().regex(/^9\d{8}$/, { message: 'Debe ser un teléfono válido' }).optional(),z.literal('')]),
    mensaje: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres' }),
}); 