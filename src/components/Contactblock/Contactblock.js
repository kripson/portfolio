import React from 'react';
import './Contactblock.scss';
import Linkedin from '../../assets/linkedinactive.png';
import Facebook from '../../assets/facebook.png';
import Github from '../../assets/github.png';


const Contactblock = ({show})=>
{
 return(<div className = "Contactblock" style = {{right:show}}>
        <div><a href = "https://www.linkedin.com/in/sankit-shrestha-14a397170/"><img src = {Linkedin} alt = "linkedin"/></a></div>
        <div><a href = "https://github.com/kripson"><img src = {Github} alt = "github"/></a></div>
        <div><a href = "https://www.facebook.com/sankit.shrestha.1?ref=bookmarks"><img src = {Facebook} alt = "facebook"/></a></div>

 </div>
 )

}


export default Contactblock;
