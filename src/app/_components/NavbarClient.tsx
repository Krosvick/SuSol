"use client"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import { useState, useRef, useEffect} from "react";
import { UserButton } from "@clerk/nextjs";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Logo } from "./icons/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavbarClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerColor, setHeaderColor] = useState('black');
  const sectionRefs = useRef<HTMLElement[]>([]);
  const pathname = usePathname();

  useEffect(() => {
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
    }, { threshold: 0.85 });

    sectionRefs.current.forEach((section) => observer.observe(section));

    return () => {
      sectionRefs.current.forEach((section) => observer.unobserve(section));
    };
  }, [pathname]);
  const textColorClass = headerColor === 'white' ? 'text-white' : 'text-black';

  return (
    <Navbar id="client-navbar" className={`py-5 ${textColorClass}`} classNames={{
        wrapper:"lg:px-3 max-w-full",
        base:"bg-transparent dark:text-white backdrop-saturate-100 backdrop-blur-none fixed",
    }}>
        <NavbarContent>
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
            />
            <NavbarBrand className="flex gap-3">
                <Logo className="size-24"/>
                <p className="font-semibold text-inherit tracking-wider text-3xl">SuSol</p>
            </NavbarBrand>
        </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="nosotros">
            Nosotros
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/" aria-current="page">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contacto">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:hidden">
            xD
        </NavbarItem>
        <NavbarItem>
            <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="pt-10"> 
        <NavbarMenuItem>
          <Link href="/">Inicio</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/nosotros">Nosotros</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/contacto">Contacto</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}