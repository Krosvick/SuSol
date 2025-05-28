"use client"

interface ScrollArrowProps {
  targetSectionIndex: number;
  className?: string;
  arrowColor?: string;
  hoverColor?: string;
}

export function ScrollArrow({ 
  targetSectionIndex, 
  className = "", 
  arrowColor = "text-gray-600 dark:text-gray-400",
  hoverColor = "hover:text-yellow-400"
}: ScrollArrowProps) {
  
  const scrollToSection = () => {
    const sections = document.querySelectorAll('.snap-section');
    const targetSection = sections[targetSectionIndex];
    
    if (targetSection) {
      targetSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className={`absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 ${className}`}>
      <button 
        onClick={scrollToSection}
        className="scroll-arrow cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 rounded-full p-2 transition-all duration-600 hover:scale-110"
        aria-label="Ir a la siguiente sección"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          height="24" 
          width="24" 
          viewBox="0 0 448 512" 
          className={`${arrowColor} ${hoverColor} transition-colors`}
        >
          <path 
            fill="currentColor" 
            d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
          />
        </svg>
      </button>
    </div>
  );
} 