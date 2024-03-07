import React from 'react'
import { ReactTyped } from 'react-typed'
import NavBar from './NavBar'

const Hero = () => {
  return (
    <div>
      <NavBar />
      <div className='text-white'>
          <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
              <p className='text-[#00df9a] font-bold p-2'></p>
              <h1 className='md:text-4xl sm:text-6xl text-4xl font-bold md:py-6 text-black'>Making Kenya a better place.</h1>
              <div className='flex justify-center items-center '>
                  <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 text-black'>Lorem ipsum for a</p>
                  <ReactTyped
                      className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#f7bf0c]'
                      strings={['input1', 'input2', 'input3']} 
                      typeSpeed={120} 
                      backspeed={130} 
                      loop
                  /> 
              </div>
              <p className='md:text-2xl text-xl text-gray-500'>Find an issue, create a report.</p>
              <button className='bg-[#2195f1] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-500'>Get Started</button>
          </div>
      </div>
    </div>
  )
}

export default Hero
