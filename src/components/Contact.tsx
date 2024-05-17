import Link from "next/link";
import React, { forwardRef } from "react";
import { FaGithub, FaCodepen, FaAddressBook } from "react-icons/fa";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="md:px-[10rem] p-[2rem]">
      <h1 className="text-4xl font-bold mb-[2rem] font-header">Contact</h1>
      <p className="text-2xl  font-text">Want to get in touch?</p>
      <div className="flex items-center text-2xl mt-4 font-medium font-text">
        <p className="">
          {" "}
          I&apos;m currently looking for opportunies to learn and grow in the
          web development industry, my inbox is always open! If you have any
          questions or just want to say hello, please feel free to write me{" "}
          <span className="text-black dark:text-[#1dbed8] hover:text-blue-700 dark:hover:text-blue-700 font-bold">
            <Link href="mailto:stefantraciu20@gmail.com">
              {" "}
              stefantraciu20@gmail.com
            </Link>
          </span>
        </p>
      </div>
      <p className="flex flex-col items-start md:flex-row md:flex md:items-center text-2xl  font-text mt-4">
        {" "}
        Or follow me here
        <span className="flex gap-2 ml-0 mt-4  md:ml-8 md:mt-0">
          <Link href="https://github.com/trstefan" aria-label="github">
            {" "}
            <FaGithub className="text-black dark:text-white hover:cursor-pointer hover:text-blue-700 text-2xl	dark:hover:text-blue-700" />
          </Link>
          <Link href="https://codepen.io/trstefan" aria-label="codepen">
            {" "}
            <FaCodepen className="text-black dark:text-white hover:cursor-pointer hover:text-blue-700 text-2xl	dark:hover:text-blue-700" />
          </Link>
          <Link href="https://read.cv/trstef" aria-label="cv">
            {" "}
            <FaAddressBook className="text-black dark:text-white hover:cursor-pointer hover:text-blue-700 text-2xl	dark:hover:text-blue-700" />
          </Link>
        </span>
      </p>
    </div>
  );
});

Contact.displayName = "Contact";

export default Contact;
