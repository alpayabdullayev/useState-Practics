import React from 'react'
import { useState } from 'react'
import Button from "../Button"

const Profile = () => {
    const [loggedInText , setLoggedInText] =useState ("Logged in")
  return (
   
    <>
    <p>{loggedInText}</p>
    <Button setLoggedInText={setLoggedInText} loggedInText={loggedInText}/>
    
    </>
  )
}

export default Profile