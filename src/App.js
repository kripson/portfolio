import React,{useState,useEffect} from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import './App.css';
import Homesection from './section/Homesection';
import Timeline from "./components/Timeline/Timeline";
import AboutMe from "./section/AboutMe";
import Skills from "./section/Skills";
import Projects from "./section/Projects";
import Contacts from "./section/Contacts";
import Contactblock from './components/Contactblock/Contactblock';
import { Preloader, Placeholder } from 'react-preloading-screen';
import  Preloaderimage from './assets/loading.gif';
import {projectsarray} from './section/projectsarray';
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Lazyload from 'react-lazyload';

function App() {
    const [currentSection,setSection] = useState('Home');
    const [timelineshow,setTimeLineShow] = useState('-5em');
    const [contactblockshow,setContactBlockShow] = useState('none');
    const homepage = React.createRef();
    const aboutme = React.createRef();
    const skills = React.createRef();
    const projects = React.createRef();
    const contacts = React.createRef();

    useScrollPosition(({ prevPos, currPos }) => {

        if(currPos.y === 0 )
        {
            setTimeLineShow('-5em');
            setContactBlockShow('-5em')
        }
        else if(currPos.y * -1 >= contacts.current.offsetTop -200)
        {
            setSection('Contacts');
            setTimeLineShow('0');
            setContactBlockShow('0')

        }
        else if(currPos.y * -1 >= projects.current.offsetTop -200)
        {
            setSection('Projects');
            setTimeLineShow('0');
            setContactBlockShow('-5em')
        }
        else if(currPos.y * -1 >= skills.current.offsetTop -200)
        {
            setSection('Skills');
            setTimeLineShow('0');
            setContactBlockShow('-5em')
        }
        else if(currPos.y * -1 >= aboutme.current.offsetTop -200)
        {
            setSection('AboutMe');
            setTimeLineShow('0');
            setContactBlockShow('-5em')
        }
        else
        {
            setSection('Home');
            setTimeLineShow('0');
            setContactBlockShow('-5em')
        }


    });

  return (
    <div className="App">
        <Preloader fadeDuration = {3000}>
            <Placeholder className = "placeholder">
                <div className = "first"><img src = {Preloaderimage}></img></div>
            </Placeholder>
        </Preloader>
        <Contactblock show = {contactblockshow}/>
        <Timeline show = {timelineshow} currentSection = {currentSection} />
        <div className="homecontainer" id = "homecontainer" ref = {homepage}>
            <Homesection></Homesection>

        </div>

        <div className="aboutmecontainer" id="aboutmecontainer" ref = {aboutme}>
            <AboutMe/>
        </div>
        <div className="skillscontainer" id = "skillscontainer" ref = {skills}>
            <Skills/>
        </div>
        <div className="projectscontainer"  id = "projectscontainer" ref = {projects}>
            <Projects/>
        </div>
        <div className="contactscontainer" id = "contactscontainer" ref = {contacts}>
            <Contacts/>
        </div>

    </div>
  );
}

export default App;
