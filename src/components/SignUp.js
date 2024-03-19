import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const SignUp = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmitClick = () => {
        fetch('http://127.0.0.1:5555/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (response.ok) {
                const token = localStorage.getItem('jwt');
                navigate('/verification', { state: { token } });
            } else {
                throw new Error('Signup failed');
            }
        })
        .catch(error => {
            console.error('Error during signup:', error);
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className='flex justify-center my-10 mt-[200px] w-auto'>
            <div className='flex justify-center flex-col items-center w-auto h-[400px] border-2 border-[#e7e7e5] border-solid p-4 my-4 rounded-lg'>
                <div className='text-center my-5'>
                    <h1 className='font-semibold'>Sign Up</h1>
                </div>
                <div>
                    <form className='flex flex-col justify-center items-center' action="">
                    <label>First Name</label>
                        <input 
                            className='border rounded mx-2 mt-1'
                            type="text"
                            name="firstName"
                            placeholder='Enter your first name'
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                        <label>Last Name</label>
                        <input
                            className='border rounded mx-2 mt-1'
                            type="text"
                            name="lastName"
                            placeholder='Enter your last name'
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                        <label>Email</label>
                        <input
                            className='border rounded mx-2 mt-1'
                            type="email"
                            name="email"
                            placeholder='Enter your email'
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                        <label>Password</label>
                        <input
                            className='border rounded mx-2 mt-1'
                            type="password"
                            name="password"
                            placeholder='Enter a password'
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </form>
                </div>
                <div>
                    <button 
                        onClick={handleSubmitClick} 
                        className='bg-[#f7bf0c] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-700'
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
