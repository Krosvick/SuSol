"use client"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Logo } from "./icons/Logo";
import Link from "next/link";
export function NavbarClient() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="py-5" classNames={{
        wrapper:"lg:px-3 max-w-full",
        base:"bg-transparent text-white backdrop-saturate-100 backdrop-blur-none fixed",
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
          <Link color="foreground" href="#">
            Nosotros
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
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
          <Link href="/about">Nosotros</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/Contacto">Contacto</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}