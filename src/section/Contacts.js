import React,{useState} from "react";
import './Contacts.scss';
import axios from 'axios';
import MailSendButton from '../components/MainSendButton/MailSendButton';
import ReCAPTCHA from "react-google-recaptcha/lib/esm/recaptcha-wrapper";




const Contacts = ()=>
{

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [subject,setSubject] = useState('');
    const [message,setMessage] = useState('');
    const [mailstatus, setMailStatus] = useState('idle');
    const [verified,setVerified] = useState(false);

    const ResetForm = ()=>
    {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    const onCaptchaComplete = (value)=>
    {
        if(value) {
            axios({
                url: 'https://drivingcenterserver.herokuapp.com/verifycaptcha',
                method: 'post',
                data: {token: value}

            }).then(response => {
                if (response.data.success) {
                    setVerified(true);
                } else {
                    alert("Captcha verification failed, Please try again");
                }
                })
                .catch(err => alert(err));
        }
    }


    const SendMail = () =>
    {
        if(verified)
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
        else
        {
            alert("Please, Complete the verification");
        }



    }

    const HandleChange = (event) =>
    {

        switch (event.target.name) {
            case 'name':
                setName(event.target.value);
                break;
            case 'email':
                setEmail(event.target.value);
                break;
            case 'subject':
                setSubject(event.target.value);
                break;
            case 'message':
                setMessage(event.target.value);
                break;
            default:
                break;


        }
    };









    return(<div className="Contacts">
        <h1 className="primary-colour-text">Get in touch</h1>
        <h5 className="body">I am open to projects and would definitely love to hear your ideas.<br/>Let's connect.</h5>
    <div className= "form">
            <div className="nameemail">
            <input type = "text" placeholder="Name" name = "name" value = {name} onChange={HandleChange} required/>
            <input type = "text" placeholder="Email" name="email" value = {email} onChange={HandleChange} required/>
            </div>
        <input type = "text" name = "subject" placeholder="Subject" value = {subject} onChange={HandleChange} required/>
        <textarea type = "text" name = "message" placeholder="Message" value = {message} onChange={HandleChange} required></textarea>
        <div className = "RecaptchaBox">
            <ReCAPTCHA sitekey="6Lffz-UUAAAAAJpxERIMyn2CnrLqCtwmb5IlC4vw" onChange={onCaptchaComplete}/>
        </div>
        <MailSendButton buttonstate={mailstatus} SendMail={SendMail}/>

    </div>


    </div> )
}

export default Contacts;
