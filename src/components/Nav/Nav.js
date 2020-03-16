import React,{useState} from "react";
import './Nav.scss';
import Linkedin from '../../assets/linkedinactive.png';
import Facebook from '../../assets/facebook.png';
import Hamburger from '../../assets/menu.png';
import Close from '../../assets/close.png';


const Nav = () =>
{
    var hamburgerbutton = "";
    const [hamburger,sethamburger] = useState('-20em');


    if(hamburger === '-20em')
    {
         hamburgerbutton =<img src={Hamburger} alt = "Hamburger Button"/>;

    }
    else
    {
         hamburgerbutton = <img src={Close} alt = "Close Button"/>;
    }


    return(
        <div className="Nav">
            <div className="hamburger" onClick={()=>{
                if(hamburger === "0")
                {
                    sethamburger('-20em');
                }
                else
                {
                    sethamburger('0');
                }

            }}>
                {hamburgerbutton}
            </div>
            <div className="hamburgermenu" style = {{top:hamburger}}>
                <ul>
                    <li>
                        <a onClick={()=>sethamburger('-20em')} href="#homecontainer">Home</a>
                    </li>
                    <li>
                        <a onClick={()=>sethamburger('-20em')} href="#aboutmecontainer">About Me</a>
                    </li>
                    <li>
                        <a onClick={()=>sethamburger('-20em')} href="#skillscontainer">Skills</a>
                    </li>
                    <li>
                        <a onClick={()=>sethamburger('-20em')} href="#projectscontainer"> Projects</a>
                    </li>
                    <li>
                        <a onClick={()=>sethamburger('-20em')} href="#contactscontainer">Contact</a>
                    </li>
                </ul>
            </div>
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