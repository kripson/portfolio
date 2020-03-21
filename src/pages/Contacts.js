import React,{useState} from "react";
import './Contacts.scss';
import axios from 'axios';
import MailSendButton from '../components/MainSendButton/MailSendButton';




const Contacts = ()=>
{

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [subject,setSubject] = useState('');
    const [message,setMessage] = useState('');
    const [mailstatus, setMailStatus] = useState('idle');

    const ResetForm = ()=>
    {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }


    const SendMail = () =>
    {
        if(email && name && subject && message)
        {

            setMailStatus('sending');

            axios({
                url:'https://formspree.io/xoqlkvyr',
                method:'POST',
                data:
                    {
                        name:name,
                        _replyto: email,
                        subject:subject,
                        message:message

                    }

            }).then(response=> {

                setMailStatus('sent');
                ResetForm();

                setTimeout(()=>
                {
                    setMailStatus('idle');
                },2000);


            })
                .catch(err=>{
                    console.log(err);
                    setMailStatus('idle');

                });
        }
        else
        {
            alert("Please fill all the fields");
        }


    }

    const HandleChange = (event) =>
    {
        switch (event.target.name) {
            case 'name':
                setName(event.target.value);
            case 'email':
                setEmail(event.target.value);
            case 'subject':
                setSubject(event.target.value);
            case 'message':
                setMessage(event.target.value);
            default:


        }
    };









    return(<div className="Contacts">
        <h1>Get in touch</h1>
        <h3>I am open to projects and would definitely love to hear your ideas.<br/>Let's connect.</h3>
    <div className= "form">
            <div>
            <input type = "text" placeholder="Name" name = "name" value = {name} onChange={HandleChange} required/>
            <input type = "text" placeholder="Email" name="email" value = {email} onChange={HandleChange} required/>
            </div>
        <input type = "text" name = "subject" placeholder="Subject" value = {subject} onChange={HandleChange} required/>
        <textarea type = "text" name = "message" placeholder="Message" value = {message} onChange={HandleChange} required></textarea>
        <MailSendButton buttonstate={mailstatus} SendMail={SendMail}/>

    </div>


    </div> )
}

export default Contacts;