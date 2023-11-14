import React from 'react'
import { useState } from 'react'

const TextBox = () => {
    const [value, setValue] = useState("")

    const handleChange = (e)=>{
        console.log(e.target.value);
        setValue(e.target.value)
    }
  return (
    
    <>
    
    <input type="text" onInput={handleChange}/>
    <h1>gelen {value}</h1>
    
    </>
  )
}

export default TextBox