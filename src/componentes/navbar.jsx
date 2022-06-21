import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './themeToggle';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';



const NavBar = () => {

  const [nav, setNav] = useState(false);
  
  function handleNav() {
    setNav(!nav)
  }

  return (
    <div className='px-10 flex sticky top-0 items-center justify-between h-20 font-bold bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 animate-text'>
        <Link to='/'>
            <h1 className='text-3xl   '>
                CriptoSpace
            </h1>
        </Link>
        <div className='hidden md:block'>
          <ThemeToggle />
        </div>
        <div className='hidden md:block'>
          <Link to='/signin' className='p-4'>Sign In</Link>
          <Link to='/signup' className=' px-5 py-2 ml-2 text-btnText'>
            <a className="relative inline-flex items-center px-8 py-3 overflow-hidden  rounded group  focus:outline-none " >
                 <span className="absolute left-0 transition-transform -translate-x-full group-hover:translate-x-4">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                 </span>

             <span className="  transition-all group-hover:ml-4"> Sign Up</span>
             </a>
           </Link>
        </div>
        <div onClick={handleNav} className='block md:hidden cursor-pointer z-10 '>
          { nav ?  <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
        </div>
        <div className={nav 
         ? ' md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10'
         : 'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300 '}>
          <ul className='w-full p-4'>
            <li className='border-b py-6'>
              <Link to='/'>
                Home
              </Link>
            </li>
            <li className='border-b py-6'>
              <Link to='/'>
                Account
              </Link>
            </li>
            <li className='border-b py-6'>
              <ThemeToggle />
            </li>
            </ul>
            
              <div className='flex flex-col w-full p-4'>
              <Link to='/signin'>
                <button className='w-full my-2 p-3  text-primary border border-secondary rounded-lg shadow-xl '>Sign In</button>
              </Link>
              <Link to='/signup'>
                <button className='w-full my-2 p-3  text-btnText rounded-lg bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 animate-text'>Sign Up</button>
              </Link>
              </div>
        </div>
    </div>
  )
}

export default NavBar;