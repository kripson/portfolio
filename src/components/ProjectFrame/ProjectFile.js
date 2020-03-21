import React,{useState} from "react";
import './ProjectFrame.scss';
import ImageLoader from '../../assets/imageLoading.gif';
import underconstruction from '../../assets/underconstruction.png';
import ReactIcon from '../../assets/react.png';
import Angular from '../../assets/angular.png';
import Node from '../../assets/nodejs.png';
import Laravel from '../../assets/laravel.png';




const ProjectFrame = ({project}) =>
{

    const [loaded,setLoaded] = useState(false);
    var projectcontent = '';

    const imageMap = {
        react: ReactIcon,
        angular: Angular,
        node:Node,
        laravel:Laravel
    };

    const toolsimages = project.tools.map((tool)=> <img src = {imageMap[tool]} alt = 'Toolsimages'/>);

    var construction = "";

    if(!project.ready)
    {
        construction = <div className="underconstruction"><div className = "toolsused"><span>Tools used:  </span>{toolsimages}</div><span>Under Construction</span><img className="underconstructionicon" src={underconstruction} alt = "underconstruction" /></div>
    }







    if(loaded) {
        projectcontent = <a href = {project.websiteUrl ? project.websiteUrl : ""}><img className = "projectimage" src={project.imageUrl}/></a>
    }
    else
    {
        projectcontent = <a href = {project.websiteUrl ? project.websiteUrl : ""}><img className="image-loader" src={ImageLoader} alt = "ImageLoader"/></a>

    }

    setTimeout(()=>
    {
        setLoaded(true);
    },3000);

    return(<div style={{animationDelay: `${project.id / 9}s`}} className="project">
        {construction}
        {projectcontent}

    </div>)


}


export default ProjectFrame;




