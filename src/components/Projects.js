import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import Modal from 'react-bootstrap/Modal';
import {Container, Row, Col} from 'react-bootstrap';

function Projects() {
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
        <Button variant="primary">More info</Button>
      </Card.Body>
    </Card> 
    </Col>

    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="images/proj2.jpg" />
      <Card.Body>
        <Card.Title>Project 1</Card.Title>
        <Card.Text>
        A smart CCTV project
        </Card.Text>
        <Button variant="primary">More info</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="images/sketch.png" />
      <Card.Body>
        <Card.Title>Project 1</Card.Title>
        <Card.Text>
        A smart CCTV project
        </Card.Text>
        <Button variant="primary">More info</Button>
      </Card.Body>
    </Card>
    </Col>


</Row>
    </Container>
    
  );
}

export default Projects;