import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function R1() {
  

  const [validated, setValidated] = useState(false);
  const [fname, setfname]=useState("");
  const [lname, setlname]=useState("");
  const [email, setemail]=useState("");
  const [age, setage]=useState("");
  const [mnumber, setmnumber]=useState("");
  const [bgroup, setbgroup]=useState("");
  const handleSubmit = (event) => {
    const setdata={
        fname:fname,
        lname:lname,
        email:email,
        mnumber:mnumber,
        bgroup:bgroup,
    }
 axios.post(" http://localhost:8000/abc/register",setdata)
 .then(res=>{
    console.log(res.data)
 })
 .catch((err)=>{
    console.log(err);
 })
   

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            value={fname}
            onChange={(e)=>setfname(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            value={lname}
            onChange={(e)=>setlname(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e)=>setemail(e.target.value)}
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Age</Form.Label>
          <Form.Control type="Number" placeholder="Age" value={age}
            onChange={(e)=>setage(e.target.value)} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="Number" placeholder="Mobile Number"  value={mnumber}
            onChange={(e)=>setmnumber(e.target.value)}required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Blood Group</Form.Label>
          <Form.Control type="Number" placeholder="Blood Group" value={bgroup}
            onChange={(e)=>setbgroup(e.target.value)} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default R1;