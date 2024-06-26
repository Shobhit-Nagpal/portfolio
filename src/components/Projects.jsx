import React, { useEffect, useState } from "react";
import "../styles/Projects.css";
import "../styles/index.css";
import ProjectDetailContainer from "./ProjectDetailContainer";
import tagImg from "../assets/tag.png";
import memoryCardImg from "../assets/memory-card.png";
import palettePixImg from "../assets/palettepix.png";
import blogImg from "../assets/blog.png";
import frmtImg from "../assets/frmt.png";
import marksmithImg from "../assets/marksmithjs.png";
import ezAccessImg from "../assets/ezAccess.png";
import nvimRafceImg from "../assets/nvim-rafce.png";
import statgenImg from "../assets/statgen.png";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([
      {
        name: "Palette Pix",
        description:
          "A tool where designers and developers can quickly test out color palettes. Users can change to palettes of their choice or get a random palette.",
        img: palettePixImg,
        website: "https://shobhit-nagpal.github.io/palettepix/",
        repo: "https://github.com/Shobhit-Nagpal/palettepix",
      },
      {
        name: "Marksmith",
        description:
        'Marksmith is a npm library to convert Markdown strings to HTML, written in TypeScript.',
        img: marksmithImg,
        website: "https://www.npmjs.com/package/marksmithjs",
        repo: "https://github.com/Shobhit-Nagpal/marksmith",
      },
      {
        name: "Statgen",
        description:
          "A static site generator for converting markdown to HTML, rewritten in Golang.",
        img: statgenImg,
        website: "",
        repo: "https://github.com/Shobhit-Nagpal/statgen",
      },
      {
        name: "Nvim-Rafce",
        description:
        'Nvim-Rafce is a Neovim plugin made in Lua to write boilerplate React component code with one command.',
        img: nvimRafceImg,
        website: "",
        repo: "https://github.com/Shobhit-Nagpal/nvim-rafce",
      },
      {
        name: "Frmt",
        description:
          "Frmt is a CLI tool written in Golang to convert file formats from your CLI.",
        img: frmtImg,
        website: "",
        repo: "https://github.com/Shobhit-Nagpal/frmt",
      },
      {
        name: "EZAccess",
        description:
          "A browser extension to quickly access your details built with React and TypeScript.",
        img: ezAccessImg,
        website: "",
        repo: "https://github.com/Shobhit-Nagpal/ezaccess",
      },
      {
        name: "Personal Blog",
        description:
          "A blog for personal thoughts, made using MERN stack, hosted on Vercel.",
        img: blogImg,
        website: "https://blog.shobhitnagpal.com/",
        repo: "https://github.com/Shobhit-Nagpal/blogv2",
      },
      {
        name: "Tag",
        description:
          "A photo tagging game where you have to find your favourite game characters. Made using React, React Router and Firebase",
        img: tagImg,
        website: "https://shobhit-nagpal.github.io/tag/",
        repo: "https://github.com/Shobhit-Nagpal/tag",
      },
      {
        name: "Memory card",
        description:
          "A memory game where you have to choose all characters only once. The charaters are from the Office! Made using React",
        img: memoryCardImg,
        website: "https://shobhit-nagpal.github.io/memory-card/",
        repo: "https://github.com/Shobhit-Nagpal/memory-card",
      },
    ]);
  }, []);
  return (
    <div className="projects">
      <div className="projects_info">
        <h1>
          <span>02. </span>
          <a id="projects" href="#projects">
            Projects
          </a>
        </h1>{" "}
        <br />
      </div>

      <div className="projects_container">
        {projects.map((project, index) => {
          return <ProjectDetailContainer project={project} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
