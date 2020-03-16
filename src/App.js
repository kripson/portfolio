import React,{useState,useEffect} from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import './App.css';
import Homesection from './pages/Homesection';
import Timeline from "./components/Timeline/Timeline";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Contactblock from './components/Contactblock/Contactblock';

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
            setTimeLineShow('1em');
            setContactBlockShow('0')

        }
        else if(currPos.y * -1 >= projects.current.offsetTop -200)
        {
            setSection('Projects');
            setTimeLineShow('1em');
            setContactBlockShow('-5em')
        }
        else if(currPos.y * -1 >= skills.current.offsetTop -200)
        {
            setSection('Skills');
            setTimeLineShow('1em');
            setContactBlockShow('-5em')
        }
        else if(currPos.y * -1 >= aboutme.current.offsetTop -200)
        {
            setSection('AboutMe');
            setTimeLineShow('1em');
            setContactBlockShow('-5em')
        }
        else
        {
            setSection('Home');
            setTimeLineShow('1em');
            setContactBlockShow('-5em')
        }


    });

  return (
    <div className="App">
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
