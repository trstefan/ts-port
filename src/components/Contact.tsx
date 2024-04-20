import React, { forwardRef } from "react";
import { FiArrowDownLeft } from "react-icons/fi";
import { FaGithub, FaCodepen, FaAddressBook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="md:px-[10rem] p-[2rem]">
      <h1 className="text-4xl font-bold mb-[2rem] font-header">Contact</h1>
      <p className="text-2xl font-semibold font-text">Want to get in touch?</p>
      <div className="flex items-center text-2xl mt-[1rem] font-semibold font-text">
        <p>Write me at email or you can find me on the following platforms</p>
        <FiArrowDownLeft className="ml-2 text-black dark:text-white text-4xl hidden md:block" />
      </div>
      <span className="flex gap-2 mt-[1rem]">
        <FaGithub className="text-black dark:text-white hover:cursor-pointer hover:text-blue-700 text-4xl	dark:hover:text-blue-700" />
        <FaCodepen className="text-black dark:text-white hover:cursor-pointer hover:text-blue-700 text-4xl	dark:hover:text-blue-700" />
        <IoMail className="text-black dark:text-white hover:cursor-pointer hover:text-blue-700 text-4xl	dark:hover:text-blue-700" />
        <FaAddressBook className="text-black dark:text-white hover:cursor-pointer hover:text-blue-700 text-4xl	dark:hover:text-blue-700" />
      </span>
    </div>
  );
});

Contact.displayName = "Contact";

export default Contact;
