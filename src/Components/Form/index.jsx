import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [value,setValue] =useState("")
    const [valueName,setValueName] =useState("")
    const [valueLast,setValueLast] =useState("")
    const [h1Text,setH1Text] =useState("")

    const handleChange = (e) =>{
        console.log(e.target.value);
        setValue(e.target.value)
    }
    const handleChangeName = (e) =>{
        console.log(e.target.value);
        setValueName(e.target.value)
    }
    const handleChangeLast = (e) =>{
        console.log(e.target.value);
        setValueLast(e.target.value)
    }

    const handleSubmit =(e) =>{
        e.preventDefault()
        setH1Text(`${value} ${valueName} ${valueLast}`)
        setValue("")
        setValueName("")
        setValueLast("")
    }
  return (
    <>

        <form onSubmit={handleSubmit}>

        <input type="text" onChange={handleChangeName} placeholder='Name' value={valueName}/>
        <input type="text" onChange={handleChangeLast} placeholder='lastName' value={valueLast}/>
        <input type="text" onChange={handleChange} placeholder='email' value={value}/>
        <button type='submit'>Submit</button>
        </form>

        <h1>{h1Text}</h1>
    
    </>
  )
}

export default Form