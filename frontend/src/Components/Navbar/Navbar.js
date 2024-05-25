import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import "./Navbar.css"

export default function Navbar() {
    
  return (
    <div className='nav'>
         <div className='left'>Todo</div>
         <div className='right'>
        <div><Link className='link logout' to='/'>Logout</Link></div>
        <div> <Link className='link login' to='/login'>Loigin</Link></div>
        <div><Link className='link signup' to='/signup'>Sign Up</Link></div>
          </div>
    </div>
  )
}
