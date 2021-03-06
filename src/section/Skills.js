import React from "react";
import './Skills.scss';
import Html from '../assets/html-5.png';
import Css from '../assets/css.png';
import ReactIcon from '../assets/react.png';
import Angular from '../assets/angular.png';
import Node from '../assets/nodejs.png';
import Laravel from '../assets/laravel.png';
import LazyLoad from 'react-lazyload';


const Skills = ()=>
{
    return(<div className="Skills">

        <LazyLoad><div className="SkillsDescription">
                <h1>Skills & Expertise</h1>

                <p>Currently, in terms of front end development tools, I mostly work with React and redux. However, I am also familiar with other tools and frameworks like Angular and Vue.
                    In terms of back end development, I mostly work with NodeJs (Express) to create the server and then choose between SQL or NoSQL(MongoDb, Postgress) database depending on the project. I am also familiar with firebase(Google Service). </p>
               <p>Apart from Single Page Applications, I have also worked with Laravel. I started with Laravel as some clients prefer not to work with SPA due to SEO related challenges.</p>

            </div>
        </LazyLoad>

            <LazyLoad>
                <div className="scene">
                <div className="cube">
                    <div className="cube__face cube__face--front"><img src={Html} alt = "htmlIcon"/></div>
                    <div className="cube__face cube__face--back"><img src={Css} alt = "CssIcon"/></div>
                    <div className="cube__face cube__face--right"><img src={ReactIcon} alt = "ReactIcon"/></div>
                    <div className="cube__face cube__face--left"><img src={Angular} alt = "AngularIcon"/></div>
                    <div className="cube__face cube__face--top"><img src={Node} alt = "NodeJsIcon"/></div>
                    <div className="cube__face cube__face--bottom"><img src={Laravel} alt = "LaravelIcon"/></div>
                </div>
            </div>
        </LazyLoad>


    </div> )
}

export default Skills;
