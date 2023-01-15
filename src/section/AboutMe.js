import React from "react";
import "./AboutMe.scss";
import Nepal from "../assets/Nepal.svg";
import Brisbane from "../assets/Brisbane.svg";
import GoldCoast from "../assets/GoldCoast.svg";

import { useParallax } from "react-scroll-parallax";
import {FaMapMarkerAlt} from 'react-icons/fa';

const AboutMe = () => {
  const h1Ref = useParallax({ speed: 10 });
  const h12Ref = useParallax({ speed: 12 });
  const h13Ref = useParallax({ speed: 15 });

  const nepalImageRef = useParallax({ speed: 15 });
  const brisbaneImageRef = useParallax({ speed: 20 });
  const goldCoastImageRef = useParallax({ speed: 18 });

  // const rightSectionRef = useParallax({ speed: 2.5 });

  return (
    <div className="AboutMe scaleIn full-width-element">
      <div className="topSection">

        <img src={Nepal} alt={"nepal"} ref={nepalImageRef.ref}></img>
        
        <p className="secondary-text">
         Hi, I am Sankit but I go by <span className="primary-colour-text">kripson</span> on all my socials. <br/>I was born in Butwal, Nepal where I spent my childhood and most of my teen years.
        </p>
        <h1 className="header" ref={h1Ref.ref}>
          1998 
          <span className="location"> Nepal</span>
        </h1>
      </div>
      <div className="middleSection">
        <h1 className="header" ref={h12Ref.ref}>
          2017 <br />
          <span className="location"> Brisbane</span>
          
        </h1>
        <img src={Brisbane} alt={"Brisbane"} ref={brisbaneImageRef.ref}></img>
        <p className="secondary-text">
          I moved to Brisbane, Australia in 2017 to pursue my degree in IT. <br/> As a university student, I came across <span className="primary-colour-text">Software Development </span> and fell in love with it.

        </p>
      </div>
      <div className="bottomSection">

        <img src={GoldCoast} alt={"GoldCoast"} ref={goldCoastImageRef.ref}></img>
        <p className="secondary-text">
          Currently, located at Gold Coast, I am working as a software engineer at <span className="primary-colour-text"> Kzen8</span>. <br/> <br/>

          I use my technological superpowers to bring my imagination to life and to help businesses solve their issues.</p>
        <h1 className="header" ref={h13Ref.ref}>
          2020 <br />
          <span className="location"> Gold Coast</span>
          
        </h1>
      </div>
    </div>
  );
};

export default AboutMe;
