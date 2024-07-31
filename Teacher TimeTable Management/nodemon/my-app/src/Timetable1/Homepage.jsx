import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img9 from './ima9.jpg';
import './Homepage.css';
function Homepage() {
  return (
    <Carousel>
      
      <Carousel.Item>
        <center>
      <h2 style={{color:'black'}} >Welcome to our Website</h2>
      <h1 style={{color:'black'}}><b>TimelyTables</b></h1></center>
        <img src={img9} alt="Welcome to our website"/>
        
      </Carousel.Item>
      <Carousel.Item>
        <center>
      <h2 style={{color:'black'}} >Welcome to our Website</h2>
      <h1 style={{color:'black'}}><b>TimelyTables</b></h1></center>
        <img src={img9} alt="Welcome to our website"/>
        
      </Carousel.Item>
    </Carousel>
  );
}

export default Homepage;
