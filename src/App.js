import React, { useState, useMemo, useRef, useLayoutEffect } from "react";
import "./App.scss";
import Homesection from "./section/Homesection";
import AboutMe from "./section/AboutMe";
import Projects from "./section/Projects";
import Contacts from "./section/Contacts";
import BackgroundImage from './assets/Group 1(3).svg';
import logo from "./assets/logo.png";

import { DoubleMouseCursor } from "kripson-ui";
import "kripson-ui/dist/style.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import { useEffect } from "react";
import CountUp from "react-countup";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [firstLoaded, setFirstLoaded] = useState(false);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setFirstLoaded(true);
    }, 4250);
  }, []);

  useEffect(() => {
    scrollYProgress.onChange((e) => {
      console.log(e);
    });
  }, [scrollYProgress]);

  useLayoutEffect(() => {
    gsap.to(".logoContainer", {
      width: 150,
      height: 128,
      duration: 1,
      delay: 3.5,
    });

    gsap.to(".logo", {
      width: 110,
      height: 64,
      duration: 1,
      delay: 3.5,
    });

    gsap.to(["#home", ".background"], {
      transform: 'scale(2)',
      opacity: 0,
      scrollTrigger: {
        trigger: ".jobSection",
        scrub: 1,
        start: "top bottom",
        end: "center center",
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">

        <div className="background">
          <img src={BackgroundImage} alt="background image" />
        </div>
        <div className="logoContainer">
          <a href="#home">
            <img className="logo" src={logo} alt="kripson-tshirt" />
          </a>
        </div>

        <div className="first">
          <div className="progressBar h6">
            <CountUp end={100} suffix={"%"} duration={3.5} />

            <motion.div initial={{ width: "1%", backgroundColor: "white", height: "100%" }} animate={{ width: "100%", transition: { duration: 5, type: "spring", stiffness: 10 } }}></motion.div>
          </div>
        </div>
        <DoubleMouseCursor />
        <>
          <Nav></Nav>
          <div id="home">
            <Homesection></Homesection>
          </div>
          <div id="aboutme" className="sectionContainer">
            <AboutMe />
          </div>

          <Projects />

          <div id="contacts" className="sectionContainer">
            <Contacts />
          </div>
        </>
      </div>
    </BrowserRouter>
  );
}

export default App;
