"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import styles from "./style.module.css";
import Link from "next/link";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },

  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const projects = [
  {
    title: "Portoflio",
    demo: "https://tstefan.vercel.app/",
    color: "#b8c6b3",
    src: "port.jpg",
    tags: ["Typescript", "NextJS", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "WanderLog",
    demo: "https://wanderlog-self.vercel.app/",
    color: "#04052e",
    src: "wanderlog-homepage.png",
    tags: ["Typescript", "NextJS", "TailwindCSS", "Postgres", "Prisma"],
  },
  {
    title: "Pokedex",
    src: "pokemon.jpg",
    color: "#29339B",
    tags: ["React", "CSS", "Vite", "PokéAPI"],
    demo: "https://react-pokedex-peach-nine.vercel.app",
  },
  {
    title: "Tranquil Tones",
    color: "#a7c957",
    demo: "https://tranquil-tones.vercel.app/",
    src: "tranquiltones.webp",
    tags: ["Typescript", "NextJS", "TailwindCSS"],
  },

  {
    title: "Rick And Morty Wiki",
    src: "rickandmorty.jpg",
    color: "#FF3A20",
    tags: ["React", "CSS", "Rick and Morty API"],
    demo: "https://rick-and-mortyapi.vercel.app/",
  },

  {
    title: "VS Code Portoflio",
    src: "vsport.jpg",
    color: "#CAF7E2",
    tags: ["Next.js", "CSS Modules", "NotionAPI", "Vercel"],
    demo: "https://stportfolio.vercel.app/",
  },

  {
    title: "HTML-CSS-JS snippets",
    src: "htmljscss.jpg",
    color: "#A53860    ",
    tags: ["HTML", "CSS", "Javascript"],
    demo: "https://trstefan.github.io/html-css-js-snippets/",
  },
  {
    title: "Frontend Mentor Tracker",
    src: "fmt.jpg",
    color: "#832161",
    tags: ["HTML", "CSS", "Javascript"],
    demo: "https://trstefan.github.io/frontendmentortracker/",
  },
  {
    title: "Sticky Notes",
    src: "notes.jpg",
    color: "#F49D37",
    tags: ["React", "CSS"],
    demo: "https://trstefan.github.io/react-notes/",
  },
];

interface Project {
  title: string;
  src: string;
  color: string;
  demo: string;
  tags: string[];
}

const Modal: React.FC<{
  modal: { active: boolean; index: number };
  projects: Project[];
}> = ({ modal, projects }) => {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    //Move Container

    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });

    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    //Move cursor

    let xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });

    let yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    //Move cursor label

    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });

    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className={styles.modalContainer}
      >
        <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
          {projects.map((project, index) => {
            const { src, color } = project;

            return (
              <div
                className={styles.modal}
                style={{ backgroundColor: color }}
                key={`modal_${index}`}
              >
                <img
                  src={`/projects/${project.src}`}
                  width={300}
                  height={200}
                  alt="image"
                />
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        ref={cursor}
        className={styles.cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      ></motion.div>

      <motion.div
        ref={cursorLabel}
        className={styles.cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        View
      </motion.div>
    </>
  );
};

const ProjectCard: React.FC<{
  project: Project;
  index: number;
  setModal: React.Dispatch<
    React.SetStateAction<{ active: boolean; index: number }>
  >;
}> = ({ project, index, setModal }) => {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <Link href={project.demo}>
        <h2 className=" m-0 font-normal	">{project.title}</h2>
      </Link>

      <p>
        {project.tags.map((tag) => (
          <span key={tag} className="font-bold font-text mr-2">
            {tag}
          </span>
        ))}
      </p>
    </div>
  );
};

const Projects: React.FC = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="p-[2rem] flex flex-col"
    >
      <div className="md:mb-[10rem]">
        {" "}
        <h1 className="text-2xl font-bold font-header">Projects</h1>
      </div>

      <div className={styles.main}>
        <div className={styles.body}>
          {projects.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                index={index}
                project={project}
                setModal={setModal}
              />
            );
          })}
        </div>
        <Modal modal={modal} projects={projects} />
      </div>
    </motion.div>
  );
};

export default Projects;
