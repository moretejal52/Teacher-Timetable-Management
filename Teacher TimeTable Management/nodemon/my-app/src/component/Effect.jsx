import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function Effect() {
    const [data1, setdata]=useState([])
useEffect (()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos/")
    .then(res =>{
        console.log(res.data)
        setdata(res.data)})
        .catch(err => {
            console.log(err);
        })
    },[]
)
  return (
    <div>
      
      {
        data1.map((a)=>{
            return (
                <>
                <h1>{a.title}</h1>
                </>
            )
            }
        )
      }
    </div>
  )
}

export default Effect
