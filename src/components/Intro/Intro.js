import React, { useState, useEffect, useLayoutEffect } from "react";
import "./Intro.scss";
import HeroImage from "../../assets/hero-image-2024.png";
import Button from "../Button/Button";
import CountUp from "react-countup";

import { useWindowWidth } from "@react-hook/window-size";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "../../utils/splitText";
import CircleType from 'circletype';
import { RiArrowDownFill, RiArrowDownLine, RiMapFill, RiMapPin2Fill, RiMapPin3Fill, RiMapPin4Fill, RiMapPin5Fill } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);



const Clock = () => {

  const getFormattedTime = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (hours < 10) {
      hours = `0${hours}`
    }

    if (minutes < 10) {
      minutes = `0${minutes}`
    }

    return <span>{hours} <span className="blink">:</span> {minutes} {hours.startsWith('0') ? 'AM' : 'PM'}</span>;

  }

  return <div>
    <h1>{getFormattedTime()}</h1>
  </div>
}

const Intro = ({ firstLoaded }) => {
  const onlyWidth = useWindowWidth();


  const skills = [
    "UI/UX",

    "FRONT-END DEVELOPMENT",

    "UI TESTING",

    "BACK-END DEVELOPMENT",

    "AWS TECHNOLOGIES",

    "DATABASE DESIGN AND IMPLEMENTATION"

  ]

  const stacks = [
    require("../../assets/react.png"),

    require("../../assets/angular.png"),

    require("../../assets/nodejs.png"),

    require("../../assets/mongodb.png")
  ]

  useLayoutEffect(() => {
    // Instantiate `CircleType` with an HTML element.
    const circleType = new CircleType(document.getElementById('scrollDownText'));

  }, []);

  return (
    <div className="Intro">


      {/* left Section */}

      <div className="leftSection">
        <div className="nameBox box">
          <h1>Sankit Shrestha</h1>
        </div>
        <div className="getInTouchBox  box">
          <h5>Get in <br />touch</h5>
          <Button link={"#contacts"} label={'Contact Me'} styles={{ maxWidth: 'min(200px,30vw)', maxHeight: '48px', borderWidth: '2px', fontWeight: 'bolder' }} />
        </div>
        <div className="clockBox  box">

          <Clock />

          <div className="location">
            <RiMapPin5Fill /> <span>Gold Coast, Australia</span>
          </div>
        </div>
        <div className="scrollDownBox  box">
          <h5 id="scrollDownText">*Scroll*Down</h5>
          <span className="arrowDown">
            <RiArrowDownLine size={'44px'} color="black" />
          </span>

        </div>
      </div>



      {/* Right Section */}
      <div className="rightSection">
        <div className="jobBox box">
          <h5>Full Stack Developer</h5>
          <ul>
            {skills.map(skill => <li>{skill}</li>)}
          </ul>

          <Button label={'Download CV'} link={'/cv/Full stack developer sankit resume.pdf'} styles={{ maxWidth: '200px', maxHeight: '48px', borderWidth: '2px', fontWeight: 'bolder' }} />
        </div>
        <div className="photoBox  box">
          {/* <img src={HeroImage} alt="heroImage"/> */}
        </div>
        <div className="experienceBox  box">
          <h2><CountUp end={5} suffix="+" delay={4}></CountUp></h2>
          <span>Years of Experience</span>
        </div>

        <div className="experienceBox  box">
          <h2><CountUp end={25} suffix="+" delay={4}></CountUp></h2>
          <span>Projects Completed</span>
        </div>

        <div className="stackBox  box">
          <h5>Stack</h5>
          <div className="stackContainer">

            {stacks.map(stack => <span><img src={stack} alt="stack" /></span>)}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
