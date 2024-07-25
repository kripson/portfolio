import React from "react";
import "./Button.scss";
import Arrow from "../../assets/Arrow 1.svg";
import { CgCheckO, CgSpinner } from "react-icons/cg";

const Button = ({ label, onClick, styles, link, loading, success }) => {

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
        {loading ? <CgSpinner className="spinner"/> : success ? <CgCheckO/> :<img src={Arrow} alt="" />
        }
      </div>
    );
  }

};

export default Button;
