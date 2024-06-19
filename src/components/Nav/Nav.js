import React, { useLayoutEffect, useState } from "react";
import "./Nav.scss";
import { RiArrowRightDownLine } from "react-icons/ri";
import { HamburgerMenuButton } from "../HamburgerMenuButton/HamburgerMenuButton";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

  useLayoutEffect(() => {
    gsap.to(".Nav", {
      borderBottom: "none",
      delay: 0,
      duration: 0.1,
      scrollTrigger: {
        trigger: ".Nav",
        start: "bottom top",
        toggleActions: "play none reverse none",
      },
    });
  });

  return (
    <div className="Nav">
      <div className="leftSection"></div>

      <div className="rightSection">
        <div className="ContactLinks">
          <ul>
            <li className="heading">
              <a className="animatedBorderBottomOnHover" href="https://www.linkedin.com/in/sankit-shrestha-14a397170/" target="_blank" rel="noreferrer">
                LINKEDIN
                <RiArrowRightDownLine />
              </a>
            </li>
            <li className="heading">
              <a className="animatedBorderBottomOnHover" href="https://github.com/kripson" target="_blank" rel="noreferrer">
                GITHUB
                <RiArrowRightDownLine />
              </a>
            </li>
            <li className="heading">
              <a className="animatedBorderBottomOnHover" href="https://www.instagram.com/kripson.dev/" target="_blank" rel="noreferrer">
                INSTAGRAM
                <RiArrowRightDownLine />
              </a>
            </li>
          </ul>
        </div>
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
            {/* <li className={`h3 ${hamburger === "-100vh" ? "" : "pseudo-after-animated"}`}>
              <a onClick={() => sethamburger("-100vh")} href="#skills">
                <span className="nav-index-number">03</span> Skills
              </a>
            </li> */}
            <li className={`h3 ${hamburger === "-100vh" ? "" : "pseudo-after-animated"}`}>
              <a onClick={() => sethamburger("-100vh")} href="#projects">
                <span className="nav-index-number">03</span> Projects
              </a>
            </li>
            <li className={`h3 ${hamburger === "-100vh" ? "" : "pseudo-after-animated"}`}>
              <a onClick={() => sethamburger("-100vh")} href="#contacts">
                <span className="nav-index-number">04</span> Contact
              </a>
            </li>
          </ul>
          <div className="contacts">
            <div className="email">
              <a href="mailto:sankit.jobs@gmail.com">
                <svg width="147.50822mm" height="35.658401mm" viewBox="0 0 147.50822 35.658401" version="1.1" id="svg5">
                  <defs id="defs2">
                    <filter x="-0.087965049" width="1.1759301" y="-0.21456409" height="1.4291282" style={{ colorInterpolationFilters: "sRGB" }} id="filter1201">
                      <feGaussianBlur result="result1" in="SourceGraphic" stdDeviation="0.01" id="feGaussianBlur1187" />
                      <feTurbulence result="result0" numOctaves="5" baseFrequency="0.05" type="fractalNoise" id="feTurbulence1189" />
                      <feDisplacementMap result="result2" scale="20" yChannelSelector="G" xChannelSelector="R" in="result1" in2="result0" id="feDisplacementMap1191" />
                      <feGaussianBlur result="result4" in="result2" stdDeviation="5" id="feGaussianBlur1193" />
                      <feComposite result="result6" k1="1" k3="1" k2="0.5" in="result0" in2="result4" operator="arithmetic" id="feComposite1195" k4="0" />
                      <feComposite in="result6" in2="result0" operator="in" result="result91" id="feComposite1197" />
                      <feComposite operator="arithmetic" k1="1.5" in="result2" in2="result91" id="feComposite1199" k2="0" k3="0" k4="0" />
                    </filter>
                  </defs>
                  <g id="layer1" transform="translate(-13.138713,-67.69252)">
                    <circle id="path46" style={{ fill: "#000000", stroke: "#000000", strokeWidth: "0.264583" }} cx="-20.423077" cy="97.269234" r="0.047922984" />
                    <path
                      style={{ fill: "#333333", strokeWidth: "1.1", strokeLinecap: "round", strokeMiterlimit: "3.7", strokeOpacity: 0 }}
                      id="path4317"
                      d="m 123.29278,77.774907 c -1.57252,-0.254103 -3.13986,-0.542705 -4.71757,-0.762312 -14.53659,-2.023411 -29.188513,-3.277296 -43.860444,-3.723812 -6.766327,-0.205922 -13.539814,-0.294536 -20.307803,-0.153392 -6.35377,0.132506 -12.693708,0.64933 -19.040562,0.973992 -3.505673,0.487418 -16.50742,1.295247 -20.832425,4.64539 -1.068894,0.827964 -1.760399,2.651419 -1.190541,3.877517 2.220224,4.777007 13.640546,8.563469 16.553738,9.541245 5.534025,1.857428 11.255634,3.100419 16.883451,4.650626 7.319732,1.292394 14.590122,2.904813 21.959197,3.877179 16.523483,2.1803 32.859309,3.12745 49.522169,2.41668 9.43196,-0.40232 26.47281,-1.64417 36.1592,-5.944694 2.47947,-1.100822 4.15049,-3.494526 6.22574,-5.24179 -0.74611,-2.189948 -0.66709,-4.871682 -2.23833,-6.569842 -2.72131,-2.941129 -6.43427,-4.845523 -10.00541,-6.66288 -10.70953,-5.450099 -20.40387,-7.657835 -31.89491,-11.003269 -0.21158,-0.111231 -1.78463,2.881021 -1.57305,2.992252 v 0 c 11.26695,3.125621 21.02306,5.412335 31.78874,9.986362 3.46144,1.470668 7.00881,2.967516 9.96325,5.294698 1.35298,1.065737 1.66635,3.014753 2.49953,4.522129 -2.02021,1.326581 -3.77225,3.202308 -6.06061,3.979746 -8.82317,2.997541 -25.35937,4.152842 -33.76668,4.432025 C 95.557146,99.693163 71.731705,97.88083 48.280989,93.78557 37.416493,91.302333 29.836835,90.179773 19.863395,86.01952 c -1.827173,-0.762175 -3.884894,-1.46867 -5.113574,-3.021028 -0.53131,-0.671277 0.03187,-2.042364 0.787619,-2.444544 4.429471,-2.357176 17.799493,-2.839895 20.819794,-3.113222 5.700421,-0.217366 11.397633,-0.548871 17.101262,-0.652095 23.146011,-0.418902 46.296836,0.535823 69.384394,2.114137 0.0798,0.03181 0.52964,-1.096047 0.44989,-1.127861 z"
                    />
                  </g>
                </svg>
                <span className="h6">sankit.jobs@gmail.com</span>
              </a>
            </div>
            <div className="socials">
              <div className="socialLinks">
                <a className="animatedBorderBottomOnHover" href="https://www.linkedin.com/in/sankit-shrestha-14a397170/" target="_blank" rel="noreferrer">
                  LINKEDIN
                  <RiArrowRightDownLine />
                </a>

                <a className="animatedBorderBottomOnHover" href="https://github.com/kripson" target="_blank" rel="noreferrer">
                  GITHUB
                  <RiArrowRightDownLine />
                </a>

                <a className="animatedBorderBottomOnHover" href="https://www.instagram.com/kripson.dev/" target="_blank" rel="noreferrer">
                  INSTAGRAM
                  <RiArrowRightDownLine />
                </a>
              </div>
              <span>Feel free to reach out to me for collaboration or a chat </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;
