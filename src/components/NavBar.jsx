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
        <img className='h-[75px] w-[75px]' src="https://media.licdn.com/dms/image/C4E12AQHHKmKyZ0DoeQ/article-inline_image-shrink_1500_2232/0/1520192582166?e=1715212800&v=beta&t=sHXl0zr0BrfqE7ZSYprkr-MA_hcK-JQJtb5Dh49vyqc" alt="/" />
        <ul className='hidden md:flex cursor-pointer'>
          <li className='p-4'>Home</li>
          <li className='p-4'>Create Report</li>   
          <li className='p-4'>Admin</li>
          <li className='p-4'>SignUp/LogIn</li>
          <li className='p-4 px-12 font-bold'>User Profile</li>
        </ul>
        <div onClick={handleNav} className='cursor-pointer block md:hidden'>
          {nav ?  <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}  />}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#fff] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <img className='h-[75px] w-[75px]' src="https://media.licdn.com/dms/image/C4E12AQHHKmKyZ0DoeQ/article-inline_image-shrink_1500_2232/0/1520192582166?e=1715212800&v=beta&t=sHXl0zr0BrfqE7ZSYprkr-MA_hcK-JQJtb5Dh49vyqc" alt="/" />
          <ul className='pt-12 uppercase p-4 '>
          <li className='p-4 py-12 font-bold'>Home</li>
          <li className='p-4 py-12 font-bold'>Create Report</li>   
          <li className='p-4 py-12 font-bold'>Admin</li>
          <li className='p-4 border-gray-700'>SignUp/LogIn</li>
          <li className='p-4 py-12 font-bold'>User Profile</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar
