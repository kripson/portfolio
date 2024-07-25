import React, { useEffect, useState } from "react";
import "./Projects.scss";
import { projectsarray } from "./projectsarray";
import ProjectFrame from "../components/ProjectFrame/ProjectFrame";
import ProjectModal from "../components/ProjectModal/ProjectModal";

import { useWindowWidth } from "@react-hook/window-size";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import Button from "../components/Button/Button";
import SlideRevealComponent from "../components/SlideRevealComponent/SlideRevealComponent";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

gsap.registerPlugin(ScrollTrigger);



function Project({ project, id, onClick }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const y2 = useParallax(scrollYProgress, 400);

  const ySpring = useSpring(y, { stiffness: 800, damping: 40 })
  const ySpring2 = useSpring(y2, { stiffness: 1000, damping: 40 })

  const {color, backgroundColor, filter} = project.styles;
  
  const onMouseOver = (e) => {
    gsap.to(".kripsonui-cursor-trail", {
      scale: 3,
      duration: 0.25,
    });

    gsap.to(".projectHoverCursor", {
      display: "block",
      duration: 0.01,
    });
  };

  return (
    <section data-project-number={id} onClick={onClick} style={{ backgroundColor: backgroundColor }} onMouseOver={onMouseOver}>
      <h2 className="projectHeading" data-project-number={id}>{project.heading}</h2>
      <div ref={ref} data-project-number={id}>
        <img className="projectBanner" style={{ filter: filter }} src={project.imageUrl} data-project-number={id} alt="A London skyscraper" />
      </div>
      <motion.h3 data-project-number={id} style={{ y: ySpring, color: color }}>{`0${id + 1}`}</motion.h3>
      <motion.h2 data-project-number={id} style={{ y: ySpring2, color: color }}>{project.title}</motion.h2>
      <h1 className="projectYear">{project.year}</h1>
    </section>
  );
}


const Projects = () => {
  const [detailedProject, setdetailedProject] = useState(null);

  const [image, setImage] = useState(undefined);

  const onMouseLeave = (e) => {
    if (e.target.className.includes("Projects full-width-element")) {
      setImage(undefined);

      gsap.to(".kripsonui-cursor-trail", {
        scale: 1,
        duration: 0.25,
      });

      gsap.to(".projectHoverCursor", {
        display: "none",
        duration: 0.1,
      });
    }
  };

  const onProjectClick = (e) => {
    let projects = gsap.utils.toArray(".project");
    console.log(e);
    let project = projects[e.target.attributes["data-project-number"].value];


    if (detailedProject === e.target.attributes["data-project-number"].value) {
      setdetailedProject(null);
      gsap.to(project, {
        height: "400px",
      });
    } else {
      setdetailedProject(e.target.attributes["data-project-number"].value);
      gsap.to(".Projects", {
        scale: 0.9,
        opacity: 0,
      });
    }
  };

  useEffect(() => {
    if (!detailedProject) {
      gsap.to(".Projects", {
        scale: 1,
        opacity: 1,
      });
    }
  }, [detailedProject]);


  const [mousePos, setMousePos] = useState({});


  const handleMouseMove = (event) => {
    setTimeout(() => {
      setMousePos({ x: event.clientX, y: event.clientY });
    }, 100);
  };

  const handleScroll = (event) => {
    gsap.to(".projectHoverCursor", {
      display: "none",
      duration: 0.1,
    });

    gsap.to(".kripsonui-cursor-trail", {
      scale: 1,
      duration: 0.25,
    });
  };


  useEffect(() => {


    window.addEventListener("mousemove", handleMouseMove);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="Projects full-width-element" onMouseLeave={onMouseLeave}>
        <span className="sectionTitle h5" style={{ textAlign: "left" }}>
          Selected work
        </span>

        <div className="projectsContainer"  id="projects">
          {projectsarray && projectsarray.map
            ? projectsarray.map((project, idx) => (
              <Project project={project} id={idx} key={idx} onClick={onProjectClick} />
            ))
            : ""}
        </div>

      </div>

      {detailedProject ? <ProjectModal project={projectsarray[detailedProject]} toggleDetail={setdetailedProject} /> : null}

      <div className="projectHoverCursor" style={{ position: "fixed", top: mousePos.y, left: mousePos.x }}>
        See Details
      </div>
    </>
  );
};

export default Projects;
