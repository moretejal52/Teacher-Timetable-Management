
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pictu from './dog.jpg';
import Navbar from './Navbar';
import Footer from './Demo1';



const Services = () => {
  return (
    <>
    
    
    <h1>About Us</h1>
    <br></br>
    <b><i style={{fontSize:"larger"}}>Dog behavior :</i></b>
    <br></br>
    <i style={{fontSize:"large"}}>Dog behavior is the internally coordinated responses of individuals or groups of domestic dogs to internal and external stimuli.[1] It has been shaped by millennia of contact with humans and their lifestyles. As a result of this physical and social evolution, dogs have acquired the ability to understand and communicate with humans.[2]
         Behavioral scientists have uncovered a wide range of social-cognitive abilities in 
         domestic dogs</i>
         <br></br>
         <b><i style={{fontSize:"larger"}}>Intelligence :</i></b>
         <br></br>
         <i style={{fontSize:"large"}}>Dog intelligence is the ability of the dog to perceive information and retain it as 
            knowledge in order to solve problems. Dogs have been shown to learn by inference. A study with Rico showed that he knew the labels of over 200 different items.[4] He inferred the names of novel items by exclusion learning and correctly retrieved those novel items immediately. He also retained this ability four weeks after the initial exposure. Dogs have advanced memory skills. A study documented the learning and memory capabilities of a border collie, "Chaser", who had learned the names and could associate by verbal command over 1,000 words. Dogs are able to read and react appropriately to human body language such as gesturing and pointing, and to understand human voice commands. After undergoing training to solve a simple manipulation task, dogs that are faced with an insolvable version of the same problem look at the human, while socialized wolves do not.
             Dogs demonstrate a theory of mind by engaging in deception.[5][6]</i>
             <br></br>
             <b><i style={{fontSize:"larger"}}>Senses :</i></b>
             <br></br>
             <i style={{fontSize:"large"}}>The dog's senses include vision, hearing, sense of smell, taste, touch, proprioception, and sensitivity to the Earth's magnetic field.</i>
             <Container style={{display:'flex'}}>
    <Row>
      <Col md={4}>
      <Card>
    <Card.Img variant="top" src="https://c4.wallpaperflare.com/wallpaper/118/511/691/look-face-light-background-portrait-hd-wallpaper-preview.jpg" />
    <Card.Body>
      <Card.Title>card Title</Card.Title>
      <Card.Text>description</Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  
      </Col>
      <Col md={4}>
      <Card>
    <Card.Img variant="top" src="https://wallpapercave.com/wp/sxtenjf.jpg" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        description
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  
      </Col>
      <Col md={4}>
      <Card>
    <Card.Img variant="top" src="https://images3.alphacoders.com/124/1242037.jpg" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  
      </Col>
    </Row>
  </Container>

    <Footer/>
    </>
  )
}

export default Services
