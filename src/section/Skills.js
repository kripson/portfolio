import React, { useRef } from "react";
import "./Skills.scss";
import Html from "../assets/html-5.png";
import Css from "../assets/css.png";
import ReactIcon from "../assets/react.png";
import Angular from "../assets/angular.png";
import Node from "../assets/nodejs.png";
import Laravel from "../assets/laravel.png";
import Firebase from "../assets/firebase.png";
import Mongodb from "../assets/mongodb.png";
import Vue from "../assets/vue.png";
import Figma from "../assets/figma.png";


import LazyLoad from "react-lazy-load";
import Spline from "@splinetool/react-spline";
import Tshirt from "../assets/T-Shirt.svg";
import { Parallax, useParallax } from "react-scroll-parallax";
import { motion } from "framer-motion/dist/framer-motion";
import { useWindowWidth } from "@react-hook/window-size";
import { StaggerTextReveal } from "stagger-text-reveal-animation";
// import React  from "../assets/react.png"

const Skills = () => {
  const width = useWindowWidth();
  const skills = [
    {
      name: "Front-end Development",
      tools: [
        {
          name: "React",
          value: "100",
          iconPath: ReactIcon,
          x: -100,
          y: -50,
        },
        {
          name: "Angular",
          value: "90",
          iconPath: Angular,
          x: 120,
          y: -60,
        },

        {
          name: "Vue",
          value: "50",
          iconPath: Vue,
          x: 200,
          y: 100,
        },
      ],
    },
    {
      name: "Back-end Development",
      tools: [
        {
          name: "Firebase",
          value: "50",
          iconPath: Firebase,
          x: -300,
          y: 50,
        },
        {
          name: "Laravel",
          value: "40",
          iconPath: Laravel,
          x: -200,
          y: 80,
        },
        {
          name: "NodeJs",
          value: "100",
          iconPath: Node,
          x: 100,
          y: 280,
        },
        {
          name: "MongoDB",
          value: "100",
          iconPath: Mongodb,
          x: -300,
          y: 250,
        },
      ],
    },
    {
      name: "UI/UX",
      tools: [
        {
          name: "figma",
          value: "60",
          iconPath: Figma,
          x: -220,
          y: -100,
        },
        {
          name: "canva",
          value: "50",
          iconPath: Firebase,
          x: -300,
          y: 50,
        },
      ],
    },
  ];

  return (
    <div className="Skills">
      <div className="leftSection">
        <h1 className="header">SKILLS</h1>

        {/* <p>
          Currently, in terms of front end development tools, I mostly work with <span className="primary-colour-text">React and redux </span>. However, I am also proficient in using other frameworks like{" "}
          <span className="primary-colour-text">Angular and Vue</span>. In terms of back end development,<span className="primary-colour-text"> NodeJs (Express)</span> is my weapon of choice to create the server and then I choose between
          SQL or NoSQL database depending on the project. I am also familiar with firebase(Google Service).
        </p>
        <p>Apart from Single Page Applications, I have also worked with Laravel. I started with Laravel as some clients do not prefer SPAs due to SEO related challenges.</p>
        <p>
          Later on, I discovered <span className="primary-colour-text">NextJs</span> which allowed my javascript applications to retain the seamless nature of SPAs while being SEO friendly.
        </p> */}
      </div>

      <div className="rightSection">
        {skills.map((skill, idx) => (
          // <motion.div
          //   key={idx}
          //   className="skillBubble"
          //   initial={{ opacity: 0,}}
          //   animate={{ opacity: [1, 0, 1, 0] }}
          //   transition={{ duration: 2, repeat: Infinity,  repeatDelay: 1 }}
          //   style={{ transform: `scale(${(skill.value / 75) * Math.max(Math.random(), 0.75)}` }}
          // >
          //   {skill.name}
          // </motion.div>
          // <Parallax speed={idx * (Math.random() < 1 ? -1.25 : 1.25 )}>
          //   <motion.div
          //     drag
          //     key={idx}
          //     className="skillBubble"
          //     initial={{ opacity: 0, filter: "sepia(1)", scale: width > 1200 ? (skill.value / 55) * Math.max(Math.random(), 0.75) : (skill.value / 90) * Math.max(Math.random(), 0.75) }}
          //     animate={{ opacity: 1, x: width >800 ? skill.x : skill.x/2, y: width > 800 ? skill.y : skill.y/2}}
          //     whileHover={{
          //       x: skill.x * 1.25,
          //       y: skill.y * 1.25,
          //       filter: "grayscale(0)",
          //     }}
          //     transition={{ type: "spring", duration: 1, stiffness: 100 }}
          //   >
          //     {skill.iconPath ? <img src={skill.iconPath} alt={skill.name} />: skill.name}
          //     {/* {skill.name} */}
          //   </motion.div>
          // </Parallax>
          <div className="skill" key={idx}>
            <span className="h4">{skill.name}</span>
            <div className="toolsContainer">
              {skill.tools.map((tool, idx) => {
                return <span className="h6 tool">{tool.iconPath ? <img src={tool.iconPath} alt={tool.name} />: ''}<StaggerTextReveal text={tool.name} fontSize={24} triggerAfter={2}></StaggerTextReveal></span>;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
