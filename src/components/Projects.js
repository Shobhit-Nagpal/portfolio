import React, { useEffect, useState } from "react";
import '../styles/Projects.css';
import '../styles/index.css';
import ProjectDetailContainer from "./ProjectDetailContainer";
import youtubeCloneImg from '../assets/youtube-clone.png';
import tagImg from '../assets/tag.png';
import memoryCardImg from '../assets/memory-card.png';
import weatherAppImg from '../assets/weather-app.png';
import palettePixImg from '../assets/palettepix.png';
import blogImg from "../assets/blog.png"
import interpreterImg from "../assets/interpreter.png"
import frmtImg from "../assets/frmt.png"
import jsLexerImg from "../assets/js-lexer.png"

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects([{name: 'Palette Pix', description: 'A tool where designers and developers can quickly test out color palettes. Users can change to palettes of their choice or get a random palette.', img: palettePixImg, website: 'https://shobhit-nagpal.github.io/palettepix/', repo: 'https://github.com/Shobhit-Nagpal/palettepix'}, 
                     {name: 'Monkey interpreter', description: 'An interpreter for Monkey language. Built by reading Writing an Interpreter in Go.', img: interpreterImg, website: '', repo: 'https://github.com/Shobhit-Nagpal/monkey-interpreter'},
                     {name: 'Frmt', description: 'Frmt is a CLI tool written in Golang to convert file formats from your CLI.', img: frmtImg, website: '', repo: 'https://github.com/Shobhit-Nagpal/frmt'},
                     {name: 'JS-Lexer', description: 'JS-Lexer is inspired from making a Monkey interpreter in Go by reading "Writing an Interpreter in Go" by Thorsten Ball. Published as an npm package.', img: jsLexerImg, website: 'https://www.npmjs.com/package/@shobhit-nagpal/js-lexer', repo: 'https://github.com/Shobhit-Nagpal/js-lexer'},
                     {name: 'Personal Blog', description: 'A blog for personal thoughts, made using MERN stack. Blogs inspired from Inner Monologue.', img: blogImg, website: '', repo: 'https://github.com/Shobhit-Nagpal/blog'},
                     {name: 'Youtube Clone', description: 'A Youtube clone using React, Rapid API, Firebase where a user can see the home feed, search for videos/channels and watch videos.', img: youtubeCloneImg, website: 'https://youtube-clone-dusky-nine.vercel.app/', repo: 'https://github.com/Shobhit-Nagpal/youtube-clone'},
                     {name: 'Tag', description: 'A photo tagging game where you have to find your favourite game characters. Made using React, React Router and Firebase', img: tagImg, website: 'https://shobhit-nagpal.github.io/tag/', repo: 'https://github.com/Shobhit-Nagpal/tag'} , 
                     {name: 'Memory card', description: 'A memory game where you have to choose all characters only once. The charaters are from the Office! Made using React', img: memoryCardImg, website: 'https://shobhit-nagpal.github.io/memory-card/', repo: 'https://github.com/Shobhit-Nagpal/memory-card'}, 
                     {name: 'Weather app', description: 'A weather app which pulls data from OpenWeather API and displays the weather of searched location. Made using HTML, CSS and Javascript.', img: weatherAppImg, website: 'https://shobhit-nagpal.github.io/weather-app/', repo: 'https://github.com/Shobhit-Nagpal/weather-app'}])
    }, [])
    return (
        <div className="projects">
            <div className="projects_info">
                <h1><span>02. </span><a id="projects" href="#">Projects</a></h1> <br/>
            </div>

            <div className="projects_container">

                {projects.map((project, index) => {
                    return <ProjectDetailContainer project={project} key={index}/>
                })}

            </div>
        </div>
    )
}

export default Projects;
