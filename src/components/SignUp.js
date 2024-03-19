import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const SignUp = () => {
  const navigate = useNavigate();
  const [emailVerification, setEmailVerification] = useState('');
  const [verificationError, setVerificationError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    otp: ''
  });

  const handleSubmitClick = () => {
    fetch('http://127.0.0.1:5555/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(r=>r.json())

    .then(data=>{
        setEmailVerification(data)
    })
    .catch(error => {
      console.error('Error during signup:', error);
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleVerifyClick = (e) => {
    e.preventDefault()
    // if (!formData.otp) {
    //   console.error('OTP not provided');
    //   return;
    // }

    fetch('http://127.0.0.1:5555/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return response.text().then(errorMessage => {
          throw new Error(errorMessage);
        });
      }
    })
    .then(data => {
      localStorage.setItem('jwt', data.access_token);
      navigate('/home');
    })
    .catch(error => {
      console.error('Error during verification:', error.message);
      setVerificationError('Verification failed. Please try again.');
    });
  };

  if (emailVerification) {
    return (
      <div className="center-screen">
        <div className="email-verification-page">
          <div>{`Email sent to ${emailVerification.email}. Check your inbox for OTP.`}</div>
          <h2>Enter OTP</h2>
          <form onSubmit={handleVerifyClick}>
            <label htmlFor="otp">OTP:</label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={formData.otp}
              onChange={handleInputChange}
              required
            />
            <input
              type="hidden"
              id="email"
              name="email"
              value={emailVerification.email}
            />
            <button type="submit">Verify Me</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className='flex justify-center my-10 mt-[200px] w-auto'>
      <div className='flex justify-center flex-col items-center w-auto h-[400px] border-2 border-[#e7e7e5] border-solid p-4 my-4 rounded-lg'>
        <div className='text-center my-5'>
          <h1 className='font-semibold'>Sign Up</h1>
        </div>
        <div>
          <form className='flex flex-col justify-center items-center' action="">
            <label>Username</label>
            <input
             className='border rounded mx-2 mt-1'
            type='text'
            id='username'
            name='username'
            value={formData.username}
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
        {verificationError && <div>{verificationError}</div>}
      </div>
    </div>
  );
}

export default SignUp;
