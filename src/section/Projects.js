import React, {useEffect, useState} from "react";
import './Projects.scss';
import {projectsarray} from './projectsarray';
import Lazyload from 'react-lazy-load';
import ProjectFrame from "../components/ProjectFrame/ProjectFrame";
import ProjectModal from "../components/ProjectModal/ProjectModal";
import Spline from "@splinetool/react-spline";

const Projects = () => {
  const [detailshow, setdetailshow] = useState("none");
  const [firstLoad, setfirstLoad] = useState(true);
  const [detailedProject, setdetailedProject] = useState(null);

  useEffect(() => {
    if (firstLoad) {
      setfirstLoad(true);
    } else {
      if (detailshow === "none") {
        setdetailshow("grid");
      } else {
        setdetailshow("none");
      }
    }
  }, [detailedProject]);

  const toggleDetail = (detailedProjectId) => {
    if (detailedProjectId) {
      setdetailedProject(projectsarray[detailedProjectId - 1]);
    } else {
      setdetailedProject(null);
    }
  };

  return (
    <div className="Projects">
      <h1 className="sectionTitle">Projects</h1>

      <Spline scene="https://prod.spline.design/oiOsLvhYwuzPJNe6/scene.splinecode" />

      <div className="ProjectsSection">
        {projectsarray.map((project) => (
          <Lazyload key={project.id}>
            <ProjectFrame project={project} key={project.id} toggleDetail={toggleDetail} />
          </Lazyload>
        ))}
        {detailedProject ? <ProjectModal project={detailedProject} display={detailshow.display} toggleDetail={toggleDetail} /> : null}
      </div>
    </div>
  );
};

export default Projects;
