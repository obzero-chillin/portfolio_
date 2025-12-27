import "./css/references.css";
import RefCard from "./subComponents/refCard.jsx";
import ref1 from "../assets/ref001.png";
import { useState } from "react";


const References = ()=>{
    const {expanded, setExpanded} = useState(false)

    return(
        <div id="references">
            <h1 className="topic emy">
                References      
            
            </h1>
            <div id="refCards">
                <RefCard ref={ref1} referrer={"Mrs T. Kealotswe"}/>
            </div>  
            
           



                      
        </div>
    )
}

export default References;