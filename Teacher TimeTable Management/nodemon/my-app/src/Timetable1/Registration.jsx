// TeacherRegistrationForm.js

import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css'; // Import the CSS file for styling

const Registration = ({ onRegistrationComplete }) => {
  const [fullName, setFullName] = useState('');
  const [department, setDepartment] = useState('Computer');
  const [year, setYear] = useState('2');
  const [division, setDivision] = useState('A');
  const [subject, setSubject] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [practical, setPractical] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      fullName,
      department,
      year,
      division,
      subject,
      username,
      password,
      practical,
    };

    axios.post("http://localhost:8000/abc/register", formData)
      .then(res => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // Notify parent component that registration is complete
    if (onRegistrationComplete) {
      onRegistrationComplete();
    }
  };

  return (
    <center>
      <div>
        <h2>Teacher Registration Form</h2>

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
              {/* Add more department options as needed */}
            </select>
          </label>
          <br />

          <label className="form-label">
            Year:
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="form-input"
            >
              <option value="2">2 years</option>
              <option value="3">3 years</option>
              <option value="4">4 years</option>
            </select>
          </label>
          <br />

          <label className="form-label">
            Division:
            <select
              value={division}
              onChange={(e) => setDivision(e.target.value)}
              className="form-input"
            >
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
          </label>
          <br />

          <label className="form-label">
            Subject:
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
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
            Practical:
            <input
              type="text"
              value={practical}
              onChange={(e) => setPractical(e.target.value)}
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
    </center>
  );
};

export default Registration;
