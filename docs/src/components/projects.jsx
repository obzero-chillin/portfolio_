import "./css/projects.css";
import ProjectCard from "./subComponents/projectCard.jsx";





const Projects = ()=>{
    return(
        <>                                                                                                  
        <div id="projects" >
            <h1 className='properMobile topic emy'>Projects</h1>
            <div id="allProjects">
                <ProjectCard
                    projectTitle={"Feature Flag Service"}
                    description={"A service for managing feature flags in a microservices architecture."}
                    link={"https://github.com/obzero-chillin/Feature_flags"}
                    linkMessage={"View on GitHub"}
                />
            </div>
             

            
        </div>
        
        </>
    )
};

export default Projects;