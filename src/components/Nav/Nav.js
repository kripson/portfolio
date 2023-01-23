import React, { useState } from "react";
import "./Nav.scss";
import logo from "../../assets/Kripson Logo 1.svg";
import { TfiFacebook, TfiLinkedin, TfiGithub } from "react-icons/tfi";
import { RiArrowRightDownLine } from "react-icons/ri";
import { HamburgerMenuButton } from "../HamburgerMenuButton/HamburgerMenuButton";
import { Link } from "react-router-dom";
import { StaggerTextReveal } from "stagger-text-reveal-animation";

const Nav = () => {
  var hamburgerbutton = "";
  const [hamburger, sethamburger] = useState("-100vh");

  const toggleHamburger = () => {
    if (hamburger === "0") {
      sethamburger("-100vh");
    } else {
      sethamburger("0");
    }
  };

  if (hamburger === "-100vh") {
    hamburgerbutton = <HamburgerMenuButton checked={false} />;
  } else {
    hamburgerbutton = <HamburgerMenuButton checked={true} />;
  }

  return (
    <div className="Nav">
      <div className="leftSection">
        {/* <Link to="/">
          <img className="logo" src={logo} alt="logo"></img>
        </Link> */}

        <div className="ContactLinks">
          <ul>
            <li className="heading">
              <a className="animatedBorderBottomOnHover" href="https://www.linkedin.com/in/sankit-shrestha-14a397170/" target="_blank" rel="noreferrer">
              <StaggerTextReveal text={"LINKEDIN"} fontSize={24} direction={'down'}></StaggerTextReveal>   <RiArrowRightDownLine/>
              </a>
            </li>
            <li className="heading">
              <a className="animatedBorderBottomOnHover" href="https://github.com/kripson" target="_blank" rel="noreferrer">
                <StaggerTextReveal text={"GITHUB"} fontSize={24}></StaggerTextReveal><RiArrowRightDownLine/>
              </a>
            </li>
            <li className="heading">
              <a className="animatedBorderBottomOnHover" href="https://www.instagram.com/kripson.dev/" target="_blank" rel="noreferrer">
                <StaggerTextReveal text={"INSTAGRAM"} fontSize={24} direction={'down'}></StaggerTextReveal><RiArrowRightDownLine/>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="rightSection">
        <div className="hamburger" onClick={toggleHamburger}>
          {/* <span style={hamburger === '-100vh' ? {} : {color: 'black'}}>{hamburger === "-100vh" ? 'menu' : 'close'}</span>  */}
          {hamburgerbutton}
        </div>
        <div className="hamburgermenu" style={{ top: hamburger }}>
          <ul>
            <li className={`h3 ${hamburger === "-100vh" ? "" : "pseudo-after-animated"}`}>
              <a onClick={() => sethamburger("-100vh")} href="/">
                <span className="nav-index-number">01</span> Home
              </a>
            </li>
            <li className={`h3 ${hamburger === "-100vh" ? "" : "pseudo-after-animated"}`}>
              <a onClick={() => sethamburger("-100vh")} href="#aboutme">
                <span className="nav-index-number">02</span> About Me
              </a>
            </li>
            <li className={`h3 ${hamburger === "-100vh" ? "" : "pseudo-after-animated"}`}>
              <a onClick={() => sethamburger("-100vh")} href="#skills">
                <span className="nav-index-number">03</span> Skills
              </a>
            </li>
            <li className={`h3 ${hamburger === "-100vh" ? "" : "pseudo-after-animated"}`}>
              <a onClick={() => sethamburger("-100vh")} href="#projects">
                <span className="nav-index-number">04</span> Projects
              </a>
            </li>
            <li className={`h3 ${hamburger === "-100vh" ? "" : "pseudo-after-animated"}`}>
              <a onClick={() => sethamburger("-100vh")} href="#contacts">
                <span className="nav-index-number">05</span> Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Nav;
