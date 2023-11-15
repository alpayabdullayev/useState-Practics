import React from 'react'
import { useState } from 'react'

const Bars = () => {
    const [active, setActive] = useState(false)

    const toggleActiveClass = () =>{
        setActive(true)
    }

  return (
    <div>
      <div className="hamburger">
        <button setActive onClick={toggleActiveClass}>bars</button>
      </div>
    </div>
  )
}

export default Bars
