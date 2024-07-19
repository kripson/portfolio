import React, { useState, useEffect, useLayoutEffect } from "react";
import "./Intro.scss";
import HeroImage from "../../assets/hero-image-2024.png";
import Button from "../Button/Button";
import CountUp from "react-countup";

import { useWindowWidth } from "@react-hook/window-size";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "../../utils/splitText";


gsap.registerPlugin(ScrollTrigger);

const Intro = ({ firstLoaded }) => {
  const onlyWidth = useWindowWidth();

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


    gsap.to(".imageShadowBox", {
      top: '40px',
      left: '40px',
      delay: 7,
      opacity: 1
    })

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

      <div className="TopSection">
        <h1 className={`billboard job-title primary-text`}>SANKIT SHRESTHA</h1>
        <h6 className={`primary-text body`} style={{ paddingLeft: '4px' }}>FULL STACK DEVELOPER</h6>

        <div className="countUpSection">
          <div><CountUp end={5} suffix={"+"} duration={4.5} delay={4} /> Years of Experience</div>
          <div><CountUp end={25} suffix={"+"} duration={4.5} delay={4} />Projects Completed</div>
        </div>

        <div className="buttonContainer">
            <Button label={'Download CV'} link={'/cv/Full stack developer sankit resume.pdf'}/>
        </div>


        <div></div>
      </div>



      <div className="BottomSection">
        <div className="imageContainer">
          <img src={HeroImage} alt="Wevdev" border="0" />
          <div className="imageShadowBox"></div>

        </div>
      </div>
    </div>
  );
};

export default Intro;
