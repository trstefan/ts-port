import React, { forwardRef } from "react";
import Link from "next/link";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { Button } from "./ui/button";

const projectsList = [
  {
    name: "Pokedex",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority ",
    github: "https://www.youtube.com/watch?v=pEskP0ulPlA",
    demo: "https://www.youtube.com/watch?v=pEskP0ulPlA",
    src: "https://images.unsplash.com/photo-1713245294954-c5805efcd5da?q=80&w=1463&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React", "CSS", "Vite", "Api"],
  },
  {
    name: "Pokedex2",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority ",
    github: "https://www.youtube.com/watch?v=pEskP0ulPlA",
    demo: "https://www.youtube.com/watch?v=pEskP0ulPlA",
    src: "https://images.unsplash.com/photo-1713245294954-c5805efcd5da?q=80&w=1463&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React", "CSS", "Vite", "Api"],
  },
  {
    name: "Pokedex3",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority ",
    github: "https://www.youtube.com/watch?v=pEskP0ulPlA",
    demo: "https://www.youtube.com/watch?v=pEskP0ulPlA",
    src: "https://images.unsplash.com/photo-1713245294954-c5805efcd5da?q=80&w=1463&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React", "CSS", "Vite", "Api"],
  },
  {
    name: "Pokedex4",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority sadad asdasd asdas asdasd asdasd asdasd ",
    github: "https://www.youtube.com/watch?v=pEskP0ulPlA",
    demo: "https://www.youtube.com/watch?v=pEskP0ulPlA",
    src: "https://images.unsplash.com/photo-1713245294954-c5805efcd5da?q=80&w=1463&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React", "CSS", "Vite", "Api"],
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
    <Card className="md:max-w-xl  rounded-xl ">
      <CardBody className="overflow-visible flex justify-center items-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={project.src}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-3 flex flex-col items-start">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-xl mb-[1rem]">{project.name}</h4>
            <div className="flex gap-2">
              <FaGithub className="text-black dark:text-white hover:cursor-pointer hover:text-blue-700 md:text-4xl text-2xl dark:hover:text-blue-700" />
              <BiWorld className="text-black dark:text-white hover:cursor-pointer hover:text-blue-700 md:text-4xl text-2xl dark:hover:text-blue-700" />
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

const Work = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section>
      <div ref={ref} className="md:px-[10rem] p-[2rem]">
        <h1 className="text-4xl font-bold font-header">WORK SNIPPETS</h1>
        <p className="text-2xl fonrt-semibold font-text">
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
export default Work;
