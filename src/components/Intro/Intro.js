import React, { useState } from "react";
import "./Intro.scss";
import goldCoast from "../../assets/GoldCoast.svg";
import Button from "../Button/Button";
import CountUp from "react-countup";

import { useWindowWidth } from "@react-hook/window-size";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { RiArrowDownLine, RiMapPin5Fill } from "react-icons/ri";
import SlideRevealComponent from "../SlideRevealComponent/SlideRevealComponent";
import glitchImageVideo from '../../assets/glitch-video.mp4';
import ScrollDownCircle from '../../assets/ScrollDownCircle.svg';

gsap.registerPlugin(ScrollTrigger);



const Clock = () => {

  const getFormattedTime = () => {
    const date = new Date();
    let hours = String(date.getHours());
    let minutes = String(date.getMinutes());
    let suffix = 'AM';

    if(hours >= 12){
      hours = String(hours - 12);
      suffix = 'PM';
    }

    if (hours < 10) {
      hours = `0${hours}`
    }

    if (minutes < 10) {
      minutes = `0${minutes}`
    }

    return <span>{hours} <span className="blink">:</span> {minutes} {suffix}</span>;

  }

  return <div>
    <h1>{getFormattedTime()}</h1>
  </div>
}

const Intro = ({ firstLoaded }) => {
  const onlyWidth = useWindowWidth();

  const [earthQuakeStarted, setEarthQuake] = useState(false);


  const skills = [

    "FRONT-END DEVELOPMENT",

    "UI TESTING",

    "UI/UX BEST PRACTICES",

    "BACK-END DEVELOPMENT",

    "AWS TECHNOLOGIES",

    "DATABASE DESIGN AND IMPLEMENTATION",

    "AND MANY MORE..."

  ]

  const stacks = [
    {
      url: require("../../assets/react.png"),
      name: "React",
    },
    {
      url: require("../../assets/angular.png"),
      name: "Angular",
    },
    {
      url:
        require("../../assets/nextjs.png"),
      name: "NextJS",
    },
    {
      url: require("../../assets/nodejs.png"),
      name: "Node Js",
    },
    {
      url: require("../../assets/typescript.png"),
      name: "Typescript",
    },
    {
      url:
        require("../../assets/mongodb.png"),
      name: "MongoDB",
    },
    {
      url:
        require("../../assets/aws.png"),
      name: "AWS",
    }
  ]

  return (
    <div className="Intro">


      {/* left Section */}

      <div className="leftSection">
        <div className="nameBox box">
          <h1>Sankit Shrestha</h1>
        </div>
        <div className="getInTouchBox  box">
          <h5 className={`${earthQuakeStarted ? '' : ''}`}>Get in <br />touch</h5>
          <Button link={"#contacts"} label={'Contact Me'} styles={{ maxWidth: 'min(200px,30vw)', maxHeight: '48px', borderWidth: '2px', fontWeight: 'bolder' }} />
        </div>
        <div className="clockBox  box">

          <Clock />

          <div className={`location ${earthQuakeStarted ? '' : ''}`} >
            <img src={goldCoast} className={`${earthQuakeStarted ? '' : ''}`} />

            <SlideRevealComponent reveal={'topReveal'} delay={4} duration={1}>
              <RiMapPin5Fill />   <span> Gold Coast Australia</span>
            </SlideRevealComponent>
          </div>
        </div>
        <div className="scrollDownBox  box">

          <img id="scrollDownText" src={ScrollDownCircle} alt="scrollDownText"/>
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
        <div className={`photoBox  box ${earthQuakeStarted ? '' : ''}`} onMouseEnter={(e) => setEarthQuake(true)} onMouseLeave={(e) => setEarthQuake(false)}>
          <video src={glitchImageVideo} autoPlay={true} loop={true} muted webkit-playsinline playsInline>
          </video>
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

            {stacks.map(stack => <span><img src={stack.url} alt="stack" />{stack.name}</span>)}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
