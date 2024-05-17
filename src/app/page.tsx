"use client";
import { useRef } from "react";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToWork = () => {
    if (workRef.current) {
      workRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <header className="md:px-[10rem] p-[2rem] md:h-[600px] w-full flex justify-center flex-col">
        <div className="items-center flex">
          <h1 className="text-4xl font-bold text-left font-text">
            Salut! Hello! Ol&aacute; ! I&apos;m Stef, a front end software
            engineer 👨‍💻 focused on crafting simple, accessible and performant
            experiences on the web
          </h1>
        </div>
        <div className="flex gap-2 mt-[1rem]">
          <Button onClick={scrollToAbout}>About</Button>
          <Button onClick={scrollToWork}>Work</Button>
          <Button onClick={scrollToContact}>Contact</Button>
        </div>
      </header>
      {/* Forward the ref to the About component */}
      <About ref={aboutRef} />
      <Work ref={workRef} />
      <Contact ref={contactRef} />
    </div>
  );
}
