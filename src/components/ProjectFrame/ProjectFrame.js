import React, { useState } from "react";
import "./ProjectFrame.scss";
import ImageLoader from "../../assets/imageLoading.gif";
import underconstruction from "../../assets/underconstruction.png";
import ReactIcon from "../../assets/react.png";
import Angular from "../../assets/angular.png";
import Node from "../../assets/nodejs.png";
import Laravel from "../../assets/laravel.png";
import ProjectModal from "../ProjectModal/ProjectModal";
import { projectsarray } from "../../section/projectsarray";

const ProjectFrame = ({ project, toggleDetail }) => {
  const [loaded, setLoaded] = useState(true);
  const [detailshow, setdetailshow] = useState("none");



  var projectcontent = "";

  const imageMap = {
    react: ReactIcon,
    angular: Angular,
    node: Node,
    laravel: Laravel,
  };

  const toolsimages = project.tools.map((tool, idx) => <img key={idx} src={imageMap[tool]} alt="Toolsimages" />);

  var construction = "";

  if (!project.ready) {
    construction = (
      <div className="underconstruction">
        <div className="toolsused">
          <span>Tools used: </span>
          {toolsimages}
        </div>
        <span>Under Construction</span>
        <img className="underconstructionicon" src={underconstruction} alt="underconstruction" />
      </div>
    );
  }

  if (loaded) {
    projectcontent = project.ready ? (
      <div className="projectimage" key={project.id} style={{ backgroundImage: `url(${project.imageUrl})` }}></div>
    ) : (
      <img className="projectimage" src={project.imageUrl} alt={`project No: ${project.id}`} />
    );
  } else {
    projectcontent = <img className="image-loader" src={ImageLoader} alt="ImageLoader" />;
  }

  setTimeout(() => {
    setLoaded(true);
  }, 3000);

  return (
    <div style={{ animationDelay: `${project.id / 9}s` }} className="project">
      {construction}
      {projectcontent}
      <div className="overlay"  onClick={() => toggleDetail(project.id)}>
          <h6>See Details</h6>
      </div>
    </div>
  );
};

export default ProjectFrame;
