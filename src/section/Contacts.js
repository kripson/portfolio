import React, { useState } from "react";
import "./Contacts.scss";
import axios from "axios";
import MailSendButton from "../components/MainSendButton/MailSendButton";
import { useEffect } from "react";
import SlideRevealComponent from "../components/SlideRevealComponent/SlideRevealComponent";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [testPot, setTestPot] = useState(null);

  const [mailstatus, setMailStatus] = useState("idle");

  const services = [
    {
      text: "BESPOKE WEBSITE",
      reveal: "bottomReveal",
    },
    {
      text: "CRM SOLUTION",
      reveal: "topReveal",
    },
    {
      text: "ECOMMERCE SITE",
      reveal: "bottomReveal",
    },
  ];
  const [service, setService] = useState(0);

  const [currentService, setCurrentService] = useState(services[service].text);

  const ResetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setTestPot("");
  };

  const SendMail = () => {
    if (testPot) {
      alert("No bots allowed");
    }

    if (email && name && subject && message) {
      setMailStatus("sending");

      axios({
        url: "https://formspree.io/xoqlkvyr",
        method: "POST",
        data: {
          name: name,
          _replyto: email,
          subject: subject,
          message: message,
        },
      })
        .then((response) => {
          setMailStatus("sent");
          ResetForm();

          setTimeout(() => {
            setMailStatus("idle");
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
          setMailStatus("idle");
        });
    } else {
      alert("Please fill all the fields");
    }
  };

  const HandleChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "subject":
        setSubject(event.target.value);
        break;
      case "message":
        setMessage(event.target.value);
        break;
      case "testpot":
        setTestPot(event.target.value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setService(service === services.length - 1 ? 0 : service + 1);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [service]);

  useEffect(() => {
    setCurrentService(services[service].text);
  }, [service]);

  return (
    <div className="Contacts">
      <h1 className="h1">
        Let's build your <br />
      </h1>
      {currentService ? (
        <SlideRevealComponent reveal={"topReveal"} key={currentService}>
          <span className="h2" style={{ wordBreak: "break-all" }}>
            {currentService}
          </span>
        </SlideRevealComponent>
      ) : (
        ""
      )}

      <span className="body">
        I am open to projects and would definitely love to hear your ideas.
        <br />
        Let's connect.
      </span>
      <div className="form">
        <div className="nameemail">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={HandleChange}
            required
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={HandleChange}
            required
          />
        </div>
        <input
          type="text"
          placeholder="testpot"
          hidden
          name="testpot"
          value={testPot}
          onChange={HandleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={subject}
          onChange={HandleChange}
          required
        />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          value={message}
          onChange={HandleChange}
          required
        ></textarea>
        <MailSendButton buttonstate={mailstatus} SendMail={SendMail} />
      </div>
    </div>
  );
};

export default Contacts;
