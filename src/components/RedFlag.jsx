import React from 'react'
import { useRef, useState } from 'react'
import NavBar from './NavBar'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const RedFlag = () => {
    const inputRef = useRef(null);
    const [image, setImage] = useState("");

    const handleImageClick = () =>{
        inputRef.current.click();
    }
    
    const handleImageChange = (event) =>{
        const file = event.target.files[0];
        console.log(file);
        setImage(event.target.files[0])
    }

    const buttonMessage = () => {
        toast('Report sent')
    }

  return (
    <div className=''>
        <NavBar />
        <div className='flex justify-center items-center h-full'>
            <div className='w-[500px] shadow-xl flex flex-col p-4 my-4 rounded-[50px]'>
                <p className='text-center font-semibold'>Red Flag Report</p>
                <div className='flex justify-between mx-7'>
                    <div onClick={handleImageClick} className='bg-[#fff] h-[100px] w-[100px] mx-[30px] my-4 rounded-[5px] cursor-pointer'>
                        <div>
                            {image ? (
                            <img className='w-screen' src={URL.createObjectURL(image)} alt="/"/>
                            ) : (
                            <img className='' src="https://iili.io/JVksC6Q.png" alt="/" />
                            )}
                        </div>
                        <input type="file" ref={inputRef} onChange={handleImageChange} className='hidden'/>
                    </div>
                    <div className='bg-[#7dcdff] h-[100px] w-[100px] p-4 mx-[30px] my-4 rounded-[50px]'>
                    </div>
                </div>
                <textarea className='bg-[#e7e7e5] h-[100px] mt-5' placeholder='Add your report message here, be as detailed as possible'/>
                <button className='bg-[#2195f1] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:scale-105 duration-500' onClick={buttonMessage}>Send report</button>
            </div>
        </div>
    </div>
  )
}

export default RedFlag