import React, { useLayoutEffect } from "react";
import "./AboutMe.scss";
import Nepal from "../assets/nepal-2.webp";
import GoldCoast from "../assets/goldcoast.webp";

import { useWindowWidth } from "@react-hook/window-size";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "../utils/splitText";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const width = useWindowWidth();

  useLayoutEffect(() => {
    const texts = document.querySelectorAll(".aboutmeparagraph");

    texts.forEach((text) => {
      const splitText = new SplitText(text);

      gsap.from(splitText.chars, {
        duration: 1,
        y: 100,
        autoAlpha: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".AboutMe",
          scrub: 1,
          end: "center+=300 bottom"
        },
      });
    });

    gsap.to('.photoContainer img', {
      duration: 1,
      y: -50,
      stagger: 0.5,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger: {
        trigger: ".aboutmeparagraph",
        scrub: 1
      },
    });

  }, []);

  return (
    <div className="AboutMe full-width-element">

      <p className="h3 aboutmeparagraph">Hi, I am Sankit but I go by kripson on all my socials. I was born in Butwal, Nepal. Currently, I am based in Gold Coast, Australia and working as a software engineer at Kzen8.</p>
      <div className="photoContainer">
        <img src={Nepal} alt={"Nepal"} />

        <img src={GoldCoast} alt={"GoldCoast"} />
      </div>
    </div>
  );
};

export default AboutMe;
