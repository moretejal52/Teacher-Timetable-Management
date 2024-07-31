// TeacherRegistrationForm.js

import { useState } from 'react';

import axios from 'axios';
import './Registration.css'; // Import the CSS file for styling


const Registration = ({ onRegistrationComplete }) => {
  const [fullName, setFullName] = useState('');
  const [department, setDepartment] = useState('Computer');
  const [qualifiaction, setQualification] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSubmit = (event) => {
    const setdata={

    // Check if all fields are filled
    
        fullName:fullName,
        department:department,
        qualification:qualifiaction,
        username:username,
        password:password,
        mobileNumber:mobileNumber,
      };

      axios.post(" http://localhost:8000/abc/register",setdata)
       .then(res=>{
            console.log(res.data)
          })
         .catch((err)=>{
           console.log(err);
         })

      // Notify parent component that registration is complete
      
  };

  return (
    <>
   
    <div>
      <h2 style={{color:"whitesmoke"}}>Teacher Registration Form</h2>
      
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="form-input"
            required
          />
        </label>
        <br />

        <label className="form-label">
          Department:
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="form-input"
          >
            <option value="Computer">Computer</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Civil">Civil</option>
            <option value="Electrical">Electrical</option>
            <option value="IT">IT</option>
            <option value="Electronics and Telicommunication">Electronics and Telicommunication</option>
            {/* Add more department options as needed */}
          </select>
        </label>
        <br />

        
        

        <label className="form-label">
          Qualification:
          <input
            type="text"
            value={qualifiaction}
            onChange={(e) => setQualification(e.target.value)}
            className="form-input"
            required
          />
        </label>
        <br />

       
        <label className="form-label">
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
            required
          />
        </label>
        <br />
        <label className="form-label">
          Password
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            required
          />
        </label>
        <br />

        <label className="form-label">
          Mobile Number:
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="form-input"
            required
          />
        </label>
        <br />

        <button type="submit" className="button">
          Register
        </button>
       
      </form>
    </div>
    </>
  );
};

export default Registration;
