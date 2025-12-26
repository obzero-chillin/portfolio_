import { useState, useEffect } from 'react';
import Navbar from "./components/navbar.jsx";
import Homie from "./components/home.jsx";
import Skills from "./components/skills.jsx";
import Projects from "./components/projects.jsx";
import References from "./components/references.jsx"; // Ensure you create this
import Contact from "./components/contact.jsx";
import { IoMenu } from "react-icons/io5"; // Correct standard nameimport '../src/App.css'

function App() {
  
  const [currentView, setCurrentView] = useState(window.location.pathname);

  useEffect(()=>{
    const handleLocationChange=()=>{
      setCurrentView(window.location.pathname);
    }
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  },[]);

  return (
    <>
      <main>
        <header >
          <div id="headerDiv">
            <IoMenu size={30} id="menuButton" role='button' onClick={()=>{
              const daddy = document.querySelector(".navContainer");
              daddy.classList.toggle("open")
            }}/>

          </div>

          <Navbar setView={setCurrentView} /> 
        </header>

        <div id="mainContainer">
          {currentView === '/' ? (
            
            <>
              <Homie />
              <Skills />
              <Projects />
            </>
          ) : currentView === '/references' ? (
            <References />
          ) : currentView === '/contact' ? (
            <Contact/>
          ):null
          }
        </div>

        <footer>
          <hr id='footerHR'></hr>
          <div id="footerStuff">
            <h5>

            Designed by <span>aom</span>
            </h5>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;