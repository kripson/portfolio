import React from "react";
import './AboutMe.scss';
import Nepal from '../assets/nepal.png';
import Australia from '../assets/australia.png';
import LazyLoad from 'react-lazyload';

const AboutMe = ()=>
{
    return(<LazyLoad><div className="AboutMe">
            <h1>About Me</h1>
            <p>Let me talk a little bit about my roots. I was born and raised in Butwal which is a city in South-Western Nepal <LazyLoad> <img src= {Nepal}/></LazyLoad>. I have always been fascinated by computers since my childhood. So, after my high school, I decided to write a new chapter of my life and pursue a degree in IT in Australia.
                <br/>I travelled to Australia  <LazyLoad><img src= {Australia}/></LazyLoad>in 2017 and am currently pursuing my Bachelor's degree in IT. During my pursual of academic qualification, I stumbled upon web development and fell in love with it. I like the idea of bringing my imagination to life and web development allowed me to do exactly that. Hence, I turned into an aspiring web developer.</p>
        </div></LazyLoad>
    )
}

export default AboutMe;