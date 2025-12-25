import React from "react";
import "./css/navbar.css";
import { RiHome9Fill, RiContactsFill } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { FaDiagramProject, FaGithub } from "react-icons/fa6";
import { VscReferences } from "react-icons/vsc";



const Navbar = ({setActiveSession}) => {
  return (
    <div className="navContainer">
        <nav className="navbar">
            <div>
                <ul>
                <div className="navItem" role="button" onClick={setActiveSession("home")}>
                    <RiHome9Fill size="35" className="navIcon" />
                    <a href="#home" onClick={() => preventDefault()}>Home</a>
                </div>
                <div className="navItem" role="button" onClick={setActiveSession("skills")}>
                    <GiSkills size="35" className="navIcon" />
                    <a href="#skillsContainer" onClick={()=> preventDefault()}>Skills</a>
                </div>
                <div className="navItem" role="button" onClick={setActiveSession("projects")}>
                    <FaDiagramProject size="35" className="navIcon" />
                    <a href="#projects" onClick={()=> preventDefault()}>Projects</a>
                </div>
                <div className="navItem" role="button" onClick={setActiveSession("references")}>
                    <VscReferences size="35" className="navIcon" />
                    <a href="#references" onClick={()=> preventDefault()}>References</a>
                </div>
                <div className="navItem" role="button" >
                    <FaGithub size="35" className="navIcon" />
                    <a href="#github" onClick={()=> preventDefault()}>GitHub</a>
                </div>
                <div className="navItem" role="button" onClick={setActiveSession("contact")}>
                    <RiContactsFill size="35" className="navIcon" />
                    <a href="#contact" onClick={()=> preventDefault()}>Contact</a>
                </div>

                </ul>
            </div>
        </nav>
    </div>

  )};

export default Navbar;