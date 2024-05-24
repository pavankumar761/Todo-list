import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import "./Navbar.css"

export default function Navbar() {
    
  return (
    <div>
         <h3>Todo</h3>
          <Link to='/login'>Loigin</Link>
          <Link to='/signup'>Sign Up</Link>
    </div>
  )
}
