import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import './FormStyles.css'; 
import { FaUser, FaLock, FaEnvelope, FaPhone, FaCalendarAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <div className='signup-wrapper'>
            <form action="">
                <h1>Sign Up</h1>
                <div className="input-box">
                    <FaUser className='icon' />
                    <input type="text" placeholder='Full Name' required />
                </div>
                <div className="input-box">
                    <FaEnvelope className='icon' />
                    <input type="email" placeholder='Email' required />
                </div>
                <div className="input-box">
                    <FaLock className='icon' />
                    <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder='Password' 
                        required 
                    />
                    <span className='password-toggle' onClick={togglePasswordVisibility}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                <div className="input-box">
                    <FaPhone className='icon' />
                    <input 
                        type="text" 
                        placeholder='Phone Number' 
                        required 
                        pattern="[+0-9]+" 
                        title="Please enter only numbers and the plus sign (+)" 
                    />
                </div>
                <div className="input-box">
                    <FaCalendarAlt className='icon' />
                    <input type="text" placeholder='Age' required />
                </div>

                <button type="submit">Sign Up</button>

                {/* Add Google and Apple login options */}
                <div className="external-login-options">
                    <p>Or Sign Up with:</p>
                    <div>
                        <FaGoogle className="google-icon" />
                        <FaFacebook className="facebook-icon" />
                        <FaTwitter className="twitter-icon"/>
                    </div>
                </div>

                {/* <div className="register-link">
                    <p>Already have an account? <Link to="/">LogIn</Link></p>
                </div> */}
            </form>
        </div>
    );
};

export default Signup;
