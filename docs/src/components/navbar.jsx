import React from "react";
import "./css/navbar.css";
import { RiHome9Fill, RiContactsFill } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { FaDiagramProject, FaGithub } from "react-icons/fa6";
import { VscReferences } from "react-icons/vsc";



const Navbar = ({setView}) => {
    const navigateTo = (e, path,hash="") => {
    e.preventDefault(); 
    window.history.pushState({}, '', path+hash);
    setView(path); 

    if(hash){
        const element = document.querySelector(hash)
        if(element){
            element.scrollIntoView({behavior:"smooth"});
            setTimeout(() => {
                element.scrollIntoView({behavior:"smooth"});
                
            }, 1000);
        }
    }else{
        window.scrollTo({top:0, left:0, behavior:"smooth"});

    }
    if(window.innerWidth<768){
        document.querySelector('.navContainer').classList.toggle('open');

    }
  };
  return (
    <div className="navContainer">
        <nav className="navbar">
            <div>
                <ul>
                <div className="navItem" role="button" onClick={
                    (e) => {
                        navigateTo(e, '/');
                        
                    }}>
                    <RiHome9Fill size="35" className="navIcon" />
                    <span href="/" >Home</span>
                </div>
                <div className="navItem" role="button" onClick={(e) => navigateTo(e, '/', '#skills')}>
                    <GiSkills size="35" className="navIcon" />
                    <span>Skills</span>
                </div>    
              
                <div className="navItem" role="button" onClick={(e) => navigateTo(e, '/', '#projects')}>
                    <FaDiagramProject size="35" className="navIcon" />
                    <span >Projects</span>
                </div>
                <div className="navItem" role="button" onClick={(e) => navigateTo(e, '/references')}>
                    <VscReferences size="35" className="navIcon" />
                    <span href="/references">References</span>
                </div>
                <div className="navItem" role="button" onClick={(e) => window.open('https://github.com/obzero-chillin', '_blank')}>
                    <FaGithub size="35" className="navIcon" />
                    <span> GitHub</span>
                </div>
                <div className="navItem" role="button" onClick={(e) => navigateTo(e, '/contact')}>
                    <RiContactsFill size="35" className="navIcon" />
                    <span href="/contact" >Contact</span>
                </div>

                </ul>
            </div>
        </nav>
    </div>

  )};

export default Navbar;