import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

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
    name: "Pokedex",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority ",
    github: "https://www.youtube.com/watch?v=pEskP0ulPlA",
    demo: "https://www.youtube.com/watch?v=pEskP0ulPlA",
    src: "https://images.unsplash.com/photo-1713245294954-c5805efcd5da?q=80&w=1463&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React", "CSS", "Vite", "Api"],
  },
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
    name: "Pokedex",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority ",
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
    <Card className="bg-red-500 rounded-xl">
      <CardBody className="overflow-visible ">
        <Image
          alt="Card background"
          className="object-cover rounded-xl p-2"
          src={project.src}
          width={500}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{project.name}</h4>
      </CardHeader>
    </Card>
  );
};

export const Work = () => {
  return (
    <section>
      <div className="p-[2rem]">
        <h1 className="text-4xl font-bold">WORK SNIPPETS</h1>
        <p className="text-2xl">Glimpses into some of my projects </p>
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {projectsList.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
    </section>
  );
};
