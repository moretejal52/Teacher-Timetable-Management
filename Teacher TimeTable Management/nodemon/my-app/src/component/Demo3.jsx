import React, { useState } from 'react'

const Demo3 = () => {
    const [text, settext]=useState("Welcome")
  return (
    <div>
        <h3>{text}</h3>
      <input type="text" value={text} onChange={(e)=>{settext(e.target.value)}}/>
    </div>
  )
}

export default Demo3
