import React from 'react';
import ProjectCSS from './Project.module.css';

const Project = ({ project }) => {
    return (
        <div className="mg-4-bottom-all mg-10-bottom">
            <h3 className={ProjectCSS.projectTitle}><a href={project.url}>{project.title}</a></h3>
            <p className="paragraph" style={{fontSize: '1rem'}}>{project.desc}</p>
            <p className="text-size-3"><a href={project.github} style={{textDecoration: "underline", color: "#2e82ff"}}>Available on Github</a></p>
            <img src={project.image} className={ProjectCSS.projectImg}/>
        </div>
    );
}

export default Project;