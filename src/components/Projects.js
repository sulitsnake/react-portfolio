import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modals from "./Modals";
import Modals2 from "./Modals2";
import Modals3 from "./Modals3";
//import Modal from 'react-bootstrap/Modal';
import {Container, Row, Col} from 'react-bootstrap';

function Projects() {

  const [openModal, setOpenModal] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)
  const [openModal3, setOpenModal3] = useState(false)

  return (

    <Container id="projects" className = "my-5">

    <h2 className = "text-center mb-4" style = {{paddingBottom: '50px'}}>My Projects</h2>

<Row>

    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="images/cctvproj.png" />
      <Card.Body>
        <Card.Title>Project 1</Card.Title>
        <Card.Text>
        A smart CCTV project
        </Card.Text>
        <Button variant="primary" onClick={() => {setOpenModal(true);}}>More info</Button>
      {openModal && <Modals setModal={setOpenModal}/>}
      </Card.Body>
    </Card> 
    </Col>



    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="images/proj2.jpg" />
      <Card.Body>
        <Card.Title>Project 2</Card.Title>
        <Card.Text>
        A face study
        </Card.Text>
        <Button variant="primary" onClick={() => {setOpenModal2(true);}}>More info</Button>
        {openModal2 && <Modals2 setModal2={setOpenModal2}/>}
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="images/sketch.png" />
      <Card.Body>
        <Card.Title>Project 3</Card.Title>
        <Card.Text>
        A smart CCTV project
        </Card.Text>
        <Button variant="primary" onClick={() => {setOpenModal3(true);}}>More info</Button>
        {openModal3 && <Modals3 setModal3={setOpenModal3}/>}
      </Card.Body>
    </Card>
    </Col>


</Row>
    </Container>
    

  );
}

export default Projects;