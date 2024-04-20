"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";

import styles from "./style.module.css";

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
    title: "Project 1",
    src: "https://images.unsplash.com/photo-1713245294954-c5805efcd5da?q=80&w=1463&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#000000",
    tags: ["React", "CSS", "Vite", "Api"],
  },

  {
    title: "Project 2",
    src: "https://images.unsplash.com/photo-1713245294954-c5805efcd5da?q=80&w=1463&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#8C8C8C",
    tags: ["React", "CSS", "Vite", "Api"],
  },

  {
    title: "Project 3",
    src: "https://images.unsplash.com/photo-1713245294954-c5805efcd5da?q=80&w=1463&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#EFE8D3",
    tags: ["React", "CSS", "Vite", "Api"],
  },

  {
    title: "Project 4",
    src: "https://images.unsplash.com/photo-1713245294954-c5805efcd5da?q=80&w=1463&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#706D63",
    tags: ["React", "CSS", "Vite", "Api"],
  },
];

interface Project {
  title: string;
  src: string;
  color: string;
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
                <img src={src} width={300} height={200} alt="image" />
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
      <h2 className="font-[60px] m-0 font-normal	">{project.title}</h2>
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
    <div className="p-[2rem] flex flex-col">
      <div className="md:mb-[10rem]">
        {" "}
        <h1 className="text-2xl font-bold font-text ">Projects</h1>
      </div>

      <main className={styles.main}>
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
      </main>
    </div>
  );
};

export default Projects;
