"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";

import { FaHome, FaUser, FaBook, FaTools } from "react-icons/fa";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <FaUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <FaBook className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Tools",
      link: "/tools",
      icon: <FaTools className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
