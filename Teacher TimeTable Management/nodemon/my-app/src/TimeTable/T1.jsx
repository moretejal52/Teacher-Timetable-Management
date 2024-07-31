import Table from 'react-bootstrap/Table';
import axios from 'axios';



import React, { useEffect, useState } from 'react'

function T1() {
  const [data, setdata] =useState([])
  useEffect(()=>{
    axios.post("http://localhost:8000/abc/findall",setdata)
    .then(res=>{
         console.log(res.data);
         setdata(res.data.userdata)
       })
      .catch(err=>{
        console.log(err);
      })

  }, [])
  return (
  <>
   <Table striped="columns">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Mobile Number</th>
          <th>Blood Group</th>
        </tr>
      </thead>
      <tbody>
      
        <tr>
          <td>a.fullName</td>
          <td>a.department</td>
          <td>a.year</td>
          <td>a.division</td>
          <td>a.subject</td>
          <td>a.username</td>
          <td>a.password</td>
          <td>a.practicle</td>
        </tr>
       
      </tbody>
    </Table>
   
    </>
       
  )
}

export default T1
        