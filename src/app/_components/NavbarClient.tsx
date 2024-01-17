"use client"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import { useState, useRef, useEffect} from "react";
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
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/', label: 'Inicio' },
    { href: '/contacto', label: 'Contacto' },
  ];
  const navItemsResponsive = [
    { href: '/', label: 'Inicio' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <Navbar id="client-navbar" className={`py-5 ${textColorClass}`} classNames={{
        wrapper:"lg:px-3 max-w-full",
        base:"bg-transparent dark:text-white backdrop-saturate-100 backdrop-blur-none fixed",
    }} 
    isMenuOpen={isMenuOpen}
    onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
            />
            <Link href="/">
            <NavbarBrand className="flex gap-3">
                <Logo className="size-24"/>
                <p className="font-semibold text-inherit tracking-wider text-3xl">SuSol</p>
            </NavbarBrand>
            </Link>
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
      <NavbarMenu className="pt-10"> 
        {navItemsResponsive.map(item => (
          <NavbarMenuItem key={item.href}>
            <CloseMenuLink href={item.href}>{item.label}</CloseMenuLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

