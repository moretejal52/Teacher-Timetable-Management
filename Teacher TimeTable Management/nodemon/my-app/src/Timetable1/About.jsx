import React from 'react';
import aboutImage from './team.jpg'; // Import your image

const About = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>About Us</h2>
      <img src={aboutImage} alt="About Us" style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '20px' }} />
      <p align="justify">Welcome to our Timetable Creation Platform for Teachers! As we understand the importance of efficient time management in the busy lives of educators. Our platform is designed to simplify the process of creating and managing timetables, making it easier for teachers to organize their schedules and focus on what they do best – teaching.</p>
      <p>
        <strong>Our Mission:</strong> We are committed to providing a user-friendly and intuitive timetable creation tool that empowers teachers to plan their classes, meetings, and other activities effortlessly. Our mission is to enhance productivity, reduce administrative burdens, and contribute to a more streamlined educational experience.
      </p>
      <p>
        <strong>Key Features:</strong>
      </p>
      <ul>
         <li><strong>Easy-to-Use Interface:</strong> Our platform offers a simple and intuitive interface, ensuring that teachers can quickly navigate and create timetables with ease.</li>
        <li><strong>Customization Options:</strong> Tailor your timetable to fit your unique schedule. Add classes, meetings, and other events, and customize the colors and layout to suit your preferences.</li>
        
      </ul>
      
    </div>
  );
}

export default About;
