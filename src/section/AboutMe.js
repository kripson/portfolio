import React from "react";
import "./AboutMe.scss";
import Nepal from "../assets/nepal.png";
import Australia from "../assets/australia.png";
import timeLine from "../assets/timeline_new.png";
import LazyLoad from "react-lazyload";

const AboutMe = () => {
  return (
    <LazyLoad>
      <div className="AboutMe">
        <h1>About Me</h1>
        <p>
          Let me talk a little bit about my roots. I was born and raised in
          Butwal, which is a city in South-Western Nepal. I travelled to
          Australia in 2017 to pursue my Bachelor's degree in IT. During my
          pursuit of academic qualification, I stumbled upon software development and
          fell in love with it. I like the idea of bringing my imagination to
          life, and software development allowed me to do exactly that.
        </p>
        <p>
          I have experience in developing websites and applications scaling from small
          service-advertising ones to large e-commerce sites.  I also am
          familiar with basic design principles as I designed most of my recent
          projects myself.
        </p>
        <p>Currently, I am working as a software engineer for kzen8 in Gold Coast, Australia.</p>
        <img src={timeLine} alt="timeline" />
      </div>
    </LazyLoad>
  );
};

export default AboutMe;
