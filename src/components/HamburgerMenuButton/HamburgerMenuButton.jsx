import React from "react";
import "./HamburgerMenuButton.scss";

export const HamburgerMenuButton = ({ checked }) => {
  return (
    <div className="HamburgerMenuButton">
      <label htmlFor="check">
        <input type="checkbox" id="check" checked={checked} onClick={(e) => e.stopPropagation()} readOnly />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  );
};
