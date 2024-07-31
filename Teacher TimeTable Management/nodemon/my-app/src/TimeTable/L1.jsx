import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const L1 = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/abc/findall")
      .then(res => {
        console.log(res.data);
        setdata(res.data.userdata);
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
            <th>Lectures</th>
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
              <td>
                <ul>
                  {a.lectures.map((lecture, lectureIndex) => (
                    <li key={lectureIndex}>
                      Start Time: {lecture.startTime}, End Time: {lecture.endTime}, Subject: {lecture.subject}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default L1;
