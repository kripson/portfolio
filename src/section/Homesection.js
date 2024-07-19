import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
import { useLayoutEffect } from "react";
import Intro from "../components/Intro/Intro";
import "./Homesection.scss";
gsap.registerPlugin(ScrollTrigger);

const Homesection = ({ firstLoaded }) => {

  return (
    <div className="Homepage">
      <Intro firstLoaded={firstLoaded} />
    </div>
  );
};

export default Homesection;
