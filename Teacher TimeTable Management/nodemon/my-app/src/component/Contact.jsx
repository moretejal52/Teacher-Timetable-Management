import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Navbar from './Navbar';
import Footer from './Demo1';
import Box from './Box';
import Demo3 from './Demo3';

function Contact() {
  return (
    <>
    <Box/>
    <h1>Contact Us</h1>
    <FloatingLabel controlId="floatingFullName" 
    label="Full Name"
    className="mb-3"
    >
        <Form.Control type="Name" placeholder="Name" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingMobileNumber" label="Mobile Number">
        <Form.Control type="Mobile Number" placeholder="mobile number" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingAddress" label="Address">
        <Form.Control type="Address" placeholder="Address" />
      </FloatingLabel>
      
      <Demo3/>
      
      
      <Footer/>
    </>
  );
}

export default Contact




/*<Routes>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/about" element={<Services/>}/>
    <Route path="/contact" element={<User/>}/>
    </Routes>*/