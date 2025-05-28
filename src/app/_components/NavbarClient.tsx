"use client"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import { useState, useRef, useEffect} from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Logo } from "./icons/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function NavbarClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerColor, setHeaderColor] = useState('black');
  const sectionRefs = useRef<HTMLElement[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    setHeaderColor('black');
    sectionRefs.current = Array.from(document.querySelectorAll('section'));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const rect = entry.target.getBoundingClientRect();
        if (entry.isIntersecting && rect.top >= 0) {
          const color = entry.target.getAttribute('data-header-color');
          if (color) {
            setHeaderColor(color);
          }
          else {
            setHeaderColor('black');
          }
        }
      });
    }, { 
      root: null,
      threshold: 1,
      rootMargin: '0px',
     });

    sectionRefs.current.forEach((section) => observer.observe(section));

    return () => {
      sectionRefs.current.forEach((section) => observer.unobserve(section));
    };
  }, [pathname]);
  const textColorClass = headerColor === 'white' ? 'text-white' : 'text-black';

  const CloseMenuLink = ({ href, children } : { href: string, children: React.ReactNode }) => (
    <div onClick={() => setIsMenuOpen(false)}>
      <Link href={href}>{children}</Link>
    </div>
  );
  const navItems = [
    { href: '/energia-solar-fotovoltaica', label: 'Energía Fotovoltaica' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/', label: 'Inicio' },
    { href: '/contacto', label: 'Contacto' },
    { href: '/energia-solar-termica', label: 'Energía Térmica' },
  ];
  const navItemsResponsive = [
    { href: '/', label: 'Inicio' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/contacto', label: 'Contacto' },
    { href: '/energia-solar-fotovoltaica', label: 'Energía Solar Fotovoltaica' },
    { href: '/energia-solar-termica', label: 'Energía Solar Térmica' }, 
  ];

  return (
    <Navbar 
      id="client-navbar" 
      className={`py-3 ${textColorClass}`} 
      classNames={{
        wrapper: "lg:px-6 max-w-full",
        base: "bg-transparent dark:text-white backdrop-saturate-100 fixed z-50",
      }} 
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
    >
      {/* Contenido izquierdo - Logo y toggle menu */}
      <NavbarContent justify="start" className="gap-4 flex-1 basis-0">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <Link href="/" className="flex items-center">
          <NavbarBrand className="flex items-center gap-3">
            <div className="relative w-12 h-12 lg:w-16 lg:h-16">
              <div className="absolute inset-0 bg-white bg-opacity-90 rounded-full"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <Image 
                  src="/logowebp.webp" 
                  alt="SuSol" 
                  width={100} 
                  height={100} 
                  className="lg:w-100 lg:h-100"
                  priority={true}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="font-semibold text-inherit tracking-widest text-xl lg:text-2xl">SuSol</h1>
              <span className="text-xs lg:text-sm opacity-80">Sustentabilidad Solar</span>
            </div>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      {/* Contenido central - Navegación principal */}
      <NavbarContent className="hidden lg:flex gap-6" justify="center">
        {navItems.map(item => (
          <NavbarItem key={item.href} isActive={pathname === item.href}>
            <Link 
              href={item.href}
              className={`font-medium hover:text-yellow-400 transition-colors ${
                pathname === item.href ? 'text-yellow-400' : ''
              }`}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Contenido derecho - Theme switcher */}
      <NavbarContent justify="end" className="flex-1 basis-0">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      {/* Menu móvil */}
      <NavbarMenu className="mt-8 pt-6"> 
        {navItemsResponsive.map(item => (
          <NavbarMenuItem key={item.href} className="py-3">
            <CloseMenuLink href={item.href}>
              <span className={`text-xl font-medium hover:text-yellow-400 transition-colors ${
                pathname === item.href ? 'text-yellow-400' : ''
              }`}>
                {item.label}
              </span>
            </CloseMenuLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

