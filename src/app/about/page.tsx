"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="p-[2rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-2xl font-bold mb-[2rem] font-header">About Me</h1>
      <div className="mb-[1rem] p-[2rem] rounded-2xl bg-[#EDF1FA] dark:bg-[#1D2333] shadow-md shadow-black dark:shadow-[#1d4ed8]  md:w-3/5">
        <h1 className="text-2xl font-bold font-header">WHO ARE YOU?</h1>
        <p className="font-semibold font-text">
          Hello there! I&apos;m Stef, a web developer who grew up with the
          internet. I love crafting things that people can use and enjoy online.
        </p>
      </div>
      <div className="mb-[1rem] p-[2rem] rounded-2xl bg-[#EDF1FA] dark:bg-[#1D2333]   shadow-md shadow-black dark:shadow-[#1d4ed8]  md:w-3/5">
        <h1 className="text-2xl font-bold font-header">
          WHAT DO YOU DO PROFESSIONALLY?
        </h1>
        <p className="mb-[1rem] font-semibold font-text">
          The internet is my playground, and I love building websites and apps
          that are born and live there. I specialize in creating the visual side
          of things and making sure it is easy and enjoyable to use, but
          I&apos;m also versed in some back-end functionalities to make sure
          everything runs smoothly.
        </p>
        <p className="font-semibold font-text">
          Think of me as your digital sidekick, turning problems into simple,
          beautiful, and accessible designs that anyone can use!
        </p>
      </div>
      <div className="mb-[1rem] p-[2rem] rounded-2xl bg-[#EDF1FA] dark:bg-[#1D2333]   shadow-md shadow-black dark:shadow-[#1d4ed8]  md:w-3/5">
        <h1 className="text-2xl font-bold font-header">WHAT MAKES YOU TICK?</h1>
        <p className="mb-[1rem] font-semibold font-text">
          Challenges I can rise up to.
        </p>
        <p className="mb-[1rem] font-semibold font-text">
          I want to do good in the world. I do not feel I have yet.
        </p>
        <p className="font-semibold font-text">
          I&apos;m passionate about all kinds of projects, but the ones that
          truly energize me are those that make a positive impact. This passion
          fuels my love for creating software that helps others by making their
          lives easier, apps that brighten your day, and websites that promote
          equal rights.
        </p>
      </div>
      <div className="mb-[1rem] p-[2rem] rounded-2xl bg-[#EDF1FA] dark:bg-[#1D2333]   shadow-md shadow-black dark:shadow-[#1d4ed8]  md:w-3/5">
        <h1 className="text-2xl font-bold font-header">WHAT ELSE?</h1>
        <p className="mb-[1rem] font-semibold font-text">
          Currently working on writing better React code and learning Go and
          TypeScript.
        </p>
        <p className="mb-[1rem] font-semibold font-text">
          Online, I hang out on various platforms to get inspiration for my app
          ideas, watch anime and sports, mostly Formula 1 and football, go down
          rabbit holes of all sorts, and learn how to build things for the web.
        </p>
        <p className="font-semibold font-text">
          Offline, I am into lifting weights and calisthenics. For quite a long
          time, I have been working on becoming a master chef, of course, in my
          own kitchen. I enjoy a good walk in nature and petting my cats. Video
          games, I like those too.
        </p>
      </div>
    </motion.div>
  );
}
