import React from 'react'
import './Contactme.css'


function Contactform(){
    return (
        <section className="contact">
            <form>
                <h2>Contact Me!</h2>
                <div className = "inputbox">
                    <label>Name</label>
                    <input type = "text" className = "field" placeholder = "Name" required />
                </div>

                <div className = "inputbox">
                    <label>Email</label>
                    <input type = "email" className = "field" placeholder = "Email" required />
                </div>

                <div className = "inputbox">
                    <label>Message</label>
                    <textarea type = "text" className = "message" placeholder = "Type your message here" required />
                </div>
                <button type = "submit">Send</button>

            </form>
        </section>


    )
}

export default Contactform