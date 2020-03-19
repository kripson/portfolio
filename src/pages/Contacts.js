import React from "react";
import './Contacts.scss';


const Contacts = ()=>
{
    return(<div className="Contacts">
        <h1>Get in touch</h1>
        <h3>I am open to projects and would definitely love to hear your ideas.<br/>Let's connect.</h3>
    <div className= "form">
            <div>
            <input type = "text" placeholder="Name"/>
            <input type = "text" placeholder="Email"/>
            </div>
        <input type = "text" placeholder="Subject"/>
        <textarea type = "text" placeholder="Message"></textarea>
        <button> Send</button>

    </div>


    </div> )
}

export default Contacts;