import React,{useState,useEffect} from "react";
import './Intro.scss';
import WebDev from '../../assets/webdev.png';




const Intro = ()=>
{






   return(<div className="Intro">
       <div className="LeftSection">
           <h1>Hi!<br/>I am <span>Sankit.</span>
           </h1>
           <h2>{"<h2>Web Developer</h2>"}<span className = "blinkingcursor">_</span></h2>

           <a href = "#contactscontainer"><div className="GetInTouchSection"><span className="GetInTouch">Get In Touch</span></div></a>
       </div>
       <div className="RightSection">
        <img src={WebDev} alt = "Wevdev"/>
       </div>

    </div>)
}

export default Intro;
