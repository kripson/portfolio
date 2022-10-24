import React, { useState } from "react";
import './Nav.scss';
import Linkedin from '../../assets/linkedinactive.png';
import Facebook from '../../assets/facebook.png';
import Hamburger from '../../assets/menu.png';
import Github from '../../assets/github.png';
import Close from '../../assets/close.png';
import logo from '../../assets/Kripson Logo 1.svg';
import { TfiFacebook, TfiLinkedin, TfiGithub } from 'react-icons/tfi';
import {GiHamburgerMenu} from 'react-icons/gi';
import { HamburgerMenuButton } from "../HamburgerMenuButton/HamburgerMenuButton";



const Nav = () => {
    var hamburgerbutton = "";
    const [hamburger, sethamburger] = useState('-100vh');

    const toggleHamburger = ()=>{
        console.log('test');
        if (hamburger === "0") {
            sethamburger('-100vh');
        }
        else {
            sethamburger('0');
        }
    }


    if (hamburger === '-100vh') {
        hamburgerbutton = <HamburgerMenuButton checked={false}/>;

    }
    else {
        hamburgerbutton = <HamburgerMenuButton checked={true}/>;
    }


    return (
        <div className="Nav">
            <div className="leftSection">
                <img className="logo" src={logo} alt="logo"></img>
                <div className="ContactLinks">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/sankit-shrestha-14a397170/"><TfiLinkedin /></a>
                        </li>
                        <li>
                            <a href="https://github.com/kripson"><TfiGithub /></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/sankit.shrestha.1?ref=bookmarks"><TfiFacebook /></a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="rightSection">
                <div className="hamburger" onClick={toggleHamburger}>
                    {hamburgerbutton}
                </div>
                <div className="hamburgermenu" style={{ top: hamburger }}>
                    
                    <ul>
                        <li className={`h3 ${hamburger === '-100vh' ? '' : 'pseudo-after-animated'}`}>
                            <a onClick={() => sethamburger('-100vh')} href="#homecontainer">Home</a>
                        </li>
                        <li className={`h3 ${hamburger === '-100vh' ? '' : 'pseudo-after-animated'}`}>
                            <a onClick={() => sethamburger('-100vh')} href="#aboutmecontainer">About Me</a>
                        </li>
                        <li className={`h3 ${hamburger === '-100vh' ? '' : 'pseudo-after-animated'}`}>
                            <a onClick={() => sethamburger('-100vh')} href="#skillscontainer">Skills</a>
                        </li>
                        <li className={`h3 ${hamburger === '-100vh' ? '' : 'pseudo-after-animated'}`}>
                            <a onClick={() => sethamburger('-100vh')} href="#projectscontainer"> Projects</a>
                        </li>
                        <li className={`h3 ${hamburger === '-100vh' ? '' : 'pseudo-after-animated'}`}>
                            <a onClick={() => sethamburger('-100vh')} href="#contactscontainer">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>




        </div>
    )
};
export default Nav;
