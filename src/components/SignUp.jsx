import React from 'react'
import { FaGoogle, FaApple  } from 'react-icons/fa'

const SignUp = () => {
  return (
     <div className='flex justify-center my-10 mt-[200px] w-auto'>
        <div className='flex justify-center flex-col items-center w-auto h-[400px] border-2 border-[#e7e7e5] border-solid p-4 my-4 rounded-lg'>
            <div className='text-center my-5'>
                <h1 className='font-semibold'>Sign Up</h1>
            </div>
            <div>
                <form className='flex justify-center items-center' action="">
                    <label>First Name</label>
                    <input 
                    className='border rounded mx-2 mt-1'
                    type="text"
                    placeholder='Enter your first name' 
                    />
                </form>
                <form className='flex justify-center items-center' action="">
                    <label>Last Name</label>
                    <input 
                    className='border rounded mx-2 mt-1'
                    type="text"
                    placeholder='Enter your last name' 
                    />
                </form>
                <form className='flex justify-center items-center' action="">
                    <label>Email</label>
                    <input 
                    className='border rounded mx-2 mt-1'
                    type="email"
                    placeholder='Enter your email' 
                    required
                    />
                </form>
                <form className='flex justify-center items-center' action="">
                    <label>Password</label>
                    <input 
                    className='border rounded mx-2 mt-1'
                    type="password"
                    placeholder='Enter a password' 
                    required
                    />
                </form>
                <form className='flex justify-center items-center'>
                    <label>Confirm Password</label>
                    <input 
                    className='border rounded mx-2 mt-1'
                    type="password"
                    placeholder='Confirm your password' 
                    required
                    />
                </form>
            </div>
            <div>
                <button className='bg-[#f7bf0c] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-700'>Submit</button>
            </div>
            <div>
                <h3>or login with:</h3>
                <div className='flex justify-between'>
                    <FaGoogle className='cursor-pointer'/>
                    <FaApple className='cursor-pointer'/>
                </div>
            </div>
        </div>
     </div>
  )
}

export default SignUp
