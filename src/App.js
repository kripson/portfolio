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
import { motion } from "framer-motion/dist/framer-motion";
import CountUp from "react-countup";

function App() {
  const [firstLoaded, setFirstLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFirstLoaded(true);
    }, 4250);
  }, []);

  return (
    <BrowserRouter>
      <ParallaxProvider>
        <div className="App">
          <DoubleMouseCursor />
          <div className="first">
            <div className="progressBar h6">
              <CountUp end={100} suffix={"%"} duration={3.5} />
              <motion.div initial={{ width: "1%", backgroundColor: "white", height: "100%" }} animate={{ width: "100%", transition: { duration: 5, type: "spring", stiffness: 10 } }}></motion.div>
            </div>
          </div>
          {firstLoaded ? (
            <>
              <Nav></Nav>
              <Homesection></Homesection>
              <div id="aboutme" className="sectionContainer">
                <AboutMe />
              </div>

              <div id="skills" className="sectionContainer">
                <LazyLoad>
                  <Skills />
                </LazyLoad>
              </div>

              <div id="projects" className="sectionContainer">
                <Projects />
              </div>

              <div id="contacts" className="sectionContainer">
                <Contacts />
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </ParallaxProvider>
    </BrowserRouter>
  );
}

export default App;
