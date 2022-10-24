import React from "react";
import "./AboutMe.scss";
import Australia from "../assets/australia.png";
import timeLine from "../assets/timeline_new.png";
import LazyLoad from "react-lazy-load";
import Nepal from '../assets/Nepal.svg';
import { useParallax } from 'react-scroll-parallax';

const AboutMe = () => {

  const h1Ref = useParallax({speed: 10});
  const nepalImageRef = useParallax({speed: 15});  
  const rightSectionRef = useParallax({speed: 2.5});




  return (
      <div className="AboutMe" >
        <div className="leftSection">
          <h1 className="body" ref={h1Ref.ref}>ABOUT <br />ME </h1>
          <img src={Nepal} alt={'nepal'} ref={nepalImageRef.ref}></img>
        </div>
        <div className="rightSection" ref={rightSectionRef.ref}>

          <h3 className="primary-colour-text">About Me</h3>
          <p>
            Hello, I am Sankit Shrestha but I go by <span className="primary-colour-text">kripson</span> in most of my socials.
          </p>
          <p>
            I like bringing my imagination to life using the power of <span className="primary-colour-text">Software Development. </span>
            I have experience in developing websites and applications scaling from small service-advertising sites to large e-commerce platforms.

          </p>
          <p>
            Originally, from Nepal, I am currently working as a software engineer at <span className="primary-colour-text"> <a href="https://kzen8.com" target="_blank" rel="noreferral">kzen8</a></span> in Gold Coast, Australia.</p>
        </div>
        {/* <img src={timeLine} alt="timeline" /> */}
      </div>
  );
};

export default AboutMe;
