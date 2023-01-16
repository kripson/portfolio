import React from "react";
import "./AboutMe.scss";
import Nepal from "../assets/Nepal.svg";
import Brisbane from "../assets/Brisbane.svg";
import GoldCoast from "../assets/GoldCoast.svg";
import { Parallax, useParallax } from "react-scroll-parallax";
import { FaMapMarkerAlt } from "react-icons/fa";
import { StaggerTextReveal } from "stagger-text-reveal-animation";
import LazyLoad from "react-lazy-load";

const AboutMe = () => {
  return (
    <div className="AboutMe full-width-element">
      <div className="topSection">
        <Parallax speed={15} style={{ position: "relative", top: "100px", left: "100px" }}>
          <img src={Nepal} alt={"nepal"}></img>
        </Parallax>

        <LazyLoad>
          <p className="secondary-text">
            Hi, I am Sankit but I go by <span className="primary-colour-text">kripson</span> on all my socials. <br />I was born in Butwal, Nepal where I spent my childhood and most of my teen years.
          </p>
        </LazyLoad>

        <Parallax speed={10}>
          <h1 className="header">
            1998
            <span className="location"> Nepal</span>
          </h1>
        </Parallax>
      </div>
      <div className="middleSection">
        <Parallax speed={12}>
          <h1 className="header">
            2017 <br />
            <span className="location"> Brisbane</span>
          </h1>
        </Parallax>

        <Parallax speed={20}>
          <img src={Brisbane} alt={"Brisbane"}></img>
        </Parallax>
        <p className="secondary-text">
          I moved to Brisbane, Australia in 2017 to pursue my degree in IT. <br /> As a university student, I came across <span className="primary-colour-text">Software Development </span> and fell in love with it.
        </p>
      </div>
      <div className="bottomSection">
        <Parallax speed={18} style={{ position: "relative", left: "100px" }}>
          <img src={GoldCoast} alt={"GoldCoast"}></img>
        </Parallax>
        <p className="secondary-text">
          Currently, located at Gold Coast, I am working as a software engineer at <span className="primary-colour-text"> Kzen8</span>. <br /> <br />I use my technological superpowers to bring my imagination to life and to help businesses
          solve their issues.
        </p>
        <Parallax speed={15}>
          <h1 className="header">
            2020 <br />
            <span className="location"> Gold Coast</span>
          </h1>
        </Parallax>
      </div>
    </div>
  );
};

export default AboutMe;
