import React from "react";
import Link from "next/link";
import { FaGithub, FaCodepen, FaAddressBook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="sticky md:static bottom-0 left-0 z-20 w-full p-4   bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-[#020817] dark:border-gray-600">
      <div className="flex flex-col gap-2 md:flex-row md:text-lg text-sm">
        <span className=" text-black  dark:text-white font-text font-semibold">
          © 2024 Stefan Traciu
        </span>
        <div className="mt-[0.5rem] md:mt-0 flex gap-2 md:hidden ">
          <Link href="https://github.com/trstefan" aria-label="github">
            {" "}
            <FaGithub className="h-8 w-4 text-black dark:text-white hover:cursor-pointer hover:text-blue-700 dark:hover:text-blue-700" />
          </Link>
          <Link href="https://codepen.io/trstefan" aria-label="codepen">
            <FaCodepen className="h-8 w-4 text-black dark:text-white hover:cursor-pointer hover:text-blue-700 dark:hover:text-blue-700" />
          </Link>
          <Link href="https://read.cv/trstef" aria-label="cv">
            <FaAddressBook className="h-8 w-4 text-black dark:text-white hover:cursor-pointer hover:text-blue-700 dark:hover:text-blue-700" />
          </Link>
          <Link href="mailto:stefantraciu20@.gmail" aria-label="mail">
            <IoMail className="h-8 w-4 text-black dark:text-white hover:cursor-pointer hover:text-blue-700 dark:hover:text-blue-700" />
          </Link>
        </div>
      </div>
      <ul className="flex flex-wrap items-center mt-3 md:text-lg text-sm font-medium text-black dark:text-white sm:mt-0">
        <li>
          <Link
            href="/"
            className="me-4 md:me-6 hover:text-blue-700 dark:hover:text-blue-700 font-text font-semibold"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="me-4 md:me-6 hover:text-blue-700 dark:hover:text-blue-700 font-text font-semibold"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="me-4 md:me-6 hover:text-blue-700 dark:hover:text-blue-700 font-text font-semibold"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/tools"
            className="me-4 md:me-6 hover:text-blue-700 dark:hover:text-blue-700 font-text font-semibold"
          >
            Tools
          </Link>
        </li>
      </ul>
    </footer>
  );
};
