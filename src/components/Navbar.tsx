import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { ModeToggle } from "@/components/mode-toggle";
import { CommandDialogDemo } from "@/components/command-box";

export default function NavApp() {
  return (
    <Navbar className="md:px-[10rem] px-4 py-2">
      <NavbarBrand>
        <Link href="/">
          <Image src={`logo.svg`} width="64" height="64" alt="logo" />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/about">
            <p className="font-text font-semibold hover:cursor-pointer hover:text-blue-700">
              About
            </p>
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/projects" aria-current="page">
            <p className="font-text font-semibold hover:cursor-pointer hover:text-blue-700">
              Projects
            </p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/tools">
            <p className="font-text font-semibold hover:cursor-pointer hover:text-blue-700">
              Tools
            </p>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ModeToggle />
        </NavbarItem>
        <NavbarItem>
          <CommandDialogDemo />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
