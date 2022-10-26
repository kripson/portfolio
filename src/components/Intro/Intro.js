import React, { useState, useEffect } from "react";
import "./Intro.scss";
import HeroImage from "../../assets/profile-pic.png";
import Button from "../Button/Button";
import { useParallax } from "react-scroll-parallax";
import { useWindowWidth } from "@react-hook/window-size";

const Intro = () => {
  const heroImageRef = useParallax({ speed: 10, translateX: [-75, 75] });
  const onlyWidth = useWindowWidth();

  return (
    <div className="Intro">
      <div className="LeftSection">
        <h3 className="body pseudo-after-animated">Hi! I am Sankit</h3>
        <h1 className="h1 primary-colour-text pseudo-after-animated">{"Software Developer"}</h1>

        <a href="#contactscontainer">
          <div className="GetInTouchSection">
            <Button label="Let's work together" className="pseudo-after-animated" onClick={() => {}}></Button>
          </div>
        </a>
      </div>
      <div className="RightSection">
        <img src={HeroImage} style={{display: onlyWidth >= 1200 ? 'block' : 'none'}} alt="Wevdev" ref={heroImageRef.ref} />
        {onlyWidth >= 1200 ? "" : <img src={HeroImage} alt="Wevdev" />}
      </div>
    </div>
  );
};

export default Intro;
