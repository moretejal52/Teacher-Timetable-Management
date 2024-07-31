// TeacherRegistrationForm.js

import { useState } from 'react';

import axios from 'axios';
import './Registration.css'; // Import the CSS file for styling
import MasterT from './MasterT';

const MasterTime = ({ onRegistrationComplete }) => {
  const [teacherName, setTeacherName] = useState('');
  const [teacherUsername, setTeacherUsername] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('2');
  const [numLectures, setNumLectures] = useState('');
  const [lectureDetails, setLectureDetails] = useState([]);

  const handleLectureChange = (index, field, value) => {
    const updatedLectureDetails = [...lectureDetails];
    updatedLectureDetails[index][field] = value;
    setLectureDetails(updatedLectureDetails);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const setdata = {
      teacherName: teacherName,
      teacherUsername: teacherUsername,
      day: day,
      year: year,
      lectures: lectureDetails,
    };

    axios.post("http://localhost:8000/abc/submit",setdata)
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

  const renderLectureFields = () => {
    return lectureDetails.map((lecture, index) => (
      <div key={index}>
        <label className="form-label">
          Lecture {index + 1} Time:
          <input
            type="time"
            value={lecture.startTime}
            onChange={(e) => handleLectureChange(index, 'startTime', e.target.value)}
            className="form-input"
            required
          />
        </label>
        <br />

        <label className="form-label">
          Lecture {index + 1} Subject:
          <input
            type="text"
            value={lecture.subject}
            onChange={(e) => handleLectureChange(index, 'subject', e.target.value)}
            className="form-input"
            required
          />
        </label>
        <br />
      </div>
    ));
  };

  const handleNumLecturesChange = (value) => {
    setNumLectures(value);

    // Initialize or reset the lectureDetails array based on the number of lectures
    const newLectureDetails = Array.from({ length: value }, () => ({
      startTime: '',
      subject: '',
    }));
    setLectureDetails(newLectureDetails);
  };

  return (
    <>
      <div>
        <h2>Teacher Registration Form</h2>
        
     
        <form onSubmit={handleSubmit}>
          <label className="form-label">
            Teacher Name:
            <input
              type="text"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              className="form-input"
              required
            />
          </label>
          <br />

          <label className="form-label">
            Teacher Username:
            <input
              type="text"
              value={teacherUsername}
              onChange={(e) => setTeacherUsername(e.target.value)}
              className="form-input"
              required
            />
          </label>
          <br />

          <label className="form-label">
            Day:
            <input
              type="text"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="form-input"
              required
            />
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

         :

        
          {/* ... Other fields ... */}

          <label className="form-label">
            Number of Lectures:
            <input
              type="number"
              value={numLectures}
              onChange={(e) => handleNumLecturesChange(e.target.value)}
              className="form-input"
              required
            />
          </label>
          <br />

          {/* Render dynamic time and subject fields */}
          {renderLectureFields()}

          <button type="submit" className="button">
            Register
          </button>

        </form>
      </div>
    </>
  );
};

export default MasterTime;
