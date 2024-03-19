import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './NavBar';

const RedFlag = () => {
    const inputRef = useRef(null);
    const videoInputRef = useRef(null); // Ref for video input
    const [formData, setFormData] = useState({
        description: '',
        videos: null,
        image: null
    });

    const handleImageClick = () =>{
        inputRef.current.click();
    }

    const handleVideoClick = () => { // Function to trigger video input click
        videoInputRef.current.click();
    }
    
    const handleImageChange = (event) =>{
        const file = event.target.files[0];
        setFormData({
            ...formData,
            image: file
        });
    }

    const handleVideoChange = (event) => { // Function to handle video file change
        const file = event.target.files[0];
        setFormData({
            ...formData,
            videos: file
        });
    }

    const handleDescriptionChange = (event) => {
        setFormData({
            ...formData,
            description: event.target.value
        });
    }

    const handlepost = (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('description', formData.description);
        formDataToSend.append('image', formData.image);
        formDataToSend.append('videos', formData.videos); // Append video file
        
        fetch('http://127.0.0.1:5555/redflags', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
            body: formDataToSend
        })
        .then(r => r.json())
        .then(data => {
            if (data.message) {
                toast.success(data.message, {
                    position: "top-right",
                    autoClose: 2000,
                    onClose: () => {
                        setFormData({
                            description: '',
                            videos: null,
                            image: null
                        });
                    }
                });
            } else {
                toast.error(data.error, {
                    position: "top-right",
                    autoClose: 2000
                });
            }
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
            // Handle error here
        });
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
                                {formData.image ? (
                                    <img className='w-screen' src={URL.createObjectURL(formData.image)} alt="/"/>
                                ) : (
                                    <img className='' src="https://iili.io/JVksC6Q.png" alt="/" />
                                )}
                            </div>
                            <input type="file" ref={inputRef} onChange={handleImageChange} className='hidden'/>
                        </div>
                        <div onClick={handleVideoClick} className='bg-[#fff] h-[100px] w-[100px] mx-[30px] my-4 rounded-[5px] cursor-pointer'>
                            <div>
                                {formData.videos ? (
                                    <video className='w-screen' controls>
                                        <source src={URL.createObjectURL(formData.videos)} type="video/mp4"/>
                                    </video>
                                ) : (
                                    <img className='' src="https://iili.io/JXOMK3Q.md.png" alt="/" />
                                )}
                            </div>
                            <input type="file" ref={videoInputRef} onChange={handleVideoChange} className='hidden'/>
                        </div>
                    </div>
                    <textarea 
                        className='bg-[#e7e7e5] h-[100px] mt-5' 
                        placeholder='Add your report message here, be as detailed as possible'
                        value={formData.description}
                        onChange={handleDescriptionChange}
                    />
                    <button 
                        className='bg-[#2195f1] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:scale-105 duration-500' 
                        onClick={handlepost}
                    >
                        Send report
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RedFlag;
