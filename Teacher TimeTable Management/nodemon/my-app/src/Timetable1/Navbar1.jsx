import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navbar1() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#"><h3>TimelyTable</h3></Navbar.Brand>
        
      </Container>
      
      <Link to="/" style={{padding:"20px"}}>Home</Link>
      <Link to="/about" style={{padding:"20px"}}>About</Link>
      <Link to="/login" style={{padding:"20px"}}>Login</Link>
      <Link to="/registration" style={{padding:"20px"}}>Registration</Link>
      <Link to="/contact" style={{padding:"20px"}}>Contact</Link>
      <Link to="/timetable" style={{padding:"20px"}}>Timetable</Link>
      <Link to="/l1" style={{padding:"20px"}}>PersonalTimetable</Link>
      

      
      
      
    </Navbar>
  );
}

export default Navbar1;


