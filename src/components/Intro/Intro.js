import React, { useState, useEffect } from "react";
import "./Intro.scss";
import HeroImage from "../../assets/hero-image-3.png";
import Button from "../Button/Button";
import { useParallax } from "react-scroll-parallax";
import { useWindowWidth } from "@react-hook/window-size";
import { CircularText } from "../CircularText/CircularText";
import Arrow from "../../assets/Arrow 1.svg";
import SlideRevealComponent from "../SlideRevealComponent/SlideRevealComponent";

const Intro = ({ firstLoaded }) => {
  const onlyWidth = useWindowWidth();

  return (
    <div className="Intro">
      <div className="arrowDown">
        {" "}
        <img src={Arrow} alt="" />
        Scroll
      </div>

      <a href="#contactscontainer">
        <div className="GetInTouchSection">
          <img src={Arrow} alt="" />
          Let's work together
        </div>
      </a>
      <div className="TopSection">
        {/* <SlideRevealComponent
          delay={2}
          reveal={"bottomReveal"}
          children={ */}
            <h1 className={`billboard job-title primary-text`}>
              SANKIT
              <br />
              SHRESTHA
              {/* <CircularText text="What I do" deg={12} color="white" backgroundColor="black" /> */}
            </h1>
          {/* }
        ></SlideRevealComponent> */}
        <div>
          <SlideRevealComponent delay={2} reveal={"topReveal"} children={<span className={`primary-text`}>WHO I AM</span>}></SlideRevealComponent>
        </div>
      </div>
      <div className="middleSection">
        <SlideRevealComponent delay={1} reveal={"rightReveal"} children={<img src={HeroImage} alt="Wevdev" />}></SlideRevealComponent>

        {/* <img src={HeroImage} alt="Wevdev" /> */}
      </div>
      <div className="BottomSection">
        {/* <SlideRevealComponent
          delay={2}
          reveal={"rightReveal"}
          children={ */}
            <h1 className={`name`}>
              Software
              <br />
              Developer
              {/* <CircularText text="Who I am" deg={12} color="black" backgroundColor="white" /> */}
            </h1>
          {/* }
        ></SlideRevealComponent> */}

        <SlideRevealComponent delay={2} reveal={"leftReveal"} children={<span className={`primary-text`}>WHAT I DO</span>}></SlideRevealComponent>
      </div>
    </div>
  );
};

export default Intro;
