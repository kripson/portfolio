import React, { useState, useEffect } from "react";
import "./Intro.scss";
import HeroImage from "../../assets/portrait.jpg";
import Button from "../Button/Button";

import { useWindowWidth } from "@react-hook/window-size";
import { CircularText } from "../CircularText/CircularText";
import Arrow from "../../assets/Arrow 1.svg";
import SlideRevealComponent from "../SlideRevealComponent/SlideRevealComponent";

const Intro = ({ firstLoaded }) => {
  const onlyWidth = useWindowWidth();

  const heroImageBlockers = [
    {
      style: {
        height: "20%",
        width: "50%",
        top: "-10%",
      },
    },
    {
      style: {
        height: "20%",
        width: "30%",
        top: "10%",
      },
    },
    {
      style: {
        top: "0",
        right: "0",
        height: "40%",
        width: "10%",
      },
    },
    {
      style: {
        bottom: "10%",
        height: "30%",
        width: "30%",
      },
    },
    {
      style: {
        bottom: "20%",
        right: "0",
        height: "20%",
        width: "20%",
      },
    },
  ];

  return (
    <div className="Intro">
      {/* <div className="arrowDown">
        {" "}
        <img src={Arrow} alt="" />
        Scroll
      </div> */}

      <div className="TopSection">
        <SlideRevealComponent delay={10} reveal={"bottomReveal"}>
          <h1 className={`billboard job-title primary-text`}>
            SANKIT <br /> SHRESTHA
          </h1>
        </SlideRevealComponent>
        <div>{/* <SlideRevealComponent delay={2} reveal={"bottomReveal"} children={<span className={`primary-text`}>WHO I AM</span>}></SlideRevealComponent> */}</div>
      </div>

      {/* <a href="#contacts">
        <div className="GetInTouchSection">
          <img src={Arrow} alt="" />
          Let's work together
        </div>
      </a> */}
      <div className="middleSection">
        <SlideRevealComponent delay={1} reveal={"rightReveal"}>
          {heroImageBlockers.map((blocker) => (
            <div className="blockers" style={{ position: "absolute", ...blocker.style }}></div>
          ))}
          <img src={HeroImage} alt="Wevdev" border="0" />
        </SlideRevealComponent>

        {/* <img src={HeroImage} alt="Wevdev" /> */}
      </div>
      <div className="BottomSection">
        {/* <SlideRevealComponent.2
        0
          delay={2}
          reveal={"rightReveal"}
          children={ */}

        {/* <SlideRevealComponent delay={2} reveal={"rightReveal"} children={<span className={`primary-text`}>WHAT I DO</span>}></SlideRevealComponent> */}
        {/* 
          <h1 className={`name billboard`}>
            Software
            Developer
          </h1> */}
        <img src={HeroImage} alt="Wevdev" border="0" />

        {/* }
        ></SlideRevealComponent> */}
      </div>
    </div>
  );
};

export default Intro;
