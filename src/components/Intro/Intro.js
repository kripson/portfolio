import React, { useState, useEffect } from "react";
import "./Intro.scss";
import HeroImage from "../../assets/hero-image.png";
import Button from "../Button/Button";
import { useParallax } from "react-scroll-parallax";
import { useWindowWidth } from "@react-hook/window-size";
import { CircularText } from "../CircularText/CircularText";
import Arrow from "../../assets/Arrow 1.svg";

const Intro = () => {
  const onlyWidth = useWindowWidth();

  return (
    <div className="Intro">

      <div className="arrowDown">
        {" "}
        <img src={Arrow} alt="" />
        Scroll
      </div>
      <div className="LeftSection">
        <h1 className="h1 job-title primary-colour-text pseudo-after-animated">
          {"Software Developer"}
          <CircularText text="What I do" deg={12} color="white" backgroundColor="black" />
        </h1>
      </div>
      <div className="middleSection pseudo-after-animated">
        <img src={HeroImage} style={{ display: onlyWidth >= 1200 ? "block" : "none" }} alt="Wevdev" />
        {onlyWidth >= 1200 ? "" : <img src={HeroImage} alt="Wevdev" />}
      </div>
      <div className="RightSection">
        <a href="#contactscontainer">
          <div className="GetInTouchSection">
            <img src={Arrow} alt="" />
            Let's work together
          </div>
        </a>
        <h1 className="pseudo-after-animated name stretchedOnHover">
          SANKIT SHRESTHA
          <CircularText text="Who I am" deg={12} color="black" backgroundColor="white" />
        </h1>
      </div>
    </div>
  );
};

export default Intro;
