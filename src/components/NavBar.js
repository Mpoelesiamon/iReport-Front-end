import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from "react-router-dom"

const NavBar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }

  return (
      <div className='bg-[#e7e7e5]'>
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
          <img className='h-[75px] w-[75px]' src="https://iili.io/JMy2FiF.png" alt="/" />
          <ul className='hidden md:flex cursor-pointer'>
            <NavLink to='/home'><li className='p-4'>Home</li></NavLink> 
            <NavLink to='/report'><li className='p-4'>Create Report</li></NavLink>  
            <NavLink to='/about'><li className='p-4'>About</li></NavLink>
            <NavLink to='/contact'><li className='p-4'>Contact</li></NavLink>
            <NavLink to='/signup'><li className='p-4 px-12 font-bold'>Sign Up/Sign In</li></NavLink>
            <NavLink to='/users'><li className='p-4'>My Profile</li></NavLink>
          </ul>
          <div onClick={handleNav} className='cursor-pointer block md:hidden'>
            {nav ?  <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}  />}
          </div>
          <div className={nav ? 'fixed left-0 top-0 z-50 w-[60%] h-full border-r border-r-gray-900 bg-[#fff] ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <img className='h-[75px] w-[75px]' src="https://iili.io/JMy2FiF.png" alt="/" />
            <ul className='pt-12 uppercase p-4 '>
              <NavLink to='/home'><li className='p-4 border-gray-700'>Home</li></NavLink>
              <NavLink to='/report'><li className='p-4 border-gray-700'>Create Report</li></NavLink>   
              <NavLink to='/about'><li className='p-4 border-gray-700'>About</li></NavLink> 
              <NavLink to='/contact'><li className='p-4 border-gray-700'>Contact</li></NavLink>
              <NavLink to='/signup'><li className='p-4 py-12 font-bold'>Sign Up/Sign In</li></NavLink>
              <NavLink to='/users'><li className='p-4 border-gray-700'>My Profile</li></NavLink>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default NavBar