import React from "react";
import '../styles/About.css';
import '../styles/index.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaReact, FaHtml5, FaCss3, FaNpm } from "react-icons/fa";
import { BiLogoNodejs, BiLogoFirebase, BiLogoGit, BiLogoMongodb, BiLogoDocker, BiLogoGoLang } from "react-icons/bi";
import { SiExpress } from "react-icons/si";

const About = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };


    return (
        <div className="about">
            <div className="about_info">
                <h1><span>01. </span>About</h1> <br/>
                <p>Hey! I'm Shobhit (which you probably knew). I started off my career in video editing and motion design. While working in design and contributing to products, I thought, "Why not try to build products on my own?" which led me to learn code. The Internet always intrigued me so I chose to get into web development and started learning through The Odin Project.<br/> <br/>

                Currently, I am a fullstack  web developer, beginning my journey as a front-end developer. I am looking to work at companies (preferably product based) and contribute to help make people's lives easier.<br/> <br/>

                In my free time, I play chess, think about life (because why not) and sometimes make Lottie animations :&#10630;
                </p>
            </div>

            <div className="about_skills_carousel">
                <div className="carousel-container">
                        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1500} removeArrowOnDeviceType={["tablet", "mobile"]} itemClass="carousel-item-padding-40-px" containerClass="carousel-container">
                            <FaReact />
                            <BiLogoNodejs />
                            <SiExpress />
                            <BiLogoMongodb />
                            <FaHtml5 />
                            <FaCss3 />
                            <FaNpm />
                            <BiLogoFirebase />
                            <BiLogoGit />
                            <BiLogoDocker />
                            <BiLogoGoLang />
                        </Carousel>
                    </div>
            </div>
        </div>
    )
}

export default About;
