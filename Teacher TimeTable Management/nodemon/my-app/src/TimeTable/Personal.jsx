import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const Personal = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const username = 'your-username';

    axios.get(`http://localhost:8000/abc/findOne/we`)
      .then(res => {
        console.log(res.data);
        // Assuming res.data is the expected structure
        setdata([res.data]); // Wrap the result in an array to have only one element
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Day</th>
            <th>Teacher name</th>
            <th>Teacher Username</th>
            <th>Division</th>
            <th>Year</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {data.map((a, index) => (
            <tr key={index}>
              <td>{a.day}</td>
              <td>{a.teacherName}</td>
              <td>{a.teacherUsername}</td>
              <td>{a.division}</td>
              <td>{a.year}</td>
              <td>{a.startTime}</td>
              <td>{a.endTime}</td>
              <td>{a.subject}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Personal;
