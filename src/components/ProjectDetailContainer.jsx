import React from "react";
import '../styles/ProjectDetailContainer.css';
import '../styles/index.css'

const ProjectDetailContainer = ( {project} ) => {

    return (
        <div className="project">
            <div className="project_info">
            <h2>{project.name}</h2>
            <p>{project.description}</p>

            { project.website !== "" && (<button className="project_website_btn"><a href={project.website} target="_blank" rel="noreferrer">Live</a></button>) }
            <button className="project_src_code_btn"><a href={project.repo} target="_blank" rel="noreferrer">Repo</a></button>
            </div>

            <div className="project_img">
                <img src={project.img} alt=""/>
            </div>
        </div>
    )

}

export default ProjectDetailContainer;
