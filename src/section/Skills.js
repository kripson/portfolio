import React, { useRef } from "react";
import "./Skills.scss";
import Html from "../assets/html-5.png";
import Css from "../assets/css.png";
import ReactIcon from "../assets/react.png";
import Angular from "../assets/angular.png";
import Node from "../assets/nodejs.png";
import Laravel from "../assets/laravel.png";
import LazyLoad from "react-lazy-load";
import Spline from "@splinetool/react-spline";
import Tshirt from "../assets/T-Shirt.svg";
import { useParallax } from 'react-scroll-parallax';

const Skills = () => {

    const rightSectionRef = useParallax({speed: 50, rootMargin: {top: 100, left: 100, right: 100, bottom: 100}});


  return (
    <div className="Skills scaleIn">
      <div className="leftSection">
        <h3 className="primary-colour-text stretchedOnHover">SKILLS</h3>

        <h1 className="body">SKILLS</h1>

        <p>
          Currently, in terms of front end development tools, I mostly work with <span className="primary-colour-text">React and redux </span>. However, I am also proficient in using other frameworks like{" "}
          <span className="primary-colour-text">Angular and Vue</span>. In terms of back end development,<span className="primary-colour-text"> NodeJs (Express)</span> is my weapon of choice to create the server and then I choose between
          SQL or NoSQL database depending on the project. I am also familiar with firebase(Google Service).
        </p>
        <p>Apart from Single Page Applications, I have also worked with Laravel. I started with Laravel as some clients do not prefer SPAs due to SEO related challenges.</p>
        <p>
          Later on, I discovered <span className="primary-colour-text">NextJs</span> which allowed my javascript applications to retain the seamless nature of SPAs while being SEO friendly.
        </p>
      </div>
      <div className="rightSection">
        <h1 className="header">SKILLS</h1>

        <div className="imageSection"  ref={rightSectionRef.ref}>

          <div className="scene">
            <div className="cube">


              <div className="cube__face cube__face--front">
                <img src={Html} alt="htmlIcon" />
              </div>
              <div className="cube__face cube__face--back">
                <img src={Css} alt="CssIcon" />
              </div>
              <div className="cube__face cube__face--right">
                <img src={ReactIcon} alt="ReactIcon" />
              </div>
              <div className="cube__face cube__face--left">
                <img src={Angular} alt="AngularIcon" />
              </div>
              <div className="cube__face cube__face--top">
                <img src={Node} alt="NodeJsIcon" />
              </div>
              <div className="cube__face cube__face--bottom">
                <img src={Laravel} alt="LaravelIcon" />
              </div>
            </div>
          </div>
          <img src={Tshirt} alt={"logo-tshirt"} className="logo-tshirt" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
