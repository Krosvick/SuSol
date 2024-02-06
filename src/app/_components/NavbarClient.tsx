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
    <Navbar id="client-navbar" className={`py-5 ${textColorClass}`} classNames={{
        wrapper:"lg:px-3 max-w-full",
        base:"bg-transparent dark:text-white backdrop-saturate-100 fixed",
    }} 
    isMenuOpen={isMenuOpen}
    onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
            />
            <li>
              <Link href="/">
              <NavbarBrand className="flex gap-3">
                <div className="w-max relative">
                  <div className="absolute inset-12 bg-white bg-opacity-90 rounded-full z-10"></div>
                  <div className="relative z-20">
                    <Image src="/logowebp.webp" alt="SuSol" width={200} height={200} priority={true}/>
                  </div>
                </div>
                <div className="flex flex-col">
                  <h1 className="font-semibold text-inherit tracking-widest text-3xl">SuSol</h1>
                  <span className="text-xs">Sustentabilidad Solar</span>
                </div>
              </NavbarBrand>
              </Link>
            </li>
        </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map(item => (
          <NavbarItem key={item.href} isActive={pathname === item.href}>
            <Link color="foreground" href={item.href}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:hidden">
            xD
        </NavbarItem>
        <NavbarItem className="lg:pr-3">
            <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="mt-8"> 
        {navItemsResponsive.map(item => (
          <NavbarMenuItem key={item.href} className="py-2 text-xl">
            <CloseMenuLink href={item.href}>{item.label}</CloseMenuLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

