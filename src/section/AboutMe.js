import React, { useLayoutEffect } from "react";
import "./AboutMe.scss";
import Nepal from "../assets/nepal-2.webp";
import Brisbane from "../assets/Brisbane.jpg";
import GoldCoast from "../assets/goldcoast.webp";

import { FaMapMarkerAlt } from "react-icons/fa";
import { StaggerTextReveal } from "stagger-text-reveal-animation";
import LazyLoad from "react-lazy-load";
import { useWindowWidth } from "@react-hook/window-size";
import SlideRevealComponent from "../components/SlideRevealComponent/SlideRevealComponent";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "../utils/splitText";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const width = useWindowWidth();

  useLayoutEffect(() => {
    const texts = document.querySelectorAll(".aboutmeparagraph");

    texts.forEach((text) => {
      const splitText = new SplitText(text);

      gsap.from(splitText.chars, {
        duration: 1,
        y: 100,
        autoAlpha: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".AboutMe",
          scrub: 1,
          end: "center+=300 bottom"
        },
      });
    });

    gsap.to('.photoContainer img', {
      duration: 1,
      y: -50,
      stagger: 0.5,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger: {
        trigger: ".aboutmeparagraph",
        scrub: 1
      },
    });

  }, []);

  return (
    <div className="AboutMe full-width-element">

      {/* <div className="background">
        <img src={GoldCoast}></img>
      </div> */}
      {/* <div className="topSection">

            <img src={Nepal} alt={"nepal"}></img>


          <p className="secondary-text h5">
            Hi, I am Sankit but I go by <span className="primary-colour-text">kripson</span> on all my socials. <br />I was born in Butwal, Nepal where I spent my childhood and most of my teen years.
          </p>


            <h1 className="header">
              <StaggerTextReveal text={"1998"} fontSize={width > 850 ? 102 : 51}></StaggerTextReveal>
              <span className="location"> Nepal</span>
            </h1>
      
        </div>
        <div className="middleSection">

            <h1 className="header">
              <StaggerTextReveal text={"2017"} fontSize={width > 850 ? 102 : 51}></StaggerTextReveal>
              <span className="location"> Brisbane</span>
            </h1>



            <img src={Brisbane} alt={"Brisbane"}></img>

          <p className="secondary-text h5">
            I moved to Brisbane, Australia in 2017 to pursue my degree in IT. <br /> As a university student, I came across <span className="primary-colour-text">Software Development </span> and fell in love with it.
          </p>
        </div>
        <div className="bottomSection">

            <img src={GoldCoast} alt={"GoldCoast"}></img>
    
          <p className="secondary-text h5">
            Currently, located at Gold Coast, I am working as a software engineer at <span className="primary-colour-text"> Kzen8</span>. <br /> <br />I use my technological superpowers to bring my imagination to life and to help businesses
            solve their issues.
          </p>


          <h1 className="header">
            <StaggerTextReveal text={"2020"} fontSize={width > 850 ? 102 : 51}></StaggerTextReveal>
            <span className="location"> Gold Coast</span>
          </h1>


        </div> */}

      <p className="h3 aboutmeparagraph">Hi, I am Sankit but I go by kripson on all my socials. I was born in Butwal, Nepal. Currently, I am based in Gold Coast, Australia and working as a software/multimedia developer at Kzen8.</p>
      <div className="photoContainer">
        <img src={Nepal} alt={"Nepal"} />

        <img src={GoldCoast} alt={"GoldCoast"} />
      </div>
    </div>
  );
};

export default AboutMe;
