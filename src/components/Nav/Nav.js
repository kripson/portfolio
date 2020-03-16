import React from "react";
import './Nav.scss';
import Linkedin from '../../assets/linkedinactive.png';
import Facebook from '../../assets/facebook.png';


const Nav = () =>
{
    return(
        <div className="Nav">
            <div className="NavigationLinks">
               <ul>
                   <li>
                       <a href="#homecontainer">Home</a>
                   </li>
                   <li>
                       <a href="#aboutmecontainer">About Me</a>
                   </li>
                   <li>
                       <a href="#skillscontainer">Skills</a>
                   </li>
                   <li>
                       <a href="#projectscontainer"> Projects</a>
                   </li>
                   <li>
                       <a href="#contactscontainer">Contact</a>
                   </li>
               </ul>

            </div>
            <div className="ContactLinks">
                <ul>
                    <li>
                        <img src={Linkedin} alt="linkedin"/>
                    </li>
                    <li>
                        <img src={Facebook} alt="Facebook"/>
                    </li>
                </ul>
            </div>

        </div>
    )
};
export default Nav;