import React,{useState} from 'react';
// import './MailSendButton.scss';
import Spinner from '../../assets/refresh.png';
import Tick from '../../assets/tick.png';
import Button from '../Button/Button';






const MailSendButton = ({buttonstate, SendMail})=>
{

    if(buttonstate === 'idle')
    {
       return (<Button onClick = {SendMail} label="Send" ></Button>)
    }
    else if(buttonstate === "sending")
    {
        return(<Button className = "sending" label="Sending" loading={buttonstate === 'sending'}></Button> )
    }
    else
    {
        return(<Button className = "sent" label="Sent" success={true}></Button> )
    }

}



export default MailSendButton;


