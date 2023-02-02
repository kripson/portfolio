import React from "react";
import './SlideRevealComponent.scss';

const SlideRevealComponent = ({ children, reveal, delay }) => {


  return (
    <div className="SlideRevealComponent">
      <div className={`childrenContainer ${reveal}`} style={{animationDelay: delay + 's'}}>{children}</div>
    </div>
  );
};

export default SlideRevealComponent;
