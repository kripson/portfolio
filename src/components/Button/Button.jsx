import React from "react";
import "./Button.scss";
import Arrow from "../../assets/Arrow 1.svg";

const Button = ({ label, onClick, styles, link }) => {

  if (link) {
    return (
      <a href={link} target={link.startsWith('#') ? "_self" : "_blank"} download={true} className="button body" onClick={onClick} style={{ ...(styles ?? {}) }}>
        {label}
        <img src={Arrow} alt="" />
      </a>
    );
  }
  else {
    return (
      <div className="button body" onClick={onClick} style={{ ...(styles ?? {}) }}>
        {label}
        <img src={Arrow} alt="" />
      </div>
    );
  }

};

export default Button;
