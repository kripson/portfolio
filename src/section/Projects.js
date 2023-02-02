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

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [detailedProject, setdetailedProject] = useState(null);

  const [image, setImage] = useState(undefined);
  const onlyWidth = useWindowWidth();

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

    gsap.to(".Projects", {
      backgroundColor: projectsarray[e.target.attributes["data-project-number"].value].styles.backgroundColor,
      color: projectsarray[e.target.attributes["data-project-number"].value].styles.color,
      ease: "none",
      duration: 0.25,
    });

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

  const animationTranslation = () => {
    if (onlyWidth > 1200) {
      return "-5%";
    } else if (onlyWidth < 1200 && onlyWidth > 800) {
      return "-7.5%";
    } else {
      return "-10%";
    }
  };

  useLayoutEffect(() => {
    let projects = gsap.utils.toArray(".project");

    gsap.fromTo(
      ".Projects",
      {
        scaleX: 0.75,
        scaleY: 0.9,
      },
      {
        scaleX: 1,
        scaleY: 1,
        scrollTrigger: {
          trigger: ".Projects",
          toggleActions: "play none none reverse",
          onLeave: () => {
            gsap.to(".Projects", {
              backgroundColor: "unset",
            });
          }
        },
      }
    );
    console.log(projects);
    projects.forEach((project, idx) => {
      let proxy = { skew: 0 },
        skewSetter = gsap.quickSetter(".projectTitle", "skewX", "deg"), // fast
        clamp = gsap.utils.clamp(-30, 30); // don't let the skew go beyond 20 degrees.

      gsap.to(project.childNodes[0].childNodes[1], {
        translateX: animationTranslation(),

        ease: "none",
        scrollTrigger: {
          trigger: project,
          onUpdate: (self) => {
            let skew = clamp(self.getVelocity() / -300);
            // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
            if (Math.abs(skew) > Math.abs(proxy.skew)) {
              proxy.skew = skew;
              gsap.to(proxy, { skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew) });
            }
          },
          onEnter: function () {
            gsap.to(".Projects", {
              backgroundColor: projectsarray[idx].styles.backgroundColor,
              color: projectsarray[idx].styles.color,
              ease: "none",
              duration: 0.25,
            });

            gsap.to(".project", {
              borderColor: projectsarray[idx].styles.color,
              ease: "none",
              duration: 0.25,
            });
          },
          onEnterBack: () => {
            gsap.to(".Projects", {
              backgroundColor: projectsarray[idx].styles.backgroundColor,
              color: projectsarray[idx].styles.color,
              ease: "none",
              duration: 0.25,
            });

            gsap.to(".project", {
              borderColor: projectsarray[idx].styles.color,
              ease: "none",
              duration: 0.25,
            });
          },
          scrub: 1,
          start: "top center",
          end: "bottom center",
        },
      });
    });
  }, []);

  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
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

    window.addEventListener("mousemove", handleMouseMove);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="Projects full-width-element" id="projects" onMouseLeave={onMouseLeave}>
        <span className="sectionTitle h5" style={{ textAlign: "left" }}>
          Selected work
        </span>

        {projectsarray && projectsarray.map
          ? projectsarray.map((project, idx) => (
              <div className="project" key={idx} data-project-number={idx} onMouseEnter={onMouseOver} id={`project-${idx}`} onClick={onProjectClick}>
                <div className="projectDetails" data-project-number={idx}>
                  <h1 className="h6" data-project-number={idx}>
                    <span>-0{project.id}</span>
                  </h1>

                  <div className="markee" key={idx} data-project-number={idx}>
                    {[0, 1, 2, 3, 4, 5].map((num) => (
                      <div className="projectTitle" data-project-number={idx}>
                        <span className="billboard" data-project-number={idx}>
                          {project.title}
                        </span>
                        <span className="h4" data-project-number={idx}>{project.year}</span>
                        {/* <img src={project.helperImage} data-project-number={idx} /> */}
                      </div>
                    ))}
                  </div>

                  {/* <span>{project.year}</span> */}
                </div>
                {/* <img src={project.imageUrl}></img> */}
              </div>
            ))
          : ""}
      </div>

      {detailedProject ? <ProjectModal project={projectsarray[detailedProject]} toggleDetail={setdetailedProject} /> : null}

      <div className="projectHoverCursor" style={{ position: "fixed", top: mousePos.y, left: mousePos.x }}>
        See Details
      </div>
    </>
  );
};

export default Projects;
