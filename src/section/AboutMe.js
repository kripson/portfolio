import React, { useLayoutEffect } from "react";
import "./AboutMe.scss";
import Nepal from "../assets/Nepal.svg";
import GoldCoast from "../assets/goldcoast.webp";

import { useWindowWidth } from "@react-hook/window-size";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "../utils/splitText";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const width = useWindowWidth();

  useLayoutEffect(() => {
    // const texts = document.querySelectorAll(".aboutmeparagraph");

    // texts.forEach((text) => {
    //   const splitText = new SplitText(text);

    //   gsap.from(splitText.chars, {
    //     duration: 1,
    //     y: 100,
    //     autoAlpha: 0,
    //     stagger: 0.025,
    //     scrollTrigger: {
    //       trigger: ".AboutMe",
    //       scrub: 1,
    //       end: "center+=300 bottom"
    //     },
    //   });
    // });


    const childSplit = new SplitText(".aboutmeparagraph", {
      type: "lines",
      linesClass: "split-child"
    });

    gsap.from(childSplit.lines, {
      duration: 1,
      yPercent: 100,
      opacity: 0,
      ease: "power4",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".aboutmeparagraph",
        start: "top bottom",
        end: "bottom bottom"
      }
    });

  }, []);

  return (
    <div className="AboutMe full-width-element">

      <p className="h3 aboutmeparagraph">Hi, I am Sankit but I go by kripson on all my socials. I was born in Butwal, Nepal. Currently, I am based in Gold Coast, Australia and working as a software engineer at Kzen8.</p>

    </div>
  );
};

export default AboutMe;
