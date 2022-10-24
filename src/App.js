import React, { useState, useEffect } from "react";
import "./App.scss";
import Homesection from "./section/Homesection";
import Timeline from "./components/Timeline/Timeline";
import AboutMe from "./section/AboutMe";
import Skills from "./section/Skills";
import Projects from "./section/Projects";
import Contacts from "./section/Contacts";
import Contactblock from "./components/Contactblock/Contactblock";
import { Preloader, Placeholder } from "react-preloading-screen";
import { ParallaxProvider } from "react-scroll-parallax";
import logo from "./assets/Kripson Logo 1.svg";
import backgroundImage from "./assets/background.svg";

import BackgroundVideo from "./assets/background2.mp4";
import { ParallaxBanner } from "react-scroll-parallax";

function App() {
  const [currentSection, setSection] = useState("Home");
  const [timelineshow, setTimeLineShow] = useState("-5em");
  const [contactblockshow, setContactBlockShow] = useState("none");
  const homepage = React.createRef();
  const aboutme = React.createRef();
  const skills = React.createRef();
  const projects = React.createRef();
  const contacts = React.createRef();
  // useScrollPosition(({ prevPos, currPos }) => {

  //     if(currPos.y === 0 )
  //     {
  //         setTimeLineShow('-5em');
  //         setContactBlockShow('-5em')
  //     }
  //     else if(currPos.y * -1 >= contacts.current.offsetTop -200)
  //     {
  //         setSection('Contacts');
  //         setTimeLineShow('0');
  //         setContactBlockShow('0')

  //     }
  //     else if(currPos.y * -1 >= projects.current.offsetTop -200)
  //     {
  //         setSection('Projects');
  //         setTimeLineShow('0');
  //         setContactBlockShow('-5em')
  //     }
  //     else if(currPos.y * -1 >= skills.current.offsetTop -200)
  //     {
  //         setSection('Skills');
  //         setTimeLineShow('0');
  //         setContactBlockShow('-5em')
  //     }
  //     else if(currPos.y * -1 >= aboutme.current.offsetTop -200)
  //     {
  //         setSection('AboutMe');
  //         setTimeLineShow('0');
  //         setContactBlockShow('-5em')
  //     }
  //     else
  //     {
  //         setSection('Home');
  //         setTimeLineShow('0');
  //         setContactBlockShow('-5em')
  //     }

  // });

  return (
    <ParallaxProvider>
      {/* <ParallaxBanner
        layers={[
          { image: backgroundImage, speed: -40 },
          { image: logo, speed: -10 },
        ]}
        className="aspect-[2/1]"
      > */}
        <div className="App">
          {/* <video autoPlay="true" loop="true" id="backgroundVideo">
        <source src={BackgroundVideo} type="video/mp4"/>
      </video> */}
          <div className="first">
            <img src={logo}></img>
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
