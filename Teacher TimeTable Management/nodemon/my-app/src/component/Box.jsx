
import { Button } from 'bootstrap';
import React, { useState } from 'react';

const Box =() =>{
  const [count, setcount]=useState(0)
  const [text, settext]=useState('Hello')
  const [display, setdisplay]=useState()
 
  return (
    <>
    <div>
      <button onClick={()=>{setcount(count+2)}}>iclick</button>
      
      <button  style ={{margin:"20px"}} onClick={()=>{setcount(count-2)}}>Dclick</button>
      <h2>{count}</h2>
    </div>
    <div> 
      <h1>{display}</h1>
      <input type="text" value={text} onChange={(e)=>{settext(e.target.value)}}/>
      <button onClick={()=>{setdisplay(text)}} >change text
      </button>
      
    </div>
    </>
  )
}

export default Box
