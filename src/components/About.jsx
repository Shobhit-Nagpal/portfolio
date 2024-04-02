import React from "react";
import "../styles/About.css";
import "../styles/index.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaReact, FaHtml5, FaCss3, FaNpm } from "react-icons/fa";
import {
  BiLogoNodejs,
  BiLogoFirebase,
  BiLogoGit,
  BiLogoMongodb,
  BiLogoDocker,
  BiLogoGoLang,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoJavascript,
} from "react-icons/bi";
import { SiExpress, SiSupabase, SiNeovim } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";

const About = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="about">
      <div className="about_info">
        <h1>
          <span>01. </span>About
        </h1>{" "}
        <br />
        <p>
          Hey! I'm Shobhit (you probably knew that though). I’m all about
          creating stuff that I find cool or that sparks my curiosity.
        </p>
        <br />
        <p>
          I'm a full stack developer who loves engineering. On the side, I dive
          into the exciting worlds of blockchain and AI, constantly
          experimenting with different tech stacks. I enjoy building tools and
          plugins that simplify tasks.
        </p>
        <br />
        <p>
          I'm always on the lookout for opportunities to collaborate with
          brilliant minds and learn from those smarter than me. In my free time,
          I’m usually found playing chess, watching some Youtube, or just
          pondering life, because why not?
        </p>
        <br />
        <p>P.S: I use Neovim, by the way.</p>
      </div>

      <div className="about_skills_carousel">
        <div className="carousel-container">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1500}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
          >
            <BiLogoJavascript />
            <BiLogoTypescript />
            <FaReact />
            <TbBrandNextjs />
            <BiLogoNodejs />
            <SiNeovim />
            <SiExpress />
            <BiLogoMongodb />
            <SiSupabase />
            <FaHtml5 />
            <FaCss3 />
            <FaNpm />
            <BiLogoFirebase />
            <BiLogoGit />
            <BiLogoDocker />
            <BiLogoGoLang />
            <BiLogoTailwindCss />
            <IoLogoVercel />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default About;
