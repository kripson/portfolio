import React, { useLayoutEffect } from "react";
import "./AboutMe.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "../utils/splitText";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {

  useLayoutEffect(() => {

    const childSplit = new SplitText(".aboutmeparagraph", {
      type: "lines",
      linesClass: "split-child"
    });

    gsap.from(childSplit.lines, {
      duration: 1,
      yPercent: 100,
      opacity: 0,
      ease: "power4",
      delay: 0.25,
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

      <p className="h3 aboutmeparagraph">Hi, I'm Sankit but I go by kripson on all my socials.
Originally from Butwal, Nepal, I am now based in Gold Coast, Australia.
Currently, I am working as a Senior Software Engineer at Ignite Travel Group.</p>

    </div>
  );
};

export default AboutMe;
