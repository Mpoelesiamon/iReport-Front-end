// Login.jsx

import React from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();

    const handleLogin = () => {
        // Perform login logic here...
        // Assuming the user's role is determined after login
        const userRole = 'firstAdmin'; // Replace with actual role

        switch (userRole) {
            case 'firstAdmin':
                history.push('/first-admin-dashboard');
                break;
            default:
                history.push('/regular-user-dashboard');
                break;
        }
    };

    return (
        <div>
            {/* Login form */}
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
