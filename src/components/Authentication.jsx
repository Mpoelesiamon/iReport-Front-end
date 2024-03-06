import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';

const Authentication = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
      {isSignUp ? <SignUp /> : <Login />}
      <div className='text-center my-4'>
        {isSignUp ? (
          <p>Already have an account? <span className='text-[#f7bf0c] cursor-pointer mt-0' onClick={handleToggle}>Login</span></p>
        ) : (
          <p>Don't have an account? <span className='text-[#f7bf0c] cursor-pointer' onClick={handleToggle}>Sign Up</span></p>
        )}
      </div>
    </div>
  );
};

export default Authentication;
