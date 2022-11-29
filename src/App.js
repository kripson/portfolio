import React, { useState, useMemo, useRef } from "react";
import "./App.scss";
import Homesection from "./section/Homesection";
import AboutMe from "./section/AboutMe";
import Skills from "./section/Skills";
import Projects from "./section/Projects";
import Contacts from "./section/Contacts";
import Contactblock from "./components/Contactblock/Contactblock";
import { ParallaxProvider } from "react-scroll-parallax";
import logo from "./assets/Kripson Logo 1.svg";
import { Cursor } from "./components/Cursor/cursor";
import Spline from "@splinetool/react-spline";
import LazyLoad from "react-lazy-load";
import {DoubleMouseCursor} from 'kripson-ui';
import 'kripson-ui/dist/style.css';

function App() {
  const [contactblockshow, setContactBlockShow] = useState("none");
  const homepage = React.createRef();
  const aboutme = React.createRef();
  const skills = React.createRef();
  const projects = React.createRef();
  const contacts = React.createRef();
  const [pointerPosition, setPointerPosition] = useState({
    x: 0,
    y: 0,
  });

  const onMouseMove = (e) => {
    setPointerPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const spline = useRef();

  function onLoad(splineApp) {
    // save the app in a ref for later use
    spline.current = splineApp;
    spline.current.setZoom(0.85);
  }

  const getSplinePositionStyling = () => {
    if (![null, undefined].includes(pointerPosition.x) && ![null, undefined].includes(pointerPosition.y)) {
      let pos = {
        top: 0,
        left: 0,
      };

      if (pointerPosition.x > window.innerWidth / 2) {
        pos.left = `${-(pointerPosition.x - window.innerWidth / 2) * 0.05}px`;
      }

      if (pointerPosition.y > window.innerHeight / 2) {
        pos.top = `${-(pointerPosition.y - window.innerHeight / 2) * 0.05}px`;
      }

      if (pointerPosition.x <= window.innerWidth / 2) {
        pos.left = `${-(pointerPosition.x - window.innerWidth / 2) * 0.05}px`;
      }

      if (pointerPosition.y <= window.innerHeight / 2) {
        pos.top = `${-(pointerPosition.y - window.innerHeight / 2) * 0.05}px`;
      }

      return pos;
    } else {
      return { top: 0, left: 0 };
    }
  };

  return (
    <ParallaxProvider>
      {/* <ParallaxBanner
        layers={[
          { image: backgroundImage, speed: -40 },
          { image: logo, speed: -10 },
        ]}
        className="aspect-[2/1]"
      > */}
      <div className="App" onMouseMove={onMouseMove}>
        {/* <Cursor pointerPosition={pointerPosition} /> */}
        <DoubleMouseCursor/>
        <div className="first">
          <img src={logo}></img>
        </div>
        <div className="appBackground"></div>
        <div className="splineContainer scaleIn" style={getSplinePositionStyling()}>
          <Spline scene="https://prod.spline.design/Vj6hmalV1i5tlR6B/scene.splinecode" onLoad={onLoad} />
        </div>
        {/* <Contactblock show={contactblockshow} /> */}
        {/* <Timeline show = {timelineshow} currentSection = {currentSection} /> */}
        <div className="homecontainer" id="homecontainer" ref={homepage}>
          <Homesection></Homesection>
        </div>

        <div className="aboutmecontainer section" id="aboutmecontainer" ref={aboutme}>
          <LazyLoad offset={-100}>
            <AboutMe />
          </LazyLoad>
        </div>
        <div className="skillscontainer section" id="skillscontainer" ref={skills}>
          <LazyLoad offset={-100}>
            <Skills />
          </LazyLoad>
        </div>
        <div className="projectscontainer section" id="projectscontainer" ref={projects}>
          <LazyLoad offset={-100}>
            <Projects />
          </LazyLoad>
        </div>
        <div className="contactscontainer section" id="contactscontainer" ref={contacts}>
          <LazyLoad offset={-100}>
            <Contacts />
          </LazyLoad>
        </div>
      </div>
      {/* </ParallaxBanner> */}
    </ParallaxProvider>
  );
}

export default App;
