import React, { forwardRef } from "react";
import Link from "next/link";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { Button } from "./ui/button";

const projectsList = [
  {
    name: "WanderLog",
    description:
      "WanderLog will serve as a personal travel diary, helping me document my adventures and plan upcoming trips with ease.",
    github: "https://github.com/trstefan/wanderlog",
    demo: "https://wanderlog-self.vercel.app/",
    src: "wanderlog-homepage.png",
    tags: ["Typescript", "NextJS", "TailwindCSS", "Postgres", "Prisma"],
  },
  {
    name: "Tranquil Tones",
    description:
      " Enhance Relaxation, Improve Sleep and Boost Focus with Soothing Audio ",
    github: "https://github.com/trstefan/tranquil-tones",
    demo: "https://tranquil-tones.vercel.app/",
    src: "tranquiltones.webp",
    tags: ["Typescript", "NextJS", "TailwindCSS"],
  },

  {
    name: "Pokedex",
    description:
      "React.js web app that fetches all the Pokemon data and displays it in a friendly way. You can search for a specific Pokemon, or you can sort them by type, region or name.",
    github: "https://github.com/trstefan/react-pokedex",
    demo: "https://react-pokedex-peach-nine.vercel.app/",
    src: "pokemon.jpg",
    tags: ["React", "Axios", "CSS"],
  },
  {
    name: "Rick and Morty",
    description:
      "React.js web app that displays details of characters from the Rick and Morty show, details about the episodes and locations of the tv series",
    github: "https://github.com/trstefan/rick-and-mortyapi",
    demo: "https://rick-and-mortyapi.vercel.app/",
    src: "rickandmorty.jpg",
    tags: ["React", "Axios", "TailwindCSS"],
  },
];

interface Project {
  name: string;
  description: string;
  github: string;
  demo: string;
  src: string;
  tags: string[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Card className="md:max-w-xl p-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <CardBody className="overflow-visible flex justify-center items-center">
        <Image
          alt="Card background"
          className="object-cover w-full h-96 rounded-lg"
          src={`/projects/${project.src}`}
        />
      </CardBody>

      <CardHeader className="pb-0 pt-2 px-3 flex flex-col items-start">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <p className="font-bold text-xl mb-[1rem]">{project.name}</p>
            <div className="flex gap-2">
              <Link href={project.github} aria-label="githublink">
                {" "}
                <FaGithub className="text-black dark:text-white hover:cursor-pointer hover:text-blue-700 md:text-4xl text-2xl dark:hover:text-blue-700" />
              </Link>
              <Link href={project.demo} aria-label="demo">
                {" "}
                <BiWorld className="text-black dark:text-white hover:cursor-pointer hover:text-blue-700 md:text-4xl text-2xl dark:hover:text-blue-700" />
              </Link>
            </div>
          </div>
          <p className="font-semibold font-text mb-[1rem]">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="font-bold font-text">
              {tag}
            </span>
          ))}
        </div>
      </CardHeader>
    </Card>
  );
};

ProjectCard.displayName = "ProjectCard";

const Work = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section>
      <div ref={ref} className="md:px-[10rem] p-[2rem]">
        <h1 className="text-4xl font-bold font-header">Project Showcase</h1>
        <p className="text-2xl font-semibold font-text">
          Glimpses into some of my projects{" "}
        </p>
      </div>
      <div className="flex flex-wrap gap-8 px-[4rem] justify-center">
        {projectsList.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
      <div className="flex justify-center mt-[2rem]">
        <Link href="./projects">
          <Button>View more</Button>
        </Link>
      </div>
    </section>
  );
});

Work.displayName = "Work";

export default Work;
