import React from 'react'
import { useState } from 'react';
import { GrMail } from 'react-icons/gr';
import {RiLockPasswordFill} from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import {UserAuth} from '../contexto/contextAuth';



const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const  { signup } = UserAuth() || {};

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signup(email,password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }

  return (
    <div>
      <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
        <h1 className='text-2xl font-bold'>Sign Up</h1>
        {error ? <p className='bg-red-300 p-3 my-2'>{error}</p> : null}
        <form onSubmit={handleSubmit}>
          <div className='my-4'>
            <label>E-mail</label>
            <div className='my-2 w-full relative rounded-2xl shadow-lg'>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className='w-full p-2 bg-primary border border-input rounded-xl'
                type='email' placeholder='e-mail'
              />
              <GrMail className='absolute right-2 top-3 ' />
            </div>
          </div>
          <div className='my-4'>
            <label>Password</label>
            <div className='my-2 w-full relative rounded-2xl shadow-lg'>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className='w-full p-2 bg-primary border border-input rounded-xl'
                type='password' placeholder='password'
              />
              <RiLockPasswordFill className='absolute right-2 top-3 ' />
            </div>
          </div>
          <button className='w-full my-2 p-3 rounded-xl font-bold bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 animate-text'>
            Sign Up
          </button>
        </form>
        <p className='my-4'>
          Already have an account?{' '}
          <Link to='/signin' className='text-gray-500'>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;