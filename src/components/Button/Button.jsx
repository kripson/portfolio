import React from "react";
import "./Button.scss";
import Arrow from "../../assets/Arrow 1.svg";

const Button = ({ label, onClick }) => {
  return (
    <div className="button body" onClick={onClick}>
      {label}
      <img src={Arrow} alt="" />
    </div>
  );
};

export default Button;
