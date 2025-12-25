import './css/skills.css';
import { FaHtml5,FaCss3Alt,FaPython,FaPhp,FaDartLang,FaFlutter,FaGitAlt } from "react-icons/fa6";
import { IoLogoJavascript,IoLogoNodejs } from "react-icons/io5";
import { BsFiletypeSql } from "react-icons/bs";
import { TbBrandTailwind } from "react-icons/tb";
import { LuGithub } from "react-icons/lu";




const Skills = ()=>{
    return(
        <>                                                                                                   
        <div id="skills">
            <h1>Skills</h1>
            <div className="skillsIcons">
                <FaHtml5 className='s_icon' title='HTML'/>
                <FaCss3Alt className='s_icon' title='CSS'/>
                <IoLogoJavascript className='s_icon' title='JavaScript'/>
                <FaPython className='s_icon' title='Python'/>
                <FaPhp className='s_icon' title='PHP'/>
                <IoLogoNodejs className='s_icon' title='Node.js'/>
                <BsFiletypeSql className='s_icon' title='SQL'/>
                <TbBrandTailwind className='s_icon' title='Tailwind CSS'/>
                <FaDartLang className='s_icon' title='Dart'/>
                <FaFlutter className='s_icon' title='Flutter'/>
                <FaGitAlt className='s_icon' title='Git'/>
                <LuGithub className='s_icon' title='GitHub'/>

            </div>
        </div>
        
        </>
    )
};

export default Skills;