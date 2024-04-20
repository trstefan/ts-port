"use client";
import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
const tools = [
  {
    name: "Figma",
    description:
      "Collaborative design platform for creating user interfaces (UIs) and prototypes. Streamlines the design workflow with easy-to-use features and real-time collaboration.",
    src: "figma.svg",
  },
  {
    name: "Notion",
    description:
      "All-in-one workspace for note-taking, project management, and knowledge base creation.  Keeps my ideas organized and accessible from anywhere.",
    src: "notion.svg",
  },
  {
    name: "Postman",
    description:
      "Powerful API client for testing and interacting with APIs.  Makes it easy to send requests, debug responses, and manage API documentation.",
    src: "postman.svg",
  },
  {
    name: "Vercel",
    description:
      "Blazing-fast deployment platform for modern web applications.  Simplifies deployment and streamlines collaboration with serverless functions.",
    src: "vercel.svg",
  },
  {
    name: "Firebase",
    description:
      "Google's backend platform for developing web and mobile applications.  Provides features like authentication, databases, hosting, and analytics, allowing developers to focus on building the app.",
    src: "firebase.svg",
  },
  {
    name: "MongoDB",
    description:
      "NoSQL document database that stores data in flexible JSON-like documents.  Offers scalability and flexibility for modern web applications.",
    src: "mongodb.svg",
  },
  {
    name: "Next.js",
    description:
      "React framework for building server-rendered and statically generated web applications.  Improves performance, SEO, and developer experience with features like routing, data fetching, and code-splitting.",
    src: "nextjs.svg",
  },
  {
    name: "SCSS",
    description:
      "Superset of CSS that adds features for easier styling.  Includes variables, mixins, and nesting for cleaner and more maintainable CSS code.",
    src: "scss.svg",
  },
  {
    name: "VS Code",
    description:
      "Powerful code editor with built-in features for development.  Offers syntax highlighting, debugging tools, and extensions for a variety of languages and frameworks.",
    src: "vscode.svg",
  },
];

export default function Tools() {
  return (
    <div className="p-[2rem]">
      <h1 className="text-2xl font-bold mb-[1.5rem] font-header">Tools</h1>
      <h2 className="text-xl font-semibold mb-[1rem] font-text">
        Some of the technologies I use — and often rely on.
      </h2>
      <div className="w-[80%] flex flex-col gap-4">
        {tools.map((tool) => {
          return (
            <motion.div
              className="flex flex-col md:flex-row w-full gap-4 p-[1rem] rounded-lg hover:cursor-pointer"
              key={tool.name}
              whileHover={{
                color: "#780000",
                backgroundColor: "#ade8f4",
                style: { cursor: "pointer" },
              }}
              initial={{ backgroundColor: "#EDF1FA" }}
            >
              <Image
                src={`/tools/${tool.src}`}
                alt=""
                width={100}
                height={100}
              />
              <div className="text-black">
                <h4 className="font-bold font-header text-xl">{tool.name}</h4>
                <p className="font-semibold font-text">{tool.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
