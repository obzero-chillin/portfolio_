import "./css/projectCard.css";


const ProjectCard = ({projectTitle,description,link, linkMessage}) => {
    return(
        <div className="project">
            <h2 className="projectTitle">{projectTitle}</h2>
            <p className="projectDescription">{description}</p>
            <hr/>
            <button className="projectRedirect" onClick={() => window.open(link, "_blank")}>{linkMessage}</button>

        </div>
    )
};

export default ProjectCard;