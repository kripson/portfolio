import React from "react";
import './Projects.scss';
import {projectsarray} from './projectsarray';
import Lazyload from 'react-lazyload';

const Projects = ()=>
{
    var projects = projectsarray.map((project)=>(<Lazyload><div style = {{animationDelay:`${project.id/9}s`}} className="project">

        <a href = {project.websiteUrl ? project.websiteUrl : ""}><img src={project.imageUrl}/></a>
    </div></Lazyload>))


    return(<div className="Projects">
            <h1>Projects</h1>
        <div className="ProjectsSection">


            {projects}

        </div>



    </div> )
}

export default Projects;