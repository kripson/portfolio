import React from "react";
import './SlideRevealComponent.scss';

const SlideRevealComponent = ({ children, reveal, delay }) => {

  console.log('test');

  return (
    <div className="SlideRevealComponent">
      <div className={`childrenContainer ${reveal}`} style={{animationDelay: delay ?? 0 + 's'}}>{children}</div>
    </div>
  );
};

export default SlideRevealComponent;
