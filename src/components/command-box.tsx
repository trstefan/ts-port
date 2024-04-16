"use client";

import * as React from "react";

import {
  FaGithub,
  FaCodepen,
  FaFile,
  FaHome,
  FaUser,
  FaBook,
  FaTools,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import Link from "next/link";

export function CommandDialogDemo() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <p className="text-sm text-muted-foreground">
        <kbd className="pointer-events-none inline-flex h-10 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-sm ">⌘</span>J
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            <Link href="/" className="">
              <CommandItem className="">
                <FaHome className="mr-2 h-4 w-4" />
                <span>Home</span>
              </CommandItem>
            </Link>
            <Link href="/about">
              <CommandItem>
                <FaUser className="mr-2 h-4 w-4" />
                About
              </CommandItem>
            </Link>
            <Link href="/projects">
              <CommandItem>
                <FaBook className="mr-2 h-4 w-4 " />
                <span>Projects</span>
              </CommandItem>
            </Link>
            <Link href="/tools">
              <CommandItem>
                <FaTools className="mr-2 h-4 w-4 " />
                <span>Tools</span>
              </CommandItem>
            </Link>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Socials">
            <CommandItem>
              <FaGithub className="mr-2 h-4 w-4" />
              <span>Github</span>
            </CommandItem>
            <CommandItem>
              <FaCodepen className="mr-2 h-4 w-4" />
              <span>Codepen</span>
            </CommandItem>
            <CommandItem>
              <IoMail className="mr-2 h-4 w-4" />
              <span>Mail</span>
            </CommandItem>
            <CommandItem>
              <FaFile className="mr-2 h-4 w-4" />
              <span>CV</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
