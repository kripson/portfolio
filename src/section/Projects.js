import React, { useEffect, useState } from "react";
import "./Projects.scss";
import { projectsarray } from "./projectsarray";
import Lazyload from "react-lazy-load";
import ProjectFrame from "../components/ProjectFrame/ProjectFrame";
import ProjectModal from "../components/ProjectModal/ProjectModal";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/modules/navigation/navigation.min.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Arrow from "../assets/Arrow 2.svg";
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
    <div className="Projects">
      <h1 className="sectionTitle">Projects</h1>

      {/* <Spline scene="https://prod.spline.design/oiOsLvhYwuzPJNe6/scene.splinecode" /> */}

      <div className="ProjectsSection">
        {projectsarray && projectsarray.map ? (
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            spaceBetween={sliderSettings.sliderGap}
            slidesPerView={sliderSettings.numberOfSlides}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {projectsarray.map((project, idx) => (
              <SwiperSlide>
                <Parallax speed={-30}>
                  <ProjectFrame project={project} key={project.id} toggleDetail={toggleDetail} />
                </Parallax>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          ""
        )}

        {detailedProject ? <ProjectModal project={detailedProject} display={detailshow.display} toggleDetail={toggleDetail} /> : null}
        <div className="customNavButtons body">
          <Parallax speed={-10}>
            <h5 onClick={onPreviousClick} className="body">
              <svg width="281" height="179" viewBox="0 0 281 179" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M107.5 123.5L279.5 123.5V55.5L107.5 55.5L162 1H90.5L2 89.5L90.5 178H162L107.5 123.5Z" stroke="white" stroke-width="2" />
              </svg>
            </h5>
          </Parallax>

          <Parallax speed={-10}>
            <h5 onClick={onNextClick} className="body">
              <svg width="280" height="179" viewBox="0 0 280 179" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M173 55.5H1V123.5H173L118.5 178H190L278.5 89.5L190 1H118.5L173 55.5Z" stroke="white" stroke-width="2" />
              </svg>
            </h5>
          </Parallax>
        </div>
      </div>
    </div>
  );
};

export default Projects;
