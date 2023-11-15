import React from 'react'
import { useState } from 'react'

const ToDo = () => {

    const [value,setValue] = useState("")
    const [todos, setTodos] = useState([]);

    const handleChange = (e) =>{
        setValue(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setTodos([...todos,value])
        setValue("")
    }

    const handleDelete = (e,text) => {
        const filterTodo = todos.filter((item) => item !== text)
        setTodos(filterTodo)
    }
    const handleEdit =(e) =>{
        console.log(e.target);
    }

  return (
    <>
        <input type="text" onChange={handleChange} value={value}/>
        <button type='submit' onClick={handleSubmit}>add</button>

        <ul>
        {todos.map((item,i) => (
            <>
            <li key={todos.id}>{item}</li>
            <button onClick={() => handleDelete(i,item)}>
              Delete
            </button>
            <button onClick={(e)=>{handleEdit(e)}}>Edit</button>
            </>
        ))}
      </ul>
    </>
  )
}

export default ToDo
