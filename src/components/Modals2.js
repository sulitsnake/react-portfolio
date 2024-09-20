import React from "react";
import './modalstyle.css'

function Modals2({ setModal2 }) {
return (

    <div className = "modalBackground">
        <div className = "modalContainer">
        <img src="images/proj2.jpg" alt="..."/>
            <div className = "title">
                <h5>Face study</h5>
            </div>

            <div className = "body">
                <p>This is a face study I did two weeks ago, the reference it is based on is a controversial one but I chose it because the lighting allowed me to "feel" around the basic planes and muscles in the human face and what should be in light and what is not. I forgot to paint the right ear.</p>
            </div>

            <div className = "footer">
                <button onClick={() => setModal2(false)}>Exit</button>
            </div>
        </div>
    </div>

)
}

export default Modals2