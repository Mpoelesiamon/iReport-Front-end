  import React, { useState } from "react";
  import { Link, useNavigate } from 'react-router-dom';
  import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


  function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    function handleSubmit(e) {
      e.preventDefault();
      fetch ("http://127.0.0.1:5555/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            localStorage.setItem('jwt', user.access_token);
            navigate('/home');
            toast.success("Login successful!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          });
        } else {
          r.json().then((error) => {
            setError(error.message); 
            toast.error(error.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          });
        }
      }).catch(error => {
        setError("An error occurred. Please check your internet connection.");
        toast.error("An error occurred. Please check your internet connection.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    }

    
    return (
      <div className='flex justify-center my-10 mt-[120px] w-auto'>
        <div className='flex justify-center flex-col items-center w-auto h-[300px] border-2 border-[#e7e7e5] border-solid p-4 my-4 rounded-lg'>
          <div className='text-center my-5'>
            <h1 className='font-semibold'>Login</h1>
          </div>
          <div>
            <form className='flex justify-center items-center' action="">
              <label>Email</label>
              <input 
                className='border rounded mx-2'
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
          </div>
          <div>
            <button onClick={handleSubmit} className='bg-[#f7bf0c] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-700'>Submit</button>
          </div>
        </div>
      </div>
    );
  }

  export default Login;
