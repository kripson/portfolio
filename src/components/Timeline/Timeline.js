import React from "react";
import './Timeline.scss';
import Homeicon from '../../assets/home.png';
import Skillsicon from '../../assets/skills.png';
import Projectsicon from '../../assets/project.png';
import Contactsicon from '../../assets/contact.png';
import Meicon from '../../assets/user.png';

const Timeline = ({show,currentSection})=>
{
    var Home = <span style={{backgroundColor: 'rgb(255,255,255)',border: '3px solid white'}}><a href="#homecontainer"><img src={Homeicon}/></a></span>;
    var AboutMe = <span style={{backgroundColor: 'rgb(255,255,255)',border: '3px solid white'}}><a href="#aboutmecontainer"><img src={Meicon}/></a></span>;
    var Skills = <span style={{backgroundColor: 'rgb(255,255,255)',border: '3px solid white'}}><a href="#skillscontainer"><img src={Skillsicon}/></a></span>;
    var Projects = <span style={{backgroundColor: 'rgb(255,255,255)',border: '3px solid white'}}><a href="#projectscontainer"><img src={Projectsicon}/></a></span>;
    var Contacts = <span style={{backgroundColor: 'rgb(255,255,255)',border: '3px solid white'}}><a href="#contactscontainer"><img src={Contactsicon} style = {{margin:"3px 3px 0 0"}} /></a></span>;

    if(currentSection === "Home") {
        Home = <span style={{backgroundColor: 'rgb(255,255,255)',border: '3px solid #18DBD3',transform: 'scale(1.25)'}}><a href="#homecontainer"><img src={Homeicon} alt = "Home"/></a></span>;
    }
    else if(currentSection === "AboutMe") {
        AboutMe = <span style = { {backgroundColor:'rgb(255,255,255)',border: '3px solid #18DBD3',transform: 'scale(1.25)'}} ><a href="#aboutmecontainer"><img src={Meicon}/></a></span>;
    }
    else if(currentSection === "Skills") {
        Skills = <span style = { {backgroundColor:'rgb(255,255,255)',border: '3px solid #18DBD3',transform: 'scale(1.25)'}} ><a href="#skillscontainer"><img src={Skillsicon}/></a></span>;
    }
    else if(currentSection === "Projects") {
        Projects = <span style = { {backgroundColor:'rgb(255,255,255)',border: '3px solid #18DBD3',transform: 'scale(1.25)'}} ><a href="#projectscontainer"><img src={Projectsicon}/></a></span>;
    }
    else if(currentSection === "Contacts") {
        Contacts = <span style = { {backgroundColor:'rgb(255,255,255)',border: '3px solid #18DBD3',transform: 'scale(1.25)'}} ><a href="#contactscontainer"><img src={Contactsicon}/></a></span>;
    }

    return(<div className="Timeline" style = {{left:show}}>
        {Home}
        {AboutMe}
        {Skills}
        {Projects}
        {Contacts}


    </div>)
}

export default Timeline;
