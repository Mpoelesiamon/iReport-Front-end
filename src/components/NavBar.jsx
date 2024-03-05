import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

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
          <li className='p-4'>Home</li>
          <li className='p-4'>Create Report</li>   
          <li className='p-4'>About</li>
          <li className='p-4'>Contact</li>
          <li className='p-4 px-12 font-bold'>Sign Up/Sign In</li>
        </ul>
        <div onClick={handleNav} className='cursor-pointer block md:hidden'>
          {nav ?  <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}  />}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#fff] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <img className='h-[75px] w-[75px]' src="https://iili.io/JMy2FiF.png" alt="/" />
          <ul className='pt-12 uppercase p-4 '>
          <li className='p-4 border-gray-700'>Home</li>
          <li className='p-4 border-gray-700'>Create Report</li>   
          <li className='p-4 border-gray-700'>About</li>
          <li className='p-4 border-gray-700'>Contact</li>
          <li className='p-4 py-12 font-bold'>Sign Up/Sign In</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar
