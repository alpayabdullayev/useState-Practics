import React from 'react'

const Button = ({setLoggedInText,loggedInText}) => {
   const handleClick = () =>{
    if (loggedInText === "log in") {
        setLoggedInText("log out")
    }
    else{
        setLoggedInText("log in")
    }


   }
  return (
    <>
    
    <button onClick={handleClick}>Toggle Login</button>
    
    </>
  )
}

export default Button