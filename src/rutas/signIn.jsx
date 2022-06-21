import React from 'react'
import { GrMail } from 'react-icons/gr';
import {RiLockPasswordFill} from 'react-icons/ri';
import { Link } from 'react-router-dom';



const SignIn = () => {
  

  return (
    <div>
      <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
        <h1 className='text-2xl font-bold'> Sign In</h1>
        <form>
          <div className='my-4'>
            <label>E-mail</label>
            <div className='my-2 rounded-2xl w-full relative shadow-lg'>
              <input className='w-full p-2 bg-primary border border-input rounded-xl' type="email" placeholder='e-mail' />
              <GrMail className='absolute right-2 top-3 '/>
            </div>
          </div>
          <div className='my-4'>
            <label>Password</label>
            <div className='my-2 rounded-2xl w-full relative shadow-lg'>
            <input className='w-full p-2 bg-primary border border-input rounded-xl' type="password" placeholder='password'/>
            <RiLockPasswordFill className='absolute right-2 top-3 '/>
            </div>
          </div>
          <button className='my-2 p-3 w-full bg-button text-btnText rounded-xl font-bold bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 animate-text'> Sign In</button>
        </form>
        <p className='my-4'>Don't have an account? <Link to='/signup' className='text-gray-500'>Sign Up</Link></p>
      </div>
    </div>
  )
}

export default SignIn;