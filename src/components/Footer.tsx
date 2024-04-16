import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="sticky md:static bottom-0 left-0 z-20 w-full p-4  bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <Link href="" className="hover:underline">
          Flowbite™
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link href="/about" className="hover:underline me-4 md:me-6">
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:underline me-4 md:me-6">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/tools" className="hover:underline me-4 md:me-6">
            Tools
          </Link>
        </li>
      </ul>
    </footer>
  );
};
