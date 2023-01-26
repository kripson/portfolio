import React, { useEffect, useState } from "react";
import "./Projects.scss";
import { projectsarray } from "./projectsarray";
import ProjectFrame from "../components/ProjectFrame/ProjectFrame";
import ProjectModal from "../components/ProjectModal/ProjectModal";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/modules/navigation/navigation.min.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Parallax } from "react-scroll-parallax";
import { useWindowWidth } from "@react-hook/window-size";

const Projects = () => {
  const [detailshow, setdetailshow] = useState("none");
  const [firstLoad, setfirstLoad] = useState(true);

  const [sliderSettings, setSliderSettings] = useState({
    numberOfSlides: 3,
    sliderGap: 50,
  });

  const [detailedProject, setdetailedProject] = useState(null);
  const onlyWidth = useWindowWidth();

  const onNextClick = () => {
    const nextButton = document.getElementsByClassName("swiper-button-next")[0];

    if (nextButton) {
      nextButton.click();
    }
  };

  const onPreviousClick = () => {
    const previousButton = document.getElementsByClassName("swiper-button-prev")[0];

    if (previousButton) {
      previousButton.click();
    }
  };

  useEffect(() => {
    if (onlyWidth) {
      if (onlyWidth > 1400) {
        setSliderSettings({
          numberOfSlides: 3,
          sliderGap: 20,
        });
      } else if (onlyWidth > 1000) {
        setSliderSettings({
          numberOfSlides: 2,
          sliderGap: 15,
        });
      } else {
        setSliderSettings({
          numberOfSlides: 1,
          sliderGap: 5,
        });
      }
    }
  }, [onlyWidth]);

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
    <div className="Projects full-width-element">
      <h1 className="sectionTitle">
        Projects
        <span>Some of my selected work</span>
      </h1>
      <div className="overlay"></div>

      <Parallax speed={-10}>
        <div className="ProjectsSection">
          {projectsarray && projectsarray.map ? (
            <div className="projectsContainer">
              {projectsarray.map((project, idx) => (
                <div className="project"><img src={project.imageUrl}></img></div>
              ))}
            </div>
          ) : (
            ""
          )}

          {detailedProject ? <ProjectModal project={detailedProject} display={detailshow.display} toggleDetail={toggleDetail} /> : null}
        </div>
      </Parallax>
    </div>
  );
};

export default Projects;
