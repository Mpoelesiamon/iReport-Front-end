// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router';

// const Verification = () => {
//   const navigate = useNavigate();
//   const [otp, setOTP] = useState('');
//   const [token, setToken] = useState('');

//   useEffect(() => {
//     const storedToken = localStorage.getItem('token');
//     setToken(storedToken);
//   }, []);

//   const handleVerifyClick = () => {
//       fetch('http://127.0.0.1:5555/verify', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ otp }),
//       })
//       .then(response => {
//           if (response.ok) {
//               navigate('/home');
//           } else {
//               throw new Error('Verification failed');
//           }
//       })
//       .catch(error => {
//           console.error('Error during verification:', error);
//       });
//   };

//   return (
//       <div className='flex justify-center items-center h-[100vh]'>
//           <div className='flex justify-center flex-col items-center w-auto h-[300px] border-2 border-[#e7e7e5] border-solid p-4 my-4 rounded-lg'>
//               <div className='text-center my-5'>
//                   <h1 className='font-semibold'>Verify your account</h1>
//               </div>
//               <div>
//                   <form className='flex justify-center items-center w-auto' action="">
//                       <input 
//                           className='border rounded mx-2'
//                           type="text"
//                           placeholder='Enter your OTP' 
//                           value={otp}
//                           onChange={(e) => setOTP(e.target.value)}
//                           required
//                       />
//                   </form>
//               </div>
//               <div>
//                   <button 
//                       onClick={handleVerifyClick} 
//                       className='bg-[#f7bf0c] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-700'
//                   >
//                       Verify
//                   </button>
//               </div>
//           </div>
//       </div>
//   );
// }

// export default Verification;
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

const Verification = () => {
  const location = useLocation();
  const token = location.state?.token; // Access token from location state
  const navigate = useNavigate();
  const [otp, setOTP] = useState('');
  const [verificationError, setVerificationError] = useState(null);

  // Fetch JWT token from local storage
  useEffect(() => {
    const storedToken = localStorage.getItem('jwt');
    if (storedToken) {
      console.log(token);
    }
  }, []);

  const handleVerifyClick = async () => {
    if (!token) {
      console.error('JWT token not found in location state');
      return;
    }
  
    try {
      const response = await fetch('http://127.0.0.1:5555/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify({ otp }),
      });
  
      if (response.ok) {
        navigate('/home');
      } else {
        const errorMessage = await response.text(); 
        console.error('Error during verification:', errorMessage);
        setVerificationError(errorMessage);
      }
    } catch (error) {
      console.error('Error during verification:', error);
      setVerificationError('Verification failed. Please try again.');
    }
  };

  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <div className='flex justify-center flex-col items-center w-auto h-[300px] border-2 border-[#e7e7e5] border-solid p-4 my-4 rounded-lg'>
        <div className='text-center my-5'>
          <h1 className='font-semibold'>Verify your account</h1>
        </div>
        <div>
          <form className='flex justify-center items-center w-auto' action="">
            <input 
              className='border rounded mx-2'
              type="text"
              placeholder='Enter your OTP' 
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              required
            />
          </form>
        </div>
        {verificationError && (
          <div className="text-red-500">{verificationError}</div>
        )}
        <div>
          <button 
            onClick={handleVerifyClick} 
            className='bg-[#f7bf0c] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-700'
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}

export default Verification;

