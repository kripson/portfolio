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
    spline.current.setZoom(0.85)
  }



  const getSplinePositionStyling = ()=>{
    if(![null, undefined].includes(pointerPosition.x) && ![null, undefined].includes(pointerPosition.y))
    {
      let pos = {
        top: 0,
        left: 0
      }

      if(pointerPosition.x > window.innerWidth/2){
        pos.left = `${- (pointerPosition.x - window.innerWidth/2) * 0.05}px`; 
      }

      
      if(pointerPosition.y > window.innerHeight/2){
        pos.top = `${- (pointerPosition.y - window.innerHeight/2) * 0.05}px`; 
      }

      if(pointerPosition.x <= window.innerWidth/2){
        pos.left = `${- (pointerPosition.x - window.innerWidth/2) * 0.05}px`; 
      }

      
      if(pointerPosition.y <= window.innerHeight/2){
        pos.top = `${- (pointerPosition.y - window.innerHeight/2) * 0.05}px`; 
      }
      console.log(pos);
      return pos

    }
    else
    {
      return {top: 0, left: 0}
    }
  }

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
        <Cursor pointerPosition={pointerPosition} />
        <div className="first">
          <img src={logo}></img>
        </div>
        <div className="splineContainer scaleIn" style={getSplinePositionStyling()}>
          <Spline scene="https://prod.spline.design/Vj6hmalV1i5tlR6B/scene.splinecode" onLoad={onLoad}/>
          <div className="appBackground">

          </div>
        </div>
        <Contactblock show={contactblockshow} />
        {/* <Timeline show = {timelineshow} currentSection = {currentSection} /> */}
        <div className="homecontainer" id="homecontainer" ref={homepage}>
          <Homesection></Homesection>
        </div>

        <div className="aboutmecontainer" id="aboutmecontainer" ref={aboutme}>
          <AboutMe />
        </div>
        <div className="skillscontainer" id="skillscontainer" ref={skills}>
          <Skills />
        </div>
        <div className="projectscontainer" id="projectscontainer" ref={projects}>
          <Projects />
        </div>
        <div className="contactscontainer" id="contactscontainer" ref={contacts}>
          <Contacts />
        </div>
      </div>
      {/* </ParallaxBanner> */}
    </ParallaxProvider>
  );
}

export default App;
