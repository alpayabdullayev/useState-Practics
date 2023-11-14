import React from 'react'
import { useState } from 'react'

const Count2 = () => {
    const [count, setCount] = useState(0)


    const handleClick = () =>{

        setCount(count+1)


    }
  return (
    <>
    
    <h1>{count}</h1>
    <button onClick={handleClick}>add+</button>
    
    </>
  )
}

export default Count2