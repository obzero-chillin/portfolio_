import { useState } from "react";


const MainView = () => {
    const currentURL = window.location.pathname;
    const [currentView, setCurrentView] = useState(currentURL);
    console.log(currentView);

    return (
        <div id="mainContainer">
          {currentView === '/' ? (
            <>
              <Homie />
              <Skills/>
              <Projects/>              
            </>
          ) :currentView === '/references' (
            <References />
          )}
        </div>
        
    )
}

export default MainView;