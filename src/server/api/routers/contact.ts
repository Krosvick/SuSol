import { z } from "zod";
import { transporter } from "~/server/mailer";
import { adminProcedure, createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";
import { ContactFormSchema } from "~/server/zodTypes/ContactFormTypes";
import { TRPCError } from "@trpc/server";
import { env } from "~/env";

type ContactForm = z.infer<typeof ContactFormSchema>;

interface ContactMessageFields {
  [key: string]: string;
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  mensaje: string;
}

const CONTACT_MESSAGE_FIELDS: ContactMessageFields = {
  nombre: "Nombre",
  apellido: "Apellido",
  correo: "Correo",
  telefono: "Teléfono",
  mensaje: "Mensaje",
};

/**
 * Genera el contenido del email con un diseño moderno y profesional
 * inspirado en el template de SuSol
 */
const generateEmailContent = (data: ContactForm) => {
  // Contenido de texto plano para clientes que no soportan HTML
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
    ""
  );

  // Generar filas de datos del formulario
  const formDataRows = Object.entries(data)
    .filter(([key, val]) => val && val.trim() !== '') // Filtrar campos vacíos
    .map(([key, val]) => `
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="width: 120px; vertical-align: top;">
                <span style="font-weight: 600; color: #374151; font-size: 14px;">
                  ${CONTACT_MESSAGE_FIELDS[key]}:
                </span>
              </td>
              <td style="vertical-align: top;">
                <span style="color: #1f2937; font-size: 14px; line-height: 1.5;">
                  ${key === 'mensaje' ? val.replace(/\n/g, '<br>') : val}
                </span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    `).join('');

  // Template HTML moderno y responsive
  const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="x-apple-disable-message-reformatting">
      <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
      <title>Nuevo mensaje de contacto - SuSol</title>
      <style type="text/css">
        /* Reset y estilos base */
        body, table, td { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important; }
        .ExternalClass { width: 100%; }
        .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 150%; }
        a { text-decoration: none; }
        * { color: inherit; }
        a[x-apple-data-detectors], u + #body a, #MessageViewBody a { 
          color: inherit; text-decoration: none; font-size: inherit; 
          font-family: inherit; font-weight: inherit; line-height: inherit; 
        }
        img { -ms-interpolation-mode: bicubic; }
        table:not([class^=s-]) { 
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; 
          mso-table-lspace: 0pt; mso-table-rspace: 0pt; 
          border-spacing: 0px; border-collapse: collapse; 
        }
        table:not([class^=s-]) td { border-spacing: 0px; border-collapse: collapse; }
        
        /* Responsive */
        @media screen and (max-width: 600px) {
          .w-full, .w-full > tbody > tr > td { width: 100% !important; }
          .w-24, .w-24 > tbody > tr > td { width: 96px !important; }
          .p-lg-10:not(table), .p-lg-10:not(.btn) > tbody > tr > td, .p-lg-10.btn td a { padding: 0 !important; }
          .p-3:not(table), .p-3:not(.btn) > tbody > tr > td, .p-3.btn td a { padding: 12px !important; }
          .p-6:not(table), .p-6:not(.btn) > tbody > tr > td, .p-6.btn td a { padding: 24px !important; }
          *[class*=s-lg-] > tbody > tr > td { font-size: 0 !important; line-height: 0 !important; height: 0 !important; }
          .s-4 > tbody > tr > td { font-size: 16px !important; line-height: 16px !important; height: 16px !important; }
          .s-10 > tbody > tr > td { font-size: 40px !important; line-height: 40px !important; height: 40px !important; }
          .mobile-padding { padding: 20px !important; }
        }
      </style>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f7fafc; width: 100%; min-width: 100%;">
      <!-- Contenido principal -->
      <table class="bg-light body" valign="top" role="presentation" border="0" cellpadding="0" cellspacing="0" 
             style="width: 100%; min-width: 100%; height: 100%; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; 
                    line-height: 24px; font-weight: normal; font-size: 16px; color: #000000; margin: 0; padding: 0;" 
             bgcolor="#f7fafc">
        <tbody>
          <tr>
            <td valign="top" style="line-height: 24px; font-size: 16px; margin: 0;" align="left" bgcolor="#f7fafc">
              <!-- Container -->
              <table class="container" role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                <tbody>
                  <tr>
                    <td align="center" style="line-height: 24px; font-size: 16px; margin: 0; padding: 0 16px;">
                      <!-- Email content wrapper -->
                      <table align="center" role="presentation" border="0" cellpadding="0" cellspacing="0" 
                             style="width: 100%; max-width: 600px; margin: 0 auto;">
                        <tbody>
                          <tr>
                            <td style="line-height: 24px; font-size: 16px; margin: 0;" align="left">
                              <!-- Espaciado superior -->
                              <table class="s-10 w-full" role="presentation" border="0" cellpadding="0" cellspacing="0" 
                                     style="width: 100%;" width="100%">
                                <tbody>
                                  <tr>
                                    <td style="line-height: 40px; font-size: 40px; width: 100%; height: 40px; margin: 0;" 
                                        align="left" width="100%" height="40">&nbsp;</td>
                                  </tr>
                                </tbody>
                              </table>
                              
                              <!-- Logo -->
                              <table class="ax-center" role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" 
                                     style="margin: 0 auto;">
                                <tbody>
                                  <tr>
                                    <td style="line-height: 24px; font-size: 16px; margin: 0;" align="left">
                                      <img class="w-24" src="https://www.susol.cl/logowebp.webp" 
                                           style="height: auto; line-height: 100%; outline: none; text-decoration: none; 
                                                  display: block; width: 96px; border: none;" 
                                           width="96" alt="SuSol Logo">
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              
                              <!-- Espaciado después del logo -->
                              <table class="s-10 w-full" role="presentation" border="0" cellpadding="0" cellspacing="0" 
                                     style="width: 100%;" width="100%">
                                <tbody>
                                  <tr>
                                    <td style="line-height: 40px; font-size: 40px; width: 100%; height: 40px; margin: 0;" 
                                        align="left" width="100%" height="40">&nbsp;</td>
                                  </tr>
                                </tbody>
                              </table>
                              
                              <!-- Tarjeta principal del contenido -->
                              <table class="card p-6 p-lg-10 space-y-4" role="presentation" border="0" cellpadding="0" cellspacing="0" 
                                     style="border-radius: 6px; width: 100%; overflow: hidden; border: 1px solid #e2e8f0; 
                                            border-collapse: separate !important;" bgcolor="#ffffff">
                                <tbody>
                                  <tr>
                                    <td style="line-height: 24px; font-size: 16px; width: 100%; margin: 0; padding: 40px;" 
                                        align="left" bgcolor="#ffffff" class="mobile-padding">
                                        
                                      <!-- Título principal -->
                                      <h1 style="padding: 0; font-weight: 700; font-size: 28px; line-height: 33.6px; 
                                                 margin: 0 0 24px 0; color: #1f2937;" align="left">
                                        📧 Nuevo mensaje de contacto
                                      </h1>
                                      
                                      <!-- Mensaje introductorio -->
                                      <p style="line-height: 24px; font-size: 16px; margin: 0 0 32px 0; color: #4b5563;" align="left">
                                        Has recibido un nuevo mensaje de contacto a través del formulario web de SuSol. 
                                        A continuación se muestran los detalles del cliente:
                                      </p>
                                      
                                      <!-- Información del cliente -->
                                      <table style="width: 100%; background-color: #f9fafb; border-radius: 8px; 
                                                    border: 1px solid #e5e7eb; margin-bottom: 32px;" 
                                             cellpadding="0" cellspacing="0">
                                        <tbody>
                                          <tr>
                                            <td style="padding: 24px;">
                                              <h3 style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: #1f2937;">
                                                📋 Información del cliente
                                              </h3>
                                              <table width="100%" cellpadding="0" cellspacing="0">
                                                <tbody>
                                                  ${formDataRows}
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      
                                      <!-- Información adicional -->
                                      <div style="background-color: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; 
                                                  padding: 16px; margin-bottom: 32px;">
                                        <p style="margin: 0; font-size: 14px; color: #92400e;">
                                          <strong>💡 Recordatorio:</strong> Responde a este cliente lo antes posible para mantener 
                                          un excelente servicio al cliente. El tiempo de respuesta promedio objetivo es de 2-4 horas.
                                        </p>
                                      </div>
                                      
                                      <!-- Botón de acción -->
                                      <table class="btn btn-outline-warning p-3 fw-700" role="presentation" border="0" 
                                             cellpadding="0" cellspacing="0" 
                                             style="border-radius: 6px; border-collapse: separate !important; font-weight: 700;">
                                        <tbody>
                                          <tr>
                                            <td style="line-height: 24px; font-size: 16px; border-radius: 6px; margin: 0; 
                                                       font-weight: 700;" align="center" bgcolor="transparent">
                                              <a href="https://www.susol.cl" 
                                                 style="color: #f59e0b; font-size: 16px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; 
                                                        text-decoration: none; border-radius: 6px; line-height: 20px; display: block; 
                                                        white-space: nowrap; background-color: transparent; padding: 12px; 
                                                        border: 1px solid #f59e0b; font-weight: 700;">
                                                🌐 Visitar SuSol.cl
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      
                                      <!-- Pie del mensaje -->
                                      <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
                                        <p style="margin: 0; font-size: 14px; color: #6b7280; text-align: center;">
                                          Este mensaje fue enviado automáticamente desde el formulario de contacto de 
                                          <a href="https://www.susol.cl" style="color: #f59e0b; text-decoration: none;">www.susol.cl</a>
                                        </p>
                                        <p style="margin: 8px 0 0 0; font-size: 12px; color: #9ca3af; text-align: center;">
                                          Fecha: ${new Date().toLocaleDateString('es-CL', { 
                                            weekday: 'long', 
                                            year: 'numeric', 
                                            month: 'long', 
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                          })}
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <!-- Espaciado inferior -->
              <table class="s-10 w-full" role="presentation" border="0" cellpadding="0" cellspacing="0" 
                     style="width: 100%;" width="100%">
                <tbody>
                  <tr>
                    <td style="line-height: 40px; font-size: 40px; width: 100%; height: 40px; margin: 0;" 
                        align="left" width="100%" height="40">&nbsp;</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
    </html>
  `;

  return {
    text: `Nuevo mensaje de contacto - SuSol\n\n${stringData}\n\nFecha: ${new Date().toLocaleString('es-CL')}`,
    html: htmlTemplate,
  };
};

export const contactRouter = createTRPCRouter({
    send: publicProcedure
        .input(ContactFormSchema)
        .mutation(async ({ ctx, input }) => {
            try {
                await transporter.sendMail({
                    ...generateEmailContent(input),
                    from: `"${input.nombre} ${input.apellido}" <${input.correo}>`,
                    to: env.CONTACT_EMAIL,
                    subject: `🌞 SuSol - Nuevo cliente interesado: ${input.nombre} ${input.apellido} | ${new Date().toLocaleDateString('es-CL')}`,
                });
                return input;
            }
            catch (error) {
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Error al enviar el correo',
                });
            }
        }),
});