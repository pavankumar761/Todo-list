import React from 'react'

import './SignupPage.css'

export default function SignupPage() {
  return (
    <div className='signup'>
    <form className='form'>
          <div className='set name'>
              <p>Name</p>
                  <div className='in'><input type='text' placeholder='name'></input></div>
          </div>
              <div className='set email'>
              <p>Email</p>
                  <div className='in'><input type='email' placeholder='email'></input></div>
          </div>
          <div className='set pass'>
              <p>Password</p>
                  <div className='in'><input type='password' placeholder='password'></input></div>
          </div>
          <div className='set'>
              <p>Confirm Password</p>
                  <div className='in'><input type='password' placeholder='password'></input></div>
          </div>
              <div className='submit'><button type='submit'>Signup</button></div>
    </form> 
    </div>
  )
}
