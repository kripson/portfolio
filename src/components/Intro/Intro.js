import React, { useState, useEffect, useLayoutEffect } from "react";
import "./Intro.scss";
import HeroImage from "../../assets/hero-image.webp";
import Button from "../Button/Button";

import { useWindowWidth } from "@react-hook/window-size";
import { CircularText } from "../CircularText/CircularText";
import Arrow from "../../assets/Arrow 1.svg";
import SlideRevealComponent from "../SlideRevealComponent/SlideRevealComponent";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "../../utils/splitText";

gsap.registerPlugin(ScrollTrigger);

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

  useLayoutEffect(() => {
    const text = document.querySelector(".job-title");

    const splitText = new SplitText(text);

    gsap.from(splitText.chars, {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
      delay: 4,
    });

    gsap.fromTo(
      ".BottomSection img",
      {
        scale: 2,
        opacity: 0
      },
      {
        duration: 1,
        scale: 1,
        opacity: 1,
        stagger: 0.05,
        delay: 4,
      }
    );
  }, []);

  return (
    <div className="Intro">
      {/* <div className="arrowDown h6">
        {" "}
        <img src={Arrow} alt="" />
        Scroll
      </div> */}

      <div className="TopSection">
        <h1 className={`billboard job-title primary-text`}>SANKIT SHRESTHA</h1>
        <h6 className={`primary-text body`} style={{paddingLeft: '4px'}}>FULL STACK DEVELOPER</h6>
        <CircularText className="intro-circular" text='All THINGS WEB' deg={20} color={'orange'}/>

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
