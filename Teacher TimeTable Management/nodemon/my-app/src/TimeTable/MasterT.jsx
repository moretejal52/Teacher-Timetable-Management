import React, { useState } from 'react';
import axios from 'axios';

import './MasterT.css';
const MasterT = () => {
 
  const [formData, setFormData] = useState({
    day: 'monday',
    teacherName: '',
    teacherUsername:'',
    division: '',
    year: '2',
    numberOfLectures: 1,
    lectures: [
      { startTime: '', endTime: '', subject: '' },
    ],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLectureChange = (index, field, value) => {
    const updatedLectures = [...formData.lectures];
    updatedLectures[index][field] = value;

    setFormData({
      ...formData,
      lectures: updatedLectures,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/abc/submit", formData)
    .then(res => {
      console.log(res.data);
      window.location.href = '/http://localhost:3000/Home';
    })
    .catch((err) => {
      console.log(err);
    });

    // Implement logic to store data (e.g., send to server or save in local state)
    console.log('Form Data:', formData);
  };

  // Generate options for the number of lectures
  const lectureOptions = [];
  for (let i = 1; i <= 5; i++) {
    lectureOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <div>
      <h2 style={{color:"white"}}>Master Timetable</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="day">Day:</label>
        <select 
          id="day"
          name="day"
          value={formData.day}
          onChange={handleChange}
        >
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wenesday">Wenesday</option>
          <option value="thusday">Thusday</option>
          <option value="Friday">Friday</option>
          <option value="saturday">Saturday</option>
          {/* Add options for other days */}
        </select>

        <label htmlFor="teacherName">Teacher Name:</label>
        <input
          type="text"
          id="teacherName"
          name="teacherName"
          value={formData.teacherName}
          onChange={handleChange}
          required
        />
        <label htmlFor="teacherUsername">Teacher Username:</label>
        <input
          type="text"
          id="teacherUsername"
          name="teacherUsername"
          value={formData.teacherUsername}
          onChange={handleChange}
          required
        />

        <label htmlFor="division">Division:</label>
        <input
          type="text"
          id="division"
          name="division"
          value={formData.division}
          onChange={handleChange}
          required
        />

        <label htmlFor="year">Year:</label>
        <select
          id="year"
          name="year"
          value={formData.year}
          onChange={handleChange}
        >
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <label htmlFor="numberOfLectures">Number of Lectures:</label>
        <select
          id="numberOfLectures"
          name="numberOfLectures"
          value={formData.numberOfLectures}
          onChange={(e) => {
            handleChange(e);
            setFormData({
              ...formData,
              lectures: Array.from({ length: parseInt(e.target.value, 10) }, () => ({
                startTime: '',
                endTime: '',
                subject: '',
              })),
            });
          }}
        >
          {lectureOptions}
        </select>

        {formData.lectures.map((lecture, index) => (
          <div key={index}>
            <label htmlFor={`startTime${index + 1}`}>Start Time {index + 1}:</label>
            <input
              type="time"
              id={`startTime${index + 1}`}
              name={`startTime${index + 1}`}
              value={lecture.startTime}
              onChange={(e) => handleLectureChange(index, 'startTime', e.target.value)}
              required
            />

            <label htmlFor={`endTime${index + 1}`}>End Time {index + 1}:</label>
            <input
              type="time"
              id={`endTime${index + 1}`}
              name={`endTime${index + 1}`}
              value={lecture.endTime}
              onChange={(e) => handleLectureChange(index, 'endTime', e.target.value)}
              required
            />

            <label htmlFor={`subject${index + 1}`}>Subject {index + 1}:</label>
            <input
              type="text"
              id={`subject${index + 1}`}
              name={`subject${index + 1}`}
              value={lecture.subject}
              onChange={(e) => handleLectureChange(index, 'subject', e.target.value)}
              required
            />
          </div>
        ))}

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default MasterT;
