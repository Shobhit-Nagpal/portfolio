import React from "react";
import '../styles/Hero.css';
import '../styles/index.css';
import Shobhit from '../assets/shobhit.png';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero_info">
                <h1><a id="home" href="#">Hi! I'm Shobhit.</a></h1>
                <p>building things to make life fun and easy.</p>
                <button><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shobhitsnagpal@gmail.com&su=Let's Connect and Explore Opportunities" target="_blank" rel="noreferrer">Let's talk</a></button>
            </div>

            <div className="hero_img">
                <img src={Shobhit} alt=""/>
            </div>
        </div>
    )
}

export default Hero;
