// SignUp.jsx

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
    const [selectedRole, setSelectedRole] = useState('');
    const history = useHistory();

    const handleSignUp = () => {
        // Perform signup logic here...
        // Once signed up, redirect users based on the selected role
        switch (selectedRole) {
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
            {/* Signup form with role selection */}
            <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="firstAdmin">First Admin</option>
                {/* Add other role options here if needed */}
            </select>
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    );
};

export default SignUp;
