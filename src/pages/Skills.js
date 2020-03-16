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

            <div className="SkillsDescription">
                <LazyLoad>
                <h1>Skills & Expertise</h1>
                </LazyLoad>
                <LazyLoad>
                <p>I am familiar with a lot of tools and technologies. I do not classify myself as a front-end or back-end developer as I like to build different things that interest me.
                So, if I come across anything that I feel like will increase my value and will let me broaden my horizons then, I will most definitely put it in my bag of tricks.</p>
                <p>Currently, in terms of front end development tools, I mostly work with React and redux. However, I am also familiar with other tools and frameworks like Angular and Vue.
                In terms of back end development, I mostly work with NodeJs (Express) to create the server and then choose between SQL or NoSQL(MongoDb, Postgress) database depending on the project. I am also familiar with firebase(Google Service). </p>
                <p>Apart from Single Page Applications, I also have worked with Laravel. I started with Laravel as some clients prefer not to work with SPA due to SEO related challenges.</p></LazyLoad>

            </div>

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