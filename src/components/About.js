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
                <p>Hey! I'm Shobhit (you probably knew that though). I develop stuff that I think is cool or to pursue my curiosity.<br />

        I'm a fullstack MERN web dev, now also exploring tech like Quantum computing, Blockchain and AR/VR. Also working with Go and looking to make cool CLI tools.

        Looking to work with people smarter than me, learn from them and add value to people's lives. <br />

        In my free time, I play chess, watch some Youtube and think about life, because why not?
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
