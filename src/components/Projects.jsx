import React from "react";
import "../styles/Projects.css";
import "../styles/index.css";
import ProjectDetailContainer from "./ProjectDetailContainer";
import memerImg from "../assets/memer.png";
import gssocStatsGenImg from "../assets/gssoc-stats-gen.png";
import palettePixImg from "../assets/palettepix.png";
import blogImg from "../assets/blog.png";
import frmtImg from "../assets/frmt.png";
import marksmithImg from "../assets/marksmithjs.png";
import ezAccessImg from "../assets/ezAccess.png";
import nvimRafceImg from "../assets/nvim-rafce.png";
import statgenImg from "../assets/statgen.png";
import keymulateImg from "../assets/keymulate.png";

const PROJECTS = [
  {
    name: "Memer",
    description: "One stop meme workshop, made with NextJS and TypeScript",
    img: memerImg,
    website: "https://memer-three.vercel.app/",
    repo: "https://github.com/halfloafhq/memer",
  },
  {
    name: "GSSoC Stats Gen",
    description:
      "Generate your GSSoC stats in seconds. A NextJS webapp to help community members by automating editing from a template",
    img: gssocStatsGenImg,
    website: "https://gssoc-stats-gen.vercel.app/",
    repo: "https://github.com/Shobhit-Nagpal/gssoc-stats-gen",
  },
  {
    name: "Marksmith",
    description:
      "Marksmith is a npm library to convert Markdown strings to HTML, written in TypeScript.",
    img: marksmithImg,
    website: "https://www.npmjs.com/package/marksmithjs",
    repo: "https://github.com/Shobhit-Nagpal/marksmith",
  },
  {
    name: "Palette Pix",
    description:
      "A tool where designers and developers can quickly test out color palettes. Users can change to palettes of their choice or get a random palette.",
    img: palettePixImg,
    website: "https://shobhit-nagpal.github.io/palettepix/",
    repo: "https://github.com/Shobhit-Nagpal/palettepix",
  },
  {
    name: "Keymulate",
    description: "A mechanical keyboard emulator written in Go.",
    img: keymulateImg,
    website: "",
    repo: "https://github.com/halfloafhq/keymulate",
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
    name: "Personal Blog",
    description:
      "A blog for personal thoughts, made using MERN stack, hosted on Vercel.",
    img: blogImg,
    website: "https://blog.shobhitnagpal.com/",
    repo: "https://github.com/Shobhit-Nagpal/blogv2",
  },
  {
    name: "EZAccess",
    description:
      "A browser extension to quickly access your details built with React and TypeScript.",
    img: ezAccessImg,
    website:
      "https://chromewebstore.google.com/detail/ezaccess/ojpbcmkpgmfenjbaplkgonhlkgkmhbki?authuser=0&hl=en",
    repo: "https://github.com/Shobhit-Nagpal/ezaccess",
  },
  {
    name: "Nvim-Rafce",
    description:
      "Nvim-Rafce is a Neovim plugin made in Lua to write boilerplate React component code with one command.",
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
];

const Projects = () => {
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
        {PROJECTS.map((project, index) => {
          return <ProjectDetailContainer project={project} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
