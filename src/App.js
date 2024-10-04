// Import necessary libraries and components
import React, { useLayoutEffect } from "react";
import "./App.scss";
import Homesection from "./section/Homesection";
import AboutMe from "./section/AboutMe";
import Projects from "./section/Projects";
import Contacts from "./section/Contacts";
import logo from "./assets/logo.webp";
import { DoubleMouseCursor } from "kripson-ui";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import { useEffect } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  // Scroll to the top of the page on initial render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation setup using GSAP
  useLayoutEffect(() => {
    const tl = gsap.timeline();

    // Logo animation sequence
    tl.to('.logo', {
      scale: 0.75,
      opacity: 0,
      width: 110,
      height: 64,
      duration: 0.5,
      delay: 3.75
    })
    .to('.logoContainer', {
      width: 150,
      height: 128,
      duration: 1,
    })
    .to('.logo', {
      width: 110,
      height: 64,
      scale: 1,
      opacity: 1,
      duration: 0.5,
    });

    // Background scaling animation
    gsap.fromTo([".background"],
      {
        transform: 'scale(2)'
      },
      {
        transform: 'scale(1)',
        opacity: 1,
        delay: 4,
        duration: 3
      });

    // Background fade-out animation on scroll
    gsap.fromTo(
      [".background"],
      {
        transform: 'scale(1)',
        opacity: 1,
        delay: 4,
        duration: 3
      },
      {
        transform: 'scale(2)',
        opacity: 0,
        scrollTrigger: {
          trigger: "#aboutme",
          scrub: 1,
          start: "top bottom",
          end: "center center",
        }
      }
    );

  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {/* Background and gradient overlay */}
        <div className="background">
          {/* <img src={BackgroundImage} alt="background image" /> */}
          <div className="gradient-background"></div>
        </div>

        {/* Logo container with link to home */}
        <div className="logoContainer">
          <a href="#home">
            <img className="logo" src={logo} alt="kripson-tshirt" />
          </a>
        </div>

        {/* Progress bar component */}
        <div className="first">
          <div className="progressBar h6">
            <CountUp end={100} suffix={"%"} duration={3.5} />
            <motion.div initial={{ width: "1%", backgroundColor: "white", height: "100%" }} animate={{ width: "100%", transition: { duration: 5, type: "spring", stiffness: 20 } }}></motion.div>
          </div>
        </div>

        {/* Custom mouse cursor */}
        <DoubleMouseCursor />

        <>
          {/* Hero section with navigation and home content */}
          <div className="HeroSection">
            <Nav />
            <div id="home">
              <Homesection />
            </div>
          </div>

          {/* About Me section */}
          <div id="aboutme" className="sectionContainer">
            <AboutMe />
          </div>

          {/* Projects section */}
          <Projects />

          {/* Contacts section */}
          <div id="contacts" className="sectionContainer">
            <Contacts />
          </div>
        </>
      </div>
    </BrowserRouter>
  );
}

export default App;
