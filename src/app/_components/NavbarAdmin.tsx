"use client"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import { useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Logo } from "./icons/Logo";

export function NavbarAdmin() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="py-5" classNames={{
        wrapper:"lg:px-3 max-w-full",
        base:"bg-transparent backdrop-saturate-100 backdrop-blur-none",
    }}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo className="size-24"/>
          <p className="font-semibold text-inherit tracking-wider text-3xl">SuSol</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/energia-solar-fotovoltaica">
            Paneles Solares
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/energia-solar-termica">
            Termos Solares
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/nosotros">
            Nosotros
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button as={Link} color="primary" href="/contacto" variant="flat">
            Cotización Gratuita
          </Button>
        </NavbarItem>
        <NavbarItem>
            <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}