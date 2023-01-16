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
import { DoubleMouseCursor } from "kripson-ui";
import "kripson-ui/dist/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import { useEffect } from "react";

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
    <BrowserRouter>
      <ParallaxProvider>
        <div className="App">
          <DoubleMouseCursor />
          {/* <div className="first">
            <img src={logo}></img>
          </div> */}
          {/* <div className="appBackground"> */}
          {/* <div className="glassCard">

            </div>
            <svg width="1000" height="1000" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="linearGradientId" gradientTransform="rotate(-15 0.5 0.5)">
                  <stop offset="0%" stop-color="#3EFFDC" />
                  <stop offset="100%" stop-color="#f52a2a" />
                </linearGradient>

                <clipPath id="shape">
                  <path fill="currentColor" d="M792,591.5Q683,683,591.5,762Q500,841,365.5,805Q231,769,181,634.5Q131,500,186,370.5Q241,241,370.5,188Q500,135,665,152.5Q830,170,865.5,335Q901,500,792,591.5Z"></path>
                </clipPath>
              </defs>

              <g clip-path="url(#shape)">
                <path fill="url(#linearGradientId)" d="M792,591.5Q683,683,591.5,762Q500,841,365.5,805Q231,769,181,634.5Q131,500,186,370.5Q241,241,370.5,188Q500,135,665,152.5Q830,170,865.5,335Q901,500,792,591.5Z" />
              </g>
            </svg> */}
          {/* </div> */}
          <Nav></Nav>
          <Homesection></Homesection>

          <AboutMe />
          <LazyLoad offset={100}>
            <Skills />
          </LazyLoad>
          <Projects />
          <Contacts />

          {/* <Routes>
            <Route
              path="/"
              element={
                <div className="homecontainer" id="homecontainer" ref={homepage}>
                </div>
              }
            ></Route>

            <Route
              path="/aboutme"
              element={
                <div className="aboutmecontainer section" id="aboutmecontainer" ref={aboutme}>
                </div>
              }
            ></Route>

            <Route
              path="/skills"
              element={
                <div className="skillscontainer section" id="skillscontainer" ref={skills}>
                </div>
              }
            ></Route>

            <Route
              path="/projects"
              element={
                <div className="projectscontainer section" id="projectscontainer" ref={projects}>
                </div>
              }
            ></Route>

            <Route
              path="/contacts"
              element={
                <div className="contactscontainer section" id="contactscontainer" ref={contacts}>
                </div>
              }
            ></Route>
          </Routes> */}
        </div>
        {/* </ParallaxBanner> */}
      </ParallaxProvider>
    </BrowserRouter>
  );
}

export default App;
