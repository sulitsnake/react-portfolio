import React from "react";
import './modalstyle.css'

function Modals({ setModal }) {
return (

    <div className = "modalBackground">
        <div className = "modalContainer">
        <img src="images/cctvproj.png" alt="..."/>
            <div className = "title">
                
                <h5>Smart traffic light system</h5>
            </div>

            <div className = "body">
                <p>This is a concept about smart traffic light system. It can dynamically direct traffic depending on how heavy the traffic is on one road and the average daily occurence of vehicles</p>
            </div>

            <div className = "footer">
                <button onClick={() => setModal(false)}>Exit</button>
            </div>
        </div>
    </div>

)
}

export default Modals