import React from "react";
function Modals({ setModal }) {
return (

    <div className = "modalBackground">
        <div className = "modalContainer">
            <div className = "title">
                <h5>Smart traffic light system</h5>
            </div>

            <div className = "body">
                <p>This project is about a smart traffic light system dynamically conducting traffic between roads</p>
            </div>

            <div className = "footer">
                <button onClick={() => setModal(false)}>X</button>
            </div>
        </div>
    </div>

)
}

export default Modals