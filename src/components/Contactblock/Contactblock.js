import React from 'react';
import './Contactblock.scss';
import Linkedin from '../../assets/linkedinactive.png';
import Facebook from '../../assets/facebook.png';


const Contactblock = ({show})=>
{
 return(<div className = "Contactblock" style = {{right:show}}>
        <div> <img src = {Linkedin}/></div>
        <div> <img src = {Facebook}/></div>
 </div>
 )

}


export default Contactblock;