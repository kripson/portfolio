import React from "react";
import './SlideRevealComponent.scss';

const SlideRevealComponent = ({ children, reveal, delay, duration = 1 }) => {


  return (
    <div className="SlideRevealComponent">
      <div className={`childrenContainer ${reveal}`} style={{animationDelay: delay + 's', animationDuration: duration + 's'}}>{children}</div>
    </div>
  );
};

export default SlideRevealComponent;
