import React from "react";
import "./css/navbar.css";
import { RiHome9Fill, RiContactsFill } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { FaDiagramProject, FaGithub } from "react-icons/fa6";
import { VscReferences } from "react-icons/vsc";


const Navbar = () => {
  return (
    <div className="navContainer">
        <nav className="navbar">
            <div>
                <ul>
                <div className="navItem">
                    <RiHome9Fill size="35" className="navIcon" />
                    <a href="#home" onClick={() => preventDefault()}>Home</a>
                </div>
                <div className="navItem">
                    <GiSkills size="35" className="navIcon" />
                    <a href="#skills" onClick={()=> preventDefault()}>Skills</a>
                </div>
                <div className="navItem">
                    <FaDiagramProject size="35" className="navIcon" />
                    <a href="#projects" onClick={()=> preventDefault()}>Projects</a>
                </div>
                <div className="navItem">
                    <VscReferences size="35" className="navIcon" />
                    <a href="#references" onClick={()=> preventDefault()}   >References</a>
                </div>
                <div className="navItem">
                    <FaGithub size="35" className="navIcon" />
                    <a href="#github" onClick={()=> preventDefault()}>GitHub</a>
                </div>
                <div className="navItem">
                    <RiContactsFill size="35" className="navIcon" />
                    <a href="#contact" onClick={()=> preventDefault()}>Contact</a>
                </div>

                </ul>
            </div>
        </nav>
    </div>

  )};

export default Navbar;