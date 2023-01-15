import React from 'react';
import Intro from "../components/Intro/Intro";





const Homesection = ({firstLoaded}) =>
{
    return(
        <div className="Homepage">
            <Intro firstLoaded={firstLoaded}/>


        </div>

    )
}

export default Homesection;