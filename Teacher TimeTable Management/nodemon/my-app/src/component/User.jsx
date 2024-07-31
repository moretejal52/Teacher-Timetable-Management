import axios from 'axios';
import React from 'react';
import { useState , useEffect} from 'react';

function User() {
    const [ data1, setdata]= useState([])
    useEffect (() =>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res =>{
            console.log(res.data)
            setdata(res.data)}
            )
            .catch (err => {
                console.log(err)
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

export default User
