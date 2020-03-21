import React,{useState} from 'react';
import './MailSendButton.scss';
import Spinner from '../../assets/refresh.png';
import Tick from '../../assets/tick.png';






const MailSendButton = ({buttonstate, SendMail})=>
{

    if(buttonstate === 'idle')
    {
       return (<button onClick = {SendMail}>Send</button>)
    }
    else if(buttonstate === "sending")
    {
        return(<div className = "sending"><span>Sending</span><img src={Spinner} alt = "refresher"/></div> )
    }
    else
    {
        return(<div className = "sent"><span>Sent</span><img src={Tick} alt = "refresher"/></div>)
    }

}



export default MailSendButton;


