import React, { useLayoutEffect } from "react";
import "./ProjectModal.scss";
import gsap from "gsap";

const ProjectModal = ({ project, display, toggleDetail }) => {
  useLayoutEffect(() => {
    // gsap.to(".ProjectModalLeftSection", {
    //   width: "100%",
    // });

    // gsap.to(".ProjectModalRightSection", {
    //   width: "100%",
    // });

    // return () => {
    //   gsap.to(".ProjectModalLeftSection", {
    //     width: "0",
    //   });

    //   gsap.to(".ProjectModalRightSection", {
    //     width: "0",
    //   });
    // };

    gsap.to(".ProjectModal", {
      scale: 1,
      opacity: 1,
      delay: 1
    });

    gsap.to(".kripsonui-cursor-trail", {
        scale: 1,
        duration: 0.25,
      });

      gsap.to(".projectHoverCursor", {
        display: "none",
        duration: 0.1,
      });

    return () => {
      gsap.to(".ProjectModal", {
        scale: 3,
        opacity: 0,
      });
    };
  }, []);

  return (
    <div className="ProjectModal" style={{ display: display }}>
      <div className="smallScreenBanner">
        <img className="laptoplayout" src={project.laptopLayout} alt="laptoplayout" />
        <img className="mobilelayout" src={project.mobileLayout} alt="mobilelayout" />
      </div>

      <div className="ProjectModalLeftSection">
        <h1 className="projectTitle">{project.title}</h1>

        <div className="tagsContainer">
          {project.tags?.map(tag=><span>{tag}</span>)}
        </div>

        <div className="projectDescription body">
          {project.description.map((descriptionpart, idx) => (
            <p key={idx}>{descriptionpart}</p>
          ))}
        </div>

        <div className="projectLinks">
          <a href={project.websiteUrl} >
            <div className="GoToWebsiteLink scaleIn"  style={{backgroundColor: project.styles.backgroundColor, color: project.styles.color}}>Go to Website</div>
          </a>
          <span className="CloseLink  scaleIn" onClick={() => toggleDetail(null)}>
            Go Back
          </span>
        </div>
      </div>

      <div className="ProjectModalRightSection">
        <img className="laptoplayout" src={project.laptopLayout} alt="laptoplayout" />
        <img className="mobilelayout" src={project.mobileLayout} alt="mobilelayout" />
      </div>
    </div>
  );
};

export default ProjectModal;
