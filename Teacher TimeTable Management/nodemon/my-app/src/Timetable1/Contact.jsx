import React from 'react';
import contactImage from './img11.jpg'; 

const Contact= () => {
  return (
    <>
    <div>
    <center>
      <h2>Contact Us</h2>
    </center>
    </div>
    
    <div style={{ position: 'relative' }}>
      <img
        src={contactImage}
        alt="Contact Us Image"
        style={{
          position:'center',
          top: '50%',
          right: '50%',
          Width: '50%', // Adjust the width as needed
          height: '50%',
          borderRadius: '50%',
        }}
      />
      
      <br></br>
      <br></br>
      <p>For inquiries, please contact us via the following:</p>
      <ul>
        <li>Phone Number: +1 123-456-7890</li>
        <li>Whats-app No: 123456789</li>
        <li>Instagram: @your_instagram_account</li>
      </ul>
    </div>
    </>
  );
};

export default Contact;
