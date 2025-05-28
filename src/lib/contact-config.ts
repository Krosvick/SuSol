// Configuración de contacto centralizada para SuSol
export const contactConfig = {
  whatsapp: {
    // Número de WhatsApp (reemplazar con el número real)
    // Formato para Chile: 569 + número de 8 dígitos (sin el 0 inicial)
    // Ejemplo: si el número es +56 9 1234 5678, usar "56912345678"
    // IMPORTANTE: Actualizar este número con el número real de la empresa
    number: "56930948589", // ⚠️ NÚMERO DE PRUEBA - ACTUALIZAR CON NÚMERO REAL
    message: "Hola, me interesa conocer más sobre sus servicios de energía solar"
  },
  
  instagram: {
    username: "susol_2025",
    url: "https://www.instagram.com/susol_2025?igsh=MW0yYXJodDZ4eW9ycQ=="
  },
  
  email: {
    // Email principal para contacto (se puede obtener del env)
    contact: "contacto@susol.cl"
  },
  
  // Información adicional
  responseTime: "2-4 horas",
  location: "Tarapacá, Chile"
};

// Función helper para generar URL de WhatsApp con mensaje personalizado
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage ?? contactConfig.whatsapp.message;
  const url = `https://wa.me/${contactConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
  
  // Debug en desarrollo
  if (process.env.NODE_ENV === 'development') {
  }
  
  return url;
} 