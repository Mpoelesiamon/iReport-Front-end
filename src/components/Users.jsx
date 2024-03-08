import React, { useState } from 'react';
import NavBar from './NavBar'; // Import the NavBar component

const Users = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  // Function to handle profile picture change
  const handleProfilePictureChange = (event) => {
    const newProfilePicture = event.target.files[0];
    setProfilePicture(newProfilePicture);
  };

  return (
    <div className="flex flex-col items-center h-screen">
      {/* Use the NavBar component */}
      <NavBar />

      <h1 className='md:text-4xl sm:text-6xl text-4xl font-bold md:py-6 text-black'>User Profile</h1>

      {/* Profile Picture */}
      <div className="mt-8">
        <div style={{ width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto' }}>
          {profilePicture ? (
            <img src={URL.createObjectURL(profilePicture)} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <div style={{ width: '100%', height: '100%', backgroundColor: '#ccc' }}></div>
          )}
        </div>
        <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
      </div>

      {/* Buttons */}
      <div className="mt-8">
        <div className="flex flex-col items-center">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md mb-4">Your Profile</button>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md mb-4">Your Reports/Claims</button>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md">Account Settings</button>
        </div>
      </div>
    </div>
  );
};

export default Users;
