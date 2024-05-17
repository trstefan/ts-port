import React, { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="md:px-[10rem] p-[2rem] bg-[#EDF1FA] dark:bg-[#1D2333]"
    >
      <h1 className="text-4xl font-bold mb-[2rem] font-header">My Story</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-2 text-[#04052F] dark:text-[#E8E8FD]  font-semibold font-text">
        <div>
          <p>
            Hello! I&apos;m Stefan, but you can call me Stef and I have a
            passion for crafting digital experiences on the web. My journey into
            web development began during high school when I designed my first
            website using HTML & CSS. Presently, my preferred toolkit comprises
            Next.js with React, although I remain flexible and eager to acquaint
            myself with a diverse array of technologies. My main focus is to
            transform complex challenges into user-friendly and accessible
            designs.
          </p>
        </div>
        <div>
          <p className="mt-[1rem] md:m-0 ">
            Fast-forward to the present, I hold a BSc in Computing Science.
            During my university days, I worked on various projects and honed my
            skill set, enabling me to effectively plan, test and design
            accessible solutions with ease or change approaches if needed.
          </p>
        </div>
      </div>
      <Link href="/about">
        <Button> View more</Button>
      </Link>
    </div>
  );
});

About.displayName = "About";

export default About;
