import React from "react";
import './Projects.scss';
import {projectsarray} from './projectsarray';
import Lazyload from 'react-lazyload';
import ProjectFrame from "../components/ProjectFrame/ProjectFile";

const Projects = ()=>
{
    var projects = projectsarray.map((project)=>(<Lazyload><ProjectFrame project={project}/></Lazyload> ))


    return(<div className="Projects">
            <h1>Projects</h1>
        <div className="ProjectsSection">


            {projects}

        </div>



    </div> )
}

export default Projects;