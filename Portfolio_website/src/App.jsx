import Navbar from "./components/navbar.jsx";
import Homie from "./components/home.jsx";
import Skills from "./components/skills.jsx";
import Projects from "./components/projects.jsx";
import { useState } from "react";
function App() {
  const [activeSession, setActiveSession] = useState("home");

  return (
    <>
      <main>
        <header>
          <div>

            <Navbar setActiveSession={setActiveSession} /> 
            

          </div>

        </header>
        <div id="mainContainer">
          <Homie />
          <Skills/>
          <Projects/>

        </div>


        
        <footer></footer>
      </main>

    </>
  )
}

export default App
