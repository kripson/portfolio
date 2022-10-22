import React,{useState,useEffect} from "react";
import './Intro.scss';
import HeroImage from '../../assets/hero-image.svg';
import Button from "../Button/Button";




const Intro = ()=>
{

   return(<div className="Intro">
       <div className="LeftSection">
           <h3 className="body">Hi! I am Sankit</h3>
           <h1 className="h1 primary-colour-text ">{"Software Developer"}</h1>

           <a href = "#contactscontainer"><div className="GetInTouchSection"><Button label="Get In Touch" onClick={()=>{}}></Button></div></a>
       </div>
       <div className="RightSection">
        <img src={HeroImage} alt = "Wevdev"/>
       </div>

    </div>)
}

export default Intro;
