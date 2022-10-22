import React from "react";
import './Skills.scss';
import Html from '../assets/html-5.png';
import Css from '../assets/css.png';
import ReactIcon from '../assets/react.png';
import Angular from '../assets/angular.png';
import Node from '../assets/nodejs.png';
import Laravel from '../assets/laravel.png';
import LazyLoad from 'react-lazy-load';

import Tshirt from '../assets/T-Shirt.svg';



const Skills = () => {
    return (<div className="Skills">

            <div className="leftSection">
                <h3 className="primary-colour-text">SKILLS</h3>


                <p>
                    Currently, in terms of front end development tools, I mostly work with React and redux. However, I am also proficient in using other frameworks like Angular and Vue. In terms of back end development, NodeJs (Express) is my weapon of choice to create the server and then I choose between SQL or NoSQL database depending on the project. I am also familiar with firebase(Google Service).
                </p>
                <p>
                    Apart from Single Page Applications, I have also worked with Laravel. I started with Laravel as some clients do not prefer SPAs due to SEO related challenges.

                </p>
                <p>
                    Later on, I discovered NextJs which allowed my javascript applications to retain the seamless nature of SPAs while being SEO friendly.
                </p>


            </div>
            <div className="rightSection">
                <h1 className="body">SKILLS</h1>
                <img src={Tshirt} alt={'logo-tshirt'}/>

            </div>
        

        {/* <LazyLoad>
            <div className="scene">
                <div className="cube">
                    <div className="cube__face cube__face--front"><img src={Html} alt="htmlIcon" /></div>
                    <div className="cube__face cube__face--back"><img src={Css} alt="CssIcon" /></div>
                    <div className="cube__face cube__face--right"><img src={ReactIcon} alt="ReactIcon" /></div>
                    <div className="cube__face cube__face--left"><img src={Angular} alt="AngularIcon" /></div>
                    <div className="cube__face cube__face--top"><img src={Node} alt="NodeJsIcon" /></div>
                    <div className="cube__face cube__face--bottom"><img src={Laravel} alt="LaravelIcon" /></div>
                </div>
            </div>
        </LazyLoad> */}


    </div>)
}

export default Skills;
