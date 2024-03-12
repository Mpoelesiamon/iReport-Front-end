import React, { useState } from 'react';
import './FormStyles.css'; 
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa"; // Import Google and Apple icons

const LogIn = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <div className='wrapper'>
            <form action="">
                <h1>LogIn</h1>
                <div className="input-box">
                    <FaUser className='icon' />
                    <input type="text" placeholder='Username' required />
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

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="/">Forgot Password?</a>
                </div>

                <button type="submit">LogIn</button>

                {/* Add Google and Apple login options */}
                <div className="external-login-options">
                    <p>Or log in with:</p>
                    <div>
                        <FaGoogle className="google-icon" />
                        <FaFacebook className="facebook-icon" />
                        <FaTwitter className="twitter-icon" />
                    </div>
                </div>

                {/* <div className="register-link">
                    <p>Don't have an account? <a href="/signup">Register</a></p>
                </div> */}
            </form>
        </div>
    );
};

export default LogIn;
