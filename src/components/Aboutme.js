import React from 'react';
import { Container } from  'react-bootstrap';

function Aboutme(){
    return (
        <div className="masthead" style={{ backgroundImage: "url('/images/header.jpg')" }}>
         <div className="color-overlay d-flex justify-content-center">
            <Container className = "text-center">
            <h1 className = "display-6 text-light"  style = {{paddingTop: '25px'}}>About Me</h1>
            <p>Hello!, I am a 3rd year computer science student studying web development.</p>

            </Container>
            </div>
        </div>


    );

}

export default Aboutme;