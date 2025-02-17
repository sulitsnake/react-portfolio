import React from "react";
import './modalstyle.css'

function Modals3({ setModal3 }) {
return (

    <div className = "modalBackground">
        <div className = "modalContainer">
        <img src="images/sketch.png" alt = "..."/>
            <div className = "title">
                <h5>Sketch</h5>
            </div>

            <div className = "body">
                <p>A sketch I am making. She has no hair at the moment.</p>
            </div>

            <div className = "footer">
                <button onClick={() => setModal3(false)}>Exit</button>
            </div>
        </div>
    </div>

)
}

export default Modals3