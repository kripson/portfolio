import React from "react";
import './ProjectModal.scss';

const ProjectModal = ({project,display,toggleDetail})=>
{

    return(<div className="ProjectModal" style={{display:display}}>

        <div className = "smallScreenBanner">
            <img className = "laptoplayout"  src = {project.laptopLayout} alt = "laptoplayout"/>
            <img className = "mobilelayout" src = {project.mobileLayout} alt = "mobilelayout"/>

        </div>

        <div className = "ProjectModalLeftSection">
                <h1 className = "projectTitle pseudo-after-animated">{project.title}</h1>

                <div className = "projectDescription body pseudo-after-animated">
                    {project.description.map((descriptionpart,idx)=><p key = {idx}>{descriptionpart}</p>)}
                </div>





                <div className = "projectLinks">
                    <a href = {project.websiteUrl}><div className = "GoToWebsiteLink">Go to Website</div></a>
                    <span className = "CloseLink" onClick={()=>toggleDetail(0)}>
            Go Back
        </span>
                </div>

        </div>

        <div className = "ProjectModalRightSection">
            <img className = "laptoplayout"  src = {project.laptopLayout} alt = "laptoplayout"/>
            <img className = "mobilelayout" src = {project.mobileLayout} alt = "mobilelayout"/>

        </div>

    </div>)
}

export default ProjectModal;
