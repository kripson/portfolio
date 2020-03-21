import React,{useState} from "react";
import './ProjectFrame.scss';
import ImageLoader from '../../assets/imageLoading.gif';



const ProjectFrame = ({project}) =>
{

    const [loaded,setLoaded] = useState(false);
    var projectcontent = '';

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
        {projectcontent}

    </div>)


}


export default ProjectFrame;




