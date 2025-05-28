"use client";
import { useState } from "react";
import { getWhatsAppUrl } from "~/lib/contact-config";

export function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Función para manejar el click
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    const url = getWhatsAppUrl();
    
    // Asegurar que se abra en una nueva ventana
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleWhatsAppClick}
        aria-label="Contactar por WhatsApp"
        style={{ pointerEvents: 'auto' }}
      >
        {/* Texto que aparece al hacer hover */}
        <div className={`overflow-hidden transition-all duration-300 ${isHovered ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'}`}>
          <div className="px-4 py-3 whitespace-nowrap">
            <span className="text-sm font-medium">¡Hablemos por WhatsApp!</span>
          </div>
        </div>
        
        {/* Icono de WhatsApp */}
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 group-hover:bg-green-600 transition-colors duration-300">
          <svg 
            className="w-7 h-7 text-white" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </div>
      </a>
      
      {/* Animación de pulso */}
      <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20 pointer-events-none"></div>
    </div>
  );
} 