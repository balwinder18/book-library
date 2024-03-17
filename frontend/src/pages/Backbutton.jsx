import React from 'react'
import { Link } from 'react-router-dom'

import { IoArrowBackOutline } from "react-icons/io5";

const Backbutton = () => {
  return (
    <>
      <div>
        <Link to="/"><IoArrowBackOutline/> </Link>
      </div>
    
    </>
  )
}

export default Backbutton