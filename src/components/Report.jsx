import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

const Report = () => {

    const navigate = useNavigate();

    const handleRedFlagClick = () => {
        navigate('/red-flag')
    }

    const handleIntervention = () => {
        navigate('/intervention')
    }

  return (
    <div>
        <NavBar />
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 mt-5'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 hover:scale-105 duration-300 rounded-[50px]'>
                <h2 className='2xl font-bold text-center py-8'>Red Flag Report🚩</h2>
                <div className='text-center'>
                    <p className='py-2 border-b mx-8 mt-8'>Have an incident linked to corruption?</p>
                    <p className='py-2 border-b mx-8'>Report it here</p>
                </div>
                <button className='bg-[#2195f1] w-[200px] rounded-md font-medium my-6 mx-auto py-3 z-30 text-white relative after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#f7bf0c] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all 
                after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700' onClick={handleRedFlagClick}>Red Flag report</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 hover:scale-105 duration-300 rounded-[50px]'>
                <h2 className='2xl font-bold text-center py-8'>Intervention Report👷</h2>
                <div className='text-center '>
                    <p className='py-2 border-b mx-8 mt-8'>Have a call for a government agency to intervene?</p>
                    <p className='py-2 border-b mx-8'>Report it here</p>
                </div>
                <button className='bg-[#2195f1] w-[200px] rounded-md font-medium my-6 mx-auto py-3 z-30 text-white relative after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#f7bf0c] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all 
                after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700' onClick={handleIntervention}>Intervention report</button>
            </div>
        </div>
    </div>
  )
}

export default Report
